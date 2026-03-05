/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Badge } from '@/src/app/components/ui/Badge';
import { Button } from '@/src/app/components/ui/Button';

export default function FailedPaymentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('All Time');
  const [providerFilter, setProviderFilter] = useState('All Providers');
  const [tierFilter, setTierFilter] = useState('All Tiers');
  const [zoneFilter, setZoneFilter] = useState('All Zone Types');

  // Mock data matching the screenshot
  const initialFailed = [
    { id: '105668', date: '23 April 2024', reg: 'ABC 2226', driver: 'Adam White', provider: 'London ULEZ', zone: 'ULEZ', tier: 'Manual', amount: 1200.00, status: 'Expired - Payment Window Closed' },
    { id: '106578', date: '23 April 2024', reg: 'PQ12 OPS', driver: 'Cesar Gomez', provider: 'London ULEZ', zone: 'ULEZ', tier: 'Manual', amount: 125.00, status: 'Expired - Payment Window Closed' },
    { id: '108311', date: '23 April 2024', reg: 'EFG 1035', driver: 'Felicio Niller', provider: 'Birmingham CAZ', zone: 'Airport', tier: 'Manual', amount: 125.00, status: 'Expired - Payment Window Closed' },
    { id: '103245', date: '21 April 2024', reg: 'CVS 2044', driver: 'Nathan Cooper', provider: 'London ULEZ', zone: 'ULEZ', tier: 'Manual', amount: 1200.00, status: 'Expired - Payment Window Closed' },
    { id: '108110', date: '21 April 2024', reg: 'MW-6901', driver: 'Emma Rogers', provider: 'Coventry CAZ', zone: 'CAZ', tier: 'Manual', amount: 120.00, status: 'Expired - Payment Window Closed' },
    { id: '106993', date: '14 April 2024', reg: 'XYZ 4585', driver: 'Sarah Cooper', provider: 'Birmingham CAZ', zone: 'Airport', tier: 'Auto-Pay', amount: 1200.00, status: 'Expired - Payment Window Closed' },
  ];

  const filteredFailed = useMemo(() => {
    return initialFailed.filter(p => {
      const matchProvider = providerFilter === 'All Providers' || p.provider.includes(providerFilter);
      const matchTier = tierFilter === 'All Tiers' || p.tier === tierFilter;
      const matchZone = zoneFilter === 'All Zone Types' || p.zone.includes(zoneFilter);
      
      const searchLower = searchTerm.toLowerCase();
      const matchSearch = searchTerm === '' || 
                          p.reg.toLowerCase().includes(searchLower) || 
                          p.driver.toLowerCase().includes(searchLower) ||
                          p.id.toLowerCase().includes(searchLower);

      return matchProvider && matchTier && matchZone && matchSearch;
    });
  }, [searchTerm, providerFilter, tierFilter, zoneFilter, initialFailed]);

  // Calculate dynamic totals
  const totalAmount = filteredFailed.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      <h1 className="text-2xl font-bold text-foreground mb-2">Failed Payments</h1>

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        
        {/* Top Filter Bar */}
        <div className="p-4 border-b border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-red-50/30">
          
          {/* Dynamic Metrics Card (Red Theme) */}
          <div className="bg-white border border-border rounded-lg p-4 flex flex-col justify-center min-w-[320px] shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <span className="text-2xl font-bold text-red-600">£{totalAmount.toLocaleString('en-GB', { minimumFractionDigits: 2 })}</span>
              <span className="text-xs text-gray-400 mt-1">({filteredFailed.length} transactions)</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2 pt-2 border-t border-border">
              <span className="font-medium">Manual Expired: 4</span>
              <span className="font-medium text-purple-600">Auto Expired: 2</span>
            </div>
          </div>

          {/* Interactive Filters */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Time">All Time</option>
              <option value="Today">Today</option>
              <option value="Last 7 Days">Last 7 Days</option>
              <option value="Last 30 Days">Last 30 Days</option>
            </select>
            <select value={providerFilter} onChange={(e) => setProviderFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Providers">All Providers</option>
              <option value="London ULEZ">London ULEZ</option>
              <option value="Birmingham CAZ">Birmingham CAZ</option>
              <option value="Coventry CAZ">Coventry CAZ</option>
            </select>
            <select value={tierFilter} onChange={(e) => setTierFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Tiers">All Tiers</option>
              <option value="Basic">Basic</option>
              <option value="Manual">Manual</option>
              <option value="Auto-Pay">Auto-Pay</option>
            </select>
            <select value={zoneFilter} onChange={(e) => setZoneFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Zone Types">All Zone Types</option>
              <option value="Airport">Airport</option>
              <option value="ULEZ">ULEZ</option>
              <option value="CAZ">CAZ</option>
            </select>
            
            <div className="relative grow max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </span>
              <input 
                type="text" 
                placeholder="Search vehicle, driver, or ref..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-border rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary" 
              />
            </div>
            
            <Button className="flex items-center gap-2 py-2 px-4 text-sm">
               <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
               Export
             </Button>
          </div>
        </div>

        {/* Table Area */}
        <div className="overflow-x-auto grow min-h-100">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-white text-gray-500 font-medium border-b border-border">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Reference</th>
                <th className="px-6 py-4">Vehicle Registration</th>
                <th className="px-6 py-4">Driver</th>
                <th className="px-6 py-4">Provider</th>
                <th className="px-6 py-4">Zone Type</th>
                <th className="px-6 py-4">Tier</th>
                <th className="px-6 py-4 text-right">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredFailed.length === 0 ? (
                <tr><td colSpan={10} className="text-center py-10 text-gray-500">No failed payments match your filters.</td></tr>
              ) : (
                filteredFailed.map((p) => (
                  <tr key={p.id} className="hover:bg-red-50/40 transition-colors text-gray-600 bg-red-50/10">
                    <td className="px-6 py-4">{p.date}</td>
                    <td className="px-6 py-4 text-gray-500 font-mono">{p.id}</td>
                    <td className="px-6 py-4 font-bold text-foreground">{p.reg}</td>
                    <td className="px-6 py-4">{p.driver}</td>
                    <td className="px-6 py-4">{p.provider}</td>
                    <td className="px-6 py-4">{p.zone}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${p.tier === 'Auto-Pay' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}`}>
                        {p.tier}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-foreground">£{p.amount.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <span className="text-red-600 font-medium text-xs">{p.status}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {/* Navigational action only (no operations) */}
                      <Link href={`/admin/payments/failed/${p.id}`} className="text-primary hover:underline font-medium text-xs">View Details</Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 bg-white">
          <div>Showing {filteredFailed.length > 0 ? 1 : 0} to {Math.min(10, filteredFailed.length)} of {filteredFailed.length} entries</div>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1.5 border border-border rounded hover:bg-gray-50 transition text-gray-400 font-medium disabled:opacity-50">Previous</button>
            <button className="px-3 py-1.5 rounded bg-primary text-white font-medium">1</button>
            <button className="px-3 py-1.5 border border-border rounded hover:bg-gray-50 transition text-gray-600 font-medium">Next</button>
          </div>
        </div>

      </div>
    </div>
  );
}