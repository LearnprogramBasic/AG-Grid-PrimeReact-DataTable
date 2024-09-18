import { configDefaults, defineConfig } from 'vitest/config';
import { resolve } from 'path';
import dns from 'node:dns';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const timeout = process.env.CI ? 50000 : 20000;
const __dirname = dirname(fileURLToPath(import.meta.url));

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
	test: {
		name: 'e2e tests',
		globals: true,
		include: ['tests/e2e/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
		exclude: [...configDefaults.exclude],
		testTimeout: timeout,
		hookTimeout: timeout,
		setupFiles: './tests/setup.e2e.ts',
		coverage: {
			clean: true,
			cleanOnRerun: true,
			provider: 'istanbul',
			reporter: ['html'],
		},
	},
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
});
