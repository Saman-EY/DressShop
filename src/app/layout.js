'use client';
import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

export const metadata = {
  title: 'CLOTHING SHOP',
  description: 'This is a clothing shop'
};

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin]
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="flex flex-col min-h-screen">
        <CacheProvider value={cacheRtl}>
          <div className='flex-1'>
            <Header />
            {children}
          </div>
          <Footer />
        </CacheProvider>
      </body>
    </html>
  );
}
