import type { ErrorAlertProps } from 'utils/types';

export const ErrorAlert = ({ errorMessage }: ErrorAlertProps) => {
  return <div className="text-center rounded-2xl bg-primary text-sm p-3 mb-8">{errorMessage}</div>;
};
