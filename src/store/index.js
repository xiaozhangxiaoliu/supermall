import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        shopCart: [],
    },
    mutations: {
        adcart(state, newproduce) {
            let newpro = state.shopCart.find((item) => {
                return item.iid == newproduce.iid
            })
            if (newpro) {
                newpro.count += 1;
            } else {
                state.shopCart.push(newproduce);
            }
        },
        change(state, states) {
            if (states.state == 1) {
                states.state = 0;
            } else if (states.state == 0) {
                states.state = 1;
            }
        },
        qx(state) {
            state.shopCart.forEach(item => {
                item.state = 1
            })
        },
        fqx(state) {
            state.shopCart.forEach(item => {
                item.state = 0
            })
        }
    },
    actions: {},
    modules: {},
    getters: {
        sum(state) {
            let sum = 0;
            state.shopCart.filter(item => item.state == 1).forEach(item => {
                sum += item.realPrice * item.count
            })
            return sum
        },
        castlist(state) {
            return state.shopCart.length
        },
        count(state) {
            return state.shopCart.reduce((prev, item, index) => {
                    return prev + item.count
                },
                0)
        },
        xzlength(state) {
            return state.shopCart.filter(item => {
                return item.state == 1;
            }).length
        }
    }
})