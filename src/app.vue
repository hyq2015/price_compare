<style lang="less">
    .admin_user{
        position: absolute;
        top:10px;
        right:10px;
        color: #ffffff;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .admin_name,.complete_profile{
            cursor: pointer;
            text-align: left;
            min-width:50px;
        }
        .admin_name{
            font-size: 16px;
        }
        .complete_profile{
            color: #00c8fb;
        }
    }

</style>
<template>
    <div style="position: relative;">
        <Menu v-if="showMenu" mode="horizontal" :theme="theme1" active-name="/product/list" @on-select="selectMenu">
            <Submenu name="product">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    商品
                </template>
                <MenuItem name="/">列表</MenuItem>
                <MenuItem name="/product/create">创建</MenuItem>
            </Submenu>
            <Submenu name="shop">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    商家
                </template>
                <MenuItem name="/shop/list">列表</MenuItem>
                <MenuItem name="/shop/create">创建</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    交易
                </template>
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
            <div class="admin_user">
                <div class="admin_name" v-text="userName"></div>
                <div class="complete_profile">完善信息</div>
            </div>
        </Menu>
        <router-view></router-view>
    </div>
</template>
<script>
    import {mapState,mapGetters} from 'vuex'
    export default {
        data() {
            return {
                theme1: 'dark'
            };
        },
        computed:{
            ...mapGetters({
                userName: 'main_userName',
                showMenu: 'main_showMenu',
            })
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