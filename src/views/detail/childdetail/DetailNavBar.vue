<template>
  <div>
    <nav-bar class="d-nav">
      <template v-slot:left>
        <div @click="backClick">
          <img src="../../../assets/img/common/back.svg" alt="" />
        </div>
      </template>

      <template v-slot:center class="center">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="items"
          @click="dclick(index)"
          :class="{ isdianji: current == index ? true : false }"
        >
          {{ item }}
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/nav/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      current: 0,
    };
  },
  methods: {
    dclick: function (index) {
      this.current = index;

      let biao = index - 1;
      if (biao < 0) {
        this.$parent.$refs.scr.bbb.scrollTo(0, 0, 300);
      } else {
        // this.$parent.$refs.scr.bbb.scrollTo(
        //   0,
        //   -this.$parent._data.scrollList[biao],
        //   500
        // );
        this.$emit("dclick", biao);
      }
    },
    backClick: function () {
      // this.$router.back();
      this.$router.go(-1);
    },
  },
};
</script>

<style >
.left,
.right {
  text-align: center;
  background-color: #fff;
}
.left {
  width: 60px;
}
.left img {
  width: 22px;
  height: 22px;
  margin-top: 13px;
}
.center {
  display: flex;
  font-size: 14px;
  flex: 1;
}
.items {
  flex: 1;
}
.isdianji {
  color: pink;
}
.d-nav {
  display: flex;
  justify-content: space-between;
}
</style>