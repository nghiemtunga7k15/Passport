<template>
  <div id="app">
      <header>
         <app-header v-bind:demo_props_title="title" v-on:changeTitele="updateTile($event)" ></app-header>
      </header>
       <main>
         <div class="container">

        <!--  <div class="col-sm-6"><app-main v-bind:demo_props="peoples" ></app-main></div>
          <div class="col-sm-6"><app-helper v-bind:title_helper="title_helper">
                <h3 slot="title">Demo Slot (Ưu tiên dữ liệu từ Page Parent)</h3>
                <p slot="demo">Slot dùng để hiện thị nội dung or dữ liệu</p>
          </app-helper></div> -->

       <!--    <app-helper>
            <div slot="right" class="col-sm-4">
                <div class="panel panel-info">
                  <div class="panel-heading">
                    <h3 class="panel-title">Panel title</h3>
                  </div>
                  <div class="panel-body">
                    Panel content
                  </div>
                </div>
            </div>
          </app-helper> -->
       <!--  <app-helper></app-helper> -->
            <component v-bind:is="page"></component>
            <button v-on:click="page = 'app-header'" >{{$t('hello')}}</button>
            <button v-on:click="page = 'app-helper'" >Change</button>
       </div>
       </main>
       <footer>
         <app-footer></app-footer>
       </footer>
       <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import People from './components/Ninjs.vue'
  import Helper from './components/Helper.vue'
export default {
  components:{
    'app-header' : Header,
    'app-footer' : Footer,
    'app-main' : People,
    'app-helper' : Helper,
  },
  data () {
    return {
         peoples:[
            {name:'User 1' , age:20 , show:false},
            {name:'User 2' , age:21 , show:false},
            {name:'User 3' , age:22 , show:false}
        ],
      title:'VueJS',
      title_helper:'This is page Helper',
      page:'app-helper'
    }
  },
  methods:{
    updateTile:function (argument) {
        this.title =  argument
    }
  }
}
</script>

<style>

</style>
