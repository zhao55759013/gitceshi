import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import My from '@/pages/my/My'
import Order from '@/pages/order/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
     redirect:'home', //重定向，可以让页面跳转到重定向指定的页面
      children:[
        //首页
        {
          path:'/home',
          name:'home',
          component: Home,
          meta:{
            title:'首页'
          },
        },
        //订单查询预约
        {
          path:'/order',
          name:'order',
          component:Order,
          meta:{
            title:'订单查询预约'
          }
        },
        //订单列表
        {
          path:'/list',
          name:'list',
          component:List,
          meta:{
            title:'订单列表'
          }
        },

      ]
    },//我的
    {
      path:'/my',
      name:'my',
      component:My,
      meta:{
        title:'我的'
      }
    },
  ]
})
