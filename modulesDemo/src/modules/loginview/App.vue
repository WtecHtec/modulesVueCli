<template>
  <div id="app">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="pass">
        <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.code"></el-input>
           <img :src="codeImg" width="200px" height="80px" @click="changeCodeImgUrl" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      ruleForm: {
        code:'',
        password:'',
        userName:''
      },
      codeImg: this.$global.ApiBaseUrl + '/getCodeImage?t=' +  new Date().valueOf(),
      iframeUrl:'../a/index.html',
      message: 'a模块的内容',
      imgUrl:require('../../assets/logo.png')
    }
  },
  methods:{
    changeCodeImgUrl() {
      this.codeImg = this.$global.ApiBaseUrl + "/getCodeImage?_t=" + Math.random();
    },
    handleRouter( index, indexPath) {
      console.log('handleRouter', index, indexPath)
      this.iframeUrl = `../${indexPath[0]}/index.html`
      this.$cookies.set('token','这是一个token')
    },
    submitForm(){
      var encodePass = this.$md5(this.ruleForm.password);
      let params = "uname=" + this.ruleForm.userName + "&pwd=" + encodePass + "&code=" + this.ruleForm.code;
      var url = "login";
      this.$http.post(url,params).then( (res) =>{
        console.log('submitForm：',res)
         let data = res.data
         if(data && data.code  ==='200'){
            this.$cookies.set('token',data.result.token)
            window.location.href = '../mainview/index.html'
           // window.replace(`../${indexPath[0]}/index.html`)

           window.sessionStorage.setItem('right','right')
         }
      }).catch((err) => {
        console.log('submitForm：',err)
      })
    }
  }
}
</script>

<style>
  iframe {
    border: none;
    height: calc(100vh - 125px);
    width: 100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
}
</style>
