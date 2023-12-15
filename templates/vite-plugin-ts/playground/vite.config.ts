import { defineConfig } from 'vite';
import { plugin } from 'vite-plugin-ts-demo';

export default defineConfig({
  plugins: [plugin()],
});
