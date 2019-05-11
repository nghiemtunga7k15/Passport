<template>
    <div id="router-params">
       	<h1>Demo Router Params</h1>
        <p>{{id}}</p>
    </div>
</template>

<script>
	
export default {
	
  data () {
    return {
      id:this.$route.params.id,
      blog:{

      }
    }
  }

}
</script>

<style>

</style>
