import axios from 'axios';
import { useState } from 'react';
import type { AnyObject } from '../utils/types';

type FetchingState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; errorMessage: string };

export const useFetch = <T extends AnyObject, V = AnyObject>(url: string, data?: V) => {
  const [fetchingState, setFetchingState] = useState<FetchingState<T>>({ status: 'idle' });

  const performFetching = async () => {
    setFetchingState({ status: 'loading' });

    try {
      const response = await axios.post<T>(url, {
        data: data,
      });

      setFetchingState({
        status: 'success',
        data: response.data,
      });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setFetchingState({
          status: 'error',
          errorMessage: err.message,
        });
      }
    }
  };

  return { fetchingState, performFetching };
};
