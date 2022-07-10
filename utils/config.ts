export function getConfig(name: 'NODE_ENV'): 'production' | 'development' | 'testing';
export function getConfig(name: string): string;
export function getConfig(name: string): string {
	const val = process.env[name];
	if (!val) {
		throw new Error(`Cannot find environmental variable: ${name}`);
	}

	return val;
}
