const routers = [
    {
        path: '/portal/product/list',
        meta: {
            title: '商品列表'
        },
        component: (resolve) => require(['./views/productList.vue'], resolve)
    },
    {
        path: '/portal/addlog',
        meta: {
            title: '添加记录'
        },
        component: (resolve) => require(['./views/addlog.vue'], resolve)
    },
    {
        path: '/portal/product/create',
        meta: {
            title: '创建商品'
        },
        component: (resolve) => require(['./views/createProduct.vue'], resolve)
    },
    {
        path: '/portal/orders/list',
        meta: {
            title: '订单列表'
        },
        component: (resolve) => require(['./views/orderlist.vue'], resolve)
    },
    {
        path: '/portal/orders/chart',
        meta: {
            title: '交易走势'
        },
        component: (resolve) => require(['./views/orderchart.vue'], resolve)
    },
    {
        path: '/portal/shop/create',
        meta: {
            title: '创建商家'
        },
        component: (resolve) => require(['./views/createshop.vue'], resolve)
    },
    {
        path: '/portal/shop/list',
        meta: {
            title: '商家列表'
        },
        component: (resolve) => require(['./views/shoplist.vue'], resolve)
    },
    {
        path: '/portal/review/todo',
        meta: {
            title: '待审核列表'
        },
        component: (resolve) => require(['./views/toreview.vue'], resolve)
    },
    {
        path: '/portal/review/reject',
        meta: {
            title: '驳回列表'
        },
        component: (resolve) => require(['./views/rejectproductlist.vue'], resolve)
    },
    {
        path: '/portal/',
        meta: {
            title: '登录'
        },
        component: (resolve) => require(['./views/login.vue'], resolve)
    }

];
export default routers;