import React from 'react';
import { createRoot } from 'react-dom/client';
import Grid from './components/Grid';

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		{/* <ComponentA text={'hola'} number={4} /> */}
		<Grid />
	</React.StrictMode>
);
