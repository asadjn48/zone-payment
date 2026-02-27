import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, id, className = '', ...props }: InputProps) => {
  return (
    <div className="flex flex-col w-full space-y-1.5 mb-5">
      <label htmlFor={id} className="text-sm text-gray-500 font-medium">
        {label}
      </label>
      <input
        id={id}
        className={`border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all w-full ${className}`}
        {...props}
      />
    </div>
  );
};