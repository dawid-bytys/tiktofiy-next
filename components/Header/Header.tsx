import { Logo } from './Logo';
import { Navigation } from './Navigation';

export const Header = () => {
	return (
		<header className="flex flex-col pt-8 xl:pt-12 items-center">
			<Logo />
			<Navigation />
		</header>
	);
};
