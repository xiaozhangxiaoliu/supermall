<template>
  <div>
    <div class="swiper-container">
      <slot></slot>

      <!-- <div class="swiper-scrollbar"></div> -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
@import "./swiper-bundle.min.css";

.swiper-container {
  --swiper-theme-color: #ff6600;
  /* --swiper-pagination-color: #00ff33;两种都可以 */
}
</style>