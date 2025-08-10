import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { cn } from 'src/lib/utils';

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  trackClassName?: string;
  thumbClassName?: string;
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, trackClassName, thumbClassName, ...props }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn('relative flex w-full items-center', className)}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn(
          'relative h-1 w-full grow overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800',
          trackClassName
        )}
      >
        <SliderPrimitive.Range className="absolute h-full bg-[#00C0C5] dark:bg-slate-400" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(
          'block h-5 w-5 rounded-full border-2 border-slate-900 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-100 dark:bg-slate-400 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
          thumbClassName
        )}
      />
    </SliderPrimitive.Root>
  )
);

export { Slider };
