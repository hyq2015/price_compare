<style>
    .createshop_container {
        width: 1000px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
    }

    .add_form {
        width: 100%;
        margin: 50px auto 0;

    }
</style>
<template>
    <div class="createshop_container">
        <Form :label-width="120" class="add_form">
            <FormItem label="联系电话">
                <Input v-model="shop.phone" placeholder="输入联系电话..."></Input>
            </FormItem>
            <FormItem label="选择权限">
                <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                    <Checkbox
                            :indeterminate="indeterminate"
                            :value="checkAll"
                            @click.prevent.native="handleCheckAll">全选
                    </Checkbox>
                </div>
                <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                    <Checkbox label="商品列表"></Checkbox>
                    <Checkbox label="创建商品"></Checkbox>
                    <Checkbox label="商家列表"></Checkbox>
                    <Checkbox label="创建商家"></Checkbox>
                    <Checkbox label="订单列表"></Checkbox>
                    <Checkbox label="交易走势"></Checkbox>
                    <Checkbox label="待审核列表"></Checkbox>
                    <Checkbox label="驳回列表"></Checkbox>
                </CheckboxGroup>
            </FormItem>
            <!--<FormItem>-->
                <!--<Input v-model="userName" placeholder="请输入"/>-->
            <!--</FormItem>-->
            <FormItem>
                <Button type="success">保存</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    import Vuex from 'vuex'
    import Util from '../libs/util'
    import {mapState} from 'vuex'
    const store = new Vuex.Store({
        state: {
            shop: {
                phone: '',
                authList: []
            },
            userName: 'ricky',
            name:'ricky11',
            age:16
        },
        mutations: {
            updateUserName(state,userName) {
                state.userName=userName
            }
        }
    });
    export default {
        store,
        computed: {
            ...mapState(['shop', 'age', 'name']),
            userName: {
                get() {
                    return this.$store.state.userName
                },
                set(val) {
                    this.$store.commit('updateUserName', val)
                }
            }
        },
        data() {
            return {
                indeterminate: false,
                checkAll: true,
                checkAllGroup: ['商品列表', '创建商品', '商家列表', '创建商家', '订单列表', '交易走势', '待审核列表', '驳回列表']
            }
        },
        methods: {
            handleCheckAll() {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;

                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['商品列表', '创建商品', '商家列表', '创建商家', '订单列表', '交易走势', '待审核列表', '驳回列表'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange(data) {
                if (data.length === 8) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            },
        }
    }
</script>