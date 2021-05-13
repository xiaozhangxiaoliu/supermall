<template>
  <div class="params">
    <table>
      <tr v-for="(tr, index) in goodsParams.rule.tables[0]" :key="index">
        <td v-for="(td, index) in tr" :key="index">{{ td }}</td>
      </tr>
    </table>
    <table>
      <tr v-for="(info, index) in goodsParams.info.set" :key="index">
        <td class="key">{{ info.key }}</td>
        <td class="value">{{ info.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.params {
  padding: 8px 8px 20px 8px;
  border-bottom: 3px solid rgba(100, 100, 100, 0.1);
  font-size: 16px;
  color: #333;

  font-size: 18px;
}
.params table {
  width: 100%;
}
.params table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  padding: 8px 16px;
}
.key {
  width: 30%;
}
.value {
  color: pink;
}
</style>