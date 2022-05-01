import { motion } from 'framer-motion';
import { useFadeLeftTransition } from '../../hooks/useFadeLeftTransition';

const INPUT_STYLES = 'bg-input p-3 rounded-xl text-sm text-center';

export const MainSettings = () => {
  const motionProps = useFadeLeftTransition();

  return (
    <motion.main {...motionProps} className="flex justify-center flex-1 p-8 sm:py-16 sm:px-0">
      <div className="flex flex-col align-center gap-5 w-full sm:w-72">
        <div className="text-center">shazam api key</div>
        <input type="password" placeholder="paste the key..." className={INPUT_STYLES} />
        <div className="text-center">settings</div>
        <input type="number" placeholder="from" className={INPUT_STYLES} />
        <input type="number" placeholder="to" className={INPUT_STYLES} />
      </div>
    </motion.main>
  );
};
