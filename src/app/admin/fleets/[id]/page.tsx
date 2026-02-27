/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/src/app/components/ui/Badge';

export default function FleetDetailsPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<'vehicles' | 'drivers' | 'payments' | 'subscription'>('vehicles');

  const fleet = {
    initials: 'CL',
    name: 'City Logistics Ltd',
    email: 'admin@citylogistics.com',
    phone: '+44 20 7123 4567',
    registered: 'Jan 10, 2025',
    totalVehicles: 24,
    totalDrivers: 18,
    totalPayments: '£12450.75',
    subStatus: 'Active'
  };

  return (
    <div className="flex flex-col gap-6 pb-10">
      
      {/* Back Link */}
      <Link href="/admin/fleets" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit mt-2">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Fleets
      </Link>

      {/* ================= 1. FLEET PROFILE HEADER ================= */}
      <div className="bg-card border border-border rounded-xl shadow-sm p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-blue-100 text-primary text-xl font-bold flex items-center justify-center shrink-0">
            {fleet.initials}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{fleet.name}</h1>
            <p className="text-sm text-gray-500 mt-1">{fleet.email}</p>
            <p className="text-sm text-gray-500">{fleet.phone}</p>
            <p className="text-sm text-gray-600 mt-2">
              Registered: <span className="font-semibold text-foreground">{fleet.registered}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-sm font-semibold w-full sm:w-auto justify-center">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Active Account
          </div>
          <button className="w-full sm:w-auto px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors">
            Deactivate Fleet
          </button>
        </div>
      </div>

      {/* ================= 2. METRICS CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-500 flex items-center justify-center shrink-0">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">{fleet.totalVehicles}</h3>
            <p className="text-xs text-gray-500">Total Vehicles</p>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">{fleet.totalDrivers}</h3>
            <p className="text-xs text-gray-500">Total Drivers</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-green-50 text-green-500 flex items-center justify-center shrink-0">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-600">{fleet.totalPayments}</h3>
            <p className="text-xs text-gray-500">Total Payments</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-green-50 text-green-500 flex items-center justify-center shrink-0">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">{fleet.subStatus}</h3>
            <p className="text-xs text-gray-500">Subscription</p>
          </div>
        </div>
      </div>

      {/* ================= 3. TABS NAVIGATION & CONTENT ================= */}
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mt-2">
        
        <div className="flex border-b border-border overflow-x-auto hide-scrollbar px-2">
          <button onClick={() => setActiveTab('vehicles')} className={`px-6 py-4 text-sm font-bold flex items-center gap-2 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'vehicles' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
            Vehicles
          </button>
          <button onClick={() => setActiveTab('drivers')} className={`px-6 py-4 text-sm font-bold flex items-center gap-2 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'drivers' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Drivers
          </button>
          <button onClick={() => setActiveTab('payments')} className={`px-6 py-4 text-sm font-bold flex items-center gap-2 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'payments' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Payments Summary
          </button>
          <button onClick={() => setActiveTab('subscription')} className={`px-6 py-4 text-sm font-bold flex items-center gap-2 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'subscription' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            Subscription Details
          </button>
        </div>

        <div className="p-0">
          
          {/* TAB 1: VEHICLES */}
          {activeTab === 'vehicles' && (
             <div className="overflow-x-auto">
             <table className="w-full text-left text-sm whitespace-nowrap">
               <thead className="bg-white text-gray-400 text-xs font-bold uppercase tracking-wider border-b border-border">
                 <tr>
                   <th className="px-6 py-4">REGISTRATION</th>
                   <th className="px-6 py-4">MAKE & MODEL</th>
                   <th className="px-6 py-4">ASSIGNED DRIVER</th>
                   <th className="px-6 py-4">TOTAL PAID</th>
                   <th className="px-6 py-4">STATUS</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-border">
                 {[
                   { reg: 'TR12 ABC', make: 'Ford Transit', driver: 'John Smith', paid: '£245.50', status: 'Active' },
                   { reg: 'MJ57 YXB', make: 'Renault Master', driver: 'David Brown', paid: '£412.25', status: 'Active' },
                   { reg: 'PL08 WHK', make: 'VW Transporter', driver: 'Sarah Johnson', paid: '£320.75', status: 'Active' },
                 ].map((v, i) => (
                   <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                     <td className="px-6 py-4 font-semibold text-foreground">{v.reg}</td>
                     <td className="px-6 py-4 text-gray-600">{v.make}</td>
                     <td className="px-6 py-4 text-gray-600">{v.driver}</td>
                     <td className="px-6 py-4 font-medium text-green-600">{v.paid}</td>
                     <td className="px-6 py-4"><Badge variant="success">{v.status}</Badge></td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
          )}

          {/* TAB 2: DRIVERS */}
          {activeTab === 'drivers' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-white text-gray-400 text-xs font-bold uppercase tracking-wider border-b border-border">
                  <tr>
                    <th className="px-6 py-4">NAME</th>
                    <th className="px-6 py-4">EMAIL</th>
                    <th className="px-6 py-4">WALLET BALANCE</th>
                    <th className="px-6 py-4">AUTO-PAY</th>
                    <th className="px-6 py-4">STATUS</th>
                    <th className="px-6 py-4 text-right">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { name: 'John Smith', email: 'john@citylogistics.com', wallet: '£125.50', autopay: 'On', status: 'Active' },
                    { name: 'David Brown', email: 'david@citylogistics.com', wallet: '£50.75', autopay: 'Off', status: 'Active' },
                    { name: 'Sarah Johnson', email: 'sarah@citylogistics.com', wallet: '£250.00', autopay: 'On', status: 'Deactivated' },
                  ].map((d, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-foreground">{d.name}</td>
                      <td className="px-6 py-4 text-gray-600">{d.email}</td>
                      <td className="px-6 py-4 font-medium text-foreground">{d.wallet}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${d.autopay === 'On' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>{d.autopay}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-500">{d.status}</td>
                      <td className="px-6 py-4 text-right space-x-3">
                        <button className={`text-xs font-semibold ${d.status === 'Active' ? 'text-red-500 hover:text-red-700' : 'text-green-600 hover:text-green-700'}`}>
                          {d.status === 'Active' ? 'Deactivate' : 'Activate'}
                        </button>
                        <button className="text-xs font-semibold text-gray-500 hover:text-gray-700 items-center gap-1 inline-flex">
                          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 3: PAYMENTS SUMMARY */}
          {activeTab === 'payments' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-white text-gray-400 text-xs font-bold uppercase tracking-wider border-b border-border">
                  <tr>
                    <th className="px-6 py-4">PERIOD</th>
                    <th className="px-6 py-4">SUCCESSFUL</th>
                    <th className="px-6 py-4">PENDING</th>
                    <th className="px-6 py-4">FAILED</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-foreground">February 2026</td>
                    <td className="px-6 py-4 font-medium text-green-600">£1240.50</td>
                    <td className="px-6 py-4 font-medium text-orange-500">£340.25</td>
                    <td className="px-6 py-4 font-medium text-red-600">£50.00</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-foreground">January 2026</td>
                    <td className="px-6 py-4 font-medium text-green-600">£2180.75</td>
                    <td className="px-6 py-4 font-medium text-orange-500">£120.00</td>
                    <td className="px-6 py-4 font-medium text-red-600">£0.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 4: SUBSCRIPTION DETAILS */}
          {activeTab === 'subscription' && (
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 mb-8">
                <div className="bg-gray-50 p-4 rounded-xl border border-border">
                  <p className="text-xs text-gray-500 mb-1">Plan</p>
                  <p className="font-bold text-foreground text-sm">Enterprise</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-border">
                  <p className="text-xs text-gray-500 mb-1">Status</p>
                  <p className="font-bold text-green-600 text-sm">Active</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-border">
                  <p className="text-xs text-gray-500 mb-1">Start Date</p>
                  <p className="font-bold text-foreground text-sm">Jan 10, 2025</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-border">
                  <p className="text-xs text-gray-500 mb-1">Next Billing</p>
                  <p className="font-bold text-foreground text-sm">Mar 10, 2026</p>
                </div>
              </div>
              
              {/* Warning Box */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800 flex items-center gap-2">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                Expired subscription will deactivate all fleet drivers automatically.
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}