<template>
  <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
    xiiiiiiiii
    <el-button @click="changename">lisi</el-button>
    <el-input v-model="newName" style="width:200px;"></el-input>
    <el-button @click="changeNameParam">param</el-button>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data () {
    return {
      newName: ''
    }
  },
  mounted () {
    let roles = localStorage.getItem('userRole')
    console.log(roles)
  },
  methods: {
    changename () {
      debugger
      this.$store.commit('changeNameToZhangsan')
      console.log(this.$store.state.name)
    },
    changeNameParam () {
      this.$store.commit('changeNameWithParam', {
        name: this.newName
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
