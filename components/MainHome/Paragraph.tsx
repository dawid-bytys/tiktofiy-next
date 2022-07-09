import { memo } from 'react';
import type { ParagraphProps } from 'utils/types';

export const Paragraph = memo<ParagraphProps>(({ text, className }) => {
	if (typeof className !== 'undefined') {
		return <p className={`text-center text-sm md:text-base ${className}`}>{text}</p>;
	}

	return <p className="text-center text-sm md:text-base">{text}</p>;
});
