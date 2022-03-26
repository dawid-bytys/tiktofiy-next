import Seo from '../components/Seo';
import MainSettings from '../components/molecules/MainSettings';

import type { NextPage } from 'next';

const Settings: NextPage = () => {
  return (
    <>
      <Seo title="Tiktofiy! • settings" />
      <MainSettings />
    </>
  );
};

export default Settings;
