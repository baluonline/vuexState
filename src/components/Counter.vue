<template>
    <div>
        <button class="primary" @click="increment(3)">Increment </button>
        <button class="primary" @click="decrement(3)">decrement </button>
    </div>

</template>

<script>

import { mapActions } from 'vuex';
import * as types from './store/constants';

export default {
    name:'counter',

    methods:{
        ...mapActions({
            'increment':types.INCRMENT,
            'decrement':types.DECRMENT
        })
            }

}
</script>