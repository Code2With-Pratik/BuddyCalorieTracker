import React from 'react';

export const PawIcon = ({ className, color = "#6b3f1d" }: { className?: string, color?: string }) => (
  <svg 
    viewBox="0 0 200 200" 
    className={className} 
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M100 200c-30 0-55-25-55-50
           0-20 10-35 25-45
           10-5 15-15 15-25
           0-20 15-35 35-35
           s35 15 35 35
           c0 10 5 20 15 25
           15 10 25 25 25 45
           0 25-25 50-55 50z" 
    />
  </svg>
);