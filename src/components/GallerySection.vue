<template>
  <section class="m-auto max-w-xxl px-sm pt-[140px]">
    <header>
      <p
        class="font-roboto_condensed text-[21.5px] text-oceanblue sm:text-base"
      >
        Prezentacja firmy
      </p>
      <h2 class="text-eerieblack mb-[26px] font-bebas_neue text-xl sm:text-3xl">
        Zobacz naszą galerię zdjęć
      </h2>
    </header>
    <div>
      <tabs
        nav-class="flex gap-12 pb-20 font-roboto_flex text-[15px] tracking-[-0.02em]"
        nav-item-active-class="font-semibold text-oceanblue underline underline-offset-4"
      >
        <tab
          nav-item-class="transition-all hover:text-oceanblue hover:scale-105"
          name="Samochody osobowe"
        >
          <GallerySlider folder="passenger" />
        </tab>
        <tab
          nav-item-class="transition-all hover:text-oceanblue hover:scale-105"
          name="Samochody dostawcze"
        >
          <GallerySlider folder="delivery" />
        </tab>
      </tabs>
    </div>
  </section>
</template>
<script setup>
import { Tabs, Tab } from "vue3-tabs-component";
import GallerySlider from "@/components/GallerySlider.vue";
</script>
