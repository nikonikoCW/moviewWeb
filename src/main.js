// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import routerFun from './muen'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

const refresh = () => {
  store.commit('setMeun')
}
refresh()
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(ElementUI)

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   debugger
//   let bb = routerFun('admin')
//   console.log(bb)
//   if (to.path === '/' || to.path === '/sider') {
//     next()
//   } else {
//     debugger
//     let roles = store.state.name
//     if (roles) {
//       if (to.meta.roles.includes(roles)) {
//         next()
//       } else {
//         next({path: '/sider'})
//       }
//     } else {
//       next('/')
//     }
//   }
//   debugger
//   console.log(store.state.meunlsit)
// })
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
