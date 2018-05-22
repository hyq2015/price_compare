// import Vue from 'vue'
// import Vuex from 'vuex'
// import cart from './modules/cart'
import products from './modules/productlist_module'
import orderlist from './modules/orderlist_module'
import main from './modules/main_module'
import shoplist from './modules/shoplist_module'
import toreviewlist from './modules/toreviewlist_module'
import rejectproductlist from './modules/rejectproductlist_module'
import login from './modules/login_module'
import createProduct from './modules/createproduct_module'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        // cart,
        products,
        orderlist,
        main,
        shoplist,
        toreviewlist,
        rejectproductlist,
        login,
        createProduct

    },
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
})
