
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelHeadingProps {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4;
  withPixels?: boolean;
}

const PixelHeading = ({ 
  children, 
  className,
  level = 2,
  withPixels = true
}: PixelHeadingProps) => {
  const baseClasses = cn(
    'font-pixel tracking-wide mb-6',
    level === 1 && 'text-2xl sm:text-3xl md:text-4xl text-retro-yellow',
    level === 2 && 'text-xl sm:text-2xl text-retro-lightblue',
    level === 3 && 'text-lg sm:text-xl text-retro-green',
    level === 4 && 'text-base sm:text-lg text-retro-orange',
    withPixels && 'pixel-text',
    className
  );

  switch (level) {
    case 1:
      return <h1 className={baseClasses}>{children}</h1>;
    case 2:
      return <h2 className={baseClasses}>{children}</h2>;
    case 3:
      return <h3 className={baseClasses}>{children}</h3>;
    case 4:
      return <h4 className={baseClasses}>{children}</h4>;
    default:
      return <h2 className={baseClasses}>{children}</h2>;
  }
};

export default PixelHeading;
