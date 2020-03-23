<template>
  <div id="app">

    <router-view></router-view>

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
    created(){
      console.log('登陆时的token 模块B ', this.$cookies.get('token'))

      console.log('登陆时的   sessionStorage 模块B ', window.sessionStorage.getItem('right'))
    },
    methods:{
      handleRouter( index, indexPath) {
        console.log('handleRouter', index, indexPath)
        // this.iframeUrl = `../${indexPath[0]}/index.html`
        // document.getElementById('frame').replaceChild()
        // window.location.href =
        window.replace(`../${indexPath[0]}/index.html`)
        console.log('登陆时的token', this.$cookies.get('token'))
      },
      getData(){
        this.$http.get().then()
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
