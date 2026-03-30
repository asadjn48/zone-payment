/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */



// import React from 'react';
// import Link from 'next/link';

// export default function AdminDashboard() {
//   return (
//     <div className="flex flex-col gap-8 pb-10 mt-4 max-w-7xl">
      
//       {/* ================= DATE FILTER ================= */}
//       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-xl border border-border shadow-sm">
//         <div className="flex items-center gap-2 text-gray-500 font-medium">
//           <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
//           <span className="text-sm">Date Filter:</span>
//         </div>
//         <div className="flex flex-wrap items-center gap-2">
//           <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-border">Today</button>
//           <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-border">Last 7 Days</button>
//           <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg shadow-sm transition-colors">Last 30 Days</button>
//           <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-border">Custom Range</button>
//         </div>
//       </div>

//       {/* ================= SYSTEM OVERVIEW (Operational Metrics) ================= */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <Link href="/admin/fines" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-red-300 transition-colors flex flex-col justify-between min-h-35 group">
//           <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-3 group-hover:bg-red-100 transition-colors">
//             <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
//           </div>
//           <div>
//             <h3 className="text-3xl font-bold text-red-600">342</h3>
//             <p className="text-sm text-gray-500 mt-1">Fines Issued</p>
//           </div>
//         </Link>

//         <Link href="/admin/users" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-green-300 transition-colors flex flex-col justify-between min-h-35 group">
//           <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center mb-3 group-hover:bg-green-100 transition-colors">
//             <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
//           </div>
//           <div>
//             <h3 className="text-3xl font-bold text-foreground">1,089</h3>
//             <p className="text-sm text-gray-500 mt-1">Total Active Users</p>
//           </div>
//         </Link>

//         <Link href="/admin/vehicles" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-purple-300 transition-colors flex flex-col justify-between min-h-35 group">
//           <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:bg-purple-100 transition-colors">
//             <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
//           </div>
//           <div>
//             <h3 className="text-3xl font-bold text-foreground">2,341</h3>
//             <p className="text-sm text-gray-500 mt-1">Total Registered Vehicles</p>
//           </div>
//         </Link>
//       </div>

//       {/* ================= PAYMENT STATUS OVERVIEW ================= */}
//       <div>
//         <h2 className="text-lg font-bold text-foreground mb-4">Payment Status Overview</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
//           <Link href="/admin/payments/successful" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-green-300 transition-colors flex flex-col group">
//             <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
//               <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
//             </div>
//             <h3 className="text-2xl font-bold text-green-600 flex items-end gap-1 mb-1">
//               £123,421.50 <span className="text-xs text-gray-400 font-normal mb-1.5">(2,490 transactions)</span>
//             </h3>
//             <p className="text-sm text-gray-500 font-medium mt-1">Successful Payments</p>
//             <div className="flex justify-between text-xs text-gray-500 mt-4 pt-4 border-t border-border">
//               <span>Manual: £5,870.40</span>
//               <span>Auto-Pay: £117,550.10</span>
//             </div>
//           </Link>

//           <Link href="/admin/payments/pending" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-orange-300 transition-colors flex flex-col group">
//             <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
//               <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
//             </div>
//             <h3 className="text-2xl font-bold text-orange-500 flex items-end gap-1 mb-1">
//               £18,620.50 <span className="text-xs text-gray-400 font-normal mb-1.5">(86 transactions)</span>
//             </h3>
//             <p className="text-sm text-gray-500 font-medium mt-1">Pending Payments</p>
//             <div className="flex justify-between text-xs text-gray-500 mt-4 pt-4 border-t border-border">
//               <span>Manual: £5,870.40</span>
//               <span>Auto-Pay: £12,750.10</span>
//             </div>
//           </Link>

//           <Link href="/admin/payments/failed" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-red-300 transition-colors flex flex-col group">
//             <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
//               <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
//             </div>
//             <h3 className="text-2xl font-bold text-red-600 flex items-end gap-1 mb-1">
//               £45,820.50 <span className="text-xs text-gray-400 font-normal mb-1.5">(78 transactions)</span>
//             </h3>
//             <p className="text-sm text-gray-500 font-medium mt-1">Failed Payments</p>
//             <div className="flex justify-between text-xs text-gray-500 mt-4 pt-4 border-t border-border">
//               <span>Manual Expired: £2,770.00</span>
//               <span>Auto Expired: £185.00</span>
//             </div>
//           </Link>

//         </div>
//       </div>

//      {/* ================= AUTO-PAY PENDING (Live Operational Queue) ================= */}
//       <div>
//         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-4">
//           <h2 className="text-lg font-bold text-foreground">Auto-Pay Pending</h2>
//           <div className="flex items-center gap-3 text-sm">
//             <span className="text-gray-500">Ready to process: <span className="font-bold text-primary bg-blue-50 px-1.5 py-0.5 rounded">18</span></span>
//             <span className="text-gray-500">Waiting for top-up: <span className="font-bold text-primary bg-blue-50 px-1.5 py-0.5 rounded">10</span></span>
//             <span className="text-gray-500">Expiring soon: <span className="font-bold text-primary bg-blue-50 px-1.5 py-0.5 rounded">8</span></span>
//             <Link href="/admin/payments/autopay-pending" className="text-primary hover:underline font-medium ml-2">View All &gt;</Link>
//           </div>
//         </div>
        
//         <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-sm whitespace-nowrap">
//               <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-border">
//                 <tr>
//                   <th className="px-6 py-4">License Plate</th>
//                   <th className="px-6 py-4">Provider</th>
//                   <th className="px-6 py-4">Charge Amount</th>
//                   <th className="px-6 py-4">Wallet Balance</th>
//                   <th className="px-6 py-4">Balance Status</th>
//                   <th className="px-6 py-4 text-right">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-border">
//                 {[
//                   { id: 'AP-1023', reg: 'ABC 2224', provider: 'Manchester Airport', charge: '£22.00', balance: '£22.00', status: 'Sufficient' },
//                   { id: 'AP-1024', reg: 'GIM 2346', provider: 'London ULEZ', charge: '£12.50', balance: '£6.00', status: 'Insufficient' },
//                   { id: 'AP-1025', reg: 'LMN-6901', provider: 'Birmingham CAZ', charge: '£3.00', balance: '£3.00', status: 'Sufficient' },
//                   { id: 'AP-1026', reg: 'EFG 1035', provider: 'Heathrow Parking', charge: '£12.50', balance: '£8.00', status: 'Insufficient' },
//                 ].map((item, i) => (
//                   <tr key={i} className="hover:bg-gray-50/50 transition-colors">
//                     <td className="px-6 py-4 font-semibold text-foreground">{item.reg}</td>
//                     <td className="px-6 py-4 text-gray-600 flex items-center gap-2">
//                       <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary shrink-0">
//                         <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
//                       </div>
//                       {item.provider}
//                     </td>
//                     <td className="px-6 py-4 font-medium text-foreground">{item.charge}</td>
//                     <td className="px-6 py-4 font-medium text-foreground">{item.balance}</td>
//                     <td className="px-6 py-4">
//                       <span className={`px-2 py-1 rounded text-xs font-medium border ${item.status === 'Sufficient' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
//                         {item.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-right">
//                       {item.status === 'Sufficient' ? (
//                         <Link 
//                           href={`/admin/payments/autopay-pending/${item.id}`}
//                           className="px-3 py-1.5 inline-block bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded shadow-sm transition-colors"
//                         >
//                           Process
//                         </Link>
//                       ) : (
//                         <button className="px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-700 text-xs font-bold rounded transition-colors">Notify</button>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* ================= QUICK ACTIONS ================= */}
//       <div>
//         <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-7xl">
          
//           <Link href="/admin/users" className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary group transition-colors flex items-center gap-4">
//             <div className="text-gray-400 group-hover:text-primary transition-colors">
//               <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
//             </div>
//             <div>
//               <h4 className="font-semibold text-sm text-foreground">Manage Users</h4>
//               <p className="text-xs text-gray-500 mt-0.5">View and manage user accounts</p>
//             </div>
//           </Link>

//           <Link href="/admin/fleets" className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary group transition-colors flex items-center gap-4">
//             <div className="text-gray-400 group-hover:text-primary transition-colors">
//               <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
//             </div>
//             <div>
//               <h4 className="font-semibold text-sm text-foreground">Manage Fleets</h4>
//               <p className="text-xs text-gray-500 mt-0.5">View fleet organizations</p>
//             </div>
//           </Link>

//         </div>
//       </div>

//     </div>
//   );
// }































// "use client";

// import React from 'react';
// import Link from 'next/link';
// import { useToast } from '@/src/app/components/ui/useToast';

// export default function AdminDashboard() {
//   const { showToast, ToastComponent } = useToast();

//   const handleNotify = (reg: string, provider: string) => {
//     showToast(`Top-up reminder sent to the driver of ${reg} for ${provider}.`, 'info');
//   };

//   return (
//     <div className="flex flex-col gap-8 pb-10 mt-4 max-w-7xl relative">
      
//       {/* ================= DATE FILTER ================= */}
//       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-xl border border-border shadow-sm">
//         <div className="flex items-center gap-2 text-gray-500 font-medium">
//           <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
//           <span className="text-sm">Date Filter:</span>
//         </div>
//         <div className="flex flex-wrap items-center gap-2">
//           <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-border">Today</button>
//           <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-border">Last 7 Days</button>
//           <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg shadow-sm transition-colors">Last 30 Days</button>
//           <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-border">Custom Range</button>
//         </div>
//       </div>

//       {/* ================= SYSTEM OVERVIEW (Operational Metrics) ================= */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <Link href="/admin/fines" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-red-300 transition-colors flex flex-col justify-between min-h-35 group">
//           <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-3 group-hover:bg-red-100 transition-colors">
//             <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
//           </div>
//           <div>
//             <h3 className="text-3xl font-bold text-red-600">342</h3>
//             <p className="text-sm text-gray-500 mt-1">Fines Issued</p>
//           </div>
//         </Link>

//         <Link href="/admin/users" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-green-300 transition-colors flex flex-col justify-between min-h-35 group">
//           <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center mb-3 group-hover:bg-green-100 transition-colors">
//             <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
//           </div>
//           <div>
//             <h3 className="text-3xl font-bold text-foreground">1,089</h3>
//             <p className="text-sm text-gray-500 mt-1">Total Active Users</p>
//           </div>
//         </Link>

//         <Link href="/admin/vehicles" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-purple-300 transition-colors flex flex-col justify-between min-h-35 group">
//           <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:bg-purple-100 transition-colors">
//             <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
//           </div>
//           <div>
//             <h3 className="text-3xl font-bold text-foreground">2,341</h3>
//             <p className="text-sm text-gray-500 mt-1">Total Registered Vehicles</p>
//           </div>
//         </Link>
//       </div>

//       {/* ================= PAYMENT STATUS OVERVIEW ================= */}
//       <div>
//         <h2 className="text-lg font-bold text-foreground mb-4">Payment Status Overview</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
//           <Link href="/admin/payments/successful" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-green-300 transition-colors flex flex-col group">
//             <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
//               <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
//             </div>
//             <h3 className="text-2xl font-bold text-green-600 flex items-end gap-1 mb-1">
//               £123,421.50 <span className="text-xs text-gray-400 font-normal mb-1.5">(2,490 transactions)</span>
//             </h3>
//             <p className="text-sm text-gray-500 font-medium mt-1">Successful Payments</p>
//             <div className="flex justify-between text-xs text-gray-500 mt-4 pt-4 border-t border-border">
//               <span>Manual: £5,870.40</span>
//               <span>Auto-Pay: £117,550.10</span>
//             </div>
//           </Link>

//           <Link href="/admin/payments/pending" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-orange-300 transition-colors flex flex-col group">
//             <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
//               <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
//             </div>
//             <h3 className="text-2xl font-bold text-orange-500 flex items-end gap-1 mb-1">
//               £18,620.50 <span className="text-xs text-gray-400 font-normal mb-1.5">(86 transactions)</span>
//             </h3>
//             <p className="text-sm text-gray-500 font-medium mt-1">Pending Payments</p>
//             <div className="flex justify-between text-xs text-gray-500 mt-4 pt-4 border-t border-border">
//               <span>Manual: £5,870.40</span>
//               <span>Auto-Pay: £12,750.10</span>
//             </div>
//           </Link>

//           <Link href="/admin/payments/failed" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-red-300 transition-colors flex flex-col group">
//             <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
//               <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
//             </div>
//             <h3 className="text-2xl font-bold text-red-600 flex items-end gap-1 mb-1">
//               £45,820.50 <span className="text-xs text-gray-400 font-normal mb-1.5">(78 transactions)</span>
//             </h3>
//             <p className="text-sm text-gray-500 font-medium mt-1">Failed Payments</p>
//             <div className="flex justify-between text-xs text-gray-500 mt-4 pt-4 border-t border-border">
//               <span>Manual Expired: £2,770.00</span>
//               <span>Auto Expired: £185.00</span>
//             </div>
//           </Link>

//         </div>
//       </div>

//      {/* ================= AUTO-PAY PENDING ================= */}
//       <div>
//         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-4">
//           <h2 className="text-lg font-bold text-foreground">Auto-Pay Pending</h2>
//           <div className="flex items-center gap-3 text-sm">
//             <span className="text-gray-500">Ready to process: <span className="font-bold text-primary bg-blue-50 px-1.5 py-0.5 rounded">18</span></span>
//             <span className="text-gray-500">Waiting for top-up: <span className="font-bold text-primary bg-blue-50 px-1.5 py-0.5 rounded">10</span></span>
//             <span className="text-gray-500">Expiring soon: <span className="font-bold text-primary bg-blue-50 px-1.5 py-0.5 rounded">8</span></span>
//             <Link href="/admin/payments/autopay-pending" className="text-primary hover:underline font-medium ml-2">View All &gt;</Link>
//           </div>
//         </div>
        
//         <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-sm whitespace-nowrap">
//               <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-border">
//                 <tr>
//                   <th className="px-6 py-4">License Plate</th>
//                   <th className="px-6 py-4">Provider</th>
//                   <th className="px-6 py-4">Charge Amount</th>
//                   <th className="px-6 py-4">Wallet Balance</th>
//                   <th className="px-6 py-4">Balance Status</th>
//                   <th className="px-6 py-4 text-right">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-border">
//                 {[
//                   { id: 'AP-1023', reg: 'ABC 2224', provider: 'Manchester Airport', charge: '£22.00', balance: '£22.00', status: 'Sufficient' },
//                   { id: 'AP-1024', reg: 'GIM 2346', provider: 'London ULEZ', charge: '£12.50', balance: '£6.00', status: 'Insufficient' },
//                   { id: 'AP-1025', reg: 'LMN-6901', provider: 'Birmingham CAZ', charge: '£3.00', balance: '£3.00', status: 'Sufficient' },
//                   { id: 'AP-1026', reg: 'EFG 1035', provider: 'Heathrow Parking', charge: '£12.50', balance: '£8.00', status: 'Insufficient' },
//                 ].map((item, i) => (
//                   <tr key={i} className="hover:bg-gray-50/50 transition-colors">
//                     <td className="px-6 py-4 font-semibold text-foreground">{item.reg}</td>
//                     <td className="px-6 py-4 text-gray-600 flex items-center gap-2">
//                       <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary shrink-0">
//                         <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
//                       </div>
//                       {item.provider}
//                     </td>
//                     <td className="px-6 py-4 font-medium text-foreground">{item.charge}</td>
//                     <td className="px-6 py-4 font-medium text-foreground">{item.balance}</td>
//                     <td className="px-6 py-4">
//                       <span className={`px-2 py-1 rounded text-xs font-medium border ${item.status === 'Sufficient' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
//                         {item.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-right">
//                       {item.status === 'Sufficient' ? (
//                         <Link 
//                           href={`/admin/payments/autopay-pending/${item.id}`}
//                           className="px-3 py-1.5 inline-block bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded shadow-sm transition-colors"
//                         >
//                           Process
//                         </Link>
//                       ) : (
//                         <button 
//                           onClick={() => handleNotify(item.reg, item.provider)}
//                           className="px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-700 text-xs font-bold rounded transition-colors"
//                         >
//                           Notify
//                         </button>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* ================= QUICK ACTIONS ================= */}
//       <div>
//         <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
//           <Link href="/admin/users" className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary group transition-colors flex items-center gap-4">
//             <div className="text-gray-400 group-hover:text-primary transition-colors">
//               <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
//             </div>
//             <div>
//               <h4 className="font-semibold text-sm text-foreground">Manage Users</h4>
//               <p className="text-xs text-gray-500 mt-0.5">View and manage user accounts</p>
//             </div>
//           </Link>

//           <Link href="/admin/fleets" className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary group transition-colors flex items-center gap-4">
//             <div className="text-gray-400 group-hover:text-primary transition-colors">
//               <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
//             </div>
//             <div>
//               <h4 className="font-semibold text-sm text-foreground">Manage Fleets</h4>
//               <p className="text-xs text-gray-500 mt-0.5">View fleet organizations</p>
//             </div>
//           </Link>

//         </div>
//       </div>

//       <ToastComponent />
//     </div>
//   );
// }











































// "use client";

// import React from 'react';
// import Link from 'next/link';
// import { useToast } from '@/src/app/components/ui/useToast';

// export default function AdminDashboard() {
//   const { showToast, ToastComponent } = useToast();

//   const handleNotify = (reg: string, provider: string) => {
//     showToast(`Top-up reminder sent to the driver of ${reg} for ${provider}.`, 'info');
//   };

//   // Mock data for the new Operations-focused Users & Vehicles list
//   const recentActivity = [
//     { id: 'usr-6', name: 'Nathan Cooper', email: 'n.cooper@example.com', reg: 'GIM 2346', tier: 'Auto-Pay', balance: '£50.00', lastActive: 'Just now', status: 'Active' },
//     { id: 'usr-1', name: 'Sarah Miller', email: 's.miller@example.com', reg: 'ABC 2224', tier: 'Manual', balance: 'N/A', lastActive: '5 mins ago', status: 'Active' },
//     { id: 'usr-3', name: 'Emma Rogers', email: 'e.rogers@example.com', reg: 'CVS 2044', tier: 'Auto-Pay', balance: '£15.00', lastActive: '22 mins ago', status: 'Active' },
//     { id: 'usr-2', name: 'James Wilson', email: 'j.wilson@example.com', reg: 'MW-6901', tier: 'Manual', balance: 'N/A', lastActive: '1 hour ago', status: 'Active' },
//     { id: 'usr-4', name: 'Paul Johnson', email: 'p.johnson@example.com', reg: 'EFG 1035', tier: 'Basic', balance: 'N/A', lastActive: '3 hours ago', status: 'Active' },
//   ];

//   return (
//     <div className="flex flex-col gap-8 pb-10 mt-4 max-w-7xl relative">
      
//       {/* ================= DATE FILTER ================= */}
//       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-xl border border-border shadow-sm">
//         <div className="flex items-center gap-2 text-gray-500 font-medium">
//           <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
//           <span className="text-sm">Date Filter:</span>
//         </div>
//         <div className="flex flex-wrap items-center gap-2">
//           <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-border">Today</button>
//           <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-border">Last 7 Days</button>
//           <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg shadow-sm transition-colors">Last 30 Days</button>
//           <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-border">Custom Range</button>
//         </div>
//       </div>

//       {/* ================= OPERATIONAL OVERVIEW (Chronological Flow) ================= */}
//       <div>
//         <h2 className="text-lg font-bold text-foreground mb-4">Operational Overview</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
//           <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col group">
//             <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 transition-colors">
//               <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
//             </div>
//             <h3 className="text-2xl font-bold text-blue-600 flex items-end gap-1 mb-1">
//               3,421 <span className="text-xs text-gray-400 font-normal mb-1.5">(Events)</span>
//             </h3>
//             <p className="text-sm text-gray-500 font-medium mt-1">Total Chargeable Events</p>
//             <div className="text-xs text-gray-500 mt-4 pt-4 border-t border-border">
//               <span>Pre-payment activities detected</span>
//             </div>
//           </div>

//           <Link href="/admin/payments/pending" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-orange-300 transition-colors flex flex-col group">
//             <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
//               <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
//             </div>
//             <h3 className="text-2xl font-bold text-orange-500 flex items-end gap-1 mb-1">
//               £18,620.50 <span className="text-xs text-gray-400 font-normal mb-1.5">(86 transactions)</span>
//             </h3>
//             <p className="text-sm text-gray-500 font-medium mt-1">Pending Payments</p>
//             <div className="flex justify-between text-xs text-gray-500 mt-4 pt-4 border-t border-border">
//               <span>Manual: £5,870.40</span>
//               <span>Auto-Pay: £12,750.10</span>
//             </div>
//           </Link>

//           <Link href="/admin/payments/successful" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-green-300 transition-colors flex flex-col group">
//             <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
//               <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
//             </div>
//             <h3 className="text-2xl font-bold text-green-600 flex items-end gap-1 mb-1">
//               £123,421.50 <span className="text-xs text-gray-400 font-normal mb-1.5">(2,490 transactions)</span>
//             </h3>
//             <p className="text-sm text-gray-500 font-medium mt-1">Successful Payments</p>
//             <div className="flex justify-between text-xs text-gray-500 mt-4 pt-4 border-t border-border">
//               <span>Manual: £5,870.40</span>
//               <span>Auto-Pay: £117,550.10</span>
//             </div>
//           </Link>

//           <Link href="/admin/payments/failed" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-red-300 transition-colors flex flex-col group">
//             <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
//               <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
//             </div>
//             <h3 className="text-2xl font-bold text-red-600 flex items-end gap-1 mb-1">
//               £45,820.50 <span className="text-xs text-gray-400 font-normal mb-1.5">(78 transactions)</span>
//             </h3>
//             <p className="text-sm text-gray-500 font-medium mt-1">Failed Payments</p>
//             <div className="flex justify-between text-xs text-gray-500 mt-4 pt-4 border-t border-border">
//               <span>Manual Expired: £2,770</span>
//               <span>Auto Expired: £185</span>
//             </div>
//           </Link>

//         </div>
//       </div>

//       {/* ================= RECENT USER & VEHICLE ACTIVITY ================= */}
//       <div>
//         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-4 mt-2">
//           <h2 className="text-lg font-bold text-foreground">Recent User & Vehicle Activity</h2>
//           <Link href="/admin/users" className="text-primary hover:underline font-medium text-sm">View All Users &gt;</Link>
//         </div>
        
//         <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-sm whitespace-nowrap">
//               <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-border">
//                 <tr>
//                   <th className="px-6 py-4">User Name & Contact</th>
//                   <th className="px-6 py-4">Vehicle</th>
//                   <th className="px-6 py-4">Subscription Tier</th>
//                   <th className="px-6 py-4">Wallet Balance</th>
//                   <th className="px-6 py-4">Last Active</th>
//                   <th className="px-6 py-4">Status</th>
//                   <th className="px-6 py-4 text-right">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-border">
//                 {recentActivity.map((user, i) => (
//                   <tr key={i} className="hover:bg-gray-50/50 transition-colors">
//                     <td className="px-6 py-4">
//                       <div className="font-bold text-foreground mb-0.5">{user.name}</div>
//                       <div className="text-xs text-gray-500">{user.email}</div>
//                     </td>
//                     <td className="px-6 py-4 font-bold text-foreground">
//                       <Link href={`/admin/vehicles/${user.reg.replace(/\s+/g, '')}`} className="hover:text-primary hover:underline">{user.reg}</Link>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className={`px-2 py-1 rounded text-xs font-medium ${user.tier === 'Auto-Pay' ? 'bg-green-100 text-green-700' : user.tier === 'Manual' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
//                         {user.tier}
//                       </span>
//                     </td>
//                     <td className={`px-6 py-4 font-medium ${user.balance === 'N/A' ? 'text-gray-400' : 'text-foreground'}`}>{user.balance}</td>
//                     <td className="px-6 py-4 font-medium text-gray-600 flex items-center gap-1.5 mt-2">
//                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-gray-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
//                        {user.lastActive}
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className="px-2 py-1 rounded text-xs font-bold bg-green-50 text-green-700 border border-green-200">{user.status}</span>
//                     </td>
//                     <td className="px-6 py-4 text-right">
//                       <Link href={`/admin/users/${user.id}`} className="text-primary hover:underline font-medium text-xs">View/Edit</Link>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//      {/* ================= AUTO-PAY PENDING (Live Operational Queue) ================= */}
//       <div>
//         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-4 mt-2">
//           <h2 className="text-lg font-bold text-foreground">Auto-Pay Pending</h2>
//           <div className="flex items-center gap-3 text-sm">
//             <span className="text-gray-500">Ready to process: <span className="font-bold text-primary bg-blue-50 px-1.5 py-0.5 rounded">18</span></span>
//             <span className="text-gray-500">Waiting for top-up: <span className="font-bold text-primary bg-blue-50 px-1.5 py-0.5 rounded">10</span></span>
//             <span className="text-gray-500">Expiring soon: <span className="font-bold text-primary bg-blue-50 px-1.5 py-0.5 rounded">8</span></span>
//             <Link href="/admin/payments/autopay-pending" className="text-primary hover:underline font-medium ml-2">View All &gt;</Link>
//           </div>
//         </div>
        
//         <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-sm whitespace-nowrap">
//               <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-border">
//                 <tr>
//                   <th className="px-6 py-4">License Plate</th>
//                   <th className="px-6 py-4">Provider</th>
//                   <th className="px-6 py-4">Charge Amount</th>
//                   <th className="px-6 py-4">Wallet Balance</th>
//                   <th className="px-6 py-4">Balance Status</th>
//                   <th className="px-6 py-4 text-right">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-border">
//                 {[
//                   { id: 'AP-1023', reg: 'ABC 2224', provider: 'Manchester Airport', charge: '£22.00', balance: '£22.00', status: 'Sufficient' },
//                   { id: 'AP-1024', reg: 'GIM 2346', provider: 'London ULEZ', charge: '£12.50', balance: '£6.00', status: 'Insufficient' },
//                   { id: 'AP-1025', reg: 'LMN-6901', provider: 'Birmingham CAZ', charge: '£3.00', balance: '£3.00', status: 'Sufficient' },
//                   { id: 'AP-1026', reg: 'EFG 1035', provider: 'Heathrow Parking', charge: '£12.50', balance: '£8.00', status: 'Insufficient' },
//                 ].map((item, i) => (
//                   <tr key={i} className="hover:bg-gray-50/50 transition-colors">
//                     <td className="px-6 py-4 font-semibold text-foreground">{item.reg}</td>
//                     <td className="px-6 py-4 text-gray-600 flex items-center gap-2">
//                       <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary shrink-0">
//                         <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
//                       </div>
//                       {item.provider}
//                     </td>
//                     <td className="px-6 py-4 font-medium text-foreground">{item.charge}</td>
//                     <td className="px-6 py-4 font-medium text-foreground">{item.balance}</td>
//                     <td className="px-6 py-4">
//                       <span className={`px-2 py-1 rounded text-xs font-medium border ${item.status === 'Sufficient' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
//                         {item.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-right">
//                       {item.status === 'Sufficient' ? (
//                         <Link 
//                           href={`/admin/payments/autopay-pending/${item.id}`}
//                           className="px-3 py-1.5 inline-block bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded shadow-sm transition-colors"
//                         >
//                           Process
//                         </Link>
//                       ) : (
//                         <button 
//                           onClick={() => handleNotify(item.reg, item.provider)}
//                           className="px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-700 text-xs font-bold rounded transition-colors"
//                         >
//                           Notify
//                         </button>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* ================= QUICK ACTIONS ================= */}
//       <div>
//         <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
//           <Link href="/admin/users" className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary group transition-colors flex items-center gap-4">
//             <div className="text-gray-400 group-hover:text-primary transition-colors">
//               <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
//             </div>
//             <div>
//               <h4 className="font-semibold text-sm text-foreground">Manage Users</h4>
//               <p className="text-xs text-gray-500 mt-0.5">View and manage user accounts</p>
//             </div>
//           </Link>

//           <Link href="/admin/fleets" className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary group transition-colors flex items-center gap-4">
//             <div className="text-gray-400 group-hover:text-primary transition-colors">
//               <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
//             </div>
//             <div>
//               <h4 className="font-semibold text-sm text-foreground">Manage Fleets</h4>
//               <p className="text-xs text-gray-500 mt-0.5">View fleet organizations</p>
//             </div>
//           </Link>

//         </div>
//       </div>

//       <ToastComponent />
//     </div>
//   );
// }




















































// "use client";

// import React from 'react';
// import Link from 'next/link';
// import { useToast } from '@/src/app/components/ui/useToast';

// // ============================================================================
// // 1. MOCK DATA (Moved outside to keep component light and realistic)
// // ============================================================================

// const recentActivityData = [
//   { id: 'usr-6', name: 'Nathan Cooper', email: 'n.cooper@example.com', reg: 'GIM 2346', tier: 'Auto-Pay', balance: '£50.00', lastActive: 'Just now', status: 'Active' },
//   { id: 'usr-1', name: 'Sarah Miller', email: 's.miller@example.com', reg: 'ABC 2224', tier: 'Manual', balance: 'N/A', lastActive: '5 mins ago', status: 'Active' },
//   { id: 'usr-3', name: 'Emma Rogers', email: 'e.rogers@example.com', reg: 'CVS 2044', tier: 'Auto-Pay', balance: '£15.00', lastActive: '22 mins ago', status: 'Active' },
//   { id: 'usr-2', name: 'James Wilson', email: 'j.wilson@example.com', reg: 'MW-6901', tier: 'Manual', balance: 'N/A', lastActive: '1 hour ago', status: 'Active' },
//   { id: 'usr-4', name: 'Paul Johnson', email: 'p.johnson@example.com', reg: 'EFG 1035', tier: 'Basic', balance: 'N/A', lastActive: '3 hours ago', status: 'Active' },
// ];

// const autoPayQueueData = [
//   { id: 'AP-1023', reg: 'ABC 2224', provider: 'Manchester Airport', charge: '£22.00', balance: '£22.00', status: 'Sufficient' },
//   { id: 'AP-1024', reg: 'GIM 2346', provider: 'London ULEZ', charge: '£12.50', balance: '£6.00', status: 'Insufficient' },
//   { id: 'AP-1025', reg: 'LMN-6901', provider: 'Birmingham CAZ', charge: '£3.00', balance: '£3.00', status: 'Sufficient' },
//   { id: 'AP-1026', reg: 'EFG 1035', provider: 'Heathrow Parking', charge: '£12.50', balance: '£8.00', status: 'Insufficient' },
// ];

// // ============================================================================
// // 2. REUSABLE SUB-COMPONENTS
// // ============================================================================

// // A. Reusable Row for Recent Activity
// const RecentActivityRow = ({ user }: { user: any }) => (
//   <tr className="hover:bg-gray-50/50 transition-colors text-gray-600">
//     <td className="px-6 py-4">
//       <div className="font-bold text-foreground mb-0.5">{user.name}</div>
//       <div className="text-xs text-gray-500">{user.email}</div>
//     </td>
//     <td className="px-6 py-4 font-bold text-foreground">
//       <Link href={`/admin/vehicles/${user.reg.replace(/\s+/g, '')}`} className="hover:text-primary hover:underline">{user.reg}</Link>
//     </td>
//     <td className="px-6 py-4">
//       <span className={`px-2 py-1 rounded text-xs font-medium ${user.tier === 'Auto-Pay' ? 'bg-green-100 text-green-700' : user.tier === 'Manual' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
//         {user.tier}
//       </span>
//     </td>
//     <td className={`px-6 py-4 font-medium ${user.balance === 'N/A' ? 'text-gray-400' : 'text-foreground'}`}>{user.balance}</td>
//     <td className="px-6 py-4 font-medium text-gray-600 flex items-center gap-1.5 mt-2">
//       <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-gray-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
//       {user.lastActive}
//     </td>
//     <td className="px-6 py-4">
//       <span className="px-2 py-1 rounded text-xs font-bold bg-green-50 text-green-700 border border-green-200">{user.status}</span>
//     </td>
//     <td className="px-6 py-4 text-right">
//       <Link href={`/admin/users/${user.id}`} className="text-primary hover:underline font-medium text-xs">View User</Link>
//     </td>
//   </tr>
// );

// // B. Reusable Row for Auto-Pay Pending (Fixes the Notify Button)
// const AutoPayDashboardRow = ({ item, onNotify }: { item: any, onNotify: (reg: string, provider: string) => void }) => (
//   <tr className="hover:bg-gray-50/50 transition-colors">
//     <td className="px-6 py-4 font-semibold text-foreground">{item.reg}</td>
//     <td className="px-6 py-4 text-gray-600 flex items-center gap-2">
//       <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary shrink-0">
//         <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
//       </div>
//       {item.provider}
//     </td>
//     <td className="px-6 py-4 font-medium text-foreground">{item.charge}</td>
//     <td className="px-6 py-4 font-medium text-foreground">{item.balance}</td>
//     <td className="px-6 py-4">
//       <span className={`px-2 py-1 rounded text-xs font-medium border ${item.status === 'Sufficient' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
//         {item.status}
//       </span>
//     </td>
//     <td className="px-6 py-4 text-right">
//       {item.status === 'Sufficient' ? (
//         <Link 
//           href={`/admin/payments/autopay-pending/${item.id}`}
//           className="px-3 py-1.5 inline-block bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded shadow-sm transition-colors"
//         >
//           Process
//         </Link>
//       ) : (
//         <button 
//           onClick={() => onNotify(item.reg, item.provider)}
//           className="px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-700 text-xs font-bold rounded transition-colors cursor-pointer"
//         >
//           Notify
//         </button>
//       )}
//     </td>
//   </tr>
// );


// // ============================================================================
// // 3. MAIN DASHBOARD COMPONENT
// // ============================================================================

// export default function AdminDashboard() {
//   const { showToast, ToastComponent } = useToast();

//   // Notification Handler
//   const handleNotify = (reg: string, provider: string) => {
//     showToast(`Top-up reminder sent to the driver of ${reg} for ${provider}.`, 'info');
//   };

//   return (
//     <div className="flex flex-col gap-8 pb-10 mt-4 max-w-7xl relative">
      
//       {/* DATE FILTER */}
//       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-xl border border-border shadow-sm">
//         <div className="flex items-center gap-2 text-gray-500 font-medium">
//           <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
//           <span className="text-sm">Date Filter:</span>
//         </div>
//         <div className="flex flex-wrap items-center gap-2">
//           <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-border">Today</button>
//           <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-border">Last 7 Days</button>
//           <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg shadow-sm transition-colors">Last 30 Days</button>
//           <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-border">Custom Range</button>
//         </div>
//       </div>

//       {/* OPERATIONAL OVERVIEW */}
//       <div>
//         <h2 className="text-lg font-bold text-foreground mb-4">Operational Overview</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
//           <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col group">
//             <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 transition-colors">
//               <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
//             </div>
//             <h3 className="text-2xl font-bold text-blue-600 flex items-end gap-1 mb-1">
//               3,421 <span className="text-xs text-gray-400 font-normal mb-1.5">(Events)</span>
//             </h3>
//             <p className="text-sm text-gray-500 font-medium mt-1">Total Chargeable Events</p>
//             <div className="text-xs text-gray-500 mt-4 pt-4 border-t border-border">
//               <span>Pre-payment activities detected</span>
//             </div>
//           </div>

//           <Link href="/admin/payments/pending" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-orange-300 transition-colors flex flex-col group">
//             <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
//               <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
//             </div>
//             <h3 className="text-2xl font-bold text-orange-500 flex items-end gap-1 mb-1">
//               £18,620.50 <span className="text-xs text-gray-400 font-normal mb-1.5">(86 transactions)</span>
//             </h3>
//             <p className="text-sm text-gray-500 font-medium mt-1">Pending Payments</p>
//             <div className="flex justify-between text-xs text-gray-500 mt-4 pt-4 border-t border-border">
//               <span>Manual: £5,870.40</span>
//               <span>Auto-Pay: £12,750.10</span>
//             </div>
//           </Link>

//           <Link href="/admin/payments/successful" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-green-300 transition-colors flex flex-col group">
//             <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
//               <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
//             </div>
//             <h3 className="text-2xl font-bold text-green-600 flex items-end gap-1 mb-1">
//               £123,421.50 <span className="text-xs text-gray-400 font-normal mb-1.5">(2,490 transactions)</span>
//             </h3>
//             <p className="text-sm text-gray-500 font-medium mt-1">Successful Payments</p>
//             <div className="flex justify-between text-xs text-gray-500 mt-4 pt-4 border-t border-border">
//               <span>Manual: £5,870.40</span>
//               <span>Auto-Pay: £117,550.10</span>
//             </div>
//           </Link>

//           <Link href="/admin/payments/failed" className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-red-300 transition-colors flex flex-col group">
//             <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
//               <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
//             </div>
//             <h3 className="text-2xl font-bold text-red-600 flex items-end gap-1 mb-1">
//               £45,820.50 <span className="text-xs text-gray-400 font-normal mb-1.5">(78 transactions)</span>
//             </h3>
//             <p className="text-sm text-gray-500 font-medium mt-1">Failed Payments</p>
//             <div className="flex justify-between text-xs text-gray-500 mt-4 pt-4 border-t border-border">
//               <span>Manual Expired: £2,770</span>
//               <span>Auto Expired: £185</span>
//             </div>
//           </Link>

//         </div>
//       </div>

//       {/* RECENT USER & VEHICLE ACTIVITY */}
//       <div>
//         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-4 mt-2">
//           <h2 className="text-lg font-bold text-foreground">Recent User & Vehicle Activity</h2>
//           <Link href="/admin/users" className="text-primary hover:underline font-medium text-sm">View All Users &gt;</Link>
//         </div>
        
//         <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-sm whitespace-nowrap">
//               <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-border">
//                 <tr>
//                   <th className="px-6 py-4">User Name & Contact</th>
//                   <th className="px-6 py-4">Vehicle</th>
//                   <th className="px-6 py-4">Subscription Tier</th>
//                   <th className="px-6 py-4">Wallet Balance</th>
//                   <th className="px-6 py-4">Last Active</th>
//                   <th className="px-6 py-4">Status</th>
//                   <th className="px-6 py-4 text-right">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-border">
//                 {recentActivityData.map((user, i) => (
//                   <RecentActivityRow key={i} user={user} />
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//      {/* AUTO-PAY PENDING (Live Operational Queue) */}
//       <div>
//         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-4 mt-2">
//           <h2 className="text-lg font-bold text-foreground">Auto-Pay Pending</h2>
//           <div className="flex items-center gap-3 text-sm">
//             <span className="text-gray-500">Ready to process: <span className="font-bold text-primary bg-blue-50 px-1.5 py-0.5 rounded">18</span></span>
//             <span className="text-gray-500">Waiting for top-up: <span className="font-bold text-primary bg-blue-50 px-1.5 py-0.5 rounded">10</span></span>
//             <span className="text-gray-500">Expiring soon: <span className="font-bold text-primary bg-blue-50 px-1.5 py-0.5 rounded">8</span></span>
//             <Link href="/admin/payments/autopay-pending" className="text-primary hover:underline font-medium ml-2">View All &gt;</Link>
//           </div>
//         </div>
        
//         <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-sm whitespace-nowrap">
//               <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-border">
//                 <tr>
//                   <th className="px-6 py-4">License Plate</th>
//                   <th className="px-6 py-4">Provider</th>
//                   <th className="px-6 py-4">Charge Amount</th>
//                   <th className="px-6 py-4">Wallet Balance</th>
//                   <th className="px-6 py-4">Balance Status</th>
//                   <th className="px-6 py-4 text-right">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-border">
//                 {autoPayQueueData.map((item, i) => (
//                   <AutoPayDashboardRow key={i} item={item} onNotify={handleNotify} />
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* QUICK ACTIONS (Constrained Width for perfect layout) */}
//       <div>
//         <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
//         {/* Using max-w-3xl keeps the two cards from stretching too wide across the screen */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
          
//           <Link href="/admin/users" className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary group transition-colors flex items-center gap-4">
//             <div className="text-gray-400 group-hover:text-primary transition-colors">
//               <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
//             </div>
//             <div>
//               <h4 className="font-semibold text-sm text-foreground">Manage Users</h4>
//               <p className="text-xs text-gray-500 mt-0.5">View and manage user accounts</p>
//             </div>
//           </Link>

//           <Link href="/admin/fleets" className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary group transition-colors flex items-center gap-4">
//             <div className="text-gray-400 group-hover:text-primary transition-colors">
//               <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
//             </div>
//             <div>
//               <h4 className="font-semibold text-sm text-foreground">Manage Fleets</h4>
//               <p className="text-xs text-gray-500 mt-0.5">View fleet organizations</p>
//             </div>
//           </Link>

//         </div>
//       </div>

//       {/* Render Reusable Toast Notification */}
//       <ToastComponent />
//     </div>
//   );
// }














































"use client";

import React from 'react';
import Link from 'next/link';
import { useToast } from '@/src/app/components/ui/useToast';

// ============================================================================
// 1. MOCK DATA
// ============================================================================

const recentActivityData = [
  { id: 'usr-6', name: 'Nathan Cooper', email: 'n.cooper@example.com', reg: 'GIM 2346', tier: 'Auto-Pay', balance: '£50.00', lastActive: 'Just now', status: 'Active' },
  { id: 'usr-1', name: 'Sarah Miller', email: 's.miller@example.com', reg: 'ABC 2224', tier: 'Manual', balance: 'N/A', lastActive: '5 mins ago', status: 'Active' },
  { id: 'usr-3', name: 'Emma Rogers', email: 'e.rogers@example.com', reg: 'CVS 2044', tier: 'Auto-Pay', balance: '£15.00', lastActive: '22 mins ago', status: 'Active' },
  { id: 'usr-2', name: 'James Wilson', email: 'j.wilson@example.com', reg: 'MW-6901', tier: 'Manual', balance: 'N/A', lastActive: '1 hour ago', status: 'Active' },
  { id: 'usr-4', name: 'Paul Johnson', email: 'p.johnson@example.com', reg: 'EFG 1035', tier: 'Basic', balance: 'N/A', lastActive: '3 hours ago', status: 'Active' },
];

const autoPayQueueData = [
  { id: 'AP-1028', reg: 'ABC 9991', provider: 'Manchester Airport', charge: 25.00, balance: 50.00, status: 'Sufficient' },
  { id: 'AP-1030', reg: 'ABC 9782', provider: 'Glasgow CAZ', charge: 8.00, balance: 5.00, status: 'Insufficient' },
];

// ============================================================================
// 2. REUSABLE SUB-COMPONENTS
// ============================================================================

// A. Reusable Overview Card (Matches new design perfectly)
const OverviewCard = ({ 
  href, icon, iconBg, iconColor, number, numberColor, unit, title, footerContent 
}: { 
  href?: string, icon: React.ReactNode, iconBg: string, iconColor: string, number: string | number, numberColor: string, unit: string, title: string, footerContent: React.ReactNode 
}) => {
  const CardWrapper = href ? Link : 'div';
  const wrapperClass = href 
    ? "bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col group cursor-pointer block" 
    : "bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col";

  return (
    // @ts-expect-error - Dynamic wrapper typing
    <CardWrapper href={href} className={wrapperClass}>
      <div className={`w-10 h-10 rounded-lg ${iconBg} ${iconColor} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className={`text-3xl font-bold flex items-baseline gap-1.5 mb-1 ${numberColor}`}>
        {number} <span className="text-sm font-medium text-gray-500 mb-1">{unit}</span>
      </h3>
      <p className="text-sm text-gray-600 font-medium">{title}</p>
      <div className="mt-4 pt-4 border-t border-border flex flex-col gap-1.5 text-xs text-gray-500 font-medium">
        {footerContent}
      </div>
    </CardWrapper>
  );
};

// B. Reusable Row for Recent Activity
const RecentActivityRow = ({ user }: { user: any }) => (
  <tr className="hover:bg-gray-50/50 transition-colors text-gray-600">
    <td className="px-6 py-4">
      <div className="font-bold text-foreground mb-0.5">{user.name}</div>
      <div className="text-xs text-gray-500">{user.email}</div>
    </td>
    <td className="px-6 py-4 font-bold text-foreground">
      <Link href={`/admin/vehicles/${user.reg.replace(/\s+/g, '')}`} className="hover:text-primary hover:underline">{user.reg}</Link>
    </td>
    <td className="px-6 py-4">
      <span className={`px-2 py-1 rounded text-xs font-medium ${user.tier === 'Auto-Pay' ? 'bg-green-100 text-green-700' : user.tier === 'Manual' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
        {user.tier}
      </span>
    </td>
    <td className={`px-6 py-4 font-medium ${user.balance === 'N/A' ? 'text-gray-400' : 'text-foreground'}`}>{user.balance}</td>
    <td className="px-6 py-4 font-medium text-gray-500 flex items-center gap-1.5 mt-2">
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-gray-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      {user.lastActive}
    </td>
    <td className="px-6 py-4">
      <span className="px-2 py-1 rounded text-xs font-bold text-green-700">{user.status}</span>
    </td>
    <td className="px-6 py-4 text-right">
      <Link href={`/admin/users/${user.id}`} className="text-primary hover:underline font-medium text-xs">View/Edit</Link>
    </td>
  </tr>
);

// C. Reusable Row for Auto-Pay Pending
// const AutoPayDashboardRow = ({ item, onNotify }: { item: any, onNotify: (reg: string, provider: string) => void }) => (
//   <tr className="hover:bg-gray-50/50 transition-colors">
//     <td className="px-6 py-4 font-semibold text-foreground">{item.reg}</td>
//     <td className="px-6 py-4 text-gray-600 flex items-center gap-2">
//       <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary shrink-0">
//         <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
//       </div>
//       {item.provider}
//     </td>
//     <td className="px-6 py-4 font-medium text-foreground">{item.charge}</td>
//     <td className="px-6 py-4 font-medium text-foreground">{item.balance}</td>
//     <td className="px-6 py-4">
//       <span className={`px-2 py-1 rounded text-xs font-medium border ${item.status === 'Sufficient' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
//         {item.status}
//       </span>
//     </td>
//     <td className="px-6 py-4 text-right">
//       {item.status === 'Sufficient' ? (
//         <Link href={`/admin/payments/autopay-pending/${item.id}`} className="px-4 py-1.5 inline-block bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded shadow-sm transition-colors">
//           Process
//         </Link>
//       ) : (
//         <button onClick={() => onNotify(item.reg, item.provider)} className="px-4 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold rounded transition-colors border border-red-100">
//           Notify
//         </button>
//       )}
//     </td>
//   </tr>
// );

// B. Reusable Row for Auto-Pay Pending (Updated to make all rows click through)
const AutoPayDashboardRow = ({ item }: { item: any }) => (
  <tr className="hover:bg-gray-50/50 transition-colors">
    <td className="px-6 py-4 font-semibold text-foreground">{item.reg}</td>
    <td className="px-6 py-4 text-gray-600 flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary shrink-0">
        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
      </div>
      {item.provider}
    </td>
    <td className="px-6 py-4 font-medium text-foreground">{item.charge}</td>
    <td className="px-6 py-4 font-medium text-foreground">{item.balance}</td>
    <td className="px-6 py-4">
      <span className={`px-2 py-1 rounded text-xs font-medium border ${item.status === 'Sufficient' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
        {item.status}
      </span>
    </td>
    <td className="px-6 py-4 text-right">
      {item.status === 'Sufficient' ? (
        <Link href={`/admin/payments/autopay-pending/${item.id}`} className="px-4 py-1.5 inline-block bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded shadow-sm transition-colors">
          Process
        </Link>
      ) : (
        <Link href={`/admin/payments/autopay-pending/${item.id}`} className="px-4 py-1.5 inline-block bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold rounded transition-colors border border-red-100">
          Notify
        </Link>
      )}
    </td>
  </tr>
);






// ============================================================================
// 3. MAIN DASHBOARD COMPONENT
// ============================================================================

export default function AdminDashboard() {
  const { showToast, ToastComponent } = useToast();

  const handleNotify = (reg: string, provider: string) => {
    showToast(`Top-up reminder sent to the driver of ${reg} for ${provider}.`, 'info');
  };

  return (
    <div className="flex flex-col gap-8 pb-10 mt-4 max-w-7xl relative">
      
      {/* DATE FILTER */}
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

      {/* OPERATIONAL OVERVIEW (Using our new realistic design & reusable component) */}
      <div>
        <h2 className="text-lg font-bold text-foreground mb-4">Operational Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <OverviewCard 
            icon={<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}
            iconBg="bg-blue-50" iconColor="text-blue-600"
            number="183" numberColor="text-blue-600" unit="(events)"
            title="Total Chargeable Events"
            footerContent={<span>Pre-payment activities detected</span>}
            // No href here, as requested (read-only)
          />

          <OverviewCard 
            href="/admin/payments/pending"
            icon={<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
            iconBg="bg-orange-50" iconColor="text-orange-500"
            number="40" numberColor="text-orange-500" unit="(transactions)"
            title="Pending Payments"
            footerContent={<>
              <div className="flex justify-between"><span>Manual:</span><span>£230</span></div>
              <div className="flex justify-between"><span>Auto-Pay:</span><span>£180</span></div>
              <div className="flex justify-between font-bold text-gray-700 mt-0.5"><span>Total:</span><span>£410</span></div>
            </>}
          />

          <OverviewCard 
            href="/admin/payments/successful"
            icon={<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
            iconBg="bg-green-50" iconColor="text-green-600"
            number="85" numberColor="text-green-600" unit="(transactions)"
            title="Successful Payments"
            footerContent={<>
              <div className="flex justify-between"><span>Manual:</span><span>£1,250</span></div>
              <div className="flex justify-between"><span>Auto-Pay:</span><span>£3,750</span></div>
              <div className="flex justify-between font-bold text-gray-700 mt-0.5"><span>Total:</span><span>£5,000</span></div>
            </>}
          />

          <OverviewCard 
            href="/admin/payments/failed"
            icon={<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>}
            iconBg="bg-red-50" iconColor="text-red-500"
            number="18" numberColor="text-red-500" unit="(transactions)"
            title="Failed Payments"
            footerContent={<>
              <div className="flex justify-between"><span>Manual Expired:</span><span>£420</span></div>
              <div className="flex justify-between"><span>Auto Expired:</span><span>£180</span></div>
              <div className="flex justify-between font-bold text-gray-700 mt-0.5"><span>Total:</span><span>£600</span></div>
            </>}
          />

        </div>
      </div>

      {/* RECENT USER & VEHICLE ACTIVITY */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-4 mt-2">
          <h2 className="text-lg font-bold text-foreground">Recent User & Vehicle Activity</h2>
          <Link href="/admin/users" className="text-primary hover:underline font-medium text-sm">View All Users &gt;</Link>
        </div>
        
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-border">
                <tr>
                  <th className="px-6 py-4">User Name & Contact</th>
                  <th className="px-6 py-4">Vehicle</th>
                  <th className="px-6 py-4">Subscription Tier</th>
                  <th className="px-6 py-4">Wallet Balance</th>
                  <th className="px-6 py-4">Last Active ↓</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentActivityData.map((user, i) => (
                  <RecentActivityRow key={i} user={user} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

     {/* AUTO-PAY PENDING (Live Operational Queue) */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-4 mt-2">
          <h2 className="text-lg font-bold text-foreground">Auto-Pay Pending</h2>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-500">Ready to process: <span className="font-bold text-primary bg-blue-50 px-1.5 py-0.5 rounded">18</span></span>
            <span className="text-gray-500">Waiting for top-up: <span className="font-bold text-primary bg-blue-50 px-1.5 py-0.5 rounded">10</span></span>
            <span className="text-gray-500">Expiring soon: <span className="font-bold text-primary bg-blue-50 px-1.5 py-0.5 rounded">8</span></span>
            <Link href="/admin/payments/autopay-pending" className="text-primary hover:underline font-medium ml-2">View All &gt;</Link>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-border">
                <tr>
                  <th className="px-6 py-4">License Plate</th>
                  <th className="px-6 py-4">Provider</th>
                  <th className="px-6 py-4">Charge Amount</th>
                  <th className="px-6 py-4">Wallet Balance</th>
                  <th className="px-6 py-4">Balance Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {autoPayQueueData.map((item, i) => (
                  <AutoPayDashboardRow key={i} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div>
        <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl">
          
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

        </div>
      </div>

      <ToastComponent />
    </div>
  );
}