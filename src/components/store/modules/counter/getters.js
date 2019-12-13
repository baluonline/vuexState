import * as types from './../../constants';

export default {
    [types.DOUBLECOUNTER]:state => {
    return state.counter;
    },
    [types.STRINGCOUNTER]:state => {
    return state.counter + ' Clicks';
    },
    [types.VALUE] : state => {
        return state.value
    }
}