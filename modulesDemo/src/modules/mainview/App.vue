<template>
  <div id="app">
    <el-container>
      <el-header style="background: #8c939d;">
        <headerCom></headerCom>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <leftNav></leftNav>
        </el-aside>
        <el-container>
          <el-main style=" padding: 0px;">
           <router-view></router-view>
            <!--<div class="pull-right col-md-10" id="mainContent"></div>-->
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftNav from '../../components/leftNav'
import headerCom from  '../../components/headerCom'
export default {
  name: 'App',
  components: {leftNav, headerCom},
  data () {
    return {
      iframeUrl:'../a/index.html',
      message: 'a模块的内容',
      imgUrl:require('../../assets/logo.png')
    }
  },
  methods:{
    handleRouter( index, indexPath) {
      console.log('handleRouter', index, indexPath)
      // this.iframeUrl = `../${indexPath[0]}/index.html`
      // document.getElementById('frame').replaceChild()
      // window.location.href =
      window.replace(`../${indexPath[0]}/index.html`)
      console.log('登陆时的token', this.$cookies.get('token'))
    }
  }
}
</script>

<style>
  #mainContent {
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
