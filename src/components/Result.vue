<template>
<div>
    <p> Counter is {{ Counter }} </p>
    <p> Number of clicks :  {{ stringCounter}} </p>

</div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from './store/constants';

export default {
    computed: {
       ...mapGetters({
           'stringCounter' : types.STRINGCOUNTER,
           'Counter' : types.DOUBLECOUNTER,
       })
    }
}
</script>