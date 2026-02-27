"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const AdminHeader = () => {
  const pathname = usePathname();
  
  // Convert path to a readable title (e.g., "/admin/payments" -> "Payments")
  const getPageTitle = () => {
    if (pathname.includes('/users/')) return 'Users Details';
    if (pathname.includes('/users')) return 'Users';
    if (pathname.includes('/payments')) return 'Payments';
    if (pathname.includes('/notifications')) return 'Notifications';
    return 'Dashboard';
  };

  return (
    <header className="bg-primary text-white h-16 flex items-center px-4 md:px-8 shadow-sm">
      <div className="flex items-center w-full max-w-350 mx-auto justify-between">
        
        {/* Left Side: Logo & Dynamic Title */}
        <div className="flex items-center gap-4">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <div className="bg-white text-primary font-bold w-8 h-8 rounded flex items-center justify-center">
              F
            </div>
            <span className="font-semibold text-lg hidden sm:block">Fines Admin</span>
          </Link>
          <span className="text-white/60 hidden sm:block">|</span>
          <span className="font-bold text-lg">{getPageTitle()}</span>
        </div>

        {/* Right Side: Profile & Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/admin/notifications" className="relative hover:bg-white/10 p-2 rounded-full transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-primary"></span>
          </Link>
          
          <button className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-2 sm:pl-4 sm:border-l sm:border-white/20">
            <div className="w-8 h-8 rounded-full bg-blue-300 overflow-hidden border border-white/20"></div>
            <div className="hidden sm:flex flex-col text-sm">
              <span className="font-semibold leading-tight">Admin User</span>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};