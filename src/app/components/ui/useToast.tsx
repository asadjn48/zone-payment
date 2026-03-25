"use client";

import React, { useState, useCallback } from 'react';

export type ToastType = 'success' | 'info' | 'error';

export function useToast() {
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  // Trigger function
  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  }, []);

  // Reusable UI Component
  const ToastComponent = () => {
    if (!toast) return null;

    const isSuccess = toast.type === 'success';
    const isError = toast.type === 'error';

    const bgClass = isSuccess ? 'bg-green-50 border-green-200 text-green-800' :
                    isError ? 'bg-red-50 border-red-200 text-red-800' :
                    'bg-blue-50 border-blue-200 text-blue-800';

    return (
      <div className="fixed  bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
        <div className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg border ${bgClass}`}>
          {isSuccess ? (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          ) : isError ? (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          ) : (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          )}
          <p className="text-sm font-semibold">{toast.message}</p>
        </div>
      </div>
    );
  };

  return { showToast, ToastComponent };
}