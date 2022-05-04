import { motion } from 'framer-motion';
import React from 'react';
import { useFadeLeftTransition } from '../../hooks/useFadeLeftTransition';
import { useSettings } from '../../hooks/useSettings';
import type { SettingsKeys } from '../../utils/types';

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
      <div className="gap-5 w-full sm:w-72">
        <p className="text-center mb-5">shazam api key</p>
        <input
          type="password"
          name="shazamApiKey"
          placeholder="paste the key..."
          className="bg-input p-3 rounded-xl text-sm text-center block mx-auto mb-8"
          onChange={handleChange('shazamApiKey')}
          onPaste={handleChange('shazamApiKey')}
        />
        <p className="text-center mb-5">settings</p>
        <div className="flex flex-col items-center gap-5">
          <input
            type="number"
            name="start"
            placeholder="from"
            className="bg-input p-3 rounded-xl text-sm text-center"
            onChange={handleChange('start')}
            onPaste={handleChange('start')}
          />
          <input
            type="number"
            name="end"
            placeholder="to"
            className="bg-input p-3 rounded-xl text-sm text-center"
            onChange={handleChange('end')}
            onPaste={handleChange('end')}
          />
        </div>
      </div>
    </motion.main>
  );
};
