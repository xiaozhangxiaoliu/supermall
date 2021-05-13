import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast/index'
import moment from 'moment'
Vue.config.productionTip = false

Vue.use(toast);

Vue.prototype.$bus = new Vue();
//定义一个全局时间的过滤器
Vue.filter('formatDate', function(value) {
    return moment(Number(value)).format('YYYY-MM-DD HH:MM:SS')
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')