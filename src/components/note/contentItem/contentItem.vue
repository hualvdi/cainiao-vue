<template>
  <div class="noteContent">
      <a :href="dataObj.href"><img :src="dataObj.src"/></a>
      <div class="boxblock" > 
        <h2><a :href="dataObj.href">{{dataObj.title}}</a><i class="fa fa-external-link"></i></h2>
        <p>{{dataObj.text}}</p>    
      </div>
  </div>
</template>

<script>
export default {
    name:'noteContent',
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
.noteContent{
    padding:20px;
    overflow: hidden;
    a{
        color:$greeen-color;
    }
    img{
        width:25%;
        max-height: 109px;
        float:left;
        margin:0 20px 10px 0;
    }
    .boxblock{
        float:right;
        width:70%;
        h2{
        color:$greeen-color;
        font-size:16px;
        margin:0 0 10px 0;
        font-weight: 700;
        i{
            vertical-align: middle;
            padding-left:4px;
            color:black;
        }
        }
        p{
            margin:0 0 10px 0;
        }
    }
    
}
</style>
