'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect } from 'react';
import { buttonVariants } from './ui/button';

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPosts: number | string;
  perPage: number | string;
  isFirstTime: boolean;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  totalPosts,
  perPage,
  isFirstTime,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? '1';
  const per_page = searchParams.get('per_page') ?? '10';

  const totalPages = Math.ceil(+totalPosts / +perPage);

  useEffect(() => {
    // if it not first time scrolling behavior will disabled
    if (!isFirstTime && +page) {
      // Check if running on the client side
      const targetElement = document.getElementById('blog-list');
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, [isFirstTime, page]);

  return (
    <div className='flex my-3 justify-center items-center gap-2'>
      <button
        className={buttonVariants()}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/blogs/?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
        Previous
      </button>

      <div>
        {page} / {totalPages}
      </div>

      <button
        className={buttonVariants()}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/blogs/?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
