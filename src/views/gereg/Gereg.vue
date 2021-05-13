<template>
  <div>
    <div class="login">
      <div>
        <label for=""> 账号: <input type="text" v-model="username" /> </label>
      </div>
      <div>
        <label for="">
          密码: <input type="password" v-model="userpaw" />
        </label>
      </div>
      <div class="btn">
        <button @click="sub">登录</button> <button @click="zc">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../../network/login";
export default {
  data() {
    return {
      username: "",
      userpaw: "",
      tokenstr: "",
    };
  },
  methods: {
    zc() {
      login({
        url: "http://localhost:3000/zc",
        method: "post",
        data: {
          username: this.username,
          userpaw: this.userpaw,
        },
      }).then((res) => {
        console.log(res);
        alert(res.data.message);
      });
    },
    sub() {
      login({
        url: "http://localhost:3000/login",
        method: "post",
        data: {
          username: this.username,
          userpaw: this.userpaw,
        },
      }).then((res) => {
        console.log(res);
        this.tokenstr = res.data.token;
        if (this.tokenstr) {
          window.sessionStorage.setItem("token", this.tokenstr);
          alert(res.data.message);
          this.$router.push("welcome");
        } else {
          alert(res.data.message);
        }
      });
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  width: 300px;
  height: 200px;
  margin: 0 auto;
  align-items: center;
  flex-wrap: wrap;
}
.btn {
  width: 80px;
  margin: 0 auto;
}
</style>