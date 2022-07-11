import { memo } from 'react';
import type { FormProps } from 'utils/types';

export const Form = memo<FormProps>(({ handleSubmit, handleChange, isLoading }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col mx-10 sm:mx-20 md:w-144 md:mx-auto ${
        isLoading ? 'opacity-40 pointer-events-none caret-transparent' : ''
      }`}
    >
      <input
        type="text"
        onChange={handleChange}
        aria-label="Pase a TikTok URL"
        placeholder="Paste a TikTok URL..."
        className="bg-input p-4 rounded-2xl font-medium text-foreground text-sm"
      />
      <button className="rounded-3xl bg-primary mt-8 py-4 w-40 mx-auto font-medium text-sm">
        Find a song
      </button>
    </form>
  );
});
