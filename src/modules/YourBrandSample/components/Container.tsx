import React from 'react';

import { cn } from 'src/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className, id }: ContainerProps) => {
  return (
    <section className={cn('max-w-[375px] px-4', className)} id={id}>
      {children}
    </section>
  );
};

export default Container;
