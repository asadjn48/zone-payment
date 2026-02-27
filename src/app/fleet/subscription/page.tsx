/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Link from 'next/link';
import { Badge } from '@/src/app/components/ui/Badge';

export default function SubscriptionPage() {
  return (
    <div className="flex flex-col gap-8 pb-10 max-w-360">
      
      {/* ================= SECTION 1: CURRENT SUBSCRIPTION ================= */}
      <section className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">Current Subscription</h2>
              <p className="text-sm text-gray-500 mt-1">Manage your fleet subscription plan</p>
            </div>
            <Badge variant="success">Active</Badge>
          </div>

          {/* Plan Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 rounded-xl p-5 border border-border">
              <p className="text-xs text-gray-500 font-medium mb-1">Plan</p>
              <p className="font-bold text-lg text-foreground">Enterprise Fleet</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-border">
              <p className="text-xs text-gray-500 font-medium mb-1">Billing Cycle</p>
              <p className="font-bold text-lg text-foreground">Annual</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-border">
              <p className="text-xs text-gray-500 font-medium mb-1">Next Billing Date</p>
              <p className="font-bold text-lg text-foreground">Jan 10, 2027</p>
            </div>
          </div>

          {/* Features Checklist */}
          <div className="pt-6 border-t border-border">
            <p className="font-bold text-sm text-foreground mb-4">Plan Includes:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
              {[
                'Unlimited vehicles',
                'Centralized billing',
                'Real-time payment tracking',
                'Unlimited drivers',
                'Driver management dashboard',
                'Priority support'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <svg className="text-green-500 shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: DRIVER SUBSCRIPTION PLANS ================= */}
      <section>
        <h2 className="text-lg font-bold text-foreground mb-1">Driver Subscription Plans</h2>
        <p className="text-sm text-gray-500 mb-6">Each driver under your fleet can choose their own subscription plan for the mobile app:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          {/* Basic Plan */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-bold text-lg text-foreground">Basic</h3>
              <span className="text-sm font-medium text-gray-500">Free</span>
            </div>
            <ul className="text-sm text-gray-600 space-y-3 mb-6 grow">
              <li className="flex items-start gap-2">• 1 event/month per zone type</li>
              <li className="flex items-start gap-2">• Manual payments only</li>
              <li className="flex items-start gap-2">• No wallet</li>
            </ul>
          </div>

          {/* Manual Plan */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-bold text-lg text-foreground">Manual</h3>
              <span className="text-sm font-medium text-gray-500">£1.99/mo</span>
            </div>
            <ul className="text-sm text-gray-600 space-y-3 mb-6 grow">
              <li className="flex items-start gap-2">• Unlimited events</li>
              <li className="flex items-start gap-2">• Manual payments</li>
              <li className="flex items-start gap-2">• No wallet</li>
            </ul>
          </div>

          {/* Auto-Pay Plan (Recommended) */}
          <div className="bg-blue-50/50 border-2 border-primary rounded-xl p-6 shadow-sm flex flex-col h-full relative">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-lg text-primary">Auto-Pay</h3>
              <span className="text-sm font-bold text-foreground">£3.99/mo</span>
            </div>
            <div className="mb-4">
              <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">RECOMMENDED</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-3 mb-6 grow">
              <li className="flex items-center gap-2">
                <svg className="text-primary shrink-0" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Unlimited events
              </li>
              <li className="flex items-center gap-2">
                <svg className="text-primary shrink-0" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Automatic payments
              </li>
              <li className="flex items-center gap-2">
                <svg className="text-primary shrink-0" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Wallet enabled
              </li>
            </ul>
          </div>
        </div>

        {/* Important Notice Box */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 text-amber-800 text-sm">
          <svg className="shrink-0 mt-0.5 text-amber-500" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <p><span className="font-bold">Important:</span> Driver subscription fees are separate from parking payments and are paid individually by each driver. Fleet subscription covers the management platform only.</p>
        </div>
      </section>

      {/* ================= SECTION 3: BILLING INFORMATION ================= */}
      <section className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 md:p-8">
          <h2 className="text-lg font-bold text-foreground mb-6">Billing Information</h2>
          
          <div className="flex flex-col">
            
            {/* Payment Method */}
            <div className="flex items-center justify-between py-4 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="text-gray-400">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Payment Method</p>
                  <p className="text-sm text-gray-500 mt-0.5">•••• •••• 4242</p>
                </div>
              </div>
              <button className="text-sm font-medium text-primary hover:underline">Update</button>
            </div>

            {/* Billing Email */}
            <div className="flex items-center justify-between py-4 border-b border-border">
              <div>
                <p className="text-sm font-medium text-foreground">Billing Email</p>
                <p className="text-sm text-gray-500 mt-0.5">billing@citylogistics.com</p>
              </div>
              <button className="text-sm font-medium text-primary hover:underline">Update</button>
            </div>

            {/* Invoices */}
            <div className="flex items-center justify-between py-4">
              <div>
                <p className="text-sm font-medium text-foreground">Invoices</p>
                <p className="text-sm text-gray-500 mt-0.5">Download past invoices</p>
              </div>
              <button className="text-sm font-medium text-primary hover:underline">View All</button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}