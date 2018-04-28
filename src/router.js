const routers = [
    {
        path: '/',
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
    }

];
export default routers;