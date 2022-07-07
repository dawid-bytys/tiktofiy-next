import { useContext } from 'react';
import type { Context } from 'react';

export const createSafeContext =
	<T>(context: Context<T | undefined>) =>
	(): T => {
		const contextValue = useContext(context);
		if (!contextValue) {
			throw new Error('Context must be used within the proper provider');
		}

		return contextValue;
	};
