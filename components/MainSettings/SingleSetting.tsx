import { memo } from 'react';
import type { ChangeEvent } from 'react';

interface SingleSettingProps {
  readonly label?: string;
  readonly id: string;
  readonly inputType: 'password' | 'number';
  readonly placeholder: string;
  readonly ariaLabel: string;
  readonly className?: string;
  readonly onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SingleSetting = memo<SingleSettingProps>(
  ({ label, id, inputType, placeholder, ariaLabel, className, onChange }) => {
    return (
      <div className={className}>
        {typeof label === 'string' && (
          <label htmlFor={id} className="flex items-center justify-center text-center">
            {label}
          </label>
        )}
        <input
          type={inputType}
          placeholder={placeholder}
          aria-label={ariaLabel}
          id={id}
          className="mt-3 text-center bg-input p-3 rounded-2xl font-medium text-foreground text-sm w-full"
          onChange={onChange}
        />
      </div>
    );
  },
);
