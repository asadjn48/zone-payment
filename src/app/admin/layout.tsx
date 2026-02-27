import React from 'react';
import { AdminHeader } from '@/src/app/components/ui/layout/AdminHeader';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <AdminHeader />
      <main className="max-w-[1400px] mx-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}