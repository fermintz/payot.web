<template>
  <v-navigation-drawer
    v-model="visible"
    fixed
    right
    temporary
    overlay-opacity="0.9"
  >
    <div class="drawer fill-height">
      <h4>PAYOT</h4>
      <div class="menu">
        <v-btn text @click="$router.push('/about')">
          회사소개          
        </v-btn>
        <v-btn text @click="$router.push('/product/system')">
          무인매장 관리시스템 
        </v-btn>
        <v-btn text @click="$router.push('/product/smart')">
          스마트폰 결제시스템         
        </v-btn>
        <v-btn text @click="$router.push('/product/kiosk')">
          포인트충전 키오스크
        </v-btn>
        <v-btn text @click="$router.push('/review')">
          설치사례
        </v-btn>
      </div>

      <div class="menu2">
        <v-btn text @click="wrap">무인매장 관리시스템</v-btn>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data(){
    return{
      visible:false
    }
  },

  methods:{
    drawerOpen(value){
      this.visible = value;
    },
    wrap() {
      window.open('http://www.coin-machine.com', '_blank');
    }
  }
}
</script>

<style lang="scss" scoped>
.v-navigation-drawer{
  z-index:999;
}
.drawer{
  flex:1;
  background:#292929;
  color:#fff;

  h4{
    display:flex;
    align-items: center;
    justify-content: center;
    height:80px;
    border-bottom:1px solid rgba(0,0,0,0.3);
    letter-spacing:15px;
    margin-right:-10px;
    font-size:16px;
    color:rgba(255,255,255,0.2);
    background:#212121
  }

  .menu{

    border-bottom:1px solid rgba(255,255,255,0.1);

    .v-btn{
      min-width:100%;
      justify-content: flex-start;
      height:50px;
      color:#fff;
      border-radius:0px;
      border-top:1px solid rgba(255,255,255,0.1);
      border-bottom:1px solid rgba(0,0,0,0.3);
      font-weight:400;
      
    }
  }
  .menu2{
    padding:20px;
    .v-btn{
      width:100%;
      background:#fff;
      margin-bottom:10px;
    }
  }
     
}
</style>