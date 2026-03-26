"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const mockDatabase = [
  { id: 'AP-1028', reg: 'ABC 1234', provider: 'Manchester Airport', charge: '£15.00', balance: '£25.00', date: '25 Apr 2024', time: '10:25 AM' },
  { id: 'AP-1025', reg: 'LMN 8901', provider: 'Birmingham CAZ', charge: '£3.00', balance: '£10.00', date: '25 Apr 2024', time: '11:15 AM' },
];

export default function AutoPayProcessPage() {
  const params = useParams();
  const router = useRouter();
  const currentId = params?.id as string;
  const [isProcessing, setIsProcessing] = useState(false);

  const payment = mockDatabase.find(p => p.id === currentId) || mockDatabase[0];

  const handleCompletePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      router.push('/admin/payments/successful');
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      
      <Link href="/admin/payments/autopay-pending" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        Back to Pending Queue
      </Link>

      <div className="bg-white border border-border rounded-xl shadow-sm p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Process Auto-Pay: {payment.id}</h1>
          <p className="text-sm text-gray-500 mt-1">Zone Entry Detected on {payment.date} at {payment.time}</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-lg px-6 py-3 text-center min-w-45">
          <p className="text-xs text-blue-700 font-semibold mb-1">Charge Amount</p>
          <p className="text-3xl font-black text-blue-700">{payment.charge}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="flex flex-col gap-6">
          <div className="bg-white border border-border rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-foreground mb-6">Payment Context</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-500">Provider</span>
                <span className="font-semibold text-foreground">{payment.provider}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-500">Vehicle Registration</span>
                <span className="font-bold text-foreground">{payment.reg}</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-gray-500">User Wallet Balance</span>
                <span className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded">{payment.balance}</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3 text-amber-800 text-sm">
             <svg className="shrink-0 mt-0.5" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
             <div>
               <p className="font-bold mb-1">Operational Instructions:</p>
               <ol className="list-decimal pl-4 space-y-1">
                 <li>Go to the {payment.provider} payment portal.</li>
                 <li>Pay {payment.charge} for vehicle {payment.reg}.</li>
                 <li>Take a screenshot of the confirmation receipt.</li>
                 <li>Upload the screenshot here to complete the process.</li>
               </ol>
             </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl shadow-sm p-6 flex flex-col h-full">
          <h2 className="text-lg font-bold text-foreground mb-6">Upload Provider Receipt</h2>
          
          <div className="grow flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors p-8 mb-6 text-center cursor-pointer">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
            </div>
            <p className="text-sm font-bold text-foreground mb-1">Click to upload or drag & drop</p>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or PDF (max. 5MB)</p>
          </div>

          <button 
            onClick={handleCompletePayment}
            disabled={isProcessing}
            className="w-full py-3 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-lg transition-colors shadow-sm disabled:opacity-70 flex justify-center items-center gap-2 cursor-pointer"
          >
            {isProcessing ? (
              <>Processing...</>
            ) : (
              <>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Complete & Deduct Wallet
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}