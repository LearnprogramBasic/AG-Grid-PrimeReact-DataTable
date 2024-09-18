import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import ComponentA from '@/components/ComponentA';

describe('ComponentA', async () => {
	test('should render the component properly', async () => {
		const { asFragment } = render(<ComponentA text="hola" number={4} />);
		expect(asFragment).toBeDefined();
	});
});
