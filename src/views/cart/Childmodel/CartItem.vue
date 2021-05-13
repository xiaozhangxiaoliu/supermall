<template>
  <div>
    <div class="item">
      <checkbtn
        class="btn"
        :select="goodsitem.state"
        @click.native="xclick"
        ref="xz"
      ></checkbtn>
      <div>
        <img :src="goodsitem.image" alt="" />
      </div>
      <div class="text">
        <p class="big">{{ goodsitem.title }}</p>
        <p class="small">{{ goodsitem.title }}</p>
        <div class="bot">
          <span class="prices">￥{{ goodsitem.realPrice }}</span>
          <span class="num">{{ goodsitem.count | rans }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import checkbtn from "../../../components/common/ckeckbtn/checkbtn";
export default {
  components: {
    checkbtn,
  },
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    rans(val) {
      return "X" + val;
    },
  },
  computed: {
    ...mapGetters(["sum", "castlist", "xzlength"]),
  },
  methods: {
    xclick() {
      this.$store.commit("change", this.goodsitem);
    },
  },
};
</script>

<style scoped>
.item img {
  width: 80px;
  height: 110px;
  border-radius: 10px;
}
.text {
  width: 65%;
  padding-left: 10px;
}
.big {
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.small {
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 20px;
}
.bot .prices {
  color: pink;
}
.bot {
  margin-top: 20px;
  padding: 10px;
  position: relative;
}
.num {
  position: absolute;
  right: 20px;
}

.item {
  /* margin-top: 44px; */
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>