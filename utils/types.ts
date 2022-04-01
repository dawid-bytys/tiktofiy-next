export type Theme = 'default' | 'carbon' | 'material' | 'metaverse';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export type AnyObject = Record<keyof any, unknown>;
export type EmptyObject = Record<any, never>;

export interface SeoProps {
  readonly title: string;
}

export interface ErrorAlertProps {
  readonly errorMessage: string;
}

export interface InputProps {
  readonly placeholder: string;
  readonly className: string;
}

export type RecognizedAudio =
  | {
      found: false;
    }
  | {
      found: true;
      artist: string;
      title: string;
      albumImage?: string;
    };
