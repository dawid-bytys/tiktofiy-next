import { motion } from 'framer-motion';
import { useFadeLeftTransition } from '../../hooks/useFadeLeftTransition';

export const MainSettings = () => {
  const motionProps = useFadeLeftTransition();

  return <motion.main {...motionProps} className="flex flex-1 flex-col"></motion.main>;
};
