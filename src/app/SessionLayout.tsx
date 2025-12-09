"use client"; // Make sure this is a client component

import { SessionProvider } from 'next-auth/react'; // Import SessionProvider

interface SessionLayoutProps {
  children: React.ReactNode;
}

export default function SessionLayout({ children }: SessionLayoutProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
