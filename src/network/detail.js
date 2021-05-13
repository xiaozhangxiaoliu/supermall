import request from './request';

export function detailrouter(config) {
    return request(config)
};

export class Goods {
    constructor(iteminfo, columns, services) {
        this.iid = iteminfo.iid;
        this.title = iteminfo.title;
        this.desc = iteminfo.desc;
        this.newPrice = iteminfo.price;
        this.oldPrice = iteminfo.oldPrice;
        this.discount = iteminfo.discountDesc;
        this.columns = columns;
        this.services = services;
        this.realPrice = iteminfo.lowNowPrice;
    }
}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}