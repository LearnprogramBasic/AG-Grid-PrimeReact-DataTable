import '@services/i18n';
import { FC, Suspense, lazy } from 'react';
import './global.scss';
import './App.scoped.scss';
import { SingleSpaApplicationProps } from './typings/types';

const RootView = lazy(() => import('@pages/Root'));

const App: FC<SingleSpaApplicationProps> = spaPayload => {
	const { title, description, other } = spaPayload;
	console.log(title, description, other);
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<RootView />
			</Suspense>
		</div>
	);
};

export default App;
