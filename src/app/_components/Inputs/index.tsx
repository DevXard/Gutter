import React, { type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input: React.FC<InputProps> = ({
  className = '',
  error = false,
  ...props
}) => {
  return (
    <input
      className={`
        w-full 
        px-3 py-2 
        border 
        rounded-md 
        text-gray-700 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500 
        focus:border-transparent
        ${error ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-300'}
        ${className}
      `}
      {...props}
    />
  );
};

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
  className = '',
  error = false,
  ...props
}) => {
  return (
    <textarea
      className={`
        w-full 
        px-3 py-2 
        border 
        rounded-md 
        text-gray-700 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500 
        focus:border-transparent
        resize-vertical
        ${error ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-300'}
        ${className}
      `}
      {...props}
    />
  );
};