<template>
  <div class="tab-bar-item" @click="itemclick(path)">
    <slot name="item-icon" v-if="!isActive"></slot>
    <slot name="item-icon-active" v-else></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isActive: false,
    };
  },
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    itemclick: function (path) {
      if (this.$route.path == path) {
        return;
      } else {
        console.log(this.$route.path);
        this.$router.replace(path);
        // this.isActive = true;
        // console.log(this.$route.path);
      }
    },
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path);
    },
    activeStyle() {
      return this.$route.path == this.path ? { color: this.activeColor } : {};
    },
  },
  // computed: {
  //   isActive() {},
  // },
  mounted() {
    // console.log(this.path);
  },
  // beforeRouteLeave(to, from, next) {
  //   this.isActive = true;
  //   next();
  // },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  /* line-height: 49px; */
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
/* .active {
  color: red;
} */
</style>