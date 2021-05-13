<template>
  <div class="recommd">
    <div v-for="item in recomend" :key="item.sort" class="reitem">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recomend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommd {
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.reitem {
  flex: 1;
}
.reitem img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>