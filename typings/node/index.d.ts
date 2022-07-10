declare module 'node' {
	namespace NodeJS {
		interface ProcessEnv {
			readonly NODE_ENV: 'development' | 'production' | 'test';
			readonly SHAZAM_API_KEY: string;
		}
	}
}
