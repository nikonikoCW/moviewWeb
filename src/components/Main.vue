<template>
  <div style="width:100%;height:100%;">
    <div style="width:100%;">{{names}}</div>
    <div style="width:100%">
    <el-button @click="changename">变成李四</el-button>
    
    <el-input v-model="newName" style="width:200px;"></el-input>
    <el-button @click="changeNameParam">param传参</el-button>
    </div>
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
    let roles = sessionStorage.getItem('userRole')
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
  },
  computed:{
    names(){
      return this.$store.state.name + this.$store.state.muenList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
