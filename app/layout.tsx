import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { openSans, montserrat } from './services/fonts';

export const metadata: Metadata = {
  title: 'Elite Enterprise Transformation Consulting Group',
  description: 'Professional consulting services specializing in Project Management, Program Management, Strategic Planning, Data & Analytics, Vendor Management, and AI Consulting.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.className} ${openSans.className}`}>
      {/* With Tailwind CSS v4, we can still use Next.js font variables for loading fonts */}
      {/* But we reference them in CSS using the new variable system */}
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
