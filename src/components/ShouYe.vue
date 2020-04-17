<template>
  <div style="width:calc(100% - 100px);height:100%;align-content: flex-start;display:flex;flex-wrap:wrap;padding-left:100px;">
    <div style="width:300px;height:200px;margin-right:50px;background:red;margin-top:50px;" v-for="i in 9" :key="i" @click="goToRouter">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShouYe',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    goToRouter () {
      this.$router.push('/user')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
