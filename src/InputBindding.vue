<template>
    <div id="input-bindding">
       		<!-- <add-blog></add-blog> -->
       		<app-request></app-request>
    </div>
</template>

<script>
	import	AddBlog from './components/AddBlog.vue'
	import	GetRequest from './components/GetRequest.vue'
export default {
	components:{
		'add-blog' : AddBlog,
		'app-request'  :GetRequest
	},
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
