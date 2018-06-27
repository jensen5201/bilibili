export default {
    namespaced: true,
    state:{
        loading: true
    },
    mutations:{
        setLoading(state, payload){
            state.loading = payload
        }
    },
    actions: {
        getUserInfo(commit, payload){
            const res = User.userInfo(payload)
            return res
        }
    }
}