<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { VueSidePanel } from 'vue3-side-panel';
import 'vue3-side-panel/dist/vue3-side-panel.css';
import Button from '@/components/Button.vue';
import Logo from '@/components/icons/Logo.vue';
import Menu from '@/components/icons/Menu.vue';
import Phone from '@/components/icons/Phone.vue';

const isOpened = ref(false);

const windowWidth = ref(window.innerWidth);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
<template>
  <header class="px-sm py-4">
    <div v-if="windowWidth < 800">
      <div class="flex items-center justify-between">
        <Logo />
        <button @click="isOpened = !isOpened" class="bg-transparent">
          <Menu />
        </button>
      </div>
      <VueSidePanel
        v-model="isOpened"
        lock-scroll
        side="top"
        :panel-duration="1000"
        :overlay-duration="1000"
        overlay-color="#828ca97d"
        transition-name="slide-top"
        height="auto"
        :hide-close-btn="true"
      >
        <nav
          class="links flex flex-col items-center bg-oceanblue font-roboto_flex text-base uppercase text-white"
        >
          <a
            href="#"
            class="self-stretch p-2 pt-4 text-center text-sm font-semibold text-current no-underline"
            >Galeria zdjęć</a
          >
          <a
            href="#"
            class="self-stretch border-t border-white p-2 text-center text-sm font-semibold text-current no-underline"
            >FaQ</a
          >
          <a
            href="#"
            class="flex items-center justify-center gap-2 self-stretch border-t border-white p-2 text-center text-sm font-semibold text-current no-underline"
          >
            <Phone /> Zadzwoń do nas</a
          >
        </nav>
      </VueSidePanel>
    </div>
    <nav
      v-else
      class="max-w-contentWidth m-auto flex max-w-xl items-center justify-between gap-6 font-roboto_flex text-base"
    >
      <a href="/" title="← Back to the homepage">
        <Logo />
      </a>
      <div class="flex gap-6">
        <a href="#" class="hover:text-oceanblue hover:underline"
          >Galeria zdjęć</a
        >
        <a href="#" class="hover:text-oceanblue hover:underline">FaQ</a>
      </div>

      <Button>Zadzwoń do nas</Button>
    </nav>
  </header>
</template>
