// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/desk/work/%E9%A1%B9%E7%9B%AE/weblog/weblog-vue3/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/desk/work/%E9%A1%B9%E7%9B%AE/weblog/weblog-vue3/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/desk/work/%E9%A1%B9%E7%9B%AE/weblog/weblog-vue3/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/desk/work/%E9%A1%B9%E7%9B%AE/weblog/weblog-vue3/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/desk/work/%E9%A1%B9%E7%9B%AE/weblog/weblog-vue3/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///D:/desk/work/%E9%A1%B9%E7%9B%AE/weblog/weblog-vue3/vite.config.js";
var vite_config_default = defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      // 定义一个别名 '@'，该别名对应于当前 JavaScript 模块文件所在目录下的 'src' 目录的绝对文件路径。
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxkZXNrXFxcXHdvcmtcXFxcXHU5ODc5XHU3NkVFXFxcXHdlYmxvZ1xcXFx3ZWJsb2ctdnVlM1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZGVza1xcXFx3b3JrXFxcXFx1OTg3OVx1NzZFRVxcXFx3ZWJsb2dcXFxcd2VibG9nLXZ1ZTNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2Rlc2svd29yay8lRTklQTElQjklRTclOUIlQUUvd2VibG9nL3dlYmxvZy12dWUzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5cbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAgcHJveHk6IHtcbiAgICAgICcvYXBpJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXVxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXVxuICAgIH0pXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgIC8vIFx1NUI5QVx1NEU0OVx1NEUwMFx1NEUyQVx1NTIyQlx1NTQwRCAnQCdcdUZGMENcdThCRTVcdTUyMkJcdTU0MERcdTVCRjlcdTVFOTRcdTRFOEVcdTVGNTNcdTUyNEQgSmF2YVNjcmlwdCBcdTZBMjFcdTU3NTdcdTY1ODdcdTRFRjZcdTYyNDBcdTU3MjhcdTc2RUVcdTVGNTVcdTRFMEJcdTc2ODQgJ3NyYycgXHU3NkVFXHU1RjU1XHU3Njg0XHU3RUREXHU1QkY5XHU2NTg3XHU0RUY2XHU4REVGXHU1Rjg0XHUzMDAyXG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1QsU0FBUyxlQUFlLFdBQVc7QUFDdlYsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBTG1KLElBQU0sMkNBQTJDO0FBUXhPLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxNQUM5QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBO0FBQUEsTUFFTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
