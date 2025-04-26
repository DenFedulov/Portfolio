import './assets/main.css'

import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)

app.use(i18n)
watch(
    () => i18n.global.locale,
    (newLocale) => {
        document.documentElement.lang = newLocale
    },
    { immediate: true }
)
app.use(router)

app.mount('#app')
