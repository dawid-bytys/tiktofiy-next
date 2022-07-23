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

    if (key === 'startTime' || key === 'duration') {
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
          label="startTime"
          id="startTime"
          inputType="number"
          min="0"
          placeholder="startTime"
          ariaLabel="Provide a startTime"
          className="mt-5"
          onChange={handleChange('startTime')}
        />
        <SingleSetting
          label="duration"
          id="duration"
          inputType="number"
          min="1"
          placeholder="duration"
          ariaLabel="Provide a duration"
          className="mt-5"
          onChange={handleChange('duration')}
        />
      </div>
    </motion.main>
  );
};
