<template>
<div>
    <p> Counter is {{ Counter }} </p>
    <p> Number of clicks :  {{ stringCounter}} </p>

</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
       ...mapGetters({
           stringCounter : 'stringCounter',
           Counter : 'doubleCounter',
       })
    }
}
</script>