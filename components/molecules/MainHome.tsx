import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import { useFadeRightTransition } from '../../hooks/useFadeRightTransition';
import { Input } from '../atoms/Input';

import type { ErrorAlertProps } from '../../utils/types';

const ErrorAlert = dynamic<ErrorAlertProps>(() =>
  import(/* webpackChunkName: "ErrorAlert" */ '../atoms/ErrorAlert').then(mod => mod.ErrorAlert),
);

export const MainHome = () => {
  const motionProps = useFadeRightTransition();

  return (
    <motion.main {...motionProps} className="flex items-center gap-10 flex-1 flex-col p-8 md:p-16">
      <ErrorAlert errorMessage="dupa" />
      <Input
        placeholder="Paste a TikTok url..."
        className="p-4 bg-input w-full sm:w-80 md:w-1/2 2xl:w-1/3 rounded-2xl text-sm font-medium text-foreground"
      />
    </motion.main>
  );
};
