import Link from 'next/link';
import { GiCircuitry } from 'react-icons/gi';
import { siteConfig } from '../../config/site';
import { Icons } from './icons';

export default function Footer() {
  return (
    <footer className='w-full border overflow-hidden relative text-sm bg-secondary  dark:bg-secondary py-8 px-6  md:px-28'>
      <GiCircuitry className='text-[350px] absolute top-[-20px] text-primary/10 left-0' />
      <div className='grid md:grid-cols-2'>
        <Link href='/' className='hidden  items-center space-x-2 md:flex '>
          <Icons.logo />
          <span className='hidden font-bold md:block '>{siteConfig.name}</span>
        </Link>
        {/* Mobile Logo */}
        <Link
          href='/'
          className=' items-center space-x-2 flex flex-col md:hidden gap-2 mb-4'
        >
          <Icons.logo />
          <span className=' font-bold '>{siteConfig.name}</span>
        </Link>
        <section className='flex flex-col gap-4'>
          <p>{siteConfig.description}</p>
          <small className='self-end'>@copyright avwaveaf 2024</small>
        </section>
      </div>
    </footer>
  );
}
