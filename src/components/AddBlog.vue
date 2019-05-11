<template>
    <div id="add-blog">
       	<div class="container">
       		<form >
       			<legend>Add Blog</legend>
       		
       			<div class="form-group">
       				<label for="">Blog Name</label>
       				<input type="text" class="form-control" id="" v-model.lazy="blog.name"  placeholder="Input field">
       			</div>
       			<div class="form-group">
       				<label for="">Blog Status</label>
       				<input type="text" class="form-control" id="" v-model.lazy="blog.status" placeholder="Input field">
       			</div>
       			<!-- <div class="checkbox">
       				<label>
       					<input type="checkbox" value="checkbox_1" v-model='blog.checkbox'>
       					Checkbox
       				</label>
       				<label>
       					<input type="checkbox" value="checkbox_2" v-model='blog.checkbox'>
       					Checkbox-2
       				</label>
       			</div>
       			<select name="" v-model="blog.select" id="input" class="form-control" required="required">
						<option  v-for="author in authors">{{ author }}</option>
       			</select> -->
       			<button v-on:click.prevent="post" class="btn btn-primary">Submit</button>
       		</form>
       	</div>
       	<div v-if="submited"> Thank You For Submit</div>
	    <!-- <div class="container">
	    	<p>Blog Name  :  {{ blog.name }}</p>
	    	<p>Blog Status : {{ blog.status }}</p>
	    	<ul>
	    		<li v-for="category in blog.checkbox">{{category}}</li>
	    	</ul>
	    	<p>Blog Select {{ blog.select }}</p>
	    </div> -->
    </div>
</template>

<script>
export default {
  data () {
    return {
    	blog:{
    		name:'',
    		status:'',
    		checkbox:[],
    		select:''
    	},
    	authors:['User 1' , 'User 2' , 'User 3'],
    	submited:false
    }
  },
  methods:{
  	post:function () {
  		 this.$http.post('https://jsonplaceholder.typicode.com/posts' , {
  		 	name : this.blog.name,
  		 	status : this.blog.status,
  		 }).then(data=>{
  		 	console.log(data.body.name);
  		 	this.submited = true
  		 })
  	}
  }
}
</script>

<style>

</style>
