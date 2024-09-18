import { type Browser, type Page, expect, chromium, firefox, webkit } from '@playwright/test';
import { afterAll, beforeAll, describe, test } from 'vitest';
import { type ViteDevServer, createServer } from 'vite';
import { AddressInfo } from 'net';
import { resolve } from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

describe('Chromium Browser App mount test', () => {
	let server: ViteDevServer;
	let page: Page;
	let browser: Browser;
	let baseURL: string;
	beforeAll(async () => {
		server = await createServer({
			configFile: resolve(__dirname, '../../vite.config.ts'),
			server: {
				host: 'localhost',
				port: 3000,
			},
		});
		server.listen();
		browser = await chromium.launch();
		const context = await browser.newContext();
		page = await context.newPage();
		const address = server.httpServer
			? (server.httpServer.address() as AddressInfo).family === 'ipv4'
				? (server.httpServer.address() as AddressInfo)
				: 'localhost'
			: 'localhost';
		const port = server.httpServer ? (server.httpServer.address() as AddressInfo).port : 3000;
		baseURL = `http://${address}:${port}`;
	});

	afterAll(async () => {
		await browser.close();
		await server.close();
	});

	test('Mounts the app', async () => {
		await page.goto(`${baseURL}/`);

		await expect(page).toHaveTitle('Vite + React + TS');
	});
});

describe('Firefox Browser App mount test', () => {
	let server: ViteDevServer;
	let page: Page;
	let browser: Browser;
	let baseURL: string;
	beforeAll(async () => {
		server = await createServer({
			configFile: resolve(__dirname, '../../vite.config.ts'),
			server: {
				host: 'localhost',
				port: 3100,
			},
		});
		server.listen();
		browser = await firefox.launch();
		const context = await browser.newContext();
		page = await context.newPage();
		const address = server.httpServer
			? (server.httpServer.address() as AddressInfo).family === 'ipv4'
				? (server.httpServer.address() as AddressInfo)
				: 'localhost'
			: 'localhost';
		const port = server.httpServer ? (server.httpServer.address() as AddressInfo).port : 3100;
		baseURL = `http://${address}:${port}`;
	});

	afterAll(async () => {
		await browser.close();
		await server.close();
	});

	test('Mounts the app', async () => {
		await page.goto(`${baseURL}/`);

		await expect(page).toHaveTitle('Vite + React + TS');
	});
});

describe('Webkit Browser App mount test', () => {
	let server: ViteDevServer;
	let page: Page;
	let browser: Browser;
	let baseURL: string;
	beforeAll(async () => {
		server = await createServer({
			configFile: resolve(__dirname, '../../vite.config.ts'),
			server: {
				host: 'localhost',
				port: 3200,
			},
		});
		server.listen(3000);
		browser = await webkit.launch();
		const context = await browser.newContext();
		page = await context.newPage();
		const address = server.httpServer
			? (server.httpServer.address() as AddressInfo).family === 'ipv4'
				? (server.httpServer.address() as AddressInfo)
				: 'localhost'
			: 'localhost';
		const port = server.httpServer ? (server.httpServer.address() as AddressInfo).port : 3200;
		baseURL = `http://${address}:${port}`;
	});

	afterAll(async () => {
		await browser.close();
		await new Promise<void>((resolve, reject) => {
			server.httpServer?.close(error => (error ? reject(error) : resolve()));
		});
	});

	test('Mounts the app', async () => {
		await page.goto(`${baseURL}/`);

		await expect(page).toHaveTitle('Vite + React + TS');
	});
});
