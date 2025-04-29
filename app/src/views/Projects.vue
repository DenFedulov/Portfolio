<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import AppHeader from '@/components/AppHeader.vue'
import ProjectsTableRow from '@/components/ProjectsTableRow.vue'

</script>

<template>
    <div class="flex flex-col items-center gap-6">
        <AppHeader></AppHeader>
        <main class="flex flex-col items-center gap-6 w-full">
            <h1 class="font-zen-bold text-4xl">{{ t("projects.title") }}</h1>
            <table class="mt-6 table-auto w-full lg:text-left">
                <thead class="font-zen-bold">
                    <tr>
                        <th class="pr-4">{{ t("projects.year") }}</th>
                        <th class="pr-4">{{ t("projects.name") }}</th>
                        <th class="hidden lg:table-cell pr-4">{{ t("projects.at") }}</th>
                        <th class="hidden lg:table-cell pr-4">{{ t("projects.type") }}</th>
                        <th class="hidden lg:table-cell pr-4">{{ t("projects.tools") }}</th>
                        <th class="hidden sm:table-cell pr-4">{{ t("projects.link") }}</th>
                    </tr>
                </thead>
                <tbody class="text-wrap">
                    <ProjectsTableRow year="2025" name="FileTagManager" at="" :type="t('projects.types.personal')"
                        :tags="['Cmake', 'C++', 'SQLite']" linkName="github.com"
                        link="https://github.com/DenFedulov/FileTagManager/"></ProjectsTableRow>

                    <ProjectsTableRow year="2025" name="STT Tbank + AmoCRM Integration" at="Sales Evolution"
                        :type="t('projects.types.company')" :tags="['Python']" linkName="" link=""></ProjectsTableRow>

                    <ProjectsTableRow year="2025" name="TandemTrack Распределение сделок" at="Sales Evolution"
                        :type="t('projects.types.client')" :tags="['PHP', 'CSS', 'jQuery', 'MariaDB']" linkName=""
                        link=""></ProjectsTableRow>

                    <ProjectsTableRow year="2024" name="WoodGrand-invoice" at="Sales Evolution"
                        :type="t('projects.types.client')" :tags="['JavaScript', 'CSS', 'PHP', 'MariaDB']" linkName=""
                        link=""></ProjectsTableRow>

                    <ProjectsTableRow year="2024" name="EstateLiga Распределение звонков" at="Sales Evolution"
                        :type="t('projects.types.client')" :tags="['PHP', 'MariaDB']" linkName="" link="">
                    </ProjectsTableRow>

                    <ProjectsTableRow year="2024" name="Интеграция с сайтом" at="Sales Evolution"
                        :type="t('projects.types.company')" :tags="['PHP', 'Bootstrap', 'Vue.js', 'MariaDB']"
                        linkName="source-connector"
                        link="https://dev.salesevolution.ru/pub/source-connector/indexV2.php">
                    </ProjectsTableRow>

                    <ProjectsTableRow year="2024" name="API Integration Aerodar-Ozon" at="Sales Evolution"
                        :type="t('projects.types.client')" :tags="['PHP', 'Bootstrap', 'jQuery', 'MySQL']" linkName="" link="">
                    </ProjectsTableRow>

                    <ProjectsTableRow year="2022" name="DenFedulov.github.io (old portfolio)" at="" :type="t('projects.types.personal')"
                        :tags="['HTML', 'CSS', 'JavaScript']" linkName="denfedulov.github.io"
                        link="https://denfedulov.github.io/"></ProjectsTableRow>
                </tbody>
            </table>
            <div class="h-32"></div>
        </main>

    </div>
</template>