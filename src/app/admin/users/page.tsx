import React from 'react';
import Link from 'next/link';
import { Badge } from '@/src/app/components/ui/Badge';

export default function AdminUsersPage() {
  const users = [
    { name: 'John Smith', email: 'john.smith@example.com', fleet: 'City Logistics Ltd', balance: '£125.50', pending: '£35.00', sub: 'Active', status: 'Active' },
    { name: 'Emma Wilson', email: 'emma.wilson@example.com', fleet: 'Independent', balance: '£0.00', pending: '£12.50', sub: 'None', status: 'Active' },
    { name: 'Sarah Johnson', email: 'sarah.j@example.com', fleet: 'Express Delivery Co', balance: '£250.00', pending: '—', sub: 'Active', status: 'Active' },
    { name: 'David Brown', email: 'david.brown@example.com', fleet: 'City Logistics Ltd', balance: '£50.75', pending: '£80.00', sub: 'Active', status: 'Deactivated' },
    { name: 'Michael Davis', email: 'mdavis@example.com', fleet: 'Independent', balance: '£15.00', pending: '—', sub: 'Expired', status: 'Active' },
    { name: 'Emily White', email: 'emily.white@example.com', fleet: 'Express Delivery Co', balance: '£180.25', pending: '£45.00', sub: 'Active', status: 'Active' },
  ];

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
      
      {/* Top Controls Row */}
      <div className="p-6 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full max-w-sm">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </span>
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Show</span>
          <input type="text" className="w-12 text-center border border-border rounded py-1 outline-none focus:ring-1 focus:ring-primary" placeholder="10" />
          <span>entries</span>
        </div>
      </div>

      {/* Table Area */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-white text-gray-500 text-xs font-bold uppercase tracking-wider border-b border-border">
            <tr>
              <th className="px-6 py-4">NAME</th>
              <th className="px-6 py-4">EMAIL</th>
              <th className="px-6 py-4">FLEET</th>
              <th className="px-6 py-4">WALLET BALANCE</th>
              <th className="px-6 py-4">PENDING PAYMENTS</th>
              <th className="px-6 py-4">SUBSCRIPTION</th>
              <th className="px-6 py-4">ACCOUNT STATUS</th>
              <th className="px-6 py-4 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {users.map((user, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors text-gray-600">
                <td className="px-6 py-4 font-semibold text-foreground">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4 font-medium text-foreground">{user.fleet}</td>
                <td className="px-6 py-4 flex items-center gap-1.5">
                  <svg className="text-gray-400" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                  {user.balance}
                </td>
                <td className={`px-6 py-4 font-medium ${user.pending !== '—' ? 'text-orange-500' : 'text-gray-400'}`}>
                  {user.pending}
                </td>
                <td className="px-6 py-4">
                  <Badge variant={user.sub === 'Active' ? 'success' : user.sub === 'Expired' ? 'danger' : 'neutral'}>{user.sub}</Badge>
                </td>
                <td className="px-6 py-4 flex items-center gap-1.5">
                  <span className={`w-3 h-3 rounded-full border-2 border-white shadow-sm ${user.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                  {user.status}
                </td>
                <td className="px-6 py-4 text-right">
                  {/* Link routes to the dynamic User Details page we'll build next */}
                  <Link href={`/admin/users/${user.name.toLowerCase().replace(' ', '-')}`} className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    View
                  </Link>
                </td>
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