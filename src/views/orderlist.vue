<style scoped>

</style>
<template>
    <div>
        <Table :columns="columns1" :data="data1"></Table>
        <div v-text="count"></div>
    </div>
</template>
<script>
    import Vuex from 'vuex'
    import Util from '../libs/util'
    import {mapState,mapGetters} from 'vuex'
    export default{
//        store,
//        computed:mapState({
//            count: state => state.count,
//            columns1:state=>state.columns1,
//            data1:state=>state.data1
//        }),
        computed:{
            ...mapGetters({
                columns1: 'orderlist_columns1',
                data1: 'orderlist_data1',
                count:'orderlist_count'
            })
        },
        created:()=>{
//            orderlist_
        },
        methods:{
            optionClick(){
                this.$store.dispatch('optionClick',null)
            }
        }
    }
</script>