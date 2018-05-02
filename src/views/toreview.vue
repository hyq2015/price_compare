<style>

</style>
<template>
    <Table :columns="columns1" :data="data1"></Table>
</template>
<script>

    import {mapGetters} from 'vuex'
    export default{
        computed:{
            ...mapGetters({
                columns1: 'toreviewlist_columns1',
                data1: 'toreviewlist_data1'
            })
        }
    }
</script>