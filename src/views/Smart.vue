<template>
  <SubLayout>
    <div class="smart">
      <div class="section section-01">
          <div class="inner">
              <v-row>
                  <v-col cols="12" md="6">
                    <dl class="title">
                        <dt>스마트폰 결제시스템</dt>
                        <dd>
                            <p>QR코드와 스마트폰을 이용하여 무인장비를 바로 결제 할 수 있습니다.</p>
                        </dd>
                        <dd class="btns">
                            <!-- https://play.google.com/store/apps/details?id=com.payot.poinplus -->
                            <v-btn text>
                                <img src="@/assets/img/google-down.png">
                            </v-btn>
                            <!-- https://apps.apple.com/kr/app/apple-store/id1470557543 -->
                            <v-btn text>
                                <img src="@/assets/img/app-store.png">
                            </v-btn>
                        </dd>
                    </dl>
                  </v-col>
                  <v-col cols="12" md="6">
                    <div class="product-img">
                        <img src="@/assets/img/poin-01.png">
                    </div>
                  </v-col>
              </v-row>
          </div>
      </div>

      <div class="section section-02">
          <div class="inner">
              <dl class="title">
                  <dt>카드없이! 현금없이! 스마트폰만 있다면 간편 결제!<br>스마트폰 결제시스템  포인플러스</dt>
                  <dd>
                      <p>포인플러스는 페이오티가 개발한 무인장비를 통해 전국 매장에서 간단하고 편리하게 스마트폰 결제가 이루어 질 수 있도록 도와줍니다. </p>  
                  </dd>
              </dl>

              <div class="middle-img">
                  <img src="@/assets/img/poin-02.png">
              </div>

              <v-row>
                  <v-col cols="12" md="3" sm="6">
                      <div class="item">
                          <div class="icon"><img src="@/assets/img/poin-icon-01.png"></div>
                          <div class="cont">
                              <label>포인트 시스템</label>
                              <span>회원가입 없이, 카드, 현금없이 스마트폰으로 전국 무인매장을 결제할 수 있는 스마트폰 결제</span>
                          </div>
                      </div>
                  </v-col>
                  <v-col cols="12" md="3" sm="6">
                      <div class="item">
                          <div class="icon"><img src="@/assets/img/poin-icon-02.png"></div>
                          <div class="cont">
                              <label>통합 결제</label>
                              <span>국내 모든 카드사 에서 인증받아 사용하는  Billing Key방식의 결제 서비스 지원</span>
                          </div>
                      </div>
                 </v-col>
                  <v-col cols="12" md="3" sm="6">
                      <div class="item">
                          <div class="icon"><img src="@/assets/img/poin-icon-03.png"></div>
                          <div class="cont">
                              <label>QR 결제</label>
                              <span>QR코드 인식 후 금액 선택만 하면 바로 결제완료가 되는 간편결제 지원</span>
                          </div>
                      </div>
                  </v-col>
                  <v-col cols="12" md="3" sm="6">
                      <div class="item">
                          <div class="icon"><img src="@/assets/img/poin-icon-04.png"></div>
                          <div class="cont">
                              <label>전국 사용</label>
                              <span>전국 매장에서 활용이 가능한 포인트가 적립되어 지속적으로 결제규모 확대 가능</span>
                          </div>
                      </div>
                    </v-col>
              </v-row>
          </div> 
      </div> <!-- section-02 -->

      <div class="section section-03">
          <div class="inner">
              <v-row>
                  <v-col cols="12" md="6">
                      <div class="product-img">
                          <img src="@/assets/img/poin-03.png">
                      </div>
                  </v-col>
                  <v-col cols="12" md="6">
                    <dl>
                      <dt>스마트폰 결제시스템, 포인플러스</dt>
                      <dd>
                          <p>페이오티 스마트폰 결제시스템을 이용하기 위한 전용 어플리케이션입니다. 아이폰 및 안드로이드에서 모두 사용할 수 있습니다. </p>
                      </dd>
                      <!-- <dd class="btns">
                          <v-btn text>
                            <img src="@/assets/img/google-down.png">
                          </v-btn>
                          <v-btn text>
                            <img src="@/assets/img/app-store.png">
                          </v-btn>
                      </dd> -->
                    </dl>
                  </v-col>
              </v-row>
          </div>
      </div>

      <div class="section section-04">
          <div class="inner">
              <v-row class="row">
                  <v-col cols="12" md="4" sm="4">
                      <dl class="pa-2">
                          <dt>
                              <img src="@/assets/img/poin-04.png">
                          </dt>
                          <dd>
                              <label>01</label>
                              <span>장비를 이용을 위한 QR코드 스캔</span>
                          </dd>
                      </dl>
                  </v-col>
                  <v-col cols="12" md="4" sm="4">
                      <dl class="pa-2">
                          <dt>
                              <img src="@/assets/img/poin-05.png">
                          </dt>
                          <dd>
                              <label>02</label>
                              <span>장비 및 상품 선택</span>
                          </dd>
                      </dl>
                  </v-col>
                  <v-col cols="12" md="4" sm="4">
                      <dl class="pa-2">
                          <dt>
                              <img src="@/assets/img/poin-06.png">
                          </dt>
                          <dd>
                              <label>03</label>
                              <span>등록된 카드로 결제완료</span>
                          </dd>
                      </dl>
                  </v-col>
              </v-row>
          </div>
      </div>

      <div class="section section-05">
          <div class="inner">
              <dl class="title">
                  <dt>동전노래방, 셀프빨래방, 무인세차장 등 무인매장 어디서나 스마트한 결제를 위한 선택!</dt>
                  <dd>QR코드를 이용하여 동전노래방, 셀프빨래방, 세차장 등 다양한 곳에서 스마트폰 카드결제를 운영할 수 있습니다.</dd>
              </dl>

              <div class="item">
                <div class="row">
                    <v-col cols="12" md="7">
                        <div class="product-img">
                            <img src="@/assets/img/smart00.jpg">
                        </div>
                    </v-col>
                    <v-col cols="12" md="5">
                        <dl>
                            <dt>학교기숙사</dt>
                            <dd>
                                <span></span>
                                <p>동전으로만 결제하던 기숙사 세탁실을 스마트하게 전환할 수 있습니다. 포인플러스를 통해 동전없이 등록된 카드를 통해
                                  세탁기를 결제할 수 있습니다.
                                </p>
                            </dd>
                        </dl>
                    </v-col>
                </div>
              </div>

              <div class="item">
                <v-row>
                    <v-col cols="12" md="7">
                        <div class="product-img">
                            <img src="@/assets/img/smart01.jpg">
                        </div>
                    </v-col>
                    <v-col cols="12" md="5">
                        <dl>
                            <dt>동전노래방</dt>
                            <dd>
                                <span></span>
                                <p>동전이 필요없는 스마트폰 결제시스템! 페이오티의 스마트폰 결제시스템으로 원하는 금액만큼만 충전하고 환전과 동전걸림 걱정없이 노래방 등 오락시설을 이용하실 수 있습니다.</p>
                            </dd>
                        </dl>
                    </v-col>
                </v-row>
              </div>

              <div class="item">
                <div class="row">
                    <v-col cols="12" md="7">
                        <div class="product-img">
                            <img src="@/assets/img/smart02.jpg">
                        </div>
                    </v-col>
                    <v-col cols="12" md="5">
                        <dl>
                            <dt>셀프빨래방</dt>
                            <dd>
                                <span></span>
                                <p>스마트한 생활을 위한 페이오티의 간편 결제!  QR 코드를 이용한 간편 결제로 기다릴 필요 없이 쉽고 빠르게 결제가 가능합니다.</p>
                            </dd>
                        </dl>
                    </v-col>
                </div>
              </div>

              <div class="item">
                <div class="row">
                    <v-col cols="12" md="7">
                        <div class="product-img">
                            <img src="@/assets/img/smart03.jpg">
                        </div>
                    </v-col>
                    <v-col cols="12" md="5">
                        <dl>
                            <dt>무인세차장</dt>
                            <dd>
                                <span></span>
                                <p>편리한 무인매장 운영! 페이오티는 자체 개발한 장치를 통해 장비 교체 없이 기존 장비로도 스마트폰 결제가 가능합니다.  점주와 고객 모두를 위한 스마트한 결제시스템입니다.</p>
                            </dd>
                        </dl>
                    </v-col>
                </div>
              </div>
          </div>
      </div>
      <div class="section section-06">
          <div class="inner">
              <dl>
                  <dt>무인장비 결제를 위한 전용 앱 포인플러스</dt>
                  <dd>
                      <img src="@/assets/img/poin-07.png">
                  </dd>
              </dl>
          </div>
      </div>
    </div>
  </SubLayout>
</template>

<script>
import SubLayout from '@/layout/subLayout.vue';

export default {
  components:{
    SubLayout,
  }
}
</script>

<style lang="scss" scoped>

.smart{

  .section-01{
    display:flex;
		flex-direction: column;
    justify-content: center;
    height:500px;
    background: rgb(53,80,255);
    background: linear-gradient(145deg, rgba(53,80,255,1) 0%, rgba(111,32,255,1) 100%);
    margin:30px;
    border-radius:10px;

    dl.title {
      padding:30px;
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;

      dt {
        font-size: 42px;
        line-height:52px;
        font-weight: 500;
        word-break: keep-all;
        color: #fff;
      }
      dd {
        font-size: 24px;
        line-height:32px;
        font-weight:400;
        margin-top: 15px;
        word-break: keep-all;
        color: #fff;
        margin-bottom: 0px;
      }

      dd.btns{
        display:flex;
        align-items: center;

        .v-btn{
          background:#fff;
          padding:15px;
          min-height:50px;
          min-width:160px;
          margin-right:10px;

          img{width:100%;}
        }
      }
    }

    .product-img {
      position: relative;
      text-align: right;

      img {
        width: 80%;
        z-index: 2;
      }
    }
  }

  .section-02{
    padding: 70px 0;
    
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

    .middle-img{
      border-radius:10px;
      overflow:hidden;
      height:auto;

      img{width:100%;}
    }

    .row{
      margin-top:40px;

      .item{
        display: flex;
        flex-direction: column;
        border:1px solid #e2e2e2;
        text-align: center;
        padding: 20px;
        min-height: 380px;
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
            color: #3D3782;
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
  }

  .section-03{
    padding:70px 0;
    background:#EEECF9;

    .product-img{
      img{width:90%;}
    }
    
    dl{
      display:flex;
      flex-direction: column;
      justify-content: center;
      height:100%;

      dt{
        font-size:26px;
      }
      dd{
        font-size:16px;
        margin-top:15px;
        color:#888;
      }
    }

    .btns{
      
      margin-top:30px;

      .v-btn{
        background:#fff;
        margin-right:10px;
        height:50px;
        border-radius:5px;
      }

      .v-btn:last-child{
        margin-right:0px;
      }
    }
  }

  .section-04{
    padding:70px 0;

    dl{
      text-align:center;
      
      dt{
        border:1px solid #e2e2e2;
        img{width:100%;}
      }

      dd{
        margin-top:20px;
        text-align:center;

        label{
          font-size:16px;
          font-weight:600;
          margin-right:10px;
        }
        span{
          font-size:16px;
        }
      }
    }

    
  }

  .section-05{
    padding:70px 0;
    background:#EEECF9;

    dl.title{margin-bottom:40px;}

    .item{
      background:#fff;
      margin-bottom:30px;
      padding:20px;
      border-radius:10px;

      dl{
        dt{
          font-size:24px;
        }
        dd{
          margin-top:10px;
          color:#888;
          font-size:16px;
        }
      }      
      
      .product-img{
        border-radius:10px;
        overflow:hidden;
        img{width:100%;}
      }
    }
  }

  .section-06{
    padding:70px 0;

    dl{
      dt{
        font-size:24px;
      }
      dd{
        margin-top:30px;
        img{width:100%;}
      }
    }
  }
}

@media screen and(max-width:960px){
  .smart{
    .section-01{
      height:auto;
      margin:10px;
      padding:10px;

      dl.title {
        padding:0px;        
        dt {
          font-size: 32px;
          line-height:40px;
        }
        dd {
          margin-top:10px;
          font-size: 16px;
          line-height:24px;
        }
      }
      .product-img{
        text-align:center;
      }
    }

    .section-02{
      .row{
        .item{
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
}

@media screen and(max-width:600px){
  .smart{
    .section-01{
      dl.title{
        dd.btns{
          flex-direction: column;
          .v-btn{
            width:100%;
            margin-bottom:10px;
            img{width:auto;}
          }
        }
      }
    }
    .section-02{
      dl.title{
        dt{
          font-size:18px;
          line-height:26px;
        }
        dd{
          font-size:14px;
          line-height:21px
        }
      }
      .row{
        .item{
          flex-direction: row;
          min-height:auto;
        }
      }
    }
  }
}

</style>