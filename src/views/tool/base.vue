<template>
  <div class="toolIndex">
      <!--导航栏-->
      <nav-search :data-array="nav"/>
      <!--内容-->
      <div class="tool-container">
        <router-view></router-view>
      <!--底部-->
      <div class="tool-comm-footer">
        <hr/>
        <P>Copyright © <a>菜鸟教程</a> 2018</P>
      </div>
      </div>
      
  </div>
</template>

<script>
import navSearch from '@/components/tool/navSearch'
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
        {text:'实例归档',href:'/examples'},
        {text:'菜鸟教程',href:'/home'},
       ],
    }
  },
  methods:{},
}
</script>

<style lang="scss">
@import '~styles/index';
.toolIndex {
  .tool-container {
    width: 1190px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .tool-comm-footer {
    hr {
      margin: 20px 0;
      border: 0;
      border-top: 1px solid #eee;
    }
    p {
      padding: 50px 0;
    }
    a {
      color: #337ab7;
      text-decoration: none;
    }
  }
}
</style>
