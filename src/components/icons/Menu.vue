<template>
  <svg
    width="40px"
    height="40px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 17H20M4 12H20M4 7H20"
      :stroke="fullConfig.theme.colors.oceanblue"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script setup>
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '/tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);
</script>
