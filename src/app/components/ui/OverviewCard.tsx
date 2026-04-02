import React from 'react';
import Link from 'next/link';

interface OverviewCardProps {
  href?: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  number: string | number;
  numberColor: string;
  unit: string;
  title: string;
  footerContent: React.ReactNode;
}

export const OverviewCard = ({ 
  href, icon, iconBg, iconColor, number, numberColor, unit, title, footerContent 
}: OverviewCardProps) => {
  const CardWrapper = href ? Link : 'div';
  const wrapperClass = href 
    ? "bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col group cursor-pointer block" 
    : "bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col";

  return (
    // @ts-expect-error - Dynamic wrapper typing
    <CardWrapper href={href} className={wrapperClass}>
      <div className={`w-10 h-10 rounded-lg ${iconBg} ${iconColor} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className={`text-3xl font-bold flex items-baseline gap-1.5 mb-1 ${numberColor}`}>
        {number} <span className="text-sm font-medium text-gray-500 mb-1">{unit}</span>
      </h3>
      <p className="text-sm text-gray-600 font-medium">{title}</p>
      <div className="mt-4 pt-4 border-t border-border flex flex-col gap-1.5 text-xs text-gray-500 font-medium">
        {footerContent}
      </div>
    </CardWrapper>
  );
};