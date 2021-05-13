<template>
  <div id="right">
    <scroll :probeType="2" :pullload="true" class="scr">
      <div class="ct">
        <div class="item" v-for="(item, index) in CartItem" :key="index">
          <div>
            <a :href="item.link">
              <img :src="item.image" alt="" />
            </a>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../../components/common/scroll/Scroll.vue";
export default {
  components: { Scroll },
  data() {
    return {
      CartItem: [],
    };
  },

  beforeUpdate() {},
  mounted() {
    this.$bus.$on("get", (item) => {
      this.CartItem = item.data.list;
      console.log(item);
      console.log(this.CartItem);
    });
  },
};
</script>

<style scoped>
.scr {
  overflow: hidden;
}
#right {
  padding: 10px;
}
.ct {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
}
.item {
  width: 85px;
}
.item div img {
  width: 100%;
}
</style>