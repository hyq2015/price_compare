const state={
    userName:'瓜牛1',
    showMenu:false
};
const getters={
    main_userName:(state,getters,rootState)=>{
        return state.userName
    },
    main_showMenu:(state,getters,rootState)=>{
        return state.showMenu
    }
};
const actions={
    changeName({state,commit}){
        commit('changeName',null)
    },
    reviseUserName({state,commit},newName){
        console.log(newName)
        commit('reviseUserName',newName)
    },
    changeMenuStatus({state,commit},newStatus){
        commit('changeMenuStatus',newStatus)
    }
};
const mutations={
    changeName(state){
        console.log('change name')
    },
    reviseUserName(state,newName){
        state.userName=newName
    },
    changeMenuStatus(state,newStatus){
        state.showMenu=newStatus
    }
};
export default {
    state,
    getters,
    actions,
    mutations
}