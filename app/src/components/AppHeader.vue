<script setup>
import { defineProps } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({

});

import { RouterLink } from 'vue-router'
import LanguagePicker from '@/components/LanguagePicker.vue'
import SocialMediaIcons from '@/components/SocialMediaIcons.vue'

import LeftArrow from '@/assets/icons/left-arrow.svg'

</script>

<template>
    <header class="group flex flex-col  lg:flex-row gap-3 justify-between items-center lg:py-6 w-full">
        <h1 class="flex items-center gap-2 font-zen-bold text-xl w-fit">
            <LeftArrow class="icon h-3 w-3 group-hover:-translate-x-3 transition-ease"></LeftArrow>
            <RouterLink to="/">{{ t("name") }}</RouterLink>
        </h1>
        <SocialMediaIcons></SocialMediaIcons>
        <LanguagePicker></LanguagePicker>
    </header>
</template>