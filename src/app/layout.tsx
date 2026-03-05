import './globals.css';
import type { Metadata } from 'next';

// This handles the SEO and browser tab text
export const metadata: Metadata = {
  title: 'Fine Web App  | Car Management',
  description: 'Manage your fleet vehicles and automated zone payments seamlessly.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className="antialiased bg-background text-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}