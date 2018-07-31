<template>
  <div class="nav">
      <!--一级菜单-->
     <div class="container">
      <div class="row">
        <div class="navs">
        <ul>
        <li v-for="(data,index) in dataArray" :key="index">
            <a v-if="data.href" :href=data.href target="_blank">{{ data.text }}</a>
            <a v-else @click="subBarShow(data)">{{ data.text }}</a>
        </li>
        </ul>
        <!--search-->
        <div>
            <el-input placeholder="请输入内容" v-model="input" >
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
            </el-input>
        </div>     
        </div>
     </div> 
    </div>
       
  </div>
</template>

<script>
export default {
    name:'navSearch',
    components: {
       
    },
    data() {
        return {
            input: '',
        }
    },
    props:{
        dataArray:Array,
    },
    methods:{
        search(){
            console.log('this',this.input);
        }
    },
}
</script>

<style lang="scss">
@import '~styles/index';
.nav{
    width:100% !important;
    overflow: hidden;
    background-color: #96b97d;
    .navs{
        width:auto;
        padding:0 10px 2px;
        ul{
            margin-left:20px;
            height:24px;
            font-size: 1.1em;
            padding:8px 0 0 0;
            text-align: left;
            li{
                display:inline-block;
                margin-right:20px;
                color:#fff;
                vertical-align: middle;
                a{
                    color:#fff;
                    cursor: pointer; 
                     padding:10px 0;
                }
            }
        }
       
    }
}
</style>
