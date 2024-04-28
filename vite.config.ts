import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")], //路径
      symbolId: "icon-[dir]-[name]"
    })
  ],
  server: {                
    host: '0.0.0.0'   
  },
  resolve:{
    alias:{
      '@' : path.resolve(__dirname,'./src')
    }
  }
})