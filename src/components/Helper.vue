<template>
  <div id="helper">
        <!-- <p>{{title_helper}}</p> -->
        <!-- Nhũng text có thể hiện thị tại đây -->
       <!--  <slot name="title"></slot>
        <slot name="demo"></slot> -->
       <!--  <div id="slot-right">
          <slot name ='right'></slot>
        </div> -->
<p>{{title}}</p> 


  </div>
</template>

<script>

export default {
  props:{
    title_helper:{
      type:String
    }
  },
  data () {
    return {
      title:'This is page Helper'
    }
  }
}
</script>

<style>

</style>
