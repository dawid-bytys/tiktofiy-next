import Head from 'next/head';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { DOMAIN_URL, ROBOTS } from 'utils/constants';
import type { SeoProps } from 'utils/types';

export const Seo = memo<SeoProps>(({ title }) => {
  const router = useRouter();
  const canonical = DOMAIN_URL + router.pathname;

  return (
    <Head>
      <title>{title}</title>
      <meta
        key="description"
        name="description"
        content="Tiktofiy! - a web application which helps with TikTok songs recognition. Just paste the url and search for your favourite song."
      />
      <meta key="robots" name="robots" content={ROBOTS} />
      <meta key="googlebot" name="googlebot" content={ROBOTS} />
      <meta key="bingbot" name="bingbot" content={ROBOTS} />
      <link key="profile" rel="profile" href="https://gmpg.org/xfn/11" />
      <link key="canonical" rel="canonical" href={canonical} />
      <meta key="og:url" property="og:url" content={canonical} />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:site_name" property="og:site_name" content="Tiktofiy!" />
    </Head>
  );
});
