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
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: 'HelloWorld',
        roles: ['user', 'admin'],
        icon: 'el-icon-info'
      },
    },
    {
      path: '/shouye',
      name: 'ShouYe',
      meta: {
        title: 'ShouYe',
        icon: 'el-icon-info',
        roles: ['user', 'admin']
      },
      component: ShouYe
    },
    {
      path: '/user',
      name: 'User',
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
        name: 'Main',
        component: Main,
        meta: {
          title: 'Main',
          roles: ['user', 'admin'],
          icon: 'el-icon-info'
        },
        children:[
          {
            path: 'index3',
            name: 'Index3',
            component: Index,
            meta: {
              title: 'Index3333',
              roles: ['user', 'admin'],
              icon: 'el-icon-info'
            }
          }
        ]
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
