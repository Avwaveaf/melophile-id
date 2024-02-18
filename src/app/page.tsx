import { Circle, CircleFadingPlus, Headphones } from 'lucide-react';
import { landingConfig } from '../../config/landing';
import { FaCircle } from 'react-icons/fa';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className='flex flex-col gap-6 relative overflow-hidden px-3'>
      {/* Hero section */}
      <div className='absolute  top-[-100px] right-[-200px]'>
        <Headphones
          className='text-primary/10 transform rotate-45'
          size={500}
        />
      </div>
      <article className='flex flex-col gap-6 py-20 px-5 sm:px-10 md:px-20 lg:px-32 text-2xl md:text-3xl lg:text-4xl text-center'>
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
          {landingConfig.heroSection.title}
        </h1>
        {/* Description */}
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>
          {landingConfig.heroSection.description}
        </p>
        <Link
          href='/blogs'
          className={cn(buttonVariants(), 'w-fit self-center font-semibold')}
        >
          Expore! ➡
        </Link>
      </article>

      {/* Features */}
      <article className='flex flex-col gap-5'>
        <h2 className='text-lg md:text-xl font-bold '>
          Ada apa aja sih di Melophile-id?
        </h2>
        <div className='grid grid-cols-1 gap-5 md:grid-cold-2 lg:grid-cols-3'>
          {landingConfig.features.map((feature, index) => {
            return (
              <section className='flex gap-3' key={index}>
                {/* decorative text */}
                <p className='bg-yellow-300/20 h-fit p-3 rounded-full text-3xl text-primary/20 dark:text-white/20 font-bold'>
                  0{index + 1}
                </p>
                <div>
                  <h2 className='font-semibold'>{feature.title}</h2>
                  <p>{feature.description}</p>
                </div>
              </section>
            );
          })}
        </div>
      </article>
    </main>
  );
}
