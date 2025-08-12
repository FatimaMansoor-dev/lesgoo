import React from 'react';

/**
 * Robust helper to find the slider/range container element.
 * Tries, in order:
 *  1) legacy currentlyDragged -> parentElement.parentElement
 *  2) the event target (supports TouchEvent, PointerEvent, MouseEvent)
 *  3) event.currentTarget (the element the handler is attached to)
 *  4) document.querySelector('[data-direction]') as a last-resort
 *
 * Throws only when nothing sensible can be found (with helpful context).
 */
export const getRangeBox = (
  event: MouseEvent | TouchEvent | React.MouseEvent<HTMLDivElement> | PointerEvent | any,
  currentlyDragged: HTMLDivElement | null
): HTMLDivElement => {
  // 1) Legacy path: parent chain from currentlyDragged (keeps compatibility)
  try {
    if (currentlyDragged) {
      const rangeBox = currentlyDragged.parentElement?.parentElement;
      if (rangeBox && rangeBox instanceof HTMLDivElement) return rangeBox;
      if (rangeBox && rangeBox instanceof HTMLElement) return rangeBox as unknown as HTMLDivElement;
    }
  } catch (e) {
    // continue to other strategies
  }

  // helper: find closest ancestor with [data-direction]
  const findFromElement = (el?: Element | null): HTMLDivElement | null => {
    try {
      if (!el) return null;
      const found = el.closest('[data-direction]');
      if (!found) return null;
      if (found instanceof HTMLDivElement) return found;
      return found as unknown as HTMLDivElement;
    } catch {
      return null;
    }
  };

  // 2) Try event target (handles touch, pointer, mouse)
  try {
    let targetElement: Element | null = null;

    // TouchEvent -> first touch's target (if present)
    if (event && (event as TouchEvent).touches && (event as TouchEvent).touches.length) {
      targetElement = (event as TouchEvent).touches[0].target as Element | null;
    }

    // If not touch, try event.target
    if (!targetElement && event && event.target) {
      targetElement = event.target as Element;
    }

    const fromTarget = findFromElement(targetElement);
    if (fromTarget) return fromTarget;
  } catch (e) {
    // ignore and keep trying
  }

  // 3) Try event.currentTarget (where the handler is attached)
  try {
    if (event && event.currentTarget) {
      const fromCurrent = findFromElement(event.currentTarget as Element | null);
      if (fromCurrent) return fromCurrent;

      // if currentTarget itself is the slider (has dataset.direction)
      const ct = event.currentTarget as HTMLElement;
      if (ct && ct.dataset && ct.dataset.direction) {
        return ct as unknown as HTMLDivElement;
      }
    }
  } catch (e) {
    // ignore
  }

  // 4) Last resort: global query for a visible slider element
  try {
    const globalFound = document.querySelector('[data-direction]') as HTMLDivElement | null;
    if (globalFound) return globalFound;
  } catch (e) {
    // ignore
  }

  // Nothing found — throw with useful debug context
  const ctx = (() => {
    try {
      const parts: string[] = [];
      if (currentlyDragged) parts.push('currentlyDragged present');
      if (event?.type) parts.push(`event.type=${String(event.type)}`);
      if (event?.target && (event.target as Element).tagName) parts.push(`event.target=${(event.target as Element).tagName}`);
      if (event?.currentTarget && (event.currentTarget as Element).tagName) parts.push(`event.currentTarget=${(event.currentTarget as Element).tagName}`);
      return parts.join(', ') || 'no context available';
    } catch {
      return 'no context available';
    }
  })();

  throw new Error(`Range box not found — no [data-direction] ancestor found from event or currentlyDragged. Context: ${ctx}`);
};
