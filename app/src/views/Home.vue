<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

import { RouterLink } from 'vue-router'
import LanguagePicker from '@/components/LanguagePicker.vue'
import SocialMediaIcons from '@/components/SocialMediaIcons.vue'
import Link from '@/components/Link.vue'
import Tag from '@/components/Tag.vue'

import LeftArrow from '@/assets/icons/left-arrow.svg'

</script>

<template>
    <div class="lg:flex lg:justify-start lg:gap-3">
        <header class="lg:sticky lg:top-0 h-fit lg:py-24 lg:min-w-[45%]">
            <div>
                <h1 class="font-zen-bold text-4xl">
                    <RouterLink to="/">{{ t("name") }}</RouterLink>
                </h1>
                <h2 class="mt-2 font-zen-medium text-xl">{{ t("job-title") }}</h2>
                <RouterLink class="mt-4 font-zen-medium text-xl button select-none transition-ease" to="/contact">
                    <span>{{ t("hire") }}</span>
                </RouterLink>
            </div>
            <SocialMediaIcons class="mt-6"></SocialMediaIcons>
            <LanguagePicker class="mt-4"></LanguagePicker>
        </header>
        <main class="flex flex-col gap-10 py-12 lg:py-24">
            <section id="about" class="flex flex-col gap-4" aria-label="About">
                <h3 class="flex items-center gap-2 font-zen-bold text-3xl">
                    {{ t("about-home") }}
                </h3>
                <p>{{ t('about-home-p.1') }}</p>
            </section>
            <section id="projects" class="flex flex-col gap-4" aria-label="Projects">
                <h3 class="group flex items-center gap-2 font-zen-bold text-3xl">
                    <RouterLink to="/projects">{{ t("projects-home") }}</RouterLink>
                    <LeftArrow class="icon h-3 w-3 group-hover:translate-x-3 transition-ease scale-x-[-1]"></LeftArrow>
                </h3>
                <ol class="flex flex-col gap-10">
                    <li class="flex flex-col">
                        <h4 class="font-zen-medium text-xl">
                            <i18n-t scope="global" keypath="project-home.1.name">
                                <template v-slot:Aerodar>
                                    <Link href="https://www.aerodar.ru/">Aerodar</Link>
                                </template>
                                <template v-slot:Ozon>
                                    <Link href="https://docs.ozon.ru/api/agent/">Ozon</Link>
                                </template>
                            </i18n-t>
                        </h4>
                        <p>{{ t("project-home.1.desc") }} </p>
                        <ul class="flex flex-wrap gap-2 mt-2">
                            <li>
                                <Tag>PHP</Tag>
                            </li>
                            <li>
                                <Tag>Bootstrap</Tag>
                            </li>
                            <li>
                                <Tag>jQuery</Tag>
                            </li>
                            <li>
                                <Tag>MySQL</Tag>
                            </li>
                        </ul>
                    </li>
                    <li class="flex flex-col">
                        <h4 class="font-zen-medium text-xl">
                            <i18n-t scope="global" keypath="project-home.2.name">
                                <template v-slot:amoCRM>
                                    <Link href="https://www.amocrm.ru/">amoCRM</Link>
                                </template>
                                <template v-slot:demo>
                                    <Link href="https://dev.salesevolution.ru/pub/source-connector/indexV2.php">
                                    "Интеграция с сайтом"</Link>
                                </template>
                            </i18n-t>
                        </h4>
                        <p> {{ t("project-home.2.desc") }} </p>
                        <ul class="flex flex-wrap gap-2 mt-2">
                            <li>
                                <Tag>PHP</Tag>
                            </li>
                            <li>
                                <Tag>Bootstrap</Tag>
                            </li>
                            <li>
                                <Tag>Vue.js</Tag>
                            </li>
                            <li>
                                <Tag>MariaDB</Tag>
                            </li>
                        </ul>
                    </li>
                    <li class="flex flex-col">
                        <h4 class="font-zen-medium text-xl">
                            <i18n-t scope="global" keypath="project-home.3.name">
                                <template v-slot:amocrm>
                                    <Link href="https://www.amocrm.ru/">amoCRM</Link>
                                </template>
                                <template v-slot:TandemTrack>
                                    <Link href="https://tandemtrack.ru/">TandemTrack</Link>
                                </template>
                            </i18n-t>
                        </h4>
                        <p>{{ t("project-home.3.desc") }} </p>
                        <ul class="flex flex-wrap gap-2 mt-2">
                            <li>
                                <Tag>PHP</Tag>
                            </li>
                            <li>
                                <Tag>CSS</Tag>
                            </li>
                            <li>
                                <Tag>jQuery</Tag>
                            </li>
                            <li>
                                <Tag>MariaDB</Tag>
                            </li>
                        </ul>
                    </li>
                    <li class="flex flex-col">
                        <h4 class="font-zen-medium text-xl">
                            <i18n-t scope="global" keypath="project-home.4.name">
                                <template v-slot:amocrm>
                                    <Link href="https://www.amocrm.ru/">amoCRM</Link>
                                </template>
                                <template v-slot:EstateLiga>
                                    <Link href="https://estateliga.com/">EstateLiga</Link>
                                </template>
                            </i18n-t>
                        </h4>
                        <p> {{ t("project-home.4.desc") }}</p>
                        <ul class="flex flex-wrap gap-2 mt-2">
                            <li>
                                <Tag>PHP</Tag>
                            </li>
                            <li>
                                <Tag>MariaDB</Tag>
                            </li>
                        </ul>
                    </li>
                </ol>
            </section>
            <section id="experience" class="flex flex-col gap-4" aria-label="Experience">
                <h3 class="flex items-center gap-2 font-zen-bold text-3xl">
                    {{ t("experience-home") }}
                </h3>
                <ol class="flex flex-col gap-10">
                    <li class="flex flex-col gap-2 justify-center">
                        <h5 class="font-zen-medium text-gray-400">{{ t("job.1.date") }}</h5>
                        <h4>
                            <Link class="font-zen-bold text-2xl" href="https://salesevolution.ru/">Sales Evolution
                            </Link>
                            <span class="font-zen-medium text-2xl"> - {{ t("job.1.position") }}</span>
                        </h4>
                        <p>{{ t("job.1.desc") }}</p>
                    </li>
                    <li class="flex flex-col gap-2">
                        <h5 class="font-zen-medium text-gray-400">{{ t("job.2.date") }}</h5>
                        <h4>
                            <Link class="font-zen-bold text-2xl" href="https://meriterra.ru/">Меритерра</Link>
                            <span class="font-zen-medium text-2xl"> - {{ t("job.2.position") }}</span>
                        </h4>
                        <p>{{ t("job.2.desc") }}</p>
                    </li>
                </ol>
                <Link class="font-zen-medium text-xl" :href="'/Denis_Fedulov_resume_' + locale + '.pdf'">
                {{ t("resume") }}
                </Link>
            </section>
        </main>
    </div>
</template>