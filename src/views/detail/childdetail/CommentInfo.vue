<template>
  <div class="comment">
    <div class="top">
      <div class="left">用户评价</div>
      <div class="right">更多></div>
    </div>
    <div class="content">
      <div class="user">
        <img :src="comment.list[0].user.avatar" alt="" />
        <span>{{ comment.list[0].user.uname }}</span>
      </div>
      <div class="text">
        <p>{{ comment.list[0].content }}</p>
        <div>
          <span class="time">{{ +new Date() | formatDate }}</span
          ><span>{{ comment.list[0].style }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.comment {
  padding: 10px;
  border-bottom: 3px solid rgba(100, 100, 100, 0.1);
}
.top {
  padding: 10px 0;
  display: flex;
  text-align: center;
  justify-content: space-between;
  border-bottom: 2px solid rgba(100, 100, 100, 0.1);
  align-items: center;
}
.top .left {
  width: 70px;
}
.user img {
  width: 50px;
  height: 50px;
  vertical-align: middle;
  border-radius: 50%;
  margin-right: 5px;
}
.time {
  margin-right: 3px;
}
.text {
  margin-top: 8px;
}
.text p {
  margin-bottom: 10px;
}
</style>