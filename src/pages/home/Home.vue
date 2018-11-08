<template>
  <div class="main">
    home
    <mt-button style="margin-top: 10px;" type="primary" size="small" >提交申请</mt-button>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
    export default {
        name: "Home",
      data(){
          return{
            input:''
          }
      }

    }
</script>

<style scoped>

</style>
