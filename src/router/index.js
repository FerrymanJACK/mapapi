import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [                 //路由数组，当前只包含一个路由,path, componnets
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
