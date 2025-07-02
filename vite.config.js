import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Uncomment if you want to visualize the bundle size
// import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  base: '/',
  plugins: [
    react({
      // Optional: If you want to use Babel plugins
      babel: {
        plugins: ['@babel/plugin-transform-react-jsx'],
      },
    }),
    // Uncomment to visualize the bundle size
    // visualizer({ open: true }),
  ],
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  build: {
    chunkSizeWarningLimit: 5000, // Increase warning limit if needed
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor libraries into a separate chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }

          // Split components into their own chunks based on folder structure
          if (id.includes('src/components/pages/category')) {
            return 'category';
          }
          if (id.includes('src/components/pages/order')) {
            return 'order';
          }
          if (id.includes('src/components/pages/user_management')) {
            return 'user-management';
          }
          if (id.includes('src/components/pages/business_management')) {
            return 'business-management';
          }
          if (id.includes('src/components/pages/payments')) {
            return 'payments';
          }
          if (id.includes('src/components/pages/legal-pages')) {
            return 'legal-pages';
          }
          if (id.includes('src/components/pages/import_export')) {
            return 'import-export';
          }

          // Fallback for other chunks
          return undefined;
        },
      },
    },
  },
});
