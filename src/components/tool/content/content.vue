<template>
  <div class="toolContent">
    <div class="content-header">
      <h2><i class="fa fa-list"></i>{{dataObj.title}}</h2>
    </div>
      <div class="content-box">
        <div class="boxblock" v-for="(data,index) in dataObj.array" :key="index">
          <a :href="data.href"><img :src="data.src"/></a>
          <div class="body-text">
          <h4><a :href="data.href">{{data.title}}</a></h4>
          <span>{{data.text}}</span>
          </div>
      </div>
      </div>
      
  </div>
</template>

<script>
export default {
    name:'toolContent',
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
.toolContent {
  background: #fff;
  padding: 0 15px 15px 15px;
  margin-top: 10px;
  border-radius: 4px;
  width: 100%;
  i {
    padding-right: 4px;
  }
  .content-header {
    padding: 16px 0 20px;
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 9px;
    border-bottom: $border-color-ea;
  }
  .content-box {
    display: flex;
    flex-flow: row wrap;
  }
  .boxblock {
    width: 22.5%;
    //margin: 0 auto;
    text-align: left;
    //height: 80px;
    color: #bbb;
    background-color: #f6f6f6;
    border-radius: 4px;
    padding: 6px;
    display: block;
    float: left;
    overflow: hidden;
    background-clip: padding-box;
    border: 6px solid #fff;
    img {
      float: left;
      width: 48px;
      height: 48px;
    }
    a {
      padding-right: 10px;
    }
  }
  .body-text {
    display: inline-block;
    h4 {
      color: $greeen-color !important;
      font-size: 18px;
      margin: 0 0 5px 0;
      line-height: 1.1;
      a {
        color: $greeen-color !important;
      }
    }
    span {
      display: block;
      color: #666;
      text-align: left;
      word-break: keep-all;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: bold;
      font-size: 14px;
      max-width: 12em;
    }
  }
}
</style>
