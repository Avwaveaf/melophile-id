import { badgeVariants } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import getFormattedDate from '@/lib/getFormattedDate';
import { getPostByName, getPostsMeta } from '@/lib/posts';
import 'highlight.js/styles/devibeans.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaBackward } from 'react-icons/fa';

export const revalidate = 86400;

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) return [];

  return posts.map((post) => {
    id: post.id;
  });
}

export async function generateMetadata({ params: { id } }: Props) {
  const post = await getPostByName(`${id}.mdx`);

  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: post.meta.title,
  };
}

export default async function Page({ params: { id } }: Props) {
  const post = await getPostByName(`${id}.mdx`);

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link
      key={i}
      href={`/categories/${tag}`}
      className={badgeVariants({ variant: 'default' })}
    >
      {tag}
    </Link>
  ));

  return (
    <main className='prose md:mx-auto min-w-full md:prose-md lg:prose-lg py-10 dark:prose-invert   md:px-8'>
      <h1>{meta.title}</h1>
      <section>
        <h3>Related Posts:</h3>
        <ScrollArea className=''>
          <div className='flex gap-2 text-nowrap'>{tags}</div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
      </section>
      <p className='italic'>{pubDate}</p>
      <article className=''>{content}</article>
      <p>
        <Link href='/blogs' className='flex items-center gap-4'>
          <FaBackward />
          Back to home
        </Link>
      </p>
    </main>
  );
}
