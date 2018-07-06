<template>
  <div class="logo-search">
      <div class="container">
          <div class="row">
              <div class="search">
                  <div class="left">
                      <h1>
                          <a href="/"></a>
                        </h1>  
                 </div>
                 <div class="right">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                 </div>
             </div>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {
    name:'logoSearch',
    components: {
    },
    data() {
        return {
            input:'',
        }
    },
}
</script>

<style lang="scss">
@import '~styles/index';
.logo-search{
    width:100%;
    padding-top:17px;
    margin-bottom:15px;
    .search{
        div{
            display:inline-block;
        }
        display:flex;
        flex-flow: row nowrap;
        .left{
            width:61.6%;
           h1{
               background-image: url(../../assets/logo.png);
               background-repeat: no-repeat;
               width:258px;
               height:39px;
               text-indent: -9999px;
               margin-left:20px;
               margin-top:10px;
            }
            a{
                width:258px;
                height:39px;
                display:block;
            } 
        }
        .right{
            width:36%;
            input{
                margin-top:10px;
            }
        }
    }
    
}
</style>
