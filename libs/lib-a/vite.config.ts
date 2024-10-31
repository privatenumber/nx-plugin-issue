import react from '@vitejs/plugin-react-swc';
import { peerDependencies } from './package.json';
import { sayHello } from '@squareup/util-a';
sayHello();

export default {
  build: {
    lib: {
      entry: 'src/Button/index.tsx',
      formats: ['es'],
    },
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: Object.keys(peerDependencies),
    },
  },
  plugins: [
    react(),
  ],
};
