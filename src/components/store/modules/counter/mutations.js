import * as types from './../../constants';

export default {
    [types.MUTATE_INCREMENT_COUNTER]:(state,payload) =>{
        state.counter += payload;
    },
    [types.MUTATE_DECREMENT_COUNTER]:(state,payload) =>{
        state.counter -= payload;
    },
    [types.MUTATE_UPDATE_VALUE] : (state,payload) => {
        state.value=payload
    }
}
