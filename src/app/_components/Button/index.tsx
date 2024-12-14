import React, { type ReactNode } from 'react';

type ButtonSize = 'default' | 'sm' | 'lg';
type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  size = 'default', 
  variant = 'primary', 
  ...props 
}) => {
  const sizeClasses: Record<ButtonSize, string> = {
    default: 'px-4 py-2 text-base',
    sm: 'px-3 py-1.5 text-sm',
    lg: 'px-8 py-3 text-lg',
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center 
        rounded-md 
        font-medium 
        transition-colors 
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;