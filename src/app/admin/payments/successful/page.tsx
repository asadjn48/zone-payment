/* eslint-disable react-hooks/exhaustive-deps */
 /* eslint-disable @typescript-eslint/no-unused-vars */






// "use client";

// import React, { useState, useMemo } from 'react';
// import Link from 'next/link';
// import { Badge } from '@/src/app/components/ui/Badge';
// import { Button } from '@/src/app/components/ui/Button';

// export default function SuccessfulPaymentsPage() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [dateFilter, setDateFilter] = useState('All Time');
//   const [providerFilter, setProviderFilter] = useState('All Providers');
//   const [tierFilter, setTierFilter] = useState('All Tiers');
//   const [zoneFilter, setZoneFilter] = useState('All Zones');

//   const initialPayments = [
//     { id: '107423', date: '23 Apr 2024', time: '15:20', reg: 'ABC 2224', driver: 'Sarah Miller', provider: 'Manchester Airport', zone: 'Airport', tier: 'Manual', amount: 85.50 },
//     { id: '107384', date: '23 Apr 2024', time: '12:05', reg: 'EFG 1035', driver: 'Adam White', provider: 'London ULEZ', zone: 'ULEZ', tier: 'Auto-Pay', amount: 12.50 },
//     { id: '107356', date: '23 Apr 2024', time: '09:42', reg: 'CVS 2044', driver: 'Emma Rogers', provider: 'Birmingham CAZ', zone: 'CAZ', tier: 'Auto-Pay', amount: 120.00 },
//     { id: '107312', date: '22 Apr 2024', time: '14:15', reg: 'MW-6901', driver: 'James Wilson', provider: 'Heathrow Airport', zone: 'Airport', tier: 'Basic', amount: 15.00 },
//     { id: '107299', date: '22 Apr 2024', time: '08:30', reg: 'MQV-9101', driver: 'Laura Smith', provider: 'London ULEZ', zone: 'ULEZ', tier: 'Manual', amount: 12.50 },
//   ];

//   const filteredPayments = useMemo(() => {
//     return initialPayments.filter(p => {
//       const matchProvider = providerFilter === 'All Providers' || p.provider === providerFilter;
//       const matchTier = tierFilter === 'All Tiers' || p.tier === tierFilter;
//       const matchZone = zoneFilter === 'All Zones' || p.zone === zoneFilter;
      
//       const searchLower = searchTerm.toLowerCase();
//       const matchSearch = searchTerm === '' || 
//                           p.reg.toLowerCase().includes(searchLower) || 
//                           p.driver.toLowerCase().includes(searchLower) ||
//                           p.id.toLowerCase().includes(searchLower);

//       return matchProvider && matchTier && matchZone && matchSearch;
//     });
//   }, [searchTerm, providerFilter, tierFilter, zoneFilter, initialPayments]);

//   // Calculate dynamic totals
//   const totalAmount = filteredPayments.reduce((sum, p) => sum + p.amount, 0);

//   return (
//     <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
//       <h1 className="text-2xl font-bold text-foreground mb-2">Successful Payments</h1>

//       <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        
//         <div className="p-4 border-b border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-gray-50/50">
          
//           {/* Dynamic Metrics Card */}
//           <div className="bg-white border border-border rounded-lg p-4 flex flex-col justify-center min-w-72">
//             <div className="flex items-center gap-2 mb-2">
//               <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
//                 <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
//               </div>
//               <span className="text-2xl font-bold text-green-600">£{totalAmount.toLocaleString('en-GB', { minimumFractionDigits: 2 })}</span>
//               <span className="text-xs text-gray-400 mt-1">({filteredPayments.length} transactions)</span>
//             </div>
//           </div>

//           <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
//             <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
//               <option value="All Time">All Time</option>
//               <option value="Today">Today</option>
//               <option value="Last 7 Days">Last 7 Days</option>
//             </select>
//             <select value={providerFilter} onChange={(e) => setProviderFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
//               <option value="All Providers">All Providers</option>
//               <option value="Manchester Airport">Manchester Airport</option>
//               <option value="London ULEZ">London ULEZ</option>
//               <option value="Birmingham CAZ">Birmingham CAZ</option>
//               <option value="Heathrow Airport">Heathrow Airport</option>
//             </select>
//             <select value={tierFilter} onChange={(e) => setTierFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
//               <option value="All Tiers">All Tiers</option>
//               <option value="Basic">Basic</option>
//               <option value="Manual">Manual</option>
//               <option value="Auto-Pay">Auto-Pay</option>
//             </select>
//             <select value={zoneFilter} onChange={(e) => setZoneFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
//               <option value="All Zones">All Zones</option>
//               <option value="Airport">Airport</option>
//               <option value="ULEZ">ULEZ</option>
//               <option value="CAZ">CAZ</option>
//             </select>
            
//             <div className="relative grow max-w-xs">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                 <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
//               </span>
//               <input 
//                 type="text" 
//                 placeholder="Search ref, reg, or driver..." 
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-9 pr-4 py-2 border border-border rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary" 
//               />
//             </div>
            
//             <Button className="flex items-center gap-2 py-2 px-4 text-sm">
//                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
//                Export
//              </Button>
//           </div>
//         </div>

//         <div className="overflow-x-auto grow min-h-100">
//           <table className="w-full text-left text-sm whitespace-nowrap">
//             <thead className="bg-white text-gray-500 font-medium border-b border-border">
//               <tr>
//                 <th className="px-6 py-4">Date</th>
//                 <th className="px-6 py-4">Time</th>
//                 <th className="px-6 py-4">Reference</th>
//                 <th className="px-6 py-4">Vehicle Registration</th>
//                 <th className="px-6 py-4">Driver</th>
//                 <th className="px-6 py-4">Provider</th>
//                 <th className="px-6 py-4">Zone Type</th>
//                 <th className="px-6 py-4">Tier</th>
//                 <th className="px-6 py-4 text-right">Amount Paid</th>
//                 <th className="px-6 py-4 text-right">Action</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-border">
//               {filteredPayments.length === 0 ? (
//                 <tr><td colSpan={10} className="text-center py-10 text-gray-500">No successful payments match your filters.</td></tr>
//               ) : (
//                 filteredPayments.map((p) => (
//                   <tr key={p.id} className="hover:bg-gray-50/50 transition-colors text-gray-600">
//                     <td className="px-6 py-4">{p.date}</td>
//                     <td className="px-6 py-4">{p.time}</td>
//                     <td className="px-6 py-4 text-gray-400">{p.id}</td>
//                     <td className="px-6 py-4 font-bold text-foreground">{p.reg}</td>
//                     <td className="px-6 py-4">{p.driver}</td>
//                     <td className="px-6 py-4">{p.provider}</td>
//                     <td className="px-6 py-4">{p.zone}</td>
//                     <td className="px-6 py-4">
//                       <span className={`px-2 py-1 rounded text-xs font-medium ${p.tier === 'Auto-Pay' ? 'bg-green-100 text-green-700' : p.tier === 'Manual' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
//                         {p.tier}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-right font-bold text-foreground">£{p.amount.toFixed(2)}</td>
//                     <td className="px-6 py-4 text-right">
//                       <Link href={`/admin/payments/successful/${p.id}`} className="text-primary hover:underline font-medium text-xs">View Details</Link>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
        
//         {/* Pagination Footer */}
//         <div className="p-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 bg-white">
//           <div>Showing {filteredPayments.length > 0 ? 1 : 0} to {Math.min(10, filteredPayments.length)} of {filteredPayments.length} entries</div>
//           <div className="flex items-center gap-1">
//             <button className="px-3 py-1.5 border border-border rounded hover:bg-gray-50 transition text-gray-400 font-medium disabled:opacity-50">Previous</button>
//             <button className="px-3 py-1.5 rounded bg-primary text-white font-medium">1</button>
//             <button className="px-3 py-1.5 border border-border rounded hover:bg-gray-50 transition text-gray-600 font-medium">Next</button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }




















"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Badge } from '@/src/app/components/ui/Badge';
import { Button } from '@/src/app/components/ui/Button';
import { Pagination } from '@/src/app/components/ui/Pagination';
import { MetricCard } from '@/src/app/components/ui/MetricCard';
import { SearchBar } from '@/src/app/components/ui/SearchBar';

export default function SuccessfulPaymentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('All Time');
  const [providerFilter, setProviderFilter] = useState('All Providers');
  const [tierFilter, setTierFilter] = useState('All Tiers');
  const [zoneFilter, setZoneFilter] = useState('All Zones');

  const initialPayments = [
    { id: '107423', date: '23 Apr 2024', time: '15:20', reg: 'ABC 2224', driver: 'Sarah Miller', provider: 'Manchester Airport', zone: 'Airport', tier: 'Manual', amount: 85.50 },
    { id: '107384', date: '23 Apr 2024', time: '12:05', reg: 'EFG 1035', driver: 'Adam White', provider: 'London ULEZ', zone: 'ULEZ', tier: 'Auto-Pay', amount: 12.50 },
    { id: '107356', date: '23 Apr 2024', time: '09:42', reg: 'CVS 2044', driver: 'Emma Rogers', provider: 'Birmingham CAZ', zone: 'CAZ', tier: 'Auto-Pay', amount: 120.00 },
    { id: '107312', date: '22 Apr 2024', time: '14:15', reg: 'MW-6901', driver: 'James Wilson', provider: 'Heathrow Airport', zone: 'Airport', tier: 'Basic', amount: 15.00 },
    { id: '107299', date: '22 Apr 2024', time: '08:30', reg: 'MQV-9101', driver: 'Laura Smith', provider: 'London ULEZ', zone: 'ULEZ', tier: 'Manual', amount: 12.50 },
  ];

  const filteredPayments = useMemo(() => {
    return initialPayments.filter(p => {
      const matchProvider = providerFilter === 'All Providers' || p.provider === providerFilter;
      const matchTier = tierFilter === 'All Tiers' || p.tier === tierFilter;
      const matchZone = zoneFilter === 'All Zones' || p.zone === zoneFilter;
      
      const searchLower = searchTerm.toLowerCase();
      const matchSearch = searchTerm === '' || 
                          p.reg.toLowerCase().includes(searchLower) || 
                          p.driver.toLowerCase().includes(searchLower) ||
                          p.id.toLowerCase().includes(searchLower);

      return matchProvider && matchTier && matchZone && matchSearch;
    });
  }, [searchTerm, providerFilter, tierFilter, zoneFilter, initialPayments]);

  // Calculate dynamic totals for the Metric Card
  const totalAmount = filteredPayments.reduce((sum, p) => sum + p.amount, 0);
  
  // Calculate breakdown for the subtitle area
  const manualTotal = filteredPayments.filter(p => p.tier === 'Manual' || p.tier === 'Basic').reduce((sum, p) => sum + p.amount, 0);
  const manualCount = filteredPayments.filter(p => p.tier === 'Manual' || p.tier === 'Basic').length;
  
  const autoTotal = filteredPayments.filter(p => p.tier === 'Auto-Pay').reduce((sum, p) => sum + p.amount, 0);
  const autoCount = filteredPayments.filter(p => p.tier === 'Auto-Pay').length;

  return (
    <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      <h1 className="text-2xl font-bold text-foreground mb-2">Successful Payments</h1>

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        
        <div className="p-4 border-b border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-gray-50/50">
          
          {/* Dynamic Metrics Card using the reusable component */}
          <div className="min-w-[320px]">
            <MetricCard 
              variant="green"
              value={`£${totalAmount.toLocaleString('en-GB', { minimumFractionDigits: 2 })}`}
              label={`Successful Payments (${filteredPayments.length} transactions)`}
              icon={<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
              subtitle={
                <div className="flex justify-between text-xs text-gray-500 mt-3 pt-3 border-t border-border">
                  <span>Manual: <span className="font-semibold text-foreground">£{manualTotal.toLocaleString('en-GB', { minimumFractionDigits: 2 })}</span> <span className="text-gray-400">({manualCount})</span></span>
                  <span>Auto-Pay: <span className="font-semibold text-foreground">£{autoTotal.toLocaleString('en-GB', { minimumFractionDigits: 2 })}</span> <span className="text-gray-400">({autoCount})</span></span>
                </div>
              }
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Time">All Time</option>
              <option value="Today">Today</option>
              <option value="Last 7 Days">Last 7 Days</option>
            </select>
            <select value={providerFilter} onChange={(e) => setProviderFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Providers">All Providers</option>
              <option value="Manchester Airport">Manchester Airport</option>
              <option value="London ULEZ">London ULEZ</option>
              <option value="Birmingham CAZ">Birmingham CAZ</option>
              <option value="Heathrow Airport">Heathrow Airport</option>
            </select>
            <select value={tierFilter} onChange={(e) => setTierFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Tiers">All Tiers</option>
              <option value="Basic">Basic</option>
              <option value="Manual">Manual</option>
              <option value="Auto-Pay">Auto-Pay</option>
            </select>
            <select value={zoneFilter} onChange={(e) => setZoneFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Zones">All Zones</option>
              <option value="Airport">Airport</option>
              <option value="ULEZ">ULEZ</option>
              <option value="CAZ">CAZ</option>
            </select>
            
            {/* Reusable Search Bar */}
            <SearchBar 
              value={searchTerm} 
              onChange={setSearchTerm} 
              placeholder="Search ref, reg, or driver..." 
            />
            
            <Button className="flex items-center gap-2 py-2 px-4 text-sm bg-primary text-white hover:bg-primary-hover rounded-lg">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Export
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto grow min-h-100">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-white text-gray-500 font-medium border-b border-border">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Time</th>
                <th className="px-6 py-4">Reference</th>
                <th className="px-6 py-4">Vehicle Reg</th>
                <th className="px-6 py-4">Driver</th>
                <th className="px-6 py-4">Provider</th>
                <th className="px-6 py-4">Zone Type</th>
                <th className="px-6 py-4">Tier</th>
                <th className="px-6 py-4 text-right">Amount Paid</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredPayments.length === 0 ? (
                <tr><td colSpan={10} className="text-center py-10 text-gray-500">No successful payments match your filters.</td></tr>
              ) : (
                filteredPayments.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50/50 transition-colors text-gray-600">
                    <td className="px-6 py-4">{p.date}</td>
                    <td className="px-6 py-4">{p.time}</td>
                    <td className="px-6 py-4 text-gray-400">{p.id}</td>
                    <td className="px-6 py-4 font-bold text-foreground">{p.reg}</td>
                    <td className="px-6 py-4">{p.driver}</td>
                    <td className="px-6 py-4">{p.provider}</td>
                    <td className="px-6 py-4">{p.zone}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${p.tier === 'Auto-Pay' ? 'bg-green-100 text-green-700' : p.tier === 'Manual' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
                        {p.tier}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-foreground">£{p.amount.toFixed(2)}</td>
                    <td className="px-6 py-4 text-right">
                      <Link href={`/admin/payments/successful/${p.id}`} className="text-primary hover:underline font-medium text-xs">View Details</Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Reusable Pagination */}
        <Pagination totalItems={filteredPayments.length} />

      </div>
    </div>
  );
}