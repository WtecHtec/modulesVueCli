<template>
  <div style="height: 100%;width: 100%;">
    mainmodulea
     <iframe :src="iframeUrl" style="height: 100%;width: 100%;"></iframe>
  </div>
</template>

<script>
import HelloWorld from '../../../components/HelloWorld'
export default {
  components: {HelloWorld},
  data () {
    return {
      iframeUrl: '../modulea/index.html'
    }
  },
  methods: {},
  created () {}
}
</script>
<style scoped>
</style>
