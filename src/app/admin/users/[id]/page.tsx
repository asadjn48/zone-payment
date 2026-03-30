





// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Badge } from '@/src/app/components/ui/Badge';

// export default function UserDetailsPage({ params }: { params: Promise<{ id: string }> }) {
//   // 1. Unwrap the params Promise
//   const resolvedParams = React.use(params);

//   const [activeTab, setActiveTab] = useState<'wallet' | 'payments' | 'subscription'>('wallet');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

//   const user = {
//     id: resolvedParams.id, // 2. Use unwrapped ID
//     initials: 'SM',
//     name: 'Sarah Miller',
//     email: 's.miller@example.com',
//     phone: '+44 7781 233 567',
//     fleet: 'Independent',
//     joined: 'Jan 15, 2024',
//     walletBalance: '£25.00',
//     pendingPayments: '£22.00',
//     subStatus: 'Active',
//     tier: 'Manual',
//   };

//   return (
//     <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl relative">
      
//       {/* Back Link */}
//       <Link href="/admin/users" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
//         <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
//         Back to Users
//       </Link>

//       {/* ================= 1. USER PROFILE HEADER ================= */}
//       <div className="bg-card border border-border rounded-xl shadow-sm p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start gap-6">
        
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

//         <div className="flex flex-col items-end gap-3 w-full sm:w-auto">
//           <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-sm font-semibold w-full sm:w-auto justify-center">
//             <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
//             Active Account
//           </div>
//           <div className="flex items-center gap-3 w-full sm:w-auto">
//             <button 
//               onClick={() => setIsEditModalOpen(true)}
//               className="w-full sm:w-auto px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-full transition-colors"
//             >
//               Edit User
//             </button>
//             <button 
//               onClick={() => setIsModalOpen(true)}
//               className="w-full sm:w-auto px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors"
//             >
//               Deactivate User
//             </button>
//           </div>
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
//       <div className="bg-card border border-border rounded-xl shadow-sm mt-2 overflow-hidden">
        
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
//                     { date: 'Apr 20, 2024', type: 'Top-up', desc: 'Wallet Top-up', amount: '+£40.00', isPositive: true },
//                     { date: 'Apr 23, 2024', type: 'Payment', desc: 'Manchester Airport Payment', amount: '£15.00', isPositive: false },
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
//                     { date: 'Apr 23, 2024', vehicle: 'ABC 2224', provider: 'Manchester Airport', amount: '£15.00', status: 'Successful' },
//                     { date: 'Apr 22, 2024', vehicle: 'ABC 2224', provider: 'London ULEZ', amount: '£12.50', status: 'Pending' },
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
//                   <p className="font-bold text-foreground text-sm">Manual (Free)</p>
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
//                   <p className="font-bold text-foreground text-sm">Manual Intervention</p>
//                 </div>
//               </div>
              
//               <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 text-sm text-blue-900">
//                 <span className="font-bold">Plan Details:</span> User must log in and confirm payments manually. Auto-Pay is not enabled for this account.
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

//       {/* ================= MODAL OVERLAY: EDIT USER ================= */}
//       {isEditModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
//           <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
//             <div className="flex justify-between items-center mb-5 border-b border-border pb-3">
//               <h2 className="text-xl font-bold text-foreground">Edit User Details</h2>
//               <button onClick={() => setIsEditModalOpen(false)} className="text-gray-400 hover:text-gray-600">
//                 <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
//               </button>
//             </div>
            
//             <form className="flex flex-col gap-4 mb-8">
//               <div>
//                 <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">Full Name</label>
//                 <input type="text" defaultValue={user.name} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
//               </div>
//               <div>
//                 <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">Email Address</label>
//                 <input type="email" defaultValue={user.email} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
//               </div>
//               <div>
//                 <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">Phone Number</label>
//                 <input type="text" defaultValue={user.phone} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
//               </div>
//               <div>
//                 <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">Subscription Tier</label>
//                 <select defaultValue={user.tier} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white">
//                   <option value="Basic">Basic</option>
//                   <option value="Manual">Manual</option>
//                   <option value="Auto-Pay">Auto-Pay</option>
//                 </select>
//               </div>
//             </form>
            
//             <div className="flex items-center gap-4">
//               <button 
//                 type="button"
//                 onClick={() => setIsEditModalOpen(false)}
//                 className="flex-1 py-2.5 px-4 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
//               >
//                 Cancel
//               </button>
//               <button 
//                 type="button"
//                 onClick={() => setIsEditModalOpen(false)}
//                 className="flex-1 py-2.5 px-4 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-hover transition-colors shadow-sm"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

























// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Badge } from '@/src/app/components/ui/Badge';

// export default function UserDetailsPage({ params }: { params: Promise<{ id: string }> }) {
//   // 1. Unwrap the params Promise
//   const resolvedParams = React.use(params);

//   const [activeTab, setActiveTab] = useState<'financials' | 'subscription'>('financials');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

//   // You can change 'tier' to 'Auto-Pay', 'Manual', or 'Basic' to see the UI adapt automatically
//   const user = {
//     id: resolvedParams.id,
//     initials: 'SM',
//     name: 'Sarah Miller',
//     email: 's.miller@example.com',
//     phone: '+44 7781 233 567',
//     fleet: 'Independent',
//     joined: 'Jan 15, 2024',
//     walletBalance: '£25.00',
//     pendingPayments: '£22.00',
//     subStatus: 'Active',
//     tier: 'Auto-Pay', // Try changing this to 'Manual'
//   };

//   const isAutoPay = user.tier === 'Auto-Pay';

//   return (
//     <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl relative">
      
//       {/* Back Link */}
//       <Link href="/admin/users" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
//         <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
//         Back to Users
//       </Link>

//       {/* ================= 1. USER PROFILE HEADER ================= */}
//       <div className="bg-card border border-border rounded-xl shadow-sm p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start gap-6">
        
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

//         <div className="flex flex-col items-end gap-3 w-full sm:w-auto">
//           <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-sm font-semibold w-full sm:w-auto justify-center">
//             <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
//             Active Account
//           </div>
//           <div className="flex items-center gap-3 w-full sm:w-auto">
//             <button 
//               onClick={() => setIsEditModalOpen(true)}
//               className="w-full sm:w-auto px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-full transition-colors"
//             >
//               Edit User
//             </button>
//             <button 
//               onClick={() => setIsModalOpen(true)}
//               className="w-full sm:w-auto px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors"
//             >
//               Deactivate User
//             </button>
//           </div>
//         </div>

//       </div>

//       {/* ================= 2. CONDITIONAL METRICS CARDS ================= */}
//       {/* If Auto-Pay, show 3 columns. If Manual/Basic, show 2 columns. */}
//       <div className={`grid grid-cols-1 ${isAutoPay ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
        
//         {/* Wallet Balance: Only shown for Auto-Pay users */}
//         {isAutoPay && (
//           <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center gap-4">
//             <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
//               <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold text-foreground">{user.walletBalance}</h3>
//               <p className="text-sm text-gray-500">Wallet Balance</p>
//             </div>
//           </div>
//         )}

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
//             {/* Subscription status clearly states the tier */}
//             <h3 className="text-xl font-bold text-foreground">{user.subStatus} – {user.tier}</h3>
//             <p className="text-sm text-gray-500">Subscription Status</p>
//           </div>
//         </div>

//       </div>

//       {/* ================= 3. TABS NAVIGATION & CONTENT ================= */}
//       <div className="bg-card border border-border rounded-xl shadow-sm mt-2 overflow-hidden">
        
//         <div className="flex border-b border-border overflow-x-auto hide-scrollbar px-2">
//           <button 
//             onClick={() => setActiveTab('financials')}
//             className={`px-6 py-4 text-sm font-bold flex items-center gap-2 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'financials' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
//           >
//             {isAutoPay ? (
//               <>
//                 <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
//                 Wallet Activity & Payments
//               </>
//             ) : (
//               <>
//                 <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 8 14"/></svg>
//                 Payment History
//               </>
//             )}
//           </button>
          
//           <button 
//             onClick={() => setActiveTab('subscription')}
//             className={`px-6 py-4 text-sm font-bold flex items-center gap-2 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'subscription' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
//           >
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
//             Subscription Details
//           </button>
//         </div>

//         <div className="p-0">
          
//           {/* TAB 1: FINANCIALS (Merged or Standard depending on Tier) */}
//           {activeTab === 'financials' && (
//             <div className="overflow-x-auto">
//               <table className="w-full text-left text-sm whitespace-nowrap">
//                 <thead className="bg-white text-gray-400 text-xs font-bold uppercase tracking-wider border-b border-border">
//                   <tr>
//                     <th className="px-6 py-4">DATE</th>
//                     {isAutoPay && <th className="px-6 py-4">TYPE</th>}
//                     <th className="px-6 py-4">{isAutoPay ? 'DESCRIPTION' : 'PROVIDER / ZONE'}</th>
//                     <th className="px-6 py-4 text-right">AMOUNT</th>
//                     {!isAutoPay && <th className="px-6 py-4 text-right">STATUS</th>}
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-border">
                  
//                   {isAutoPay ? (
//                     // --- AUTO-PAY: Shows Top-ups and Payments ---
//                     [
//                       { date: 'Apr 20, 2024', type: 'Top-up', desc: 'Wallet Auto-Replenishment', amount: '+£50.00', isPositive: true },
//                       { date: 'Apr 23, 2024', type: 'Payment', desc: 'Manchester Airport Auto-Payment', amount: '£15.00', isPositive: false },
//                     ].map((row, i) => (
//                       <tr key={i} className="hover:bg-gray-50/50 transition-colors">
//                         <td className="px-6 py-4 text-gray-600">{row.date}</td>
//                         <td className="px-6 py-4">
//                           <span className={`px-2 py-1 rounded text-xs font-medium ${row.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//                             {row.type}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 font-medium text-foreground">{row.desc}</td>
//                         <td className={`px-6 py-4 text-right font-medium ${row.isPositive ? 'text-green-600' : 'text-red-600'}`}>
//                           {row.amount}
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     // --- MANUAL / BASIC: Shows straight payment history ---
//                     [
//                       { date: 'Apr 23, 2024', provider: 'Manchester Airport', amount: '£15.00', status: 'Successful' },
//                       { date: 'Apr 22, 2024', provider: 'London ULEZ', amount: '£12.50', status: 'Pending' },
//                     ].map((row, i) => (
//                       <tr key={i} className="hover:bg-gray-50/50 transition-colors">
//                         <td className="px-6 py-4 text-gray-600">{row.date}</td>
//                         <td className="px-6 py-4 font-medium text-foreground">{row.provider}</td>
//                         <td className="px-6 py-4 text-right font-medium text-foreground">{row.amount}</td>
//                         <td className="px-6 py-4 text-right">
//                           <Badge variant={row.status === 'Successful' ? 'success' : 'warning'}>{row.status}</Badge>
//                         </td>
//                       </tr>
//                     ))
//                   )}

//                 </tbody>
//               </table>
//             </div>
//           )}

//           {/* TAB 2: SUBSCRIPTION DETAILS */}
//           {activeTab === 'subscription' && (
//             <div className="p-6 md:p-8">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 mb-8">
//                 <div>
//                   <p className="text-xs text-gray-500 mb-1">Subscription Plan</p>
//                   <p className="font-bold text-foreground text-sm">{user.tier}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 mb-1">Status</p>
//                   <p className="font-bold text-green-600 text-sm">Active</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 mb-1">Wallet</p>
//                   <p className="font-bold text-foreground text-sm">{isAutoPay ? 'Enabled' : 'Not Applicable'}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 mb-1">Payment Mode</p>
//                   <p className="font-bold text-foreground text-sm">{isAutoPay ? 'Automatic Processing' : 'Manual Intervention'}</p>
//                 </div>
//               </div>
              
//               <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 text-sm text-blue-900">
//                 {isAutoPay ? (
//                   <><span className="font-bold">Plan Details:</span> User maintains a pre-paid wallet. System automatically processes zone fees without manual confirmation.</>
//                 ) : (
//                   <><span className="font-bold">Plan Details:</span> User must log in and confirm payments manually. Auto-Pay is not enabled for this account.</>
//                 )}
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

//       {/* ================= MODAL OVERLAY: EDIT USER ================= */}
//       {isEditModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
//           <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
//             <div className="flex justify-between items-center mb-5 border-b border-border pb-3">
//               <h2 className="text-xl font-bold text-foreground">Edit User Details</h2>
//               <button onClick={() => setIsEditModalOpen(false)} className="text-gray-400 hover:text-gray-600">
//                 <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
//               </button>
//             </div>
            
//             <form className="flex flex-col gap-4 mb-8">
//               <div>
//                 <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">Full Name</label>
//                 <input type="text" defaultValue={user.name} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
//               </div>
//               <div>
//                 <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">Email Address</label>
//                 <input type="email" defaultValue={user.email} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
//               </div>
//               <div>
//                 <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">Phone Number</label>
//                 <input type="text" defaultValue={user.phone} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
//               </div>
//               <div>
//                 <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">Subscription Tier</label>
//                 <select defaultValue={user.tier} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white">
//                   <option value="Basic">Basic</option>
//                   <option value="Manual">Manual</option>
//                   <option value="Auto-Pay">Auto-Pay</option>
//                 </select>
//               </div>
//             </form>
            
//             <div className="flex items-center gap-4">
//               <button 
//                 type="button"
//                 onClick={() => setIsEditModalOpen(false)}
//                 className="flex-1 py-2.5 px-4 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
//               >
//                 Cancel
//               </button>
//               <button 
//                 type="button"
//                 onClick={() => setIsEditModalOpen(false)}
//                 className="flex-1 py-2.5 px-4 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-hover transition-colors shadow-sm"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }








































// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useParams } from 'next/navigation';
// import { Badge } from '@/src/app/components/ui/Badge';

// // Mock database moved OUTSIDE the component so hot-reloading works
// const mockDatabase = [
//   { id: 'usr-1', initials: 'SM', name: 'Sarah Miller', email: 's.miller@example.com', phone: '+44 7781 233 567', fleet: 'Independent', joined: 'Jan 15, 2024', walletBalance: 'N/A', pendingPayments: '£12.50', subStatus: 'Active', tier: 'Manual' },
//   { id: 'usr-6', initials: 'NC', name: 'Nathan Cooper', email: 'n.cooper@example.com', phone: '+44 7781 233 457', fleet: 'City Logistics Ltd', joined: 'Mar 10, 2024', walletBalance: '£50.00', pendingPayments: '£0.00', subStatus: 'Active', tier: 'Auto-Pay' },
//   { id: 'usr-7', initials: 'TW', name: 'Thomas Ward', email: 't.ward@example.com', phone: '+44 7781 233 457', fleet: 'Independent', joined: 'Feb 02, 2024', walletBalance: 'N/A', pendingPayments: '£25.00', subStatus: 'Inactive', tier: 'Basic' },
// ];

// export default function UserDetailsPage() {
//   const params = useParams();
//   const currentId = params?.id as string;

//   // Find the exact user clicked, fallback to the Auto-Pay mock user for testing if visited directly
//   const user = mockDatabase.find(u => u.id === currentId) || mockDatabase[1];

//   const [activeTab, setActiveTab] = useState<'financials' | 'subscription'>('financials');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

//   const isAutoPay = user.tier === 'Auto-Pay';

//   return (
//     <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl relative">
      
//       {/* Back Link */}
//       <Link href="/admin/users" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
//         <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
//         Back to Manage Users
//       </Link>

//       {/* ================= 1. USER PROFILE HEADER ================= */}
//       <div className="bg-card border border-border rounded-xl shadow-sm p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start gap-6">
        
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

//         <div className="flex flex-col items-end gap-3 w-full sm:w-auto">
//           <div className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-full text-sm font-semibold w-full sm:w-auto justify-center ${user.subStatus === 'Active' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
//             <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//               {user.subStatus === 'Active' 
//                 ? <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>
//                 : <><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></>}
//             </svg>
//             {user.subStatus} Account
//           </div>
//           <div className="flex items-center gap-3 w-full sm:w-auto">
//             <button 
//               onClick={() => setIsEditModalOpen(true)}
//               className="w-full sm:w-auto px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-full transition-colors shadow-sm"
//             >
//               Edit User
//             </button>
//             <button 
//               onClick={() => setIsModalOpen(true)}
//               className="w-full sm:w-auto px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 text-sm font-medium rounded-full transition-colors border border-red-100 shadow-sm"
//             >
//               Deactivate
//             </button>
//           </div>
//         </div>

//       </div>

//       {/* ================= 2. CONDITIONAL METRICS CARDS ================= */}
//       {/* If Auto-Pay, show 3 columns. If Manual/Basic, show 2 columns. */}
//       <div className={`grid grid-cols-1 ${isAutoPay ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
        
//         {/* Wallet Balance: Only shown for Auto-Pay users */}
//         {isAutoPay && (
//           <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center gap-4">
//             <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
//               <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold text-foreground">{user.walletBalance}</h3>
//               <p className="text-sm text-gray-500">Wallet Balance</p>
//             </div>
//           </div>
//         )}

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
//             <h3 className="text-xl font-bold text-foreground">{user.subStatus} – {user.tier}</h3>
//             <p className="text-sm text-gray-500">Subscription Status</p>
//           </div>
//         </div>

//       </div>

//       {/* ================= 3. TABS NAVIGATION & CONTENT ================= */}
//       <div className="bg-card border border-border rounded-xl shadow-sm mt-2 overflow-hidden">
        
//         <div className="flex border-b border-border overflow-x-auto hide-scrollbar px-2">
//           <button 
//             onClick={() => setActiveTab('financials')}
//             className={`px-6 py-4 text-sm font-bold flex items-center gap-2 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'financials' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
//           >
//             {isAutoPay ? (
//               <>
//                 <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
//                 Wallet Activity & Payments
//               </>
//             ) : (
//               <>
//                 <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 8 14"/></svg>
//                 Payment History
//               </>
//             )}
//           </button>
          
//           <button 
//             onClick={() => setActiveTab('subscription')}
//             className={`px-6 py-4 text-sm font-bold flex items-center gap-2 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'subscription' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
//           >
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
//             Subscription Details
//           </button>
//         </div>

//         <div className="p-0">
          
//           {/* TAB 1: FINANCIALS (Merged or Standard depending on Tier) */}
//           {activeTab === 'financials' && (
//             <div className="overflow-x-auto">
//               <table className="w-full text-left text-sm whitespace-nowrap">
//                 <thead className="bg-white text-gray-400 text-xs font-bold uppercase tracking-wider border-b border-border">
//                   <tr>
//                     <th className="px-6 py-4">DATE</th>
//                     {isAutoPay && <th className="px-6 py-4">TYPE</th>}
//                     <th className="px-6 py-4">{isAutoPay ? 'DESCRIPTION' : 'PROVIDER / ZONE'}</th>
//                     <th className="px-6 py-4 text-right">AMOUNT</th>
//                     {!isAutoPay && <th className="px-6 py-4 text-right">STATUS</th>}
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-border">
                  
//                   {isAutoPay ? (
//                     // --- AUTO-PAY: Shows Top-ups and Payments ---
//                     [
//                       { date: 'Apr 20, 2024', type: 'Top-up', desc: 'Wallet Auto-Replenishment', amount: '+£50.00', isPositive: true },
//                       { date: 'Apr 23, 2024', type: 'Payment', desc: 'Manchester Airport Auto-Payment', amount: '£15.00', isPositive: false },
//                     ].map((row, i) => (
//                       <tr key={i} className="hover:bg-gray-50/50 transition-colors">
//                         <td className="px-6 py-4 text-gray-600">{row.date}</td>
//                         <td className="px-6 py-4">
//                           <span className={`px-2 py-1 rounded text-xs font-medium ${row.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//                             {row.type}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 font-medium text-foreground">{row.desc}</td>
//                         <td className={`px-6 py-4 text-right font-medium ${row.isPositive ? 'text-green-600' : 'text-red-600'}`}>
//                           {row.amount}
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     // --- MANUAL / BASIC: Shows straight payment history ---
//                     [
//                       { date: 'Apr 23, 2024', provider: 'Manchester Airport', amount: '£15.00', status: 'Successful' },
//                       { date: 'Apr 22, 2024', provider: 'London ULEZ', amount: '£12.50', status: 'Pending' },
//                     ].map((row, i) => (
//                       <tr key={i} className="hover:bg-gray-50/50 transition-colors">
//                         <td className="px-6 py-4 text-gray-600">{row.date}</td>
//                         <td className="px-6 py-4 font-medium text-foreground">{row.provider}</td>
//                         <td className="px-6 py-4 text-right font-medium text-foreground">{row.amount}</td>
//                         <td className="px-6 py-4 text-right">
//                           <Badge variant={row.status === 'Successful' ? 'success' : 'warning'}>{row.status}</Badge>
//                         </td>
//                       </tr>
//                     ))
//                   )}

//                 </tbody>
//               </table>
//             </div>
//           )}

//           {/* TAB 2: SUBSCRIPTION DETAILS */}
//           {activeTab === 'subscription' && (
//             <div className="p-6 md:p-8">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 mb-8">
//                 <div>
//                   <p className="text-xs text-gray-500 mb-1">Subscription Plan</p>
//                   <p className="font-bold text-foreground text-sm">{user.tier}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 mb-1">Status</p>
//                   <p className="font-bold text-foreground text-sm">{user.subStatus}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 mb-1">Wallet</p>
//                   <p className="font-bold text-foreground text-sm">{isAutoPay ? 'Enabled' : 'Not Applicable'}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 mb-1">Payment Mode</p>
//                   <p className="font-bold text-foreground text-sm">{isAutoPay ? 'Automatic Processing' : 'Manual Intervention'}</p>
//                 </div>
//               </div>
              
//               <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 text-sm text-blue-900">
//                 {isAutoPay ? (
//                   <><span className="font-bold">Plan Details:</span> User maintains a pre-paid wallet. System automatically processes zone fees without manual confirmation.</>
//                 ) : (
//                   <><span className="font-bold">Plan Details:</span> User must log in and confirm payments manually. Auto-Pay is not enabled for this account.</>
//                 )}
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

//       {/* ================= MODAL OVERLAY: EDIT USER ================= */}
//       {isEditModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
//           <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
//             <div className="flex justify-between items-center mb-5 border-b border-border pb-3">
//               <h2 className="text-xl font-bold text-foreground">Edit User Details</h2>
//               <button onClick={() => setIsEditModalOpen(false)} className="text-gray-400 hover:text-gray-600">
//                 <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
//               </button>
//             </div>
            
//             <form className="flex flex-col gap-4 mb-8">
//               <div>
//                 <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">Full Name</label>
//                 <input type="text" defaultValue={user.name} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
//               </div>
//               <div>
//                 <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">Email Address</label>
//                 <input type="email" defaultValue={user.email} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
//               </div>
//               <div>
//                 <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">Phone Number</label>
//                 <input type="text" defaultValue={user.phone} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
//               </div>
//               <div>
//                 <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">Subscription Tier</label>
//                 <select defaultValue={user.tier} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white">
//                   <option value="Basic">Basic</option>
//                   <option value="Manual">Manual</option>
//                   <option value="Auto-Pay">Auto-Pay</option>
//                 </select>
//               </div>
//             </form>
            
//             <div className="flex items-center gap-4">
//               <button 
//                 type="button"
//                 onClick={() => setIsEditModalOpen(false)}
//                 className="flex-1 py-2.5 px-4 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
//               >
//                 Cancel
//               </button>
//               <button 
//                 type="button"
//                 onClick={() => setIsEditModalOpen(false)}
//                 className="flex-1 py-2.5 px-4 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-hover transition-colors shadow-sm"
//               >
//                 Save Changes
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
import { useParams } from 'next/navigation';
import { Badge } from '@/src/app/components/ui/Badge';

const mockDatabase = [
  { 
    id: 'usr-1', initials: 'SM', name: 'Sarah Miller', email: 's.miller@example.com', phone: '+44 7781 233 567', 
    fleet: 'Independent', joined: 'Jan 15, 2024', walletBalance: 'N/A', pendingPayments: '£12.50', subStatus: 'Active', tier: 'Manual',
    vehicle: { reg: 'ABC 2224', model: 'Ford Focus', emissions: 'Euro 5' }
  },
  { 
    id: 'usr-2', initials: 'JW', name: 'James Wilson', email: 'j.wilson@example.com', phone: '+44 7781 233 457', 
    fleet: 'Independent', joined: 'Feb 12, 2024', walletBalance: 'N/A', pendingPayments: '£0.00', subStatus: 'Active', tier: 'Manual',
    vehicle: { reg: 'MW-6901', model: 'Honda Civic', emissions: 'Euro 6' }
  },
  { 
    id: 'usr-3', initials: 'ER', name: 'Emma Rogers', email: 'e.rogers@example.com', phone: '+44 7781 233 567', 
    fleet: 'City Logistics Ltd', joined: 'Mar 01, 2024', walletBalance: '£15.00', pendingPayments: '£0.00', subStatus: 'Active', tier: 'Auto-Pay',
    vehicle: { reg: 'CVS 2044', model: 'Nissan Leaf', emissions: 'Zero Emission' }
  },
  { 
    id: 'usr-4', initials: 'PJ', name: 'Paul Johnson', email: 'p.johnson@example.com', phone: '+44 7781 233 494', 
    fleet: 'Independent', joined: 'Mar 15, 2024', walletBalance: 'N/A', pendingPayments: '£12.50', subStatus: 'Active', tier: 'Basic',
    vehicle: { reg: 'EFG 1035', model: 'BMW 320d', emissions: 'Euro 6' }
  },
  { 
    id: 'usr-5', initials: 'LS', name: 'Laura Smith', email: 'l.smith@example.com', phone: '+44 7781 233 567', 
    fleet: 'City Logistics Ltd', joined: 'Apr 05, 2024', walletBalance: 'N/A', pendingPayments: '£0.00', subStatus: 'Active', tier: 'Manual',
    vehicle: { reg: 'XYZ 9876', model: 'Audi A4', emissions: 'Euro 5' }
  },
  { 
    id: 'usr-6', initials: 'NC', name: 'Nathan Cooper', email: 'n.cooper@example.com', phone: '+44 7781 233 457', 
    fleet: 'City Logistics Ltd', joined: 'Mar 10, 2024', walletBalance: '£50.00', pendingPayments: '£0.00', subStatus: 'Active', tier: 'Auto-Pay',
    vehicle: { reg: 'GIM 2346', model: 'Mercedes Sprinter', emissions: 'Euro 6' }
  },
  { 
    id: 'usr-7', initials: 'TW', name: 'Thomas Ward', email: 't.ward@example.com', phone: '+44 7781 233 457', 
    fleet: 'Independent', joined: 'Feb 02, 2024', walletBalance: 'N/A', pendingPayments: '£25.00', subStatus: 'Inactive', tier: 'Basic',
    vehicle: { reg: 'LMN 8901', model: 'Vauxhall Transporter', emissions: 'Euro 6' }
  },
  { 
    id: 'usr-8', initials: 'EC', name: 'Emily Clarke', email: 'e.clarke@example.com', phone: '+44 7781 233 888', 
    fleet: 'Independent', joined: 'Jan 20, 2024', walletBalance: '£-12.50', pendingPayments: '£12.50', subStatus: 'Inactive', tier: 'Auto-Pay',
    vehicle: { reg: 'PQR 4455', model: 'Tesla Model 3', emissions: 'Zero Emission' }
  },
];

// historical events 
const pastChargeableEvents = [
  { id: 'EV-9021', date: 'Apr 23, 2024', provider: 'Manchester Airport', zone: 'Airport Drop-off', amount: '£15.00', status: 'Paid' },
  { id: 'EV-8832', date: 'Apr 14, 2024', provider: 'London ULEZ', zone: 'Clean Air Zone', amount: '£12.50', status: 'Paid' },
  { id: 'EV-7621', date: 'Mar 28, 2024', provider: 'Birmingham CAZ', zone: 'Clean Air Zone', amount: '£8.00', status: 'Expired - Fine Issued' },
  { id: 'EV-6544', date: 'Mar 10, 2024', provider: 'Heathrow Parking', zone: 'Short Stay', amount: '£10.00', status: 'Paid' },
];

export default function UserDetailsPage() {
  const params = useParams();
  const currentId = params?.id as string;

  // Find the exact user clicked, fallback to the Auto-Pay mock user for testing if visited directly
  const user = mockDatabase.find(u => u.id === currentId) || mockDatabase[1];

  const isAutoPay = user.tier === 'Auto-Pay';

  // Default to 'events' so it always works perfectly regardless of subscription tier
  const [activeTab, setActiveTab] = useState<'wallet' | 'events' | 'subscription'>('events');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl relative">
      
      {/* Back Link */}
      <Link href="/admin/users" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Manage Users
      </Link>

      {/* ================= 1. USER PROFILE HEADER (Updated with Vehicle Info) ================= */}
      <div className="bg-card border border-border rounded-xl shadow-sm p-6 md:p-8 flex flex-col xl:flex-row justify-between items-start gap-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          
          {/* User Details */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-blue-100 text-primary text-xl font-bold flex items-center justify-center shrink-0">
              {user.initials}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
              <p className="text-sm text-gray-500 mt-1">{user.email} <span className="mx-1">•</span> {user.phone}</p>
              <p className="text-sm text-gray-600 mt-2">
                Fleet: <span className="font-semibold text-foreground">{user.fleet}</span> <span className="mx-2 text-gray-300">|</span> Joined: <span className="font-semibold text-foreground">{user.joined}</span>
              </p>
            </div>
          </div>

          {/* New Vehicle Information Section */}
          <div className="md:border-l border-border md:pl-8 flex flex-col justify-center">
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">Registered Vehicle</p>
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 border border-gray-200 text-gray-800 font-mono font-bold px-3 py-1.5 rounded-lg text-lg tracking-wide">
                {user.vehicle.reg}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{user.vehicle.model}</p>
                <p className="text-xs text-gray-500 mt-0.5">{user.vehicle.emissions}</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-end gap-3 w-full xl:w-auto mt-4 xl:mt-0">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-full text-sm font-semibold w-full xl:w-auto justify-center ${user.subStatus === 'Active' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {user.subStatus === 'Active' 
                ? <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>
                : <><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></>}
            </svg>
            {user.subStatus} Account
          </div>
          <div className="flex items-center gap-3 w-full xl:w-auto">
            <button 
              onClick={() => setIsEditModalOpen(true)}
              className="w-full xl:w-auto px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-full transition-colors shadow-sm"
            >
              Edit User
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full xl:w-auto px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 text-sm font-medium rounded-full transition-colors border border-red-100 shadow-sm"
            >
              Deactivate
            </button>
          </div>
        </div>

      </div>

      {/* ================= 2. CONSISTENT METRICS CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Wallet Balance (Always shows, displays N/A for manual users) */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center gap-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${isAutoPay ? 'bg-blue-50 text-blue-500' : 'bg-gray-100 text-gray-400'}`}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
          </div>
          <div>
            <h3 className={`text-2xl font-bold ${isAutoPay ? 'text-foreground' : 'text-gray-400'}`}>{user.walletBalance}</h3>
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
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${user.subStatus === 'Active' ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'}`}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">{user.subStatus} – {user.tier}</h3>
            <p className="text-sm text-gray-500">Subscription Status</p>
          </div>
        </div>

      </div>

      {/* ================= 3. DYNAMIC TABS & CONTENT ================= */}
      <div className="bg-card border border-border rounded-xl shadow-sm mt-2 overflow-hidden">
        
        <div className="flex border-b border-border overflow-x-auto hide-scrollbar px-2 bg-gray-50/50">
          
          {/* Only show Wallet Activity if user is Auto-Pay */}
          {isAutoPay && (
            <button 
              onClick={() => setActiveTab('wallet')}
              className={`px-6 py-4 text-sm font-bold flex items-center gap-2 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'wallet' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              Wallet Activity
            </button>
          )}

          <button 
            onClick={() => setActiveTab('events')}
            className={`px-6 py-4 text-sm font-bold flex items-center gap-2 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'events' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 8 14"/></svg>
            Past Chargeable Events
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
          
          {/* TAB 1: WALLET ACTIVITY (Auto-Pay Only) */}
          {activeTab === 'wallet' && isAutoPay && (
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
                    { date: 'Apr 20, 2024', type: 'Top-up', desc: 'Wallet Auto-Replenishment', amount: '+£50.00', isPositive: true },
                    { date: 'Apr 23, 2024', type: 'Payment', desc: 'Manchester Airport Auto-Payment', amount: '£15.00', isPositive: false },
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

          {/* TAB 2: PAST CHARGEABLE EVENTS (Shows for everyone) */}
          {activeTab === 'events' && (
             <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-white text-gray-400 text-xs font-bold uppercase tracking-wider border-b border-border">
                  <tr>
                    <th className="px-6 py-4">DATE</th>
                    <th className="px-6 py-4">PROVIDER</th>
                    <th className="px-6 py-4">ZONE TYPE</th>
                    <th className="px-6 py-4 text-right">AMOUNT</th>
                    <th className="px-6 py-4 text-right">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {pastChargeableEvents.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 text-gray-600">{row.date}</td>
                      <td className="px-6 py-4 font-medium text-foreground">{row.provider}</td>
                      <td className="px-6 py-4 text-gray-500">{row.zone}</td>
                      <td className="px-6 py-4 text-right font-medium text-foreground">{row.amount}</td>
                      <td className="px-6 py-4 text-right">
                        <Badge variant={row.status === 'Paid' ? 'success' : 'danger'}>{row.status}</Badge>
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
                  <p className="font-bold text-foreground text-sm">{user.tier}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Status</p>
                  <p className={`font-bold text-sm ${user.subStatus === 'Active' ? 'text-green-600' : 'text-red-600'}`}>{user.subStatus}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Wallet</p>
                  <p className="font-bold text-foreground text-sm">{isAutoPay ? 'Enabled' : 'Not Applicable'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Payment Mode</p>
                  <p className="font-bold text-foreground text-sm">{isAutoPay ? 'Automatic Processing' : 'Manual Intervention'}</p>
                </div>
              </div>
              
              <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 text-sm text-blue-900">
                {isAutoPay ? (
                  <><span className="font-bold">Plan Details:</span> User maintains a pre-paid wallet. System automatically processes zone fees without manual confirmation.</>
                ) : (
                  <><span className="font-bold">Plan Details:</span> User must log in and confirm payments manually. Auto-Pay is not enabled for this account.</>
                )}
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