import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import prettier from 'vite-plugin-prettier'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteTsConfigPaths(), prettier()],
})
