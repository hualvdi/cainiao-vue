<template>
  <div :class="['login',isVisible?'visibles':'hiddens']">
      <div class="box">
          <ul>
              <li  @click="showContent('showLogin','showSign')"><a href="javascript:;" :class="[showLogin?'aSelete':'']">用户登录</a></li>
              <li @click="showContent('showSign','showLogin')"><a href="javascript:;" :class="[showSign?'aSelete':'']">注册新用户</a></li>
          </ul>
          <div :class="['usr-login',showLogin?'visibles':'hiddens']">
              <el-form :model="form">
              <el-form-item >
              <el-input v-model="form.name" auto-complete="off" placeholder="输入用户名" prefix-icon="el-icon-service"></el-input>
              </el-form-item>
              <el-form-item >
              <el-input v-model="form.pwd" auto-complete="off" placeholder="输入密码" prefix-icon="el-icon-view"></el-input>
              </el-form-item>
              <el-form-item >
              <el-col :span="20">
              <el-checkbox v-model="checked" style="font-size:12px">记住登录状态</el-checkbox>
              </el-col>
              <el-col :span="4">
              <a href="/" target="_blank">忘记密码?</a>
              </el-col>
              </el-form-item>
              <el-form-item >
              <el-button type="primary" @click="onSubmit" style="width:100%">登录</el-button>
              </el-form-item>
              </el-form>
         </div>
         <div :class="['usr-login',showSign?'visibles':'hiddens']">
             <el-form :model="form">
              <el-form-item >
              <el-input v-model="form.inviteCode" auto-complete="off" placeholder="输入邀请码" prefix-icon="el-icon-view"></el-input>
              </el-form-item>
              <el-form-item >
              <el-input v-model="form.name" auto-complete="off" placeholder="输入用户名" prefix-icon="el-icon-service"></el-input>
              </el-form-item>
                <el-form-item >
              <el-input v-model="form.mail" auto-complete="off" placeholder="输入mail" prefix-icon="el-icon-message"></el-input>
              </el-form-item>
              <el-form-item >
              <el-input v-model="form.pwd" auto-complete="off" placeholder="输入密码" prefix-icon="el-icon-view"></el-input>
              </el-form-item>
              <el-form-item >
              <el-input v-model="form.pwd2" auto-complete="off" placeholder="重复输入密码" prefix-icon="el-icon-view"></el-input>
              </el-form-item>
              <el-form-item >
              <el-button type="primary" @click="onSubmit" style="width:100%">注册新用户</el-button>
              </el-form-item>
              <el-form-item >
              <a href="/" target="_blank">如何获取邀请码?</a>
              </el-form-item>
              </el-form>
         </div>
         <a @click="cancel" class="close-modal"><i class="el-icon-close"></i></a>
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
            formLabelWidth: '24px',
            showLogin:true,
            showSign:false,
            isVisible:false,
            checked:false,
             form: {
                 name: '',
                 pwd:'',
                 inviteCode:'',
                 mail:'',
                 },      
            } 
    },
    props:{
        visible:Boolean,
    },
    watch:{
        visible: function(newValue,oldValue) {
           this.isVisible =  this.visible;
        }
    },
    methods:{
        cancel() {
            this.isVisible = false;
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
    a:hover{
        filter:alpha(opacity=80);
        -moz-opacity:0.8;
        opacity: 0.8;
    }
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
                    background: #e8f1e2;
                    display:block;
                    font-size:15px;
                    font-weight:bold;
                    
                }
                a:first-child{
                    border-radius: 0.25em 0 0 0 ;
                }
                a:hover{
                    text-decoration: underline;
                }
                
            }
        }
        button{
            background: #96b97d;
            border-color: #96b97d;
            height:50px;
        }
        input{
            height:50px;
        }
         a{
            color:#96b880;
            font-size:12px;
        }
    }
    .usr-login{
        padding:24px;
        .el-checkbox__label{
            font-size:12px;
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
        color:#fff !important;
        font-size:30px !important;
        text-align: center;
        i{
            width:100%;
            height:100%;
            
        }
    }
    
}
.visibles{
    visibility: visible;
    display:block;
}
.hiddens{
    visibility: hidden;
    display:none;
}
.aSelete{
    background: #fff !important;
    color:#333  !important;
}
</style>
