<template>
    <p> Counter is {{ doubleCounter }} </p>

</template>

<script>
import { mapGetters } from 'vuex';
import * as types from './store/constants';
export default {
    computed: {
        ...mapGetters({
            doubleCounter:types.DOUBLECOUNTER
        })
    }
}
</script>