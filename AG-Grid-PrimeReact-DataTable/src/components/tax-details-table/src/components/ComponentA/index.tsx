import type { ExampleChildProps } from './props.type';
import type { FC } from 'react';
import './index.scoped.scss';

const ComponentA: FC<ExampleChildProps> = example => {
	return (
		<>
			<span className="fund">Esto es Componente A</span>
			<p>
				Recuerda leer el README del proyecto para completar la información necesario y saber mas sobre como
				funciona este proyecto
			</p>
			<h4>Estamos usando el language: {import.meta.env.VITE_LANG || 'es-ES'}</h4>
			<h5>Today</h5>
			<pre>
				{example.number} - {example.text}
			</pre>
		</>
	);
};

export default ComponentA;
export type * from './props.type';
