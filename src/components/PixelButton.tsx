
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'primary' | 'secondary' | 'accent';
}

const PixelButton = ({ 
  children, 
  onClick,
  className,
  type = 'primary'
}: PixelButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={cn(
        'pixel-btn text-xs sm:text-sm',
        type === 'primary' && 'bg-retro-yellow border-retro-brown text-retro-black',
        type === 'secondary' && 'bg-retro-blue border-retro-darkblue text-white',
        type === 'accent' && 'bg-retro-red border-retro-magenta text-white',
        className
      )}
    >
      {children}
    </button>
  );
};

export default PixelButton;
