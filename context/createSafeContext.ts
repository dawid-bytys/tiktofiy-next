import { createContext, useContext } from 'react';
import type { AnyObject, Primitive } from 'utils/types';

export const createSafeContext = <T extends Primitive | AnyObject | null>() => {
  const context = createContext<T | undefined>(undefined);

  const useSafeContext = () => {
    const value = useContext(context);
    if (value === undefined) {
      throw new Error('useContext must be used within the proper provider');
    }
    return value;
  };

  return [useSafeContext, context.Provider] as const;
};
