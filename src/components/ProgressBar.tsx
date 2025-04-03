
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  label: string;
  value: number;
  maxValue?: number;
  className?: string;
  color?: 'yellow' | 'green' | 'blue' | 'red';
}

const ProgressBar = ({ 
  label, 
  value, 
  maxValue = 100,
  className,
  color = 'green'
}: ProgressBarProps) => {
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className={cn("mb-4", className)}>
      <div className="flex justify-between mb-1 font-pixel-secondary">
        <span>{label}</span>
        <span>{value}/{maxValue}</span>
      </div>
      <div className="w-full bg-retro-black border-2 border-retro-lightgray h-6 pixel-borders">
        <div 
          className={cn(
            "h-full",
            color === 'yellow' && 'bg-retro-yellow',
            color === 'green' && 'bg-retro-green',
            color === 'blue' && 'bg-retro-blue',
            color === 'red' && 'bg-retro-red',
          )}
          style={{ width: `${percentage}%` }}
        >
          <div className="w-full h-full opacity-30" style={{ 
            backgroundImage: 'linear-gradient(to right, transparent 0%, transparent 50%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.5) 100%)',
            backgroundSize: '8px 8px'
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
