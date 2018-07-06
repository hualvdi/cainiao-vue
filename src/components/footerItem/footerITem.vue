<template>
  <div class="footerItem">
      <dl>
          <dt>{{dataObj.title}}</dt>
          <dd v-for="(data,index) in dataObj.array" :key="index">
              <a :href="data.href">{{data.text}}</a>
          </dd>
      </dl>
  </div>
</template>

<script>
export default {
    name:'footerItem',
    components: {
    },
    data() {
        return {
            input:'',
        }
    },
    props:{
        dataObj:Object,
    }
}
</script>

<style lang="scss">
@import '~styles/index';
.footerItem{
    dl{
        padding-left:30px;
        min-height:175px;
        margin:25px 0;
        border-left:1px solid #e4e4e4;
        width:18%;
        float:left; 
        color:gray !important;
        text-align:left; 
        dt{
            font-size:14px;
            font-weight:500;
            color:#666;
        }
        dd{ 
        text-overflow:ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 12px;
        margin-top:10px;
        a{
            color:gray;
        }
        a:before{
            content:'•';
            padding-right:4px;
        }
    }
    }
    
}
</style>
