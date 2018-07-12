<template>
  <div class="qrcode">
      <div class="item">
          <a :class="[scroll>300?'active':'noShow','commBox']" @click="goTop"><i class="fa fa-angle-up"></i></a>
          <a class="commBox" @mouseover="showQrcode" @mouseout="hiddenQrcode"><i class="fa fa-qrcode"></i></a>
      </div>
      <div :class="[isMove?'active':'noShow','weChat']">
        <h4>微信关注</h4>
        <img src="../../../assets/qrcode.png"/>
      </div>
  </div>
</template>

<script>
export default {
    name:'qrcode',
    components: {
    },
    data() {
        return {
            isMove:false,
            scroll:0,
        }
    },
    props:{
        dataObj:Object,
    },
    methods:{
        showQrcode(){
            this.isMove = true;
        },
        hiddenQrcode(){
            this.isMove = false;
        },
        getDispath(){
            this.scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        },
        goTop(){
            this.scroll = 0;
            window.pageYOffset = 0;
            document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0;
        }
    },
    mounted(){
        window.addEventListener('scroll',this.getDispath);
    },
    destroyed () {
        window.removeEventListener('scroll', this.getDispath);
},
}
</script>

<style lang="scss">
@import '~styles/index';
.qrcode,.item{
    position:fixed;
    right: 1%;
    bottom:5%;
    width:40px;
    border:1px solid #eee;
    background-color: white;
    font-size:24px;
    z-index:1040;
    .commBox{
        width:40px;
        height:40px;
        text-align:center;
        border-bottom: 1px solid #eee;
        color:$greeen-color;
        display:block;
    }
    .weChat{
        position: fixed;
        bottom:0;
        height:188px;
        width:128px;
        padding:10px;
        margin:0;
        right:65px;
        left:auto;
        text-align:center;
        border:1px solid rgba(0,0,0,0.3);
        border-radius: 6px;
        box-shadow: 0 3px 7px rgba(0,0,0,0.3);
        background-color: white;
        h4{
            font-size:14px;
            margin:0 0 10px;
        }
        img{
            width:128px;
            height:128px;
            max-width:100%;
        }
    }
    .active{
        display:block;
    }
    .noShow{
        display:none;
    }
}
</style>
