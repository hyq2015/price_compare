<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .index .ivu-row-flex {
        height: 100%;
    }
</style>
<template>
    <div>
        <Table :columns="columns1" :data="data1"></Table>
        <!--<Row type="flex" justify="center" align="middle">-->
        <!--<Col span="24">-->
        <!--<h2>-->
        <!--<p>Welcome to your app!</p>-->
        <!--<Button type="ghost" @click="handleStart">Start iView</Button>-->
        <!--</h2>-->
        <p>当前数字:{{count}}</p>
        <i-button type="primary" @click="increment">increment</i-button>
        <i-button type="primary" @click="decrement">decrement</i-button>
        <!--<div id="main" style="width: 100%;height: 300px;background-color: #00c8fb"></div>-->
        <!--</Col>-->
        <!--</Row>-->
    </div>
</template>
<script>
    import Vuex from 'vuex'
    import Util from '../libs/util'
    import {mapState,mapGetters} from 'vuex'

    const store = new Vuex.Store({
        state: {
            count: 0,
            columns1: [
                {
                    title: '商品名称',
                    key: 'name'
                },
                {
                    title: '商品主图',
                    key: 'imgurl',
                    width:140,
                    height:140,
                    render: (h, params) => {
//                        console.log(params)
                        return h('img', {
                            domProps: {
                                src: params.row.imgurl+'?imageMogr2/thumbnail/!200x200r/gravity/Center/crop/200x200',
                            },
                            style: {width:'100px',height:'100px',margin:'10px 0'}
                        })
                    }
                },
                {
                    title: '视频',
                    key: 'video',
                    width:100
                },
                {
                    title: '销量',
                    key: 'sale',
                    width: 100
                },
                {
                    title: '评论',
                    key: 'comment',
                    width: 100
                },
                {
                    title: '创建时间',
                    key: 'creation',
                    width: 200
                },
                {
                    title: '所属商家',
                    key: 'vendor'
                },
                {
                    title: '质检员',
                    key: 'reviewer',
                    width: 140
                },
                {
                    title: '操作',
                    key: 'options',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on:{
                                    'click':(e)=>{
                                        console.log(e)
                                        store.commit('optionClick')
                                    }
                                }
                            }, '详情'),
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                }
                            }, '编辑'),
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                }
                            }, '删除'),
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                }
                            }, '下架')
                        ]);
                    }
                }
            ],
            data1: [
                {
                    name: '测试',
                    imgurl: 'http://cdn.genwoshua.com/o_1bq6pqk191vcqc6278h4hoe2r14f.jpg',
                    video: '测试',
                    sale: 12,
                    comment: '23',
                    creation: '2018-04-12',
                    vendor: '测试',
                    reviewer: '测试'
                },
                {
                    name: '测试',
                    imgurl: 'http://cdn.genwoshua.com/o_1bq6pqk191vcqc6278h4hoe2r14f.jpg',
                    video: '测试',
                    sale: 12,
                    comment: '23',
                    creation: '2018-04-12',
                    vendor: '测试',
                    reviewer: '测试'
                }
            ]
        },
        mutations: {
            increment(state) {
                state.count += 1
            },
            decrement(state) {
                state.count -= 1
            },
            optionClick(){
                console.log('option click')
            }
        }
    });
    export default {
//        computed:{
//            count(){
//                return store.state.count
//            }
//        },
//        computed: mapState({
//            count: state => state.count,
//            columns1:state=>state.columns1,
//            data1:state=>state.data1
//        }),
//        store,
        computed:{
            ...mapGetters({
                columns1: 'columns1',
                data1: 'data1',
                count: 'count'
            })
        },
        created: () => {
            setTimeout(()=>{
                console.log(this)
            },500)

//            Util.ajax({
//                method: 'get',
//                url: 'http://demo.renren.io/renren-fast//sys/user/list',
//                headers: {
//                    token: 'eadf6c8378a0bef359523eeb842a4f65',
//                    cookie: 'JSESSIONID=12c6b670-89bb-41fe-90e3-3e05a2852ad8; UM_distinctid=162190c86283eb-005a569e1e18a9-454c062c-384000-162190c86298d2'
//                },
//                params: {
//                    t: new Date().getTime(),
//                    page: 1,
//                    limit: 10,
//                    username: ''
//                }
//            }).then((res) => {
//                console.log(res)
//            }).catch(err => {
//                console.log(err.message)
//            });


        },
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            },
            increment() {
//                store.commit('increment');
//                console.log(store.state.count); // -> 1
                this.$store.dispatch('increment')
                console.log(this.$store)
                this.$store.dispatch('reviseUserName','敦敦')
            },
            decrement() {
                this.$store.dispatch('decrement')
//                store.commit('decrement');
//                console.log(store.state.count); // -> 1
            }
        }
    };
</script>