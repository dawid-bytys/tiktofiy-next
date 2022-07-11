import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { useThemeWindow } from 'hooks/useThemeWindow';

const Shadow = dynamic<{}>(() =>
  import(/* webpackChunkName: 'Shadow' */ 'components/Shadow').then(mod => mod.Shadow),
);
const ThemeWindow = dynamic<{}>(() =>
  import(/* webpackChunkName: 'ThemeWindow' */ 'components/ThemeWindow').then(
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
            <Shadow />
            <ThemeWindow />
          </>
        )}
      </AnimatePresence>
    </>
  );
};
