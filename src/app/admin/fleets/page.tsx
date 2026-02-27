import React from 'react';
import Link from 'next/link';
import { Badge } from '@/src/app/components/ui/Badge';

export default function AdminFleetsPage() {
  const fleets = [
    { name: 'City Logistics Ltd', vehicles: 24, drivers: 18, subStatus: 'Active', fleetStatus: 'Active' },
    { name: 'Express Delivery Co', vehicles: 15, drivers: 12, subStatus: 'Active', fleetStatus: 'Active' },
    { name: 'Quick Transport Services', vehicles: 8, drivers: 6, subStatus: 'Expired', fleetStatus: 'Deactivated' },
    { name: 'Metro Freight Solutions', vehicles: 32, drivers: 25, subStatus: 'Active', fleetStatus: 'Active' },
    { name: 'Regional Cargo Ltd', vehicles: 12, drivers: 10, subStatus: 'Active', fleetStatus: 'Active' },
  ];

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col mt-4">
      
      {/* Top Controls Row */}
      <div className="p-6 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full max-w-sm">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </span>
          <input 
            type="text" 
            placeholder="Search fleets..." 
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
              <th className="px-6 py-4">FLEET NAME</th>
              <th className="px-6 py-4">TOTAL VEHICLES</th>
              <th className="px-6 py-4">TOTAL DRIVERS</th>
              <th className="px-6 py-4">SUBSCRIPTION STATUS</th>
              <th className="px-6 py-4">FLEET STATUS</th>
              <th className="px-6 py-4 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {fleets.map((fleet, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors text-gray-600">
                <td className="px-6 py-4 font-semibold text-foreground">{fleet.name}</td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <svg className="text-gray-400" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                  {fleet.vehicles}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <svg className="text-gray-400" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    {fleet.drivers}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge variant={fleet.subStatus === 'Active' ? 'success' : 'danger'}>{fleet.subStatus}</Badge>
                </td>
                <td className="px-6 py-4 flex items-center gap-1.5">
                  <span className={`w-3 h-3 rounded-full border-2 border-white shadow-sm ${fleet.fleetStatus === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                  {fleet.fleetStatus}
                </td>
                <td className="px-6 py-4 text-right">
                  <Link href={`/admin/fleets/${fleet.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary hover:underline font-medium inline-flex items-center gap-1">
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
        <div>Showing 1 to 5 of 5 entries</div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border border-border rounded hover:bg-gray-50 transition text-gray-400">Previous</button>
          <span className="font-medium text-foreground">Page 1 of 1</span>
          <button className="px-3 py-1 border border-border rounded hover:bg-gray-50 transition text-gray-400">Next</button>
        </div>
      </div>

    </div>
  );
}