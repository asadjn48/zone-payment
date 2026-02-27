import React from 'react';
import Link from 'next/link';
import { Button } from '@/src/app/components/ui/Button';
import { Badge } from '@/src/app/components/ui/Badge';

export default function VehiclesPage() {
  // Mock data based on your screenshot
  const vehicles = [
    { reg: 'TR12 ABC', make: 'Ford Transit', driver: 'John Smith', status: 'Active', paid: '£245.50' },
    { reg: 'MJ57 YXB', make: 'Renault Master', driver: 'David Brown', status: 'Active', paid: '£412.25' },
    { reg: 'PL08 WHK', make: 'Volkswagen Transporter', driver: 'Sarah Johnson', status: 'Active', paid: '£320.75' },
    { reg: 'LK67 ZXC', make: 'Mercedes Sprinter', driver: 'Michael Davis', status: 'Active', paid: '£180.00' },
  ];

  return (
    <div className="flex flex-col gap-6">
      
      {/* Top Bar: Search and Actions */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
        <div className="relative w-full sm:max-w-[400px]">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </span>
          <input 
            type="text" 
            placeholder="Search by registration, make, model or driver..." 
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <Link href="/fleet/vehicles/add" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto flex items-center justify-center gap-2 py-2 cursor-pointer">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
            Add Vehicle
          </Button>
        </Link>
      </div>

      {/* Vehicles Table (Responsive Wrapper) */}
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-border">
              <tr>
                <th className="px-6 py-4">REGISTRATION</th>
                <th className="px-6 py-4">MAKE & MODEL</th>
                <th className="px-6 py-4">ASSIGNED DRIVER</th>
                <th className="px-6 py-4">STATUS</th>
                <th className="px-6 py-4">TOTAL PAID</th>
                <th className="px-6 py-4">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {vehicles.map((v, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground flex items-center gap-3">
                    <span className="text-gray-400">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                    </span>
                    {v.reg}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{v.make}</td>
                  <td className="px-6 py-4 text-gray-600">{v.driver}</td>
                  <td className="px-6 py-4">
                    <Badge variant="success">{v.status}</Badge>
                  </td>
                  <td className="px-6 py-4 text-green-600 font-medium">{v.paid}</td>
                  <td className="px-6 py-4">
                    <Link href={`/fleet/vehicles/${v.reg.replace(/\s+/g, '')}`} className="text-primary hover:underline font-medium">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}