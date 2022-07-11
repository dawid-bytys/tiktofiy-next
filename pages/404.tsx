import { NextSeo } from 'next-seo';
import { Main404 } from 'components/Main404/Main404';

const NotFound404 = () => {
  return (
    <>
      <NextSeo title="Tiktofiy! • find your favourite song" canonical="https://tiktofiy.com/404" />
      <Main404 />
    </>
  );
};

export default NotFound404;
