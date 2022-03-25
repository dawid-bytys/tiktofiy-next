import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preload" href="../assets/fonts/RobotoMono.ttf" as="font" type="font/ttf" crossOrigin="" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript>Please enable JavaScript before entering this page</noscript>
      </body>
    </Html>
  );
};

export default Document;
