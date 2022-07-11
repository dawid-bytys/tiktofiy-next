import axios from 'axios';
import { useState, useCallback } from 'react';
import type { AxiosError } from 'axios';
import type { AnyObject, Result, HTTPMethod, ErrorResponse } from 'utils/types';

export const useFetch = <T extends AnyObject, U extends AnyObject = AnyObject>(
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
      if (axios.isAxiosError(err)) {
        const error = err as AxiosError<ErrorResponse>;

        return setResult({
          status: 'error',
          errorMessage: error.response?.data?.message || 'Server error, try again later',
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
