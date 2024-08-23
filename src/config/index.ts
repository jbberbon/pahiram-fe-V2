const dev = process.env.NODE_ENV !== 'production';
export const PAHIRAM_BACKEND_API_URL = process.env.PAH_BACKEND;

export const server = dev ? process.env.PAH_BACKEND : 'https://your_deployment.server.com';