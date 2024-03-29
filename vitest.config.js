import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    reporters: 'verbose',
    setupFiles: ['/utils/test.utils.js'],
    exclude: ['./2022'],
  },
});
