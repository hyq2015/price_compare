const routers = [
    {
        path: '/',
        meta: {
            title: '欢迎使用'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/addlog',
        meta: {
            title: '添加记录'
        },
        component: (resolve) => require(['./views/addlog.vue'], resolve)
    }

];
export default routers;