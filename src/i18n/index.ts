//index.ts
import { createI18n } from "vue-i18n";
import en_US from './en'
import zh_CN from './zh';
 
const i18n = createI18n({
    legacy: false, // 使用 Composition API 模式
    locale: "zh_CN", // 语言库
    messages: {
      zh_CN,
      en_US,
    },
    silentTranslationWarn:true,
    silentFallbackWarn:true,
    missingWarn:true,
    fallbackWarn:true
  });
 
export default i18n