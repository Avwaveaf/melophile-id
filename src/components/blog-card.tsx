import Image from 'next/image';
import { Card, CardTitle, CardDescription, CardContent } from './ui/card';
import Link from 'next/link';
import { Meta } from '../../types';
import getFormattedDate from '@/lib/getFormattedDate';
import { FaCircle, FaMusic } from 'react-icons/fa';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { BookAudio, GripVertical, LucideQrCode } from 'lucide-react';

type Props = {
  post: Meta;
  isFirst: boolean;
  readingTime: number;
};

export default function BlogCard({ post, isFirst, readingTime }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  const isTitleLong = title.length > 50;
  return (
    <li
      className={cn('relative cursor-pointer', isTitleLong && 'md:col-span-2')}
    >
      {/* only show on first item badge */}
      <BookAudio
        className='absolute -z-[1] top-2 text-yellow-400/40 right-2 '
        size={30}
      />

      <Link href={`/blogs/${id}`}>
        <Card className='min-h-[170px]  flex rounded-none bg-transparent hover:bg-primary/10 dark:hover:bg-primary-foreground/10  py-4 border-b-2 border-b-primary-foreground hover:border-b-primary'>
          {/* <Image
            src='https://picsum.photos/500'
            alt={''}
            className='rounded-t-lg mx-auto'
            width={500}
            height={500}
          /> */}
          <div className='w-full px-4 border-l text-lg gap-5 flex flex-col self-end'>
            <Badge className={cn('w-fit', isFirst ? 'block' : 'hidden')}>
              Latest
            </Badge>

            <h2 className=' text-xl'>{title}</h2>
            <div className='flex justify-between font-normal text-xs text-nowrap'>
              <p className='italic '>{formattedDate}</p>
              <p className='font-semibold text-primary'>
                {readingTime} min read {readingTime < 2 ? '⚡' : '📖'}
              </p>
            </div>
          </div>
        </Card>
      </Link>
    </li>
  );
}
