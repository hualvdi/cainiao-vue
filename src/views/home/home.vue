<template>
  <div class="home">
      <!--搜索-->
      <logo-search/>
      <!--导航栏-->
      <comm-nav :data-array="nav"/>
      <!--内容-->
      <div class="container main">
        <div class="row flex">
          <div class="column">
            <div class="header">
              <i class="fa fa-bars"></i>
              <span>全部教程</span>
            </div>
            <ul class="menu">
              <li v-for="(data,index) in siderArray" :key="index" @click="menuChange(index)"><i class="el-icon-edit-outline"></i>{{data.title}}</li>
            </ul>
           </div>
           <!--主体-->
           <div class="content">
             <div v-if="isSelect">
               <content-info v-for="(data,index) in siderArray" :key="index" :dataObj="data"/>
             </div>
             <div v-else>
               <content-info v-for="(data,index) in siderArray" :key="index" :class="[siderSelect==index?'active':'noShow']" :dataObj="data"/>
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
import contentInfo from '@/components/home/content'
import footers from '@/components/common/footer'
import siderBtn from '@/components/common/qrcode'

export default {
  components: {
    logoSearch,
    commNav,
    contentInfo,
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
        {text:'菜鸟工具',href:'/tool'},
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
        {text:'笔记列表',href:'/userNote'},
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
       siderArray:[
         {
         title:'HTML / CSS',
         array:[
           {title:'【学习HTML】', href:'/',src:require('../../assets/h1.png'),text:'HTML，即超文本标记语言（Hyper Text Markup Language）'},
           {title:'【学习HTML5】',href:'/',src:require('../../assets/h2.png'),text:'HTML5是下一代HTML标准'},
           {title:'【学习CSS】',href:'/',src:require('../../assets/h3.png'),text:'层叠样式表（Cascading StyleSheet）'},
           {title:'【学习CSS3】',href:'/',src:require('../../assets/h4.png'),text:'CSS3是CSS技术的升级版本'},
           {title:'【学习Bootstrap3】',href:'/',src:require('../../assets/h5.png'),text:'Bootstrap，来自Twitter，是目前最受欢迎的前端框架'},
           {title:'【学习Bootstrap4】',href:'/',src:require('../../assets/h6.png'),text:'Bootstrap4目前是Bootstrap的最新版本'},
           {title:'【学习Font Awesome】',href:'/',src:require('../../assets/h7.png'),text:'Font Awesome是一套绝佳的图表字体库和CSS框架'},
           {title:'【学习Foundation】',href:'/',src:require('../../assets/h8.png'),text:'Foundation用于开发响应式的HTML，CSS and JavaScript框架'},
         ]
       },
       {
         title:'JavaScript',
         array:[
           {title:'【学习JavaScript】', href:'/',src:require('../../assets/js1.png'),text:'JavaScript是Web的编程语言'},
           {title:'【学习HTML DOM】',href:'/',src:require('../../assets/js2.png'),text:'HTML DOM定义了访问和操作HTML文档的标准方法'},
           {title:'【学习jQuery】',href:'/',src:require('../../assets/js3.png'),text:'jQuery是一个JavaScript库'},
           {title:'【学习AngularJS】',href:'/',src:require('../../assets/js4.png'),text:'AngularJS通过新的属性和表达式扩展了HTML'},
           {title:'【学习AngularJS2】',href:'/',src:require('../../assets/js5.png'),text:'AngularJS是一款开源JavaScript库，由Google维护'},
           {title:'【学习Vue.js】',href:'/',src:require('../../assets/js6.png'),text:'Vue.js是一套构建用户界面的渐进式框架。'},
           {title:'【学习React】',href:'/',src:require('../../assets/js7.png'),text:'React是一个用于构建用户界面的JAVASCRIPT库'},
           {title:'【学习jQuery UI】',href:'/',src:require('../../assets/js8.png'),text:'jQuery UI是一个基于jQuery的框架，集成了各种用户界面插件'},
           {title:'【学习jQuery EasyUI】',href:'/',src:require('../../assets/js9.png'),text:'jQuery EasyUI是一个基于jQuery的框架，集成了各种用户界面插件'},
           {title:'【学习Node.js】',href:'/',src:require('../../assets/js10.png'),text:'Node.js是运行在服务端的JavaScript'},
           {title:'【学习AJAX】',href:'/',src:require('../../assets/js11.png'),text:'AJAX = Asynchronous JavaScript and XML（异步的JavaScript和XML）'},
           {title:'【学习JSON】',href:'/',src:require('../../assets/js12.png'),text:'JSON是存储和交换文本信息的语法'},
           {title:'【学习Highcharts】',href:'/',src:require('../../assets/js13.png'),text:'Highcharts是一个纯JavaScript编写的一个图表库'},
           {title:'【学习Google地图】',href:'/',src:require('../../assets/js14.png'),text:'Google地图接口使用说明'},
         ]
       },
       {
         title:'服务端',
         array:[
           {title:'【学习PHP】', href:'/',src:require('../../assets/ser1.png'),text:'PHP是一种通用开源脚本语言'},
           {title:'【学习Python】',href:'/',src:require('../../assets/ser2.png'),text:'Python是一种面向对象、解释性计算机设计语言'},
           {title:'【学习Python3】',href:'/',src:require('../../assets/ser3.png'),text:'Python升级版，变化较大'},
           {title:'【学习Django】',href:'/',src:require('../../assets/ser4.png'),text:'Django是一个开源代码的Web应用框架，由Python写成'},
           {title:'【学习Linux】',href:'/',src:require('../../assets/ser5.png'),text:'Linux是一套免费使用和自由传播的类Unix操作系统'},
           {title:'【学习Docker】',href:'/',src:require('../../assets/ser6.png'),text:'Docker是一个开源应用容器引擎，基于Go语言'},
           {title:'【学习Ruby】',href:'/',src:require('../../assets/ser7.png'),text:'一种为简单快捷的面向对象的编程（面向对象程序设计）而创建的脚本语言'},
           {title:'【学习Java】',href:'/',src:require('../../assets/ser8.png'),text:'一种可以撰写跨平台应用软件的面向对象的程序设计语言'},
           {title:'【学习C】',href:'/',src:require('../../assets/ser9.png'),text:'一门通用计算机编程语言'},
           {title:'【学习C++】',href:'/',src:require('../../assets/ser10.png'),text:'C++是在C语言的基础上开发的一种类似，运行在服务端的语言'},
           {title:'【学习Perl】',href:'/',src:require('../../assets/ser11.png'),text:'Perl是高级、通用、直译式、动态的程序语言'},
           {title:'【学习Servlet】',href:'/',src:require('../../assets/ser12.png'),text:'运行在Web服务器或应用服务器上的程序'},
           {title:'【学习JSP】',href:'/',src:require('../../assets/ser13.png'),text:'JSP与PHP、ASP、ASP.NET等语言类似，运行在服务器的语言'},
           {title:'【学习Lua】',href:'/',src:require('../../assets/ser14.png'),text:'Lua是一种轻量小巧的脚本语言，用标准C语言编写并以源代码开放'},
           {title:'【学习Scala】',href:'/',src:require('../../assets/ser15.png'),text:'Scala是一门多范式（multi-paradigm）的编程语言'},
           {title:'【学习Go】',href:'/',src:require('../../assets/ser16.png'),text:'Go语言是谷歌推出的一种全新的编程语言'},
           {title:'【设计模式】',href:'/',src:require('../../assets/ser17.png'),text:'设计模式代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用'},
           {title:'【正则表达式】',href:'/',src:require('../../assets/ser18.png'),text:'正则表达式是对字符串操作的一种逻辑公式'},
           {title:'【学习ASP】',href:'/',src:require('../../assets/ser19.png'),text:'ASP（Active Server Pages）是一种生成动态交互性网页的强有力工具'},
           {title:'【学习AppML】',href:'/',src:require('../../assets/ser20.png'),text:'AppML是一个为Web应用程序设计的HTML扩展框'},
           {title:'【学习VBScript】',href:'/',src:require('../../assets/ser21.png'),text:'一种微软环境下的轻量级的解释性语言'},
         ]
       },
       {
         title:'数据库',
         array:[
           {title:'【学习SQL】', href:'/',src:require('../../assets/data1.png'),text:'结构化查询语言（Structured Query Language）'},
           {title:'【学习MySql】',href:'/',src:require('../../assets/data2.png'),text:'MySql是一个关系型数据库管理系统'},
           {title:'【学习SQLite】',href:'/',src:require('../../assets/data3.png'),text:'一款轻型的数据库'},
           {title:'【学习MongoDB】',href:'/',src:require('../../assets/data4.png'),text:'MongoDB 是目前在IT行业非常流行的一种非关系型数据库'},
           {title:'【学习Redis】',href:'/',src:require('../../assets/data5.png'),text:'一个高性能的key-value数据库'},
           {title:'【学习Memcached】',href:'/',src:require('../../assets/data6.png'),text:'Memcached是一个自由开源的，高性能，分布式内存对象缓存系统'},
         ]
       },
       {
         title:'移动端',
         array:[
           {title:'【学习Android】', href:'/',src:require('../../assets/m1.png'),text:'Android是一种基于Linux的自由及开发源码的操作系统，主要使用于移动设备'},
           {title:'【学习Swift】',href:'/',src:require('../../assets/m2.png'),text:'Swift是一种支持多编程式和编译式的编程语言，用于开发iOS，OSX和watchOS应用程序'},
           {title:'【学习jQuery Mobile】',href:'/',src:require('../../assets/m3.png'),text:'jQuery Mobile是jQuery在手机上和平板设备上的版本'},
           {title:'【学习ionic】',href:'/',src:require('../../assets/m4.png'),text:'ionic是一个强大的HTML5应用程序开发框架（HTML5 Hybrid Mobile App Framework）'},
           {title:'【学习Kotlin】',href:'/',src:require('../../assets/mm1.png'),text:'在Java虚拟机上运行的静态类型编程语言，Android官方开发语言'},
         ]
       },
       {
         title:'XML教程',
         array:[
           {title:'【学习XML】', href:'/',src:require('../../assets/x1.png'),text:'XML被设计用来传输和存储数据'},
           {title:'【学习DTD】',href:'/',src:require('../../assets/x2.png'),text:'DTD（文档类型定义）的作用是定义XML文档的合法构建模块'},
           {title:'【学习XML DOM】',href:'/',src:require('../../assets/x3.png'),text:'XML DOM定义访问和操作XML文档的标准方法'},
           {title:'【学习XSLT】',href:'/',src:require('../../assets/x4.png'),text:'XSLT是一个XML文档样式表语言，XSLT指XSL转换'},
           {title:'【学习XPath】',href:'/',src:require('../../assets/x5.png'),text:'XPath是一门在XML文档中查找信息的语言'},
           {title:'【学习XQuery】',href:'/',src:require('../../assets/x6.png'),text:'XQuery被设计用来查询XML数据'},
           {title:'【学习XLink】', href:'/',src:require('../../assets/x7.png'),text:'XLink定义在XML文档中创建超级链接的标准方法'},
           {title:'【学习XPointer】',href:'/',src:require('../../assets/x8.png'),text:'XPointer是在可扩展标志语言（XML）文件中定位数据的一种语言'},
           {title:'【学习XML Schema】',href:'/',src:require('../../assets/x9.png'),text:'XML Schema描述了XML文档的结构'},
           {title:'【学习XSL-FO】',href:'/',src:require('../../assets/x10.png'),text:'XSL-FO是可扩展样式表语言格式化对象'},
           {title:'【学习SVG】',href:'/',src:require('../../assets/x11.png'),text:'SVG使用XML格式定义图像'},
         ]
       },
       {
         title:'ASP.NET',
         array:[
           {title:'【学习ASP.NET】', href:'/',src:require('../../assets/a1.png'),text:'ASP.NET是一个使用HTML、CSS、JavaScript和服务器脚本创建网页和网站的开发框架'},
           {title:'【学习C#】',href:'/',src:require('../../assets/a2.png'),text:'C#是一个简单的、现代的、通用的、面向对象的编程语言'},
           {title:'【学习Web Pages】',href:'/',src:require('../../assets/a3.png'),text:'Web Pages是三种网页编程模型中的一种，用于创建网站和Web应用程序'},
           {title:'【学习Razor】',href:'/',src:require('../../assets/a4.png'),text:'Razor是一种标记语言，可以让您将基于服务器的代码（Visual Basic 和c#）嵌入到网页中'},
           {title:'【学习MVC】',href:'/',src:require('../../assets/a5.png'),text:'MVC（Modal View Controller）模型-视图-控制器'},
           {title:'【学习Web Forms】',href:'/',src:require('../../assets/a6.png'),text:'Web Forms是三种创建ASP.NET网站和Web应用程序的编程模式中的一种'},
         ]
       },
       {
         title:'Web Service',
         array:[
           {title:'【学习Web Service】', href:'/',src:require('../../assets/w1.png'),text:'Web Service脚本平台需支持XML+HTTP'},
           {title:'【学习WSDL】',href:'/',src:require('../../assets/w2.png'),text:'WSDL是一门基于XML的语言，用于描述Web Service以及如何对它们进行访问'},
           {title:'【学习SOAP】',href:'/',src:require('../../assets/w3.png'),text:'SOAP是一种简单的基于XML的协议，它使用程序通过HTTP来交换信息'},
           {title:'【学习RSS】',href:'/',src:require('../../assets/w4.png'),text:'RSS基于XML标准，在互联网上被广泛采用的内容包装盒投递协议'},
           {title:'【学习RDF】',href:'/',src:require('../../assets/w5.png'),text:'DF（资源描述框架）是描述网络资源的W3C标准'},
         ]
       },
       {
         title:'开发工具',
         array:[
           {title:'【学习Eclipse】', href:'/',src:require('../../assets/k1.png'),text:'Eclipse是一个开放源代码的、基于Java的可扩展开发平台'},
           {title:'【学习Git】',href:'/',src:require('../../assets/k2.png'),text:'Git是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目'},
           {title:'【学习SVN】',href:'/',src:require('../../assets/k3.png'),text:'SVN是一个开放源代码的版本控制系统'},
           {title:'【学习Firebug】',href:'/',src:require('../../assets/k4.png'),text:'Firebug是一个人开源的web开发工具'},
         ]
       },
       {
         title:'网站建设',
         array:[
           {title:'【学习HTTP】', href:'/',src:require('../../assets/wz1.png'),text:'HTTP协议（HyperText Transfer Protocol，超文本传输协议）是因特网上用用最为广泛的一种网络传输协议'},
           {title:'【网站建设指南】',href:'/',src:require('../../assets/wz2.png'),text:'网站建设指导课程'},
           {title:'【浏览器信息】',href:'/',src:require('../../assets/wz3.png'),text:'对于网站开发人员来说，浏览器信息和统计数据都是非常重要的'},
           {title:'【网站主机教程】',href:'/',src:require('../../assets/wz4.png'),text:'如果您希望向全世界发布自己的网站，那么您的网站就需要被放置于一个web服务器'},
           {title:'【学习TCP/IP】',href:'/',src:require('../../assets/wz5.png'),text:'TCP/IP是因特网的通信协议'},
           {title:'【学习W3C】',href:'/',src:require('../../assets/wz6.png'),text:'W3C让每个人都能在互联网上分享资源'},
           {title:'【网站品质】',href:'/',src:require('../../assets/wz7.png'),text:'学习如何创建高质量的web网站'},
         ]
       },
       ],
      
    }
  },
  
  methods:{
    menuChange(index) {
      this.isSelect = false;
      this.siderSelect = index;
    },
  },

}
</script>


<style lang="scss">
@import '~styles/index';
.home {
  .main {
    margin-top: 20px;
    .column {
      width: 16%;
      margin-right: 1%;
      text-align: left;
      .header {
        width: 100%;
        height: 29px;
        background-color: #f2f2f2;
        color: grey;
        border-top-left-radius: 3px;
        font-size: 1.4em;
        font-weight: 400;
        padding-left: 4px;
        line-height: 1.9em;
        opacity: 0.7;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(0, 0, 0, 0.1);
        font-family: proxima-nova, 'Helvetica Neue', Helvetica, Arial,
          sans-serif;
        i {
          vertical-align: middle;
        }
      }
      .menu {
        width: 100%;
        text-align: left;
        padding: 0;
        margin: 0 0 20px 0;
        i {
          padding-right: 2px;
          vertical-align: middle;
        }
        li {
          padding: 4px;
          height: 32px;
          margin: 0;
          line-height: 32px;
          font-size: $font-size-small;
          color: rgb(51, 51, 51) !important;
          cursor: pointer;
          a {
            color: rgb(51, 51, 51);
          }
        }
        li:nth-child(2n + 1) {
          background-color: $background-color-fb;
          border-top: $border-color-ef;
          border-bottom: $border-color-ef;
        }
      }
    }
    .content {
      width: 88%;
      text-align: left;
      background-color: $body-background;
      padding: 12px 20px;
      border: $border-color-ea;
      border-radius: 4px;
      height: auto;
      .homeContent:first-child {
        padding-top: 0;
      }
    }
  }
  .active {
    display: block;
  }
  .noShow {
    display: none;
  }
}
</style>
