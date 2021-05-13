<template>
  <div>
    <div class="btn" :class="{ isShow: select == 1 ? true : false }">
      <img src="../../../assets/img/cart/tick.svg" alt="" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    select: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  data() {
    return {
      show: true,
    };
  },
  computed: {
    ...mapGetters(["sum", "castlist", "xzlength"]),
  },
  mounted() {
    console.log(this.$parent);
  },
};
</script>

<style scoped>
.btn {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  border: 1px solid #ccc;
  margin-right: 8px;
}
.btn img {
  border-radius: 50%;
  width: 15px;
  height: 15px;
  /* background: red; */
  /* background: var(--color-tint); */
  display: none;
  margin-left: 1px;
  margin-top: 2px;
}
.isShow {
  background-color: var(--color-tint);
}
.qx {
  background-color: var(--color-tint);
}
.isShow img {
  display: block;
}
.qx img {
  display: block;
}
</style>