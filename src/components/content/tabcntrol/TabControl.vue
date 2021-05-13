<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      @click="chanclick(index)"
      :class="{ active: index === currenti }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currenti: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    chanclick(index) {
      if (this.$parent.$parent.$refs.tabcontrol2) {
        this.$parent.$parent.$refs.tabcontrol2._data.currenti = index;
        this.$parent.$parent.$refs.tabcontrol1._data.currenti = index;
      } else {
        this.$parent.$refs.tabcontrol2._data.currenti = index;
        this.$parent.$refs.tabcontrol1._data.currenti = index;
      }

      console.log(1);
      this.currenti = index;
      console.log(this.$parent.$parent.$refs);
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  height: 40px;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>