<template>
  <div class="toast" v-show="isShow">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      isShow: false,
    };
  },
  methods: {
    show(msg, dur) {
      this.msg = msg;
      this.isShow = true;
      console.log(this.isShow);
      setTimeout(() => {
        this.msg = "";
        this.isShow = false;
      }, dur);
    },
  },
};
</script>

<style>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #333;
}
</style>