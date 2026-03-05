"use client";

import React from 'react';
import Link from 'next/link';
import { Badge } from '@/src/app/components/ui/Badge';

export default function SuccessfulPaymentDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap the params Promise to prevent Next.js 15+ crash
  const resolvedParams = React.use(params);

  // Mock data for a successful payment
  const payment = {
    id: resolvedParams.id,
    date: '23 Apr 2024',
    time: '15:20',
    reg: 'ABC 2224',
    driver: 'Sarah Miller',
    fleet: 'Independent',
    provider: 'Manchester Airport',
    zone: 'Airport Drop-off',
    tier: 'Manual',
    amount: '£85.50',
    status: 'Successful',
    paymentMethod: 'Credit Card ending in 4242',
    transactionId: 'TXN-982347102',
  };

  return (
    <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      
      {/* Back Link */}
      <Link href="/admin/payments/successful" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Successful Payments
      </Link>

      {/* Header Profile */}
      <div className="bg-card border border-border rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-foreground">Ref: {payment.id}</h1>
            <Badge variant="success">{payment.status}</Badge>
          </div>
          <p className="text-sm text-gray-500">Processed on {payment.date} at {payment.time}</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl px-6 py-4 text-center">
          <p className="text-xs text-green-600 font-bold uppercase tracking-wider mb-1">Amount Paid</p>
          <p className="text-3xl font-black text-green-700">{payment.amount}</p>
        </div>
      </div>

      {/* Two Column Layout for Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Column: Event & Vehicle Info */}
        <div className="flex flex-col gap-6">
          <div className="bg-card border border-border rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">Transaction Details</h2>
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
                <span className="text-gray-500">Payment Method</span>
                <span className="font-medium text-gray-700">{payment.paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Transaction ID</span>
                <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">{payment.transactionId}</span>
              </div>
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
        <div className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col">
          <h2 className="text-lg font-bold text-foreground mb-6 pb-2 border-b border-border">Payment Timeline</h2>
          
          <div className="relative border-l-2 border-gray-200 ml-3 pl-6 flex flex-col gap-6 grow">
            <div className="relative">
              <div className="absolute -left-8.25 bg-white p-1">
                <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <p className="font-semibold text-sm text-foreground">Payment Successful</p>
              <p className="text-xs text-gray-400 mt-1">Apr 23, 2024 15:20 PM</p>
            </div>
            <div className="relative">
              <div className="absolute -left-8.25 bg-white p-1">
                <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <p className="font-semibold text-sm text-foreground">Manual Checkout Initiated</p>
              <p className="text-xs text-gray-400 mt-1">Apr 23, 2024 15:18 PM</p>
            </div>
            <div className="relative">
              <div className="absolute -left-8.25 bg-white p-1">
                <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <p className="font-semibold text-sm text-foreground">Zone Entry Detected</p>
              <p className="text-xs text-gray-400 mt-1">Apr 23, 2024 14:10 PM via ANPR</p>
            </div>
          </div>

          {/* Admin Actions */}
          <div className="mt-8 pt-6 border-t border-border flex flex-col gap-3">
            <button className="w-full py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-lg transition-colors flex justify-center items-center gap-2">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Download Receipt
            </button>
            <button className="w-full py-2.5 bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium rounded-lg transition-colors">
              Issue Refund
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}