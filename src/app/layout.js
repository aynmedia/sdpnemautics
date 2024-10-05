/** @format */
import Footer from '@/components/footer';
import './globals.css';
import Navbar from '@/components/navbar';

export const metadata = {
  title: 'SD Pneumatics',
  description:
    'SD Pneumatics is a leading provider of high-quality pneumatic solutions, specializing in air compressors, air dryers, and advanced industrial automation systems. Our commitment to innovation, reliability, and customer satisfaction ensures efficient and sustainable solutions for diverse industrial needs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='font-sans'>
        <Navbar />
        <div className='overflow-hidden'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
