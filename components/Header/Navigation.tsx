import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { FiSettings, FiHome } from 'react-icons/fi';
import { MdAudiotrack } from 'react-icons/md';
import { RiPaletteLine } from 'react-icons/ri';
import { useThemeWindow } from 'hooks/useThemeWindow';

const LINKS = [
	{
		icon: FiHome,
		ariaLabel: 'Go to the home page',
		href: '/',
	},
	{
		icon: FiSettings,
		ariaLabel: 'Go to the settings page',
		href: '/settings',
	},
	{
		icon: MdAudiotrack,
		ariaLabel: 'Go the songs page',
		href: '/songs',
	},
];

export const Navigation = () => {
	const router = useRouter();
	const { theme } = useTheme();
	const { toggleThemeWindow } = useThemeWindow();

	return (
		<nav className="flex flex-row justify-between mt-4">
			<ul className="flex flex-row">
				{LINKS.map(link => (
					<li key={link.href}>
						<Link href={link.href}>
							<a
								aria-label={link.ariaLabel}
								referrerPolicy="no-referrer"
								rel="noreferrer noopener"
								className="flex items-center justify-center p-3"
							>
								<link.icon
									className={`w-6 h-6 transition-colors duration-200 ease-in-out ${
										router.pathname === link.href ? 'text-subactive' : 'text-sub'
									}`}
								/>
							</a>
						</Link>
					</li>
				))}
			</ul>
			<button
				onClick={() => toggleThemeWindow(true)}
				aria-label="Toggle theme window"
				className="flex flex-row items-center p-3 ml-10 md:ml-28 text-subactive font-robotomonomedium"
			>
				{theme} <RiPaletteLine className="ml-3 w-6 h-6" />
			</button>
		</nav>
	);
};
