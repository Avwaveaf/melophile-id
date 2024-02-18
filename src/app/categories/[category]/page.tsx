import BlogCard from '@/components/blog-card';
import { getPostsMeta } from '@/lib/posts';
import Link from 'next/link';

export const revalidate = 86400;

type Props = {
  params: {
    category: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta();
  if (!posts) return [];

  // removing the duplicate with Set from all existing categories
  const categories = new Set(posts.map((post) => post.tags).flat());
  // Get the categories[] only from the posts
  return Array.from(categories).map((category) => ({ category }));
}

export function generateMetadata({ params: { category } }: Props) {
  return {
    title: `${category} related`,
  };
}

export default async function CategoryPostList({
  params: { category },
}: Props) {
  const posts = await getPostsMeta();

  // Decode the category parameter
  const decodedCategory = decodeURIComponent(category);

  if (!posts) {
    return (
      <div>
        <p>Sorry, There is no post available at the moment</p>
      </div>
    );
  }

  const categoryPosts = posts.filter((post) =>
    post.tags.some((tag) => tag.toLowerCase() === decodedCategory.toLowerCase())
  );

  if (!categoryPosts.length) {
    return (
      <div>
        <p>No Posts related to {decodedCategory}</p>
        <Link href='/blogs'>Back to Blogs</Link>
      </div>
    );
  }

  return (
    <section className='flex flex-col'>
      <h2>Related to {decodedCategory} :</h2>
      <ul className='blogs-ul'>
        {categoryPosts.map((post, index) => (
          <BlogCard
            post={post}
            key={post.id}
            isFirst={index === 0}
            readingTime={post.readingTime}
          />
        ))}
      </ul>
    </section>
  );
}
