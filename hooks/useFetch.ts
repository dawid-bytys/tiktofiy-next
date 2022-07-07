import axios from 'axios';
import { useState } from 'react';
import type { AnyObject, Result, HTTPMethod } from 'utils/types';

export const useFetch = <T extends AnyObject, U extends AnyObject = AnyObject>(
	method: HTTPMethod,
	url: string,
	data?: U,
) => {
	const [result, setResult] = useState<Result<T>>({ status: 'idle' });

	const performFetching = async () => {
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
				return setResult({
					status: 'error',
					errorMessage: err.response?.data.message || 'Server error, try again later',
				});
			}

			setResult({
				status: 'error',
				errorMessage: 'Unexpected error has occured',
			});
		}
	};

	return { result, performFetching };
};
