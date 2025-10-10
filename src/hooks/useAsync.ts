import { useState, useCallback } from 'react';

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseAsyncOptions {
  immediate?: boolean;
}

export function useAsync<T>(
  asyncFunction?: () => Promise<T>,
  options: UseAsyncOptions = {}
) {
  const { immediate = false } = options;

  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: immediate && !!asyncFunction,
    error: null,
  });

  const execute = useCallback(async (customAsyncFunction?: () => Promise<T>) => {
    const functionToExecute = customAsyncFunction || asyncFunction;
    if (!functionToExecute) {
      throw new Error('No async function provided');
    }

    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const data = await functionToExecute();
      setState({ data, loading: false, error: null });
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setState({ data: null, loading: false, error: errorMessage });
      throw error;
    }
  }, [asyncFunction]);

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
}