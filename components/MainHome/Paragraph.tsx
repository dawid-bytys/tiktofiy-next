import type { ParagraphProps } from 'utils/types';

export const Paragraph = ({ text, className }: ParagraphProps) => {
	return <p className={`text-center text-sm md:text-base ${className}`}>{text}</p>;
};
