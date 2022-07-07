import Spinner from '../../assets/svg/spinner.svg';

export const Loading = () => {
	return (
		<div className="flex justify-center items-center">
			<Spinner className="w-32 h-32" />
		</div>
	);
};
