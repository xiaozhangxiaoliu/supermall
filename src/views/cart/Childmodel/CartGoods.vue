<template>
  <div class="cart-goods">
    <div v-for="(item, index) in this.$store.state.shopCart" :key="index">
      <cart-item :goodsitem="item"></cart-item>
    </div>
  </div>
</template>

<script>
import CartItem from "../Childmodel/CartItem";

export default {
  components: {
    CartItem,
  },
};
</script>

<style>
</style>