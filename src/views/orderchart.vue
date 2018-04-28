<style scoped lang="less">
    .chart_page{
        margin-top:100px;
    }
    .chart_outer{
        width:80%;
        height: 440px;
        padding: 20px;
        box-sizing: border-box;
        background-color: #ffffff;
        margin:0 auto;
        border-radius: 4px;
        box-shadow: 0 1px 2px rgba(150,150,150,0.3);
        position: relative;
    }
    .query_part{
        width:80%;
        box-sizing: border-box;
        background-color: #ffffff;
        margin:2px auto 0;
        border-radius: 4px;
        padding: 20px;
        box-shadow: 0 1px 2px rgba(150,150,150,0.3);
        border-bottom:1px solid #eeeeee;
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
                    <DatePicker type="daterange" :options="options2" placement="bottom-start" placeholder="选择日期" style="width: 200px"></DatePicker>
                </FormItem>
                <FormItem>
                    <Button type="success">查询</Button>
                </FormItem>
            </Form>
        </div>
        <div class="chart_outer">
            <div id="main" style="width: 100%;height: 100%">

            </div>
        </div>
    </div>
</template>
<script>
    export default{
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
        created:()=>{
            let echarts = require('echarts');

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
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        offset:0,
                        data: ['2018-04-23', '2018-04-24', '2018-04-25', '2018-04-26', '2018-04-27', '2018-04-28', '2018-04-29']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 140, 934, 4290, 1330, 1320],
                        type: 'line',
                        lineStyle:{
                            width:4
                        }
                    }]
                });
            }, 100);
        }
    }
</script>