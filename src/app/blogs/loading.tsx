import BlogItemSkeleton from '@/components/skeleton/blogItem-skeleton';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { GiCircuitry } from 'react-icons/gi';
import { SiMusicbrainz } from 'react-icons/si';

export default function BlogsLoading() {
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
          <Button disabled className={cn('max-w-fit', buttonVariants())}>
            Jelajahi sekarang!
          </Button>
        </div>
      </div>
      <div id='blog-list'>
        <div className='w-full my-8'>
          <h2 className='text-xl font-bold mb-4 ml-4'>Latest Post ✨</h2>
          <ul className='blogs-ul'>
            {Array.from({ length: 5 }).map((_, index) => {
              return <BlogItemSkeleton key={index} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
