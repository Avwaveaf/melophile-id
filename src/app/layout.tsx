import Footer from '@/components/footer';
import { MainNav } from '@/components/main-nav';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import { landingConfig } from '../../config/landing';
import { siteConfig } from '../../config/site';
import './globals.css';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300', '400', '700'] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('antialiased ', ubuntu.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className=' mx-auto mb-10 max-w-screen-xl'>
            <MainNav items={landingConfig.mainNav} />

            <div className='flex flex-col min-h-screen px-4 md:px-24 lg:px-24'>
              {children}
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
