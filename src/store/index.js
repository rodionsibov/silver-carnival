import { createStore } from 'vuex'

export default createStore({
    state: {
        likes: 0
    },
    getters: {
        doubleLikes(state) {
            return state.likes * 2
        }
    },
    mutations: {
        setName(state, payload) {
            state.name = payload
        }
    },
    actions: {
        saveName({ commit }, data) {
            commit('setName', data)
        }
    },
    modules: {}
})
