<template>
  <div class="toolIndex">
     <!--主体-->
     <content-info v-for="(data,index) in contentArray" :key="index" :dataObj="data"/>
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
         title:'编译工具',
         array:[
           {title:'PHP在线工具', href:'/',src:require('../../assets/h1.png'),text:'在线编译、运行PHP代码'},
           {title:'Python在线工具',href:'/',src:require('../../assets/h2.png'),text:'在线编译、运行Python代码'},
           {title:'Python3在线工具',href:'/',src:require('../../assets/h3.png'),text:'在线编译、运行Python代码'},
           {title:'Java在线工具',href:'/',src:require('../../assets/h4.png'),text:'在线编译、运行Java代码'},
           {title:'C在线工具',href:'/',src:require('../../assets/h5.png'),text:'在线编译、运行C代码'},
           {title:'C++在线工具',href:'/',src:require('../../assets/h6.png'),text:'在线编译、运行C++代码'},
           {title:'Ruby在线工具',href:'/',src:require('../../assets/h7.png'),text:'在线编译、运行Ruby代码'},
           {title:'C#在线工具',href:'/',src:require('../../assets/h8.png'),text:'在线编译、运行Ruby代码'},
           {title:'Scala在线工具', href:'/',src:require('../../assets/h1.png'),text:'在线编译、运行Scala代码'},
           {title:'Objective C在线工具',href:'/',src:require('../../assets/h2.png'),text:'在线编译、运行PObjective C代码'},
           {title:'Perl在线工具',href:'/',src:require('../../assets/h3.png'),text:'在线编译、运行Perl代码'},
           {title:'Bash在线工具',href:'/',src:require('../../assets/h4.png'),text:'在线编译、运行Bash代码'},
           {title:'VB.NET在线工具',href:'/',src:require('../../assets/h5.png'),text:'在线编译、运行VB.NET代码'},
           {title:'Swift在线工具',href:'/',src:require('../../assets/h6.png'),text:'在线编译、运行Swift代码'},
           {title:'Go在线工具',href:'/',src:require('../../assets/h7.png'),text:'在线编译、运行Go代码'},
           {title:'Node.js在线工具',href:'/',src:require('../../assets/h8.png'),text:'在线编译、运行Node.js代码'},
           {title:'Lua在线工具',href:'/',src:require('../../assets/h6.png'),text:'在线编译、运行Lua代码'},
           {title:'Pascal在线工具',href:'/',src:require('../../assets/h7.png'),text:'在线编译、运行Pascal代码'},
           {title:'Kotlin在线工具',href:'/',src:require('../../assets/h8.png'),text:'在线编译、运行Kotlin代码'},
         ]
       },
       {
         title:'前端工具',
         array:[
           {title:'HTML压缩/解压工具', href:'/',src:require('../../assets/h1.png'),text:'在线压缩/解压HTML代码'},
           {title:'JS压缩/解压工具',href:'/',src:require('../../assets/h2.png'),text:'在线压缩/解压JS代码'},
           {title:'CSS压缩/解压工具',href:'/',src:require('../../assets/h3.png'),text:'在线编译、运行Python代码'},
           {title:'JSON在线解析',href:'/',src:require('../../assets/h4.png'),text:'在线JSON格式化工具'},
           {title:'RGB转16进制工具',href:'/',src:require('../../assets/h5.png'),text:'RGB转  HEX互转工具'},
           {title:'在线进制转换器',href:'/',src:require('../../assets/h6.png'),text:'各进制互转换器'},
           {title:'图片转BASE64编码',href:'/',src:require('../../assets/h7.png'),text:'在线图片转Base64编码工具'},
           {title:'HTML/CSS/JS在线工具',href:'/',src:require('../../assets/h8.png'),text:'在线执行HTML/CSS/JS代码'},
           {title:'随机密码生成器', href:'/',src:require('../../assets/h1.png'),text:'多种字符组合密码'},
           {title:'HTML编码/解码',href:'/',src:require('../../assets/h2.png'),text:''},
           {title:'Base64编码/解码',href:'/',src:require('../../assets/h3.png'),text:''},
           {title:'URL编码/解码',href:'/',src:require('../../assets/h4.png'),text:''},
           {title:'SQL格式化/压缩工具',href:'/',src:require('../../assets/h5.png'),text:'SQL在线格式化/压缩工具'},
           {title:'MD5加密',href:'/',src:require('../../assets/h6.png'),text:'MD5加密工具'},
           {title:'Go在线工具',href:'/',src:require('../../assets/h7.png'),text:'在线编译、运行Go代码'},
           {title:'SHA加密',href:'/',src:require('../../assets/h8.png'),text:'SHA加密工具'},
           {title:'XML、JSON在线转换',href:'/',src:require('../../assets/h6.png'),text:'在线XML、JSON转换工具'},
           {title:'XML在线格式化',href:'/',src:require('../../assets/h7.png'),text:'在线XML格式化压缩工具'},
           {title:'Markdown在线编辑器',href:'/',src:require('../../assets/h8.png'),text:''},
           {title:'html转js在线工具',href:'/',src:require('../../assets/h8.png'),text:''},
           {title:'UNIX时间戳转换',href:'/',src:require('../../assets/h6.png'),text:''},
           {title:'正则表达式在线测试',href:'/',src:require('../../assets/h7.png'),text:''},
           {title:'RGB HSV转换',href:'/',src:require('../../assets/h8.png'),text:'RGB HSV互转工具'},
           {title:'RGB CMYK转换工具',href:'/',src:require('../../assets/h7.png'),text:'RGB CMYK互转工具'},
           {title:'HEX CMYK转换工具',href:'/',src:require('../../assets/h8.png'),text:'HEX CMYK互转工具'},
           {title:'HEX HSV转换工具',href:'/',src:require('../../assets/h8.png'),text:'HEX HSV互转工具'},
           {title:'HSV CMYK转换工具',href:'/',src:require('../../assets/h6.png'),text:'HSV CMYK互转工具'},
           {title:'在线二维码生成器',href:'/',src:require('../../assets/h7.png'),text:'网址生成二维码'},
           {title:'在线Unicode编码转换',href:'/',src:require('../../assets/h8.png'),text:'Unicode 与中文互转、ASCII 与 Unicode互转'},
         ]
       },
       {
         title:'更多工具',
         array:[
           {title:'TinyPNG图片压缩工具', href:'/',src:require('../../assets/h1.png'),text:'支持PNG、JPG、JPEG'},
           {title:'在线画图工具',href:'/',src:require('../../assets/h2.png'),text:'在线制作流程图'},
           {title:'SVG在线编辑器',href:'/',src:require('../../assets/h3.png'),text:'在线制SVG文件'},
         ]
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
.toolIndex {
  width: 100%;
}
</style>
