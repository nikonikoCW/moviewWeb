import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  name: '张三'
}

const mutations = {
  changeNameToZhangsan (state) {
    state.name = '李四'
  },
  changeNameWithParam (state, payload) {
    state.name = payload.name
  }
}

export default new Vuex.Store({
  state,
  mutations
})
