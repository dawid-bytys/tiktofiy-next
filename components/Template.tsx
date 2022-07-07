import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';
import { useThemeWindow } from 'hooks/useThemeWindow';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import type { EmptyObject } from 'utils/types';

const Shadow = dynamic<EmptyObject>(() => import('components/Shadow').then(mod => mod.Shadow));
const ThemeWindow = dynamic<EmptyObject>(() =>
	import('components/ThemeWindow').then(mod => mod.ThemeWindow),
);

interface TemplateProps {
	children: React.ReactNode;
}

export const Template = ({ children }: TemplateProps) => {
	const { isOpen } = useThemeWindow();

	return (
		<>
			<div className="flex flex-col min-h-screen">
				<Header />
				<AnimatePresence>{children}</AnimatePresence>
				<Footer />
			</div>
			<AnimatePresence>
				{isOpen && (
					<>
						<Shadow />
						<ThemeWindow />
					</>
				)}
			</AnimatePresence>
		</>
	);
};
