/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-hooks/exhaustive-deps */
// "use client";

// import React, { useState, useMemo } from 'react';
// import Link from 'next/link';
// import { Badge } from '@/src/app/components/ui/Badge';
// import { Button } from '@/src/app/components/ui/Button';

// export default function AdminVehiclesPage() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [tierFilter, setTierFilter] = useState('All Tiers');
//   const [emissionsFilter, setEmissionsFilter] = useState('All Emissions');
//   const [providerFilter, setProviderFilter] = useState('All Providers');

//   const initialVehicles = [
//     { id: 'V-1', reg: 'ABC 2224', make: 'Ford Focus', emissions: 'Euro 5', owner: 'Sarah Miller', tier: 'Basic', balance: '£0.00', fines: 4, paid: '13', outstanding: '£22.00', status: 'Active', provider: 'London ULEZ' },
//     { id: 'V-2', reg: 'EFG 1035', make: 'BMW 320d', emissions: 'Euro 6', owner: 'Adam White', tier: 'Manual', balance: '£0.00', fines: 2, paid: '0', outstanding: '£25.00', status: 'Active', provider: 'Heathrow Airport' },
//     { id: 'V-3', reg: 'CVS 2044', make: 'Volkswagen Vcar', emissions: 'Euro 6', owner: 'Emma Rogers', tier: 'Manual', balance: '£0.00', fines: 2, paid: '1', outstanding: '£0.00', status: 'Active', provider: 'Birmingham CAZ' },
//     { id: 'V-4', reg: 'MW-6901', make: 'Volkswagen', emissions: 'Euro 6', owner: 'James Wilson', tier: 'Manual', balance: '£0.00', fines: 2, paid: '1', outstanding: '£0.00', status: 'Active', provider: 'London ULEZ' },
//     { id: 'V-5', reg: 'MQV-9101', make: 'Ladda M3', emissions: 'Euro 6', owner: 'Emma Rogers', tier: 'Basic', balance: '£0.00', fines: 2, paid: '0', outstanding: '£3.00', status: 'Active', provider: 'Manchester Airport' },
//     { id: 'V-6', reg: 'EFG 1035', make: 'BMW 320d', emissions: 'Euro 6', owner: 'Felicio Niller', tier: 'Airport', balance: '£0.00', fines: 2, paid: '2', outstanding: '£25.00', status: 'Suspended', provider: 'Heathrow Airport' },
//   ];

//   const filteredVehicles = useMemo(() => {
//     return initialVehicles.filter(v => {
//       const matchTier = tierFilter === 'All Tiers' || v.tier === tierFilter;
//       const matchEmissions = emissionsFilter === 'All Emissions' || v.emissions === emissionsFilter;
//       const matchProvider = providerFilter === 'All Providers' || v.provider === providerFilter;
      
//       const searchLower = searchTerm.toLowerCase();
//       const matchSearch = searchTerm === '' || 
//                           v.reg.toLowerCase().includes(searchLower) || 
//                           v.owner.toLowerCase().includes(searchLower);

//       return matchTier && matchEmissions && matchProvider && matchSearch;
//     });
//   }, [searchTerm, tierFilter, emissionsFilter, providerFilter, initialVehicles]);

//   return (
//     <div className="flex flex-col gap-6 pb-10 mt-4">
//       <h1 className="text-2xl font-bold text-foreground mb-2">Registered Vehicles</h1>

//       <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        
//         {/* Top Filter Bar */}
//         <div className="p-4 border-b border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-gray-50/50">
          
//           <div className="bg-white border border-border rounded-lg p-4 flex flex-col justify-center min-w-50">
//             <div className="flex items-center gap-2 mb-2">
//               <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
//                 <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
//               </div>
//               <span className="text-2xl font-bold text-foreground">{filteredVehicles.length}</span>
//             </div>
//             <p className="text-sm text-gray-500">Total Vehicles Displayed</p>
//           </div>

//           <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
//             <select value={tierFilter} onChange={(e) => setTierFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
//               <option value="All Tiers">All Tiers</option>
//               <option value="Basic">Basic</option>
//               <option value="Manual">Manual</option>
//               <option value="Auto-Pay">Auto-Pay</option>
//               <option value="Airport">Airport</option>
//             </select>

//             <select value={emissionsFilter} onChange={(e) => setEmissionsFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
//               <option value="All Emissions">All Emissions</option>
//               <option value="Euro 5">Euro 5</option>
//               <option value="Euro 6">Euro 6</option>
//               <option value="Electric/Hybrid">Electric/Hybrid</option>
//             </select>

//             <select value={providerFilter} onChange={(e) => setProviderFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
//               <option value="All Providers">All Providers</option>
//               <option value="London ULEZ">London ULEZ</option>
//               <option value="Birmingham CAZ">Birmingham CAZ</option>
//               <option value="Heathrow Airport">Heathrow Airport</option>
//               <option value="Manchester Airport">Manchester Airport</option>
//             </select>
            
//             <div className="relative grow max-w-xs">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                 <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
//               </span>
//               <input 
//                 type="text" 
//                 placeholder="Search plate or driver" 
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-9 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary" 
//               />
//             </div>
            
//             <Button className="flex items-center gap-2 py-2 px-4 text-sm bg-primary text-white hover:bg-primary-hover rounded-lg">
//               <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
//               Export
//             </Button>
//           </div>
//         </div>

//         {/* Table Area */}
//         <div className="overflow-x-auto grow min-h-100">
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
//               {filteredVehicles.length === 0 ? (
//                 <tr><td colSpan={10} className="text-center py-10 text-gray-500">No vehicles found matching filters.</td></tr>
//               ) : (
//                 filteredVehicles.map((v) => (
//                   <tr key={v.id} className="hover:bg-gray-50/50 transition-colors text-gray-600">
//                     <td className="px-6 py-4 font-bold text-foreground">{v.reg}</td>
//                     <td className="px-6 py-4">{v.make}</td>
//                     <td className="px-6 py-4">{v.emissions}</td>
//                     <td className="px-6 py-4">{v.owner}</td>
//                     <td className="px-6 py-4">
//                       <span className={`px-2 py-1 rounded text-xs font-medium ${v.tier === 'Auto-Pay' ? 'bg-green-100 text-green-700' : v.tier === 'Manual' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
//                         {v.tier}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 font-medium text-foreground">{v.balance}</td>
//                     <td className="px-6 py-4 text-center">{v.fines}</td>
//                     <td className="px-6 py-4">{v.paid}</td>
//                     <td className="px-6 py-4 font-medium text-orange-600">{v.outstanding}</td>
//                     <td className="px-6 py-4 text-right">
//                       <Link href={`/admin/vehicles/${v.id}`} className="text-primary hover:underline font-medium text-xs flex items-center justify-end gap-1">
//                         {v.status === 'Suspended' ? <Badge variant="danger">Suspended</Badge> : 'View Details'}
//                       </Link>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination Footer */}
//         <div className="p-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 bg-white">
//           <div>Showing {filteredVehicles.length > 0 ? 1 : 0} to {Math.min(10, filteredVehicles.length)} of {filteredVehicles.length} entries</div>
//           <div className="flex items-center gap-1">
//             <button className="px-3 py-1.5 border border-border rounded hover:bg-gray-50 transition text-gray-400 font-medium disabled:opacity-50">Previous</button>
//             <button className="px-3 py-1.5 rounded bg-primary text-white font-medium">1</button>
//             <button className="px-3 py-1.5 border border-border rounded hover:bg-gray-50 transition text-gray-600 font-medium">Next</button>
//           </div>
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
import { Pagination } from '@/src/app/components/ui/Pagination';
import { MetricCard } from '@/src/app/components/ui/MetricCard';
import { SearchBar } from '@/src/app/components/ui/SearchBar';

export default function AdminVehiclesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tierFilter, setTierFilter] = useState('All Tiers');
  const [emissionsFilter, setEmissionsFilter] = useState('All Emissions');
  const [providerFilter, setProviderFilter] = useState('All Providers');

  // State for the Outstanding Charges Modal
  const [selectedOutstanding, setSelectedOutstanding] = useState<{reg: string, count: number} | null>(null);

  const initialVehicles = [
    { id: 'V-1', reg: 'ABC 2224', make: 'Ford Focus', emissions: 'Euro 5', owner: 'Sarah Miller', tier: 'Basic', balance: 'N/A', fines: 4, paid: 13, outstanding: 2, status: 'Active', provider: 'London ULEZ' },
    { id: 'V-2', reg: 'EFG 1035', make: 'BMW 320d', emissions: 'Euro 6', owner: 'Adam White', tier: 'Manual', balance: 'N/A', fines: 2, paid: 0, outstanding: 1, status: 'Suspended', provider: 'Heathrow Airport' },
    { id: 'V-3', reg: 'CVS 2044', make: 'Volkswagen Vcar', emissions: 'Euro 6', owner: 'Emma Rogers', tier: 'Manual', balance: 'N/A', fines: 2, paid: 1, outstanding: 0, status: 'Active', provider: 'Birmingham CAZ' },
    { id: 'V-4', reg: 'MW-6901', make: 'Volkswagen', emissions: 'Euro 6', owner: 'James Wilson', tier: 'Manual', balance: 'N/A', fines: 2, paid: 1, outstanding: 0, status: 'Active', provider: 'London ULEZ' },
    { id: 'V-5', reg: 'MQV-9101', make: 'Ladda M3', emissions: 'Euro 6', owner: 'Emma Rogers', tier: 'Basic', balance: 'N/A', fines: 2, paid: 0, outstanding: 3, status: 'Active', provider: 'Manchester Airport' },
    { id: 'V-6', reg: 'XYZ 4585', make: 'BMW 320d', emissions: 'Euro 6', owner: 'Felicio Niller', tier: 'Auto-Pay', balance: '£45.50', fines: 2, paid: 2, outstanding: 2, status: 'Suspended', provider: 'Heathrow Airport' },
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
    <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl relative">
      <h1 className="text-2xl font-bold text-foreground mb-2">Registered Vehicles</h1>

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        
        {/* Top Filter Bar */}
        <div className="p-4 border-b border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-gray-50/50">
          
          <MetricCard 
            variant="purple"
            value={filteredVehicles.length}
            label="Total Vehicles Displayed"
            icon={<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>}
          />

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <select value={tierFilter} onChange={(e) => setTierFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Tiers">All Tiers</option>
              <option value="Basic">Basic</option>
              <option value="Manual">Manual</option>
              <option value="Auto-Pay">Auto-Pay</option>
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
            
            <SearchBar 
              value={searchTerm} 
              onChange={setSearchTerm} 
              placeholder="Search plate or driver..." 
            />
            
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
                <th className="px-6 py-4 text-center">Paid</th>
                <th className="px-6 py-4 text-center">Outstanding</th>
                <th className="px-6 py-4 text-right">Status/Details</th>
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
                    <td className={`px-6 py-4 font-medium ${v.balance === 'N/A' ? 'text-gray-400' : 'text-foreground'}`}>
                      {v.balance}
                    </td>
                    <td className="px-6 py-4 text-center font-medium">{v.fines}</td>
                    <td className="px-6 py-4 text-center font-medium text-green-600">{v.paid}</td>
                    <td className="px-6 py-4 text-center">
                      {v.outstanding > 0 ? (
                        <button 
                          onClick={() => setSelectedOutstanding({ reg: v.reg, count: v.outstanding })}
                          className="font-bold text-orange-600 hover:text-orange-700 hover:underline inline-flex items-center gap-1"
                        >
                          {v.outstanding} Outstanding
                        </button>
                      ) : (
                        <span className="text-gray-400">0</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link href={`/admin/vehicles/${v.id}`} className="text-primary hover:underline font-medium text-xs flex items-center justify-end gap-2">
                        {v.status === 'Suspended' && <Badge variant="danger">Suspended</Badge>} 
                        <span>View Details</span>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <Pagination totalItems={filteredVehicles.length} />
      </div>

      {/* ================= OUTSTANDING CHARGES MODAL ================= */}
      {selectedOutstanding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-5 border-b border-border pb-3">
              <div>
                <h2 className="text-lg font-bold text-foreground">Outstanding Charges</h2>
                <p className="text-sm text-gray-500">Vehicle: {selectedOutstanding.reg}</p>
              </div>
              <button onClick={() => setSelectedOutstanding(null)} className="text-gray-400 hover:text-gray-600">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="flex flex-col gap-3 mb-6 max-h-60 overflow-y-auto pr-2 hide-scrollbar">
              {/* Generate mock rows based on the exact outstanding count */}
              {Array.from({ length: selectedOutstanding.count }).map((_, i) => (
                <div key={i} className="flex justify-between items-center p-3 border border-border rounded-lg bg-gray-50">
                  <div>
                    <p className="font-semibold text-sm text-foreground">London ULEZ</p>
                    <p className="text-xs text-gray-500 mt-0.5">Apr 22, 2024 - 14:30 PM</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-orange-600">£12.50</p>
                    <Link href="/admin/payments/pending" className="text-[10px] text-primary hover:underline font-medium">View in Queue</Link>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => setSelectedOutstanding(null)}
              className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-sm font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}