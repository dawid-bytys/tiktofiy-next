import { AnimatePresence } from 'framer-motion';

import { useThemeWindow } from '../../hooks/useThemeWindow';
import Glow from '../atoms/Glow';
import Footer from '../molecules/Footer';
import Header from '../molecules/Header';
import ThemeWindow from '../molecules/ThemeWindow';

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
