<template>
  <div :class="['login',isVisible?'visibles':'hiddens']">
      <div class="box">
          <ul>
              <li><a href="javascript:;" @click="showContent('showLogin','showSign')">用户登录</a></li>
              <li><a href="javascript:;" @click="showContent('showSign','showLogin')">注册新用户</a></li>
          </ul>
          <div :class="['usr-login',showLogin?'visibles':'hiddens']">
              <el-form :model="form">
              <el-form-item :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off" placeholder="输入用户名"></el-input>
              </el-form-item>
              <el-form-item :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off" placeholder="输入密码"></el-input>
              </el-form-item>
              <el-form-item :label-width="formLabelWidth">
              <el-button type="primary" @click="onSubmit">登录</el-button>
              </el-form-item>
              </el-form>
         </div>
         <div :class="['usr-sign',showSign?'visibles':'hiddens']"></div>
         <a @click="cancel" class="close-modal">×</a>
         </div> 
  </div>
</template>

<script>

export default {
    name:'login',
    components: {
    },
    data() {
        return {
            isVisible:false,
            formLabelWidth: '120px',
            showLogin:false,
            showSign:false,
            form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        } 
    },
    props:{
        visible:Boolean,
    },
    watch:{
        visible: function(newValue,oldValue) {
            //console.log(newValue,oldValue,'ttt',this.isVisible,this.visible);
           this.isVisible =  this.visible;
        }
    },
    methods:{
        cancel() {
            this.isVisible = false;
            this.visible = false;
            this.$emit('getVisible',this.isVisible);
        },
        onSubmit() {

        },
        showContent(str1,str2) {
            this[str1] = true;
            this[str2] = false;
        }
    },
    computed: {
        
    },
}
</script>

<style lang="scss">
@import '~styles/index';
.login{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(52,54,66,0.9);
    z-index:3;
    cursor: pointer;
    opacity: 1;
    visibility: hidden;
    .box{
        position: relative;
        width:90%;
        max-width:500px;
        background: #fff;
        cursor: auto;
        border-radius: 0.25em;
        margin:4em auto;
        ul{
            display:flex;
            flex-flow: row nowrap;
            height:70px;
            li{
                width:50%;
                float:left;
                text-align: center;
                line-height:1.5em;
                height:70px;
                a{
                    height:70px;
                    width:100%;
                    line-height:70px;
                    color:#96b880;
                    background: #e8f1e2;
                    display:block;
                    
                }
                a:first-child{
                    border-radius: 0.25em 0 0 0;
                }
                a:hover{
                    text-decoration: underline;
                }
                
            }
        }
    }
    .close-modal{
        display:block;
        position: absolute;
        width:40px;
        height:40px;
        right:0;
        top:-40px;
        z-index:4;
    }
    
}
.visibles{
    visibility: visible;
}
.hiddens{
    visibility: hidden;
}
.select{
    color:#505260;
    background: #FFF;
}
</style>
