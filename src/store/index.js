import { createStore } from 'vuex'

export default createStore({
    state: {
        name: 'ros'
    },
    getters: {},
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
