<style scoped lang="less">
    .chart_page{
        margin:0 auto 0;
        background-color: #ffffff;
        width:80%;
        max-width:1480px;
    }
    .chart_outer{
        height: 440px;
        padding: 20px;
        box-sizing: border-box;
        background-color: #ffffff;
        margin:0 auto;
        border-radius: 4px;
        /*box-shadow: 0 1px 2px rgba(150,150,150,0.3);*/
        position: relative;
    }
    .query_part{
        box-sizing: border-box;
        background-color: #ffffff;
        margin:2px auto 0;
        border-radius: 4px;
        padding: 20px;
        box-shadow: 0 1px 2px rgba(150,150,150,0.3);
        border-bottom:1px solid #eeeeee;
    }
    .table_outer{
        overflow: hidden;
        margin:0 auto;
    }
    .table_title{
        font-size: 20px;
        padding:30px 15px 15px 15px;
        box-sizing: border-box;
    }
</style>
<template>
    <div class="chart_page">
        <div class="query_part">
            <Form :label-width="80">
                <FormItem label="商家">
                    <Input readonly style="width:200px" v-model="vendor" placeholder="请选择商家"></Input>
                    <Button type="primary">选择</Button>
                    <!--<Row>-->
                        <!--<Col span="18">-->
                            <!--<Input type="text" v-model="vendor" placeholder="请选择商家"></Input>-->
                        <!--</Col>-->
                        <!--<Col span="4" offset="1">-->
                            <!--<Button type="ghost">选择</Button>-->
                        <!--</Col>-->
                    <!--</Row>-->
                </FormItem>
                <FormItem label="时间">
                    <DatePicker @on-change="changeDate" type="daterange" :options="options2" placement="bottom-start" placeholder="选择日期" style="width: 200px"></DatePicker>
                </FormItem>
                <FormItem>
                    <Button type="success" @click="queryData">查询</Button>
                </FormItem>
            </Form>
        </div>
        <div class="chart_outer">
            <div id="main" style="width: 100%;height: 100%">

            </div>
        </div>
        <div class="table_outer">
            <div class="table_title">详细数据</div>
            <Table :columns="columns1" :data="data1"></Table>
        </div>
    </div>
</template>
<script>
    import Vuex from 'vuex'
    import Util from '../libs/util'
    import {mapState} from 'vuex'
    const store = new Vuex.Store({
        state:{
            columns1:[
                {
                    title:'时间',
                    key:'date'
                },
                {
                    title:'总金额',
                    key:'totalAmount',
//                    render:(h,params)=>{
//                        return h('div',{
//                            domProps:{
//                                innerHTML:params.row.totalAmount
//                            },
//                            style:{
//                                textAlign:'right'
//                            }
//                        })
//                    },
                    align:'right'
                }
            ],
            data1:[
                {
                    date:'2018-04-21',
                    totalAmount:100
                }
            ],
            date:'2018-04-21 - 2018-04-28'
        },
        mutations:{
            changeDate(state,newDate){
                state.date=newDate
            }
        }
    });
    export default{
        store,
        computed: mapState({
            columns1:state=>state.columns1,
            data1:state=>state.data1,
            date:state=>state.date,
        }),
        data(){
            return{
                options2: {
                    shortcuts: [
                        {
                            text: '最近七天',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近十天',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 10);
                                return [start, end];
                            }
                        }
                    ]
                },
                vendor:'全部'
            }
        },
        created(){
//            let echarts = require('echarts');

            // 基于准备好的dom，初始化echarts实例
            setTimeout(() => {
                let myChart = echarts.init(document.getElementById('main'));
                //绘制图表
                myChart.setOption({
                    title: {
                        text: '最近一周价格趋势',
                        top:10,
                        x:'center'
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    xAxis: {
                        type: 'category',
                        offset:0,
                        splitLine: {show: false},
                        data: [
                            '2018-04-23',
                            '2018-04-24',
                            '2018-04-25',
                            '2018-04-26',
                            '2018-04-27',
                            '2018-04-28',
                            '2018-04-29',
                            '2018-04-30',
                            '2018-04-31',
                            '2018-04-32',
                            '2018-04-33',
                            '2018-04-34',
                            '2018-04-35',
                            '2018-04-36',
                            '2018-04-37',
                            '2018-04-38',
                            '2018-04-39',
                            '2018-04-40',
                            '2018-04-41',
                            '2018-04-42',
                            '2018-04-43',
                            '2018-04-44',
                            '2018-04-45',
                            '2018-04-46',
                            '2018-04-47',
                            '2018-04-48',
                            '2018-04-49',
                            '2018-04-50',
                            '2018-04-51',
                            '2018-04-52',
                            '2018-04-53',
                            '2018-04-54',
                            '2018-04-55',
                            '2018-04-56',
                            '2018-04-57',
                            '2018-04-58',
                            '2018-04-59'
                        ]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [
                            0,
                            1299,
                            0,
                            0,
                            0,
                            0,
                            820,
                            120,
                            820,
                            820,
                            820,
                            820,
                            358,
                            820,
                            820,
                            88,
                            820,
                            820,
                            820,
                            820,
                            829,
                            932,
                            140,
                            934,
                            4290,
                            1330,
                            1320,
                            1320,
                            1320,
                            1320,
                            1320,
                            1320,
                            1320,
                            1320,
                            1320,
                            1320,
                            1320
                        ],
                        type: 'line',
                        lineStyle:{
                            width:1
                        },
                        itemStyle : {
//                            normal: {label : {show: true}}
                        },
                        showAllSymbol:true
                    }]
                });
            }, 100);
        },
        methods:{
            queryData(){
                store.commit('changeDate',store.state.date)
            },
            changeDate(date){
                console.log(date)
            }
        }
    }
</script>