<template>
  <div class="siderRight">
      <div class="title"><a href="javascript:void(0)">{{dataObj.title}}</a></div>
      <div class="box"> 
          <a v-for="(data,index) in dataObj.array" :key="index">{{data}}</a>
      </div>
  </div>
</template>

<script>
export default {
    name:'siderRight',
    components: {
    },
    data() {
        return {
            input:'',
        }
    },
    props:{
        dataObj:Object,
    },
}
</script>

<style lang="scss">
@import '~styles/index';
.siderRight{
    width:100%;
    margin-bottom:20px;
    background-color: $body-background;
    .title{
        width:auto;
        background-color: #e9e9e9;
        padding:0 19px 10px 19px;
        margin:0 auto 10px;
        text-align:center;
        overflow: hidden;
        a{
            color:$greeen-color;
            font-size:16px;
            font-weight:bold;
            width:100%;
            display:block;
            background-color: #efefef;
            padding:5px 0 5px 0;
        }
    }
    .box{
        width:auto;
        padding-left:14px;
        text-align:center;
        padding-bottom: 16px;
        overflow: hidden;
        a{
            color:#999;
            background-color: #f6f6f6;
            float:left;
            width: 32%;
            padding:0;
            font-size:12px;
            margin:0 1% 1% 0;
            height:29px;
            line-height:29px;
            overflow: hidden;
            cursor: pointer;
        }
    }
    
}
</style>
