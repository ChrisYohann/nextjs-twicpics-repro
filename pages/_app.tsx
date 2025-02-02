import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { TwicInstall } from '@twicpics/components/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className={inter.className}>
      <TwicInstall
        domain={process.env.NEXT_PUBLIC_TWICPICS_DOMAIN}
        anticipation={0.5}
        step={100}
      />
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">TwicPics Demo</div>
            <div className="space-x-4">
              <Link
                href="/"
                className={`${
                  router.pathname === '/' ? 'text-blue-600' : 'text-gray-600'
                } hover:text-blue-800`}
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className={`${
                  router.pathname === '/gallery' ? 'text-blue-600' : 'text-gray-600'
                } hover:text-blue-800`}
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className={`${
                  router.pathname === '/about' ? 'text-blue-600' : 'text-gray-600'
                } hover:text-blue-800`}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-6 py-8">
        <Component {...pageProps} />
      </main>
    </div>
  );
}