<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale, availableLocales } = useI18n();
const currentLocale = ref(locale.value);
const changeLanguage = () => {
    locale.value = currentLocale.value;
    localStorage.setItem("locale", currentLocale.value);
    document.title = t('name');
}
</script>

<template>
    <div class="flex flex-col w-fit">
        <label class="font-zen-medium">{{ t('select-language') }}</label>
        <select name="select language" v-model="currentLocale" @change="changeLanguage">
            <option v-for="locale in availableLocales" :key="locale" :value="locale">
                {{ locale.toUpperCase() }}
            </option>
        </select>
    </div>
</template>