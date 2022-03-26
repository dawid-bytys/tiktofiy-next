import Seo from '../components/Seo';
import MainNotFound404 from '../components/molecules/MainNotFound404';

import type { NextPage } from 'next';

const NotFound404: NextPage = () => {
  return (
    <>
      <Seo title="Tiktofiy! • 404" />
      <MainNotFound404 />
    </>
  );
};

export default NotFound404;
