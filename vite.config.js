import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    open: true, // Автоматически открывать браузер при запуске сервера
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
    },
  },
  base: '/drinkMaster-Team-1/',
});