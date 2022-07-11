declare namespace NodeJS {
	interface ProcessEnv {
		readonly NODE_ENV: 'development' | 'production' | 'testing';
		readonly SHAZAM_API_KEY: string;
	}
}
