
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelContainerProps {
  children: React.ReactNode;
  className?: string;
  type?: 'window' | 'card' | 'dialog';
}

const PixelContainer = ({ 
  children, 
  className,
  type = 'window'
}: PixelContainerProps) => {
  return (
    <div 
      className={cn(
        'pixel-borders relative',
        type === 'window' && 'bg-retro-darkblue p-6',
        type === 'card' && 'bg-retro-blue p-4',
        type === 'dialog' && 'bg-retro-black p-5 border-retro-white',
        className
      )}
    >
      {children}
    </div>
  );
};

export default PixelContainer;
