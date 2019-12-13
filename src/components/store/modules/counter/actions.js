import * as types from './../../constants';
export default {
    [types.INCRMENT] : ({commit},payload) => {
        commit(types.MUTATE_INCREMENT_COUNTER,payload);
    },
    [types.DECRMENT] : ({commit},payload) => {
        commit(types.MUTATE_DECREMENT_COUNTER,payload);
    },
    [types.ASYNCHINCREMENT] : ({commit},payload) => {
        setTimeout(() => {
            commit(types.MUTATE_INCREMENT_COUNTER,payload.by);
        },payload.duration)
        },
    [types.ASYNCHDECREMENT] : ({commit},payload) => {
        setTimeout(() => {
            commit(types.MUTATE_DECREMENT_COUNTER,payload.by);
        },payload.duration)
    },
    [types.UPDATE_VALUE]: ({ commit },payload) => {
        commit(types.MUTATE_UPDATE_VALUE,payload)
    }

} 
/* decrement: ({ commit },payload) => {
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
}, */