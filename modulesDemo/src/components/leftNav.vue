<template>
    <div style="width: 100%;height: 100%;">
        <el-menu @select="handleRouter">
          <el-submenu index="modulea">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item index="mainmodulea">模块a</el-menu-item>

          </el-submenu>
          <el-submenu index="moduleb">
            <template slot="title"><i class="el-icon-message"></i>导航二</template>
            <el-menu-item index="mainmoduleb">模块b</el-menu-item>
          </el-submenu>
        </el-menu>
    </div>
</template>

<script>

export default {
    name: "left-nav",
    mounted(){
       this.listenHash()
    },
    methods:{
      // 监听hash 路由
      listenHash(){
        // 处理锚点改变
        $(window).on('hashchange', function() {
          var hash = $.trim(window.location.hash).split('-')[0];
          console.log('hashchange : ', hash )
        }).trigger('hashchange');
      },
      handleRouter( index, indexPath) {
        console.log('handleRouter', index, indexPath)
        // this.iframeUrl = `../${indexPath[0]}/index.html`
        // document.getElementById('frame').replaceChild()
        // window.location.href = `../${indexPath[0]}/index.html`
        // let   href  =  `test.html`
        // window.location.hash = indexPath[0]
        // console.log('登陆时的token', this.$cookies.get('token'))
        // console.log('      $(\'#mainContent\') :',       $('#mainContent'))
        // let mainContent =  $('#mainContent')
        // this.loadTemplate(mainContent,href,function (e) {
        //   console.log('handleRouter:', e)
        // })
         this.$router.push({name: index,params:{path: index}})
      },
      loadTemplate: function(container, href, callback) {
        container.load(href, function() {
          if (typeof callback == 'function') {
            callback();
          }
        });
      },
   }
}
</script>

<style scoped>

</style>
