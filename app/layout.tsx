import type { Metadata } from "next";
import localFont from 'next/font/local'
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./globals.css";

const worksans = localFont({
  src: [
    { path: './fonts/WorkSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/WorkSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/WorkSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/WorkSans-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-worksans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "NextJS - Blog: Latest Fashion, Travel, Tech, Business, Education Blogs",
  description: "NextJS - Blog: Is most popular media platform provide latest Stories, Fashion, LifeStyle, Travel, Tech, Beauty, Business Blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={worksans.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
