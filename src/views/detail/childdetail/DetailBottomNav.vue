<template>
  <div class="detail-bottom-nav">
    <div class="left">
      <div>
        <i class="icon icon1"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon icon2"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon icon3"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div @click="jclick">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jclick() {
      this.$emit("jclick");
      this.$toast.show("加入购物车成功", 2000);
    },
  },
};
</script>

<style scoped>
.detail-bottom-nav {
  display: flex;
  height: 58px;
  text-align: center;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  color: #333;
}
.left,
.right {
  display: flex;
  flex: 1;
}
.left div {
  flex: 1;
}
.right div {
  flex: 1;
  line-height: 58px;
}
.icon {
  margin: 10px auto 3px;
  display: block;
  width: 22px;
  height: 22px;
  background-image: url("../../../assets/img/detail/detail_bottom.png");
  background-size: 100%;
}
.icon1 {
  background-position: 0 -52px;
}
.icon2 {
  background-position: 0 -99px;
}
.right div:nth-child(1) {
  background-color: #ffe817;
}
.right div:nth-child(2) {
  background-color: #f69;
}
</style>