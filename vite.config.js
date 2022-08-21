import { sveltekit } from '@sveltejs/kit/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), basicSsl()],
	build: {
		target: 'es2020'
	},
	optimizeDeps: {
		esbuildOptions: {
			target: 'es2020'
		}
	},
	server: {
		https: true
	}
};

export default config;
