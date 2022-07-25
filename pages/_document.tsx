import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Tiktofiy! - a web application which helps with TikTok songs recognition. Just paste a url and search for the song you absolutely must find."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="author" content="salvia-dev (Dawid Bytys)" />
        <meta
          name="keywords"
          content="tiktok songs recognition, songs recognition, find tiktok song, recognize tiktok song"
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:site_name" property="og:site_name" content="Tiktofiy!" />
        <meta name="robots" content="noindex, nofollow" />
        <link key="profile" rel="profile" href="https://gmpg.org/xfn/11" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600&display=swap"
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
