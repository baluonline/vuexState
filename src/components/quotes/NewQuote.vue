<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>Quote</label>
        <textarea class="form-control" rows="3" v-model="quote"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
          <button class="primary add-quote" @click.prevent="createNew">
              Add Quote
            </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            quote:''
        }
    },
    methods:{
        createNew(){
            this.$emit("quoteAdded",this.quote);
            this.quote="";
        }
    }


};



</script>

<style>
.add-quote{
    background-color: blue;
    color: white;
    
}
</style>