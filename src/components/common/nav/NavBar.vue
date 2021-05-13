<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-bar {
  height: 44px;
  line-height: 44px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
}
.left,
.right {
  width: 60px;
  background-color: var(--color-tint);
}
.center {
  flex: 1;
  /* background-color: pink; */
}
</style>