"use client";

import React, { useState } from 'react';
import { Button } from '@/src/app/components/ui/Button';
import { Badge } from '@/src/app/components/ui/Badge';

export default function AdminPaymentsPage() {
  const [showFilters, setShowFilters] = useState(false);

  // Mock data matching the screenshot
  const payments = [
    { date: 'Feb 10, 2026 11:23 AM', reg: 'TR12 ABC', user: 'John Smith', fleet: 'City Logistics Ltd', zone: 'Manchester Airport', amount: '£35.00', status: 'Successful', time: '11:11 AM - 11:28 AM (17m)' },
    { date: 'Feb 10, 2026 10:15 AM', reg: 'LK67 ZXC', user: 'Emma Wilson', fleet: 'Independent', zone: 'Heathrow Drop-off', amount: '£12.50', status: 'Pending', time: '10:03 AM - 10:11 AM (8m)' },
    { date: 'Feb 10, 2026 09:07 AM', reg: 'PL08 WHK', user: 'Sarah Johnson', fleet: 'Express Delivery Co', zone: 'ULEZ', amount: '£5.00', status: 'At-Risk', time: '8:07 AM - 8:23 AM (16m)' },
    { date: 'Feb 09, 2026 04:20 PM', reg: 'MJ57 YXB', user: 'David Brown', fleet: 'City Logistics Ltd', zone: 'Heathrow Drop-off', amount: '£80.00', status: 'Successful', time: '12:20 PM - 12:35 PM (15m)' },
    { date: 'Feb 09, 2026 02:42 PM', reg: 'LK67 XZC', user: 'Michael Davis', fleet: 'Independent', zone: 'Gatwick Parking', amount: '£12.50', status: 'Successful', time: '9:42 AM - 9:50 AM (8m)' },
    { date: 'Feb 09, 2026 11:15 AM', reg: 'BD19 VXT', user: 'Emily White', fleet: 'Express Delivery Co', zone: 'Birmingham Clean Air', amount: '£45.00', status: 'Pending', time: '2:15 PM - 2:48 PM (33m)' },
  ];

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
      
      {/* Top Controls Row */}
      <div className="p-6 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex gap-3">
          <Button 
            className="text-gray-700 border border-border hover:bg-gray-50 flex items-center gap-2 py-2 text-sm font-medium"
            onClick={() => setShowFilters(!showFilters)}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
            Filters
          </Button>
          <Button className="text-black border border-border hover:bg-gray-50 flex items-center gap-2 py-2 text-sm font-medium">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            Export
          </Button>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Show</span>
          <input type="text" className="w-12 text-center border border-border rounded py-1 outline-none focus:ring-1 focus:ring-primary" placeholder="10" />
          <span>entries</span>
        </div>
      </div>

      {/* Expandable Filter Row */}
      {showFilters && (
        <div className="p-4 bg-gray-50 border-b border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-1"><label className="text-xs font-medium text-gray-500">Date Range</label><input type="text" className="border border-border rounded-lg px-3 py-2 text-sm" /></div>
          <div className="flex flex-col gap-1"><label className="text-xs font-medium text-gray-500">Status</label><input type="text" className="border border-border rounded-lg px-3 py-2 text-sm" /></div>
          <div className="flex flex-col gap-1"><label className="text-xs font-medium text-gray-500">Provider</label><input type="text" className="border border-border rounded-lg px-3 py-2 text-sm" /></div>
          <div className="flex flex-col gap-1"><label className="text-xs font-medium text-gray-500">Fleet</label><input type="text" className="border border-border rounded-lg px-3 py-2 text-sm" /></div>
        </div>
      )}

      {/* Table Area */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-white text-gray-500 text-xs font-bold uppercase tracking-wider border-b border-border">
            <tr>
              <th className="px-6 py-4">DATE</th>
              <th className="px-6 py-4">VEHICLE REG</th>
              <th className="px-6 py-4">USER</th>
              <th className="px-6 py-4">FLEET</th>
              <th className="px-6 py-4">PROVIDER / ZONE</th>
              <th className="px-6 py-4">AMOUNT</th>
              <th className="px-6 py-4">STATUS</th>
              <th className="px-6 py-4">TIME IN ZONE</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {payments.map((p, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors text-gray-600">
                <td className="px-6 py-4">{p.date}</td>
                <td className="px-6 py-4 font-semibold text-foreground">{p.reg}</td>
                <td className="px-6 py-4">{p.user}</td>
                <td className="px-6 py-4">{p.fleet}</td>
                <td className="px-6 py-4 font-medium text-foreground">{p.zone}</td>
                <td className="px-6 py-4">{p.amount}</td>
                <td className="px-6 py-4">
                  <Badge variant={p.status === 'Successful' ? 'success' : p.status === 'Pending' ? 'warning' : 'danger'}>{p.status}</Badge>
                </td>
                <td className="px-6 py-4 text-gray-500">{p.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <div>Showing 1 to 6 of 6 entries</div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border border-border rounded hover:bg-gray-50 transition text-gray-400">Previous</button>
          <span className="font-medium text-foreground">Page 1 of 1</span>
          <button className="px-3 py-1 border border-border rounded hover:bg-gray-50 transition text-gray-400">Next</button>
        </div>
      </div>

    </div>
  );
}