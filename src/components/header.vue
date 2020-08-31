<template>
  <div class="header" :class="{ active: headState }">
    <div class="logo" @click="$router.push('/')">
      <img src="@/assets/img/logo_b.png" v-if="headState" />
      <img src="@/assets/img/logo_w.png" v-else />
    </div>
    <div class="gnb">
      <div class="pc-gnb">
        <v-btn
          text
          @click="$router.push('/about')"
          :class="{ active: this.$route.name === 'about' }"
        >
          회사소개
        </v-btn>
        <v-btn
          text
          @click="$router.push('/product/kiosk')"
          :class="{ active: this.$route.name === 'kiosk' }"
        >
          포인트충전 키오스크
        </v-btn>
        <v-btn
        text
          @click="$router.push('/product/system')"
          :class="{ active: this.$route.name === 'system' }"
        >
          무인매장 관리시스템
        </v-btn>
        <v-btn
          text
          @click="$router.push('/product/smart')"
          :class="{ active: this.$route.name === 'smart' }"
        >
          스마트폰 결제시스템
        </v-btn>
        
        <v-btn
          text
          @click="$router.push('/review')"
          :class="{ active: this.$route.name === 'review' }"
        >
          설치사례
        </v-btn>
      </div>
      <div class="mobile-gnb">
        <v-btn text @click="update(true)">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="side">
      <v-btn text class="top" @click="this.scrollTopMove">
        <v-icon>mdi-arrow-collapse-up</v-icon>
      </v-btn>
      <v-btn text class="system" @click="this.wrap">
        <label>무인매장<br><b>관리시스템</b></label>
      </v-btn>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    headState: Boolean,
  },
  methods:{
    update(value){
      this.$emit("child", value)
    },
    wrap() {
      window.open('http://www.coin-machine.com', '_blank');
    },
    scrollTopMove(){
      // const windowTop = document.querySelector('html')
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  font-family: "SCDream";
  height: 90px;
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
  z-index: 99;

  .logo {
    cursor: pointer;
    height: 45px;
    img {
      height: 100%;
    }
  }

  .gnb {
    .v-btn {
      margin-left: 30px;
      font-size:15px;
      font-weight:400;
      color: #fff;
      cursor: pointer;
      border-radius: 5px;
      overflow: hidden;
      padding: 0 5px;
    }

    .v-btn.active {
      color: #452ee9;
    }

    .mobile-gnb{display:none;}
  }

  .side{
    display:flex;
    flex-direction: column;
    position:fixed;
    bottom:20px;
    right:20px;

    .v-btn{
      width:80px;
      height:80px;
      background:#fff;
      border:1px solid #e2e2e2;
      box-shadow: 0 0 30px rgba(0,0,0,0.10);
      margin-top:10px;

      b{color:#452ee9}
    }

  }
}

.header.active {
  animation: reSizing 0.5s forwards;
  position: fixed;

  @keyframes reSizing {
    0% {
    }
    100% {
      height: 70px;
      background: #fff;
      color: #292929;
      border-bottom: 1px solid #e2e2e2;
    }
  }

  .logo {
    animation: logoReSizing 0.5s forwards;

    @keyframes logoReSizing {
      0% {
      }
      100% {
        height: 40px;
      }
    }
  }

  .v-btn {
    color: #292929;
  }
}

@media screen and (max-width:980px){
  .header{
    padding:0 15px;

    .gnb{
      .pc-gnb{display:none;}
      .mobile-gnb{
        display:block;

        .v-btn{
          min-height:50px;
          min-width:50px;
        }
      }
    }

    .side{display:none;}
  }
}

@media screen and (max-width:600px){

}
</style>
