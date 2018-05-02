const state={
    columns1:[
        {
            title:'商品名称',
            key:'name'
        },
        {
            title:'商品图片',
            key:'imgurl',
            width:140,
            height:140,
            render: (h, params) => {
//                        console.log(params)
                return h('img', {
                    domProps: {
                        src: params.row.imgurl+'?imageMogr2/thumbnail/!200x200r/gravity/Center/crop/200x200',
                    },
                    style: {width:'100px',height:'100px',margin:'10px 0'}
                })
            }
        },
        {
            title:'联系电话',
            key:'phone'
        },
        {
            title:'联系人',
            key:'username'
        },
        {
            title:'驳回理由',
            key:'reason'
        },
        {
            title:'操作',
            key:'options',
            render:(h,params)=>{
                return h('div',[
                    h('Button',{
                        props:{
                            type:'text',
                            size:'small'
                        },
                        on:{
                            'click':(e)=>{
                                console.log('点击')
                            }
                        }
                    },'详情'),
                    h('Button',{
                        props:{
                            type:'text',
                            size:'small'
                        },
                        on:{
                            'click':(e)=>{
                                console.log('点击')
                            }
                        }
                    },'删除')
                ])
            }
        }
    ],
    data1:[
        {
            name:'测试商家',
            imgurl:'http://cdn.genwoshua.com/o_1bq6pqk191vcqc6278h4hoe2r14f.jpg',
            phone:'18030638805',
            username:'瓜牛',
            reason:'内容太差,商品质量达不到平台的要求'
        }
    ]
};
const getters={
    rejectproductlist_columns1:(state,getters,rootState)=>{
        return state.columns1
    },
    rejectproductlist_data1:(state,getters,rootState)=>{
        return state.data1
    }
};
const actions={

};
const mutations={

};
export default {
    state,
    getters,
    actions,
    mutations
}