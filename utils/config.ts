import dotenv from 'dotenv';
dotenv.config({ path: 'prod.env' });

export function getConfig(name: 'NODE_ENV'): 'production' | 'development' | 'testing';
export function getConfig(name: string): string;
export function getConfig(name: string): string {
  const val = process.env[name];

  switch (name) {
    case 'NODE_ENV':
      return val || 'development';
    case 'PORT':
      return val || '3000';
    case 'SHAZAM_API_KEY':
      return val || '';
  }

  if (!val) {
    throw new Error(`Cannot find environmental variable: ${name}`);
  }

  return val;
}
