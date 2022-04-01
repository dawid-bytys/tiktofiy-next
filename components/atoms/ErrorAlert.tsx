import type { ErrorAlertProps } from '../../utils/types';

export const ErrorAlert = ({ errorMessage }: ErrorAlertProps) => {
  return (
    <div className="flex justify-center items-center text-center w-full sm:w-80 md:w-1/2 2xl:w-1/3 h-10 rounded-2xl back bg-primary text-sm">
      {errorMessage}
    </div>
  );
};
