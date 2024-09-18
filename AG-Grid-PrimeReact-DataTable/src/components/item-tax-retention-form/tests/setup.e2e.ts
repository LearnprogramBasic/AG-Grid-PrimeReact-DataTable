import { beforeEach } from 'vitest';
import dns from 'node:dns';

beforeEach(() => {
	dns.setDefaultResultOrder('verbatim');
});
