// import Vue from 'vue';
// import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
// import Vuex from 'vuex'
import Util from './libs/util';
import App from './app.vue';
// import 'iview/dist/styles/iview.css';
import store from './store'
console.log(Vue)
console.log(iview)
Vue.use(VueRouter);
// Vue.use(Vuex);


Vue.use(iview);


// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iview.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iview.LoadingBar.finish();
    window.scrollTo(0, 0);
});



new Vue({
    el: '#app',
    router: router,
    store,
    render: h => h(App)
});