<template>
  <div>
    <h2>这是a模块</h2>
  </div>
</template>

<script>
import HelloWorld from '../../../components/HelloWorld'
export default {
  name: 'a-sub-module1',
  components: {HelloWorld},
  data () {
    return {
    }
  },
  methods: {},
  created () {}
}
</script>
<style scoped>
</style>
