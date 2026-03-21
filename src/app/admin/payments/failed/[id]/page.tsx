



































// "use client";

// import React from 'react';
// import Link from 'next/link';

// export default function FailedPaymentDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  
//   const resolvedParams = React.use(params);

//   // Mock data for a failed/expired payment
//   const payment = {
//     id: resolvedParams.id,
//     date: '23 Apr 2024',
//     reg: 'ABC 2226',
//     driver: 'Adam White',
//     fleet: 'Express Delivery Co',
//     provider: 'London ULEZ',
//     zone: 'ULEZ',
//     tier: 'Manual',
//     amountDue: '£1,200.00', // Escalated fine amount due to expiry
//     originalAmount: '£12.50',
//     status: 'Expired - Payment Window Closed',
//     expiryDate: '07 May 2024',
//     reason: 'Payment not received within 14-day operational window.',
//   };

//   return (
//     <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      
//       {/* Back Link */}
//       <Link href="/admin/payments/failed" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
//         <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
//         Back to Failed Payments
//       </Link>

//       {/* Header Profile - Notice the Red Error Styling */}
//       <div className="bg-red-50 border border-red-100 rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row justify-between items-start gap-6">
//         <div>
//           <div className="flex items-center gap-3 mb-1">
//             <h1 className="text-2xl font-bold text-red-900">Ref: {payment.id}</h1>
//             <span className="bg-red-200 text-red-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide border border-red-300">
//               {payment.status}
//             </span>
//           </div>
//           <p className="text-sm text-red-700">Zone Entry Detected: {payment.date}</p>
//         </div>

//         <div className="bg-white border border-red-200 rounded-xl px-6 py-4 text-center shadow-sm">
//           <p className="text-xs text-red-600 font-bold uppercase tracking-wider mb-1">Escalated Fine Due</p>
//           <p className="text-3xl font-black text-red-700">{payment.amountDue}</p>
//         </div>
//       </div>

//       {/* Audit Warning Box */}
//       <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 flex gap-3 text-gray-700 text-sm">
//         <svg className="shrink-0 mt-0.5 text-gray-500" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" /></svg>
//         <p>
//           <span className="font-bold">Read-Only Audit Record:</span> This event has passed its legal payment window and is now locked by the system. No further operational actions or retries can be performed on this transaction through this platform. It has been escalated to external collections.
//         </p>
//       </div>

//       {/* Two Column Layout for Details */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
//         {/* Left Column: Event & Vehicle Info */}
//         <div className="flex flex-col gap-6">
//           <div className="bg-card border border-border rounded-xl shadow-sm p-6">
//             <h2 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">Failure Details</h2>
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
//                 <span className="text-gray-500">Original Base Fee</span>
//                 <span className="font-medium text-gray-700">{payment.originalAmount}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-500">System Expiry Date</span>
//                 <span className="font-medium text-red-600">{payment.expiryDate}</span>
//               </div>
//               <div className="mt-4 p-3 bg-gray-50 border border-gray-100 rounded-lg">
//                 <span className="block text-xs font-bold text-gray-500 mb-1">System Reason</span>
//                 <span className="text-gray-800">{payment.reason}</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-card border border-border rounded-xl shadow-sm p-6">
//             <h2 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">Vehicle & Driver Profile</h2>
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
//                 <span className="text-gray-500">Associated Fleet</span>
//                 <Link href={`/admin/fleets/${payment.fleet.toLowerCase().replace(/\s+/g, '-')}`} className="font-bold text-primary hover:underline">{payment.fleet}</Link>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-500">Subscription Tier at Time of Event</span>
//                 <span className="font-medium text-foreground">{payment.tier}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Timeline Log */}
//         <div className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col h-full">
//           <h2 className="text-lg font-bold text-foreground mb-6 pb-2 border-b border-border">Audit Timeline</h2>
          
//           <div className="relative border-l-2 border-gray-200 ml-3 pl-6 flex flex-col gap-6">
//             <div className="relative opacity-60">
//               <div className="absolute -left-8.25 bg-white p-1">
//                 <div className="w-3 h-3 bg-red-600 rounded-full border-2 border-white shadow-sm"></div>
//               </div>
//               <p className="font-semibold text-sm text-foreground">Escalated to Collections (PCN Issued)</p>
//               <p className="text-xs text-gray-500 mt-1">May 07, 2024 00:01 AM</p>
//             </div>
//             <div className="relative">
//               <div className="absolute -left-8.25 bg-white p-1">
//                 <div className="w-3 h-3 bg-orange-400 rounded-full border-2 border-white shadow-sm"></div>
//               </div>
//               <p className="font-semibold text-sm text-foreground">Final Warning Notification Sent</p>
//               <p className="text-xs text-gray-500 mt-1">May 04, 2024 09:00 AM</p>
//             </div>
//             <div className="relative">
//               <div className="absolute -left-8.25 bg-white p-1">
//                 <div className="w-3 h-3 bg-gray-400 rounded-full border-2 border-white shadow-sm"></div>
//               </div>
//               <p className="font-semibold text-sm text-foreground">Initial Notification Sent (Email/SMS)</p>
//               <p className="text-xs text-gray-500 mt-1">Apr 23, 2024 15:45 PM</p>
//             </div>
//             <div className="relative">
//               <div className="absolute -left-8.25 bg-white p-1">
//                 <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-white shadow-sm"></div>
//               </div>
//               <p className="font-semibold text-sm text-foreground">Zone Entry Detected</p>
//               <p className="text-xs text-gray-500 mt-1">Apr 23, 2024 15:20 PM via ANPR</p>
//             </div>
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

// Mock database mapping exactly to the main table page for Failed Payments
const mockDatabase = [
  { id: '105668', date: '23 Apr 2024', reg: 'ABC 2226', driver: 'Adam White', fleet: 'Independent', provider: 'London ULEZ', zone: 'ULEZ', tier: 'Manual', amountDue: '£1,200.00', originalAmount: '£12.50', status: 'Expired - Driver failed to pay within window', expiryDate: '07 May 2024', reason: 'Payment not received from user within 14-day operational window.' },
  { id: '106578', date: '23 Apr 2024', reg: 'PQ12 OPS', driver: 'Cesar Gomez', fleet: 'Independent', provider: 'London ULEZ', zone: 'ULEZ', tier: 'Basic', amountDue: '£125.00', originalAmount: '£12.50', status: 'Expired - Driver failed to pay within window', expiryDate: '07 May 2024', reason: 'Payment not received from user within 14-day operational window.' },
  { id: '108311', date: '23 Apr 2024', reg: 'EFG 1035', driver: 'Felicio Niller', fleet: 'Independent', provider: 'Birmingham CAZ', zone: 'Airport', tier: 'Manual', amountDue: '£125.00', originalAmount: '£15.00', status: 'Expired - Driver failed to pay within window', expiryDate: '07 May 2024', reason: 'Payment not received from user within 14-day operational window.' },
  { id: '106993', date: '14 Apr 2024', reg: 'XYZ 4585', driver: 'Sarah Cooper', fleet: 'City Logistics Ltd', provider: 'Birmingham CAZ', zone: 'Airport', tier: 'Auto-Pay', amountDue: '£1,200.00', originalAmount: '£120.00', status: 'Expired - Insufficient wallet balance', expiryDate: '28 Apr 2024', reason: 'Auto-pay failed. Insufficient funds in user wallet during the automated retry period.' },
  { id: '108110', date: '21 Apr 2024', reg: 'MW-6901', driver: 'Emma Rogers', fleet: 'City Logistics Ltd', provider: 'Coventry CAZ', zone: 'CAZ', tier: 'Auto-Pay', amountDue: '£120.00', originalAmount: '£12.50', status: 'Expired - Insufficient wallet balance', expiryDate: '05 May 2024', reason: 'Auto-pay failed. Insufficient funds in user wallet during the automated retry period.' },
];

export default function FailedPaymentDetailsPage() {
  const params = useParams();
  const currentId = params?.id as string;

  // Find the exact row clicked. Fallback to the first item if directly visited without ID match
  const payment = mockDatabase.find(p => p.id === currentId) || mockDatabase[0];

  return (
    <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      
      {/* Back Link */}
      <Link href="/admin/payments/failed" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Failed Payments
      </Link>

      {/* Header Profile - Notice the Red Error Styling */}
      <div className="bg-red-50 border border-red-100 rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-red-900">Ref: {payment.id}</h1>
            <span className="bg-red-200 text-red-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide border border-red-300">
              {payment.status}
            </span>
          </div>
          <p className="text-sm text-red-700">Zone Entry Detected: {payment.date}</p>
        </div>

        <div className="bg-white border border-red-200 rounded-xl px-6 py-4 text-center shadow-sm">
          <p className="text-xs text-red-600 font-bold uppercase tracking-wider mb-1">Escalated Fine Due</p>
          <p className="text-3xl font-black text-red-700">{payment.amountDue}</p>
        </div>
      </div>

      {/* Audit Warning Box */}
      <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 flex gap-3 text-gray-700 text-sm">
        <svg className="shrink-0 mt-0.5 text-gray-500" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" /></svg>
        <p>
          <span className="font-bold">Read-Only Audit Record:</span> This event has passed its legal payment window and is now locked by the system. No further operational actions or retries can be performed on this transaction through this platform. It has been escalated to external collections.
        </p>
      </div>

      {/* Two Column Layout for Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Column: Event & Vehicle Info */}
        <div className="flex flex-col gap-6">
          <div className="bg-card border border-border rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">Failure Details</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Provider</span>
                <span className="font-semibold text-foreground">{payment.provider}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Zone Type</span>
                <span className="font-medium text-foreground">{payment.zone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Original Base Fee</span>
                <span className="font-medium text-gray-700">{payment.originalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">System Expiry Date</span>
                <span className="font-medium text-red-600">{payment.expiryDate}</span>
              </div>
              <div className="mt-4 p-3 bg-gray-50 border border-gray-100 rounded-lg">
                <span className="block text-xs font-bold text-gray-500 mb-1">System Reason</span>
                <span className="text-gray-800">{payment.reason}</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">Vehicle & Driver Profile</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Registration</span>
                <Link href={`/admin/vehicles/${payment.reg.replace(/\s+/g, '')}`} className="font-bold text-primary hover:underline">{payment.reg}</Link>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Driver</span>
                <Link href={`/admin/users/${payment.driver.toLowerCase().replace(/\s+/g, '-')}`} className="font-bold text-primary hover:underline">{payment.driver}</Link>
              </div>
              {payment.fleet !== 'Independent' && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Associated Fleet</span>
                  <span className="font-bold text-primary">{payment.fleet}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-500">Subscription Tier at Time of Event</span>
                <span className="font-medium text-foreground">{payment.tier}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Timeline Log */}
        <div className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col h-full">
          <h2 className="text-lg font-bold text-foreground mb-6 pb-2 border-b border-border">Audit Timeline</h2>
          
          <div className="relative border-l-2 border-gray-200 ml-3 pl-6 flex flex-col gap-6">
            <div className="relative opacity-60">
              <div className="absolute -left-8.25 bg-white p-1">
                <div className="w-3 h-3 bg-red-600 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <p className="font-semibold text-sm text-foreground">Escalated to Collections (PCN Issued)</p>
              <p className="text-xs text-gray-500 mt-1">May 07, 2024 00:01 AM</p>
            </div>
            
            {payment.tier === 'Auto-Pay' ? (
              // Auto-Pay specific timeline
              <>
                <div className="relative">
                  <div className="absolute -left-8.25 bg-white p-1">
                    <div className="w-3 h-3 bg-orange-400 rounded-full border-2 border-white shadow-sm"></div>
                  </div>
                  <p className="font-semibold text-sm text-foreground">Final Auto-Pay Retry Failed</p>
                  <p className="text-xs text-gray-500 mt-1">May 06, 2024 11:45 PM — Insufficient Funds</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8.25 bg-white p-1">
                    <div className="w-3 h-3 bg-gray-400 rounded-full border-2 border-white shadow-sm"></div>
                  </div>
                  <p className="font-semibold text-sm text-foreground">Initial Auto-Pay Processing Failed</p>
                  <p className="text-xs text-gray-500 mt-1">Apr 23, 2024 15:45 PM — Insufficient Funds</p>
                </div>
              </>
            ) : (
              // Manual/Basic specific timeline
              <>
                <div className="relative">
                  <div className="absolute -left-8.25 bg-white p-1">
                    <div className="w-3 h-3 bg-orange-400 rounded-full border-2 border-white shadow-sm"></div>
                  </div>
                  <p className="font-semibold text-sm text-foreground">Final Warning Notification Sent</p>
                  <p className="text-xs text-gray-500 mt-1">May 04, 2024 09:00 AM</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8.25 bg-white p-1">
                    <div className="w-3 h-3 bg-gray-400 rounded-full border-2 border-white shadow-sm"></div>
                  </div>
                  <p className="font-semibold text-sm text-foreground">Initial Notification Sent (Email/SMS)</p>
                  <p className="text-xs text-gray-500 mt-1">Apr 23, 2024 15:45 PM</p>
                </div>
              </>
            )}

            <div className="relative">
              <div className="absolute -left-8.25 bg-white p-1">
                <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <p className="font-semibold text-sm text-foreground">Zone Entry Detected</p>
              <p className="text-xs text-gray-500 mt-1">Apr 23, 2024 15:20 PM via ANPR</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}