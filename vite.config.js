import { resolve } from 'path'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
	base: './',
	build: {
		outDir: 'docs',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				add: resolve(__dirname, 'add-ad/index.html'),
			},
		},
	},
	plugins: [
		ViteImageOptimizer({
			dir: 'public',
			outDir: 'docs',
			png: {
				quality: 80,
			},
			jpeg: {
				quality: 80,
			},
			jpg: {
				quality: 80,
			},
			webp: {
				lossless: true,
			},
		}),
	],
})
