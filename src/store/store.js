import Vue from 'vue'
import Vuex from 'vuex'
import routerFun from '../muen'
Vue.use(Vuex)

const state = {
  name: '张三',
  meunlsit:[],
  routeList:[]
}

const mutations = {
  changeNameToZhangsan (state) {
    state.name = '李四'
  },
  changeNameWithParam (state, payload) {
    state.name = payload.name
  },
  changeMeun (state, payload) {
    state.muenList = payload.name
  },
  setMeun (state,payload) {
    let bb = routerFun(payload)
    state.routeList = bb.routeList
    this.commit('INIT_MENU', bb.menuList)
  },
  INIT_MENU(state, params) {
      state.menuList = params
  }
}

const actions = {
}

export default new Vuex.Store({
  state,
  mutations
})
