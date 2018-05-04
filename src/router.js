const routers = [
    {
        path: '/product/list',
        meta: {
            title: '商品列表'
        },
        component: (resolve) => require(['./views/productList.vue'], resolve)
    },
    {
        path: '/addlog',
        meta: {
            title: '添加记录'
        },
        component: (resolve) => require(['./views/addlog.vue'], resolve)
    },
    {
        path: '/product/create',
        meta: {
            title: '创建商品'
        },
        component: (resolve) => require(['./views/createProduct.vue'], resolve)
    },
    {
        path: '/orders/list',
        meta: {
            title: '订单列表'
        },
        component: (resolve) => require(['./views/orderlist.vue'], resolve)
    },
    {
        path: '/orders/chart',
        meta: {
            title: '交易走势'
        },
        component: (resolve) => require(['./views/orderchart.vue'], resolve)
    },
    {
        path: '/shop/create',
        meta: {
            title: '创建商家'
        },
        component: (resolve) => require(['./views/createshop.vue'], resolve)
    },
    {
        path: '/shop/list',
        meta: {
            title: '商家列表'
        },
        component: (resolve) => require(['./views/shoplist.vue'], resolve)
    },
    {
        path: '/review/todo',
        meta: {
            title: '待审核列表'
        },
        component: (resolve) => require(['./views/toreview.vue'], resolve)
    },
    {
        path: '/review/reject',
        meta: {
            title: '驳回列表'
        },
        component: (resolve) => require(['./views/rejectproductlist.vue'], resolve)
    },
    {
        path: '/',
        meta: {
            title: '登录'
        },
        component: (resolve) => require(['./views/login.vue'], resolve)
    }

];
export default routers;