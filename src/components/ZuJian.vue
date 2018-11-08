<template>
  <div>
    <!--slot为插槽标签用于站位接受使用组件的页面传入HTML代码，多个slot需指定name区分-->
    <slot name="chacao1"></slot>
    <div>{{value}}</div>
    <slot name="chacao2"></slot>
  </div>
</template>

<script>
    export default {
        name: "ZuJian",
      //props用于接收值
      props:{
          value:String //定义值和值的类型
      }
    }
</script>

<style scoped>

</style>
