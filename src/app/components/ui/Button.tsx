import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  variant?: 'primary' | 'outline' | 'danger'; // Added variants
}

export const Button = ({ children, fullWidth, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyles = "font-medium py-3 px-4 rounded-lg transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-center items-center";
  
  // Define strictly separated styles for each variant
  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-white focus:ring-primary",
    outline: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-200",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-600"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};