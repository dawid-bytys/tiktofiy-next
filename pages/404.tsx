import dynamic from 'next/dynamic';
import type { EmptyObject, SeoProps } from '../utils/types';

const Seo = dynamic<SeoProps>(() =>
  import(/* webpackChunkName: "Seo" */ '../components/Seo').then(mod => mod.Seo),
);
const MainNotFound404 = dynamic<EmptyObject>(() =>
  import(/* webpackChunkName: "MainNotFound404" */ '../components/molecules/MainNotFound404').then(
    mod => mod.MainNotFound404,
  ),
);

const NotFound404 = () => {
  return (
    <>
      <Seo title="Tiktofiy! • 404" />
      <MainNotFound404 />
    </>
  );
};

export default NotFound404;
