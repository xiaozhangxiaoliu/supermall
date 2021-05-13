<template>
  <div class="shop-info">
    <div class="top">
      <img :src="shopinfo.logo" alt="" />
      <span>{{ shopinfo.name }}</span>
    </div>
    <div class="middle">
      <div>
        <p>{{ shopinfo.sells | transform }}</p>
        <p>总销量</p>
      </div>
      <div>
        <p>{{ shopinfo.goodsCount }}</p>
        <p>全部宝贝</p>
      </div>
      <div class="score">
        <div v-for="(item, index) in shopinfo.score" :key="index">
          <span class="">{{ item.name }}</span
          ><span>{{ item.score }}</span>
          <i
            :style="
              item.isBetter ? { background: 'red' } : { background: 'green' }
            "
            >{{ item.isBetter ? "高" : "低" }}</i
          >
        </div>
      </div>
    </div>
    <div class="bottom">
      <p>进店逛逛</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    transform(v) {
      v = (v - 0) * 0.0001;
      v = v.toFixed(2) + "万";
      return v;
    },
  },
};
</script>

<style scoped>
.shop-info {
  padding: 10px 10px 20px 10px;
  border-bottom: 4px solid rgba(100, 100, 100, 0.1);
}
.top {
  padding: 6px 10px 10px 4px;
}
.top img {
  width: 60px;
  height: 60px;
  border: 1px solid rgba(100, 100, 100, 0.1);
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 8px;
}
.middle {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  font-size: 18px;
  color: #333;
}
.middle div:nth-child(2) {
  padding-right: 3px;
  border-right: 2px solid #ccc;
}
.score div:nth-child(2) {
  padding-right: 0px;
  border-right: 0px solid #ccc;
}
.score {
  font-size: 12px;
  text-align: left;
}
.score div {
  display: flex;
  justify-content: space-between;
}
.score div i {
  font-style: normal;
}
.bottom {
  margin-top: 20px;
  margin-bottom: 8px;
}
.bottom p {
  margin: 0 auto;
  width: 70px;
  text-align: center;
  background-color: #ccc;
  border-radius: 50%;
  height: 40px;
  line-height: 40px;
}
</style>