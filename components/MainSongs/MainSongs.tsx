import { motion } from 'framer-motion';
import { fadeRightTransition } from 'utils/transitions';

export const MainSongs = () => {
  return (
    <motion.main {...fadeRightTransition} className="flex-1 flex items-center justify-center">
      <h2 className="text-sm md:text-2xl">Under development</h2>
    </motion.main>
  );
};
