import Vue from 'vue';
import Vuex from 'vuex';
// import counter from './modules/counter';
// import value from './modules/value';

/* import * as actions from './modules/actions';
import * as getters from './modules/getters';
import * as mutations from './modules/mutations'; */

import actions from './modules/counter/actions';
import getters from './modules/counter/getters';
import mutations from './modules/counter/mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        counter:0,
        value:0
    },
    actions,
    getters,
    mutations
})