/* eslint-disable react/no-unescaped-entities */
// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useParams, useRouter } from 'next/navigation';

// const mockDatabase = [
//   { id: 'AP-1028', reg: 'ABC 1234', provider: 'Manchester Airport', charge: '£15.00', balance: '£25.00', date: '25 Apr 2024', time: '10:25 AM' },
//   { id: 'AP-1025', reg: 'LMN 8901', provider: 'Birmingham CAZ', charge: '£3.00', balance: '£10.00', date: '25 Apr 2024', time: '11:15 AM' },
// ];

// export default function AutoPayProcessPage() {
//   const params = useParams();
//   const router = useRouter();
//   const currentId = params?.id as string;
//   const [isProcessing, setIsProcessing] = useState(false);

//   const payment = mockDatabase.find(p => p.id === currentId) || mockDatabase[0];

//   const handleCompletePayment = () => {
//     setIsProcessing(true);
//     setTimeout(() => {
//       router.push('/admin/payments/successful');
//     }, 1500);
//   };

//   return (
//     <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      
//       <Link href="/admin/payments/autopay-pending" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
//         <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
//         Back to Pending Queue
//       </Link>

//       <div className="bg-white border border-border rounded-xl shadow-sm p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <div>
//           <h1 className="text-2xl font-bold text-foreground">Process Auto-Pay: {payment.id}</h1>
//           <p className="text-sm text-gray-500 mt-1">Zone Entry Detected on {payment.date} at {payment.time}</p>
//         </div>
//         <div className="bg-blue-50 border border-blue-100 rounded-lg px-6 py-3 text-center min-w-45">
//           <p className="text-xs text-blue-700 font-semibold mb-1">Charge Amount</p>
//           <p className="text-3xl font-black text-blue-700">{payment.charge}</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
//         <div className="flex flex-col gap-6">
//           <div className="bg-white border border-border rounded-xl shadow-sm p-6">
//             <h2 className="text-lg font-bold text-foreground mb-6">Payment Context</h2>
//             <div className="space-y-4 text-sm">
//               <div className="flex justify-between items-center border-b border-gray-50 pb-3">
//                 <span className="text-gray-500">Provider</span>
//                 <span className="font-semibold text-foreground">{payment.provider}</span>
//               </div>
//               <div className="flex justify-between items-center border-b border-gray-50 pb-3">
//                 <span className="text-gray-500">Vehicle Registration</span>
//                 <span className="font-bold text-foreground">{payment.reg}</span>
//               </div>
//               <div className="flex justify-between items-center pt-1">
//                 <span className="text-gray-500">User Wallet Balance</span>
//                 <span className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded">{payment.balance}</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3 text-amber-800 text-sm">
//              <svg className="shrink-0 mt-0.5" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
//              <div>
//                <p className="font-bold mb-1">Operational Instructions:</p>
//                <ol className="list-decimal pl-4 space-y-1">
//                  <li>Go to the {payment.provider} payment portal.</li>
//                  <li>Pay {payment.charge} for vehicle {payment.reg}.</li>
//                  <li>Take a screenshot of the confirmation receipt.</li>
//                  <li>Upload the screenshot here to complete the process.</li>
//                </ol>
//              </div>
//           </div>
//         </div>

//         <div className="bg-white border border-border rounded-xl shadow-sm p-6 flex flex-col h-full">
//           <h2 className="text-lg font-bold text-foreground mb-6">Upload Provider Receipt</h2>
          
//           <div className="grow flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors p-8 mb-6 text-center cursor-pointer">
//             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
//               <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
//             </div>
//             <p className="text-sm font-bold text-foreground mb-1">Click to upload or drag & drop</p>
//             <p className="text-xs text-gray-500">SVG, PNG, JPG or PDF (max. 5MB)</p>
//           </div>

//           <button 
//             onClick={handleCompletePayment}
//             disabled={isProcessing}
//             className="w-full py-3 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-lg transition-colors shadow-sm disabled:opacity-70 flex justify-center items-center gap-2 cursor-pointer"
//           >
//             {isProcessing ? (
//               <>Processing...</>
//             ) : (
//               <>
//                 <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
//                 Complete & Deduct Wallet
//               </>
//             )}
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }









































// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useParams, useRouter } from 'next/navigation';
// import { useToast } from '@/src/app/components/ui/useToast';

// const mockDatabase = [
//   { id: 'AP-1028', reg: 'ABC 1234', driver: 'Sarah Miller', make: 'Toyota Prius (2018)', provider: 'Manchester Airport', charge: '£15.00', balance: '£25.00', status: 'Sufficient', date: '25 Apr 2024', detectedTime: '10:25 AM', identifiedTime: '10:27 AM', createdTime: '10:26 AM' },
//   { id: 'AP-1030', reg: 'LSFA 9991', driver: 'Emma Rogers', make: 'Ford Focus (2017)', provider: 'Bristol Airport', charge: '£19.00', balance: '£10.00', status: 'Insufficient', date: '25 Apr 2024', detectedTime: '9:15 AM', identifiedTime: '9:17 AM', createdTime: '9:16 AM' },
// ];

// export default function AutoPayProcessPage() {
//   const params = useParams();
//   const router = useRouter();
//   const { showToast, ToastComponent } = useToast();
  
//   const currentId = params?.id as string;
//   const [isProcessing, setIsProcessing] = useState(false);

//   // Auto-detect which mockup layout to show based on ID
//   const payment = mockDatabase.find(p => p.id === currentId) || mockDatabase[0];
//   const isSufficient = payment.status === 'Sufficient';

//   const handleCompletePayment = () => {
//     setIsProcessing(true);
//     setTimeout(() => router.push('/admin/payments/successful'), 1500);
//   };

//   const handleManualNotify = () => {
//     showToast('Manual top-up reminder sent to driver.', 'success');
//   };

//   return (
//     <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      
//       <Link href="/admin/payments/autopay-pending" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
//         <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
//         Back to Pending Queue
//       </Link>

//       {/* Header */}
//       <div className="bg-white border border-border rounded-xl shadow-sm p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <div>
//           <h1 className="text-2xl font-bold text-foreground">Process Auto-Pay: {payment.id}</h1>
//           <p className="text-sm text-gray-500 mt-1">Zone Entry Detected on {payment.date} at {payment.detectedTime}</p>
//         </div>
//         <div className={`border rounded-lg px-6 py-3 text-center min-w-37.5 ${isSufficient ? 'bg-blue-50 border-blue-100' : 'bg-red-50 border-red-100'}`}>
//           <p className={`text-xs font-semibold mb-1 ${isSufficient ? 'text-blue-700' : 'text-red-700'}`}>Charge Amount</p>
//           <p className={`text-3xl font-black ${isSufficient ? 'text-blue-700' : 'text-red-700'}`}>{payment.charge}</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
//         {/* LEFT COLUMN */}
//         <div className="flex flex-col gap-6">
//           <div className="bg-white border border-border rounded-xl shadow-sm p-6">
//             <h2 className="text-lg font-bold text-foreground mb-6">Payment Context</h2>
//             <div className="space-y-4 text-sm">
//               <div className="flex justify-between items-center border-b border-gray-50 pb-3">
//                 <span className="text-gray-500">Provider</span>
//                 <span className="font-bold text-foreground">{payment.provider}</span>
//               </div>
//               <div className="flex justify-between items-center border-b border-gray-50 pb-3">
//                 <span className="text-gray-500">Vehicle Registration</span>
//                 <span className="font-bold text-foreground">{payment.reg}</span>
//               </div>
//               <div className="flex justify-between items-center border-b border-gray-50 pb-3">
//                 <span className="text-gray-500">Subscription Tier</span>
//                 <span className="bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded text-xs">Auto-Pay</span>
//               </div>
//               <div className="flex justify-between items-center border-b border-gray-50 pb-3">
//                 <span className="text-gray-500">Vehicle Make & Model</span>
//                 <span className="font-medium text-foreground">{payment.make}</span>
//               </div>
//               <div className="flex justify-between items-center pt-1">
//                 <span className="text-gray-500">User Wallet Balance</span>
//                 <div className="flex items-center gap-3">
//                   {!isSufficient && (
//                     <span className="bg-orange-100 text-orange-800 font-bold px-2 py-1 rounded text-xs">Insufficient – Top-Up Required</span>
//                   )}
//                   <span className={`font-bold px-2 py-1 rounded ${isSufficient ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>{payment.balance}</span>
//                 </div>
//               </div>
//             </div>
            
//             {!isSufficient && (
//               <p className="text-xs text-red-500 mt-3 font-medium">Insufficient funds. Please top up the wallet to process this charge.</p>
//             )}
//           </div>

//           <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3 text-amber-800 text-sm">
//              <svg className="shrink-0 mt-0.5" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
//              <div>
//                <p className="font-bold mb-1">Operational Instructions:</p>
//                <ol className="list-decimal pl-4 space-y-1">
//                  <li>Go to the {payment.provider} payment portal.</li>
//                  <li>Pay {payment.charge} for vehicle {payment.reg}.</li>
//                  <li>Take a screenshot of the confirmation receipt.</li>
//                  <li>Upload the screenshot here to complete the process.</li>
//                </ol>
//              </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="bg-white border border-border rounded-xl shadow-sm p-6 flex flex-col h-full">
//           <h2 className="text-lg font-bold text-foreground mb-6 pb-2 border-b border-border">Queue Timeline</h2>
          
//           <div className="relative border-l-2 border-gray-200 ml-3 pl-6 flex flex-col gap-6 mb-8">
            
//             <div className="relative">
//               <div className="absolute -left-8.75 bg-white p-1">
//                 <div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-white shadow-sm"></div>
//               </div>
//               <p className="font-bold text-sm text-foreground">Charge Identified</p>
//               <p className="text-xs text-gray-500 mt-0.5">{payment.date} {payment.identifiedTime}</p>
//               <p className="text-xs text-gray-500 mt-0.5">Chargeable event detected for the zone.</p>
//             </div>

//             <div className="relative">
//               <div className="absolute -left-8.75 bg-white p-1">
//                 <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-white shadow-sm"></div>
//               </div>
//               <p className="font-bold text-sm text-foreground">Zone Entry</p>
//               <p className="text-xs text-gray-500 mt-0.5">{payment.detectedTime}</p>
//             </div>

//             <div className="relative">
//               <div className="absolute -left-8.75 bg-white p-1">
//                 <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-white shadow-sm"></div>
//               </div>
//               <p className="font-bold text-sm text-foreground">Event Created <span className="font-normal text-gray-400 ml-1">{payment.createdTime}</span></p>
//               <p className="text-xs text-gray-500 mt-0.5">{payment.date} {payment.createdTime}</p>
//             </div>

//             {isSufficient ? (
//               <div className="relative">
//                 <div className="absolute -left-8.75 bg-white p-0.5">
//                   <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
//                     <svg width="8" height="8" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="4"><path d="M20 6L9 17l-5-5"/></svg>
//                   </div>
//                 </div>
//                 <p className="font-bold text-sm text-foreground">Ready to Process Payment</p>
//                 <p className="text-xs text-gray-500 mt-0.5">10:28 AM, {payment.date}</p>
//                 <p className="text-xs text-gray-500 mt-0.5">Auto-payment process initiated.</p>
//               </div>
//             ) : (
//               <div className="relative">
//                 <div className="absolute -left-8.75 bg-white p-0.5">
//                   <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white text-[10px] font-bold">
//                     !
//                   </div>
//                 </div>
//                 <p className="font-bold text-sm text-foreground">Awaiting Wallet Top-Up</p>
//                 <p className="text-xs text-gray-500 mt-0.5">{payment.date} 9:18 AM</p>
//                 <p className="text-xs text-gray-500 mt-0.5">Auto-pay pending funding.</p>
//               </div>
//             )}
//           </div>

//           {/* DYNAMIC ACTION AREA */}
//           {isSufficient ? (
//             <div className="mt-auto">
//               <div className="flex gap-3 mb-2">
//                 <input type="text" defaultValue={payment.charge} className="border border-border rounded-lg px-4 py-3 w-1/3 font-bold text-foreground focus:outline-none" />
//                 <button onClick={handleCompletePayment} disabled={isProcessing} className="grow py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors shadow-sm disabled:opacity-70 flex justify-center items-center gap-2">
//                   {isProcessing ? 'Processing...' : <><svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Complete & Deduct Wallet</>}
//                 </button>
//               </div>
//               <p className="text-xs text-gray-500 mb-4">The manual payment amount will be deducted from the user's wallet balance.</p>
              
//               <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors py-6 text-center cursor-pointer">
//                 <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
//                   <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-blue-600"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
//                 </div>
//                 <p className="text-xs font-bold text-foreground">Click to upload or drag & drop</p>
//                 <p className="text-[10px] text-gray-500 mt-1">SVG, PNG, JPG or PDF (max. 5MB)</p>
//               </div>
//             </div>
//           ) : (
//             <div className="mt-auto">
//               <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-4 flex gap-3 text-red-800 text-sm">
//                 <svg className="shrink-0 mt-0.5 text-red-600" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
//                 <div>
//                   <p className="font-bold mb-1 text-red-700">Insufficient Wallet Balance</p>
//                   <p className="text-xs">The user's wallet has insufficient funds. Please top up the wallet to a sufficient amount (<span className="font-bold">{payment.charge}</span> or more) in order to process this charge.</p>
//                 </div>
//               </div>
              
//               <div className="relative flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50 py-6 text-center">
//                 <div className="opacity-50 flex flex-col items-center">
//                   <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
//                     <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-blue-600"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
//                   </div>
//                   <p className="text-xs font-bold text-gray-400">Click to upload or drag & drop</p>
//                   <p className="text-[10px] text-gray-400 mt-1">SVG, PNG, JPG or PDF (max. 5MB)</p>
//                 </div>
                
//                 <button onClick={handleManualNotify} className="absolute bottom-4 right-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-lg shadow-sm transition-colors">
//                   Notify Manually
//                 </button>
//               </div>
//             </div>
//           )}

//         </div>
//       </div>
//       <ToastComponent />
//     </div>
//   );
// }







































"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useToast } from '@/src/app/components/ui/useToast';

const mockDatabase = [
  { id: 'AP-1028', reg: 'ABC 1234', driver: 'Sarah Miller', make: 'Toyota Prius (2018)', provider: 'Manchester Airport', charge: '£15.00', balance: '£25.00', status: 'Sufficient', date: '25 Apr 2024', detectedTime: '10:25 AM', identifiedTime: '10:27 AM', createdTime: '10:26 AM' },
  { id: 'AP-1030', reg: 'LSFA 9991', driver: 'Emma Rogers', make: 'Ford Focus (2017)', provider: 'Bristol Airport', charge: '£19.00', balance: '£10.00', status: 'Insufficient', date: '25 Apr 2024', detectedTime: '9:15 AM', identifiedTime: '9:17 AM', createdTime: '9:16 AM' },
];

export default function AutoPayProcessPage() {
  const params = useParams();
  const router = useRouter();
  const { showToast, ToastComponent } = useToast();
  
  const currentId = params?.id as string;
  const [isProcessing, setIsProcessing] = useState(false);

  // Auto-detect which mockup layout to show based on ID
  const payment = mockDatabase.find(p => p.id === currentId) || mockDatabase[0];
  const isSufficient = payment.status === 'Sufficient';

  const handleCompletePayment = () => {
    setIsProcessing(true);
    setTimeout(() => router.push('/admin/payments/successful'), 1500);
  };

  const handleManualNotify = () => {
    showToast('Manual top-up reminder sent to driver.', 'success');
  };

  return (
    <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      
      <Link href="/admin/payments/autopay-pending" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        Back to Pending Queue
      </Link>

      {/* HEADER (Dynamic Colors based on state) */}
      <div className="bg-white border border-border rounded-xl shadow-sm p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Process Auto-Pay: {payment.id}</h1>
          <p className="text-sm text-gray-500 mt-1">Zone Entry Detected on {payment.date} at {payment.detectedTime}</p>
        </div>
        <div className={`border rounded-xl px-8 py-3 text-center min-w-40 shadow-sm ${isSufficient ? 'bg-blue-50/50 border-blue-100' : 'bg-red-50/50 border-red-100'}`}>
          <p className={`text-xs font-bold mb-1 ${isSufficient ? 'text-blue-600' : 'text-red-600'}`}>Charge Amount</p>
          <p className={`text-3xl font-black ${isSufficient ? 'text-blue-600' : 'text-red-600'}`}>{payment.charge}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LEFT COLUMN: PAYMENT CONTEXT */}
        <div className="flex flex-col gap-6">
          <div className="bg-white border border-border rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-foreground mb-6">Payment Context</h2>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-500">Provider</span>
                <span className="font-bold text-foreground">{payment.provider}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-500">Driver</span>
                <span className="font-bold text-foreground">{payment.driver}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-500">Vehicle Registration</span>
                <span className="font-bold text-foreground">{payment.reg}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-500">Subscription Tier</span>
                <span className="bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full text-xs">Auto-Pay</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-500">Vehicle Make & Model</span>
                <span className="font-medium text-foreground">{payment.make}</span>
              </div>
              
              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-500">User Wallet Balance</span>
                <div className="flex items-center gap-3">
                  {!isSufficient && (
                    <span className="bg-orange-100 text-orange-800 font-bold px-2 py-1 rounded text-xs">Insufficient – Top-Up Required</span>
                  )}
                  <span className={`font-bold ${isSufficient ? 'text-green-600' : 'text-red-500 bg-red-50 px-2 py-1 rounded'}`}>{payment.balance}</span>
                </div>
              </div>
            </div>
            
            {!isSufficient && (
              <p className="text-xs text-red-500 mt-4 pt-4 border-t border-red-100 font-medium">
                Insufficient funds. Please top up the wallet to process this charge.
              </p>
            )}
          </div>

          {/* Operational Instructions */}
          <div className={`border rounded-xl p-5 flex gap-3 text-sm shadow-sm ${isSufficient ? 'bg-amber-50 border-amber-200 text-amber-800' : 'bg-red-50/50 border-red-200 text-red-800'}`}>
             <svg className="shrink-0 mt-0.5" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
             <div>
               <p className="font-bold mb-2">Operational Instructions:</p>
               <ol className="list-decimal pl-4 space-y-1.5 font-medium">
                 <li>Go to the {payment.provider} payment portal.</li>
                 <li>Pay <span className="line-through opacity-70">£XXXX</span> for vehicle {payment.reg}.</li>
                 <li>Take a screenshot of the confirmation receipt.</li>
                 <li>Upload the screenshot here to complete the process.</li>
               </ol>
             </div>
          </div>
        </div>

        {/* RIGHT COLUMN: TIMELINE & ACTIONS */}
        <div className="bg-white border border-border rounded-xl shadow-sm p-6 flex flex-col h-full">
          <h2 className="text-lg font-bold text-foreground mb-6 pb-2 border-b border-border">Queue Timeline</h2>
          
          <div className="relative border-l-2 border-gray-200 ml-3 pl-6 flex flex-col gap-6 mb-8">
            
            <div className="relative">
              <div className="absolute -left-8.25 bg-white p-1">
                <div className="w-3 h-3 bg-orange-500 rounded-full shadow-sm"></div>
              </div>
              <p className="font-bold text-sm text-foreground">Charge Identified</p>
              <p className="text-xs text-gray-500 mt-0.5">Apr 28 2024 {payment.identifiedTime}</p>
              <p className="text-xs text-gray-500 mt-0.5">Chargeable event detected for the zone.</p>
            </div>

            <div className="relative">
              <div className="absolute -left-8.25 bg-white p-1">
                <div className="w-3 h-3 bg-gray-300 rounded-full shadow-sm"></div>
              </div>
              <p className="font-bold text-sm text-foreground">Zone Entry <span className="font-normal text-gray-500 ml-1">{payment.detectedTime}</span></p>
            </div>

            <div className="relative">
              <div className="absolute -left-8.25 bg-white p-1">
                <div className="w-3 h-3 bg-gray-300 rounded-full shadow-sm"></div>
              </div>
              <p className="font-bold text-sm text-foreground">Event Created <span className="font-normal text-gray-500 ml-1">{payment.createdTime}</span></p>
              <p className="text-xs text-gray-500 mt-0.5">{payment.date} {payment.createdTime}</p>
            </div>

            {isSufficient ? (
              <div className="relative">
                <div className="absolute -left-8.75 bg-white p-1">
                  <div className="w-4 h-4 bg-green-600 rounded-full shadow-sm flex items-center justify-center">
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="4"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                </div>
                <p className="font-bold text-sm text-foreground">Ready to Process Payment</p>
                <p className="text-xs text-gray-500 mt-0.5">10:28 AM. {payment.date}</p>
                <p className="text-xs text-gray-500 mt-0.5">Auto-payment process initiated.</p>
              </div>
            ) : (
              <div className="relative">
                <div className="absolute -left-8.75 bg-white p-1">
                  <div className="w-4 h-4 bg-red-600 rounded-full shadow-sm flex items-center justify-center text-white text-[10px] font-bold">
                    3
                  </div>
                </div>
                <p className="font-bold text-sm text-foreground">Awaiting Wallet Top-Up</p>
                <p className="text-xs text-gray-500 mt-0.5">{payment.date} 9:18 AM</p>
                <p className="text-xs text-gray-500 mt-0.5">Auto-pay pending funding.</p>
              </div>
            )}
          </div>

          {/* DYNAMIC ACTION AREA */}
          {isSufficient ? (
            <div className="mt-auto">
              <div className="flex gap-3 mb-2">
                <div className="relative w-1/3">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">£</span>
                  <input type="text" defaultValue="15.00" className="border border-border rounded-lg pl-7 pr-3 py-3 w-full font-medium text-foreground focus:outline-none" />
                </div>
                <button onClick={handleCompletePayment} disabled={isProcessing} className="grow py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors shadow-sm disabled:opacity-70 flex justify-center items-center gap-2">
                  {isProcessing ? 'Processing...' : <><svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Complete & Deduct Wallet</>}
                </button>
              </div>
              <p className="text-[11px] text-gray-500 mb-6">The manual payment amount will be deducted from the user's wallet balance.</p>
              
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl py-8 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 flex items-center justify-center mb-2">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-blue-600"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                </div>
                <p className="text-sm font-bold text-foreground">Click to upload or drag & drop</p>
                <p className="text-[11px] text-gray-500 mt-1">SVG, PNG, JPG or PDF (max. 5MB)</p>
              </div>
            </div>
          ) : (
            <div className="mt-auto">
              
              <div className="bg-red-50 border border-red-100 rounded-lg p-5 mb-4 flex gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">i</div>
                <div>
                  <p className="font-bold mb-1 text-red-700">Insufficient Wallet Balance</p>
                  <p className="text-xs text-red-700 leading-relaxed">The user's wallet has insufficient funds. Please top up the wallet to a sufficient amount (<span className="font-bold text-red-700">{payment.charge}</span> or more) in order to process this charge.</p>
                </div>
              </div>
              
              <div className="relative flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50 py-8 pb-14 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 flex items-center justify-center mb-2">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-blue-600"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                  </div>
                  <p className="text-sm font-bold text-foreground">Click to upload or drag & drop</p>
                  <p className="text-[11px] text-gray-500 mt-1">SVG, PNG, JPG or PDF (max. 5MB)</p>
                </div>
                
                <button onClick={handleManualNotify} className="absolute -bottom-px -right-px px-5 py-3 bg-[#d9534f] hover:bg-red-600 text-white text-sm font-bold rounded-tl-xl rounded-br-xl transition-colors shadow-sm border border-[#d9534f]">
                  Notify Manually
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
      <ToastComponent />
    </div>
  );
}