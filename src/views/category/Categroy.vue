<template>
  <div class="cart">
    <nav-bar>
      <template v-slot:center>
        <div class="center">分类</div>
      </template>
    </nav-bar>
    <div class="content">
      <left></left>
      <right class="cright"></right>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/nav/NavBar.vue";
import Left from "./Child/left.vue";
import Right from "./Child/right.vue";
export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    Left,
    Right,
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.center {
  background-color: var(--color-tint);
  color: #333;
  font-size: 16px;
}
.content {
  display: flex;
}
.cright {
  flex: 1;
}
</style>