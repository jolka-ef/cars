<template>
  <picture>
    <source media="(max-width: 400px)" srcset="/src/assets/images/logo.svg" />
    <source
      media="(min-width: 400px)"
      srcset="/src/assets/images/logo--full.svg"
    />
    <img
      src="/src/assets/images/logo.svg"
      loading="eager"
      decoding="async"
      alt="Cars Spot"
    />
  </picture>
</template>
<script></script>
