<script setup>
import GithubIcon from '@/assets/icons/github.svg'
import LinkedInIcon from '@/assets/icons/linkedin.svg'
import TelegramIcon from '@/assets/icons/telegram.svg'
</script>

<template>
    <ul class="flex items-center" aria-label="Social media">
        <li class="mr-5 shrink-0 text-xs flex gap-4">
            <a class="block hover:text-slate-200" href="https://t.me/fdenisdev" target="_blank"
                rel="noreferrer noopener" aria-label="Telegram (opens in a new tab)" title="Telegram">
                <span class="sr-only">Telegram</span>
                <TelegramIcon class="icon media-icon transition-ease h-6 w-6 text-slate-100"></TelegramIcon>
            </a>
            <a class="block hover:text-slate-200" href="https://github.com/DenFedulov" target="_blank"
                rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                <span class="sr-only">GitHub</span>
                <GithubIcon class="icon media-icon transition-ease h-6 w-6 text-slate-100"></GithubIcon>
            </a>
            <a class="block hover:text-slate-200" href="https://www.linkedin.com/in/denis-fedulov-765a98252/"
                target="_blank" rel="noreferrer noopener" aria-label="Linked In (opens in a new tab)" title="LinkedIn">
                <span class="sr-only">Linked In</span>
                <LinkedInIcon class="icon media-icon transition-ease h-6 w-6 text-slate-100"></LinkedInIcon>
            </a>
        </li>
    </ul>
</template>