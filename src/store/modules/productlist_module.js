const state={
    columns1: [
        {
            title: '商品名称',
            key: 'name'
        },
        {
            title: '商品主图',
            key: 'imgurl',
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
            title: '视频',
            key: 'video',
            width:100
        },
        {
            title: '销量',
            key: 'sale',
            width: 100
        },
        {
            title: '评论',
            key: 'comment',
            width: 100
        },
        {
            title: '创建时间',
            key: 'creation',
            width: 200
        },
        {
            title: '所属商家',
            key: 'vendor'
        },
        {
            title: '质检员',
            key: 'reviewer',
            width: 140
        },
        {
            title: '操作',
            key: 'options',
            render: (h, params) => {
                return h('div', [
                    h('Button', {
                        props: {
                            type: 'text',
                            size: 'small'
                        },
                        on:{
                            'click':(e)=>{
                                console.log(e)
                                store.commit('optionClick')
                            }
                        }
                    }, '详情'),
                    h('Button', {
                        props: {
                            type: 'text',
                            size: 'small'
                        }
                    }, '编辑'),
                    h('Button', {
                        props: {
                            type: 'text',
                            size: 'small'
                        }
                    }, '删除'),
                    h('Button', {
                        props: {
                            type: 'text',
                            size: 'small'
                        }
                    }, '下架')
                ]);
            }
        }
    ],
    data1: [
        {
            name: '测试',
            imgurl: 'http://cdn.genwoshua.com/o_1bq6pqk191vcqc6278h4hoe2r14f.jpg',
            video: '测试',
            sale: 12,
            comment: '23',
            creation: '2018-04-12',
            vendor: '测试',
            reviewer: '测试'
        },
        {
            name: '测试',
            imgurl: 'http://cdn.genwoshua.com/o_1bq6pqk191vcqc6278h4hoe2r14f.jpg',
            video: '测试',
            sale: 12,
            comment: '23',
            creation: '2018-04-12',
            vendor: '测试',
            reviewer: '测试'
        }
    ],
    count:1
};
const getters={
    columns1:(state,getters,rootState)=>{
        return state.columns1
    },
    data1:(state,getters,rootState)=>{
        return state.data1
    },
    count:(state,getters,rootState)=>{
        return state.count
    }
};

const actions={
    increment({state,commit}){
        commit('increment',null)
    },
    decrement({state,commit}){
        commit('decrement',null)
    }
};

const mutations={
    increment(state){
        console.log(state);
        state.count+=1
    },
    decrement(state){
        state.count-=1
    }
};
export default {
    state,
    getters,
    actions,
    mutations
}