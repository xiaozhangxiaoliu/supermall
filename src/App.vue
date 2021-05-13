<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from "components/content/mainTabbar/maintab.vue";
export default {
  components: {
    MainTabbar,
  },
};
</script>

<style>
@import "assets/css/bass.css";
</style>