<template>
  <div style="width:100%;height:100%;">
    <!-- <index style="height:500px;"/> -->
    <div style="display:flex;align-items:center;justify-content:center;width:100%;height:calc(100%)">
      <div>
        <div class="movie-title">
        <span>当前用户:{{this.$store.state.name}}</span>
        </div>
        <!-- 当前时长{{shichang_current}} -->
        <div style="background:green" id="container">
          <video-player class="video-player vjs-custom-skin shiyishi"
                  ref="videoPlayer"
                  :playsinline="true"
                  :options="playerOptions"
                  @play="onPlayerPlay($event)"
                  @pause="onPlayerPause($event)">
          </video-player>
        </div>
        <div style="width:100%;height:48px;display:flex;justify-content:space-between;align-items:center;margin-top:20px;">
          <el-input style="width:640px" v-model="message_barrage"></el-input>
          <el-button @click="SubmitBarrage" style="height:40px;width:120px;">发送</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Barrage from 'barrage-ui'
import example from 'barrage-ui/example.json'
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
import Index from './Index'
export default {
  components: {
    videoPlayer,Index
  },
  name: 'User',
  data () {
    return {
      MP4Url:'',
      message_barrage:'',
      danmu_list:[
        {
        time: 500,
        key:'123',
        createdAt: '2019-01-13T13:34:47.126Z',
        text: '陈伟。陈伟。陈伟。陈伟。陈伟。陈伟。陈伟。2222',
        fontSize: 24,
        color: '#0ff'
      }
      ],
      danmu_num:0,
      playerOptions: {},
      barrage_play:null,
      shichang_current:''
    }
  },
  methods:{
    onPlayerPlay(palyer){
      debugger
      this.barrage_play.play();
    },
    onPlayerPause(player){
      this.barrage_play.pause();
    },
    chushihua(){
      debugger
      this.playerOptions = {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'video/mp4', // 类型
          src: this.MP4Url// url地址
          // src: '/static/movies/fengjing.mp4'// url地址
        }],
        poster: 'static/images/123.jpg', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      }
    },
    SubmitBarrage(){
      debugger
      let aa = document.getElementsByClassName('vjs-tech')
      this.shichang_current = aa[0].currentTime
      const result = this.barrage_play.add({
        time:  this.shichang_current*1000,
        text: this.message_barrage,
      })
      if(result){
        this.$message({
          message: '弹幕插入成功！',
          type: 'success'
        });
        this.message_barrage = ''
      }else{
        this.$message({
          message: '当前进度弹幕过于饱和，请择机再试 ~(o_o)~',
          type: 'warning'
        });
      }
    },
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    },
  },
  mounted() {
    debugger
    this.$route.query.id
    this.MP4Url = 'http://39.100.244.168:3030/video2/'+this.$route.query.id
    this.chushihua()
    console.log(example)
    this.barrage_play = new Barrage({
      container: document.getElementById('container'),
      data: example,
      config: {
        duration: -1,
        defaultColor: '#fff'
      }
    })
    // this.barrage_play.add({
    //   key: 'fctc651a9pm2j20bia8j',
    //   time: 1000,
    //   text: '这是新增的一条弹幕',
    //   fontSize: 24,
    //   color: '#0ff'
    // })
    console.log(this.barrage_play)
    // this.barrage_play.play()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movie-title{
  width: 800px;
  text-align: center;
  margin-bottom: 10px;
}
</style>
