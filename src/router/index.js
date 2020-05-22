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
      path: '/',
      name: '/',
      component: HelloWorld,
      meta: {
        title: 'HelloWorld',
        roles: [],
        icon: 'el-icon-info'
      },
    },
    {
      path: '/shouye',
      name: '/ShouYe',
      meta: {
        title: 'ShouYe',
        icon: 'el-icon-info',
        roles: ['user', 'admin']
      },
      component: ShouYe
    },
    {
      path: '/user',
      name: '/User',
      meta: {
        title: 'User',
        icon: 'el-icon-info',
        roles: ['user']
      },
      component: User
    },
    {
      path: '/sider',
      component: Sider,
      name: Sider,
      meta: {
        title: 'Sider',
        icon: 'el-icon-info',
        roles: ['user', 'admin']
      },
      children: [{
        path: 'main',
        name: '/sider/Main',
        component: Main,
        meta: {
          title: 'Main',
          roles: ['user', 'admin'],
          icon: 'el-icon-info'
        }
      },
      {
        path: 'index',
        name: '/sider/Index',
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
