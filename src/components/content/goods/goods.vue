<template>
  <div class="goods">
    <good-items
      class="goodsi"
      v-for="item in goods"
      :key="item.iid"
      :goodsitem="item"
    ></good-items>
  </div>
</template>

<script>
import goodItems from "./goodsitem";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    goodItems,
  },
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
}
.goodsi {
  width: 50%;
}
</style>