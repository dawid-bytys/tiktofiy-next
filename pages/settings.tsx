import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useFadeLeftTransition } from '../hooks/useFadeLeftTransition';
import { useSettings } from '../hooks/useSettings';
import type { SeoProps, SettingsKeys } from '../utils/types';

const Seo = dynamic<SeoProps>(() =>
  import(/* webpackChunkName: "Seo" */ '../components/Seo').then(mod => mod.Seo),
);

const Settings = () => {
  const motionProps = useFadeLeftTransition();
  const { setSettings } = useSettings();

  const handleChange =
    (key: SettingsKeys) =>
    (e: React.ChangeEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>) => {
      if (key === 'shazamApiKey') {
        return setSettings(key, e.currentTarget.value);
      }

      setSettings(key, +e.currentTarget.value);
    };

  return (
    <>
      <Seo title="Tiktofiy! • settings" />
      <motion.main {...motionProps} className="flex justify-center flex-1 p-10 sm:px-0 xl:py-24">
        <div className="flex flex-col justify-center w-full max-w-xs">
          <div className="flex flex-col justify-center mb-8">
            <div className="flex justify-center mb-5">shazam api key</div>
            <input
              type="password"
              name="shazamApiKey"
              placeholder="paste the key..."
              className="bg-input p-3 rounded-xl text-sm text-center"
              aria-label="Shazam API Key"
              onChange={handleChange('shazamApiKey')}
              onPaste={handleChange('shazamApiKey')}
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-center mb-5">audio range</div>
            <div className="flex flex-col items-center gap-5">
              <input
                type="number"
                name="start"
                placeholder="from"
                className="bg-input p-3 rounded-xl text-sm text-center w-full"
                aria-label="Range start"
                onChange={handleChange('start')}
                onPaste={handleChange('start')}
              />
              <input
                type="number"
                name="end"
                placeholder="to"
                className="bg-input p-3 rounded-xl text-sm text-center w-full"
                aria-label="Range end"
                onChange={handleChange('end')}
                onPaste={handleChange('end')}
              />
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Settings;
