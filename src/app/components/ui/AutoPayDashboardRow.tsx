import React from 'react';
import Link from 'next/link';

interface AutoPayDashboardRowProps {
  item: {
    id: string;
    reg: string;
    provider: string;
    charge: number | string;
    balance: string | number;
    status: string;
  };
}

export const AutoPayDashboardRow = ({ item }: AutoPayDashboardRowProps) => (
  <tr className="hover:bg-gray-50/50 transition-colors">
    <td className="px-6 py-4 font-semibold text-foreground">{item.reg}</td>
    <td className="px-6 py-4 text-gray-600 flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary shrink-0">
        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
      </div>
      {item.provider}
    </td>
    <td className="px-6 py-4 font-medium text-foreground">
      {typeof item.charge === 'number' ? `£${item.charge.toFixed(2)}` : item.charge}
    </td>
    <td className="px-6 py-4 font-medium text-foreground">
      {typeof item.balance === 'number' ? `£${item.balance.toFixed(2)}` : item.balance}
    </td>
    <td className="px-6 py-4">
      <span className={`px-2 py-1 rounded text-xs font-medium border ${item.status === 'Sufficient' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
        {item.status}
      </span>
    </td>
    <td className="px-6 py-4 text-right">
      {item.status === 'Sufficient' ? (
        <Link href={`/admin/payments/autopay-pending/${item.id}`} className="px-4 py-1.5 inline-block bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded shadow-sm transition-colors">
          Process
        </Link>
      ) : (
        <Link href={`/admin/payments/autopay-pending/${item.id}`} className="px-4 py-1.5 inline-block bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold rounded transition-colors border border-red-100">
          Notify
        </Link>
      )}
    </td>
  </tr>
);