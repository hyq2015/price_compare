<style scoped>
    .add_form{
        width:1000px;
        margin:50px auto 0;
    }
    .scale_item{
        position: relative;
    }
    .del_icon{
        position: absolute;
        right:-20px;
        top:50%;
        margin-top:-10px;
        cursor: pointer;
    }
    .btn{
        width:100px;
    }
</style>
<template>
    <div class="form_outer">
        <Form :label-width="120" class="add_form">
            <FormItem label="商品名称">
                <Input v-model="product.name" placeholder="输入商品名称..."></Input>
            </FormItem>
            <div v-for="(item,index) in product.scaleDto" class="scale_item">
                <FormItem label="商品型号">
                    <Input v-model="item.name" placeholder="输入商品规格/型号..."></Input>
                </FormItem>
                <FormItem label="商品价格">
                    <InputNumber style="width: 100%" :min="0.1" v-model="item.price" placeholder="输入规格价格..."></InputNumber>
                </FormItem>
                <div class="del_icon" @click="deleteScale(index,$event)">
                    <Tooltip content="删除此规格" placement="right">
                        <Icon size="20" type="trash-a" v-if="index!=0"></Icon>
                    </Tooltip><br><br>
                </div>
            </div>
            <FormItem>
                <div style="cursor: pointer;font-size: 14px;width: 100px;" @click="addScale">
                    <span>添加规格</span>
                    <Icon type="plus-round" size="14"></Icon>
                </div>
            </FormItem>

            <FormItem label="商品封面">
                <Upload
                        :before-upload="handleUpload"
                        type="select"
                        action="//jsonplaceholder.typicode.com/posts/">
                    <div style="padding: 20px 0">
                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                        <p>点击或拖拽即可上传图片</p>
                    </div>
                </Upload>
            </FormItem>
            <FormItem label="商品介绍图片">
                <Upload
                        :before-upload="handleUpload"
                        type="select"
                        multiple
                        action="//jsonplaceholder.typicode.com/posts/">
                    <div style="padding: 20px 0">
                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                        <p>点击或拖拽即可上传图片</p>
                    </div>
                </Upload>
            </FormItem>
            <FormItem label="商品视频">
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
                <!--<img v-if="product.hasImg" :src="previewImg" style="width: 200px;height: 200px;"/>-->
            </FormItem>
            <FormItem>
                <Button type="success" class="btn" @click="saveData">提交</Button>
                <Button type="primary" class="btn" @click="previewData">预览</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    import Vuex from 'vuex'
    import Util from '../libs/util'
    import {mapState} from 'vuex'
    const store=new Vuex.Store({
        state:{
            product:{
                name:'',
                scaleDto:[
                    {
                        name:'',
                        price:0.1,
                        originPrice:''
                    }
                ],
                imgurl:'',
                detailImgs:[],
                video:'',
                hasVideo:true,
                belongShop:{
                    id:'',
                    name:''
                }
            }
        },
        mutations:{
            handleUpload(){

            },
            saveData(){

            },
            previewData(){

            },
            addScale(state){
                state.product.scaleDto.push({
                    name:'',
                    price:0.1,
                    originPrice:''
                })
            },
            deleteScale(state,index){
                state.product.scaleDto.splice(index,1)
            }
        }
    });
    export default {
        computed: mapState({
            product:state=>state.product
        }),
        store,
        methods:{
            handleUpload(){

            },
            saveData(){

            },
            previewData(){

            },
            change(){

            },
            addScale(){
                store.commit('addScale')
            },
            deleteScale(index,event){
//                console.log(index)
//                console.log(event)
                store.commit('deleteScale',index)
            }
        }
    }
</script>