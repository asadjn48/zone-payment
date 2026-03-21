import React from 'react';

interface MetricCardProps {
  value: string | number;
  label: string;
  icon: React.ReactNode;
  variant?: 'red' | 'green' | 'purple' | 'orange' | 'blue';
  subtitle?: React.ReactNode;
}

export const MetricCard = ({ value, label, icon, variant = 'blue', subtitle }: MetricCardProps) => {
  const colors = {
    red: 'bg-red-50 text-red-500',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-500',
    blue: 'bg-blue-50 text-blue-500',
  };

  const valueColors = {
    red: 'text-red-600',
    green: 'text-green-600',
    purple: 'text-foreground', 
    orange: 'text-orange-500',
    blue: 'text-blue-600',
  };

  return (
    <div className="bg-white border border-border rounded-lg p-4 flex flex-col justify-center min-w-50 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${colors[variant]}`}>
          {icon}
        </div>
        <span className={`text-2xl font-bold ${valueColors[variant]}`}>{value}</span>
      </div>
      <p className="text-sm text-gray-500">{label}</p>
      {subtitle && (
        <div className="text-xs text-gray-400 mt-1">
          {subtitle}
        </div>
      )}
    </div>
  );
};