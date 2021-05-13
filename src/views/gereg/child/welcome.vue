<template>
  <div>
    <h2>欢迎</h2>
    <div class="btn" @click="tc"><button>退出登录</button></div>
  </div>
</template>

<script>
export default {
  methods: {
    tc() {
      window.sessionStorage.clear();
      this.$router.push("/geren");
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
.btn {
  width: 68px;
  margin: 0 auto;
}
</style>