import React from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      
      {/* ================= DATE FILTER ================= */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-xl border border-border shadow-sm">
        <div className="flex items-center gap-2 text-gray-500 font-medium">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span className="text-sm">Date Filter:</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-border">Today</button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-border">Last 7 Days</button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg shadow-sm transition-colors">Last 30 Days</button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-border">Custom Range</button>
        </div>
      </div>

      {/* ================= TOP METRICS (5 Columns) ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        
        {/* Fines Issued */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-35">
          <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-3">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-600">342</h3>
            <p className="text-xs text-gray-500 mt-1">Fines Issued</p>
          </div>
        </div>

        {/* Total Active Users */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-35">
          <div className="w-10 h-10 rounded-lg bg-green-50 text-green-500 flex items-center justify-center mb-3">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">1,089</h3>
            <p className="text-xs text-gray-500 mt-1">Total Active Users</p>
          </div>
        </div>

        {/* Total Registered Vehicles */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-35">
          <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-500 flex items-center justify-center mb-3">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">2,341</h3>
            <p className="text-xs text-gray-500 mt-1">Total Registered Vehicles</p>
          </div>
        </div>

        {/* Revenue 1 (Green) */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col min-h-35">
          <div className="w-10 h-10 rounded-lg bg-green-50 text-green-500 flex items-center justify-center mb-3">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <div className="mb-3">
            <h3 className="text-xl font-bold text-green-600 flex items-end gap-1">
              £45,820.50 <span className="text-[10px] text-gray-400 font-normal mb-1">(0 transactions)</span>
            </h3>
          </div>
          <div className="space-y-1 mt-auto">
            <div className="flex justify-between text-xs text-gray-500">
              <span>Manual:</span>
              <span className="font-semibold text-foreground">£565.00 <span className="text-gray-400">(8)</span></span>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Auto-Pay:</span>
              <span className="font-semibold text-foreground">£900.00 <span className="text-gray-400">(12)</span></span>
            </div>
          </div>
        </div>

        {/* Revenue 2 (Orange) */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col min-h-35">
          <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-3">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div className="mb-3">
            <h3 className="text-xl font-bold text-orange-500 flex items-end gap-1">
              £45,820.50 <span className="text-[10px] text-gray-400 font-normal mb-1">(0 transactions)</span>
            </h3>
          </div>
          <div className="space-y-1 mt-auto">
            <div className="flex justify-between text-xs text-gray-500">
              <span>Manual:</span>
              <span className="font-semibold text-foreground">£565.00 <span className="text-gray-400">(8)</span></span>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Auto-Pay:</span>
              <span className="font-semibold text-foreground">£900.00 <span className="text-gray-400">(12)</span></span>
            </div>
          </div>
        </div>

      </div>

      {/* ================= PAYMENT STATUS OVERVIEW (3 Columns) ================= */}
      <div>
        <h2 className="text-lg font-bold text-foreground mb-4">Payment Status Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Failed / Expired Payments */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-red-600 flex items-end gap-1 mb-1">
              £45,820.50 <span className="text-xs text-gray-400 font-normal mb-1.5">(0 transactions)</span>
            </h3>
            <p className="text-xs text-gray-500 mb-6">Failed / Expired Payments</p>
            
            <div className="space-y-3 mt-auto border-t border-border pt-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Manual expired:</span>
                <span className="font-bold text-foreground">£270.00 <span className="text-gray-400 font-normal">(4)</span></span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Auto expired:</span>
                <span className="font-bold text-foreground">£185.00 <span className="text-gray-400 font-normal">(3)</span></span>
              </div>
            </div>
          </div>

          {/* Subscription Revenue */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center mb-4">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-600 flex items-end gap-1 mb-1">
              £45,820.50 <span className="text-xs text-gray-400 font-normal mb-1.5">(0 transactions)</span>
            </h3>
            <p className="text-xs text-gray-500 mb-6">Subscription Revenue</p>
            
            <div className="space-y-3 mt-auto border-t border-border pt-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Manual subscriptions:</span>
                <span className="font-bold text-foreground">£59.94</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Auto-Pay subscriptions:</span>
                <span className="font-bold text-foreground">£199.90</span>
              </div>
            </div>
          </div>

          {/* Auto-Pay Service Fee Revenue */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-500 flex items-center justify-center mb-4">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-yellow-500 flex items-end gap-1 mb-1">
              £45,820.50 <span className="text-xs text-gray-400 font-normal mb-1.5">(0 transactions)</span>
            </h3>
            <p className="text-xs text-gray-500 mb-6">Auto-Pay Service Fee Revenue</p>
            
            <div className="space-y-3 mt-auto border-t border-border pt-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Successful Auto-Pay transactions:</span>
                <span className="font-bold text-foreground">12</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Fee per transaction:</span>
                <span className="font-bold text-foreground">£0.30</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= QUICK ACTIONS ================= */}
      <div>
        <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Link href="/admin/payments" className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary group transition-colors flex items-center gap-4">
            <div className="text-gray-400 group-hover:text-primary transition-colors">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground">View Payments</h4>
              <p className="text-xs text-gray-500 mt-0.5">Monitor all payment transactions</p>
            </div>
          </Link>

          <Link href="/admin/users" className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary group transition-colors flex items-center gap-4">
            <div className="text-gray-400 group-hover:text-primary transition-colors">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground">Manage Users</h4>
              <p className="text-xs text-gray-500 mt-0.5">View and manage user accounts</p>
            </div>
          </Link>

          <Link href="/admin/fleets" className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary group transition-colors flex items-center gap-4">
            <div className="text-gray-400 group-hover:text-primary transition-colors">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground">Manage Fleets</h4>
              <p className="text-xs text-gray-500 mt-0.5">View fleet organizations</p>
            </div>
          </Link>

          <Link href="/admin/vehicles" className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary group transition-colors flex items-center gap-4">
            <div className="text-gray-400 group-hover:text-primary transition-colors">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground">View Vehicles</h4>
              <p className="text-xs text-gray-500 mt-0.5">Monitor registered vehicles</p>
            </div>
          </Link>

        </div>
      </div>

    </div>
  );
}