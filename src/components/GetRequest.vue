<template>
    <div id="get">
       		 <ul class="list-group">
            <input type="text" v-model="search" placeholder="Search">
             <li class="list-group-item" v-for="item in filteredProduct">{{item.company_name}}</li>
           </ul>
           <h1>{{ title | to_uppercase }}</h1>
    </div>
</template>

<script>

export default {
	
  data () {
    return {
      product:[],
      title:'Demo',
      search:''
    }
  },
  methods:{

  },
  created:function () {
      this.$http.get('http://www.powerbersama.sg:3002/product/list-api').then(function(data){
          this.product = data.body
      })
  },
  // Tương tự như Method
  computed:{
    filteredProduct:function(){
      return this.product.filter((item)=>{
         return item.company_name.match(this.search);
      })
    }
  },
  // Cho phép sự dụng các fillter áp dụng vào các văn bản thường gặp (v-bind)
  filters:{
    'to_uppercase':function(value){
      return value.toUpperCase();
    }
  }


}
</script>

<style>

</style>
