const state={
    columns1:[
        {
            title:'商品名称',
            key:'name'
        },
        {
            title:'商家图片',
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
            title:'商品视频',
            key:'video'
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
                    },'审核')
                ])
            }
        }
    ],
    data1:[
        {
            name:'测试商家',
            imgurl:'http://cdn.genwoshua.com/o_1bq6pqk191vcqc6278h4hoe2r14f.jpg',
            video:'是',
            phone:'18030638805',
            username:'瓜牛'
        }
    ]
};
const getters={
    toreviewlist_columns1:(state,getters,rootState)=>{
        return state.columns1
    },
    toreviewlist_data1:(state,getters,rootState)=>{
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