import type { ErrorAlertProps } from 'utils/types';

export const ErrorAlert = ({ errorMessage }: ErrorAlertProps) => {
	return (
		<div className="flex justify-center items-center text-center rounded-2xl bg-primary text-sm p-3 mb-8 mx-10 sm:mx-20 md:w-144 md:mx-auto">
			{errorMessage}
		</div>
	);
};
