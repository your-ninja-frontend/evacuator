import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		outDir: 'docs',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				add: resolve(__dirname, 'add-ad/index.html'),
			},
		},
	},
})
