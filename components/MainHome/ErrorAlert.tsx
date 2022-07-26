import type { ErrorAlertProps } from 'utils/types';

export const ErrorAlert = ({ errorMessage }: ErrorAlertProps) => {
  return (
    <div className="text-center mx-auto w-full max-w-xl rounded-2xl bg-primary text-sm p-3 mb-8">
      {errorMessage}
    </div>
  );
};
