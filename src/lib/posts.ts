import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { Pluggable } from "unified";
import { BlogPost, Meta } from "../../types";
import CustomImage from "../components/custom-image";
import Video from "../components/video";
import { getEstimatedReadTime } from "./getEstimatedReadTime";

type FileTree = {
  tree: [
    {
      path: string;
    }
  ];
};

export async function getPostByName(
  fileName: string
): Promise<BlogPost | undefined> {
  const res = await fetch(
    `https://raw.githubusercontent.com/avwaveaf/blog-posts/main/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  const rawMDX = await res.text();
  if (rawMDX === "404: Not Found") return undefined;

  // working with mdx files with next-mdx-remote [alt: contentlayer]
  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    tags: string[];
  }>({
    source: rawMDX,
    components: {
      Video,
      CustomImage,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutoLinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ] as Pluggable[],
      },
    },
  });

  // removing .mdx format for id
  const id = fileName.replace(/\.mdx$/, "");
  // getting calculated reading time
  const estimateReadTime = getEstimatedReadTime(rawMDX);

  const blogPostObj: BlogPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
      readingTime: estimateReadTime,
    },
    content,
  };

  return blogPostObj;
}

// GET EACH POST METADATA
export async function getPostsMeta(): Promise<Meta[] | undefined> {
  // CONNECTING TO GITHUB API
  const res = await fetch(
    "https://api.github.com/repos/avwaveaf/blog-posts/git/trees/main?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  const repoFileTree: FileTree = await res.json();
  const filesArray = repoFileTree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  // GETTING THE POST
  const posts: Meta[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
