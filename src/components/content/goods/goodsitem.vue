<template>
  <div class="items" @click="iclick">
    <img :src="goodsitem.show.img" alt="" />
    <div>
      <p>{{ goodsitem.title }}</p>
      <span class="price">{{ goodsitem.price }}</span>
      <span class="collect">{{ goodsitem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    iclick() {
      this.$router.push({
        name: "detail",
        params: {
          id: this.goodsitem.iid,
        },
      });
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
</style>