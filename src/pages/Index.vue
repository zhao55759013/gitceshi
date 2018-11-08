<template>
    <div class="main">
       <div class="container">
         <!--keep-alive缓存-->
         <!--v-wechat-title为微信动态设置标题-->
         <keep-alive>
           <router-view v-wechat-title="$route.meta.title"></router-view>
         </keep-alive>
       </div>
      <router-link to="/home">home</router-link>
      <router-link to="/list">list</router-link>
      <router-link to="/order">order</router-link>
      <router-link to="/my">my</router-link>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>
