import Util from '../../libs/util'
const state={
    product:{
        name:'',
        scaleDto:[
            {
                name:'',
                price:0.1,
                originPrice:''
            }
        ],
        imgurl:'',
        detailImgs:[],
        video:'',
        hasVideo:true,
        belongShop:{
            id:'',
            name:''
        }
    }
};
const getters={
    createshop_product:(state,getters,rootState)=>{
        return state.product
    }
};
const actions={
    saveData1({state,commit}){
        commit('saveData')
    },
    addScale({state,commit}){
        commit('addScale')
    },
    deleteScale({state,commit},index){
        commit('deleteScale',index)
    }
};
const mutations={
    handleUpload(){

    },
    saveData(state){
        console.log(state.product);
        Util.ajax({
            method:'post',
            url:'http://192.168.31.204:8090/portal/updateproduct',
            data:state.product
        }).then((res)=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    },
    previewData(){

    },
    addScale(state){
        state.product.scaleDto.push({
            name:'',
            price:0.1,
            originPrice:''
        })
    },
    deleteScale(state,index){
        state.product.scaleDto.splice(index,1)
    }
};
export default {
    state,
    getters,
    actions,
    mutations
}