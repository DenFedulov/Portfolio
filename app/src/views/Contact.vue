<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import LanguagePicker from '@/components/LanguagePicker.vue'
import Link from '@/components/Link.vue'

import GithubIcon from '@/assets/icons/github.svg'
import LinkedInIcon from '@/assets/icons/linkedin.svg'
import TelegramIcon from '@/assets/icons/telegram.svg'
import LeftArrow from '@/assets/icons/left-arrow.svg'

</script>

<template>
    <div class="flex flex-col items-center gap-6">
        <header class="group flex flex-col  lg:flex-row gap-3 justify-between items-center lg:py-6 w-full">
            <h1 class="flex items-center gap-2 font-zen-bold text-xl w-fit">
                <LeftArrow class="icon h-3 w-3 group-hover:-translate-x-3 transition-ease"></LeftArrow>
                <RouterLink to="/">{{ t("name") }}</RouterLink>
            </h1>
            <LanguagePicker></LanguagePicker>
        </header>
        <main class="flex flex-col items-center gap-6 w-full text-center">
            <h1 class="font-zen-bold text-4xl">{{ t("contact.title") }}</h1>
            <p class="flex items-center gap-2">
                <a class="block" href="https://t.me/fdenisdev" target="_blank" rel="noreferrer noopener"
                    aria-label="Telegram (opens in a new tab)" title="Telegram">
                    <span class="sr-only">Telegram</span>
                    <TelegramIcon class="icon transition-ease h-12 w-12 text-[#249bd7]"></TelegramIcon>
                </a>
                <span class="font-zen-medium text-xl">{{ t("contact.preferred") }}</span>
            </p>
            <p class="flex items-center gap-2">
                <a class="block" href="https://www.linkedin.com/in/denis-fedulov-765a98252/" target="_blank"
                    rel="noreferrer noopener" aria-label="Linked In (opens in a new tab)" title="Linked In">
                    <span class="sr-only">Linked In</span>
                    <LinkedInIcon class="icon transition-ease h-12 w-12 text-[#0a66c2]"></LinkedInIcon>
                </a>
                <Link href="https://hh.ru/resume/65cbb9a0ff0b56ff390039ed1f4433656e6977">HeadHunter</Link>
                <span class="pl-2 font-zen-medium text-xl">{{ t("contact.socials") }}</span>
            </p>
            <p class="flex flex-col items-center gap-2">
                <h2 class="font-zen-bold text-2xl">{{ t("contact.mail") }}</h2>
                <Link class="text-xl" href="mailto:den.fedulov.1999@mail.ru">den.fedulov.1999@mail.ru</Link>
            </p>
        </main>
    </div>
</template>