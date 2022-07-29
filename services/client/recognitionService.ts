import axios from 'axios';
import { SONGS_RECOGNITION_BASE_URL } from 'utils/constants';
import { isApiError } from 'utils/typeguards';
import type { RecognitionResult, RequestData } from 'utils/types';

export const recognizeSong = async (body: RequestData) => {
  try {
    const { data } = await axios.post<RecognitionResult>(SONGS_RECOGNITION_BASE_URL, body);
    return data;
  } catch (err) {
    if (isApiError(err)) {
      throw new Error(err.response.data.message);
    }
    throw new Error('Unexpected error has occured');
  }
};
