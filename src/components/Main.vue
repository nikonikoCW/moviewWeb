<template>
  <div style="width:100%;height:100%;">
    <div style="width:100%;">{{names}}</div>
    <div style="width:100%">
      <el-button @click="changename">变成李四</el-button>

      <el-input v-model="newName" style="width:200px;"></el-input>
      <el-button @click="changeNameParam">param传参</el-button>
    </div>
    <div style="width:100%;height:400px;">
      <el-upload
        class="upload-demo"
        ref="upload"
        action="http://127.0.0.1:3000/upload"
        :on-success="handleSuccess"
        :on-change="fileChange"
        :on-error="handleError"
        :file-list="files"
        :on-remove="handleRemove"
        :auto-upload="false"
        :with-credentials="true"
      >
        <el-button size="small" type="primary">上传封面</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <el-upload
        class="upload-demo"
        ref="upload"
        action="http://127.0.0.1:3000/upload"
        :on-success="handleSuccess"
        :on-change="fileChange2"
        :on-error="handleError"
        :file-list="files2"
        :on-remove="handleRemove2"
        :auto-upload="false"
        :with-credentials="true"
      >
        <el-button size="small" type="primary">上传视频</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <el-button @click="upload" style="height:32px;line-height:0px;">上传</el-button>
      {{progress}}
    </div>
    <div style="width:100%;height:400px;background:#d5d5d5;display:flex;">
      <div style="width:50%;padding:10px;">
        <div style="width:100%;height:28px;text-align:center;">封面</div>
        <span v-for="i in files" :key="i">{{i.name}}</span>
      </div>
      <div style="width:50%;overflow:hidden;padding:10px;">
        <div style="width:100%;height:28px;text-align:center;">视频</div>
        <span v-for="i in files2" :key="i" style="width:200px;">{{i.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Main",
  data() {
    return {
      newName: "",
      value: "img",
      files: [],
      files2: [],
      videoFlag: false,
      videoUploadPercent: 0,
      progress:0
    };
  },
  mounted() {
    let roles = sessionStorage.getItem("userRole");
    console.log(roles);
  },
  methods: {
    handleRemove(file, files) {
      debugger;
      console.log(file, files);
      let bb = this.files.findIndex(x => x.uid === file.uid);
      this.files.splice(bb, 1);
    },
    handleRemove2(file, files) {
      debugger;
      let bb = this.files2.findIndex(x => x.uid === file.uid);
      this.files2.splice(bb, 1);
    },
    fileChange(file) {
      debugger;
      this.files = [];
      this.files.push(file.raw); //上传文件变化时将文件对象push进files数组
    },
    fileChange2(file) {
      debugger;
      this.files2 = [];
      this.files2.push(file.raw); //上传文件变化时将文件对象push进files数组
    },
    upload() {
      debugger;
      let uploadUrl = "http://39.100.244.168:3030/upload";
      let formData = new FormData();
      formData.append("logo",  this.files[0]);
      formData.append("mp4",  this.files2[0]);
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        //上传进度条
        onUploadProgress: progressEvent => {
            var complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
            this.progress = complete
        }
      };
      axios.post(uploadUrl, formData, config).then(res => {
        debugger;
        if (res.status === 200) {
          this.$message.success("上传成功");
          this.files = [];
          this.files2 = [];
        } else {
          this.$message.error("上传失败");
        }
      });
      // this.files2.forEach(element => {
      //   let formData = new FormData()
      //   formData.append('mp4', element)
      //   let config = {
      //       headers: {
      //           'Content-Type': 'multipart/form-data'
      //       }
      //   };
      //   axios.post(uploadUrl,formData,config).then(res=>{
      //       debugger
      //       if(res.status===200){
      //         this.$message.success('上传视频成功')
      //         this.files2 = []
      //       }else{
      //         this.$message.error('上传视频失败')
      //       }
      //   })
      // });
    },
    handleSuccess() {
      debugger;
    },
    handleError() {
      debugger;
    },
    myUpload(params) {
      debugger;
      var form = new FormData();
      form.append("file", content.file);
      axios
        .post(content.action, form)
        .then(res => {
          if (res.data.code != 0) {
            content.onError("文件上传失败, code:" + res.data.code);
          } else {
            content.onSuccess("文件上传成功！");
          }
        })
        .catch(error => {
          if (error.response) {
            content.onError("文件上传失败," + error.response.data);
          } else if (error.request) {
            content.onError("文件上传失败，服务器端无响应");
          } else {
            content.onError("文件上传失败，请求封装失败");
          }
        });
    },
    changename() {
      debugger;
      this.$store.commit("changeNameToZhangsan");
      console.log(this.$store.state.name);
    },
    changeNameParam() {
      this.$store.commit("changeNameWithParam", {
        name: this.newName
      });
    }
  },
  computed: {
    names() {
      return this.$store.state.name + this.$store.state.muenList;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
