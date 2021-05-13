<template>
  <div class="left">
    <scroll :probeType="2" :pullload="true" class="scr">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          @click="itemClick(index)"
          :class="{ current: currentindex == index ? true : false }"
        >
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../../components/common/scroll/Scroll.vue";
import { cortgory } from "../../../network/cortgory";

export default {
  components: { Scroll },
  data() {
    return {
      list: [],
      currentindex: 0,
    };
  },
  mounted() {
    this.cortgory();
  },
  methods: {
    async cortgory() {
      let res = await cortgory({ url: "/category" });
      if (res) {
        this.list = res.data.category.list;
        this.itemClick(0);
      }
    },
    async itemClick(index) {
      this.currentindex = index;
      let currentmaitKey = this.list[index].maitKey;
      let list = await cortgory({
        url: "/subcategory",
        params: {
          maitKey: currentmaitKey,
        },
      });
      this.$bus.$emit("get", list);
    },
  },
};
</script>

<style scoped>
.left {
  background-color: #ccc;
  display: flex;
  width: 25%;
  text-align: center;
  font-size: 14px;
}
.left ul li {
  width: 100%;
  height: 45px;
  line-height: 45px;
}
.left ul li p {
  height: 23px;
  line-height: 23px;
}
.left ul {
  width: 93.8px;
}
.scr {
  height: calc(100vh - 93px);
  position: relative;
  overflow: hidden;
}
.current {
  background-color: #fff;
}
.current p {
  border-left: 2px solid hotpink;
  color: pink;
}
</style>