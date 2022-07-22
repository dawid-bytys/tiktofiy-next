import { motion } from 'framer-motion';
import { useSettings } from 'hooks/useSettings';
import { fadeRightTransition } from 'utils/transitions';
import { SingleSetting } from './SingleSetting';
import type { ChangeEvent } from 'react';
import type { SettingsKeys } from 'utils/types';

export const MainSettings = () => {
  const { setSettings } = useSettings();

  const handleChange = (key: SettingsKeys) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (key === 'start' || key === 'end') {
      return setSettings(key, +value);
    }

    if (value === '') {
      return setSettings(key, null);
    }

    setSettings(key, value);
  };

  return (
    <motion.main {...fadeRightTransition} className="flex-1 flex items-center justify-center">
      <div className="flex flex-col">
        <SingleSetting
          label="rapidapi shazam key"
          id="shazamApiKey"
          inputType="password"
          placeholder="shazam api key"
          ariaLabel="Paste key"
          onChange={handleChange('shazamApiKey')}
        />
        <SingleSetting
          label="start"
          id="start"
          inputType="number"
          min="0"
          placeholder="start"
          ariaLabel="Provide a start"
          className="mt-5"
          onChange={handleChange('start')}
        />
        <SingleSetting
          label="end"
          id="end"
          inputType="number"
          min="1"
          placeholder="end"
          ariaLabel="Provide en end"
          className="mt-5"
          onChange={handleChange('end')}
        />
      </div>
    </motion.main>
  );
};
