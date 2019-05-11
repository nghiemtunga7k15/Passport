<template>
  <div id="user">
      <ul class="list-group">
         <li class="list-group-item" v-for="user in demo_props" v-on:click="user.show = !user.show"> 
          {{user.name}}
            <div class="help-block" v-show="user.show">{{user.age}}</div>
         </li>
       </ul>
       <button v-on:click="deleteUser">Delete User</button>
  </div>
</template>

<script>
export default {
  props:{
      demo_props:{
        type:Array
      }
  },
  data () {
    return {
    
    }
  },
  methods:{
    deleteUser:function () {
      this.demo_props.pop();
    }
  },
  //  lifecycle
    // beforeCreate(){
    //   alert('Before Create');
    // },
    // created(){
    //   alert('Create');
    // },
    // beforeMount(){
    //   alert('Before Mount');
    // },
    // mounted(){
    //   alert('Mount');
    // }
}
</script>

<style>
 
</style>
