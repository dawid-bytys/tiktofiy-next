export function getConfig(name: 'NODE_ENV'): 'production' | 'development' | 'testing';
export function getConfig(name: string): string;
export function getConfig(name: string): string {
  const value = process.env[name];
  if (value === undefined) {
    throw new Error(`Cannot find environmental variable: ${name}`);
  }
  return value;
}
