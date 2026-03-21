
// "use client";

// import React from 'react';
// import Link from 'next/link';
// import { Badge } from '@/src/app/components/ui/Badge';
// // import Image from 'next/image';

// export default function SuccessfulPaymentDetailsPage({ params }: { params: Promise<{ id: string }> }) {
//   // Unwrap the params Promise to prevent Next.js 15+ crash
//   const resolvedParams = React.use(params);

//   // Mock data for a successful payment (Try changing tier to 'Auto-Pay' to see the timeline change)
//   const payment = {
//     id: resolvedParams.id,
//     date: '23 Apr 2024',
//     time: '15:20',
//     reg: 'ABC 2224',
//     driver: 'Sarah Miller',
//     fleet: 'Independent',
//     provider: 'Manchester Airport',
//     zone: 'Airport Drop-off',
//     tier: 'Manual', 
//     amount: '£85.50',
//     status: 'Successful',
//     paymentMethod: 'Credit Card ending in 4242',
//     transactionId: 'TXN-982347102',
//   };

//   const isAutoPay = payment.tier === 'Auto-Pay';

//   return (
//     <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      
//       {/* Back Link */}
//       <Link href="/admin/payments/successful" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
//         <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
//         Back to Successful Payments
//       </Link>

//       {/* Header Profile */}
//       <div className="bg-card border border-border rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row justify-between items-start gap-6">
//         <div>
//           <div className="flex items-center gap-3 mb-1">
//             <h1 className="text-2xl font-bold text-foreground">Ref: {payment.id}</h1>
//             <Badge variant="success">{payment.status}</Badge>
//           </div>
//           <p className="text-sm text-gray-500">Processed on {payment.date} at {payment.time}</p>
//         </div>

//         <div className="bg-green-50 border border-green-200 rounded-xl px-6 py-4 text-center shadow-sm">
//           <p className="text-xs text-green-600 font-bold uppercase tracking-wider mb-1">Amount Paid</p>
//           <p className="text-3xl font-black text-green-700">{payment.amount}</p>
//         </div>
//       </div>

//       {/* Two Column Layout for Details */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
//         {/* Left Column: Event & Vehicle Info */}
//         <div className="flex flex-col gap-6">
//           <div className="bg-card border border-border rounded-xl shadow-sm p-6">
//             <h2 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">Transaction Details</h2>
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
//                 <span className="text-gray-500">Payment Method</span>
//                 <span className="font-medium text-gray-700">{payment.paymentMethod}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-500">Transaction ID</span>
//                 <span className="font-mono text-xs bg-gray-100 px-2 py-1 border border-gray-200 rounded text-gray-700">{payment.transactionId}</span>
//               </div>
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
//         <div className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col h-full">
//           <h2 className="text-lg font-bold text-foreground mb-6 pb-2 border-b border-border">Payment Timeline</h2>
          
//           <div className="relative border-l-2 border-gray-200 ml-3 pl-6 flex flex-col gap-6 grow">
//             <div className="relative">
//               <div className="absolute -left-8.25 bg-white p-1">
//                 <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
//               </div>
//               <p className="font-semibold text-sm text-foreground">Payment Successful</p>
//               <p className="text-xs text-gray-400 mt-1">Apr 23, 2024 15:20 PM</p>
//             </div>
            
//             {/* Dynamic Step based on Tier */}
//             <div className="relative">
//               <div className="absolute -left-8.25 bg-white p-1">
//                 <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-white shadow-sm"></div>
//               </div>
//               <p className="font-semibold text-sm text-foreground">
//                 {isAutoPay ? 'Auto-Pay Processing Initiated' : 'Manual Checkout Initiated'}
//               </p>
//               <p className="text-xs text-gray-400 mt-1">Apr 23, 2024 15:18 PM</p>
//             </div>

//             <div className="relative">
//               <div className="absolute -left-8.25 bg-white p-1">
//                 <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-white shadow-sm"></div>
//               </div>
//               <p className="font-semibold text-sm text-foreground">Zone Entry Detected</p>
//               <p className="text-xs text-gray-400 mt-1">Apr 23, 2024 14:10 PM via ANPR</p>
//             </div>
//           </div>

//           {/* Admin Actions - Refund removed */}
//           <div className="mt-8 pt-6 border-t border-border flex flex-col gap-3">
//             <button className="w-full py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-lg transition-colors flex justify-center items-center gap-2">
//               <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
//               Download PDF Receipt
//             </button>
//           </div>
//         </div>

//       </div>

//       {/* ================= PAYMENT PROOF / SCREENSHOT SECTION ================= */}
//       <div className="bg-card border border-border rounded-xl shadow-sm p-6 md:p-8">
//         <h2 className="text-lg font-bold text-foreground mb-2">Payment Confirmation Proof</h2>
//         <p className="text-sm text-gray-500 mb-6 pb-4 border-b border-border">
//           {isAutoPay 
//             ? "Visual confirmation receipt generated by the Auto-Pay system upon successful transaction."
//             : "Visual confirmation screenshot uploaded by the user to verify manual payment."
//           }
//         </p>

//         <div className="flex justify-center">
//           {/* Placeholder for the actual receipt/screenshot image */}
//           <div className="w-full max-w-sm aspect-9/16 bg-gray-100 rounded-xl border border-gray-200 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
            
//             {/* Fake UI to look like a receipt inside the placeholder */}
//             <div className="absolute inset-0 p-6 flex flex-col opacity-60">
//                <div className="w-full h-8 bg-gray-200 rounded mb-4"></div>
//                <div className="w-3/4 h-4 bg-gray-200 rounded mb-8 mx-auto"></div>
//                <div className="w-full border-t border-dashed border-gray-300 my-4"></div>
//                <div className="flex justify-between mb-2"><div className="w-1/3 h-3 bg-gray-200 rounded"></div><div className="w-1/4 h-3 bg-gray-200 rounded"></div></div>
//                <div className="flex justify-between mb-2"><div className="w-1/2 h-3 bg-gray-200 rounded"></div><div className="w-1/4 h-3 bg-gray-200 rounded"></div></div>
//                <div className="flex justify-between mb-8"><div className="w-1/3 h-3 bg-gray-200 rounded"></div><div className="w-1/4 h-3 bg-gray-200 rounded"></div></div>
//                <div className="w-full border-t border-dashed border-gray-300 my-4"></div>
//                <div className="flex justify-between items-center"><div className="w-1/3 h-4 bg-gray-300 rounded"></div><div className="w-1/3 h-6 bg-gray-300 rounded"></div></div>
//             </div>

//             {/* Icon overlay telling the admin what this is */}
//             <div className="z-10 flex flex-col items-center bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/50 shadow-sm">
//               <svg className="text-gray-400 mb-2" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
//               <span className="text-sm font-semibold text-gray-700">Provider Receipt Screenshot</span>
//               <span className="text-xs text-gray-500 mt-1 text-center">Provider: Manchester Airport</span>
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

// Mock database to simulate fetching a completed Auto-Pay payment
const mockDatabase = [
  { 
    id: 'AP-10234', 
    date: '23 Apr 2024', 
    time: '12:10', 
    reg: 'ABC 1234', 
    provider: 'Manchester Airport', 
    zone: 'Terminal 2, (Long Stay) Car Park', 
    tier: 'Auto-Pay', 
    amount: '£12.50',
    walletBalance: '£25.00',
    dueBy: 'Today, 6:00 PM',
    reference: 'XYZ0912485',
    status: 'Paid'
  }
];

export default function SuccessfulPaymentDetailsPage() {
  const params = useParams();
  const currentId = params?.id as string;

  // Find the exact row clicked, fallback to the mock object if directly visited
  const payment = mockDatabase.find(p => p.id === currentId) || mockDatabase[0];

  return (
    <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      
      {/* Back Link */}
      <Link href="/admin/payments/successful" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        Back to Successful Payments
      </Link>

      {/* Top Header Section */}
      <div className="bg-white border border-border rounded-xl shadow-sm p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Payment Detail - {payment.id}</h1>
          <p className="text-sm text-gray-500 mt-1">Processed on {payment.date} at {payment.time}</p>
        </div>
        
        <div className="bg-green-50 border border-green-100 rounded-lg px-6 py-3 text-center min-w-45">
          <p className="text-xs text-green-700 font-semibold mb-1">Payment Successful</p>
          <p className="text-3xl font-black text-green-700">{payment.amount}</p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Column: Transaction & Vehicle Details */}
        <div className="flex flex-col gap-6">
          
          {/* Transaction Details Card */}
          <div className="bg-white border border-border rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-foreground mb-6">Transaction Details</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-500">Provider</span>
                <span className="font-semibold text-foreground">{payment.provider}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-500">Zone Type</span>
                <span className="font-medium text-foreground">{payment.zone}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-500">Status:</span>
                <span className="bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1">
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  {payment.status}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-500">Wallet Balance:</span>
                <span className="font-bold text-foreground">{payment.walletBalance}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-500">Due By:</span>
                <span className="font-medium text-foreground flex items-center gap-1">
                  {payment.dueBy}
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-gray-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-gray-500">Reference:</span>
                <span className="bg-gray-100 border border-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-mono">{payment.reference}</span>
              </div>
            </div>
          </div>

          {/* Vehicle Card */}
          <div className="bg-white border border-border rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-foreground mb-6">Vehicle</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-500">Registration:</span>
                <span className="font-bold text-foreground">{payment.reg}</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-gray-500">Subscription Tier:</span>
                <span className="font-bold text-foreground">{payment.tier}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Payment Timeline & Receipt */}
        <div className="bg-white border border-border rounded-xl shadow-sm p-6 flex flex-col h-full relative">
          <h2 className="text-lg font-bold text-foreground mb-8">Payment Timeline</h2>
          
          <div className="relative border-l-2 border-gray-100 ml-3 pl-6 flex flex-col gap-8 grow">
            
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-8.25 top-1 bg-white p-0.5">
                <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <p className="font-bold text-sm text-foreground">Zone Entry Detected</p>
              <p className="text-xs text-gray-500 mt-1">Apr 25, 2024 10:25 AM</p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-8.25 top-1 bg-white p-0.5">
                <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <p className="font-bold text-sm text-foreground">Auto-Pay Scheduled <span className="font-normal text-gray-500 ml-2">{payment.amount}</span></p>
              <p className="text-xs text-gray-500 mt-1">Auto-Pay</p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-8.25 top-1 bg-white p-0.5">
                <div className="w-3 h-3 bg-white border-2 border-orange-400 rounded-full shadow-sm"></div>
              </div>
              <p className="font-bold text-sm text-foreground">Ops Payment Processing</p>
              <p className="text-xs text-gray-500 mt-1">Manual</p>
            </div>

            {/* Step 4 - The Highlighted Successful Card */}
            <div className="relative bg-green-50/50 border border-green-100 rounded-lg p-4 -ml-2 mt-2">
              <div className="absolute -left-6.75 top-4 bg-white p-0.5 rounded-full">
                <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                   <svg width="8" height="8" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="4"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
              </div>
              <p className="font-bold text-sm text-foreground">Payment Successful</p>
              <p className="text-xs text-gray-600 mt-1">Manual - {payment.amount} Ref: {payment.reference}</p>
              
              {/* Embedded Screenshot Section from Mockup */}
              <div className="mt-4 bg-white border border-gray-200 rounded-lg p-3 flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <button className="flex items-center gap-2 text-xs font-semibold text-gray-700 hover:text-primary transition-colors">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                    Download Receipt
                  </button>
                  <button className="flex items-center gap-2 text-xs font-medium text-primary hover:underline transition-colors">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                    View Screenshot
                  </button>
                </div>
                
                {/* Fake Image Thumbnail Placeholder */}
                <div className="w-24 h-12 bg-gray-100 border border-gray-200 rounded overflow-hidden relative">
                  <div className="absolute inset-0 opacity-40 flex flex-col px-1 py-1">
                     <div className="w-full h-1 bg-gray-300 rounded mb-1"></div>
                     <div className="w-3/4 h-1 bg-blue-300 rounded mb-1"></div>
                     <div className="w-1/2 h-1 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 flex justify-end">
            <button className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-sm">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Download Receipt
            </button>
          </div>
          
        </div>

      </div>
    </div>
  );
}