<template>
  <div class="toolExampleFile">
     <!--主体-->
     <div class="header-title">
       <h2><i class="fa fa-list"></i> 最新文章列表</h2>
     </div>
     <div  class="example-main">
       <div class="example-item"  v-for="(data,index) in contentArray" :key="index">
         <p class="item-title"><a><i class="fa fa-file-code-o"></i> {{data}}<span>></span></a></p>
       </div>
     </div>
     <div class="footer-page">
       <el-pagination
       background
       layout="total, sizes,prev, pager, next"
       :total="100">
       </el-pagination>
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
       'Vue循环（v-for）嵌套','canvas Math.PI上半圆','CSS固定左侧导航栏 - 高度自适应','CSS 固定左侧导航栏','CSS 带搜索框的导航栏'
       ,'JavaScript创建一个菜单搜索','jQuery remove不能删除带有过滤器的子元素','Bootstrap btn-group-vertical','Vue 修改组件的显示等内部属性'
       ,'JavaScript逻辑运算数字','Vue.js获取当前元素','JavaScript闭包 - 局部变量计算器','jQuery 实现阅读更多功能','JavaScript按下回车（Enter）键触发按钮点击事件'
       ,'关于画布的滚动条（Canvas）实现代码','HTML Web Storage（存储）增删改查功能','JavaScript使用setTimeout()实现计数器停止计数'
       ,'JavaScript使用setTimeout()实现计数器','setTimeout()执行指定函数','setTimeout()简单实例','jQuery判断id是否存在','Vue v-else-if条件判断实例'
       ,'css 移除列表项li默认样式','Angular ng-click实例','JS联想、自动补齐功能','HTML/CSS/JS响应式登录表单','HTML/CSS/JS联系我们表单模板（带百度地图）'
       ,'CSS让DIV水平居中显示','jQuery获取当前选中的radio控件的詹','JS/CSS 实现项/踩','JavaScript实现隐藏显示切换','JavaScript文本替换'
       ,'JavaScript DIV切换不同的样式','JavaScript幻灯片效果（文本版本）','CSS多媒体查询，适配各种设备尺寸','JavaScript设置DIV可拖动'
       ,'JavaScript通过回车键发点击/提交事件','JavaScript判断响应式界面大小','JavaScript设置语法高亮','JavaScript设置列表选项(li)可删除'
       ,'jQuery查看元素是否隐藏','Angular controller作用域','JavaScript正则表达式判断邮箱','线性渐变context.createLinearGradient应用实例'
       ,'JS实现复选框（CheckBox）的全选和取消全选','JavaScript匿名函数自动调用表达式','jQuery判断一个对象是否为数组','JavaScript测试不使用break跳出循环'       
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
.toolExampleFile {
  width: 100%;
  color: #333;
  .header-title {
    padding: 16px 0 20px;

    h2 {
      padding-bottom: 6px;
      font-size: 30px;
      border-bottom: 1px solid #eee;
    }
  }
  .example-main {
    margin-bottom: 20px;
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
