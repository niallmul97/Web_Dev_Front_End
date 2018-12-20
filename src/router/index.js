import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Builds from '@/components/Builds'
import Parts from '@/components/Parts'
import CreateBuild from '@/components/CreateBuild'
import BuildContent from '@/components/BuildContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Builds',
      name: 'Builds',
      component: Builds
    },
    {
      path: '/Parts',
      name: 'Parts',
      component: Parts
    },
    {
      path: '/createBuild',
      name: 'CreateBuild',
      component: CreateBuild
    },
    {
      path: '/build/:buildId',
      name: 'BuildContent',
      component: BuildContent
    }
  ]
})
