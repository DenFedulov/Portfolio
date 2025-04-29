<script setup lang="ts">
import Link from '@/components/Link.vue'
import Tag from '@/components/Tag.vue'

const props = defineProps({
    year: String,
    name: String,
    at: String,
    type: String,
    tags: Array<string>,
    linkName: String,
    link: String,
});
</script>

<template>
    <tr class="border-b border-b-emerald-500/25 last:border-none font-zen-medium">
        <td class="py-3 pr-4 text-xl">{{ props.year }}</td>
        <td class="py-3 pr-4 text-xl">
            <div :class="props.link != '' ? 'hidden' : ''" class="sm:table-cell">
                {{ props.name }}
            </div>
            <Link v-if="props.link != ''" class="sm:hidden" :href="props.link">
            {{ props.name }}
            </Link>
        </td>
        <td class="hidden lg:table-cell py-3 pr-4 font-zen">{{ props.at }}</td>
        <td class="hidden lg:table-cell py-3 pr-4">{{ props.type }}</td>
        <td class="hidden lg:table-cell py-3 pr-4">
            <ul class="flex flex-wrap gap-2">
                <li v-for="tag in props.tags">
                    <Tag>{{ tag }}</Tag>
                </li>
            </ul>
        </td>
        <td class="hidden sm:table-cell py-3 pr-4">
            <Link v-if="props.link != ''" :href="props.link">
            {{ props.linkName }}
            </Link>
        </td>
    </tr>
</template>