import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig(
	{
		root: 'src/examples',
		plugins: [
			createVuePlugin(),
		],
	},
);
