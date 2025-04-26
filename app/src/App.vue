<script setup>
import { RouterView } from 'vue-router'
import FancyParticles from '@/components/FancyParticles.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

document.title = t('name');
</script>

<template>
    <FancyParticles></FancyParticles>
    <div class="font-zen mx-auto max-w-screen-xl py-12 px-6 md:py-16 md:px-12 lg:py-0">
        <RouterView></RouterView>
    </div>
</template>