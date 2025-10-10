import { useState, useCallback } from 'react';
import type { ToastProps } from '../components/Toast';

export interface UseToastOptions {
  defaultDuration?: number;
  maxToasts?: number;
}

export interface ToastOptions {
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  action?: React.ReactNode;
}

export function useToast(options: UseToastOptions = {}) {
  const { defaultDuration = 5000, maxToasts = 5 } = options;
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const addToast = useCallback((
    message: string, 
    toastOptions: ToastOptions = {}
  ) => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    const newToast: ToastProps = {
      id,
      message,
      type: toastOptions.type || 'info',
      duration: toastOptions.duration ?? defaultDuration,
      action: toastOptions.action,
      onClose: removeToast,
    };

    setToasts(prev => {
      const updated = [newToast, ...prev];
      // 최대 개수 제한
      return updated.slice(0, maxToasts);
    });

    return id;
  }, [defaultDuration, maxToasts, removeToast]);

  const clearAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  // 편의 메서드들
  const success = useCallback((message: string, options?: Omit<ToastOptions, 'type'>) => {
    return addToast(message, { ...options, type: 'success' });
  }, [addToast]);

  const error = useCallback((message: string, options?: Omit<ToastOptions, 'type'>) => {
    return addToast(message, { ...options, type: 'error' });
  }, [addToast]);

  const warning = useCallback((message: string, options?: Omit<ToastOptions, 'type'>) => {
    return addToast(message, { ...options, type: 'warning' });
  }, [addToast]);

  const info = useCallback((message: string, options?: Omit<ToastOptions, 'type'>) => {
    return addToast(message, { ...options, type: 'info' });
  }, [addToast]);

  return {
    toasts,
    addToast,
    removeToast,
    clearAllToasts,
    success,
    error,
    warning,
    info,
  };
}