import type { FormProps } from 'utils/types';

export const Form = ({ handleSubmit, handleChange }: FormProps) => {
	return (
		<form onSubmit={handleSubmit} className="flex flex-col mx-10 sm:mx-20 md:w-144 md:mx-auto">
			<input
				type="text"
				onChange={handleChange}
				placeholder="Paste a TikTok URL..."
				className="bg-input p-4 rounded-2xl font-robotomonomedium text-foreground text-sm"
			/>
			<button className="rounded-3xl bg-primary mt-8 py-4 w-40 mx-auto font-robotomonomedium text-sm">
				Find a song
			</button>
		</form>
	);
};
