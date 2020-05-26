<template>
  <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:flex-start;">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="3" @click="addRouteshouye">
            <i class="el-icon-document"></i>
            <span slot="title">shouye</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>sider</span>
            </template>
              <el-menu-item index="1-1" @click="addRoutes1">首页</el-menu-item>
              <el-menu-item index="1-2" @click="addRoutes2">Index</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="12">
        <el-menu background-color="#132347" text-color="#bfcbd9" active-text-color="#ffd04b" router unique-opened>
            <sidebar-item :menu="menuList" />
        </el-menu>
      </el-col>
    </el-row>
    <router-view style="width:calc(100% - 200px)"></router-view>
  </div>
</template>
<script>
import SidebarItem from './SidebarItem'
import { mapState } from 'vuex'
export default {
  components: { SidebarItem },
  name: 'Sider',
  data () {
    return {
      meuns: ''
    }
  },
  methods: {
    addRoutes1 () {
      this.$router.push('/sider/main')
    },
    addRoutes2 () {
      this.$router.push('/sider/index')
    },
    addRouteUser () {
      this.$router.push('/user')
    },
    addRouteshouye () {
      this.$router.push('/shouye')
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted () {
    this.meuns = this.routes
    console.log('menuList:'+this.menuList)
  },
  computed: {
    ...mapState({ menuList: state => state.menuList })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tac{
  width:200px;
  height: 100%;
  background-color: rgb(84, 92, 100);
}
.el-col-12{
  width: 100%;
}
</style>

<style>
.el-menu{
  border-right: solid 0px #e6e6e6;
}
</style>
