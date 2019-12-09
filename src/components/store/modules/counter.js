const state ={
    counter:0,
};
const getters={
    doubleCounter:state => {
        return state.counter;
    },
    stringCounter:state => {
        return state.counter + ' Clicks';
    }
};
const mutations={
    increment: (state,payload) =>{
        state.counter += payload;
    },
    decrement: (state,payload) =>{
        state.counter -= payload;
    }
};
const actions ={
        increment: ({ commit },payload) => {
            commit('increment',payload);
        },
        decrement: ({ commit },payload) => {
            commit('decrement',payload);
        },
        asynchincrement: ({ commit },payload) => {
            setTimeout(() =>{
                commit('increment',payload.by);
            },payload.duration);
        },
        asynchdecrement: ({ commit },payload) => {
            setTimeout(() => {
                commit('decrement',payload.by);
            },payload.duration)
        },
};

export default {
    state,
    mutations,
    actions,
    getters
}
