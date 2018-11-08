<template>
    <div class="main">
      <!--3、使用组件,value是组件里设定的属性-->
       <ZuJian value="传的值">
         <!--4、在组件里面可以给组件的插槽传HTML代码，slot指定是哪一个插槽，组件的插槽就会渲染成下面定义的HTML-->
         <div slot="chacao1">插槽1</div>
         <div slot="chacao2">插槽2</div>
       </ZuJian>
    </div>
</template>

<script>
import ZuJian from '../../components/ZuJian.vue'  //1、引入组件
   export default {
        name: "List",
     components:{
       ZuJian//2、映射成标签
     }
    }
</script>

<style scoped>

</style>
