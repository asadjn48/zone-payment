// /* eslint-disable react-hooks/exhaustive-deps */
// "use client";

// import React, { useState, useMemo } from 'react';
// import Link from 'next/link';
// import { Badge } from '@/src/app/components/ui/Badge';
// import { Button } from '@/src/app/components/ui/Button';

// export default function AdminFinesPage() {
//   // State for functional filtering and searching
//   const [searchTerm, setSearchTerm] = useState('');
//   const [providerFilter, setProviderFilter] = useState('All Providers');
//   const [tierFilter, setTierFilter] = useState('All Tiers');
//   const [statusFilter, setStatusFilter] = useState('All Statuses');
//   const [dateFilter, setDateFilter] = useState('All Time');

//   // Expanded Mock Data
//   const initialFines = [
//     { id: 'FN-1001', date: 'Apr 23, 2024 15:20 PM', reg: 'GIM 2346', driver: 'Nathan Cooper', provider: 'London ULEZ', type: 'ULEZ', amount: '£12.50', status: 'Pending', tier: 'Basic' },
//     { id: 'FN-1002', date: 'Apr 23, 2024 12:45 PM', reg: 'ABC 2224', driver: 'Sarah Miller', provider: 'Manchester Airport', type: 'Airport', amount: '£15.00', status: 'Paid', tier: 'Manual' },
//     { id: 'FN-10022', date: 'Apr 23, 2024 12:45 PM', reg: 'ABC 2224', driver: 'Asad Jn', provider: 'Manchester Airport', type: 'Airport', amount: '£15.00', status: 'Paid', tier: 'Manual' },
//     { id: 'FN-1003', date: 'Apr 23, 2024 12:45 PM', reg: 'GIM 2346', driver: 'James Wilson', provider: 'Manchester Airport', type: 'Airport', amount: '£15.00', status: 'Paid', tier: 'Manual' },
//     { id: 'FN-1004', date: 'Apr 23, 2024 12:45 AM', reg: 'MW-6901', driver: 'Emma Rogers', provider: 'London ULEZ', type: 'ULEZ', amount: '£15.00', status: 'Paid', tier: 'Manual' },
//     { id: 'FN-1005', date: 'Apr 23, 2024 12:45 AM', reg: 'CVS 2044', driver: 'Paul Johnson', provider: 'Birmingham CAZ', type: 'CAZ', amount: '£15.00', status: 'Expired', tier: 'Basic' },
//     { id: 'FN-1006', date: 'Apr 22, 2024 12:45 AM', reg: 'LMN-6901', driver: 'Laura Smith', provider: 'Birmingham CAZ', type: 'CAZ', amount: '£12.50', status: 'Expired', tier: 'Manual' },
//     { id: 'FN-1007', date: 'Apr 24, 2024 12:45 AM', reg: 'EFG 1035', driver: 'Adam White', provider: 'Heathrow Airport', type: 'Airport', amount: '£15.00', status: 'Paid', tier: 'Auto' },
//     { id: 'FN-1008', date: 'Apr 24, 2024 08:30 AM', reg: 'BD19 VXT', driver: 'Emily White', provider: 'Heathrow Airport', type: 'Airport', amount: '£25.00', status: 'Pending', tier: 'Manual' },
//   ];

//   // The functional filtering logic
//   const filteredFines = useMemo(() => {
//     return initialFines.filter(fine => {
//       const matchProvider = providerFilter === 'All Providers' || fine.provider.includes(providerFilter);
//       const matchTier = tierFilter === 'All Tiers' || fine.tier === tierFilter;
//       const matchStatus = statusFilter === 'All Statuses' || fine.status === statusFilter;
      
//       // Case-insensitive search across Registration OR Driver Name
//       const searchLower = searchTerm.toLowerCase();
//       const matchSearch = searchTerm === '' || 
//                           fine.reg.toLowerCase().includes(searchLower) || 
//                           fine.driver.toLowerCase().includes(searchLower);

//       return matchProvider && matchTier && matchStatus && matchSearch;
//     });
//   }, [searchTerm, providerFilter, tierFilter, statusFilter, initialFines]);

//   return (
//     <div className="flex flex-col gap-6 pb-10 mt-4">
//       <h1 className="text-2xl font-bold text-foreground mb-2">Fines Issued</h1>

//       {/* Main Container */}
//       <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        
//         {/* Top Filter Bar */}
//         <div className="p-4 border-b border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-gray-50/50">
          
//           {/* Left: Metric Card (Dynamically updates based on filter length) */}
//           <div className="bg-white border border-border rounded-lg p-4 flex flex-col justify-center min-w-50">
//             <div className="flex items-center gap-2 mb-2">
//               <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
//                 <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
//               </div>
//               <span className="text-2xl font-bold text-red-600">{filteredFines.length}</span>
//             </div>
//             <p className="text-sm text-gray-500">Total Fines Displayed</p>
//           </div>

//           {/* Right: Interactive Filters & Search */}
//           <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            
//             {/* Date Range Selector */}
//             <select 
//               value={dateFilter}
//               onChange={(e) => setDateFilter(e.target.value)}
//               className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary"
//             >
//               <option value="All Time">All Time</option>
//               <option value="Today">Today</option>
//               <option value="Last 7 Days">Last 7 Days</option>
//               <option value="Last 30 Days">Last 30 Days</option>
//             </select>

//             {/* Provider Filter */}
//             <select 
//               value={providerFilter}
//               onChange={(e) => setProviderFilter(e.target.value)}
//               className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary"
//             >
//               <option value="All Providers">All Providers</option>
//               <option value="London ULEZ">London ULEZ</option>
//               <option value="Manchester Airport">Manchester Airport</option>
//               <option value="Birmingham CAZ">Birmingham CAZ</option>
//               <option value="Heathrow Airport">Heathrow Airport</option>
//             </select>

//             {/* Tier Filter */}
//             <select 
//               value={tierFilter}
//               onChange={(e) => setTierFilter(e.target.value)}
//               className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary"
//             >
//               <option value="All Tiers">All Tiers</option>
//               <option value="Basic">Basic</option>
//               <option value="Manual">Manual</option>
//               <option value="Auto">Auto-Pay</option>
//             </select>

//             {/* Status Filter */}
//             <select 
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//               className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary"
//             >
//               <option value="All Statuses">All Statuses</option>
//               <option value="Pending">Pending</option>
//               <option value="Paid">Paid</option>
//               <option value="Expired">Expired</option>
//             </select>
            
//             {/* Functional Search Bar */}
//             <div className="relative grow max-w-xs">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                 <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
//               </span>
//               <input 
//                 type="text" 
//                 placeholder="Search vehicle or driver" 
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-9 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary" 
//               />
//             </div>
            
//             {/* Export Button */}
//             <Button className="flex items-center gap-2 py-2 px-4 text-sm bg-primary text-white hover:bg-primary-hover rounded-lg">
//               <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
//               Export
//             </Button>
//           </div>
//         </div>

//         {/* Table Area */}
//         <div className="overflow-x-auto grow min-h-100">
//           <table className="w-full text-left text-sm whitespace-nowrap">
//             <thead className="bg-white text-gray-500 font-medium border-b border-border">
//               <tr>
//                 <th className="px-6 py-4">Date & Time Issued</th>
//                 <th className="px-6 py-4">Vehicle Registration</th>
//                 <th className="px-6 py-4">Driver Name</th>
//                 <th className="px-6 py-4">Provider</th>
//                 <th className="px-6 py-4">Zone Type</th>
//                 <th className="px-6 py-4">Amount</th>
//                 <th className="px-6 py-4">Current Status</th>
//                 <th className="px-6 py-4">Tier</th>
//                 <th className="px-6 py-4 text-right">Action</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-border">
//               {filteredFines.length === 0 ? (
//                 <tr>
//                   <td colSpan={9} className="text-center py-10 text-gray-500">
//                     No fine events found matching your current filters.
//                   </td>
//                 </tr>
//               ) : (
//                 filteredFines.map((f) => (
//                   <tr key={f.id} className="hover:bg-gray-50/50 transition-colors text-gray-600">
//                     <td className="px-6 py-4">{f.date}</td>
//                     <td className="px-6 py-4 font-bold text-foreground">{f.reg}</td>
//                     <td className="px-6 py-4">{f.driver}</td>
//                     <td className="px-6 py-4">{f.provider}</td>
//                     <td className="px-6 py-4">{f.type}</td>
//                     <td className="px-6 py-4 font-medium text-foreground">{f.amount}</td>
//                     <td className="px-6 py-4">
//                       <Badge variant={f.status === 'Paid' ? 'success' : f.status === 'Pending' ? 'warning' : 'danger'}>{f.status}</Badge>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className={`px-2 py-1 rounded text-xs font-medium ${f.tier === 'Auto' ? 'bg-green-100 text-green-700' : f.tier === 'Manual' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
//                         {f.tier}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-right">
//                       <Link href={`/admin/fines/${f.id}`} className="text-primary hover:underline font-medium text-xs inline-flex items-center gap-1">
//                         View Details
//                       </Link>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination Footer */}
//         <div className="p-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 bg-white">
//           <div>Showing {filteredFines.length > 0 ? 1 : 0} to {Math.min(10, filteredFines.length)} of {filteredFines.length} entries</div>
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
























// "use client";

// import React, { useState, useMemo } from 'react';
// import Link from 'next/link';
// import { Badge } from '@/src/app/components/ui/Badge';
// import { Button } from '@/src/app/components/ui/Button';

// export default function AdminFinesPage() {
//   // State for functional filtering and searching
//   const [searchTerm, setSearchTerm] = useState('');
//   const [providerFilter, setProviderFilter] = useState('All Providers');
//   const [tierFilter, setTierFilter] = useState('All Tiers');
//   // We keep the status filter in the UI to match the design, 
//   // but it will effectively just show 'Expired' now.
//   const [statusFilter, setStatusFilter] = useState('All Statuses');
//   const [dateFilter, setDateFilter] = useState('All Time');

//   // Expanded Mock Data - ALL STATUSES FORCED TO "Expired"
//   const initialFines = [
//     { id: 'FN-1001', date: 'Apr 23, 2024 15:20 PM', reg: 'GIM 2346', driver: 'Nathan Cooper', provider: 'London ULEZ', type: 'ULEZ', amount: '£12.50', status: 'Expired', tier: 'Basic' },
//     { id: 'FN-1002', date: 'Apr 23, 2024 12:45 PM', reg: 'ABC 2224', driver: 'Sarah Miller', provider: 'Manchester Airport', type: 'Airport', amount: '£15.00', status: 'Expired', tier: 'Manual' },
//     { id: 'FN-10022', date: 'Apr 23, 2024 12:45 PM', reg: 'ABC 2224', driver: 'Asad Jn', provider: 'Manchester Airport', type: 'Airport', amount: '£15.00', status: 'Expired', tier: 'Manual' },
//     { id: 'FN-1003', date: 'Apr 23, 2024 12:45 PM', reg: 'GIM 2346', driver: 'James Wilson', provider: 'Manchester Airport', type: 'Airport', amount: '£15.00', status: 'Expired', tier: 'Manual' },
//     { id: 'FN-1004', date: 'Apr 23, 2024 12:45 AM', reg: 'MW-6901', driver: 'Emma Rogers', provider: 'London ULEZ', type: 'ULEZ', amount: '£15.00', status: 'Expired', tier: 'Manual' },
//     { id: 'FN-1005', date: 'Apr 23, 2024 12:45 AM', reg: 'CVS 2044', driver: 'Paul Johnson', provider: 'Birmingham CAZ', type: 'CAZ', amount: '£15.00', status: 'Expired', tier: 'Basic' },
//     { id: 'FN-1006', date: 'Apr 22, 2024 12:45 AM', reg: 'LMN-6901', driver: 'Laura Smith', provider: 'Birmingham CAZ', type: 'CAZ', amount: '£12.50', status: 'Expired', tier: 'Manual' },
//     { id: 'FN-1007', date: 'Apr 24, 2024 12:45 AM', reg: 'EFG 1035', driver: 'Adam White', provider: 'Heathrow Airport', type: 'Airport', amount: '£15.00', status: 'Expired', tier: 'Auto' },
//     { id: 'FN-1008', date: 'Apr 24, 2024 08:30 AM', reg: 'BD19 VXT', driver: 'Emily White', provider: 'Heathrow Airport', type: 'Airport', amount: '£25.00', status: 'Expired', tier: 'Manual' },
//   ];

//   // The functional filtering logic
//   const filteredFines = useMemo(() => {
//     return initialFines.filter(fine => {
//       const matchProvider = providerFilter === 'All Providers' || fine.provider.includes(providerFilter);
//       const matchTier = tierFilter === 'All Tiers' || fine.tier === tierFilter;
//       const matchStatus = statusFilter === 'All Statuses' || fine.status === statusFilter;
      
//       // Case-insensitive search across Registration OR Driver Name
//       const searchLower = searchTerm.toLowerCase();
//       const matchSearch = searchTerm === '' || 
//                           fine.reg.toLowerCase().includes(searchLower) || 
//                           fine.driver.toLowerCase().includes(searchLower);

//       return matchProvider && matchTier && matchStatus && matchSearch;
//     });
//   }, [searchTerm, providerFilter, tierFilter, statusFilter, initialFines]);

//   return (
//     <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
//       <h1 className="text-2xl font-bold text-foreground mb-2">Fines Issued</h1>

//       {/* Main Container */}
//       <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        
//         {/* Top Filter Bar */}
//         <div className="p-4 border-b border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-gray-50/50">
          
//           {/* Left: Metric Card (Dynamically updates based on filter length) */}
//           <div className="bg-white border border-border rounded-lg p-4 flex flex-col justify-center min-w-50">
//             <div className="flex items-center gap-2 mb-2">
//               <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
//                 <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
//               </div>
//               <span className="text-2xl font-bold text-red-600">{filteredFines.length}</span>
//             </div>
//             <p className="text-sm text-gray-500">Total Fines Displayed</p>
//           </div>

//           {/* Right: Interactive Filters & Search */}
//           <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            
//             {/* Date Range Selector */}
//             <select 
//               value={dateFilter}
//               onChange={(e) => setDateFilter(e.target.value)}
//               className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary"
//             >
//               <option value="All Time">All Time</option>
//               <option value="Today">Today</option>
//               <option value="Last 7 Days">Last 7 Days</option>
//               <option value="Last 30 Days">Last 30 Days</option>
//             </select>

//             {/* Provider Filter */}
//             <select 
//               value={providerFilter}
//               onChange={(e) => setProviderFilter(e.target.value)}
//               className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary"
//             >
//               <option value="All Providers">All Providers</option>
//               <option value="London ULEZ">London ULEZ</option>
//               <option value="Manchester Airport">Manchester Airport</option>
//               <option value="Birmingham CAZ">Birmingham CAZ</option>
//               <option value="Heathrow Airport">Heathrow Airport</option>
//             </select>

//             {/* Tier Filter */}
//             <select 
//               value={tierFilter}
//               onChange={(e) => setTierFilter(e.target.value)}
//               className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary"
//             >
//               <option value="All Tiers">All Tiers</option>
//               <option value="Basic">Basic</option>
//               <option value="Manual">Manual</option>
//               <option value="Auto">Auto-Pay</option>
//             </select>

//             {/* Status Filter */}
//             <select 
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//               className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary"
//             >
//               <option value="All Statuses">All Statuses</option>
//               <option value="Expired">Expired</option>
//             </select>
            
//             {/* Functional Search Bar */}
//             <div className="relative grow max-w-xs">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                 <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
//               </span>
//               <input 
//                 type="text" 
//                 placeholder="Search vehicle or driver" 
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-9 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary" 
//               />
//             </div>
            
//             {/* Export Button */}
//             <Button className="flex items-center gap-2 py-2 px-4 text-sm bg-primary text-white hover:bg-primary-hover rounded-lg">
//               <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
//               Export
//             </Button>
//           </div>
//         </div>

//         {/* Table Area */}
//         <div className="overflow-x-auto grow min-h-100">
//           <table className="w-full text-left text-sm whitespace-nowrap">
//             <thead className="bg-white text-gray-500 font-medium border-b border-border">
//               <tr>
//                 <th className="px-6 py-4">Date & Time Issued</th>
//                 <th className="px-6 py-4">Vehicle Reg</th>
//                 <th className="px-6 py-4">Driver Name</th>
//                 <th className="px-6 py-4">Provider</th>
//                 <th className="px-6 py-4">Zone Type</th>
//                 <th className="px-6 py-4">Amount</th>
//                 <th className="px-6 py-4">Current Status</th>
//                 <th className="px-6 py-4">Tier</th>
//                 <th className="px-6 py-4 text-right">Action</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-border">
//               {filteredFines.length === 0 ? (
//                 <tr>
//                   <td colSpan={9} className="text-center py-10 text-gray-500">
//                     No fine events found matching your current filters.
//                   </td>
//                 </tr>
//               ) : (
//                 filteredFines.map((f) => (
//                   <tr key={f.id} className="hover:bg-gray-50/50 transition-colors text-gray-600">
//                     <td className="px-6 py-4">{f.date}</td>
//                     <td className="px-6 py-4 font-bold text-foreground">{f.reg}</td>
//                     <td className="px-6 py-4">{f.driver}</td>
//                     <td className="px-6 py-4">{f.provider}</td>
//                     <td className="px-6 py-4">{f.type}</td>
//                     <td className="px-6 py-4 font-medium text-foreground">{f.amount}</td>
//                     <td className="px-6 py-4">
//                       {/* Fixed: Since all fines are Expired, this will always be the danger/red variant */}
//                       <Badge variant="danger">{f.status}</Badge>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className={`px-2 py-1 rounded text-xs font-medium ${f.tier === 'Auto' ? 'bg-green-100 text-green-700' : f.tier === 'Manual' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
//                         {f.tier}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-right">
//                       <Link href={`/admin/fines/${f.id}`} className="text-primary hover:underline font-medium text-xs inline-flex items-center gap-1">
//                         View Details
//                       </Link>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination Footer */}
//         <div className="p-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 bg-white">
//           <div>Showing {filteredFines.length > 0 ? 1 : 0} to {Math.min(10, filteredFines.length)} of {filteredFines.length} entries</div>
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
























/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Badge } from '@/src/app/components/ui/Badge';
import { Button } from '@/src/app/components/ui/Button';

export default function AdminFinesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [providerFilter, setProviderFilter] = useState('All Providers');
  const [tierFilter, setTierFilter] = useState('All Tiers');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [dateFilter, setDateFilter] = useState('All Time');

  // Expanded Mock Data - ALL STATUSES FORCED TO "Expired"
  const initialFines = [
    { id: 'FN-1001', date: 'Apr 23, 2024 15:20 PM', reg: 'GIM 2346', driver: 'Nathan Cooper', provider: 'London ULEZ', type: 'ULEZ', amount: '£12.50', status: 'Expired', tier: 'Basic' },
    { id: 'FN-1002', date: 'Apr 23, 2024 12:45 PM', reg: 'ABC 2224', driver: 'Sarah Miller', provider: 'Manchester Airport', type: 'Airport', amount: '£15.00', status: 'Expired', tier: 'Manual' },
    { id: 'FN-10022', date: 'Apr 23, 2024 12:45 PM', reg: 'ABC 2224', driver: 'Asad Jn', provider: 'Manchester Airport', type: 'Airport', amount: '£15.00', status: 'Expired', tier: 'Manual' },
    { id: 'FN-1003', date: 'Apr 23, 2024 12:45 PM', reg: 'GIM 2346', driver: 'James Wilson', provider: 'Manchester Airport', type: 'Airport', amount: '£15.00', status: 'Expired', tier: 'Manual' },
    { id: 'FN-1004', date: 'Apr 23, 2024 12:45 AM', reg: 'MW-6901', driver: 'Emma Rogers', provider: 'London ULEZ', type: 'ULEZ', amount: '£15.00', status: 'Expired', tier: 'Manual' },
    { id: 'FN-1005', date: 'Apr 23, 2024 12:45 AM', reg: 'CVS 2044', driver: 'Paul Johnson', provider: 'Birmingham CAZ', type: 'CAZ', amount: '£15.00', status: 'Expired', tier: 'Basic' },
    { id: 'FN-1006', date: 'Apr 22, 2024 12:45 AM', reg: 'LMN-6901', driver: 'Laura Smith', provider: 'Birmingham CAZ', type: 'CAZ', amount: '£12.50', status: 'Expired', tier: 'Manual' },
    { id: 'FN-1007', date: 'Apr 24, 2024 12:45 AM', reg: 'EFG 1035', driver: 'Adam White', provider: 'Heathrow Airport', type: 'Airport', amount: '£15.00', status: 'Expired', tier: 'Auto-Pay' },
    { id: 'FN-1008', date: 'Apr 24, 2024 08:30 AM', reg: 'BD19 VXT', driver: 'Emily White', provider: 'Heathrow Airport', type: 'Airport', amount: '£25.00', status: 'Expired', tier: 'Manual' },
  ];

  const filteredFines = useMemo(() => {
    return initialFines.filter(fine => {
      const matchProvider = providerFilter === 'All Providers' || fine.provider.includes(providerFilter);
      const matchTier = tierFilter === 'All Tiers' || fine.tier === tierFilter;
      const matchStatus = statusFilter === 'All Statuses' || fine.status === statusFilter;
      
      const searchLower = searchTerm.toLowerCase();
      const matchSearch = searchTerm === '' || 
                          fine.reg.toLowerCase().includes(searchLower) || 
                          fine.driver.toLowerCase().includes(searchLower);

      return matchProvider && matchTier && matchStatus && matchSearch;
    });
  }, [searchTerm, providerFilter, tierFilter, statusFilter, initialFines]);

  return (
    <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      <h1 className="text-2xl font-bold text-foreground mb-2">Fines Issued</h1>

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        
        {/* Top Filter Bar */}
        <div className="p-4 border-b border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-gray-50/50">
          
          <div className="bg-white border border-border rounded-lg p-4 flex flex-col justify-center min-w-50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <span className="text-2xl font-bold text-red-600">{filteredFines.length}</span>
            </div>
            <p className="text-sm text-gray-500">Total Fines Displayed</p>
          </div>

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
              <option value="Manchester Airport">Manchester Airport</option>
              <option value="Birmingham CAZ">Birmingham CAZ</option>
              <option value="Heathrow Airport">Heathrow Airport</option>
            </select>

            <select value={tierFilter} onChange={(e) => setTierFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Tiers">All Tiers</option>
              <option value="Basic">Basic</option>
              <option value="Manual">Manual</option>
              <option value="Auto-Pay">Auto-Pay</option>
            </select>

            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Statuses">All Statuses</option>
              <option value="Expired">Expired</option>
            </select>
            
            <div className="relative grow max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </span>
              <input 
                type="text" 
                placeholder="Search vehicle or driver" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary" 
              />
            </div>
            
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
                <th className="px-6 py-4">Date & Time Issued</th>
                <th className="px-6 py-4">Vehicle Reg</th>
                <th className="px-6 py-4">Driver Name</th>
                <th className="px-6 py-4">Provider</th>
                <th className="px-6 py-4">Zone Type</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Current Status</th>
                <th className="px-6 py-4">Tier</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredFines.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center py-10 text-gray-500">
                    No fine events found matching your current filters.
                  </td>
                </tr>
              ) : (
                filteredFines.map((f) => (
                  <tr key={f.id} className="hover:bg-gray-50/50 transition-colors text-gray-600">
                    <td className="px-6 py-4">{f.date}</td>
                    <td className="px-6 py-4 font-bold text-foreground">{f.reg}</td>
                    <td className="px-6 py-4">{f.driver}</td>
                    <td className="px-6 py-4">{f.provider}</td>
                    <td className="px-6 py-4">{f.type}</td>
                    <td className="px-6 py-4 font-medium text-foreground">{f.amount}</td>
                    <td className="px-6 py-4">
                      {/* Enforced Danger Badge for Expired Status */}
                      <Badge variant="danger">{f.status}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${f.tier === 'Auto-Pay' ? 'bg-green-100 text-green-700' : f.tier === 'Manual' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
                        {f.tier}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link href={`/admin/fines/${f.id}`} className="text-primary hover:underline font-medium text-xs inline-flex items-center gap-1">
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 bg-white">
          <div>Showing {filteredFines.length > 0 ? 1 : 0} to {Math.min(10, filteredFines.length)} of {filteredFines.length} entries</div>
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