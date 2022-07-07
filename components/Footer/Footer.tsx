import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

export const Footer = () => {
	return (
		<footer className="flex justify-center items-center text-sm text-subactive">
			<Link
				href="https://github.com/salvia-dev/tiktofiy-next"
				aria-label="Go to the GitHub repository"
			>
				<a
					className="flex flex-row justify-between items-center gap-4 p-8"
					rel="noopener noreferrer"
					target="_blank"
				>
					<BsGithub className="w-6 h-6 fill-sub" />
					salvia-dev/tiktofiy-next
				</a>
			</Link>
		</footer>
	);
};
