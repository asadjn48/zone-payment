/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react';
// import Link from 'next/link';
// import { Badge } from '@/src/app/components/ui/Badge';

// export default function AdminUsersPage() {
//   const users = [
//     { name: 'John Smith', email: 'john.smith@example.com', fleet: 'City Logistics Ltd', balance: '£125.50', pending: '£35.00', sub: 'Active', status: 'Active' },
//     { name: 'Emma Wilson', email: 'emma.wilson@example.com', fleet: 'Independent', balance: '£0.00', pending: '£12.50', sub: 'None', status: 'Active' },
//     { name: 'Sarah Johnson', email: 'sarah.j@example.com', fleet: 'Express Delivery Co', balance: '£250.00', pending: '—', sub: 'Active', status: 'Active' },
//     { name: 'David Brown', email: 'david.brown@example.com', fleet: 'City Logistics Ltd', balance: '£50.75', pending: '£80.00', sub: 'Active', status: 'Deactivated' },
//     { name: 'Michael Davis', email: 'mdavis@example.com', fleet: 'Independent', balance: '£15.00', pending: '—', sub: 'Expired', status: 'Active' },
//     { name: 'Emily White', email: 'emily.white@example.com', fleet: 'Express Delivery Co', balance: '£180.25', pending: '£45.00', sub: 'Active', status: 'Active' },
//   ];

//   return (
//     <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
      
//       {/* Top Controls Row */}
//       <div className="p-6 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <div className="relative w-full max-w-sm">
//           <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
//           </span>
//           <input 
//             type="text" 
//             placeholder="Search by name or email..." 
//             className="w-full pl-10 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
//           />
//         </div>
//         <div className="flex items-center gap-2 text-sm text-gray-500">
//           <span>Show</span>
//           <input type="text" className="w-12 text-center border border-border rounded py-1 outline-none focus:ring-1 focus:ring-primary" placeholder="10" />
//           <span>entries</span>
//         </div>
//       </div>

//       {/* Table Area */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-left text-sm whitespace-nowrap">
//           <thead className="bg-white text-gray-500 text-xs font-bold uppercase tracking-wider border-b border-border">
//             <tr>
//               <th className="px-6 py-4">NAME</th>
//               <th className="px-6 py-4">EMAIL</th>
//               <th className="px-6 py-4">FLEET</th>
//               <th className="px-6 py-4">WALLET BALANCE</th>
//               <th className="px-6 py-4">PENDING PAYMENTS</th>
//               <th className="px-6 py-4">SUBSCRIPTION</th>
//               <th className="px-6 py-4">ACCOUNT STATUS</th>
//               <th className="px-6 py-4 text-right">ACTIONS</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-border">
//             {users.map((user, i) => (
//               <tr key={i} className="hover:bg-gray-50/50 transition-colors text-gray-600">
//                 <td className="px-6 py-4 font-semibold text-foreground">{user.name}</td>
//                 <td className="px-6 py-4">{user.email}</td>
//                 <td className="px-6 py-4 font-medium text-foreground">{user.fleet}</td>
//                 <td className="px-6 py-4 flex items-center gap-1.5">
//                   <svg className="text-gray-400" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
//                   {user.balance}
//                 </td>
//                 <td className={`px-6 py-4 font-medium ${user.pending !== '—' ? 'text-orange-500' : 'text-gray-400'}`}>
//                   {user.pending}
//                 </td>
//                 <td className="px-6 py-4">
//                   <Badge variant={user.sub === 'Active' ? 'success' : user.sub === 'Expired' ? 'danger' : 'neutral'}>{user.sub}</Badge>
//                 </td>
//                 <td className="px-6 py-4 flex items-center gap-1.5">
//                   <span className={`w-3 h-3 rounded-full border-2 border-white shadow-sm ${user.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
//                   {user.status}
//                 </td>
//                 <td className="px-6 py-4 text-right">
//                   {/* Link routes to the dynamic User Details page we'll build next */}
//                   <Link href={`/admin/users/${user.name.toLowerCase().replace(' ', '-')}`} className="text-primary hover:underline font-medium inline-flex items-center gap-1">
//                     <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
//                     View
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Footer */}
//       <div className="p-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
//         <div>Showing 1 to 6 of 6 entries</div>
//         <div className="flex items-center gap-2">
//           <button className="px-3 py-1 border border-border rounded hover:bg-gray-50 transition text-gray-400">Previous</button>
//           <span className="font-medium text-foreground">Page 1 of 1</span>
//           <button className="px-3 py-1 border border-border rounded hover:bg-gray-50 transition text-gray-400">Next</button>
//         </div>
//       </div>

//     </div>
//   );
// }


























// import React from 'react';
// import Link from 'next/link';
// import { Badge } from '@/src/app/components/ui/Badge';
// import { Button } from '@/src/app/components/ui/Button';

// export default function AdminUsersPage() {
//   const users = [
//     { name: 'Sarah Miller', email: 's.miller@example.com', phone: '+447781233567', tier: 'Manual', balance: '£25.00', vehicles: 2, status: 'Active' },
//     { name: 'James Wilson', email: 's.miller@example.com', phone: '+447781233457', tier: 'Manual', balance: '£15.00', vehicles: 2, status: 'Active' },
//     { name: 'Emma Rogers', email: 's.miller@emple.com', phone: '+447781233567', tier: 'Manual', balance: '£15.00', vehicles: 2, status: 'Active' },
//     { name: 'Paul Johnson', email: '924@aemple.com', phone: '+447781233494', tier: 'ULEZ', balance: '£15.00', vehicles: 1, status: 'Active' },
//     { name: 'Laura Smith', email: 's.miller@example.com', phone: '+447781233567', tier: 'Airport', balance: '£15.00', vehicles: 1, status: 'Active' },
//     { name: 'Nathan Cooper', email: 's.miller@email.com', phone: '+447781233457', tier: 'Manual', balance: '£0.00', vehicles: 2, status: 'Active' },
//     { name: 'Thomas Ward', email: 'thomas@example.com', phone: '+447781233457', tier: 'Airport', balance: '£58.50', vehicles: 2, status: 'Suspended' },
//   ];

//   return (
//     <div className="flex flex-col gap-6 pb-10 mt-4">
//       <h1 className="text-2xl font-bold text-foreground mb-2">Total Active Users</h1>

//       <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        
//         {/* Top Filter Bar */}
//         <div className="p-4 border-b border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-gray-50/50">
          
//           <div className="bg-white border border-border rounded-lg p-4 flex flex-col justify-center min-w-50">
//             <div className="flex items-center gap-2 mb-2">
//               <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
//                 <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
//               </div>
//               <span className="text-2xl font-bold text-foreground">1,089</span>
//             </div>
//             <p className="text-sm text-gray-500">Total Active Users</p>
//           </div>

//           <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
//             <select className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary"><option>All Tiers</option></select>
//             <select className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary"><option>All Statuses</option></select>
            
//             <div className="relative grow max-w-xs">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                 <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
//               </span>
//               <input type="text" placeholder="Search name, email, or vehicle" className="w-full pl-9 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
//             </div>
            
//             <Button className="flex items-center gap-2 py-2 px-4 text-sm">
//               <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
//               Export
//             </Button>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-left text-sm whitespace-nowrap">
//             <thead className="bg-white text-gray-500 font-medium border-b border-border">
//               <tr>
//                 <th className="px-6 py-4">User Name</th>
//                 <th className="px-6 py-4">Email</th>
//                 <th className="px-6 py-4">Phone Number</th>
//                 <th className="px-6 py-4">Tier</th>
//                 <th className="px-6 py-4">Wallet Balance</th>
//                 <th className="px-6 py-4 text-center">Registered Vehicles</th>
//                 <th className="px-6 py-4">Status</th>
//                 <th className="px-6 py-4 text-right">Action</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-border">
//               {users.map((u, i) => (
//                 <tr key={i} className="hover:bg-gray-50/50 transition-colors text-gray-600">
//                   <td className="px-6 py-4 font-medium text-foreground">{u.name}</td>
//                   <td className="px-6 py-4">{u.email}</td>
//                   <td className="px-6 py-4">{u.phone}</td>
//                   <td className="px-6 py-4">{u.tier}</td>
//                   <td className="px-6 py-4 font-medium text-foreground">{u.balance}</td>
//                   <td className="px-6 py-4 text-center">{u.vehicles}</td>
//                   <td className="px-6 py-4">
//                     <Badge variant={u.status === 'Active' ? 'success' : 'danger'}>{u.status}</Badge>
//                   </td>
//                   <td className="px-6 py-4 text-right space-x-2">
//                     <Link href="#" className="text-primary hover:underline font-medium text-xs">View</Link>
//                     <span className="text-gray-300">|</span>
//                     <Link href="#" className="text-primary hover:underline font-medium text-xs">Edit</Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
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

export default function AdminUsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tierFilter, setTierFilter] = useState('All Tiers');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [dateFilter, setDateFilter] = useState('All Time');

  const initialUsers = [
    { id: 'usr-1', name: 'Sarah Miller', email: 's.miller@example.com', phone: '+447781233567', tier: 'Manual', balance: '£25.00', vehicles: 2, status: 'Active' },
    { id: 'usr-2', name: 'James Wilson', email: 'j.wilson@example.com', phone: '+447781233457', tier: 'Manual', balance: '£15.00', vehicles: 2, status: 'Active' },
    { id: 'usr-3', name: 'Emma Rogers', email: 'e.rogers@example.com', phone: '+447781233567', tier: 'Manual', balance: '£15.00', vehicles: 2, status: 'Active' },
    { id: 'usr-4', name: 'Paul Johnson', email: 'p.johnson@example.com', phone: '+447781233494', tier: 'Basic', balance: '£0.00', vehicles: 1, status: 'Active' },
    { id: 'usr-5', name: 'Laura Smith', email: 'l.smith@example.com', phone: '+447781233567', tier: 'Manual', balance: '£15.00', vehicles: 1, status: 'Active' },
    { id: 'usr-6', name: 'Nathan Cooper', email: 'n.cooper@example.com', phone: '+447781233457', tier: 'Auto-Pay', balance: '£50.00', vehicles: 2, status: 'Active' },
    { id: 'usr-7', name: 'Thomas Ward', email: 't.ward@example.com', phone: '+447781233457', tier: 'Basic', balance: '£0.00', vehicles: 2, status: 'Suspended' },
    { id: 'usr-8', name: 'Emily Clarke', email: 'e.clarke@example.com', phone: '+447781233888', tier: 'Manual', balance: '£-12.50', vehicles: 1, status: 'Grace Period' },
  ];

  const filteredUsers = useMemo(() => {
    return initialUsers.filter(user => {
      const matchTier = tierFilter === 'All Tiers' || user.tier === tierFilter;
      const matchStatus = statusFilter === 'All Statuses' || user.status === statusFilter;
      
      const searchLower = searchTerm.toLowerCase();
      const matchSearch = searchTerm === '' || 
                          user.name.toLowerCase().includes(searchLower) || 
                          user.email.toLowerCase().includes(searchLower);

      return matchTier && matchStatus && matchSearch;
    });
  }, [searchTerm, tierFilter, statusFilter, initialUsers]);

  return (
    <div className="flex flex-col gap-6 pb-10 mt-4">
      <h1 className="text-2xl font-bold text-foreground mb-2">Total Active Users</h1>

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        
        {/* Top Filter Bar */}
        <div className="p-4 border-b border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-gray-50/50">
          
          <div className="bg-white border border-border rounded-lg p-4 flex flex-col justify-center min-w-50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <span className="text-2xl font-bold text-foreground">{filteredUsers.length}</span>
            </div>
            <p className="text-sm text-gray-500">Total Users Displayed</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Time">All Time</option>
              <option value="Today">Today</option>
              <option value="Last 30 Days">Last 30 Days</option>
            </select>

            <select value={tierFilter} onChange={(e) => setTierFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Tiers">All Tiers</option>
              <option value="Basic">Basic</option>
              <option value="Manual">Manual</option>
              <option value="Auto-Pay">Auto-Pay</option>
            </select>

            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Statuses">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Grace Period">Grace Period</option>
              <option value="Suspended">Suspended</option>
            </select>
            
            <div className="relative grow max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </span>
              <input 
                type="text" 
                placeholder="Search name or email" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary" 
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
                <th className="px-6 py-4">User Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Phone Number</th>
                <th className="px-6 py-4">Tier</th>
                <th className="px-6 py-4">Wallet Balance</th>
                <th className="px-6 py-4 text-center">Registered Vehicles</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredUsers.length === 0 ? (
                <tr><td colSpan={8} className="text-center py-10 text-gray-500">No users found.</td></tr>
              ) : (
                filteredUsers.map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50/50 transition-colors text-gray-600">
                    <td className="px-6 py-4 font-medium text-foreground">{u.name}</td>
                    <td className="px-6 py-4">{u.email}</td>
                    <td className="px-6 py-4">{u.phone}</td>
                    <td className="px-6 py-4">
                       <span className={`px-2 py-1 rounded text-xs font-medium ${u.tier === 'Auto-Pay' ? 'bg-green-100 text-green-700' : u.tier === 'Manual' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
                        {u.tier}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-foreground">{u.balance}</td>
                    <td className="px-6 py-4 text-center">{u.vehicles}</td>
                    <td className="px-6 py-4">
                      <Badge variant={u.status === 'Active' ? 'success' : u.status === 'Grace Period' ? 'warning' : 'danger'}>{u.status}</Badge>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <Link href={`/admin/users/${u.id}`} className="text-primary hover:underline font-medium text-xs">View/Edit</Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 bg-white">
          <div>Showing {filteredUsers.length > 0 ? 1 : 0} to {Math.min(10, filteredUsers.length)} of {filteredUsers.length} entries</div>
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