import { defineConfig, loadEnv, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return {
		plugins: [react(), reactScopedCssPlugin() as PluginOption],
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
				'@assets': resolve(__dirname, 'src/assets'),
				'@components': resolve(__dirname, 'src/components'),
				'@context': resolve(__dirname, 'src/context'),
				'@pages': resolve(__dirname, 'src/pages'),
				'@tests': resolve(__dirname, 'tests'),
				'@services': resolve(__dirname, 'src/services'),
				'@utils': resolve(__dirname, 'src/utils'),
			},
		},
		build: {
			rollupOptions: {
				input: resolve(__dirname, 'src/main.tsx'),
				preserveEntrySignatures: 'strict',
				output: {
					format: 'system',
					entryFileNames: 'main.js',
				},
			},
		},
		server: {
			host: env.VITE_HOST ? env.VITE_HOST : undefined,
		},
		preview: {
			port: env.VITE_PORT ? parseInt(env.VITE_PORT) : undefined,
			host: env.VITE_HOST ? env.VITE_HOST : undefined,
		},
		experimental: {
			renderBuiltUrl() {
				return { relative: true };
			},
		},
	};
});
