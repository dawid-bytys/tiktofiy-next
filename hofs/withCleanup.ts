import fs from 'fs';
import path from 'path';
import { generateRandomString } from 'utils/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

export const withCleanup = <T, S extends NextApiRequest, U extends NextApiResponse>(
  fn: (req: S, res: U, tempFile: string) => Promise<T>,
) => {
  return async (req: S, res: U) => {
    const tempFile = generateRandomString(8);
    await fn(req, res, tempFile);
    fs.unlinkSync(path.resolve('temp', tempFile));
  };
};
