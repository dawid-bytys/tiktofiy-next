import type { ParagraphProps } from 'utils/types';

export const Paragraph = ({ text, className }: ParagraphProps) => {
	if (typeof className !== 'undefined') {
		return <p className={`text-center text-sm md:text-base ${className}`}>{text}</p>;
	}

	return <p className="text-center text-sm md:text-base">{text}</p>;
};
