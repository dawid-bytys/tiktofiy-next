import type { ErrorAlertProps } from '../../utils/types';

export const ErrorAlert = ({ errorMessage }: ErrorAlertProps) => {
  return (
    <div className="flex justify-center items-center text-center w-full sm:w-96 md:w-144 xl:w-196 rounded-2xl back bg-primary text-sm p-3">
      {errorMessage}
    </div>
  );
};
