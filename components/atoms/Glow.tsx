import { motion } from 'framer-motion';

const Glow = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      exit={{ opacity: 0 }}
      className="inset-0 absolute bg-black"
    />
  );
};

export default Glow;
