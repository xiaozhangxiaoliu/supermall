<template>
  <div class="back-top" @click="backClick">
    <img src="../../../assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.back-top {
  position: fixed;
  right: 8px;
  bottom: 55px;
  z-index: 9999;
}
.back-top img {
  width: 43px;
  height: 43px;
}
</style>