import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

export default function page() {
  return (
    <main className='grid gap-4 md:gap-0 grid-cols-1 md:grid-cols-[2fr_1fr]'>
      <section>
        <figure>
          <Image
            src='/images/site-preview.svg'
            width='500'
            height='500'
            alt='Laptop and phone opening Melophile illustration'
          />
          <figcaption className='border-l-2 border-l-primary px-2 italic'>
            Melophile on Mobile and phone image illustration
          </figcaption>
        </figure>
      </section>

      <section className='flex gap-4 flex-col  justify-center'>
        <h1 className='text-2xl font-semibold'>Kontributor</h1>
        <ul className='list-none flex flex-col gap-2'>
          <li className='p-4 border flex gap-4 items-center rounded-xl'>
            <Avatar>
              <AvatarImage src='https://avatars.githubusercontent.com/u/49422146?v=4' />
              <AvatarFallback>AF</AvatarFallback>
            </Avatar>
            <div className='flex flex-col'>
              <h2 className='font-bold'>Afif Fadillah </h2>
              <small className='italic'>Web Developer</small>
            </div>
          </li>
          <li className='p-4 border flex gap-4 items-center rounded-xl'>
            <Avatar>
              <AvatarImage src='https://media.licdn.com/dms/image/C5603AQH82PhJ271A-g/profile-displayphoto-shrink_800_800/0/1622996828191?e=1714003200&v=beta&t=racsvh-27M01vE1twwmQhIueESPAGtC0tU0VNzsAa7I' />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <div className='flex flex-col'>
              <h2 className='font-bold'>Salsabila Aljadema</h2>
              <small className='italic'>Content Writer</small>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
