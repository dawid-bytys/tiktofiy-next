import type { KawaiiProps } from 'react-kawaii';

interface NotiProps {
	readonly icon: React.ReactElement<KawaiiProps>;
	readonly message: string;
}

export const Noti = ({ icon, message }: NotiProps) => {
	return (
		<>
			<div className="flex items-center justify-center">{icon}</div>
			<p className="text-center mt-16">{message}</p>
		</>
	);
};
