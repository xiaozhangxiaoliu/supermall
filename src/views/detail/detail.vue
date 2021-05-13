<template>
  <div id="detail">
    <detail-nav-bar
      class="d-nav-bar"
      :scrolList="scrolList"
      ref="dnb"
      @dclick="click"
    ></detail-nav-bar>
    <detail-bottom-nav @jclick="addClick"></detail-bottom-nav>
    <scroll class="fu" :pullload="true" @scrl="scrl" ref="scr">
      <swiper class="swiper">
        <template>
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in topimg"
              :key="index"
            >
              <img :src="item" alt="" />
            </div>
          </div>
        </template>
      </swiper>
      <base-info :baseInfo="baseInfo"></base-info>
      <shop-info :shopinfo="shopInfo"></shop-info>
      <good-info :goodsInfo="goodsInfo" @imgload="imgload"></good-info>
      <goods-params :goodsParams="goodsParams" class="par"></goods-params>
      <comment-info :comment="commentInfo" class="com"></comment-info>
      <recomen-list :recommedlist="recommedlist" class="rec"></recomen-list>
    </scroll>
    <back-top
      ref="bk"
      @click.native="backClick"
      v-show="isShow < -1000 ? true : false"
    ></back-top>
  </div>
</template>

<script>
import Swiper from "../../components/common/swiper/swiper.vue";
import SwiperJs from "../../components/common/swiper/swiper-bundle.min.js";
import { detailrouter, Goods, Shop } from "../../network/detail";
import DetailNavBar from "./childdetail/DetailNavBar.vue";
import DetailBottomNav from "./childdetail/DetailBottomNav.vue";
import BaseInfo from "./childdetail/BaseInfo.vue";
import ShopInfo from "./childdetail/ShopInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import GoodInfo from "./childdetail/GoodInfo.vue";
import GoodsParams from "./childdetail/GoodsParams.vue";
import CommentInfo from "./childdetail/CommentInfo.vue";
import RecomenList from "./childdetail/RecomenList.vue";
import { BackMin } from "../../common/mixin";
import BackTop from "../../components/content/backtop/backtop.vue";
export default {
  name: "detail",
  components: {
    DetailNavBar,
    Swiper,
    DetailBottomNav,
    BaseInfo,
    ShopInfo,
    Scroll,
    GoodInfo,
    GoodsParams,
    CommentInfo,
    RecomenList,
    BackTop,
  },

  data() {
    return {
      iid: null,
      topimg: [],
      //商品基本信息
      baseInfo: {},
      shopInfo: {},
      goodsInfo: [],
      goodsParams: {},
      commentInfo: [],
      recommedlist: [],
      scrolList: [],
      isShow: 0,
    };
  },
  mixins: [BackMin],
  created() {
    // console.log(this.$route);
    this.iid = this.$route.params.id;
    console.log(this.iid);
    this.getSj();
    this.getTj();
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    //获取推荐模块数据
    getTj() {
      detailrouter({
        url: "/recommend",
      }).then((res) => {
        this.recommedlist = res.data.list;
      });
    },
    addClick() {
      const product = {};
      product.image = this.topimg[0];
      product.title = this.baseInfo.title;
      product.desc = this.baseInfo.desc;
      product.price = this.baseInfo.newPrice;
      product.iid = this.baseInfo.iid;
      product.realPrice = this.baseInfo.realPrice;
      product.count = 1;
      product.state = 1;
      this.$store.commit("adcart", product);
    },
    click(i) {
      this.$refs.scr.bbb.scrollTo(0, -this.scrolList[i], 300);
    },
    imgload() {
      console.log(1);
      this.scrolList.push(
        document.querySelector(".par").offsetTop,
        document.querySelector(".com").offsetTop,
        document.querySelector(".rec").offsetTop
      );
    },
    scrl(position) {
      this.isShow = position.y;
      for (let i = 0; i < this.scrolList.length; i++) {
        if (-position.y >= this.scrolList[i]) {
          this.$refs.dnb.current = i + 1;
        } else if (-position.y < this.scrolList[0]) {
          this.$refs.dnb.current = 0;
        }
      }
    },

    getSj() {
      detailrouter({
        url: "/detail",
        params: {
          iid: this.iid,
        },
      }).then((res) => {
        //顶部轮播图

        this.topimg = res.result.itemInfo.topImages;
        let data = res.result;
        // 获取商品的基本信息
        this.baseInfo = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 获取商家信息
        this.shopInfo = new Shop(data.shopInfo);
        console.log(this.shopInfo);
        // 获取商品图片信息
        this.goodsInfo = data.detailInfo;
        // 获取商品参数信息
        this.goodsParams = data.itemParams;
        //获取评论信息
        this.commentInfo = data.rate;
        console.log(data);
        // console.log(res);
      });
    },
    initSwiper() {
      var mySwiper = new SwiperJs(".swiper-container", {
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
  },
};
</script>

<style scoped>
.navbar {
  background-color: #fff;
}
.d-nav-bar {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  z-index: 999;
}

.swiper-slide img {
  width: 100%;
  height: 300px;
}
.swiper {
  margin-top: 44px;
}
.swiper-wrapper {
  height: 300px;
}
.fu {
  padding-top: 44px;
}
</style>