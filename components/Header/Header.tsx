import { Logo } from './Logo';
import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="pt-8 pb-16 md:pt-12 md:pb-24">
      <Logo />
      <Navigation />
    </header>
  );
};
