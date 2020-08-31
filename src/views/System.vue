<template>
  <SubLayout>
    <div class="system">
        <div class="section section-01">
          <div class="inner">
          <v-row>
            <v-col cols="12" md="6">
              <dl class="title">
                <dt>무인매장 관리시스템</dt>
                <dd>
                  무인매장 관리시스템은 매장에서 발생하는 모든 매출 및 사용량
                  등을 관리할 수 있는 스마트한 시스템입니다.
                </dd>
              </dl>
            </v-col>
            <v-col cols="12" md="6">
              <div class="product-img">
                <img src="@/assets/img/system.png" />
              </div>
            </v-col>
          </v-row>
          </div>
        </div>

        <div class="section section-02">
          <div class="inner">
          <dl class="title">
            <dt>
              매출 관리부터 이벤트&프로모션까지<br />스마트한 관리가 가능한
              무인매장 관리시스템!
            </dt>
            <dd>
              페이오티의 차별화된 데이터로 무인매장의 스마트한 관리가
              가능합니다. <br />이벤트&프로모션을 진행하여 단골고객을
              확보해보세요!
            </dd>
          </dl>

          <v-row>
            <v-col cols="12" md="3" sm="6">
              <div class="item">
                <div class="icon">
                  <img src="@/assets/img/p01-icon01.png" />
                </div>
                <div class="cont">
                  <label>매출관리</label>
                  <span>
                    창업비용부터 손익분기점 계산까지 매장의 모든 매출과 비용을
                    계산하여 월별 실제 수익을 제공
                  </span>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <div class="item">
                <div class="icon">
                  <img src="@/assets/img/p01-icon02.png" />
                </div>
                <div class="cont">
                  <label>원격관리</label>
                  <span>
                    무인장비와 무선통신을 이용한 설치 간소화를 통한 비용 절감 및
                    관리시간 단축
                  </span>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <div class="item">
                <div class="icon">
                  <img src="@/assets/img/p01-icon03.png" />
                </div>
                <div class="cont">
                  <label>실시간매출</label>
                  <span>
                    매장에서 발생되는 모든 매출을 실시간으로 확인. 매출이 가장
                    많이 발생하는 장비, 시간을 파악하여 마케팅 활용 가능
                  </span>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <div class="item">
                <div class="icon">
                  <img src="@/assets/img/p01-icon04.png" />
                </div>
                <div class="cont">
                  <label>이벤트</label>
                  <span>
                    포인트적립 기능을 통해 회원관리 및 이벤트 문자발송 서비스가
                    가능하며, 장비사용 시작, 종료 문자 알림 서비스 가능
                  </span>
                </div>
              </div>
            </v-col>
          </v-row>
          </div>  <!-- inner -->
        </div>
        <!-- section-02 -->

      <div class="section section-03">
        <div class="inner">
          <dl>
            <dt>무인매장 관리 시스템</dt>
            <dd>
              <img src="@/assets/img/system-01.png" />
            </dd>
          </dl>
        </div>
      </div>
      <!-- section-03 -->

      <div class="section section-04">
        <div class="inner">
          <div class="youtube">
            <iframe
              src="https://www.youtube.com/embed/k9O5ArShASY"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <!-- section-04 -->

      <div class="section section-05 section-slide">
        <div class="inner">
          <dl class="title">
            <dt>매출관리</dt>
            <dd>
              매장의 모든 매출 현황을 한눈에 확인하세요
            </dd>
          </dl>

          <div class="slide-view">
            <v-carousel
              cycle
              height="100%"
              show-arrows-on-hover
              hide-delimiters
              :show-arrows="false"
              :value="slide01"
              @change="slide01 = $event"
            >
              <v-carousel-item>
                <div class="slide-item">
                  <img src="@/assets/img/system-sb01-01.png" />
                </div>
              </v-carousel-item>
              <v-carousel-item>
                <div class="slide-item">
                  <img src="@/assets/img/system-sb01-02.png" />
                </div>
              </v-carousel-item>
              <v-carousel-item>
                <div class="slide-item">
                  <img src="@/assets/img/system-sb01-03.png" />
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>

          <div class="slide-btns">
            <v-btn
              v-for="(label, index) in [
                '통합매출관리',
                '매출데이터 제공',
                '통합데이터 저장',
              ]"
              :key="index"
              text
              @click="slide01 = index"
              :class="{ active: slide01 === index }"
            >
              {{ label }}
            </v-btn>
          </div>

          <div class="slide-text">
            <div class="text-item" v-if="slide01 === 0">
              <span>장비에 투입되는 현금까지 정확히 카운팅!</span>
              <span>매장에서 발생하는 매출을 정확하게 집계</span>
              <span>PC / 모바일에서 실시간으로 확인이 가능</span>
            </div>
            <div class="text-item" v-if="slide01 === 1">
              <span>일간/주간/월간 매출 사용량 데이터 제공</span>
              <span>무인장비 사용량에 관한 통계치 제공</span>
              <span>무인장비 매출발생에 대한 통계치 제공</span>
            </div>
            <div class="text-item" v-if="slide01 === 2">
              <span>회원목록 / 매출사용량 등 데이터 저장</span>
              <span>모든 데이터를 엑셀로 다운 가능</span>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-06 section-slide">
        <div class="inner">
          <dl class="title">
            <dt>원격관리</dt>
            <dd>
                페이오티만의 기술력! 복잡한 설치없이 와이파이로 원격제어가 가능합니다.
            </dd>
          </dl>
          <div class="slide-view">
            <v-carousel
              cycle
              height="100%"
              show-arrows-on-hover
              hide-delimiters
              :show-arrows="false"
              :value="slide02"
              @change="slide02 = $event"
            >
              <v-carousel-item>
                <div class="slide-item">
                  <img src="@/assets/img/system-sb02-01.png" />
                </div>
              </v-carousel-item>
              <v-carousel-item>
                <div class="slide-item">
                  <img src="@/assets/img/system-sb02-02.png" />
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>

          <div class="slide-btns">
            <v-btn
              v-for="(label, index) in [
                '원격 금액투입',
                '실시간 사용추적',
              ]"
              :key="index"
              text
              @click="slide02 = index"
              :class="{ active: slide02 === index }"
            >
              {{ label }}
            </v-btn>
          </div>

          <div class="slide-text">
            <div class="text-item" v-if="slide02 === 0">
              <span>고객 컴플레인 1순위 돈이 먹는 상황을 해결</span>
              <span>PC / 모바일에서 원격으로 장비에 금액투입이 가능!</span>
              <span>어디서든 장비에 금액을 투입 가능</span>
            </div>
            <div class="text-item" v-if="slide02 === 1">
              <span>장비/키오스크 사용기록 추적을 통해 고객 컴플레인에 대응</span>
            </div>
          </div>
        </div> <!-- inner -->
      </div>
      <!-- section-06 -->

      <div class="section section-07 section-slide">
        <div class="inner">
          <dl class="title">
            <dt>회원관리</dt>
            <dd>
              간편한 고객관리로 단골 고객을 확보해보세요
            </dd>
          </dl>

          <div class="slide-view">
            <v-carousel
              cycle
              height="100%"
              show-arrows-on-hover
              hide-delimiters
              :show-arrows="false"
              :value="slide03"
              @change="slide03 = $event"
            >
              <v-carousel-item>
                <div class="slide-item">
                  <img src="@/assets/img/system-sb03-01.png" />
                </div>
              </v-carousel-item>
              <v-carousel-item>
                <div class="slide-item">
                  <img src="@/assets/img/system-sb03-02.png" />
                </div>
              </v-carousel-item>
               <v-carousel-item>
                <div class="slide-item">
                  <img src="@/assets/img/system-sb03-03.png" />
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>

          <div class="slide-btns">
            <v-btn
              v-for="(label, index) in [
                '포인트지급/차감',
                '메세지기능','비밀번호기능'
              ]"
              :key="index"
              text
              @click="slide03 = index"
              :class="{ active: slide03 === index }"
            >
              {{ label }}
            </v-btn>
          </div>

          <div class="slide-text">
            <div class="text-item" v-if="slide03 === 0">
              <span>특정 회원에게 포인트 지급 가능</span>
              <span>탈퇴회원의 포인트 차감 기능</span>
            </div>
            <div class="text-item" v-if="slide03 === 1">
              <span>회원에게 카카오톡 & 문자발송 기능 제공</span>
              <span>매장 회원에게 다양한 이벤트 소식 제공</span>
            </div>
            <div class="text-item" v-if="slide03 === 2">
              <span>포인트사용 시 비밀번호 사용 가능</span>
              <span>회원 비밀번호 활성 / 비활성 모드 모두 가능</span>
            </div>
          </div>

        </div> <!-- inner -->
      </div>
      <!-- section-07 -->

      <div class="section section-08 section-slide">
        <div class="inner">
          <dl class="title">
            <dt>프로모션 관리</dt>
            <dd>
              다양한 마케팅으로 고객의 만족도를 높여보세요
            </dd>
          </dl>

          <div class="slide-view">
            <v-carousel
              cycle
              height="100%"
              show-arrows-on-hover
              hide-delimiters
              :show-arrows="false"
              :value="slide04"
              @change="slide04 = $event"
            >
              <v-carousel-item>
                <div class="slide-item">
                  <img src="@/assets/img/system-sb04-01.png" />
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>

          <div class="slide-btns">
            <v-btn
              v-for="(label, index) in [
                '포로모션&이벤트',
              ]"
              :key="index"
              text
              @click="slide04 = index"
              :class="{ active: slide04 === index }"
            >
              {{ label }}
            </v-btn>
          </div>

          <div class="slide-text">
            <div class="text-item" v-if="slide04 === 0">
              <span>충전 금액별 적립률 차등지급 기능 제공</span>
                <span>요일별 적립률 차등지급 기능 제공</span>
            </div>
          </div>
        </div>
      </div>
      <!-- section-08 -->

      <div class="section section-09">
        <div class="inner">
          <v-row>
            <v-col md="6">
              <div class="product-img">
                <img src="@/assets/img/system-mobile.png" />
              </div>
            </v-col>
            <v-col md="6">
              <label>모바일관리</label>
              <dl>
                <dt>
                  모바일 관리도 빠르고 간편하게 페이오티 관리시스템과
                  함께하세요.
                </dt>
                <dd>
                  <span></span>
                  <p>
                    PC에서 하던 무인매장관리시스템을 그대로 모바일에서
                    만나보세요. 매출, 장비관리, 원격제어까지 전문 관리를 손쉽게
                    관리할 수 있습니다.
                  </p>
                </dd>
              </dl>
              <div class="product-img02">
                <img src="@/assets/img/system-mobile-02.png" />
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </SubLayout>
</template>

<script>
import SubLayout from "@/layout/subLayout.vue";

export default {
  components: {
    SubLayout,
  },
  data() {
    return {
      slide01: 0,
      slide02: 0,
      slide03: 0,
      slide04: 0,
    };
  },
};
</script>

<style lang="scss" scoped>

.system {

  .section-01 {
    display:flex;
		flex-direction: column;
    justify-content: center;
    height:500px;
    background: rgb(250,185,112);
    background: linear-gradient(126deg, rgba(250,185,112,1) 0%, rgba(235,38,113,1) 100%);
    margin:30px;
    border-radius:10px;
    
    dl.title {
      padding:30px;
      display:flex;
			height:100%;
			flex-direction: column;
      justify-content: center;
      
      dt {
        font-size: 42px;
        line-height:52px;
        font-weight: 500;
        word-break: keep-all;
        color:#fff;
      }
      dd {
        font-size: 24px;
        line-height:32px;
        margin-top: 15px;
        word-break: keep-all;
        color: #fff;
        margin-bottom: 0px;
      }
    }

    .product-img {
      position: relative;
      text-align: right;

      img {
        width: 90%;
        z-index:2
      }
    }
  }

  .section-02 {
    padding:70px 0;

    dl.title {
      margin-bottom: 50px;
      dt {
        font-size: 24px;
        line-height:36px;
        font-weight: 500;
        word-break: keep-all;
      }
      dd {
        font-size: 16px;
        margin-top: 20px;
        color: #888;
        word-break: keep-all;
      }
    }

    .item {
      display: flex;
      flex-direction: column;
      border:1px solid #e2e2e2;
      text-align: center;
      padding: 20px;
      min-height: 400px;
      border-radius: 10px;
      background: #fff;
      

      .icon {
        height:150px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;;

        img {
          height: 100px
        }
      }

      .cont {
        display: flex;
        flex-direction: column;

        label {
          font-size: 20px;
          color: #d93e97;
          margin-top: 40px;
        }
        span {
          font-size: 14px;
          color: #888;
          margin-top: 20px;
          word-break: keep-all;
          line-height: 24px;
        }
      }
    }
  }

  .section-03 {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f2f2f2;
    text-align: center;
    padding: 70px 0;

    dl {
      dt {
        font-size: 26px;
        letter-spacing: 10px;
      }
      dd {
        margin-top: 50px;
        img{width:100%;}
      }
    }
  }

  .section-04 {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:70px 0;
    background:#292929;

    .inner{
      text-align:center;
    }

    .youtube {
      position:relative;
      padding-bottom:56.25%;
      overflow:hidden;

      iframe{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
      }
    }
  }

  .section-05{
    background: #f2f2f2;
  }

  .section-06{
    background:#fff;
  }

  .section-07{
    background: #f2f2f2;
  }

  .section-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align:center;
    padding: 70px 0;

    dl.title {
      text-align: center;
      width: 100%;
      margin-bottom:60px;

      dt {
        font-size: 18px;
        color: #d93e97;
      }
      dd {
        font-size: 26px;
        font-weight: 500;
        margin-top: 15px;
      }
    }

    .slide-btns {
      display:flex;
      justify-content: center;
      align-items: center;
      background:#fff;
      border:1px solid #e2e2e2;
      border-radius:5px;
      margin-top:30px;

      .v-btn {
        height:40px;
        font-size:16px;
        color:#888;
        border-radius:5px;
      }

      .v-btn.active {
        background: #292929;
        color: #fff;
      }
    }

    .slide-text{
      margin-top:20px;

      .text-item{
        display:flex;
        flex-direction: column;
        justify-content: center;;
        align-items: center;
        span{
          margin:5px 0;
          font-size:16px;
        }
      }
    }

    .slide-view {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .slide-item {
        text-align: center;
        img{width:80%;}
        p {
          margin-top: 30px;
          span {
            display: block;
            color: #292929;
            margin-bottom: 10px;
          }
          span:last-child {
            margin-bottom: 0px;
          }
        }
      }
    }
  }

  .section-09{
    background:#f2f2f2;
    padding:70px 0;

    .col{
      display:flex;
      flex-direction: column;
      justify-content: center;
    }

    label{
      color:#d93e97;
      font-size:18px;
    }

    dl{
      margin-top:20px;
      dt{font-size:26px;}
      dd{
        margin-top:20px;
        font-size:16px;
        color:#888;
      }
    }

    .product-img{
      text-align:center;
      img{height:600px;}
    }
    .product-img02{
      margin-top:40px;
      img{width:100%;}
    }
  }
}

@media screen and(max-width:1280px){
  
}

@media screen and(max-width:960px){
  .system{
    .section-01{
      height:auto;
      padding:10px;
      margin:10px;

      dl.title {        
        padding:0px;
        
        dt {
          font-size: 32px;
          line-height:40px;
          font-weight: 500;
          word-break: keep-all;
          color:#fff;
        }
        dd {
          margin-top:10px;
          font-size: 16px;
          line-height:24px;
        }
      }

      .product-img {
        margin-top:50px;
        img {
          width: 100%;
        }
      }
    }
    .section-02{
      .item{
        min-height:auto;
        flex-direction: row;
        min-height:180px;
        .icon{
          justify-content: flex-start;
          width:80px;
          height:auto;
          margin-right:30px;

          img{height:60px;margin-top:10px;}
        }
        .cont{
          flex:1;
          text-align:left;

          label{margin-top:0px;}
          span{margin-top:10px;}

        }
      }
    }
  }
}
@media screen and(max-width:600px){
  .system{
    .section-02{
      dl.title{
        dt{
          font-size: 20px;
          line-height:30px;
        }
        dd{
          font-size:14px;
          line-height:21px;
        }
      }
      .item{
        min-height:auto;
      }
    }
    .section-slide{

      dl.title{
        dt{font-size:16px;}
        dd{font-size:20px;margin-top:10px;}
      }
      .slide-view{
        .slide-item {
          img{width:100%;}
        }
      }
      .slide-btns{
        flex-direction: column;
        .v-btn{
          width:100%;
          font-size:14px;
          border-radius:0px;
        }
      }
    }
  }
}

</style>
