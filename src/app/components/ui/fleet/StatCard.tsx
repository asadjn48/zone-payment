import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  valueColor?: string; // e.g., 'text-green-600'
  icon: React.ReactNode;
  iconBgColor: string; // e.g., 'bg-purple-100'
  iconColor: string;   // e.g., 'text-purple-600'
}

export const StatCard = ({ title, value, valueColor = 'text-foreground', icon, iconBgColor, iconColor }: StatCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col gap-4">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBgColor} ${iconColor}`}>
        {icon}
      </div>
      <div>
        <h3 className={`text-2xl font-bold mb-1 ${valueColor}`}>{value}</h3>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
};