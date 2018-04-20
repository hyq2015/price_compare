<style scoped>
    .form_outer{
        overflow: hidden;
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
            <Button type="success" long>提交</Button>
        </Form>
    </div>

</template>
<script>
    export default{
        data:function (){
            return{
                product:{
                    name:'',
                    scaleName:'',
                    price:'',
                    date:''
                }
            }
        }
    }
</script>
