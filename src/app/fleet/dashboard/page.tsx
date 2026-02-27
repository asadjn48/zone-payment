import React from 'react';
import { StatCard } from '@/src/app/components/ui/fleet/StatCard';
import { ActionCard } from '@/src/app/components/ui/fleet/ActionCard';

export default function FleetDashboard() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      
      {/* --- TOP ROW: STAT CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Total Fleet Vehicles" 
          value="24" 
          icon={<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>}
          iconBgColor="bg-purple-100"
          iconColor="text-purple-600"
        />
        <StatCard 
          title="Total Payments" 
          value="£12,450.75" 
          valueColor="text-green-600"
          icon={<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <StatCard 
          title="Pending / At-Risk Payments" 
          value="£1,240.50" 
          valueColor="text-orange-500"
          icon={<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
          iconBgColor="bg-orange-100"
          iconColor="text-orange-500"
        />
      </div>

      {/* --- MIDDLE ROW: QUICK ACTIONS --- */}
      <div>
        <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ActionCard 
            title="View Vehicles" 
            description="Manage fleet vehicles" 
            href="/fleet/vehicles"
            icon={<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>}
          />
          <ActionCard 
            title="View Payments" 
            description="Monitor payment transactions" 
            href="/fleet/payments"
            icon={<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
          />
          <ActionCard 
            title="Subscription" 
            description="Manage subscription plan" 
            href="/fleet/subscription"
            icon={<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>}
          />
        </div>
      </div>

      {/* --- BOTTOM ROW: RECENT ACTIVITY --- */}
      <div>
        <h2 className="text-lg font-bold text-foreground mb-4">Recent Activity</h2>
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
          
          {/* Activity Item 1 */}
          <div className="flex items-start gap-4 p-5 border-b border-border">
            <div className="mt-1 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-sm">Payment Successful</h4>
              <p className="text-gray-500 text-sm mt-0.5">Vehicle TR12 ABC - Manchester Airport - £35.00</p>
              <span className="text-gray-400 text-xs block mt-1">2 hours ago</span>
            </div>
          </div>

          {/* Activity Item 2 */}
          <div className="flex items-start gap-4 p-5">
            <div className="mt-1 w-10 h-10 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-sm">Payment Pending</h4>
              <p className="text-gray-500 text-sm mt-0.5">Vehicle LK67 ZXC - Heathrow Drop-off - £12.50</p>
              <span className="text-gray-400 text-xs block mt-1">1 day ago</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}