import type { Metadata } from 'next';
import './globals.css';
import Background from '@/components/Background';

export const metadata: Metadata = {
  title: 'Mortif Brain | Building the Future',
  description: 'Premium software solutions for the modern world.',
  icons: {
    icon: '/MortifBrain-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Background />
        {children}
      </body>
    </html>
  );
}

