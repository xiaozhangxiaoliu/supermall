import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = () =>
    import ('../views/home/Home.vue');
const Categroy = () =>
    import ('../views/category/Categroy.vue');

const Welcome = () =>
    import ('../views/gereg/child/welcome.vue')
const Cart = () =>
    import ('../views/cart/Cart.vue');

const Gereg = () =>
    import ('../views/gereg/Gereg.vue')

const Detail = () =>
    import ('../views/detail/detail.vue')
const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home,
    },
    {
        path: '/category',
        component: Categroy,


    },
    {
        path: '/cart',
        component: Cart,

    },
    {
        path: '/geren',
        component: Gereg,

    },
    {
        name: 'detail',
        path: '/detail/:id',
        component: Detail,
    },
    { path: '/welcome', component: Welcome }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})



export default router