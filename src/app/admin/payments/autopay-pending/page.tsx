/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-hooks/exhaustive-deps */
// "use client";

// import React, { useState, useMemo } from 'react';
// import Link from 'next/link';
// import { Button } from '@/src/app/components/ui/Button';

// export default function AutoPayPendingPage() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [providerFilter, setProviderFilter] = useState('All Providers');
//   const [statusFilter, setStatusFilter] = useState('All Statuses');

//   const initialQueue = [
//     { id: '108496', reg: 'ABC 2224', driver: 'Sarah Miller', provider: 'Manchester Airport', fine: 22.00, balance: 22.00, due: 15.00, status: 'Sufficient' },
//     { id: '108678', reg: 'GIM 2346', driver: 'Adam White', provider: 'London ULEZ', fine: 6.00, balance: 12.50, due: 12.50, status: 'Insufficient' },
//     { id: '108311', reg: 'LMN-6901', driver: 'Emma Rogers', provider: 'Birmingham CAZ', fine: 3.00, balance: 3.00, due: 3.00, status: 'Sufficient' },
//     { id: '108245', reg: 'EFG 1035', driver: 'James Wilson', provider: 'Heathrow Parking', fine: 8.00, balance: 12.50, due: 12.50, status: 'Insufficient' },
//     { id: '108110', reg: 'XYZ 4585', driver: 'Nathan Cooper', provider: 'London ULEZ', fine: 12.50, balance: 15.00, due: 12.50, status: 'Sufficient' },
//     { id: '108052', reg: 'CVS 2044', driver: 'Sarah Cooper', provider: 'Coventry CAZ', fine: 8.00, balance: 0.00, due: 8.00, status: 'Insufficient' },
//   ];

//   const filteredQueue = useMemo(() => {
//     return initialQueue.filter(item => {
//       const matchProvider = providerFilter === 'All Providers' || item.provider === providerFilter;
//       const matchStatus = statusFilter === 'All Statuses' || item.status === statusFilter;
      
//       const searchLower = searchTerm.toLowerCase();
//       const matchSearch = searchTerm === '' || 
//                           item.reg.toLowerCase().includes(searchLower) || 
//                           item.driver.toLowerCase().includes(searchLower);

//       return matchProvider && matchStatus && matchSearch;
//     });
//   }, [searchTerm, providerFilter, statusFilter, initialQueue]);

//   return (
//     <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      
//       <Link href="/admin/dashboard" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
//         <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
//         Back to Dashboard
//       </Link>

//       <h1 className="text-2xl font-bold text-foreground mb-2">Auto-Pay Pending Queue</h1>

//       <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        
//         <div className="p-4 border-b border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-gray-50/50">
          
//           <div className="flex items-center gap-4">
//             <div className="bg-white border border-border rounded-lg px-4 py-3 flex flex-col justify-center shadow-sm">
//               <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Ready to Process</span>
//               <span className="text-xl font-bold text-green-600">{filteredQueue.filter(q => q.status === 'Sufficient').length}</span>
//             </div>
//             <div className="bg-white border border-border rounded-lg px-4 py-3 flex flex-col justify-center shadow-sm">
//               <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Requires Top-Up</span>
//               <span className="text-xl font-bold text-red-500">{filteredQueue.filter(q => q.status === 'Insufficient').length}</span>
//             </div>
//           </div>

//           <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
//             <select value={providerFilter} onChange={(e) => setProviderFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
//               <option value="All Providers">All Providers</option>
//               <option value="Manchester Airport">Manchester Airport</option>
//               <option value="London ULEZ">London ULEZ</option>
//               <option value="Birmingham CAZ">Birmingham CAZ</option>
//               <option value="Heathrow Parking">Heathrow Parking</option>
//               <option value="Coventry CAZ">Coventry CAZ</option>
//             </select>
            
//             <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
//               <option value="All Statuses">All Statuses</option>
//               <option value="Sufficient">Sufficient Balance</option>
//               <option value="Insufficient">Insufficient Balance</option>
//             </select>

//             <div className="relative grow max-w-xs">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                 <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
//               </span>
//               <input 
//                 type="text" 
//                 placeholder="Search plate or driver..." 
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-9 pr-4 py-2 border border-border rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary" 
//               />
//             </div>
            
//             <Button className="flex items-center gap-2 py-2 px-4 text-sm bg-primary text-white hover:bg-primary-hover rounded-lg">
//               Process All Eligible
//             </Button>
//           </div>
//         </div>

//         <div className="overflow-x-auto grow min-h-100">
//           <table className="w-full text-left text-sm whitespace-nowrap">
//             <thead className="bg-white text-gray-500 font-medium border-b border-border">
//               <tr>
//                 <th className="px-6 py-4">License Plate</th>
//                 <th className="px-6 py-4">Driver</th>
//                 <th className="px-6 py-4">Provider</th>
//                 <th className="px-6 py-4">Fine Amount</th>
//                 <th className="px-6 py-4">Wallet Balance</th>
//                 <th className="px-6 py-4">Amount Due</th>
//                 <th className="px-6 py-4">Balance Status</th>
//                 <th className="px-6 py-4 text-right">Action</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-border">
//               {filteredQueue.length === 0 ? (
//                 <tr><td colSpan={8} className="text-center py-10 text-gray-500">No pending auto-pay events match your filters.</td></tr>
//               ) : (
//                 filteredQueue.map((item) => (
//                   <tr key={item.id} className="hover:bg-gray-50/50 transition-colors text-gray-600">
//                     <td className="px-6 py-4 font-bold text-foreground">
//                       <Link href={`/admin/vehicles/${item.reg.replace(/\s+/g, '')}`} className="hover:text-primary hover:underline">{item.reg}</Link>
//                     </td>
//                     <td className="px-6 py-4">
//                       <Link href={`/admin/users/${item.driver.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary hover:underline">{item.driver}</Link>
//                     </td>
//                     <td className="px-6 py-4 flex items-center gap-2">
//                       <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary shrink-0">
//                         <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
//                       </div>
//                       {item.provider}
//                     </td>
//                     <td className="px-6 py-4 font-medium text-foreground">£{item.fine.toFixed(2)}</td>
//                     <td className="px-6 py-4 font-medium text-foreground">£{item.balance.toFixed(2)}</td>
//                     <td className="px-6 py-4 font-bold text-orange-600">£{item.due.toFixed(2)}</td>
//                     <td className="px-6 py-4">
//                       <span className={`px-2 py-1 rounded text-xs font-medium border ${item.status === 'Sufficient' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
//                         {item.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-right">
//                       {item.status === 'Sufficient' ? (
//                         <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-lg shadow-sm transition-colors">Process</button>
//                       ) : (
//                         <button className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 text-xs font-bold rounded-lg transition-colors">Notify</button>
//                       )}
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination Footer */}
//         <div className="p-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 bg-white">
//           <div>Showing {filteredQueue.length > 0 ? 1 : 0} to {Math.min(10, filteredQueue.length)} of {filteredQueue.length} entries</div>
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
import { Button } from '@/src/app/components/ui/Button';
import { Pagination } from '@/src/app/components/ui/Pagination';
import { SearchBar } from '@/src/app/components/ui/SearchBar';

export default function AutoPayPendingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [providerFilter, setProviderFilter] = useState('All Providers');
  const [statusFilter, setStatusFilter] = useState('All Statuses');

  // "fine" and "due" removed, replaced strictly with "charge"
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

  const filteredQueue = useMemo(() => {
    return initialQueue.filter(item => {
      const matchProvider = providerFilter === 'All Providers' || item.provider === providerFilter;
      const matchStatus = statusFilter === 'All Statuses' || item.status === statusFilter;
      
      const searchLower = searchTerm.toLowerCase();
      const matchSearch = searchTerm === '' || 
                          item.reg.toLowerCase().includes(searchLower) || 
                          item.id.toLowerCase().includes(searchLower);

      return matchProvider && matchStatus && matchSearch;
    });
  }, [searchTerm, providerFilter, statusFilter, initialQueue]);

  return (
    <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      
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
              <option value="Bristol Airport">Bristol Airport</option>
              <option value="Glasgow CAZ">Glasgow CAZ</option>
            </select>
            
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border border-border rounded-lg px-3 py-2 text-sm text-gray-600 bg-white outline-none focus:ring-1 focus:ring-primary">
              <option value="All Statuses">All Statuses</option>
              <option value="Sufficient">Sufficient Balance</option>
              <option value="Insufficient">Insufficient Balance</option>
            </select>

            <SearchBar 
              value={searchTerm} 
              onChange={setSearchTerm} 
              placeholder="Search plate or ID..." 
            />
            
            <Button className="flex items-center gap-2 py-2 px-4 text-sm bg-primary text-white hover:bg-primary-hover rounded-lg">
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
                  <tr key={item.id} className="hover:bg-gray-50/50 transition-colors text-gray-600">
                    <td className="px-6 py-4 text-gray-500 font-mono text-xs">{item.id}</td>
                    <td className="px-6 py-4 font-bold text-foreground">
                      <Link href={`/admin/vehicles/${item.reg.replace(/\s+/g, '')}`} className="hover:text-primary hover:underline">{item.reg}</Link>
                    </td>
                    <td className="px-6 py-4">{item.provider}</td>
                    <td className="px-6 py-4 font-medium text-foreground">£{item.charge.toFixed(2)}</td>
                    <td className="px-6 py-4 font-medium text-foreground">£{item.balance.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      {/* Badge styling exactly matching the mockups */}
                      <span className={`px-3 py-1 rounded text-xs font-bold ${item.status === 'Sufficient' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {item.status === 'Sufficient' ? (
                        <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded shadow-sm transition-colors">Process</button>
                      ) : (
                        <button className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 text-xs font-bold rounded transition-colors">Notify</button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <Pagination totalItems={filteredQueue.length} />

      </div>
    </div>
  );
}