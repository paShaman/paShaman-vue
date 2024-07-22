import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginRequire from "vite-plugin-require";

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd(), '')};

  return defineConfig({
    base: process.env.BASE_URL,
    plugins: [
      vue(),
      vitePluginRequire.default()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  });
}
