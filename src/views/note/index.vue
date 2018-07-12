<template>
  <div class="noteIndex">
      <!--搜索-->
      <logo-search/>
      <!--导航栏-->
      <comm-nav :data-array="nav"/>
      <!--内容-->
      <div class="container main">
        <div class="row flex">
           <!--主体-->
           <div class="col content">
             <div class="first">
                  <content-item v-for="(data,index) in contentArray" :key="index" :dataObj="data"/>
             </div>
            <div class="page">
                <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next"
                :total="40">
                </el-pagination>
            </div>
             
           </div>
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
import contentItem from '@/components/note/contentItem'
import footers from '@/components/common/footer'
import siderBtn from '@/components/common/qrcode'
import siderRight from '@/components/note/siderRight'

export default {
  components: {
    logoSearch,
    commNav,
    contentItem,
    footers,
    siderBtn,
    siderRight,
  },
  data() {
    return {
      isSelect:true,
      siderSelect:'',
      navSelect:'',
      nav:[
        {text:'首页',href:'/'},
        {text:'笔记首页',href:'/note'},
        {text:'ANDROID',href:'/note'},
        {text:'互联网',href:'/note'},
        {text:'程序员人生',href:'/note'},
        {text:'程序员笑话',href:'/note'},
        {text:'编程技术',href:'/note'},
       ],
       contentArray:[
         {title:'Java中的this和super的用法总结',href:'/noteDetail',src:require('../../assets/thumbnail.png'),text:'this this 是自身的一个对象，代表对象本身，可以理解为：指向对象本身的一个指针。this的用法在Java中大体分为3种：1. 普通...'},
         {title:'C++虚拟函数和纯函数的区别',href:'/noteDetail',src:require('../../assets/thumbnail.png'),text:'首先：强调一个概念 定义一个函数为虚函数，不代表函数为不被实现的函数。定义他为虚函数是为了允许用基类的指针来调用子类的这个函数。...'},
         {title:'C++字符、字符串、字符数组、字符串指针、指针数组',href:'/noteDetail',src:require('../../assets/thumbnail.png'),text:'一、字符指针、字符数组 字符指针 字符串指针变量本身是一个变量，用于存放字符串的首地址。而字符串本身是存放在以该首地址为首的一块连续的...'},
         {title:'C矩阵交换行',href:'/noteDetail',src:require('../../assets/thumbnail.png'),text:'描述 给定一个5*5的矩阵（数学上，一个rxc的矩阵是一个由r行c列元素排列成的矩形的阵列），将第n行和m行交换，输出交换后的结果...'},
         {title:'Windows下如何查看某个端口被谁占用',href:'/noteDetail',src:require('../../assets/note2.png'),text:'开发时经常遇到端口被占用的情况，这个时候我们就需要找出被占用端口的程序，然后结束它，本文为大家介绍如何查找被占用的端口。1、打开命令...'},
         {title:'Java设计模式之门面模式（外观模式）',href:'/noteDetail',src:require('../../assets/note3.png'),text:'医院的例子 现代的软件系统都是比较复杂的，设计师处理复杂系统的一个常见方法便是将其“分而治之”，把一个系统划分为几个较小的子系统。如果...'},
         {title:'Java设计模式-外观模式',href:'/noteDetail',src:require('../../assets/thumbnail.png'),text:'外观模式的作用：松散耦合，外观模式松散了客户端与子系统的耦合关系，让子系统内部的模块能更容易扩展和维护。简单易用，外观模式让...'},
         {title:'Linux导入、导出MySQL数据库命令',href:'/noteDetail',src:require('../../assets/thumbnail.png'),text:'一、导出数据库 1、导出完整数据：表结构+数据Linux下可以使用mysqldump命令来导出数据库，语法格式如下：mysqldump -u 用户名 -p...'},
         {title:'Java String Tokenizer 类使用方法',href:'/noteDetail',src:require('../../assets/thumbnail.png'),text:'Java String Tokenizer属于java.util包，用于分割字符串。StringTokenizer构造方法：1、StringTokenizer（String str):构造一个...'},
         {title:'C++函数指针&类成员函数指针',href:'/noteDetail',src:require('../../assets/thumbnail.png'),text:'一、函数指针 函数存放在内存代码的区域内，它们同样有地址，如果我们有一个int test(this a)的函数，那么 ，它的地址就是函数的名字，这一...'},
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
        currentPage: 4,
    }
  },
  
  methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  },

}
</script>


<style lang="scss">
@import '~styles/index';
.noteIndex{
  .main{
    margin-top:20px;
    .content{
      width:66%;
      border:$border-color-ef;
      border-radius: 4px;
      overflow: hidden;
      
      font-size:13px;
      .first{
          margin-bottom:20px;
          background-color: $body-background;
      }
      .page{
          background-color: $body-background;
          margin:0;
          border:$border-color-ef;
          margin-bottom:20px;
          border-bottom:0;
          padding:20px;
      }
      .noteContent:nth-child(2n){
          background-color: $background-color-fb ;
          border-top:$border-color-ef;
          border-bottom:$border-color-ef;
      }
      
    }
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
