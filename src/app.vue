<template>
    <div>
        <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="selectMenu">
            <MenuItem name="1">
                <Icon type="ios-paper"></Icon>
                账户设置
            </MenuItem>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    比价
                </template>
                <MenuItem name="/" on-select="selectMenu">比价列表</MenuItem>
                <MenuItem name="/addlog">新增记录</MenuItem>
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
            }
        }
    };
</script>