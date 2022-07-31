import clsx from 'clsx';
import { memo } from 'react';
import type { FormProps } from 'utils/types';

export const Form = memo<FormProps>(({ handleSubmit, handleChange, isLoading }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className={clsx({
        'flex flex-col items-center justify-center': true,
        'opacity-40 pointer-events-none caret-transparent': isLoading,
      })}
    >
      <input
        type="text"
        onChange={handleChange}
        aria-label="Pase a TikTok URL"
        placeholder="Paste a TikTok URL..."
        className="bg-input p-4 rounded-2xl font-medium text-foreground text-sm w-full"
      />
      <button className="rounded-3xl bg-primary mt-8 py-4 px-8 font-medium text-sm">
        Find a song
      </button>
    </form>
  );
});
