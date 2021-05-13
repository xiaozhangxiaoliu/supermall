<template>
  <div class="cart">
    <div class="nav">
      <div>购物车({{ this.$store.getters.count }})</div>
    </div>
    <div v-show="!this.$store.state.shopCart.length" class="gg">
      <p>购物车空空如也~</p>
      <button @click="go">去逛逛</button>
    </div>
    <scroll ref="scr" :protype="2" :pullload="true" class="scr">
      <cart-goods></cart-goods
    ></scroll>
    <cart-bottom></cart-bottom>
  </div>
</template>

<script>
import CartBottom from "./Childmodel/CartBottom.vue";

import CartGoods from "./Childmodel/CartGoods";
import Scroll from "../../components/common/scroll/Scroll";

export default {
  components: { CartBottom, CartGoods, Scroll },
  data() {
    return {};
  },
  methods: {
    go() {
      this.$router.push("/home");
    },
  },
  mounted() {
    console.log(this.$refs.scr);
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
  background-color: var(--color-tint);
  text-align: center;
  height: 44px;
  line-height: 44px;
  color: #222;
}

.cart {
  overflow: hidden;
}
.gg {
  text-align: center;
  width: 200px;
  margin: 0 auto;
  margin-top: 50px;
}

.gg button {
  margin-top: 20px;
  width: 70px;
  border-radius: 10px;
  height: 30px;
}
.scr {
  height: calc(100vh - 133px);
  overflow: hidden;
  position: relative;
}
</style>