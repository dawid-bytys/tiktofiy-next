import MainHome from '../components/molecules/MainHome';
import Seo from '../components/Seo';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Seo title="Tiktofiy! • find your favourite song" />
      <MainHome />
    </>
  );
};

export default Home;
