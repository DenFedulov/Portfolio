import { createI18n } from 'vue-i18n';

const messages = {};
const localeFiles = import.meta.glob('./lang/*.json', { eager: true });

for (const [path, module] of Object.entries(localeFiles)) {
  const locale = path.split('/').pop().replace('.json', '');
  messages[locale] = module.default;
}

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem("locale") || navigator.language.split('-')[0] || 'en',
    fallbackLocale: 'en',
    messages,
});

export default i18n