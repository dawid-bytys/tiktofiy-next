import dynamic from 'next/dynamic';
import { MainSettings } from 'components/MainSettings/MainSettings';
import type { SeoProps } from '../utils/types';

const Seo = dynamic<SeoProps>(() =>
  import(/* webpackChunkName: 'Seo' */ 'components/Seo').then(mod => mod.Seo),
);

const Settings = () => {
  return (
    <>
      <Seo title="Tiktofiy! • settings" />
      <MainSettings />
    </>
  );
};

export default Settings;
