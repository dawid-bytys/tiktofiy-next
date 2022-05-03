import axios from 'axios';
import { useState } from 'react';
import type { AnyObject } from '../utils/types';

type FetchingState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; errorMessage: string };

type HTTPMethod = 'POST' | 'PUT' | 'GET';

export const useFetch = <T extends AnyObject, U = AnyObject>(
  method: HTTPMethod,
  url: string,
  data?: U,
) => {
  const [fetchingState, setFetchingState] = useState<FetchingState<T>>({ status: 'idle' });

  const performFetching = async () => {
    setFetchingState({ status: 'loading' });

    try {
      const response = await axios.request<T>({
        method: method,
        url: url,
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
          errorMessage: err.response?.data.message || 'Unexpected error has occured',
        });
      }
    }
  };

  return { fetchingState, performFetching };
};
