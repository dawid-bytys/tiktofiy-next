import dynamic from 'next/dynamic';

import type { EmptyObject, SeoProps } from '../utils/types';
import type { NextPage } from 'next';

const Seo = dynamic<SeoProps>(() =>
  import(/* webpackChunkName: "Seo" */ '../components/Seo').then(mod => mod.Seo),
);
const MainSettings = dynamic<EmptyObject>(() =>
  import(/* webpackChunkName: "MainSettings" */ '../components/molecules/MainSettings').then(
    mod => mod.MainSettings,
  ),
);

const Settings: NextPage = () => {
  return (
    <>
      <Seo title="Tiktofiy! • settings" />
      <MainSettings />
    </>
  );
};

export default Settings;
