export type Theme = 'default' | 'carbon' | 'material' | 'metaverse';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export type AnyObject = Record<keyof any, unknown>;
export type EmptyObject = Record<keyof any, never>;

export interface SeoProps {
  readonly title: string;
}

export interface ErrorAlertProps {
  readonly errorMessage: string;
}

export type SongFound = {
  readonly isFound: true;
  readonly artist: string;
  readonly title: string;
  readonly albumImage: string;
};

type SongNotFound = {
  readonly isFound: false;
};

export type RecognitionResult = SongFound | SongNotFound;
