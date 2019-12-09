<template>
    <div>
        <hr>
        <button class="primary" @click="asynchincrement({by:3,duration:1000})">Asynch Increment </button>
        <button class="primary" @click="asynchdecrement({by:3,duration:1000})">Async decrement </button>
    </div>

</template>

<script>

import { mapActions } from 'vuex';

export default {
    name:'AsynchCounter',

    methods:{
        ...mapActions([
            'asynchincrement',
            'asynchdecrement'
        ])
            }

}
</script>