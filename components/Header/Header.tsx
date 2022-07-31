import { useTheme } from 'next-themes';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { ThemeWindowButton } from './ThemeWindowButton';

export const Header = () => {
  return (
    <header className="pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="w-fit mx-auto">
        <Logo />
        <div className="flex flex-row justify-center items-center mt-6">
          <Navigation />
          <ThemeWindowButton />
        </div>
      </div>
    </header>
  );
};
