import { Flex } from '@chakra-ui/react';

import Header from '../molecules/Header';
import Footer from '../molecules/Footer';

interface TemplateProps {
  children: React.ReactNode;
}

const Template = ({ children }: TemplateProps) => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      {children}
      <Footer />
    </Flex>
  );
};

export default Template;
