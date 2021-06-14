import Vue from 'vue';
import Toast from './toast.vue';

const obj = {};

obj.install = function() {
    const LsToast = Vue.extend(Toast)

    let sltoast = new LsToast();

    let div = document.createElement('div');

    sltoast.$mount(div);

    document.body.append(sltoast.$el);

    Vue.prototype.$toast = sltoast;
}


export default obj