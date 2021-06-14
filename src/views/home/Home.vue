<template>
  <div id="home">
    <nav-bar>
      <template v-slot:center>
        <div class="home-nav">购物街</div>
      </template>
    </nav-bar>
    <tab-control
      :class="{ fix: istabfix }"
      @tabClick="tabClick"
      :titles="['流行', '新款', '精选']"
      class="tab-control2"
      ref="tabcontrol2"
      v-show="!isTabshow"
    ></tab-control>
    <scroll
      :protype="3"
      @scrl="scroll"
      :pullload="true"
      @puload="puload"
      ref="scr"
      class="scre"
    >
      <swiper>
        <template>
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in banner" :key="item.title">
              <a :href="item.link">
                <img :src="item.image" alt="" @load="imgload" />
              </a>
            </div>
          </div>
        </template>
      </swiper>
      <recommend :recomend="recomd"></recommend>
      <feture></feture>
      <tab-control
        :class="{ fix: istabfix }"
        @tabClick="tabClick"
        :titles="['流行', '新款', '精选']"
        class="tab-control1"
        ref="tabcontrol1"
        v-show="isTabshow"
      ></tab-control>
      <goods :goods="goods[currentType].list"></goods>
    </scroll>
    <back-top
      v-show="isShow < -1000 ? true : false"
      ref="bk"
      @click.native="backClick"
    ></back-top>
    <toast></toast>
  </div>
</template>

<script>
import Swiper from "../../components/common/swiper/swiper-bundle.min.js";
import NavBar from "../../components/common/nav/NavBar.vue";
import { gethomeRouter } from "../../network/home";
import swiper from "../../components/common/swiper/swiper";
import Recommend from "./childCompents/recomdview";
import Feture from "./childCompents/fetureview";
import TabControl from "../../components/content/tabcntrol/TabControl";
import Goods from "../../components/content/goods/goods";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/content/backtop/backtop";
import Toast from "../../components/common/toast/toast";
import { BackMin } from "../../common/mixin";
export default {
  components: {
    NavBar,
    swiper,
    Recommend,
    Feture,
    TabControl,
    Goods,
    Scroll,
    BackTop,
    Toast,
  },
  mixins: [BackMin],
  data() {
    return {
      result: null,
      banner: null,
      recomd: null,
      tabOffsetTap: 0,
      isload: false,
      istabfix: true,
      scrollY: 0,
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currentType: "pop",
      isShow: 0,
      isTabshow: true,
    };
  },
  activated() {
    //进入界面重新监听事件
    console.log(this.$refs);
    this.$refs.scr.bbb.refresh();
    if (this.scrollY < 0) {
      this.$refs.scr.bbb.scrollTo(0, this.scrollY);
    }
    //进入界面重新监听
    this.$refs.scr.bbb.on("scroll", this.scroll);
    this.$refs.scr.bbb.on("pullingUp", this.puload);
  },
  deactivated() {
    this.scrollY = this.$refs.scr.bbb.y;
    //退出界面解绑事件
    this.$refs.scr.bbb.off("scroll", this.scroll);
    this.$refs.scr.bbb.off("pullingUp", this.puload);
  },
  created() {
    this.gethomeMu();
    //请求商品数据
    this.getgood({
      url: "/home/data",
      params: {
        type: "pop",
        page: 1,
      },
    });
    this.getgood({
      url: "/home/data",
      params: {
        type: "new",
        page: 1,
      },
    });
    this.getgood({
      url: "/home/data",
      params: {
        type: "sell",
        page: 1,
      },
    });
  },
  methods: {
    initSwiper() {
      var mySwiper = new Swiper(".swiper-container", {
        loop: false,
        autoplay: {
          disableOnInteraction: false,
        },
        observer: true,
        observerParents: true,
        // scrollbar: {
        //   el: ".swiper-scrollbar",
        //   hide: true,
        // },
        pagination: {
          el: ".swiper-pagination",
        },
      });
    },
    gethomeMu() {
      //请求轮播图数据
      gethomeRouter({
        url: "/home/multidata",
      }).then((res) => {
        this.result = res.data;
        this.banner = res.data.banner.list;
        this.recomd = res.data.recommend.list;
        // console.log(this.recomd);
        // console.log(res.data.banner);
        // console.log(res.data);
        this.initSwiper();
      });
    },
    imgload() {
      if (!this.isload) {
        this.isload = true;
      }
    },
    getgood(config) {
      // console.log(config.params.page);
      // console.log(this.goods[config.params.type].page);
      config.params.page = this.goods[config.params.type].page + 1;
      // console.log(config.params.type);
      gethomeRouter(config).then((res) => {
        //将新的页面的赋值给data内 下一次发送请求就可以继续向下加1请求数据
        this.goods[config.params.type].page = config.params.page;
        //将请求的数据赋值给list
        // console.log(this.goods[config.params.type].list);
        this.goods[config.params.type].list.push(...res.data.list);
        // console.log(res.data.list);
        // console.log(this.goods[config.params.type]);
      });
    },
    tabClick(index) {
      let ay = Object.keys(this.goods);
      this.currentType = ay[index];
      // console.log(this);
      // this.$toast.show("你好", 3000);
    },
    scroll(position) {
      // console.log(this.$refs.tabcontrol1.$el.offsetTop);
      if (-position.y > 575) {
        this.isTabshow = false;
      } else {
        this.isTabshow = true;
      }

      this.isShow = position.y;
      // console.log(position);
    },
    // backClick() {
    // this.$children[1].$refs.aaa.scroll.scrollTo(0, 0, 500);
    // console.log(1);
    // console.log(this);
    //   this.$children[1].bbb.scrollTo(0, 0, 500);
    // },
    puload() {
      this.getgood({
        url: "/home/data",
        params: {
          type: this.currentType,
          page: 1,
        },
      });
      console.log(this.$refs);
      this.$refs.scroll.bbb.finishPullUp();
    },
  },
};
</script>

<style scoped>
@import "../../components/common/swiper/swiper-bundle.min.css";
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
}
.tab-control {
  /* position: sticky;
  top: 44px; */
  width: 100%;
  /* z-index: 9; */
  position: relative;
}

.tab-control2 {
  width: 100%;
  z-index: 9;
  display: flex;
}
.tab-control2 div {
  flex: 1;
}
.swiper-wrapper {
  height: 150px;
}
.scre {
  height: calc(100vh - 93px);
  overflow: hidden;
  position: relative;
}
</style>