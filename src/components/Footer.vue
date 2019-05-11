<template>
      <div class="text-center footer">
          Coppyright {{by}} {{author}}
      </div>
</template>

<script>
export default {
  data () {
    return {
      author:'Tùng',
      by    :'By'
    }
  }
}
</script>

<style>
  .footer{
    background: silver;
  }
</style>
