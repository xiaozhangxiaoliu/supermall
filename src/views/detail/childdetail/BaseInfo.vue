<template>
  <div class="base-info">
    <div class="title">
      {{ baseInfo.title }}
    </div>
    <div class="price">
      <span class="n-price">{{ baseInfo.newPrice }}</span>
      <span class="o-price"> {{ baseInfo.oldPrice }}</span
      ><span class="discount" v-if="baseInfo.discount">
        {{ baseInfo.discount }}</span
      >
    </div>
    <div class="xinxi">
      <span>{{ baseInfo.columns && baseInfo.columns[0] }}</span>
      <span>{{ baseInfo.columns && baseInfo.columns[1] }}</span>
      <span>{{
        baseInfo.services &&
        baseInfo.services[baseInfo.services.length - 1].name
      }}</span>
    </div>
    <div class="serve">
      <span
        class="info-service-item"
        v-for="index in baseInfo.services.length - 1"
        :key="index"
      >
        <img :src="baseInfo.services[index - 1].icon" alt="icon" />
        <span>{{ baseInfo.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      length: 0,
    };
  },
};
</script>

<style scoped>
.base-info {
  width: 100%;
  padding: 10px 10px 20px;
  border-bottom: 4px solid rgba(100, 100, 100, 0.1);
}
.title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  line-height: 1.5;
}
.n-price {
  color: var(--color-high-text);
  font-size: 20px;
  margin-right: 8px;
}
.o-price {
  font-size: 12px;
  color: var(--color-text);
  margin-right: 4px;
  text-decoration: line-through;
}
.discount {
  border-radius: 8px;
  background-color: var(--color-high-text);
  color: #fff;
  position: relative;
  top: -8px;
}
.price {
  margin-top: 8px;
}
.xinxi {
  margin-top: 12px;
  display: flex;
  text-align: center;
  font-size: 14px;
  border-bottom: 2px solid rgba(100, 100, 100, 0.3);
  padding-bottom: 4px;
  justify-content: space-between;
}
.serve {
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 14px;
  margin-top: 18px;
}
.info-service-item img {
  width: 12px;
  height: 12px;
  vertical-align: middle;
}
</style>