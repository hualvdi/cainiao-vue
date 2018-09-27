<template>
  <div class="user-note-list">
     <!--主体-->
     <div class="header-title">
       <h2>笔记列表</h2>
     </div>
     <div  class="example-main">
       <div class="example-item"  v-for="(data,index) in contentArray" :key="index">
         <p class="item-title"><a>{{index+1}}、{{data.title}} <i class="fa fa-plus-square"></i> <i class="fa fa-external-link"></i></a></p>
       </div>
     </div>
  </div>
</template>

<script>
import contentInfo from '@/components/tool/content'
export default {
  components: {
    contentInfo,
  },
  data() {
    return {
       contentArray:[
         {
           title:'Java抽象类和接口总结',
           array:[
             'Java抽象类和接口总结',
             '1、abstract class在Java语言中表示的是一种继承关系，一个类只能使用一次继承关系。但是，一个类却可以实现interface',
             '2、在abstract class中可以有自己的数据成员，也可以有非abstract的成员方法，而在interface中，只能够有静态的不能被修改的数据成员（也就是必须是static final的，不过在interface中一般不定义数据成员），所有的成员方法都是abstract的。',
             '3、abstract class和interface所反映出的设计理念不同，其实abstrat class表示的是‘is-a’关系，interface表示的是‘like-a’关系',
             '4、实现抽象类和接口的类必须实现其中的所有方法，抽象类中可以有非抽象方法，接口中则不能有实现方法。',
             '5、接口中定义的变量默认是 public static final 型，且必须给其初值，所以实现类中不能重新定义，也不能改变其值。',
             '6、抽象类中的变量默认是 friendly 型，其值可以在子类中重新定义，也可以重新赋值。',
             '7、接口中的方法默认都是 public,abstract 类型的。',
             '结论: abstract class 和 interface 是 Java 语言中的两种定义抽象类的方式，它们之间有很大的相似性。但是对于它们的选择却又往往反映出对于问题领域中的概 念本质的理解、对于设计意图的反映是否正确、合理，因为它们表现了概念间的不同的关系（虽然都能够实现需求的功能）。这其实也是语言的一种的惯用法，希望读者朋友能够细细体会。',
           ],
         },
         {
           title:'C++运算符',
           array:[
             'Java抽象类和接口总结',
             '1、abstract class在Java语言中表示的是一种继承关系，一个类只能使用一次继承关系。但是，一个类却可以实现interface',
             '2、在abstract class中可以有自己的数据成员，也可以有非abstract的成员方法，而在interface中，只能够有静态的不能被修改的数据成员（也就是必须是static final的，不过在interface中一般不定义数据成员），所有的成员方法都是abstract的。',
             '3、abstract class和interface所反映出的设计理念不同，其实abstrat class表示的是‘is-a’关系，interface表示的是‘like-a’关系',
             '4、实现抽象类和接口的类必须实现其中的所有方法，抽象类中可以有非抽象方法，接口中则不能有实现方法。',
             '5、接口中定义的变量默认是 public static final 型，且必须给其初值，所以实现类中不能重新定义，也不能改变其值。',
             '6、抽象类中的变量默认是 friendly 型，其值可以在子类中重新定义，也可以重新赋值。',
             '7、接口中的方法默认都是 public,abstract 类型的。',
             '结论: abstract class 和 interface 是 Java 语言中的两种定义抽象类的方式，它们之间有很大的相似性。但是对于它们的选择却又往往反映出对于问题领域中的概 念本质的理解、对于设计意图的反映是否正确、合理，因为它们表现了概念间的不同的关系（虽然都能够实现需求的功能）。这其实也是语言的一种的惯用法，希望读者朋友能够细细体会。',
           ],
         },
         {
           title:'kotlin委托',
           array:[
             'Java抽象类和接口总结',
             '1、abstract class在Java语言中表示的是一种继承关系，一个类只能使用一次继承关系。但是，一个类却可以实现interface',
             '2、在abstract class中可以有自己的数据成员，也可以有非abstract的成员方法，而在interface中，只能够有静态的不能被修改的数据成员（也就是必须是static final的，不过在interface中一般不定义数据成员），所有的成员方法都是abstract的。',
             '3、abstract class和interface所反映出的设计理念不同，其实abstrat class表示的是‘is-a’关系，interface表示的是‘like-a’关系',
             '4、实现抽象类和接口的类必须实现其中的所有方法，抽象类中可以有非抽象方法，接口中则不能有实现方法。',
             '5、接口中定义的变量默认是 public static final 型，且必须给其初值，所以实现类中不能重新定义，也不能改变其值。',
             '6、抽象类中的变量默认是 friendly 型，其值可以在子类中重新定义，也可以重新赋值。',
             '7、接口中的方法默认都是 public,abstract 类型的。',
             '结论: abstract class 和 interface 是 Java 语言中的两种定义抽象类的方式，它们之间有很大的相似性。但是对于它们的选择却又往往反映出对于问题领域中的概 念本质的理解、对于设计意图的反映是否正确、合理，因为它们表现了概念间的不同的关系（虽然都能够实现需求的功能）。这其实也是语言的一种的惯用法，希望读者朋友能够细细体会。',
           ],
         },
         {
           title:'Lua运算符',array:[],
         },
         {
           title:'docker安装mysql 8版本',array:[],
         },
         {
           title:'Python strip()方法',array:[],
         },
         {
           title:'C字符串',array:[],
         },
         {
           title:'Python3 SMTP发送邮件',array:[],
         },
         {
           title:'HTML头部',array:[],
         },
         {
           title:'Python3函数装饰器',array:[],
         },
         {
           title:'Python练习实例21',array:[],
         },
         {
           title:'C++指针 vs 数组',array:[],
         },
         {
           title:'C练习实例23',array:[],
         },
         {
           title:'Python3函数',array:[],
         },
         {
           title:'C#多态性',array:[],
         },
         {
           title:'Node.js RESTful API',array:[],
         },
         {
           title:'Kotlin扩展',array:[],
         },
         {
           title:'JavaScript字符串',array:[],
         },
         {
           title:'SQL通配符',array:[],
         },
         {
           title:'Kotlin继承',array:[],
         },
         {
           title:'JavaScript简介',array:[],
         },
         {
           title:'React事件处理',array:[],
         },
         {
           title:'Linux let命令',array:[],
         },
         {
           title:'Java文档注释',array:[],
         },
         {
           title:'Go语言switch语句',array:[],
         },
         {
           title:'建造者模式',array:[],
         },
         {
           title:'kotlin类和对象',array:[],
         },
         {
           title:'工厂模式',array:[],
         },
         {
           title:'jQuery删除元素',array:[],
         },
         {
           title:'CSS margin百分比',array:[],
         },
         {
           title:'C位域',array:[],
         },
         {
           title:'Java教程',array:[],
         },
         {
           title:'Django创建一个项目',array:[],
         },
         {
           title:'Python3布尔(bool)类型详解',array:[],
         },
         {
           title:'CSS display(显示)与visibility(可见性)',array:[],
         },
         {
           title:'Java实例-字符串性能比较测试',array:[],
         },
         {
           title:'define宏的边缘效应',array:[],
         },
         {
           title:'React JSX',array:[],
         },
         {
           title:'Python 列表(List)',array:[],
         },
         {
           title:'TypeError：‘dict_keys’object does not support indexing',array:[],
         },
         {
           title:'C#索引器（Indexer）',array:[],
         },
         {
           title:'Python交换变量',array:[],
         },
         {
           title:'PHP sha1()函数',array:[],
         },
         {
           title:'C 环境设置',array:[],
         },
         {
           title:'Python函数',array:[],
         },
         {
           title:'C typedef',array:[],
         },
         {
           title:'C指针',array:[],
         },
       ]
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
.user-note-list {
  width: 68%;
  background: #fff;
  margin: 0;
  border: 1px solid #efefef;
  border-bottom: 0;
  margin-bottom: 20px;
  margin-right: 1%;
  float: left;
  .header-title {
    background: #fbfbfb;
    border-bottom: 1px solid #efefef;
    padding: 20px 30px 20px 30px;
    h2 {
      padding-bottom: 9.3px;
      font-size: 31.6px;
    }
  }
  .example-main {
    margin: 0 4px 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .example-item {
    border-radius: 4px;
    margin-bottom: 0px;
    margin-top: 5px;
    background-color: #fff;
    border-color: #ddd;
    color: #333;
    padding: 10px 15px;
    .item-title {
      font-size: 16px;
      color: inherit;
      font-weight: bold;
      span {
        float: right;
      }
    }
  }
  .footer-page {
    text-align: center;
    padding: 20px 0;
    color: #98b880;
  }
}
</style>
