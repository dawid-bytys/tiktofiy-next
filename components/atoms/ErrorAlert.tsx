import type { ErrorAlertProps } from '../../utils/types';

export const ErrorAlert = ({ errorMessage }: ErrorAlertProps) => {
  return (
    <div className="flex justify-center items-center text-center w-full rounded-2xl back bg-primary text-sm p-3 mb-10">
      {errorMessage}
    </div>
  );
};
