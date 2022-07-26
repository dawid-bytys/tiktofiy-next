import { url } from '@ffmpeg-installer/ffmpeg';
import { useQuery } from '@tanstack/react-query';
import { recognizeSong } from 'services/client/recognitionService';
import type { UseQueryResult } from '@tanstack/react-query';
import type { RecognitionResult, RequestData } from 'utils/types';

export const useRecognitionQuery = (body: RequestData) => {
  const result: UseQueryResult<RecognitionResult, Error> = useQuery(
    ['recognition'],
    () => recognizeSong(body),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  return result;
};
