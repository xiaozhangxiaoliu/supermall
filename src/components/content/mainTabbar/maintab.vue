<template>
  <div>
    <tab-bar>
      <tab-item path="/home" activeColor="blue">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/home.svg" alt=""
        /></template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/home_active.svg" alt=""
        /></template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-item>
      <tab-item path="/category" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/category_active.svg" alt=""
        /></template>
        <div slot="item-text">分类</div>
      </tab-item>
      <tab-item path="/cart" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/shopcart_active.svg" alt=""
        /></template>
        <div slot="item-text">购物车</div>
      </tab-item>
      <tab-item path="/geren" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/profile_active.svg" alt=""
        /></template>
        <div slot="item-text">我的</div>
      </tab-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/ctabbar/tabbar.vue";
import TabItem from "components/common/ctabbar/tabbaritem.vue";
export default {
  components: {
    TabBar,
    TabItem,
  },
};
</script>

<style>
</style>