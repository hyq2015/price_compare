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
        <!--<Input v-model="globalUserName"/>-->
        <!--<p>当前数字:{{count}}</p>-->
        <!--<i-button type="primary" @click="increment">increment</i-button>-->
        <!--<i-button type="primary" @click="decrement">decrement</i-button>-->
        <!--<div id="main" style="width: 100%;height: 300px;background-color: #00c8fb"></div>-->
        <!--</Col>-->
        <!--</Row>-->
    </div>
</template>
<script>
    import Vuex from 'vuex'
    import Util from '../libs/util'
    import {mapState,mapGetters} from 'vuex'

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
        data(){
            return{
                globalUserName:'瓜牛'
            }
        },
        created(){
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
                this.$store.dispatch('reviseUserName',this.globalUserName)
            },
            decrement() {
                this.$store.dispatch('decrement')
//                store.commit('decrement');
//                console.log(store.state.count); // -> 1
            }
        }
    };
</script>