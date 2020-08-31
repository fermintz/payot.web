<template>
  <div class="footer">
    <div class="logo">
      <img src="@/assets/img/logo_w.png">
    </div>
    <div class="footer-btns">
      <v-btn text>개인정보 취급방침</v-btn>
      <v-btn text @click="systemLink">무인매장 관리시스템</v-btn>
    </div>
    <div class="footer-info">
      <div class="inner">
        <div class="items">
          <div class="item">
            <span>(주)페이오티</span>
          </div>
          <div class="item">
            <label>주소</label>
            <span>부산광역시 금정구 부산대학로 63번길 2, 과학기술연구동 201호</span>
          </div>
        </div>
        <div class="item">
          <label>사업자등록번호</label>
          <span>599-81-00659</span>
        </div>
        <div class="item">
          <label>이메일</label>
          <span>cs.payot@gmail.com</span>
        </div>
        <div class="item">
          <label>전화</label>
          <span>070-7807-6857</span>
        </div>
        <div class="item">
          <label>팩스</label>
          <span>0504-433-6857</span>
        </div>
        <div class="copyright">
          COPYRIGHT (C) PAYOT ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   methods:{
     systemLink(){
       window.location.href = 'http://www.coin-machine.com/login'
     }
   }
}
</script>
<style lang="scss" scoped>

.footer{
  display:flex;
  flex-direction: column;
  align-items: center;
  padding:80px 30px;
  background:#191919;

  .logo{
    height:50px;
    img{height:100%;}
  }
  .footer-btns{
    margin:30px 0;
    .v-btn{
      color:#fff;
      font-weight:400;
      background:#000;
      height:28px;
      margin:0 5px;
    }
  }
  
  .footer-info{
    text-align:Center;

    .item{
      display:inline-block;
      margin-right:10px;
      label{margin-right:5px;font-size:12px;color:rgba(255,255,255,0.5)}
      span{color:rgba(255,255,255,0.8);font-size:13px;letter-spacing:0px;}
    }

    .item::after{
      content:'|';
      color:rgba(255,255,255,0.1);
      margin-left:10px;
    }
  }

  .copyright{
    margin-top:15px;
    color:#888;
    font-size:12px;
    letter-spacing: 0px;
  }
}

@media screen and(max-width:600px){
 .footer{
   .footer-info{
    .item{
      label{font-size:11px;}
      span{font-size:12px;}
    }
    .item::after{display:none;}
   }
 }
}

</style>