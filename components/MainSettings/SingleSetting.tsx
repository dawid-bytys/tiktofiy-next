import type { ChangeEvent } from 'react';

interface SingleSettingProps {
  readonly label?: string;
  readonly id: string;
  readonly inputType: 'password' | 'number';
  readonly min?: string;
  readonly placeholder: string;
  readonly ariaLabel: string;
  readonly className?: string;
  readonly onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SingleSetting = ({
  label,
  id,
  inputType,
  placeholder,
  ariaLabel,
  min,
  className,
  onChange,
}: SingleSettingProps) => {
  return (
    <div className={`flex flex-col ${typeof className === 'string' ? className : ''}`}>
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
        className="mt-3 text-center bg-input p-3 rounded-2xl font-medium text-foreground text-sm md:w-64"
        onChange={onChange}
      />
    </div>
  );
};
