import autoprefixer from 'autoprefixer';
import presetEnv from 'postcss-preset-env';
import cssNano from 'cssnano';

export default {
	plugins: [autoprefixer({}), presetEnv({}), cssNano({})],
};
