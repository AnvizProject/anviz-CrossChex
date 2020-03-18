/* eslint-disable eqeqeq */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
// 引入element ui自带语言包
import ElementUILocale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
Vue.use(VueI18n)
const DEFAULT_LANG = 'zh'
const LOCALE_KEY = 'DemoLanguage'
const locales = {
  zh: require('../../static/locales/zh.json'),
  en: require('../../static/locales/en.json')
}
const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  messages: locales
})
const UIlocales = {
  zh: zhLocale,
  en: enLocale
}
// 通过判断lang语言标志符来return先对应的语言
const setUIlocales = lang => {
  switch (lang) {
    case 'zh': return UIlocales.zh
    case 'en': return UIlocales.en
  }
}
export const setup = lang => {
  if (lang == undefined) {
    lang = window.localStorage.getItem(LOCALE_KEY)
    if (locales[lang] == undefined) {
      lang = DEFAULT_LANG
    }
  }
  window.localStorage.setItem(LOCALE_KEY, lang)
  Object.keys(locales).forEach(item => {
    document.body.classList.remove('lang-${item}')
  })
  document.body.classList.add('lang-${lang}')
  document.body.setAttribute('lang', lang)
  Vue.config.lang = lang
  i18n.locale = lang
  ElementUILocale.use(setUIlocales(lang)) // element ui 切换语言
}
setup()
export default i18n
