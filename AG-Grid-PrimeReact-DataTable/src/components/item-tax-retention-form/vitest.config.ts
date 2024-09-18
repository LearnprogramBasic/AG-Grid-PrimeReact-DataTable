import { configDefaults, defineConfig } from 'vitest/config';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [react()],
	test: {
		name: 'item-tax-retention-form parcel - unit tests',
		globals: true,
		environment: 'jsdom',
		setupFiles: './tests/setup.ts',
		include: ['tests/unit/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
		exclude: [...configDefaults.exclude],
		coverage: {
			all: true,
			include: ['src/**/*.{ts,tsx}'],
			clean: true,
			cleanOnRerun: true,
			provider: 'istanbul', // or 'v8',
			reporter: ['text', 'json', 'html'],
		},
	},
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
});
