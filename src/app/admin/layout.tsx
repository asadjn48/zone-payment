import React from 'react';
import { AdminHeader } from '@/src/app/components/ui/layout/AdminHeader';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
      <main className="max-w-350 mx-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}