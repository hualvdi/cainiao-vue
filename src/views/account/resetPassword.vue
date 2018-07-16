<template>
  <div class="reset-password">
     <!--内容-->
    <div class="container main">
      <div class="box">
        <div class="step">
          <ul>
          <li v-for="(data,index) in step" :key="index" :class="[currentIndex == index?'isActive':'']" @click="stepChange(index)">{{data}}</li>
        </ul>
        </div>

        <div class="content">
           <el-form :model="form">
             <h1>填写用户名或邮箱：</h1>
             <el-form-item>
             <el-input v-model="form.name" auto-complete="off" placeholder="用户名或邮箱"></el-input>
             </el-form-item>
             <el-button @click="getMail">获取密码重置邮件</el-button>
             </el-form>
        </div>
        
      </div>
   
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data() {
    return {
      currentIndex:0,
      step:['获取密码重置邮件','设置新密码','成功修改密码'],
      form:{
        name:'',
      },
    }
  },
  
  methods:{
    getMail() {
        //console.log(tab, event);
      },
      stepChange(index) {
        this.currentIndex = index;
        console.log(index);
      }
  },
}
</script>

<style lang="scss">
@import '~styles/index';
.reset-password{
  .container{padding:0 20px;}
  .main{
    margin-top:20px;
  }
  .box{
    padding:20px;
    background:#fff;
    width:auto;
    .step{
      width:100%;
      ul{
        margin-bottom: 50px;
        height:33px;
      }
      li{
        display: inline-block;
        text-align: center;
        width:33.33%;
        color:#666;
        line-height:33px;
        position:relative;
        float:left;
        font-size:14px;
        background-color: #eee;
      }
    }
    .content{
      width:300px;
      margin:0 auto;
      text-align: left;
    }
    h1{
      color:#777;
      font-size:24px;
      margin:0;
    }
    input{
      height:47px;
    }
    button{
      width:100%;
      cursor: pointer;
      color:#fff;
      background: #96b97d;
      font-size:16px;
    }
  }
  .isActive{
    background: #78a15a !important;
    color:#fff !important;
  }
}
</style>
