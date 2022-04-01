import dynamic from 'next/dynamic';

import type { SeoProps } from '../utils/types';
import type { NextPage } from 'next';

const Seo = dynamic<SeoProps>(() =>
  import(/* webpackChunkName: "Seo" */ '../components/Seo').then(mod => mod.Seo),
);
const MainHome = dynamic<object>(() =>
  import(/* webpackChunkName: "MainHome" */ '../components/molecules/MainHome').then(
    mod => mod.MainHome,
  ),
);

const Home: NextPage = () => {
  return (
    <>
      <Seo title="Tiktofiy! • find your favourite song" />
      <MainHome />
    </>
  );
};

export default Home;
