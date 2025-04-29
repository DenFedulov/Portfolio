<script setup>
import ArrowLink from '@/assets/icons/left-arrow.svg'

</script>

<template>
    <a class="group" target="_blank">
        <slot></slot>
        <ArrowLink class="ml-1 mb-4 icon h-4 w-4 inline scale-75 rotate-[135deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-ease"></ArrowLink>
    </a>
</template>