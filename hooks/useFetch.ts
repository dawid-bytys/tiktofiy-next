import axios from 'axios';
import { useState } from 'react';

import type { AnyObject } from '../utils/types';

type FetchingState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; errorMessage: string };

export const useFetch = <T extends AnyObject>(url: string) => {
  const [fetchingState, setFetchingState] = useState<FetchingState<T>>({ status: 'idle' });

  const performFetching = async () => {
    setFetchingState({ status: 'loading' });

    try {
      const { data } = await axios.get<T>(url);

      setFetchingState({
        status: 'success',
        data: data,
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
