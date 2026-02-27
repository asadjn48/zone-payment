import React from 'react';
import Link from 'next/link';
import { Button } from '@/src/app/components/ui/Button';

export default function AdminVehiclesPage() {
  const vehicles = [
    { reg: 'TR12 ABC', make: 'Ford Transit', user: 'John Smith', fleet: 'City Logistics Ltd', paid: '£245.50' },
    { reg: 'LK67 ZXC', make: 'Mercedes Sprinter', user: 'Emma Wilson', fleet: 'Independent', paid: '£180.00' },
    { reg: 'PL08 WHK', make: 'Volkswagen Transporter', user: 'Sarah Johnson', fleet: 'Express Delivery Co', paid: '£320.75' },
    { reg: 'MJ57 YXB', make: 'Renault Master', user: 'David Brown', fleet: 'City Logistics Ltd', paid: '£412.25' },
    { reg: 'BD19 VXT', make: 'Vauxhall Vivaro', user: 'Emily White', fleet: 'Express Delivery Co', paid: '£198.50' },
    { reg: 'KM66 GTF', make: 'Citroen Relay', user: 'Michael Davis', fleet: 'Independent', paid: '£145.00' },
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
            placeholder="Search by registration, make, model or user..." 
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
            <span>Show</span>
            <input type="text" className="w-12 text-center border border-border rounded py-1 outline-none focus:ring-1 focus:ring-primary" placeholder="10" />
            <span>entries</span>
          </div>
          
          {/* UPDATED: Added Link wrapper to route to the Add Vehicle page */}
          <Link href="/admin/vehicles/add" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto flex items-center justify-center gap-2 py-2 cursor-pointer">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
              Add Vehicle
            </Button>
          </Link>
        </div>
      </div>

      {/* Table Area */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-white text-gray-500 text-xs font-bold uppercase tracking-wider border-b border-border">
            <tr>
              <th className="px-6 py-4">REGISTRATION</th>
              <th className="px-6 py-4">MAKE & MODEL</th>
              <th className="px-6 py-4">ASSOCIATED USER</th>
              <th className="px-6 py-4">FLEET</th>
              <th className="px-6 py-4">TOTAL AMOUNT PAID</th>
              <th className="px-6 py-4 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {vehicles.map((v, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors text-gray-600">
                <td className="px-6 py-4 font-semibold text-foreground flex items-center gap-2">
                  <svg className="text-gray-400" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                  {v.reg}
                </td>
                <td className="px-6 py-4">{v.make}</td>
                <td className="px-6 py-4 text-foreground">{v.user}</td>
                <td className="px-6 py-4">{v.fleet}</td>
                <td className="px-6 py-4 font-medium text-green-600">{v.paid}</td>
                <td className="px-6 py-4 text-right">
                  {/* UPDATED: Dynamic routing to the vehicle details page based on the reg number */}
                  <Link href={`/admin/vehicles/${v.reg.replace(/\s+/g, '')}`} className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    View Details
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