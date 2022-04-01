import type { RecognitionResult, SongFound } from './types';

export const isSongFound = (result: RecognitionResult): result is SongFound => {
  return result.isFound;
};
