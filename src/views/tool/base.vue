<template>
  <div class="toolIndex">
      <!--导航栏-->
      <nav-search :data-array="nav"/>
      <!--内容-->
      <router-view></router-view>
      <!--底部-->
      <footers/>
  </div>
</template>

<script>
import navSearch from '@/components/toolCommon/navSearch'
import footers from '@/components/common/footer'

export default {
  components: {
    navSearch,
    footers,
  },
  data() {
    return {
      isSelect:true,
      siderSelect:'',
      navSelect:'',
      nav:[
        {text:'菜鸟工具',href:'/tool'},
        {text:'WEB在线编辑器',href:'/note'},
        {text:'SVG在线编辑器',href:'/'},
        {text:'实例归档',href:'/'},
        {text:'菜鸟教程',href:'/'},
       ],
    }
  },
  methods:{},
}
</script>

<style lang="scss">
@import '~styles/index';
</style>
