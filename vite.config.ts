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
    host: '0.0.0.0'   ,
    proxy:{
      '/aaa':{
        target:'blob:https://www.bilibili.com/37f4bc32-3976-4d66-b5a9-bf5077218263',
        changeOrigin:true,
        ws: true,
          rewrite: (path) => path.replace(new RegExp('^' + '/aaa'), '')
      }
    }
  },
  resolve:{
    alias:{
      '@' : path.resolve(__dirname,'./src')
    }
  }
})
