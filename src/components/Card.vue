<template>
  <article class="flex-[1_1_250px]">
    <header>
      <h3
        class="pb-4 font-bebas_neue text-[25px] uppercase tracking-[-0.03em] sm:text-lg"
      >
        {{ title }}
      </h3>
    </header>
    <div class="font-roboto_condensed text-[14px]">
      <p>
        {{ showMore ? `${description.slice(0, 180)} [...]` : description }}
      </p>
    </div>

    <button
      @click="showMore = !showMore"
      class="border-b-[1.5px] border-white pb-1.5 pt-6 font-roboto_condensed text-[14px]"
    >
      <span class="flex items-center gap-1.5" v-if="showMore"
        >Rozwiń <DownArrow />
      </span>
      <span class="flex items-baseline gap-1.5" v-else>Zwiń <UpArrow /> </span>
    </button>
  </article>
</template>
<script setup>
import DownArrow from "@/components/icons/DownArrow.vue";
import UpArrow from "@/components/icons/UpArrow.vue";
import { defineProps, ref } from "vue";
const showMore = ref(true);
defineProps({ title: String, description: String });
</script>
