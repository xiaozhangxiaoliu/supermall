<template>
  <div class="bottom">
    <check-btn class="left2" @click.native="qclick" ref="cb" :select="isSelect">
      <span>全选</span>
    </check-btn>

    <span>合计: ￥{{ he }}</span>
    <div class="js">去计算</div>
  </div>
</template>

<script>
import CheckBtn from "../../../components/common/ckeckbtn/checkbtn";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    CheckBtn,
  },
  computed: {
    ...mapGetters(["sum", "castlist", "xzlength"]),
    he() {
      return this.sum.toFixed(2);
    },
    isSelect() {
      if (this.castlist && this.castlist == this.xzlength) {
        console.log(this.castlist, this.xzlength);
        return 1;
      } else {
        console.log(this.castlist, this.xzlength);
        return 0;
      }
    },
  },
  methods: {
    qclick() {
      if (this.castlist == this.xzlength) {
        this.$store.commit("fqx");
      } else {
        this.$store.commit("qx");
      }
    },
  },
};
</script>

<style scoped>
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 0px 10px;
  background-color: #f6f6f6;
  height: 40px;
  box-shadow: 0 -3px 5px rgba(100, 100, 100, 0.5) inset;
  position: fixed;
  right: 0;
  bottom: 49px;
  width: 100%;
  color: #333;
  z-index: 9;
}
.left2 {
  display: flex;
  align-items: center;
}
.js {
  background-color: red;
  height: 100%;
  line-height: 40px;
  width: 80px;
  text-align: center;
}
</style>