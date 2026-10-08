import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import App from './App.vue';
import { setLocale } from './i18n.js';
export async function render(language) {
  setLocale(language);
  return renderToString(createSSRApp(App));
}
