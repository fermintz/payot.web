<template>
  <div class="wrap">
    <Drawer ref="drawer"/>
    <Header :headState="true" @child="drawerHandle"/>
    <div class="contents">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import Drawer from '@/components/drawer.vue';

export default {
  components:{
    Header, Footer, Drawer
  },
  methods:{
    drawerHandle(value){
      this.$refs.drawer.drawerOpen(value);
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  width:100%;
  overflow:hidden;

  .contents{
    padding-top:70px;
  }

  .sub-header{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:70px;
    background:rgba(255,255,255,1);
    border-bottom:1px solid #e2e2e2;

    dl{
      text-align:center;

      dt{
      font-size:24px;
      }
      dd{
        font-size:16px;
        color:#888;
        margin-top:5px;
      }
    }  
  }
}


</style>