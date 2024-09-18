import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), reactScopedCssPlugin() as PluginOption, dts({ include: ['src'], rollupTypes: true })],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'@components': resolve(__dirname, 'src/components'),
			'@context': resolve(__dirname, 'src/context'),
			'@tests': resolve(__dirname, 'tests'),
			'@services': resolve(__dirname, 'src/services'),
			'@utils': resolve(__dirname, 'src/utils'),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/main.ts'),
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: [
				'react',
				'react/jsx-runtime',
				'i18next',
				'react-i18next',
				'zustand',
				'i18next-browser-languagedetector',
				'react-dom',
			],
		},
	},
});
