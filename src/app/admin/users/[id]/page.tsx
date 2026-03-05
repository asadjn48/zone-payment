
// /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// import React, { useState } from 'react';
// import { Badge } from '@/src/app/components/ui/Badge';

// export default function UserDetailsPage({ params }: { params: { id: string } }) {
//   // State for tabs and the deactivation modal
//   const [activeTab, setActiveTab] = useState<'wallet' | 'payments' | 'subscription'>('wallet');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Mock User Data
//   const user = {
//     initials: 'JS',
//     name: 'John Smith',
//     email: 'john.smith@example.com',
//     phone: '+44 7700 900123',
//     fleet: 'City Logistics Ltd',
//     joined: 'Jan 15, 2025',
//     walletBalance: '£125.50',
//     pendingPayments: '£35.00',
//     subStatus: 'Active',
//   };

//   return (
//     <div className="flex flex-col gap-6 pb-10 relative">
      
//       {/* ================= 1. USER PROFILE HEADER ================= */}
//       <div className="bg-card border border-border rounded-xl shadow-sm p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start gap-6">
        
//         {/* Left Side: Identity */}
//         <div className="flex items-center gap-5">
//           <div className="w-16 h-16 rounded-full bg-blue-100 text-primary text-xl font-bold flex items-center justify-center shrink-0">
//             {user.initials}
//           </div>
//           <div>
//             <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
//             <p className="text-sm text-gray-500 mt-1">{user.email}</p>
//             <p className="text-sm text-gray-500">{user.phone}</p>
//             <p className="text-sm text-gray-600 mt-2">
//               Fleet: <span className="font-semibold text-foreground">{user.fleet}</span> <span className="mx-2 text-gray-300">|</span> Joined: <span className="font-semibold text-foreground">{user.joined}</span>
//             </p>
//           </div>
//         </div>

//         {/* Right Side: Account Status & Actions */}
//         <div className="flex flex-col items-end gap-3 w-full sm:w-auto">
//           <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-sm font-semibold w-full sm:w-auto justify-center">
//             <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
//             Active Account
//           </div>
//           <button 
//             onClick={() => setIsModalOpen(true)}
//             className="w-full sm:w-auto px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors"
//           >
//             Deactivate User
//           </button>
//         </div>

//       </div>

//       {/* ================= 2. METRICS CARDS ================= */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
//         <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center gap-4">
//           <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
//             <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
//           </div>
//           <div>
//             <h3 className="text-2xl font-bold text-foreground">{user.walletBalance}</h3>
//             <p className="text-sm text-gray-500">Wallet Balance</p>
//           </div>
//         </div>

//         <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center gap-4">
//           <div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
//             <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
//           </div>
//           <div>
//             <h3 className="text-2xl font-bold text-orange-500">{user.pendingPayments}</h3>
//             <p className="text-sm text-gray-500">Pending Payments</p>
//           </div>
//         </div>

//         <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center gap-4">
//           <div className="w-12 h-12 rounded-lg bg-green-50 text-green-500 flex items-center justify-center shrink-0">
//             <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold text-foreground">{user.subStatus}</h3>
//             <p className="text-sm text-gray-500">Subscription Status</p>
//           </div>
//         </div>

//       </div>

//       {/* ================= 3. TABS NAVIGATION & CONTENT ================= */}
//       <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mt-2">
        
//         {/* Tab Headers */}
//         <div className="flex border-b border-border overflow-x-auto hide-scrollbar px-2">
//           <button 
//             onClick={() => setActiveTab('wallet')}
//             className={`px-6 py-4 text-sm font-bold flex items-center gap-2 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'wallet' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
//           >
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
//             Wallet Activity
//           </button>
//           <button 
//             onClick={() => setActiveTab('payments')}
//             className={`px-6 py-4 text-sm font-bold flex items-center gap-2 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'payments' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
//           >
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 8 14"/></svg>
//             Payment History
//           </button>
//           <button 
//             onClick={() => setActiveTab('subscription')}
//             className={`px-6 py-4 text-sm font-bold flex items-center gap-2 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'subscription' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
//           >
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
//             Subscription Details
//           </button>
//         </div>

//         {/* Tab Content Areas */}
//         <div className="p-0">
          
//           {/* TAB 1: WALLET ACTIVITY */}
//           {activeTab === 'wallet' && (
//             <div className="overflow-x-auto">
//               <table className="w-full text-left text-sm whitespace-nowrap">
//                 <thead className="bg-white text-gray-400 text-xs font-bold uppercase tracking-wider border-b border-border">
//                   <tr>
//                     <th className="px-6 py-4">DATE</th>
//                     <th className="px-6 py-4">TYPE</th>
//                     <th className="px-6 py-4">DESCRIPTION</th>
//                     <th className="px-6 py-4 text-right">AMOUNT</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-border">
//                   {[
//                     { date: 'Feb 10, 2026', type: 'Top-up', desc: 'Wallet Top-up', amount: '+£50.00', isPositive: true },
//                     { date: 'Feb 09, 2026', type: 'Payment', desc: 'Manchester Airport Payment', amount: '£35.00', isPositive: false },
//                     { date: 'Feb 08, 2026', type: 'Top-up', desc: 'Wallet Top-up', amount: '+£100.00', isPositive: true },
//                     { date: 'Feb 07, 2026', type: 'Payment', desc: 'Heathrow Drop-off Payment', amount: '£12.50', isPositive: false },
//                   ].map((row, i) => (
//                     <tr key={i} className="hover:bg-gray-50/50 transition-colors">
//                       <td className="px-6 py-4 text-gray-600">{row.date}</td>
//                       <td className="px-6 py-4">
//                         <span className={`px-2 py-1 rounded text-xs font-medium ${row.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//                           {row.type}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 font-medium text-foreground">{row.desc}</td>
//                       <td className={`px-6 py-4 text-right font-medium ${row.isPositive ? 'text-green-600' : 'text-red-600'}`}>
//                         {row.amount}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}

//           {/* TAB 2: PAYMENT HISTORY */}
//           {activeTab === 'payments' && (
//             <div className="overflow-x-auto">
//               <table className="w-full text-left text-sm whitespace-nowrap">
//                 <thead className="bg-white text-gray-400 text-xs font-bold uppercase tracking-wider border-b border-border">
//                   <tr>
//                     <th className="px-6 py-4">DATE</th>
//                     <th className="px-6 py-4">VEHICLE</th>
//                     <th className="px-6 py-4">PROVIDER</th>
//                     <th className="px-6 py-4">AMOUNT</th>
//                     <th className="px-6 py-4 text-right">STATUS</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-border">
//                   {[
//                     { date: 'Feb 10, 2026', vehicle: 'TR12 ABC', provider: 'Manchester Airport', amount: '£35.00', status: 'Successful' },
//                     { date: 'Feb 09, 2026', vehicle: 'TR12 ABC', provider: 'Heathrow Drop-off', amount: '£12.50', status: 'Successful' },
//                     { date: 'Feb 08, 2026', vehicle: 'TR12 ABC', provider: 'ULEZ', amount: '£5.00', status: 'Pending' },
//                   ].map((row, i) => (
//                     <tr key={i} className="hover:bg-gray-50/50 transition-colors">
//                       <td className="px-6 py-4 text-gray-600">{row.date}</td>
//                       <td className="px-6 py-4 font-medium text-foreground">{row.vehicle}</td>
//                       <td className="px-6 py-4 text-gray-600">{row.provider}</td>
//                       <td className="px-6 py-4 font-medium text-foreground">{row.amount}</td>
//                       <td className="px-6 py-4 text-right">
//                         <Badge variant={row.status === 'Successful' ? 'success' : 'warning'}>{row.status}</Badge>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}

//           {/* TAB 3: SUBSCRIPTION DETAILS */}
//           {activeTab === 'subscription' && (
//             <div className="p-6 md:p-8">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 mb-8">
//                 <div>
//                   <p className="text-xs text-gray-500 mb-1">Subscription Plan</p>
//                   <p className="font-bold text-foreground text-sm">Auto-Pay (£3.99/month)</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 mb-1">Status</p>
//                   <p className="font-bold text-green-600 text-sm">Active</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 mb-1">Wallet</p>
//                   <p className="font-bold text-foreground text-sm">Enabled</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 mb-1">Payment Mode</p>
//                   <p className="font-bold text-foreground text-sm">Automatic</p>
//                 </div>
//               </div>
              
//               {/* Info Box */}
//               <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 text-sm text-blue-900">
//                 <span className="font-bold">Plan Details:</span> Unlimited events with wallet-based automatic payments. No manual confirmation needed.
//               </div>
//             </div>
//           )}

//         </div>
//       </div>

//       {/* ================= MODAL OVERLAY: DEACTIVATE USER ================= */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
//           <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            
//             <h2 className="text-xl font-bold text-foreground mb-3">Deactivate User</h2>
//             <p className="text-sm text-gray-600 mb-8 leading-relaxed">
//               Are you sure you want to deactivate this user? They will lose app access and their wallet will be frozen.
//             </p>
            
//             <div className="flex items-center gap-4">
//               <button 
//                 onClick={() => setIsModalOpen(false)}
//                 className="flex-1 py-2.5 px-4 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
//               >
//                 Cancel
//               </button>
//               <button 
//                 onClick={() => {
//                   // Add actual deactivation logic here
//                   setIsModalOpen(false);
//                 }}
//                 className="flex-1 py-2.5 px-4 bg-red-600 rounded-lg text-sm font-semibold text-white hover:bg-red-700 transition-colors"
//               >
//                 Deactivate
//               </button>
//             </div>

//           </div>
//         </div>
//       )}

//     </div>
//   );
// }





















"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/src/app/components/ui/Badge';

export default function UserDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // 1. Unwrap the params Promise
  const resolvedParams = React.use(params);

  const [activeTab, setActiveTab] = useState<'wallet' | 'payments' | 'subscription'>('wallet');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const user = {
    id: resolvedParams.id, // 2. Use unwrapped ID
    initials: 'SM',
    name: 'Sarah Miller',
    email: 's.miller@example.com',
    phone: '+44 7781 233 567',
    fleet: 'Independent',
    joined: 'Jan 15, 2024',
    walletBalance: '£25.00',
    pendingPayments: '£22.00',
    subStatus: 'Active',
    tier: 'Manual',
  };

  return (
    <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl relative">
      
      {/* Back Link */}
      <Link href="/admin/users" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Users
      </Link>

      {/* ================= 1. USER PROFILE HEADER ================= */}
      <div className="bg-card border border-border rounded-xl shadow-sm p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start gap-6">
        
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-blue-100 text-primary text-xl font-bold flex items-center justify-center shrink-0">
            {user.initials}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
            <p className="text-sm text-gray-500 mt-1">{user.email}</p>
            <p className="text-sm text-gray-500">{user.phone}</p>
            <p className="text-sm text-gray-600 mt-2">
              Fleet: <span className="font-semibold text-foreground">{user.fleet}</span> <span className="mx-2 text-gray-300">|</span> Joined: <span className="font-semibold text-foreground">{user.joined}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-sm font-semibold w-full sm:w-auto justify-center">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Active Account
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button 
              onClick={() => setIsEditModalOpen(true)}
              className="w-full sm:w-auto px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-full transition-colors"
            >
              Edit User
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors"
            >
              Deactivate User
            </button>
          </div>
        </div>

      </div>

      {/* ================= 2. METRICS CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">{user.walletBalance}</h3>
            <p className="text-sm text-gray-500">Wallet Balance</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-orange-500">{user.pendingPayments}</h3>
            <p className="text-sm text-gray-500">Pending Payments</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-green-50 text-green-500 flex items-center justify-center shrink-0">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">{user.subStatus}</h3>
            <p className="text-sm text-gray-500">Subscription Status</p>
          </div>
        </div>

      </div>

      {/* ================= 3. TABS NAVIGATION & CONTENT ================= */}
      <div className="bg-card border border-border rounded-xl shadow-sm mt-2 overflow-hidden">
        
        <div className="flex border-b border-border overflow-x-auto hide-scrollbar px-2">
          <button 
            onClick={() => setActiveTab('wallet')}
            className={`px-6 py-4 text-sm font-bold flex items-center gap-2 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'wallet' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
            Wallet Activity
          </button>
          <button 
            onClick={() => setActiveTab('payments')}
            className={`px-6 py-4 text-sm font-bold flex items-center gap-2 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'payments' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 8 14"/></svg>
            Payment History
          </button>
          <button 
            onClick={() => setActiveTab('subscription')}
            className={`px-6 py-4 text-sm font-bold flex items-center gap-2 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'subscription' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            Subscription Details
          </button>
        </div>

        <div className="p-0">
          
          {/* TAB 1: WALLET ACTIVITY */}
          {activeTab === 'wallet' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-white text-gray-400 text-xs font-bold uppercase tracking-wider border-b border-border">
                  <tr>
                    <th className="px-6 py-4">DATE</th>
                    <th className="px-6 py-4">TYPE</th>
                    <th className="px-6 py-4">DESCRIPTION</th>
                    <th className="px-6 py-4 text-right">AMOUNT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { date: 'Apr 20, 2024', type: 'Top-up', desc: 'Wallet Top-up', amount: '+£40.00', isPositive: true },
                    { date: 'Apr 23, 2024', type: 'Payment', desc: 'Manchester Airport Payment', amount: '£15.00', isPositive: false },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 text-gray-600">{row.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${row.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {row.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-medium text-foreground">{row.desc}</td>
                      <td className={`px-6 py-4 text-right font-medium ${row.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {row.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 2: PAYMENT HISTORY */}
          {activeTab === 'payments' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-white text-gray-400 text-xs font-bold uppercase tracking-wider border-b border-border">
                  <tr>
                    <th className="px-6 py-4">DATE</th>
                    <th className="px-6 py-4">VEHICLE</th>
                    <th className="px-6 py-4">PROVIDER</th>
                    <th className="px-6 py-4">AMOUNT</th>
                    <th className="px-6 py-4 text-right">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { date: 'Apr 23, 2024', vehicle: 'ABC 2224', provider: 'Manchester Airport', amount: '£15.00', status: 'Successful' },
                    { date: 'Apr 22, 2024', vehicle: 'ABC 2224', provider: 'London ULEZ', amount: '£12.50', status: 'Pending' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 text-gray-600">{row.date}</td>
                      <td className="px-6 py-4 font-medium text-foreground">{row.vehicle}</td>
                      <td className="px-6 py-4 text-gray-600">{row.provider}</td>
                      <td className="px-6 py-4 font-medium text-foreground">{row.amount}</td>
                      <td className="px-6 py-4 text-right">
                        <Badge variant={row.status === 'Successful' ? 'success' : 'warning'}>{row.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 3: SUBSCRIPTION DETAILS */}
          {activeTab === 'subscription' && (
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 mb-8">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Subscription Plan</p>
                  <p className="font-bold text-foreground text-sm">Manual (Free)</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Status</p>
                  <p className="font-bold text-green-600 text-sm">Active</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Wallet</p>
                  <p className="font-bold text-foreground text-sm">Enabled</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Payment Mode</p>
                  <p className="font-bold text-foreground text-sm">Manual Intervention</p>
                </div>
              </div>
              
              <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 text-sm text-blue-900">
                <span className="font-bold">Plan Details:</span> User must log in and confirm payments manually. Auto-Pay is not enabled for this account.
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ================= MODAL OVERLAY: DEACTIVATE USER ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            
            <h2 className="text-xl font-bold text-foreground mb-3">Deactivate User</h2>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              Are you sure you want to deactivate this user? They will lose app access and their wallet will be frozen.
            </p>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-2.5 px-4 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                }}
                className="flex-1 py-2.5 px-4 bg-red-600 rounded-lg text-sm font-semibold text-white hover:bg-red-700 transition-colors"
              >
                Deactivate
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ================= MODAL OVERLAY: EDIT USER ================= */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-5 border-b border-border pb-3">
              <h2 className="text-xl font-bold text-foreground">Edit User Details</h2>
              <button onClick={() => setIsEditModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <form className="flex flex-col gap-4 mb-8">
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">Full Name</label>
                <input type="text" defaultValue={user.name} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">Email Address</label>
                <input type="email" defaultValue={user.email} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">Phone Number</label>
                <input type="text" defaultValue={user.phone} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">Subscription Tier</label>
                <select defaultValue={user.tier} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option value="Basic">Basic</option>
                  <option value="Manual">Manual</option>
                  <option value="Auto-Pay">Auto-Pay</option>
                </select>
              </div>
            </form>
            
            <div className="flex items-center gap-4">
              <button 
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="flex-1 py-2.5 px-4 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="flex-1 py-2.5 px-4 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-hover transition-colors shadow-sm"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}