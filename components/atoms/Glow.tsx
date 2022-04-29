import { motion } from 'framer-motion';
import { useOpacityTransition } from '../../hooks/useOpacityTransition';

export const Glow = () => {
  const motionProps = useOpacityTransition(0.4);

  return <motion.div {...motionProps} className="inset-0 absolute bg-black" />;
};
