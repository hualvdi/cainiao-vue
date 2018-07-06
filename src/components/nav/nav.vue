<template>
  <div class="nav">
      <div class="container">
          <div class="row">
              <div class="navs">
                  <ul>
                      <li v-for="(data,index) in dataArray" :key="index">
                          <a :href=data.href>{{ data.text }}</a>
                        </li>
                    </ul>
              </div>
          </div> 
      </div>
  </div>
</template>

<script>

export default {
    name:'commNav',
    components: {
    },
    data() {
        return {
            input:'',
        }
    },
    props:{
        dataArray:Array,
    },
}
</script>

<style lang="scss">
@import '~styles/index';
.nav{
    width:100%;
    overflow: hidden;
    background-color: #96b97d;
    .navs{
        ul{
            margin:10px 0 0 20px;
            height:24px;
            font-size: 1.1em;
            padding:0;
            text-align: left;
            li{
                display:inline-block;
                margin-right:20px;
                color:#fff;
                a{
                    color:#fff;
                }
            }
        }
    }
    
}
</style>
