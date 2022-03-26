import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

import { useThemeWindow } from '../../hooks/useThemeWindow';
import Footer from '../molecules/Footer';
import Header from '../molecules/Header';

const Glow = dynamic(() => import(/* webpackChunkName: "Glow" */ '../atoms/Glow'));
const ThemeWindow = dynamic(() => import(/* webpackChunkName: "ThemeWindow" */ '../molecules/ThemeWindow'));

interface TemplateProps {
  children: React.ReactNode;
}

const Template = ({ children }: TemplateProps) => {
  const { isOpen } = useThemeWindow();

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        {children}
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

export default Template;
