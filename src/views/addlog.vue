<style scoped>
    .form_outer{
        padding-top: 1px;
    }
    .add_form{
        margin:100px auto 0;
    }
</style>
<template>
    <div class="form_outer">
        <Form :label-width="80" class="add_form" style="width: 800px;">
            <FormItem label="日期">
                <DatePicker type="date" placeholder="选择日期" style="width: 200px"></DatePicker>
            </FormItem>
            <FormItem label="商品名称">
                <Input v-model="product.name" placeholder="输入商品名称..."></Input>
            </FormItem>
            <FormItem label="商品型号">
                <Input v-model="product.scaleName" placeholder="输入商品规格/型号..."></Input>
            </FormItem>
            <FormItem label="商品价格">
                <Input v-model="product.price" placeholder="输入商品价格..."></Input>
            </FormItem>
            <FormItem label="商品图片">
                <Switch v-model="product.hasImg" @on-change="change"></Switch>
                <Upload
                        v-if="product.hasImg"
                        :before-upload="handleUpload"
                        multiple
                        type="select"
                        action="//jsonplaceholder.typicode.com/posts/">
                    <div style="padding: 20px 0">
                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                        <p>点击或拖拽即可上传图片</p>
                    </div>
                </Upload>
                <img v-if="product.hasImg" :src="previewImg" style="width: 200px;height: 200px;"/>
            </FormItem>
            <Button type="success" long @click="getCode">提交</Button>
            <Button type="success" long @click="getLog">获取日志</Button>
        </Form>
    </div>
</template>
<script>
    import Util from '../libs/util'
    export default{
        data:function (){
            return{
                product:{
                    name:'',
                    scaleName:'',
                    price:'',
                    date:'',
                    hasImg:true
                },
                files:[],
                previewImg:''
            }
        },
        methods:{
            handleUpload(file){
                console.log(file);
                this.files.push(file);
                let reader=new FileReader();
                let _this=this;
                reader.onload= function (e) {
                    _this.previewImg=e.target.result
                };
                reader.readAsDataURL(file);
                return false
            },
            getCode(){
                Util.ajax({
                    method:'get',
                    url:'http://192.168.31.204:8090/portal/smsCode',
                    params:{
                        phone:'18030638805'
                    }
                }).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err.message)
                })
            },
            getLog(){
                Util.ajax({
                    method:'get',
                    url:'http://192.168.31.204:8090/portal/smsLog',
                    params:{
                        page:1,
                        pageSize:10
                    }
                }).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err.message)
                })
            },
            change(status){
                console.log(status)
            }
        }
    }
</script>
