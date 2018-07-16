<template>
  <div class="noteIndex">
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
  </div>
</template>

<script>
import contentItem from '@/components/note/contentItem'
export default {
  components: {
    contentItem,
  },
  data() {
    return {
      isSelect:true,
      siderSelect:'',
      navSelect:'',
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
  width:66%;
  .content{
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
}
</style>
