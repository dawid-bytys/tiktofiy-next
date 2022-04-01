import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

import { useThemeWindow } from '../../hooks/useThemeWindow';
import { Footer } from '../molecules/Footer';
import { Header } from '../molecules/Header';

import type { EmptyObject } from '../../utils/types';

const Glow = dynamic<EmptyObject>(() =>
  import(/* webpackChunkName: "Glow" */ '../atoms/Glow').then(mod => mod.Glow),
);
const ThemeWindow = dynamic<EmptyObject>(() =>
  import(/* webpackChunkName: "ThemeWindow" */ '../molecules/ThemeWindow').then(
    mod => mod.ThemeWindow,
  ),
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
            <Glow />
            <ThemeWindow />
          </>
        )}
      </AnimatePresence>
    </>
  );
};
