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
        {text:'菜鸟笔记',href:'/note'},
        {text:'菜鸟工具',href:'/'},
        {text:'参考手册',
        barArray:[
          {name:'HTML手册',href:'/'},
          {name:'Javascript',href:'/'},
          {name:'CSS 1，2，3',href:'/'},
          {name:'Zepto中文手册',href:'/'},
          {name:'Flat UI',href:'/'},
          {name:'PostageSQL手册',href:'/'},
        ],
        showBar:true},
        {text:'笔记列表',href:'/'},
        {text:'测验/考试',
        barArray:[
          {name:'HTML测验',href:'/'},
          {name:'HTML5测验',href:'/'},
          {name:'XHTML测验',href:'/'},
          {name:'CSS测验',href:'/'},
          {name:'JavaScript测验',href:'/'},
          {name:'JQuery测验',href:'/'},
          {name:'XML测验',href:'/'},
          {name:'ASP测验',href:'/'},
          {name:'PHP测验',href:'/'},
          {name:'SQL测验',href:'/'},
        ],showBar:true},
        {text:'本地书签',href:'/'},
        {text:'小游戏',href:'/'},
        {text:'登录',showDialog:true},
       ],
    }
  },
  methods:{},
}
</script>

<style lang="scss">
@import '~styles/index';
</style>
