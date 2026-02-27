"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/src/app/components/ui/Button';

// Define the notification types to enforce strict styling
type NotificationType = 'success' | 'warning' | 'danger' | 'info';

interface Notification {
  id: number;
  type: NotificationType;
  title: string;
  desc: string;
  time: string;
  isRead: boolean;
}

export default function AdminNotificationsPage() {
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  
  // Initial mock data based on your screenshot
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'success',
      title: 'New Payment Received',
      desc: 'Payment of £35 from vehicle TR12 ABC at Manchester Airport',
      time: '2 minutes ago',
      isRead: false,
    },
    {
      id: 2,
      type: 'warning',
      title: 'Payment Pending',
      desc: 'Payment of £90 from vehicle BD19 VXT awaiting confirmation',
      time: '15 minutes ago',
      isRead: false,
    },
    {
      id: 3,
      type: 'danger',
      title: 'Payment Failed',
      desc: 'Payment attempt failed for vehicle KM66 GTF at Gatwick Parking',
      time: '1 hour ago',
      isRead: false,
    },
    {
      id: 4,
      type: 'success',
      title: 'New User Registration',
      desc: 'New user Emily W. registered with vehicle BD19 VXT',
      time: '2 hours ago',
      isRead: true, // This one is already read
    }
  ]);

  const unreadCount = notifications.filter(n => !n.isRead).length;
  
  // Filter logic
  const displayedNotifications = filter === 'all' 
    ? notifications 
    : notifications.filter(n => !n.isRead);

  // Actions
  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="flex flex-col gap-6 pb-10 max-w-5xl mx-auto">
      
      {/* Back Link */}
      <Link href="/admin/dashboard" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 w-fit">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Dashboard
      </Link>

      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-2">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
          <p className="text-sm text-gray-500 mt-1">{unreadCount} unread notifications</p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          {/* Toggles */}
          <div className="flex bg-white border border-border rounded-lg overflow-hidden shadow-sm">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium transition-colors ${filter === 'all' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('unread')}
              className={`px-4 py-2 text-sm font-medium transition-colors border-l border-border ${filter === 'unread' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Unread ({unreadCount})
            </button>
          </div>

          <Button 
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
            className="bg-green-600 hover:bg-green-700 text-white disabled:bg-green-300 px-4 py-2 text-sm font-medium h-full"
          >
            Mark All as Read
          </Button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        {displayedNotifications.length === 0 ? (
          <div className="p-12 text-center flex flex-col items-center justify-center text-gray-400">
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="mb-4"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <p className="text-lg font-medium text-foreground">You&apos;re all caught up!</p>
            <p className="text-sm mt-1">There are no new notifications to display.</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {displayedNotifications.map((note) => {
              
              // Dynamic styling based on read status and type
              let bgClass = "bg-white"; // default read state
              let iconClass = "text-gray-400";
              let iconSvg = <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>;

              if (!note.isRead) {
                if (note.type === 'success') {
                  bgClass = "bg-green-50/40";
                  iconClass = "text-green-600";
                  iconSvg = <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
                } else if (note.type === 'warning') {
                  bgClass = "bg-orange-50/40";
                  iconClass = "text-orange-500";
                  iconSvg = <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
                } else if (note.type === 'danger') {
                  bgClass = "bg-red-50/40";
                  iconClass = "text-red-600";
                  iconSvg = <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;
                }
              } else {
                // If it's read, keep the icon color but remove the background tint
                if (note.type === 'success') iconClass = "text-green-600";
                if (note.type === 'warning') iconClass = "text-orange-500";
                if (note.type === 'danger') iconClass = "text-red-600";
                
                if (note.type === 'success') iconSvg = <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
                // ... add other read icons if needed
              }

              return (
                <div key={note.id} className={`flex items-start justify-between p-5 gap-4 transition-colors ${bgClass} hover:bg-gray-50/80`}>
                  
                  {/* Icon & Content */}
                  <div className="flex items-start gap-4">
                    <div className={`mt-0.5 shrink-0 ${iconClass}`}>
                      {iconSvg}
                    </div>
                    <div>
                      <h4 className={`text-sm ${note.isRead ? 'font-medium text-gray-700' : 'font-bold text-foreground'}`}>
                        {note.title}
                      </h4>
                      <p className={`text-sm mt-0.5 ${note.isRead ? 'text-gray-500' : 'text-gray-600'}`}>
                        {note.desc}
                      </p>
                      <p className="text-xs text-gray-400 mt-1.5">{note.time}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 shrink-0">
                    {!note.isRead && (
                      <button 
                        onClick={() => markAsRead(note.id)}
                        className="text-xs font-semibold text-primary hover:underline"
                      >
                        Mark as read
                      </button>
                    )}
                    <button 
                      onClick={() => removeNotification(note.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      aria-label="Remove notification"
                    >
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}