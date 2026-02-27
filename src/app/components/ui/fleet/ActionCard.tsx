import React from 'react';
import Link from 'next/link';

interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export const ActionCard = ({ title, description, icon, href }: ActionCardProps) => {
  return (
    <Link href={href} className="block group">
      <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-primary transition-colors flex flex-col gap-3 h-full">
        <div className="text-gray-400 group-hover:text-primary transition-colors">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{title}</h4>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
};