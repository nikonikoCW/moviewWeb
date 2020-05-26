import Vue from 'vue'
import Vuex from 'vuex'
import routerFun from '../muen'
Vue.use(Vuex)

const state = {
  name: '张三',
  muenList:'33',
  meunlsit:[],
  routeList:[],
  roles:sessionStorage.getItem("userRole")
}

const mutations = {
  changeNameToZhangsan (state) {
    state.name = '李四'
  },
  changeNameWithParam (state, payload) {
    state.name = payload.name
  },
  changeMeun (state) {
    state.muenList = 'awu'
  },
  setMeun (state,payload) {
    console.log('123123123')
    let bb = routerFun(state.roles)
    state.routeList = bb.routeList
    this.commit('INIT_MENU', bb.menuList)
  },
  INIT_MENU(state, params) {
      state.menuList = params
  }
}

const actions = {
  changeNameToZhangsan(context){
    context.commit('changeMeun')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
