import { NextSeo } from 'next-seo';
import { MainSettings } from 'components/MainSettings/MainSettings';

const Settings = () => {
  return (
    <>
      <NextSeo
        title="Tiktofiy! • find your favourite song"
        canonical="https://tiktofiy.com/settings"
      />
      <MainSettings />
    </>
  );
};

export default Settings;
