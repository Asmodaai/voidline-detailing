import english from '../locales/en.json';
// Czech strings are the source keys. A full page navigation changes locale;
// the same components and data render both languages, including at build time.
let locale = typeof window !== 'undefined' && /^\/en(?:\/|$)/.test(window.location.pathname) ? 'en' : 'cs';
export const getLocale = () => locale;
export function setLocale(value) { locale = value === 'en' ? 'en' : 'cs'; }
export function t(source) {
  if (typeof source !== 'string' || locale === 'cs') return source;
  return english[source.replace(/\s+/g, ' ').trim()] ?? source;
}
const cache = new WeakMap();
export function localize(value) {
  if (typeof value === 'string') return t(value);
  if (!value || typeof value !== 'object') return value;
  if (!cache.has(value)) cache.set(value, new Proxy(value, {
    get(target, property, receiver) { return localize(Reflect.get(target, property, receiver)); }
  }));
  return cache.get(value);
}
export function languagePath(language) { return language === 'en' ? '/en/' : '/'; }
export function sectionHash() {
  if (typeof window === 'undefined') return '';
  if (window.location.hash) return window.location.hash;
  const sections = [...document.querySelectorAll('main section[id]')];
  const current = sections.filter(section => section.getBoundingClientRect().top <= 140).at(-1);
  return current ? '#' + current.id : '';
}
export function initializeFormValidation() {
  // Keep native browser constraints; supply messages in the page language.
  document.addEventListener('invalid', event => {
    const field = event.target;
    if (!field.setCustomValidity) return;
    const validity = field.validity;
    const message = validity.valueMissing ? t('Vyplňte toto pole.')
      : validity.typeMismatch ? t('Zadejte platnou e-mailovou adresu.')
      : validity.rangeUnderflow && field.type === 'date' ? t('Vyberte datum od zítřka.')
      : field.title || t('Zkontrolujte zadanou hodnotu.');
    field.setCustomValidity(message);
  }, true);
  for (const name of ['input', 'change']) document.addEventListener(name, event => event.target.setCustomValidity?.(''));
}
