<style lang="less">
    .login_bg{
        width:calc(100vw);
        height: calc(100vh);
        background: url("https://img.alicdn.com/tfs/TB1.bjZSXXXXXXsaXXXXXXXXXXX-1960-1680.jpg_s150.jpg") center no-repeat;
        background-size: cover;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login_form{
        padding: 20px;
        width:300px;
        /*background-color: rgba(0,0,0,.5);*/
        box-shadow: 0 7px 22px rgba(35,40,48,.75);
        height: 400px;
        .ivu-form-item-error-tip{
            color: #ffffff;
        }
    }
    .welcome_txt{
        width:132px;
        height: 30px;
        background: url("../static/images/login_txt.png") center no-repeat;
        background-size: cover;
        margin:20px auto 0;
    }
</style>
<template>
    <div>
        <div class="login_bg">
            <Form ref="formInline" class="login_form" :model="formInline" :rules="ruleInline">
                <FormItem>
                    <div class="welcome_txt"></div>
                </FormItem>
                <FormItem prop="phone" style="margin-top: 50px;">
                    <Input type="text" v-model="formInline.phone" placeholder="手机号" maxlength="11">
                        <Icon type="android-phone-portrait" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password" style="margin-top: 30px;">
                    <Input type="password" v-model="formInline.password" placeholder="密码">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem style="margin-top: 100px;">
                    <Button type="success" size="large" long @click="handleSubmit('formInline')">登录</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default{
        computed:{
            ...mapGetters({
            })
        },
        data(){
            return{
                formInline: {
                    phone: '',
                    password: ''
                },
                ruleInline: {
                    phone: [
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                        { type: 'string', min: 11,max:11, message: '请输入11位手机号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码不小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        created(){
            this.$store.dispatch('changeMenuStatus',false)
        },
        mounted(){

        },
        methods:{
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>