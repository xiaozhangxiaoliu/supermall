<template>
  <div class="good-info">
    <div class="desc">
      {{ goodsInfo.desc }}
    </div>
    <div class="info-key">{{ goodsInfo.detailImage[0].key }}</div>
    <div class="list">
      <img
        :src="item"
        alt="hai"
        v-for="(item, index) in goodsInfo.detailImage[0].list"
        :key="index"
        @load="load"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      ilength: 0,
    };
  },
  mounted() {},
  methods: {
    load() {
      this.ilength++;
      if (this.ilength === this.goodsInfo.detailImage[0].list.length) {
        this.$emit("imgload");
      }
    },
  },
};
</script>

<style scoped>
.good-info {
  border-bottom: 3px solid rgba(100, 100, 100, 0.1);
}
.desc {
  padding-left: 50px;
  margin-bottom: 20px;
}
.good-info {
  padding: 10px;
}
.list {
  margin-top: 10px;
}
.list img {
  width: 100%;
}
</style>