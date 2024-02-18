import BlogList from '@/components/blog-list';
import Categories from '@/components/categories';
import PaginationControls from '@/components/pagination-controls';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { getPostsMeta } from '@/lib/posts';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { GiCircuitry } from 'react-icons/gi';
import { SiMusicbrainz } from 'react-icons/si';
import { blogConfig } from '../../../config/blog';
import BlogsLoading from './loading';

export const metadata: Metadata = {
  title: blogConfig.name,
  description: blogConfig.description,
};

export default async function Blogs({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const posts = await getPostsMeta();

  const page = Number(searchParams['page']) || 1;
  const per_page = Number(searchParams['per_page']) || 10;

  const start = (page - 1) * per_page; // 0, 5, 10 ...
  const end = start + per_page; // 5, 10, 15 ...

  const entries = posts?.slice(start, end);

  return (
    <>
      <p
        aria-hidden='true'
        className='hidden 2xl:block absolute text-black/10 dark:text-white/10 font-bold transform rotate-90 left-[-5rem] top-[15rem] text-[6rem]'
      >
        Melophile
      </p>
      <div className='grid my-10 gap-5 md:grid-cols-[0.25fr_1fr] py-5 min-h-[280px] relative overflow-hidden'>
        <div className='flex justify-center items-center'>
          <SiMusicbrainz className='text-[9rem]' aria-hidden />
        </div>
        <div className='flex self-center flex-col gap-3 '>
          <GiCircuitry
            aria-hidden
            className='absolute hidden md:block top-0 right-0 text-[350px] text-primary/10 transform rotate-45'
          />

          <h1 className='text-[4rem] font-bold'>Blogs</h1>
          <p>Jelajahi Blogs kami & Temukan Arti di Lagu Favorit Mu!</p>
          <Link href='#blog-list' className={cn('max-w-fit', buttonVariants())}>
            Jelajahi sekarang!
          </Link>
        </div>
      </div>
      <div id='blog-list'>
        <Suspense fallback={<BlogsLoading />}>
          <Categories posts={posts} />
          <BlogList posts={entries} />
        </Suspense>
      </div>
      <Separator />
      <PaginationControls
        hasNextPage={end < (posts?.length || 0)}
        hasPrevPage={start > 0}
        totalPosts={posts?.length || 0}
        perPage={per_page}
        isFirstTime={searchParams['page'] == undefined}
      />
    </>
  );
}
