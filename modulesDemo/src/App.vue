<template>
  <div id="app">
    <div >
      <el-button @click="handleRouter('First')">First</el-button>
    </div>

    <div style="position:relative;left:300px;width: 100%;height: 100%">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    handleRouter(id) {
      this.$router.push(id)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
