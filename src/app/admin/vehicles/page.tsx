/* eslint-disable react-hooks/exhaustive-deps */

// import React from 'react';
// import Link from 'next/link';
// import { Button } from '@/src/app/components/ui/Button';

// export default function AdminVehiclesPage() {
//   const vehicles = [
//     { reg: 'TR12 ABC', make: 'Ford Transit', user: 'John Smith', fleet: 'City Logistics Ltd', paid: '£245.50' },
//     { reg: 'LK67 ZXC', make: 'Mercedes Sprinter', user: 'Emma Wilson', fleet: 'Independent', paid: '£180.00' },
//     { reg: 'PL08 WHK', make: 'Volkswagen Transporter', user: 'Sarah Johnson', fleet: 'Express Delivery Co', paid: '£320.75' },
//     { reg: 'MJ57 YXB', make: 'Renault Master', user: 'David Brown', fleet: 'City Logistics Ltd', paid: '£412.25' },
//     { reg: 'BD19 VXT', make: 'Vauxhall Vivaro', user: 'Emily White', fleet: 'Express Delivery Co', paid: '£198.50' },
//     { reg: 'KM66 GTF', make: 'Citroen Relay', user: 'Michael Davis', fleet: 'Independent', paid: '£145.00' },
//   ];

//   return (
//     <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col mt-4">
      
//       {/* Top Controls Row */}
//       <div className="p-6 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <div className="relative w-full max-w-sm">
//           <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
//           </span>
//           <input 
//             type="text" 
//             placeholder="Search by registration, make, model or user..." 
//             className="w-full pl-10 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
//           />
//         </div>
        
//         <div className="flex items-center gap-4 w-full sm:w-auto">
//           <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
//             <span>Show</span>
//             <input type="text" className="w-12 text-center border border-border rounded py-1 outline-none focus:ring-1 focus:ring-primary" placeholder="10" />
//             <span>entries</span>
//           </div>
          
//           {/* UPDATED: Added Link wrapper to route to the Add Vehicle page */}
//           <Link href="/admin/vehicles/add" className="w-full sm:w-auto">
//             <Button className="w-full sm:w-auto flex items-center justify-center gap-2 py-2 cursor-pointer">
//               <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
//               Add Vehicle
//             </Button>
//           </Link>
//         </div>
//       </div>

//       {/* Table Area */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-left text-sm whitespace-nowrap">
//           <thead className="bg-white text-gray-500 text-xs font-bold uppercase tracking-wider border-b border-border">
//             <tr>
//               <th className="px-6 py-4">REGISTRATION</th>
//               <th className="px-6 py-4">MAKE & MODEL</th>
//               <th className="px-6 py-4">ASSOCIATED USER</th>
//               <th className="px-6 py-4">FLEET</th>
//               <th className="px-6 py-4">TOTAL AMOUNT PAID</th>
//               <th className="px-6 py-4 text-right">ACTIONS</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-border">
//             {vehicles.map((v, i) => (
//               <tr key={i} className="hover:bg-gray-50/50 transition-colors text-gray-600">
//                 <td className="px-6 py-4 font-semibold text-foreground flex items-center gap-2">
//                   <svg className="text-gray-400" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
//                   {v.reg}
//                 </td>
//                 <td className="px-6 py-4">{v.make}</td>
//                 <td className="px-6 py-4 text-foreground">{v.user}</td>
//                 <td className="px-6 py-4">{v.fleet}</td>
//                 <td className="px-6 py-4 font-medium text-green-600">{v.paid}</td>
//                 <td className="px-6 py-4 text-right">
//                   {/* UPDATED: Dynamic routing to the vehicle details page based on the reg number */}
//                   <Link href={`/admin/vehicles/${v.reg.replace(/\s+/g, '')}`} className="text-primary hover:underline font-medium inline-flex items-center gap-1">
//                     <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
//                     View Details
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

// export default function AdminVehiclesPage() {
//   const vehicles = [
//     { reg: 'ABC 2224', make: 'Ford Focus', emissions: 'Euro 5', owner: 'Sarah Miller', tier: 'Basic', balance: '£0.00', fines: 4, paid: '13', outstanding: '£22.00', status: 'View Details' },
//     { reg: 'EFG 1035', make: 'BMW 320d', emissions: 'Euro 6', owner: 'Adam White', tier: 'Manual', balance: '£0.00', fines: 2, paid: '0', outstanding: '£25.00', status: 'View Details' },
//     { reg: 'MW-6901', make: 'Volkswagen', emissions: 'Euro 6', owner: 'James Wilson', tier: 'Manual', balance: '£0.00', fines: 2, paid: '1', outstanding: '£0.00', status: 'View Details' },
//     { reg: 'EFG 1035', make: 'BMW 320d', emissions: 'Euro 6', owner: 'Felicio Niller', tier: 'Airport', balance: '£0.00', fines: 2, paid: '£25.00', outstanding: 'Suspended', status: 'View Details' },
//   ];

//   return (
//     <div className="flex flex-col gap-6 pb-10 mt-4">
//       <h1 className="text-2xl font-bold text-foreground mb-2">Registered Vehicles</h1>

//       <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        
//         <div className="p-4 border-b border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-gray-50/50">
          
//           <div className="bg-white border border-border rounded-lg p-4 flex flex-col justify-center min-w-50">
//             <div className="flex items-center gap-2 mb-2">
//               <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
//                 <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
//               </div>
//               <span className="text-2xl font-bold text-foreground">2,341</span>
//             </div>
//             <p className="text-sm text-gray-500">Total Registered Vehicles</p>
//           </div>

//           <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
//             <select className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none"><option>All Tiers</option></select>
//             <select className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none"><option>All Emissions</option></select>
//             <select className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none"><option>All Providers</option></select>
            
//             <div className="relative grow max-w-xs">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                 <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
//               </span>
//               <input type="text" placeholder="Search plate or driver" className="w-full pl-9 pr-4 py-2 border border-border rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary" />
//             </div>
            
//             <Button className="flex items-center gap-2 py-2 px-4 text-sm">
//               <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
//               Export
//             </Button>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-left text-sm whitespace-nowrap">
//             <thead className="bg-white text-gray-500 font-medium border-b border-border">
//               <tr>
//                 <th className="px-6 py-4">Vehicle Registration</th>
//                 <th className="px-6 py-4">Make & Model</th>
//                 <th className="px-6 py-4">Emissions</th>
//                 <th className="px-6 py-4">Owner</th>
//                 <th className="px-6 py-4">Tier</th>
//                 <th className="px-6 py-4">Wallet Balance</th>
//                 <th className="px-6 py-4 text-center">Fines Issued</th>
//                 <th className="px-6 py-4">Paid</th>
//                 <th className="px-6 py-4">Outstanding</th>
//                 <th className="px-6 py-4 text-right">Status</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-border">
//               {vehicles.map((v, i) => (
//                 <tr key={i} className="hover:bg-gray-50/50 transition-colors text-gray-600">
//                   <td className="px-6 py-4 font-bold text-foreground">{v.reg}</td>
//                   <td className="px-6 py-4">{v.make}</td>
//                   <td className="px-6 py-4">{v.emissions}</td>
//                   <td className="px-6 py-4">{v.owner}</td>
//                   <td className="px-6 py-4">{v.tier}</td>
//                   <td className="px-6 py-4 font-medium text-foreground">{v.balance}</td>
//                   <td className="px-6 py-4 text-center">{v.fines}</td>
//                   <td className="px-6 py-4">{v.paid}</td>
//                   <td className="px-6 py-4 font-medium text-orange-600">{v.outstanding}</td>
//                   <td className="px-6 py-4 text-right">
//                     <Link href="#" className="text-primary hover:underline font-medium text-xs">{v.status}</Link>
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

export default function AdminVehiclesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tierFilter, setTierFilter] = useState('All Tiers');
  const [emissionsFilter, setEmissionsFilter] = useState('All Emissions');
  const [providerFilter, setProviderFilter] = useState('All Providers');

  const initialVehicles = [
    { id: 'V-1', reg: 'ABC 2224', make: 'Ford Focus', emissions: 'Euro 5', owner: 'Sarah Miller', tier: 'Basic', balance: '£0.00', fines: 4, paid: '13', outstanding: '£22.00', status: 'Active', provider: 'London ULEZ' },
    { id: 'V-2', reg: 'EFG 1035', make: 'BMW 320d', emissions: 'Euro 6', owner: 'Adam White', tier: 'Manual', balance: '£0.00', fines: 2, paid: '0', outstanding: '£25.00', status: 'Active', provider: 'Heathrow Airport' },
    { id: 'V-3', reg: 'CVS 2044', make: 'Volkswagen Vcar', emissions: 'Euro 6', owner: 'Emma Rogers', tier: 'Manual', balance: '£0.00', fines: 2, paid: '1', outstanding: '£0.00', status: 'Active', provider: 'Birmingham CAZ' },
    { id: 'V-4', reg: 'MW-6901', make: 'Volkswagen', emissions: 'Euro 6', owner: 'James Wilson', tier: 'Manual', balance: '£0.00', fines: 2, paid: '1', outstanding: '£0.00', status: 'Active', provider: 'London ULEZ' },
    { id: 'V-5', reg: 'MQV-9101', make: 'Ladda M3', emissions: 'Euro 6', owner: 'Emma Rogers', tier: 'Basic', balance: '£0.00', fines: 2, paid: '0', outstanding: '£3.00', status: 'Active', provider: 'Manchester Airport' },
    { id: 'V-6', reg: 'EFG 1035', make: 'BMW 320d', emissions: 'Euro 6', owner: 'Felicio Niller', tier: 'Airport', balance: '£0.00', fines: 2, paid: '2', outstanding: '£25.00', status: 'Suspended', provider: 'Heathrow Airport' },
  ];

  const filteredVehicles = useMemo(() => {
    return initialVehicles.filter(v => {
      const matchTier = tierFilter === 'All Tiers' || v.tier === tierFilter;
      const matchEmissions = emissionsFilter === 'All Emissions' || v.emissions === emissionsFilter;
      const matchProvider = providerFilter === 'All Providers' || v.provider === providerFilter;
      
      const searchLower = searchTerm.toLowerCase();
      const matchSearch = searchTerm === '' || 
                          v.reg.toLowerCase().includes(searchLower) || 
                          v.owner.toLowerCase().includes(searchLower);

      return matchTier && matchEmissions && matchProvider && matchSearch;
    });
  }, [searchTerm, tierFilter, emissionsFilter, providerFilter, initialVehicles]);

  return (
    <div className="flex flex-col gap-6 pb-10 mt-4">
      <h1 className="text-2xl font-bold text-foreground mb-2">Registered Vehicles</h1>

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        
        {/* Top Filter Bar */}
        <div className="p-4 border-b border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-gray-50/50">
          
          <div className="bg-white border border-border rounded-lg p-4 flex flex-col justify-center min-w-50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
              </div>
              <span className="text-2xl font-bold text-foreground">{filteredVehicles.length}</span>
            </div>
            <p className="text-sm text-gray-500">Total Vehicles Displayed</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <select value={tierFilter} onChange={(e) => setTierFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Tiers">All Tiers</option>
              <option value="Basic">Basic</option>
              <option value="Manual">Manual</option>
              <option value="Auto-Pay">Auto-Pay</option>
              <option value="Airport">Airport</option>
            </select>

            <select value={emissionsFilter} onChange={(e) => setEmissionsFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Emissions">All Emissions</option>
              <option value="Euro 5">Euro 5</option>
              <option value="Euro 6">Euro 6</option>
              <option value="Electric/Hybrid">Electric/Hybrid</option>
            </select>

            <select value={providerFilter} onChange={(e) => setProviderFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Providers">All Providers</option>
              <option value="London ULEZ">London ULEZ</option>
              <option value="Birmingham CAZ">Birmingham CAZ</option>
              <option value="Heathrow Airport">Heathrow Airport</option>
              <option value="Manchester Airport">Manchester Airport</option>
            </select>
            
            <div className="relative grow max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </span>
              <input 
                type="text" 
                placeholder="Search plate or driver" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary" 
              />
            </div>
            
            <Button className="flex items-center gap-2 py-2 px-4 text-sm bg-primary text-white hover:bg-primary-hover rounded-lg">
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
                <th className="px-6 py-4">Vehicle Registration</th>
                <th className="px-6 py-4">Make & Model</th>
                <th className="px-6 py-4">Emissions</th>
                <th className="px-6 py-4">Owner</th>
                <th className="px-6 py-4">Tier</th>
                <th className="px-6 py-4">Wallet Balance</th>
                <th className="px-6 py-4 text-center">Fines Issued</th>
                <th className="px-6 py-4">Paid</th>
                <th className="px-6 py-4">Outstanding</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredVehicles.length === 0 ? (
                <tr><td colSpan={10} className="text-center py-10 text-gray-500">No vehicles found matching filters.</td></tr>
              ) : (
                filteredVehicles.map((v) => (
                  <tr key={v.id} className="hover:bg-gray-50/50 transition-colors text-gray-600">
                    <td className="px-6 py-4 font-bold text-foreground">{v.reg}</td>
                    <td className="px-6 py-4">{v.make}</td>
                    <td className="px-6 py-4">{v.emissions}</td>
                    <td className="px-6 py-4">{v.owner}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${v.tier === 'Auto-Pay' ? 'bg-green-100 text-green-700' : v.tier === 'Manual' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
                        {v.tier}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-foreground">{v.balance}</td>
                    <td className="px-6 py-4 text-center">{v.fines}</td>
                    <td className="px-6 py-4">{v.paid}</td>
                    <td className="px-6 py-4 font-medium text-orange-600">{v.outstanding}</td>
                    <td className="px-6 py-4 text-right">
                      <Link href={`/admin/vehicles/${v.id}`} className="text-primary hover:underline font-medium text-xs flex items-center justify-end gap-1">
                        {v.status === 'Suspended' ? <Badge variant="danger">Suspended</Badge> : 'View Details'}
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 bg-white">
          <div>Showing {filteredVehicles.length > 0 ? 1 : 0} to {Math.min(10, filteredVehicles.length)} of {filteredVehicles.length} entries</div>
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