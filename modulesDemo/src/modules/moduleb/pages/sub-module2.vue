<template>
  <div>
    <h2>这是b模块2</h2>
    <button @click="handleDom(1)"> 全屏 </button>
    <div id="content" style="width: 200px;height: 400px;background: royalblue;">
       ssdsadasdasdasd
      <button @click="handleDom(2)"> 全屏 </button>
      <div id="itme" style="width: 100px;height: 100px;background: red;">
      </div>
    </div>
  </div>
</template>

<script>
  import domutils from  '../../../api/dom-utils'
export default {
  name: 'b-sub-module1',
  data () {
    return {
    }
  },
  methods: {
    handleDom(type){
      if (type === 1) {
        let contengt =  document.getElementById('content')
        domutils.setFullScreenOfDom(contengt)
      } else if (type === 2) {
        let itme =  document.getElementById('itme')
        domutils.setFullScreenOfDom(itme)
      }
    },
  },
  created () {}
}
</script>
<style scoped>
</style>
