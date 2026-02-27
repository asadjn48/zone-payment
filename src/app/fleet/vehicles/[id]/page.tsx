/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/src/app/components/ui/Badge';

export default function VehicleDetailsPage({ params }: { params: { id: string } }) {
  // State to manage which tab is currently active
  const [activeTab, setActiveTab] = useState<'overview' | 'payments' | 'activity'>('overview');

  // Mock data representing the vehicle profile from your screenshots
  const vehicle = {
    reg: 'TR12 ABC',
    make: 'Ford',
    model: 'Transit',
    year: '2020',
    color: 'White',
    status: 'Active',
    driver: 'John Smith',
    driverEmail: 'john.smith@citylogistics.com',
    addedDate: '15 Jan 2025',
    totalPaid: '£245.50',
    totalPayments: 4,
    pendingPayments: 1,
    notes: 'Primary delivery vehicle for central London routes',
  };

  return (
    <div className="flex flex-col gap-6 pb-10">
      
      {/* Top Section: Vehicle Header */}
      <div className="flex items-center gap-4">
        {/* Back Button */}
        <Link href="/fleet/vehicles" className="text-gray-400 hover:text-primary transition-colors">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </Link>
        <div className="w-14 h-14 bg-blue-100 text-primary rounded-xl flex items-center justify-center shrink-0">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-3">
            {vehicle.reg}
          </h1>
          <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
            <span>{vehicle.make} {vehicle.model} ({vehicle.year})</span>
            <Badge variant="success">{vehicle.status}</Badge>
          </div>
        </div>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Driver Card */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span className="text-sm">Assigned Driver</span>
          </div>
          <p className="font-bold text-foreground">{vehicle.driver}</p>
          <p className="text-xs text-gray-500 mt-1 truncate">{vehicle.driverEmail}</p>
        </div>

        {/* Added Date */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span className="text-sm">Added Date</span>
          </div>
          <p className="font-bold text-foreground">{vehicle.addedDate}</p>
        </div>

        {/* Total Paid */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <span className="text-sm">Total Paid</span>
          </div>
          <p className="font-bold text-green-600">{vehicle.totalPaid}</p>
        </div>

        {/* Color */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
            <span className="text-sm">Color</span>
          </div>
          <p className="font-bold text-foreground">{vehicle.color}</p>
        </div>
      </div>

      {/* Notes Box */}
      <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 shadow-sm">
        <p className="text-xs text-blue-500 font-medium mb-1">Notes</p>
        <p className="text-sm text-blue-900">{vehicle.notes}</p>
      </div>

      {/* ================= TABS NAVIGATION ================= */}
      <div className="bg-card border border-border rounded-xl shadow-sm mt-2 overflow-hidden">
        
        {/* Tab Headers */}
        <div className="flex border-b border-border overflow-x-auto hide-scrollbar">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === 'overview' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('payments')}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === 'payments' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Payment History
          </button>
          <button 
            onClick={() => setActiveTab('activity')}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === 'activity' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Activity History
          </button>
        </div>

        {/* ================= TAB CONTENT ================= */}
        <div className="p-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Left Col: Vehicle Information List */}
              <div>
                <h3 className="text-sm font-bold text-foreground mb-4">Vehicle Information</h3>
                <div className="flex flex-col text-sm">
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-gray-500">Registration</span>
                    <span className="font-medium text-foreground">{vehicle.reg}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-gray-500">Make</span>
                    <span className="font-medium text-foreground">{vehicle.make}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-gray-500">Model</span>
                    <span className="font-medium text-foreground">{vehicle.model}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-gray-500">Year</span>
                    <span className="font-medium text-foreground">{vehicle.year}</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-500">Color</span>
                    <span className="font-medium text-foreground">{vehicle.color}</span>
                  </div>
                </div>
              </div>

              {/* Right Col: Payment Statistics */}
              <div>
                <h3 className="text-sm font-bold text-foreground mb-4">Payment Statistics</h3>
                <div className="flex flex-col gap-3">
                  <div className="bg-green-50 rounded-lg p-4 flex flex-col justify-center">
                    <span className="text-xs text-green-600 font-medium mb-1">Total Paid</span>
                    <span className="text-xl font-bold text-green-700">{vehicle.totalPaid}</span>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 flex flex-col justify-center">
                    <span className="text-xs text-blue-600 font-medium mb-1">Total Payments</span>
                    <span className="text-xl font-bold text-blue-700">{vehicle.totalPayments}</span>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 flex flex-col justify-center">
                    <span className="text-xs text-orange-600 font-medium mb-1">Pending Payments</span>
                    <span className="text-xl font-bold text-orange-700">{vehicle.pendingPayments}</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: PAYMENT HISTORY */}
          {activeTab === 'payments' && (
            <div>
              <h3 className="text-sm font-bold text-foreground mb-1">Payment History</h3>
              <p className="text-xs text-gray-500 mb-4">All parking payments for this vehicle</p>
              
              <div className="flex flex-col gap-3">
                {/* Mock Payment Rows */}
                {[
                  { loc: 'Heathrow Drop-off', date: '10 Feb 2026', driver: 'John Smith', amount: '£12.50', status: 'paid' },
                  { loc: 'Manchester Airport', date: '8 Feb 2026', driver: 'John Smith', amount: '£35.00', status: 'paid' },
                  { loc: 'Gatwick Drop-off', date: '5 Feb 2026', driver: 'John Smith', amount: '£15.00', status: 'paid' },
                  { loc: 'Birmingham Airport', date: '1 Feb 2026', driver: 'John Smith', amount: '£25.00', status: 'pending' },
                ].map((payment, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-border rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${payment.status === 'paid' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-500'}`}>
                        {payment.status === 'paid' ? (
                          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        ) : (
                          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{payment.loc}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{payment.date} • Paid by {payment.driver}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`font-bold text-sm ${payment.status === 'paid' ? 'text-green-600' : 'text-orange-500'}`}>{payment.amount}</span>
                      <Badge variant={payment.status === 'paid' ? 'success' : 'warning'}>{payment.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ACTIVITY HISTORY */}
          {activeTab === 'activity' && (
            <div>
              <h3 className="text-sm font-bold text-foreground mb-1">Activity History</h3>
              <p className="text-xs text-gray-500 mb-6">All activities related to this vehicle</p>
              
              <div className="relative border-l border-gray-200 ml-3 pl-6 flex flex-col gap-8">
                {/* Mock Activity Timeline Rows */}
                {[
                  { title: 'Payment made', desc: 'Heathrow Drop-off - £12.50', by: 'John Smith', time: '2026-02-10 14:32' },
                  { title: 'Payment made', desc: 'Manchester Airport - £35.00', by: 'John Smith', time: '2026-02-08 09:15' },
                  { title: 'Driver assigned', desc: 'John Smith assigned to this vehicle', by: 'Fleet Admin', time: '2026-02-01 16:45' },
                  { title: 'Vehicle added', desc: 'Vehicle added to fleet', by: 'Fleet Admin', time: '2026-01-15 10:00' },
                ].map((act, i) => (
                  <div key={i} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-7.75 bg-white p-1 rounded-full">
                      <div className="w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <div>
                        <p className="font-semibold text-sm text-foreground">{act.title}</p>
                        <p className="text-sm text-gray-600 mt-0.5">{act.desc}</p>
                        <p className="text-xs text-gray-400 mt-1">By {act.by}</p>
                      </div>
                      <span className="text-xs text-gray-400 whitespace-nowrap">{act.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}