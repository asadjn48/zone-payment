/* eslint-disable react-hooks/exhaustive-deps */



"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Badge } from '@/src/app/components/ui/Badge';
import { Button } from '@/src/app/components/ui/Button';
import { Pagination } from '@/src/app/components/ui/Pagination';
import { MetricCard } from '@/src/app/components/ui/MetricCard';
import { SearchBar } from '@/src/app/components/ui/SearchBar';

export default function AdminUsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tierFilter, setTierFilter] = useState('All Tiers');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [dateFilter, setDateFilter] = useState('All Time');

  //Mock data
  const initialUsers = [
  { id: 'usr-1', name: 'Sarah Miller', email: 's.miller@example.com', phone: '+44 7781 233 567', tier: 'Manual', balance: 'N/A', vehicles: 1, status: 'Active' },
  { id: 'usr-2', name: 'James Wilson', email: 'j.wilson@example.com', phone: '+44 7781 233 457', tier: 'Manual', balance: 'N/A', vehicles: 1, status: 'Active' },
  { id: 'usr-3', name: 'Emma Rogers', email: 'e.rogers@example.com', phone: '+44 7781 233 567', tier: 'Auto-Pay', balance: '£15.00', vehicles: 1, status: 'Active' },
  { id: 'usr-4', name: 'Paul Johnson', email: 'p.johnson@example.com', phone: '+44 7781 233 494', tier: 'Basic', balance: 'N/A', vehicles: 1, status: 'Active' },
  { id: 'usr-5', name: 'Laura Smith', email: 'l.smith@example.com', phone: '+44 7781 233 567', tier: 'Manual', balance: 'N/A', vehicles: 1, status: 'Active' },
  { id: 'usr-6', name: 'Nathan Cooper', email: 'n.cooper@example.com', phone: '+44 7781 233 457', tier: 'Auto-Pay', balance: '£50.00', vehicles: 1, status: 'Active' },
  { id: 'usr-7', name: 'Thomas Ward', email: 't.ward@example.com', phone: '+44 7781 233 457', tier: 'Basic', balance: 'N/A', vehicles: 1, status: 'Inactive' },
  { id: 'usr-8', name: 'Emily Clarke', email: 'e.clarke@example.com', phone: '+44 7781 233 888', tier: 'Auto-Pay', balance: '£-12.50', vehicles: 1, status: 'Inactive' },
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
    <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      <h1 className="text-2xl font-bold text-foreground mb-2">Manage Users</h1>

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        
        <div className="p-4 border-b border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-gray-50/50">
          
          <div className="min-w-62.5">
            <MetricCard 
              variant="green"
              value={filteredUsers.length}
              label="Total Users Displayed"
              icon={<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
            />
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
              <option value="Inactive">Inactive</option>
            </select>
            
            <SearchBar 
              value={searchTerm} 
              onChange={setSearchTerm} 
              placeholder="Search name or email..." 
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
                <th className="px-6 py-4">User Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Phone Number</th>
                <th className="px-6 py-4">Tier</th>
                <th className="px-6 py-4">Wallet Balance</th>
                <th className="px-6 py-4 text-center">Registered Vehicle</th>
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
                    <td className={`px-6 py-4 font-medium ${u.balance === 'N/A' ? 'text-gray-400' : 'text-foreground'}`}>
                      {u.balance}
                    </td>
                    <td className="px-6 py-4 text-center">{u.vehicles}</td>
                    <td className="px-6 py-4">
                      {/* Strictly Active/Inactive logic */}
                      <Badge variant={u.status === 'Active' ? 'success' : 'danger'}>{u.status}</Badge>
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

        <Pagination totalItems={filteredUsers.length} />
      </div>
    </div>
  );
}