import { motion } from 'framer-motion';

import type { ComponentType } from 'react';

function withTransition<T>(Component: ComponentType<T>, animateOpacity: number) {
  return (props: T) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: animateOpacity }} exit={{ opacity: 0 }}>
      <Component {...props} />
    </motion.div>
  );
}

export default withTransition;
