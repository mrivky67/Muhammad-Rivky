
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelDividerProps {
  className?: string;
  color?: 'primary' | 'secondary' | 'accent';
}

const PixelDivider = ({ 
  className,
  color = 'primary'
}: PixelDividerProps) => {
  return (
    <div 
      className={cn(
        'w-full h-2 my-8',
        color === 'primary' && 'bg-retro-yellow',
        color === 'secondary' && 'bg-retro-blue',
        color === 'accent' && 'bg-retro-red',
        className
      )}
    >
      <div className="w-full h-full" style={{ 
        backgroundImage: 'linear-gradient(to right, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.4) 100%)',
        backgroundSize: '8px 8px'
      }}></div>
    </div>
  );
};

export default PixelDivider;
