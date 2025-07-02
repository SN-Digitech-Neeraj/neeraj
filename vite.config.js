// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { visualizer } from 'rollup-plugin-visualizer'

// export default defineConfig({
//   plugins: [
//     react(),
//     visualizer({ open: true }), // Generates a visual report
//   ],
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes('node_modules')) {
//             return 'vendor'; // Split vendor libraries
//           }
//           if (id.includes('src/components/')) {
//             return 'components'; // Split components into their own chunk
//           }
//         },
//       },
//     },
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [
    react({
      babel: {
        plugins: ['@babel/plugin-transform-react-jsx']
      }
    })
  ],
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
});
