<script setup>
import CardsSection from '@/components/CardsSection.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import GallerySection from '@/components/GallerySection.vue';
import Hero from '@/components/Hero.vue';
</script>
<template>
  <div
    class="bg-wave2 bg-cover bg-[calc(100%-74px)_-40px] bg-no-repeat xl:bg-wave1 xl:bg-auto xl:bg-[calc(100%-74px)_0px]"
  >
    <Header />
    <Hero />
  </div>
  <GallerySection />
  <CardsSection />
  <Footer />
</template>
