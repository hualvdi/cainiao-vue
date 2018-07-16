<template>
  <div class="noteBase">
      <!--搜索-->
      <logo-search/>
      <!--导航栏-->
      <comm-nav :data-array="nav"/>
      <!--主体-->
      <div class="container main">
        <div class="row flex">
        <!--内容-->
        <router-view></router-view>
        <!--右边导航-->
        <div class="sider-Rights">
            <div class="clumm"  v-for="(data,index) in siderRightObj" :key="index">
            <sider-right :dataObj="data"/>
            </div>
        </div>

        </div>
      </div>
      <!--底部-->
      <footers/>
      <sider-btn/>

  </div>
</template>

<script>
import logoSearch from '@/components/common/logoSearch'
import commNav from '@/components/common/nav'
import footers from '@/components/common/footer'
import siderRight from '@/components/note/siderRight'
import siderBtn from '@/components/common/qrcode'
export default {
  components: {
    logoSearch,
    commNav,
    footers,
    siderRight,
    siderBtn,
  },
  data() {
    return {
      nav:[
        {text:'首页',href:'/'},
        {text:'笔记首页',href:'/note'},
        {text:'ANDROID',href:'/note'},
        {text:'互联网',href:'/note'},
        {text:'程序员人生',href:'/note'},
        {text:'程序员笑话',href:'/note'},
        {text:'编程技术',href:'/note'},
       ],
       siderRightObj:[
           {
           title:'笔记分类',
           array:['Android基础入门','Android扩展教程','JMR使用教程','PHP常用实例','Python常用实例','互联网','区块链','杂乱无章','科技资讯','程序员人生','程序员笑话','编程技术'],
           }, {
           title:'教程列表',
           array:['ADD教程','Ajax教程','Android教程','Angular2教程','AngularJS教程','APPML教程','ASP教程','ASP.NET教程','Bootstrap教程','Bootstrap4教程','C教程','C#教程'
           ,'C++教程','CSS参考手册','CSS教程','CSS3教程','Django教程','Docker教程','DTD教程','Eclipse教程','Firebug教程'],
           },
        ],
    }
  },
  
  methods:{},
}
</script>


<style lang="scss">
@import '~styles/index';
.noteBase{
  .main{
    margin-top:20px; 
    .sider-Rights{
        float:left;
        width:29.6%;
        height:auto;
        .clumm{
            width:100%;
            display:flex;
            flex-flow: column wrap;
        }
    }
  }
}
</style>
