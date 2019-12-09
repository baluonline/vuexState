<template>
    <div>
        <button class="primary" @click="increment(3)">Increment </button>
        <button class="primary" @click="decrement(3)">decrement </button>
    </div>

</template>

<script>

import { mapActions } from 'vuex';

export default {
    name:'counter',

    methods:{
        ...mapActions([
            'increment',
            'decrement'
        ])
            }

}
</script>