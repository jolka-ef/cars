<template>
  <swiper
    :autoplay="{
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
    :breakpoints="{
      600: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 64,
      },
    }"
    :modules="modules"
    :speed="500"
    :loop="true"
    :centered-slides="false"
    :slidesPerView="2"
    :spaceBetween="0"
    :pagination="{
      clickable: true,
      horizontalClass: 'swiper-pagination-new',
    }"
  >
    <swiper-slide>
      <img :src="`/src/assets/images/${folder}/1.jpg`" />
    </swiper-slide>
    <swiper-slide>
      <img :src="`/src/assets/images/${folder}/2.jpg`" />
    </swiper-slide>
    <swiper-slide>
      <img :src="`/src/assets/images/${folder}/3.jpg`" />
    </swiper-slide>
    <swiper-slide>
      <img :src="`/src/assets/images/${folder}/4.jpg`" />
    </swiper-slide>
    <swiper-slide>
      <img :src="`/src/assets/images/${folder}/5.jpg`" />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    folder: { type: String, default: 'passenger' },
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
};
</script>

<style>
.swiper-pagination-new {
  position: relative;
  margin-top: 56px;
  --swiper-pagination-color: theme('colors.oceanblue');
  --swiper-pagination-bullet-inactive-color: theme('colors.brightgrey');
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 5px;
}
</style>
