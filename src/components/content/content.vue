<template>
  <div class="homeContent">
      <h2><i class="el-icon-tickets"></i>{{dataObj.title}}</h2>
      <div class="boxblock" v-for="(data,index) in dataObj.array" :key="index">
            <a :href="data.href">   
            <h4>{{data.title}}</h4>
            <img :src="data.src"/>
            <strong>{{data.text}}</strong>
           </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'homeContent',
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
.homeContent{
    clear:both;
    padding-top:10px;
    i{
        padding-right:4px;
    }
    h2{
        font-size:18px;
        font-weight:700;
        margin:12px 0;
        border-bottom:1px solid #eaeaea;
    }
    .boxblock{
        width:31%;
        margin:0 8px 10px 0;
        text-align:left;
        height:80px;
        color:#bbb;
        background-color: #f6f6f6;
        border-radius: 5px;
        padding:6px 16px;
        display:block;
        float:left;
        overflow: hidden;
        h4{
        color:#64854c;
        font-size:16px;
        margin:10px 0;
        line-height: 1.1;
        }
        img{
            float:left;
            margin:0 10px;
            width:32px;
            height:32px;
        }
        strong{
            display:block;
            color:#666;
        }
    }
    
}
</style>
