import { NextSeo } from 'next-seo';
import { MainHome } from 'components/MainHome/MainHome';

const Home = () => {
  return (
    <>
      <NextSeo title="Tiktofiy! • find your favourite song" canonical="https://tiktofiy.com" />
      <MainHome />
    </>
  );
};

export default Home;
