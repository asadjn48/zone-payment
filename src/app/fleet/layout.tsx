import React from 'react';
import Link from 'next/link';

export default function FleetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      
      {/* Top Navigation Bar (Header)
        Matches the blue bar in your screenshot 
      */}
      <header className="bg-primary text-white h-16 flex items-center px-4 md:px-8 shadow-sm">
        <div className="flex items-center w-full max-w-[1400px] mx-auto justify-between">
          
          {/* Left Side: Logo & Title */}
          <div className="flex items-center gap-4">
            <Link href="/fleet/dashboard" className="flex items-center gap-3">
              <div className="bg-white text-primary font-bold w-8 h-8 rounded flex items-center justify-center">
                F
              </div>
              <span className="font-semibold text-lg hidden sm:block">Fines Fleet</span>
            </Link>
            <span className="text-white/60 hidden sm:block">|</span>
            <span className="font-medium">Dashboard Overview</span>
          </div>

          {/* Right Side: Profile & Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="relative hover:bg-white/10 p-2 rounded-full transition-colors">
              {/* Simple notification bell SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              {/* Red notification dot */}
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-primary"></span>
            </button>
            
            <button className="hover:bg-white/10 p-2 rounded-full transition-colors">
              {/* Simple settings gear SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-3 pl-2 sm:pl-4 sm:border-l sm:border-white/20">
              {/* Placeholder for the avatar image */}
              <div className="w-8 h-8 rounded-full bg-blue-300 overflow-hidden border border-white/20"></div>
              <div className="hidden sm:flex flex-col text-sm">
                <span className="font-semibold leading-tight">City Logistics Ltd</span>
                <span className="text-white/70 text-xs">Fleet Owner</span>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Dashboard Content 
        The specific page contents (like dashboard/page.tsx) will be injected here
      */}
      <main className="max-w-[1400px] mx-auto p-4 md:p-8">
        {children}
      </main>
      
    </div>
  );
}