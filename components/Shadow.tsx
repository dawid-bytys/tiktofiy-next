import { motion } from 'framer-motion';
import { opacityTransition } from 'utils/transitions';

export const Shadow = () => {
	return <motion.div {...opacityTransition(0.4)} className="inset-0 absolute bg-black" />;
};
