<script setup>
import Button from "@/components/Button.vue";
</script>
<template>
  <section class="ml-sm pt-[120px]">
    <h1
      class="m-auto max-w-xl font-bebas_neue text-xxl tracking-[-0.04em] sm:text-5xl"
    >
      Sprzedajemy samochody<br />
      z Europy
    </h1>
    <div
      class="grid auto-rows-auto gap-y-7 py-8 xl:ml-[max(0px,calc(50%-600px))]"
    >
      <p class="col-start-1 row-start-1 font-roboto_condensed text-base">
        Kup komfortowy pojazd, aby każda podróż <br />
        była wyjątkowym przeżyciem.
      </p>
      <div class="flex flex-wrap gap-6 pt-5 xl:col-start-1 xl:row-start-2">
        <Button>Zobacz zdjęcia </Button>
        <Button color="light">Zadzwoń do nas</Button>
      </div>

      <img
        :src="'/src/assets/images/cars.png'"
        class="col-start-1 row-start-3 justify-self-end pt-2 xl:row-span-3 xl:row-start-1"
      />
    </div>
  </section>
</template>
