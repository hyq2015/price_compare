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
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
            <h1>
                <img src="https://raw.githubusercontent.com/iview/iview/master/assets/logo.png">
            </h1>
            <h2>
                <p>Welcome to your app!</p>
                <Button type="ghost" @click="handleStart">Start iView</Button>
            </h2>
            <p>当前数字:{{count}}</p>
            <i-button type="primary" @click="increment">increment</i-button>
            <i-button type="primary" @click="decrement">decrement</i-button>
            <div id="main" style="width: 100%;height: 300px;background-color: #00c8fb"></div>
            </Col>
        </Row>


    </div>
</template>
<script>
    import Vuex from 'vuex'
    import Util from '../libs/util'
    import {mapState} from 'vuex'

    const store = new Vuex.Store({
        state: {
            count: 0
        },
        mutations: {
            increment(state) {
                state.count += 1
            },
            decrement(state) {
                state.count -= 1
            }
        }
    });
    export default {
//        computed:{
//            count(){
//                return store.state.count
//            }
//        },
        computed: mapState({
            count: state => state.count
        }),
        store,
        created: () => {
//            console.log(this.$store)
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
            let echarts = require('echarts');

            // 基于准备好的dom，初始化echarts实例
            setTimeout(()=>{
                let myChart = echarts.init(document.getElementById('main'));
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '最近一周价格趋势'
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }]
                });
            },100);

        },
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            },
            increment() {
                store.commit('increment');
                console.log(store.state.count); // -> 1
            },
            decrement() {
                store.commit('decrement');
                console.log(store.state.count); // -> 1
            }
        }
    };
</script>