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
    }
  },
  methods:{
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
