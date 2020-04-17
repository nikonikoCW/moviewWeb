import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sider from '@/components/Sider'
import Main from '@/components/Main'
import Index from '@/components/Index'
import ShouYe from '@/components/ShouYe'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/shouye',
      name: 'ShouYe',
      component: ShouYe
    },
    {
      path: '/user',
      name: 'User',
      roles: ['user'],
      component: User
    },
    {
      path: '/sider',
      component: Sider,
      name: Sider,
      roles: ['user', 'admin'],
      children: [{
        path: 'main',
        name: 'Main',
        component: Main,
        meta: {
          title: '首页',
          roles: ['user', 'admin'],
          icon: 'el-icon-info'
        }
      },
      {
        path: 'index',
        name: 'Index',
        component: Index,
        meta: {
          title: 'Index',
          roles: ['user', 'admin'],
          icon: 'el-icon-info'
        }
      }
      ]
    }
  ]
})
