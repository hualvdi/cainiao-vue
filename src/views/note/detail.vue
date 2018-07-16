<template>
  <div class="noteDetail">
       <div class="col content"></div>    
  </div>
</template>

<script>
import contentItem from '@/components/note/contentItem'

export default {
  components: {
    contentItem,
  },
  data() {
    return {
    }
  },
  
  methods:{},

}
</script>


<style lang="scss">
@import '~styles/index';
.noteDetail{
  width:66%;
}
</style>
