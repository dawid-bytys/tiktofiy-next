import dynamic from 'next/dynamic';

import type { SeoProps } from '../utils/types';
import type { NextPage } from 'next';

const Seo = dynamic<SeoProps>(() =>
  import(/* webpackChunkName: "Seo" */ '../components/Seo').then(mod => mod.Seo),
);
const MainNotFound404 = dynamic<object>(() =>
  import(/* webpackChunkName: "MainNotFound404" */ '../components/molecules/MainNotFound404').then(
    mod => mod.MainNotFound404,
  ),
);

const NotFound404: NextPage = () => {
  return (
    <>
      <Seo title="Tiktofiy! • 404" />
      <MainNotFound404 />
    </>
  );
};

export default NotFound404;
