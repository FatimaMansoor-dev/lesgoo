import React from 'react';

export const getRangeBox = (
  event: MouseEvent | TouchEvent | React.MouseEvent<HTMLDivElement>,
  currentlyDragged: HTMLDivElement | null
): HTMLDivElement => {
  const rangeBox = currentlyDragged?.parentElement?.parentElement;
  if (!rangeBox) {
    throw new Error('Range box not found');
  }
  return rangeBox as HTMLDivElement;
};
