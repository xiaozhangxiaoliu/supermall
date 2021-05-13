<template>
  <div class="wrapper" ref="aaa">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//better-scroll
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import ObserveDOM from "@better-scroll/observe-dom";
import ObserveImage from "@better-scroll/observe-image";
BScroll.use(ObserveImage);
BScroll.use(ObserveDOM);
BScroll.use(Pullup);
export default {
  data() {
    return {
      bbb: null,
      c: 5,
    };
  },
  props: {
    protype: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullload: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  mounted() {
    this.bbb = new BScroll(this.$refs.aaa, {
      probeType: this.protype,
      click: true,
      pullUpLoad: this.pullload,
      observeDOM: true,
      observeImage: {
        debounceTime: 100,
      },
    });
    this.bbb.on("scroll", (position) => {
      this.$emit("scrl", position);
    });
    this.bbb.on("pullingUp", () => {
      this.$emit("puload");
    });
  },
};
</script>

<style>
.wrapper {
  height: calc(100vh - 93px);
}
.content {
  position: relative;
}
</style>