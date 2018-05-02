const state={
    userName:'瓜牛1'
};
const getters={
    main_userName:(state,getters,rootState)=>{
        return state.userName
    }
};
const actions={
    changeName({state,commit}){
        commit('changeName',null)
    },
    reviseUserName({state,commit},newName){
        console.log(newName)
        commit('reviseUserName',newName)
    }
};
const mutations={
    changeName(state){
        console.log('change name')
    },
    reviseUserName(state,newName){
        state.userName=newName
    }
};
export default {
    state,
    getters,
    actions,
    mutations
}