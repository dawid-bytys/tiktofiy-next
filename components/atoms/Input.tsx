import type { InputProps } from '../../utils/types';

export const Input = ({ placeholder, className }: InputProps) => {
  return <input placeholder={placeholder} className={className} />;
};
