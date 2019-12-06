export const state = () => ({
    users: []
})

export const mutations = {
    SET_USERS (state, users) {
        state.users = users
    }
}

export const actions = {
    async FETCH_USERS ({ commit }) {
        const users = await this.$getUsers();
        commit('SET_USERS', users.data)
    }
}

export const getters = {
    getUsers: (state) => {
        return state.users
    }
}