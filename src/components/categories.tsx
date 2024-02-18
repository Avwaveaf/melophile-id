import Link from 'next/link';
import { badgeVariants } from './ui/badge';
import { getPostsMeta } from '@/lib/posts';
import { Meta } from '../../types';
import { ScrollArea, ScrollBar } from './ui/scroll-area';
import { cn } from '@/lib/utils';

interface CategoriesProps {
  posts: Meta[] | undefined;
}

export default async function Categories({ posts }: CategoriesProps) {
  const uniqueTags = new Set<string>();

  posts?.forEach((post) => {
    post.tags.forEach((tag: string) => {
      uniqueTags.add(tag);
    });
  });

  // Convert back to Array and limit to 10 tags
  const tags: string[] = Array.from(uniqueTags).slice(0, 12);

  return (
    <div className='flex flex-wrap gap-2 py-4'>
      {tags.map((tag, index) => (
        <Link
          key={index}
          className={cn('truncate', badgeVariants())}
          href={`/categories/${encodeURIComponent(tag)}`}
        >
          <span className=''>{tag}</span>
        </Link>
      ))}
    </div>
  );
}

// Fetch data and provide it to the component
export async function getStaticProps() {
  const posts = await getPostsMeta();

  return {
    props: {
      posts,
    },
  };
}
