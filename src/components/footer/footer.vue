<template>
  <div class="footer">
      <div class="itemBlock">
          <div class="footer-block">
              <footer-item :dataObj="online"/>
              <footer-item :dataObj="util"/>
              <footer-item :dataObj="newUpdate"/>
              <footer-item :dataObj="webInfo"/>
              <div class="share">
                  <h2>关注微信</h2>
                  <div class="share-qcode"><img src="../../assets/qrcode.png"/></div>
              </div>
          </div>
      </div>
      <div class="copyright">
          <p>Copyright © 2013-2018 <a href="/">菜鸟教程</a>  runoob.com All Rights Reserved. 备案号：闽ICP备15012807号-1</p>
      </div>
  </div>
</template>

<script>
import footerItem from '@/components/footerItem'
export default {
    name:'footers',
    components: {
        footerItem,
    },
    data() {
        return {
            input:'',
            online:{
                title:'在线实例',
                array:[
                    {href:'/',text:'HTML实例'},
                    {href:'/',text:'CSS实例'},
                    {href:'/',text:'JavaScript实例'},
                    {href:'/',text:'Ajax实例'},
                    {href:'/',text:'jQuery实例'},
                    {href:'/',text:'XML实例'},
                    {href:'/',text:'Java实例'},
                ],
            },
            util:{
                title:'字符集&工具',
                array:[
                    {href:'/',text:'HTML字符集设置'},
                    {href:'/',text:'HTML ASCII字符集设置'},
                    {href:'/',text:'HTML ISO-8859-1'},
                    {href:'/',text:'HTML 实体符号'},
                    {href:'/',text:'HTML 拾色器'},
                    {href:'/',text:'HTML 格式化工具'},
                ],
            },
            newUpdate:{
                title:'最新更新',
                array:[
                    {href:'/',text:'JAVA设计模式之门面模式（外观模式）'},
                    {href:'/',text:'Java设计模式&（外观模式）'},
                    {href:'/',text:'Linux导入、导出MySQL数据库命令'},
                    {href:'/',text:'Java String Tokenizer类使用方法'},
                    {href:'/',text:'HTML DOM scripts集合'},
                    {href:'/',text:'JavaScript HTML DOM节点列表'},
                ],
            },
            webInfo:{
                title:'站点信息',
                array:[
                    {href:'/',text:'意见反馈'},
                    {href:'/',text:'免责声明'},
                    {href:'/',text:'关于我们'},
                    {href:'/',text:'文章归档'},
                ],
            },
            
        }
    },
}
</script>

<style lang="scss">
@import '~styles/index';
.footer{
    margin-top:20px !important;
    min-width: 100%;
    .itemBlock{
        background-color: $body-background;
    }
    .footer-block{
        padding-bottom:50px;
        margin:0 auto;
        width:80%;
        min-height:250px;
        .share{
            width:16%;
            min-height:226px;
            border-left:1px solid #e4e4e4;
            padding:20px 0 0 40px;
            float:left;
            h2{
                font-size:18px;
                color:#666;
                margin-bottom:8px;
                text-align:left;
            }
            .share-qcode{
                margin-top:10px;
                img{
                    height:auto;
                    min-height:100%;
                }
            }
        }
    }
    .copyright{
        text-align:center;
        padding:20px 0;
        color:#999 !important;
        a{
            color:#fff;
        }
    } 
}
</style>
