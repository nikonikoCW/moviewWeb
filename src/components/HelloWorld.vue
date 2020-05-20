<template>
  <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
    <el-card class="box-card">
      <el-input v-model="username"></el-input>
      <el-input v-model="password"></el-input>
      <el-button @click="login">123</el-button>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: '',
      password: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    login () {
      debugger
      let getUserRole = this.username === 'admin' ? 'admin' : 'user'
      localStorage.setItem('userRole', getUserRole)
      this.$router.push({
        path: '/sider'
      })
      this.$store.commit('changeNameWithParam', {
        name: this.username
      })
      debugger
      this.$store.commit('setMeun',this.username)
      debugger
      console.log(this.$store.state.menuList)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
