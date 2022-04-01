import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import { useFadeRightTransition } from '../../hooks/useFadeRightTransition';
import { Input } from '../atoms/Input';

import type { EmptyObject, ErrorAlertProps } from '../../utils/types';

const ErrorAlert = dynamic<ErrorAlertProps>(() =>
  import(/* webpackChunkName: "ErrorAlert" */ '../atoms/ErrorAlert').then(mod => mod.ErrorAlert),
);
const Loading = dynamic<EmptyObject>(() =>
  import(/* webpackChunkName: "Loading" */ '../atoms/Loading').then(mod => mod.Loading),
);

export const MainHome = () => {
  const motionProps = useFadeRightTransition();

  return (
    <motion.main
      {...motionProps}
      className="flex items-center gap-10 flex-1 flex-col p-8 sm:py-16 sm:px-0"
    >
      <ErrorAlert errorMessage="dupa" />
      <Input
        placeholder="Paste a TikTok url..."
        className="p-4 bg-input w-full sm:w-96 md:w-144 xl:w-196 rounded-2xl text-sm font-medium text-foreground placeholder-subactive"
      />
    </motion.main>
  );
};
