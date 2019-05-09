import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Opening from '@/components/opening'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: '/qiu/home',
    //   component: HelloWorld
    // },
    {
      path: '/',
      redirect: '/qiu/home'
    },
    {
      path: '/qiu/home',
      name: 'Opening',
      component: Opening
    }
  ]
})
