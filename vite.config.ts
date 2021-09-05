import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig(
	{
		base: '',
		build: {
			outDir: 'docs',
		},
		plugins: [
			createVuePlugin(),
		],
	},
);
