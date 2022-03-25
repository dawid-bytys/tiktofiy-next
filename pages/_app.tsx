import '../styles/globals.css';

import Template from '../components/templates/Template';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Template>
      <Component {...pageProps} />;
    </Template>
  );
};

export default MyApp;
