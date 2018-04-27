<template>
    <div>
        <Menu mode="horizontal" :theme="theme1" active-name="/product/list" @on-select="selectMenu">
            <Submenu name="product">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    商品
                </template>
                <MenuItem name="/">列表</MenuItem>
                <MenuItem name="/product/add">创建</MenuItem>
            </Submenu>
            <Submenu name="shop">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    商家
                </template>
                <MenuItem name="/shop/list">列表</MenuItem>
                <MenuItem name="/shop/add">创建</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    交易
                </template>
                <MenuItem name="/orders/new">最新订单</MenuItem>
                <MenuItem name="/orders/list">订单列表</MenuItem>
                <MenuItem name="/orders/chart">交易走势</MenuItem>
            </Submenu>
            <Submenu name="4">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    商品审核
                </template>
                <MenuItem name="/review/todo">待审核列表</MenuItem>
                <MenuItem name="/review/reject">驳回列表</MenuItem>
            </Submenu>
        </Menu>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                theme1: 'dark'
            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            selectMenu(name){
                console.log(name);
                console.log(this.$router)
                this.$router.push(name)
            },
            selectMenu1(){
                console.log(1111)
            }
        }
    };
</script>