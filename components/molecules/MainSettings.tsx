import { motion } from 'framer-motion';
import React from 'react';
import { useFadeLeftTransition } from '../../hooks/useFadeLeftTransition';
import { useSettings } from '../../hooks/useSettings';
import type { SettingsKeys } from '../../utils/types';

const INPUT_STYLES = 'bg-input p-3 rounded-xl text-sm text-center';

export const MainSettings = () => {
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
    <motion.main {...motionProps} className="flex justify-center flex-1 p-8 sm:py-16 sm:px-0">
      <div className="flex flex-col align-center gap-5 w-full sm:w-72">
        <div className="text-center">shazam api key</div>
        <input
          type="password"
          name="shazamApiKey"
          placeholder="paste the key..."
          className={INPUT_STYLES}
          onChange={handleChange('shazamApiKey')}
          onPaste={handleChange('shazamApiKey')}
        />
        <div className="text-center">settings</div>
        <input
          type="number"
          name="start"
          placeholder="from"
          className={INPUT_STYLES}
          onChange={handleChange('start')}
          onPaste={handleChange('start')}
        />
        <input
          type="number"
          name="end"
          placeholder="to"
          className={INPUT_STYLES}
          onChange={handleChange('end')}
          onPaste={handleChange('end')}
        />
      </div>
    </motion.main>
  );
};
