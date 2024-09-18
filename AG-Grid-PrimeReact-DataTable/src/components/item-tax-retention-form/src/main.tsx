import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client';
import rootComponent from './App';
import singleSpaReact from 'single-spa-react';

export const { bootstrap, mount, unmount } = singleSpaReact({
	React,
	ReactDOM,
	ReactDOMClient,
	rootComponent,
	errorBoundary(_err, _info, _props) {
		// https://reactjs.org/docs/error-boundaries.html
		return <div>This renders when a catastrophic error occurs</div>;
	},
});
