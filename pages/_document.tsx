import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta
          key="description"
          name="description"
          content="Tiktofiy! - a web application which helps with TikTok songs recognition. Just paste the url and search for your favourite song."
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:site_name" property="og:site_name" content="Tiktofiy!" />
        <link key="profile" rel="profile" href="https://gmpg.org/xfn/11" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
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
