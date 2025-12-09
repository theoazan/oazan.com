import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Oazan Technologies – Your Trusted IT Partner',
  description:
    'Reliable and affordable IT services for homes, offices, and businesses. End-to-end solutions including software development, IT infrastructure, AMC, CCTV & security, on-site support, and printer services.',
  keywords: [
    'Oazan Technologies',
    'Trusted IT Partner',
    'IT Services',
    'Software Development',
    'IT Infrastructure Design',
    'Annual Maintenance Contracts',
    'AMC Navi Mumbai',
    'CCTV and Security Solutions',
    'On-site IT Support',
    'Printer Service and Refilling',
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className} style={{ backgroundColor: '#FFF9F0' }}>
        {children}
      </body>
    </html>
  );
}
