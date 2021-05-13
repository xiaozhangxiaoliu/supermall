<template>
  <div class="recomd">
    <div class="items" v-for="(item, index) in recommedlist" :key="index">
      <img :src="item.image" alt="" />
      <div>
        <p>{{ item.title }}</p>
        <span class="price">{{ item.price }}</span>
        <span class="collect">{{ item.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommedlist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.items img {
  width: 100%;
  border-radius: 5px;
}
.items {
  /* overflow: hidden; */
  padding: 5px;
  font-size: 14px;
  text-align: center;
  width: 50%;
}
.items p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 5px 0;
}
.price {
  color: pink;
}
.collect::before {
  content: "★";
  color: rgb(249, 86, 67);
  margin: 0 2px 0 2px;
  font-size: 16px;
}
.recomd {
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
}
</style>