const state={
    count:1,
    columns1: [
        {
            title: '商品名称',
            key: 'productName'
        },
        {
            title: '下单时间',
            key: 'creation',
            width:100
        },
        {
            title: '付款金额',
            key: 'price',
            width: 100
        },
        {
            title: '卖家',
            key: 'shopName',
            width: 100
        },
        {
            title: '配送状态',
            key: 'logistic',
            width: 100,
            render:(h,params)=>{
                return h('span',params.row.logistic.statusDesc)
            }
        },
        {
            title: '买家头像',
            key: 'buyer',
            width:140,
            height:140,
            render: (h, params) => {
//                        console.log(params)
                return h('div',[
//                                h('div',{
//                                    domProps:{
//                                        innerHTML:params.row.buyer.nickname
//                                    }
//                                }),
                        h('img',{
                            domProps: {
                                src: params.row.buyer.imgurl+'?imageMogr2/thumbnail/!100x100r/gravity/Center/crop/200x200',
                            },
                            style: {width:'50px',height:'50px',borderRadius:'100%',margin:'5px 0'}
                        })
                    ]
                )
            }
        },
        {
            title: '买家昵称',
            key: 'nickname',
            render:(h,params)=>{
                return h('span',params.row.buyer.nickname)
            }
        },
        {
            title: '买家留言',
            key: 'comment'
        },
        {
            title: '买家电话',
            key: 'phone'
        },
        {
            title: '操作',
            key: 'options',
            render: (h, params) => {
                if(params.row.logistic.status!='NO'){
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'text',
                                size: 'small'
                            },
                            on:{
                                'click':(e)=>{
                                    console.log(e)
                                    // store.commit('optionClick')
                                    mutations.optionClick()
                                }
                            },
                            style:{
                                padding:0
                            }
                        }, '详情')
                    ]);
                }else{
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'text',
                                size: 'small'
                            },
                            on:{
                                'click':(e)=>{
                                    console.log(e)
                                    // store.commit('optionClick')
                                    mutations.optionClick()
                                }
                            },
                            style:{
                                padding:0
                            }
                        }, '详情'),
                        h('Button', {
                            props: {
                                type: 'text',
                                size: 'small'
                            },
                            on:{
                                'click':(e)=>{
                                    console.log(e)
                                    mutations.optionClick()
                                }
                            }
                        }, '发货')
                    ]);
                }

            }
        }
    ],
    data1: [
        {
            productName: '测试',
            creation: '2018-04-12',
            price: 12,
            shopName:'测试卖家',
            logistic: {
                status:'YES',
                statusDesc:'已配送'
            },
            buyer: {
                imgurl:'http://cdn.genwoshua.com/avatar/a9a1707c366647cc9e80bcb93780ce6c',
                nickname:'瓜牛'
            },
            comment: '希望蔬菜够新鲜',
            phone:'18030638805'
        },
        {
            productName: '测试',
            creation: '2018-04-12',
            price: 12,
            shopName:'测试卖家',
            logistic: {
                status:'NO',
                statusDesc:'未配送'
            },
            buyer: {
                imgurl:'http://cdn.genwoshua.com/avatar/a9a1707c366647cc9e80bcb93780ce6c',
                nickname:'瓜牛'
            },
            comment: '希望蔬菜够新鲜',
            phone:'18030638805'
        },
        {
            productName: '测试',
            creation: '2018-04-12',
            price: 12,
            shopName:'测试卖家',
            logistic: {
                status:'SELFHELP',
                statusDesc:'买家自提'
            },
            buyer: {
                imgurl:'http://cdn.genwoshua.com/avatar/a9a1707c366647cc9e80bcb93780ce6c',
                nickname:'瓜牛'
            },
            comment: '希望蔬菜够新鲜',
            phone:'18030638805'
        }
    ]
};
const getters={
    orderlist_columns1:(state,getters,rootState)=>{
        return state.columns1
    },
    orderlist_data1:(state,getters,rootState)=>{
        return state.data1
    },
    orderlist_count:(state,getters,rootState)=>{
        return state.count
    }
};
const actions={
    optionClick({state,commit}){
        commit('optionClick')
    }
};
const mutations={
    optionClick(oldstate){
        console.log('option click')
        state.count++;
        console.log(state.count)
    },
};
export default {
    state,
    getters,
    actions,
    mutations
}