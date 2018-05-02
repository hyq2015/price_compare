import Vue from 'vue'
import Vuex from 'vuex'
// import cart from './modules/cart'
import products from './modules/productlist_module'
import orderlist from './modules/orderlist_module'
import main from './modules/main_module'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        // cart,
        products,
        orderlist,
        main

    },
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
})
