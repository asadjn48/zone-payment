import React from 'react';
import Link from 'next/link';
import { Badge } from '@/src/app/components/ui/Badge';

export default function FineDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap the params Promise
  const resolvedParams = React.use(params);

  const fine = {
    id: resolvedParams.id, // Use unwrapped ID
    date: 'Apr 23, 2024 15:20 PM',
    reg: 'GIM 2346',
    driver: 'Nathan Cooper',
    fleet: 'City Logistics Ltd',
    provider: 'London ULEZ',
    type: 'Clean Air Zone',
    amount: '£12.50',
    status: 'Pending',
    tier: 'Basic',
    cameraRef: 'CAM-LZ-894',
    location: 'Central London Entry Point 4',
  };

  return (
    <div className="flex flex-col gap-6 pb-10 mt-4 max-w-7xl">
      
      {/* Back Link */}
      <Link href="/admin/fines" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Fines
      </Link>

      {/* Header Profile */}
      <div className="bg-card border border-border rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-foreground">Event Ref: {fine.id}</h1>
            <Badge variant="warning">{fine.status}</Badge>
          </div>
          <p className="text-sm text-gray-500">Detected on {fine.date}</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl px-6 py-4 text-center">
          <p className="text-xs text-orange-600 font-bold uppercase tracking-wider mb-1">Amount Due</p>
          <p className="text-3xl font-black text-orange-700">{fine.amount}</p>
        </div>
      </div>

      {/* Two Column Layout for Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Column: Event & Vehicle Info */}
        <div className="flex flex-col gap-6">
          <div className="bg-card border border-border rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">Event Details</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Provider</span>
                <span className="font-semibold text-foreground">{fine.provider}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Zone Type</span>
                <span className="font-semibold text-foreground">{fine.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Location</span>
                <span className="font-medium text-gray-700">{fine.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Camera Ref</span>
                <span className="font-medium text-gray-700">{fine.cameraRef}</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">Vehicle & Driver</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Registration</span>
                <Link href={`/admin/vehicles/${fine.reg.replace(/\s+/g, '')}`} className="font-bold text-primary hover:underline">{fine.reg}</Link>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Driver</span>
                <Link href={`/admin/users/${fine.driver.toLowerCase().replace(/\s+/g, '-')}`} className="font-bold text-primary hover:underline">{fine.driver}</Link>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Subscription Tier</span>
                <span className="font-medium text-foreground">{fine.tier}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Timeline & Actions */}
        <div className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col">
          <h2 className="text-lg font-bold text-foreground mb-6 pb-2 border-b border-border">Event Timeline</h2>
          
          <div className="relative border-l-2 border-gray-200 ml-3 pl-6 flex flex-col gap-6 grow">
            <div className="relative">
              <div className="absolute -left-8.25 bg-white p-1">
                <div className="w-3 h-3 bg-orange-400 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <p className="font-semibold text-sm text-foreground">Awaiting Payment</p>
              <p className="text-xs text-gray-400 mt-1">Current Status</p>
            </div>
            <div className="relative">
              <div className="absolute -left-8.25 bg-white p-1">
                <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <p className="font-semibold text-sm text-foreground">Notification Sent to Driver</p>
              <p className="text-xs text-gray-400 mt-1">Apr 23, 2024 15:25 PM</p>
            </div>
            <div className="relative">
              <div className="absolute -left-8.25 bg-white p-1">
                <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <p className="font-semibold text-sm text-foreground">Zone Entry Detected</p>
              <p className="text-xs text-gray-400 mt-1">Apr 23, 2024 15:20 PM via ANPR</p>
            </div>
          </div>

          {/* Admin Manual Action overrides */}
          <div className="mt-8 pt-6 border-t border-border flex flex-col gap-3">
            <button className="w-full py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors">
              Process Manual Payment
            </button>
            <button className="w-full py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-lg transition-colors">
              Mark as Void / Cancelled
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}