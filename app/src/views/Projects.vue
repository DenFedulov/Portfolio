<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import AppHeader from '@/components/AppHeader.vue'
import Link from '@/components/Link.vue'

</script>

<template>
    <div class="flex flex-col items-center gap-6">
        <AppHeader></AppHeader>
        <main class="flex flex-col items-center gap-6 w-full">
            <h1 class="font-zen-bold text-4xl">{{ t("projects.title") }}</h1>
            <table class="mt-6 table-auto w-full lg:text-left">
                <thead class="font-zen-bold text-xl">
                    <tr>
                        <th class="pr-2">{{ t("projects.year") }}</th>
                        <th class="pr-2">{{ t("projects.name") }}</th>
                        <th class="hidden lg:table-cell pr-2">{{ t("projects.at") }}</th>
                        <th class="hidden lg:table-cell pr-2">{{ t("projects.type") }}</th>
                        <th class="hidden lg:table-cell pr-2">{{ t("projects.tools") }}</th>
                        <th class="pr-2">{{ t("projects.link") }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-row">
                        <th class="app-table-cell">2025</th>
                        <th class="app-table-cell">FileTagManager</th>
                        <th class="hidden lg:table-cell app-table-cell"></th>
                        <th class="hidden lg:table-cell app-table-cell">{{ t("projects.types.personal") }}</th>
                        <th class="hidden lg:table-cell app-table-cell">
                            <ul class="flex flex-wrap gap-2">
                                <li>
                                    <div class="tag font-zen-bold">
                                        Cmake
                                    </div>
                                </li>
                                <li>
                                    <div class="tag font-zen-bold">
                                        C++
                                    </div>
                                </li>
                                <li>
                                    <div class="tag font-zen-bold">
                                        SQLite
                                    </div>
                                </li>
                            </ul>
                        </th>
                        <th class="app-table-cell">
                            <Link class="" href="https://github.com/DenFedulov/FileTagManager/">github.com</Link>
                        </th>
                    </tr>
                    <tr class="table-row">
                        <th class="app-table-cell">2025</th>
                        <th class="app-table-cell">STT Tbank + AmoCRM Integration</th>
                        <th class="hidden lg:table-cell app-table-cell">Sales Evolution</th>
                        <th class="hidden lg:table-cell app-table-cell">{{ t("projects.types.company") }}</th>
                        <th class="hidden lg:table-cell app-table-cell">
                            <ul class="flex flex-wrap gap-2">
                                <li>
                                    <div class="tag font-zen-bold">
                                        Python
                                    </div>
                                </li>
                            </ul>
                        </th>
                        <th class="app-table-cell"></th>
                    </tr>
                    <tr class="table-row">
                        <th class="app-table-cell">2025</th>
                        <th class="app-table-cell">TandemTrack Распределение сделок</th>
                        <th class="hidden lg:table-cell app-table-cell">Sales Evolution</th>
                        <th class="hidden lg:table-cell app-table-cell">{{ t("projects.types.client") }}</th>
                        <th class="hidden lg:table-cell app-table-cell">
                            <ul class="flex flex-wrap gap-2">
                                <li>
                                    <div class="tag font-zen-bold">
                                        PHP
                                    </div>
                                </li>
                                <li>
                                    <div class="tag font-zen-bold">
                                        CSS
                                    </div>
                                </li>
                                <li>
                                    <div class="tag font-zen-bold">
                                        jQuery
                                    </div>
                                </li>
                                <li>
                                    <div class="tag font-zen-bold">
                                        MariaDB
                                    </div>
                                </li>
                            </ul>
                        </th>
                        <th class="app-table-cell">
                        </th>
                    </tr>
                    <tr class="table-row">
                        <th class="app-table-cell">2024</th>
                        <th class="app-table-cell">WoodGrand-invoice</th>
                        <th class="hidden lg:table-cell app-table-cell">Sales Evolution</th>
                        <th class="hidden lg:table-cell app-table-cell">{{ t("projects.types.client") }}</th>
                        <th class="hidden lg:table-cell app-table-cell">
                            <ul class="flex flex-wrap gap-2">
                                <li>
                                    <div class="tag font-zen-bold">
                                        JavaScript
                                    </div>
                                </li>
                                <li>
                                    <div class="tag font-zen-bold">
                                        CSS
                                    </div>
                                </li>
                                <li>
                                    <div class="tag font-zen-bold">
                                        PHP
                                    </div>
                                </li>
                            </ul>
                        </th>
                        <th class="app-table-cell">
                        </th>
                    </tr>
                    <tr class="table-row">
                        <th class="app-table-cell">2024</th>
                        <th class="app-table-cell">EstateLiga Распределение звонков</th>
                        <th class="hidden lg:table-cell app-table-cell">Sales Evolution</th>
                        <th class="hidden lg:table-cell app-table-cell">{{ t("projects.types.client") }}</th>
                        <th class="hidden lg:table-cell app-table-cell">
                            <ul class="flex flex-wrap gap-2">
                                <li>
                                    <div class="tag font-zen-bold">
                                        JavaScript
                                    </div>
                                </li>
                                <li>
                                    <div class="tag font-zen-bold">
                                        CSS
                                    </div>
                                </li>
                                <li>
                                    <div class="tag font-zen-bold">
                                        PHP
                                    </div>
                                </li>
                            </ul>
                        </th>
                        <th class="app-table-cell">
                        </th>
                    </tr>
                    <tr class="table-row">
                        <th class="app-table-cell">2024</th>
                        <th class="app-table-cell">Интеграция с сайтом</th>
                        <th class="hidden lg:table-cell app-table-cell">Sales Evolution</th>
                        <th class="hidden lg:table-cell app-table-cell">{{ t("projects.types.company") }}</th>
                        <th class="hidden lg:table-cell app-table-cell">
                            <ul class="flex flex-wrap gap-2">
                                <li>
                                    <div class="tag font-zen-bold">
                                        PHP
                                    </div>
                                </li>
                                <li>
                                    <div class="tag font-zen-bold">
                                        Bootstrap
                                    </div>
                                </li>
                                <li>
                                    <div class="tag font-zen-bold">
                                        Vue.js
                                    </div>
                                </li>
                                <li>
                                    <div class="tag font-zen-bold">
                                        MariaDB
                                    </div>
                                </li>
                            </ul>
                        </th>
                        <th class="app-table-cell">
                            <Link href="https://dev.salesevolution.ru/pub/source-connector/indexV2.php">
                            source-connector</Link>
                        </th>
                    </tr>
                    <tr class="table-row">
                        <th class="app-table-cell">2024</th>
                        <th class="app-table-cell">API Integration Aerodar-Ozon</th>
                        <th class="hidden lg:table-cell app-table-cell">Sales Evolution</th>
                        <th class="hidden lg:table-cell app-table-cell">{{ t("projects.types.client") }}</th>
                        <th class="hidden lg:table-cell app-table-cell">
                            <ul class="flex flex-wrap gap-2">
                                <li>
                                    <div class="tag font-zen-bold">
                                        PHP
                                    </div>
                                </li>
                                <li>
                                    <div class="tag font-zen-bold">
                                        Bootstrap
                                    </div>
                                </li>
                                <li>
                                    <div class="tag font-zen-bold">
                                        jQuery
                                    </div>
                                </li>
                                <li>
                                    <div class="tag font-zen-bold">
                                        MySQL
                                    </div>
                                </li>
                            </ul>
                        </th>
                        <th class="app-table-cell">
                        </th>
                    </tr>
                    <tr class="table-row">
                        <th class="app-table-cell">2022</th>
                        <th class="app-table-cell">DenFedulov.github.io (old portfolio)</th>
                        <th class="hidden lg:table-cell app-table-cell"></th>
                        <th class="hidden lg:table-cell app-table-cell">{{ t("projects.types.personal") }}</th>
                        <th class="hidden lg:table-cell app-table-cell">
                            <ul class="flex flex-wrap gap-2">
                                <li>
                                    <div class="tag font-zen-bold">
                                        HTML
                                    </div>
                                </li>
                                <li>
                                    <div class="tag font-zen-bold">
                                        CSS
                                    </div>
                                </li>
                                <li>
                                    <div class="tag font-zen-bold">
                                        JavaScript
                                    </div>
                                </li>
                            </ul>
                        </th>
                        <th class="app-table-cell">
                            <Link class="" href="https://denfedulov.github.io/">denfedulov.github.io</Link>
                        </th>
                    </tr>
                </tbody>
            </table>
        </main>

    </div>
</template>