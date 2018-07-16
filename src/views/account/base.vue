<template>
  <div class="courseIndex">
      <!--搜索-->
      <logo-search/>
      <!--导航栏-->
      <comm-nav :data-array="nav"/>
      <!--内容-->
      <router-view></router-view>
      <!--底部-->
      <footers/>
      <sider-btn/>
  </div>
</template>

<script>
import logoSearch from '@/components/common/logoSearch'
import commNav from '@/components/common/nav'
import footers from '@/components/common/footer'
import siderBtn from '@/components/common/qrcode'

export default {
  components: {
    logoSearch,
    commNav,
    footers,
    siderBtn,
  },
  data() {
    return {
      isSelect:true,
      siderSelect:'',
      navSelect:'',
      nav:[
        {text:'首页',href:'/'},
        {text:'HTML',href:'/note'},
        {text:'CSS',href:'/'},
        {text:'JAVASCRIPT',href:'/'},
        {text:'JQUERY',href:'/'},
        {text:'BOOTSTRAP',href:'/'},
        {text:'SQL',href:'/'},
        {text:'MYSQL',href:'/'},
        {text:'PHP',href:'/'},
        {text:'PYTHON2',href:'/'},
        {text:'PYTHON3',href:'/'},
        {text:'C',href:'/'},
        {text:'C++',href:'/'},
        {text:'C#',href:'/'},
        {text:'JAVA',href:'/'},
        {text:'本地书签',href:'/'},
       ],
    }
  },
  methods:{},
}
</script>

<style lang="scss">
@import '~styles/index';
</style>
