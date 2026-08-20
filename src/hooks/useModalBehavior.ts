import { useEffect } from 'react';

/**
 * Shared overlay/modal behavior:
 * - Locks body scroll while open
 * - Closes on Escape key
 * - Returns focus to the previously focused element on close
 */
export function useModalBehavior(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKey);
      previouslyFocused?.focus?.();
    };
  }, [isOpen, onClose]);
}
