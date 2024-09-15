<template>
  <a
    href="#"
    class="inline-block cursor-pointer rounded-lg px-6 pb-2.5 pt-3 font-roboto_flex text-[15px] font-semibold tracking-[-0.02em] transition-all hover:scale-105"
    :class="typeVariants[color]"
  >
    <slot></slot>
  </a>
</template>
<script setup>
const typeVariants = {
  light: 'bg-white text-oceanblue border border-oceanblue ',
  dark: 'text-white bg-oceanblue',
};
import { defineProps } from 'vue';
defineProps({
  color: { type: String, default: 'dark' },
});
</script>
