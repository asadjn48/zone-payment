// "use client";

// import React from 'react';
// import Link from 'next/link';
// import { Badge } from '@/src/app/components/ui/Badge';

// export default function PendingPaymentDetailsPage({ params }: { params: Promise<{ id: string }> }) {

//   const resolvedParams = React.use(params);

//   // Mock data 
//   const payment = {
//     id: resolvedParams.id,
//     date: '23 Apr 2024',
//     reg: 'CVS 2044',
//     driver: 'Emma Rogers',
//     fleet: 'City Logistics Ltd',
//     provider: 'Birmingham CAZ',
//     zone: 'Clean Air Zone',
//     tier: 'Auto-Pay',
//     amountDue: '£120.00',
//     status: 'Pending',
//     attempts: '1st Attempt',
//     userWalletBalance: '£50.00', 
//   };

//   return (
//     <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      
//       {/* Back Link */}
//       <Link href="/admin/payments/pending" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
//         <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
//         Back to Pending Queue
//       </Link>

//       {/* Header Profile */}
//       <div className="bg-card border border-border rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row justify-between items-start gap-6">
//         <div>
//           <div className="flex items-center gap-3 mb-1">
//             <h1 className="text-2xl font-bold text-foreground">Ref: {payment.id}</h1>
//             <Badge variant="warning">{payment.status}</Badge>
//           </div>
//           <p className="text-sm text-gray-500">Detected on {payment.date}</p>
//         </div>

//         <div className="bg-orange-50 border border-orange-200 rounded-xl px-6 py-4 text-center">
//           <p className="text-xs text-orange-600 font-bold uppercase tracking-wider mb-1">Amount Due</p>
//           <p className="text-3xl font-black text-orange-700">{payment.amountDue}</p>
//         </div>
//       </div>

//       {/* Two Column Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
//         {/* Left Column: Event & Vehicle Info */}
//         <div className="flex flex-col gap-6">
//           <div className="bg-card border border-border rounded-xl shadow-sm p-6">
//             <h2 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">Pending Event Details</h2>
//             <div className="space-y-4 text-sm">
//               <div className="flex justify-between">
//                 <span className="text-gray-500">Provider</span>
//                 <span className="font-semibold text-foreground">{payment.provider}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-500">Zone Type</span>
//                 <span className="font-medium text-foreground">{payment.zone}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-500">Processing Stage</span>
//                 <span className="font-medium text-orange-600">{payment.attempts}</span>
//               </div>
//               <div className="flex justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 mt-2">
//                 <span className="text-gray-600 font-medium">User Wallet Balance</span>
//                 <span className="font-bold text-red-600">{payment.userWalletBalance}</span>
//               </div>
//               <p className="text-xs text-gray-400 italic">Insufficient funds for auto-processing.</p>
//             </div>
//           </div>

//           <div className="bg-card border border-border rounded-xl shadow-sm p-6">
//             <h2 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">Vehicle & Driver</h2>
//             <div className="space-y-4 text-sm">
//               <div className="flex justify-between">
//                 <span className="text-gray-500">Registration</span>
//                 <Link href={`/admin/vehicles/${payment.reg.replace(/\s+/g, '')}`} className="font-bold text-primary hover:underline">{payment.reg}</Link>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-500">Driver</span>
//                 <Link href={`/admin/users/${payment.driver.toLowerCase().replace(/\s+/g, '-')}`} className="font-bold text-primary hover:underline">{payment.driver}</Link>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-500">Subscription Tier</span>
//                 <span className="font-medium text-foreground">{payment.tier}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Timeline & Actions */}
//         <div className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col">
//           <h2 className="text-lg font-bold text-foreground mb-6 pb-2 border-b border-border">Queue Timeline</h2>
          
//           <div className="relative border-l-2 border-gray-200 ml-3 pl-6 flex flex-col gap-6 grow">
//             <div className="relative">
//               <div className="absolute -left-8.25 bg-white p-1">
//                 <div className="w-3 h-3 bg-orange-400 rounded-full border-2 border-white shadow-sm"></div>
//               </div>
//               <p className="font-semibold text-sm text-foreground">Awaiting Manual Action</p>
//               <p className="text-xs text-gray-400 mt-1">Current Status</p>
//             </div>
//             <div className="relative">
//               <div className="absolute -left-8.25 bg-white p-1">
//                 <div className="w-3 h-3 bg-red-400 rounded-full border-2 border-white shadow-sm"></div>
//               </div>
//               <p className="font-semibold text-sm text-foreground">Auto-Pay Attempt Failed</p>
//               <p className="text-xs text-gray-400 mt-1">Apr 23, 2024 10:00 AM — Insufficient Funds</p>
//             </div>
//             <div className="relative">
//               <div className="absolute -left-8.25 bg-white p-1">
//                 <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-white shadow-sm"></div>
//               </div>
//               <p className="font-semibold text-sm text-foreground">Zone Entry Detected</p>
//               <p className="text-xs text-gray-400 mt-1">Apr 23, 2024 09:42 AM via ANPR</p>
//             </div>
//           </div>

//           {/* Admin Operational Actions */}
//           <div className="mt-8 pt-6 border-t border-border flex flex-col gap-3">
//             <button className="w-full py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors">
//               Process Manual Override
//             </button>
//             <button className="w-full py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-lg transition-colors flex justify-center items-center gap-2">
//               <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
//               Send Payment Reminder
//             </button>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }












"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Badge } from '@/src/app/components/ui/Badge';

// 1. MOVED OUTSIDE: Now Next.js will instantly recognize when you edit this data!
const mockDatabase = [
  { id: '108496', date: '23 Apr 2024', reg: 'ABC 2224', driver: 'Sarah Miller', fleet: 'Independent', provider: 'Manchester Airport', zone: 'Airport', tier: 'Manual', amountDue: '£85.50', status: 'Driver Notified', userWalletBalance: 'N/A' },
  { id: '108678', date: '23 Apr 2024', reg: 'EFG 1035', driver: 'Adam White', fleet: 'Independent', provider: 'London ULEZ', zone: 'ULEZ', tier: 'Manual', amountDue: '£12.50', status: 'Driver Notified', userWalletBalance: 'N/A' },
  { id: '108311', date: '23 Apr 2024', reg: 'CVS 2044', driver: 'Emma Rogers', fleet: 'City Logistics Ltd', provider: 'Birmingham CAZ', zone: 'Clean Air Zone', tier: 'Auto-Pay', amountDue: '£120.00', status: 'Payment In Progress', userWalletBalance: '£50.00' },
  { id: '108221', date: '22 Apr 2024', reg: 'GIM 2346', driver: 'Nathan Cooper', fleet: 'City Logistics Ltd', provider: 'London ULEZ', zone: 'ULEZ', tier: 'Basic', amountDue: '£12.50', status: 'Driver Notified', userWalletBalance: 'N/A' },
];

export default function PendingPaymentDetailsPage() {
  const params = useParams();
  const currentId = params?.id as string;

  // 2. Look up the ID from the outside database
  const payment = mockDatabase.find(p => p.id === currentId) || mockDatabase[0];

  // 3. Strict logic check
  const isAutoPay = payment.tier === 'Auto-Pay';

  return (
    <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      
      {/* Back Link */}
      <Link href="/admin/payments/pending" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Pending Queue
      </Link>

      {/* Header Profile */}
      <div className="bg-card border border-border rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-foreground">Ref: {payment.id}</h1>
            <Badge variant="warning">{payment.status}</Badge>
          </div>
          <p className="text-sm text-gray-500">Detected on {payment.date}</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl px-6 py-4 text-center shadow-sm">
          <p className="text-xs text-orange-600 font-bold uppercase tracking-wider mb-1">Amount Due</p>
          <p className="text-3xl font-black text-orange-700">{payment.amountDue}</p>
        </div>
      </div>

      {/* Two Column Layout for Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Column: Event & Vehicle Info */}
        <div className="flex flex-col gap-6">
          <div className="bg-card border border-border rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">Pending Event Details</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Provider</span>
                <span className="font-semibold text-foreground">{payment.provider}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Zone Type</span>
                <span className="font-medium text-foreground">{payment.zone}</span>
              </div>
              
              {/* Only show wallet balance and insufficient warning if Auto-Pay */}
              {isAutoPay && (
                <>
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 mt-2">
                    <span className="text-gray-600 font-medium">User Wallet Balance</span>
                    <span className="font-bold text-red-600">{payment.userWalletBalance}</span>
                  </div>
                  <p className="text-xs text-gray-400 italic">Insufficient funds for automatic background processing.</p>
                </>
              )}
              
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">Vehicle & Driver</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Registration</span>
                <Link href={`/admin/vehicles/${payment.reg.replace(/\s+/g, '')}`} className="font-bold text-primary hover:underline">{payment.reg}</Link>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Driver</span>
                <Link href={`/admin/users/${payment.driver.toLowerCase().replace(/\s+/g, '-')}`} className="font-bold text-primary hover:underline">{payment.driver}</Link>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Subscription Tier</span>
                <span className="font-medium text-foreground">{payment.tier}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Timeline & Actions */}
        <div className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col h-full">
          <h2 className="text-lg font-bold text-foreground mb-6 pb-2 border-b border-border">Queue Timeline</h2>
          
          <div className="relative border-l-2 border-gray-200 ml-3 pl-6 flex flex-col gap-6 grow">
            
            <div className="relative">
              <div className="absolute -left-8.25 bg-white p-1">
                <div className="w-3 h-3 bg-orange-400 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <p className="font-semibold text-sm text-foreground">
                {isAutoPay ? 'Awaiting Top-Up / Manual Processing' : 'Awaiting Driver Payment'}
              </p>
              <p className="text-xs text-gray-400 mt-1">Current Status</p>
            </div>

            {isAutoPay ? (
              <div className="relative">
                <div className="absolute -left-8.25 bg-white p-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full border-2 border-white shadow-sm"></div>
                </div>
                <p className="font-semibold text-sm text-foreground">Auto-Pay Attempt Failed</p>
                <p className="text-xs text-gray-400 mt-1">Apr 23, 2024 10:00 AM — Insufficient Funds</p>
              </div>
            ) : (
              <div className="relative">
                <div className="absolute -left-8.25 bg-white p-1">
                  <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-white shadow-sm"></div>
                </div>
                <p className="font-semibold text-sm text-foreground">Initial Notification Sent to Driver</p>
                <p className="text-xs text-gray-400 mt-1">Apr 23, 2024 10:00 AM</p>
              </div>
            )}

            <div className="relative">
              <div className="absolute -left-8.25 bg-white p-1">
                <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <p className="font-semibold text-sm text-foreground">Zone Entry Detected</p>
              <p className="text-xs text-gray-400 mt-1">Apr 23, 2024 09:42 AM via ANPR</p>
            </div>
          </div>

          {/* Admin Operational Actions */}
          <div className="mt-8 pt-6 border-t border-border flex flex-col gap-3">
            
            {/* The Process Button - STRICTLY hidden unless Auto-Pay */}
            {isAutoPay && (
              <button className="w-full py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                Process Auto-Pay Transaction
              </button>
            )}

            {/* Reminder Button - Always visible */}
            <button className="w-full py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-lg transition-colors flex justify-center items-center gap-2">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Send Payment Reminder
            </button>

          </div>
        </div>

      </div>

    </div>
  );
}