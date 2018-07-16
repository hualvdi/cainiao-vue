<template>
  <div class="nav">
      <!--一级菜单-->
      <div class="box1">
      <div class="container">
      <div class="row">
          <div class="navs">
            <ul>
                <li v-for="(data,index) in dataArray" :key="index">
                <a v-if="data.href" :href=data.href target="_blank">{{ data.text }}</a>
                <a v-else @click="subBarShow(data)">{{ data.text }}</a>
                </li>
            </ul>     
              </div>
          </div> 
      </div>
      </div>
       <!--二级菜单-->
      <div class="box2"  v-if="barVisible" >
      <div class="container">
      <div class="row">
          <div class="navBar">
            <ul>
                <li v-for="(data,index) in subBar" :key="index">
                <a :href=data.href>{{data.name}}</a>
                </li>
            </ul>
          </div>
      </div>
      </div>
      </div>
       <!--登录modal-->
      <login :visible="dialogFormVisible" @getVisible="getVisible"/>   
  </div>
</template>

<script>
import login from '@/components/common/login'
export default {
    name:'commNav',
    components: {
        login,
    },
    data() {
        return {
            dialogFormVisible: false,
            barVisible:false,
            subBar:[],
        }
    },
    props:{
        dataArray:Array,
    },
    methods:{
        subBarShow(obj) {
            if(obj.showBar){
                this.barVisible = true;
                this.subBar = obj.barArray;
            }else{
                this.dialogFormVisible = true;
            }  
        },
        getVisible(data) {
            this.dialogFormVisible = data;
        }
    },
}
</script>

<style lang="scss">
@import '~styles/index';
.nav{
    width:100% !important;
    overflow: hidden;
    .box1{
        width:100% !important;
        background-color: #96b97d;
    }
    .box2{
        width:100% !important;
        background-color: #fff;
        height:34px;
    }
    .navs,.navBar{
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
     .navBar{
        padding:0 0 10px 0;
        height:24px;
        font-size:1.2em;
        width:100%;
        float:left;
        background-color: #fff;
        a{
            color:#333 !important;
        }
        ul{
            padding-left:10px;
        }
    }
}
</style>
