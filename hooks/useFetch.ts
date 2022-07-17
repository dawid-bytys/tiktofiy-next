import axios from 'axios';
import { useState, useCallback } from 'react';
import { isApiError } from 'utils/typeguards';
import type { AnyObject, Result, HTTPMethod } from 'utils/types';

export const useFetch = <T extends AnyObject, U extends AnyObject | undefined = undefined>(
  method: HTTPMethod,
  url: string,
  data?: U,
) => {
  const [result, setResult] = useState<Result<T>>({ status: 'idle' });

  const performFetching = useCallback(async () => {
    setResult({ status: 'loading' });

    try {
      const response = await axios.request<T>({
        method: method,
        url: url,
        data: data,
      });

      setResult({
        status: 'success',
        data: response.data,
      });
    } catch (err) {
      if (isApiError(err)) {
        return setResult({
          status: 'error',
          errorMessage:
            err.response.status === 500 ? 'Internal server error' : err.response.data.message,
        });
      }

      setResult({
        status: 'error',
        errorMessage: 'Unexpected error has occured',
      });
    }
  }, [data, method, url]);

  return { result, performFetching };
};
