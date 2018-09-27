<template>
  <div class="userNoteBase">
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
        {text:'HTML',href:'/note'},
        {text:'CSS',href:'/note'},
        {text:'JAVASCRIPT',href:'/note'},
        {text:'JQUERY',href:'/note'},
        {text:'BOOTSTRAP',href:'/note'},
        {text:'SQL',href:'/note'},
        {text:'MYSQL',href:'/'},
        {text:'PHP',href:'/note'},
        {text:'PYTHON2',href:'/note'},
        {text:'PYTHON3',href:'/note'},
        {text:'C',href:'/note'},
        {text:'C++',href:'/note'},
        {text:'C#',href:'/note'},
        {text:'JAVA',href:'/note'},
        {text:'本地书签',href:'/note'},
       ],
       siderRightObj:[
         {
           title:'教程列表',
           array:['ADD教程','Ajax教程','Android教程','Angular2教程','AngularJS教程','APPML教程','ASP教程','ASP.NET教程','Bootstrap教程','Bootstrap4教程','C教程','C#教程'
           ,'C++教程','CSS参考手册','CSS教程','CSS3教程','Django教程','Docker教程','DTD教程','Eclipse教程','Firebug教程','Font Awesome图','Foundation教程','Git教程'
           ,'Go语言教程','Google地图API教程','Highcharts教程','HTML DOM教程','HTML参考手册','HTML字符集','HTML教程','HTTP教程','ionic教程','iOS教程','Java教程','JavaScript参考手册'
           ,'JavaScript教程','jQuery EasyUI教程','jQuery Mobile教程','jQuery UI教程','jQuery教程','JSON教程','JSP教程','Kotlin教程','Linux教程','Lua教程','Memcached教程'
           ,'MongoDB教程','MYSQL教程','Node.js教程','Perl教程','PHP教程','Python3教程','Python基础教程','RDF教程','React教程','Redis教程','RSS教程','Ruby教程','Scala教程'
           ,'Servlet教程','SOAP教程','SQL教程','SQLite教程','SVG教程','SVN教程','Swift教程','TCP/IP教程','VBScript教程','Vue.js教程','W3C教程','Web Service教程','WSDL教程'
           ,'XLink教程','XML DOM教程','XML Schema教程','XML教程','XPath教程','XQuery教程','XSLFO教程','XSLT教程','正则表达式','测验','浏览器','网站品质','网站建设指南','网站服务指南'
           ,'设计模式'],
           },
        ],
    }
  },
  
  methods:{},
}
</script>


<style lang="scss">
@import '~styles/index';
.userNoteBase {
  .main {
    margin-top: 20px;
    .sider-Rights {
      float: left;
      width: 29.6%;
      height: auto;
      .clumm {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
      }
    }
  }
}
</style>
