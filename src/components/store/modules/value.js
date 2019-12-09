const state ={
    value:0
};

const getters = {
    value:state => {
        return state.value
    }
};

const mutations={
    updatedValue:(state,payload) => {
        state.value=payload
    }
};

const actions= {
    updateValue:({ commit },payload) => {
        commit('updatedValue',payload)
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}

