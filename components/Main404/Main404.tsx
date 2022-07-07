import { motion } from 'framer-motion';
import { fadeLeftTransition } from 'utils/transitions';

export const Main404 = () => {
	return (
		<motion.main {...fadeLeftTransition} className="flex-1 flex items-center justify-center">
			<h2 className="flex flex-row items-center text-xl md:text-3xl divide-x divide-gray-500">
				<span className="pr-5 py-1">404</span>
				<span className="pl-5 py-1">Not Found</span>
			</h2>
		</motion.main>
	);
};
