/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/src/app/components/ui/Button';
import { Pagination } from '@/src/app/components/ui/Pagination';
import { SearchBar } from '@/src/app/components/ui/SearchBar';
import { useToast } from '@/src/app/components/ui/useToast';

const initialQueue = [
  { id: 'AP-1023', reg: 'ABC 1234', provider: 'Manchester Airport', charge: 15.00, balance: 25.00, status: 'Sufficient' },
  { id: 'AP-1024', reg: 'GHI 2345', provider: 'London ULEZ', charge: 12.50, balance: 5.00, status: 'Insufficient' },
  { id: 'AP-1025', reg: 'LMN 8901', provider: 'Birmingham CAZ', charge: 3.00, balance: 10.00, status: 'Sufficient' },
  { id: 'AP-1026', reg: 'S72 6678', provider: 'Heathrow Parking', charge: 10.00, balance: 0.00, status: 'Insufficient' },
  { id: 'AP-1027', reg: 'DEF 3344', provider: 'London ULEZ', charge: 25.00, balance: 12.50, status: 'Insufficient' },
  { id: 'AP-1028', reg: 'ABC 9991', provider: 'Manchester Airport', charge: 25.00, balance: 50.00, status: 'Sufficient' },
  { id: 'AP-1029', reg: 'LSFA 9991', provider: 'Bristol Airport', charge: 19.00, balance: 10.00, status: 'Insufficient' },
  { id: 'AP-1030', reg: 'ABC 9782', provider: 'Glasgow CAZ', charge: 8.00, balance: 5.00, status: 'Insufficient' },
];

const AutoPayTableRow = ({ item, onNotify }: any) => (
  <tr className="hover:bg-gray-50/50 transition-colors text-gray-600">
    <td className="px-6 py-4 text-gray-500 font-mono text-xs">{item.id}</td>
    <td className="px-6 py-4 font-bold text-foreground">
      <Link href={`/admin/vehicles/${item.reg.replace(/\s+/g, '')}`} className="hover:text-primary hover:underline">{item.reg}</Link>
    </td>
    <td className="px-6 py-4">{item.provider}</td>
    <td className="px-6 py-4 font-medium text-foreground">£{item.charge.toFixed(2)}</td>
    <td className="px-6 py-4 font-medium text-foreground">£{item.balance.toFixed(2)}</td>
    <td className="px-6 py-4">
      <span className={`px-3 py-1 rounded text-xs font-bold ${item.status === 'Sufficient' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
        {item.status}
      </span>
    </td>
    <td className="px-6 py-4 text-right">
      {item.status === 'Sufficient' ? (
        /* THIS IS THE FIX: It is now a Link that opens the new page, not a button! */
        <Link 
          href={`/admin/payments/autopay-pending/${item.id}`}
          className="px-4 py-2 inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded shadow-sm transition-colors"
        >
          Process
        </Link>
      ) : (
        <button onClick={() => onNotify(item.reg, item.provider)} className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 text-xs font-bold rounded transition-colors">Notify</button>
      )}
    </td>
  </tr>
);

export default function AutoPayPendingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [providerFilter, setProviderFilter] = useState('All Providers');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  
  const { showToast, ToastComponent } = useToast();

  const filteredQueue = useMemo(() => {
    return initialQueue.filter(item => {
      const matchProvider = providerFilter === 'All Providers' || item.provider === providerFilter;
      const matchStatus = statusFilter === 'All Statuses' || item.status === statusFilter;
      const searchLower = searchTerm.toLowerCase();
      const matchSearch = searchTerm === '' || item.reg.toLowerCase().includes(searchLower) || item.id.toLowerCase().includes(searchLower);

      return matchProvider && matchStatus && matchSearch;
    });
  }, [searchTerm, providerFilter, statusFilter]);

  const handleNotify = (reg: string, provider: string) => showToast(`Top-up reminder sent to the driver of ${reg} for ${provider}.`, 'info');
  const handleProcessAll = () => showToast(`All eligible Auto-Pay transactions have been processed successfully.`, 'success');

  return (
    <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl relative">
      
      <Link href="/admin/dashboard" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Dashboard
      </Link>

      <h1 className="text-2xl font-bold text-foreground mb-2">Auto-Pay Pending Payments</h1>

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        
        <div className="p-4 border-b border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-gray-50/50">
          <div className="flex items-center gap-4">
            <div className="bg-white border border-border rounded-lg px-4 py-3 flex flex-col justify-center shadow-sm">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Ready to Process</span>
              <span className="text-xl font-bold text-green-600">{filteredQueue.filter(q => q.status === 'Sufficient').length}</span>
            </div>
            <div className="bg-white border border-border rounded-lg px-4 py-3 flex flex-col justify-center shadow-sm">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Requires Top-Up</span>
              <span className="text-xl font-bold text-red-500">{filteredQueue.filter(q => q.status === 'Insufficient').length}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <select value={providerFilter} onChange={(e) => setProviderFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Providers">All Providers</option>
              <option value="Manchester Airport">Manchester Airport</option>
              <option value="London ULEZ">London ULEZ</option>
              <option value="Birmingham CAZ">Birmingham CAZ</option>
              <option value="Heathrow Parking">Heathrow Parking</option>
            </select>
            
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Statuses">All Statuses</option>
              <option value="Sufficient">Sufficient Balance</option>
              <option value="Insufficient">Insufficient Balance</option>
            </select>

            <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search plate or ID..." />
            
            <Button onClick={handleProcessAll} className="flex items-center gap-2 py-2 px-4 text-sm bg-primary text-white hover:bg-primary-hover rounded-lg">
              Process All Eligible
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto grow min-h-100">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-white text-gray-500 font-medium border-b border-border">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Vehicle Registration</th>
                <th className="px-6 py-4">Provider</th>
                <th className="px-6 py-4">Charge Amount</th>
                <th className="px-6 py-4">Wallet Balance</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredQueue.length === 0 ? (
                <tr><td colSpan={7} className="text-center py-10 text-gray-500">No pending auto-pay events match your filters.</td></tr>
              ) : (
                filteredQueue.map((item) => (
                  <AutoPayTableRow key={item.id} item={item} onNotify={handleNotify} />
                ))
              )}
            </tbody>
          </table>
        </div>

        <Pagination totalItems={filteredQueue.length} />

      </div>

      <ToastComponent />

    </div>
  );
}