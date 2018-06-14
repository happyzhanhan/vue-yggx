import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import userinfo from '@/components/userinfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: userinfo
    },
    {
      path: '*',
      component: HelloWorld
    }
  ]
})