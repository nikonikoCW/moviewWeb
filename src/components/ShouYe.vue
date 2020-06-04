<template>
  <div>
    <div style="width:100%;height:80px;background:green"></div>
    <div style="width:calc(100% - 100px);height:calc(100% - 80px);align-content: flex-start;display:flex;flex-wrap:wrap;padding-left:100px;">
      <div style="width:300px;height:200px;margin-right:50px;background:#CCCCCC;margin-top:50px;" v-for="i in fengmian_list" :key="i" @click="goToRouter(i.mp4Url)">
        <img :src="`http://39.100.244.168:3030/img/`+i.fileUrl" alt="" style="width:300px;height:200px;">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ShouYe',
  data () {
    return {
      fengmian_list:[]
    }
  },
  computed: {
  },
  mounted(){
    debugger
    this.getFengMian()
  },
  methods: {
    goToRouter (val) {
      debugger
      this.$router.push({
        path:'/user',
        query: {
            id: val
        }
      })
    },
    getFengMian(){
      debugger
      axios.get('http://39.100.244.168:3030/')
      .then(res=>{
        debugger
        console.log(res)
        this.fengmian_list = res.data
      })
      .catch((error) => {
        console.log(error);//异常
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
