import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register';
import SvgIcon from './components/SvgIcon.vue'
import i18n from './i18n/index' //引入配置的语言
// Element Plus全局配置国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
(window as any)._AMapSecurityConfig = {
  securityJsCode:'e9720eca18d8a424e3b590d4dc607288'
}

app.use(ElementPlus, {
  locale: en,
});
app.use(router)
app.use(i18n)

app.component('SvgIcon',SvgIcon)

app.mount('#app')
