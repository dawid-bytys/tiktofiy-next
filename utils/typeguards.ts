import axios from 'axios';
import type { AxiosError } from 'axios';
import type { ErrorResponse, OneRequired, RecognitionResult, SongFound } from 'utils/types';

export const isApiError = (
  err: unknown,
): err is OneRequired<AxiosError<ErrorResponse>, 'response'> => {
  if (axios.isAxiosError(err) && err.response) {
    const { data } = err.response;

    return !!(
      typeof data === 'object' &&
      data !== null &&
      !Array.isArray(data) &&
      'message' in data
    );
  }

  return false;
};

export const isSongFound = (result: RecognitionResult): result is SongFound => {
  return result.isFound;
};
