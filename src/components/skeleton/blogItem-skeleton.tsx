import { Skeleton } from '../ui/skeleton';

export default function BlogItemSkeleton() {
  return (
    <li className='relative cursor-pointer md:col-span-2'>
      <Skeleton className='min-h-[170px]  flex rounded-none bg-transparent hover:bg-primary/10 dark:hover:bg-primary-foreground/10  py-4 border-b-2 border-b-primary-foreground hover:border-b-primary'>
        <div className='w-full px-4 border-l text-lg gap-5 flex flex-col self-end'>
          <Skeleton className='w-[70%] h-5'></Skeleton>
          <div className='flex justify-between font-normal text-xs text-nowrap'>
            <Skeleton className='italic w-[30%] h-4'></Skeleton>
            <Skeleton className='font-semibold text-primary w-[10%] h-4'></Skeleton>
          </div>
        </div>
      </Skeleton>
    </li>
  );
}
