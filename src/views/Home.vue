<template>
  <div class="wrap">
    <Header :headState="headState" @child="drawerHandle"/>
    <Drawer ref="drawer"/>
    <div class="home">
      <div class="visual">
        <v-carousel
          cycle
          height="auto"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          show-arrows-on-hover
        >
          <v-carousel-item>
            <v-img src="@/assets/img/slide03.png" />
          </v-carousel-item>
          <v-carousel-item>
            <v-img src="@/assets/img/slide02.png" />
          </v-carousel-item>
          <v-carousel-item>
            <v-img src="@/assets/img/slide01.png" />
          </v-carousel-item>
        </v-carousel>
      </div>

      <div class="mobile-visual">
        <v-carousel
          cycle
          :height="visualHeight"
          hide-delimiters
          show-arrows-on-hover
        >
          <v-carousel-item v-ripple @click="$router.push('/product/kiosk')">
            <div class="slide-item fill-height">
              <div class="slide-text">
                <span class="title01">
                  페이오티 키오스크
                </span>                
                <span class="title02">
                  무인장비 중앙결제 시스템 KIOT
                </span>                
                <span class="title03">
                  무인화시대, 페이오티의 앞선 기술!
                  결제부터 회원관리까지 통합서비스 제공
                </span>                
              </div>
              <div class="slide-img">
                <img src="@/assets/img/mobile-sb01.png"/>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item v-ripple @click="$router.push('/product/system')">
             <div class="slide-item fill-height">
                <div class="slide-text">
                <span class="title01">
                  무인매장 관리시스템
                </span>                
                <span class="title02">
                  매장관리 통합솔루션
                </span>                
                <span class="title03">
                  매출관리부터 이벤트&프로모션까지<br>스마트한 매장관리를 경험해보세요!
                </span>                
              </div>
              <div class="slide-img">
                <img src="@/assets/img/mobile-sb02.png"/>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item v-ripple @click="$router.push('/product/smart')">
             <div class="slide-item fill-height">
              <div class="slide-text">
                <span class="title01">
                  POIN PLUS
                </span>                
                <span class="title02">
                  스마트폰 결제시스템
                </span>                
                <span class="title03">
                  스캔한번으로 간편결제!<br>
                  비대면 무인장비 결제 플랫폼
                </span>                
              </div>
              <div class="slide-img">
                <img src="@/assets/img/mobile-sb03.png"/>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>

      

      <div class="section main-product">
        <div class="section-title">
          <span></span>
          <dl>
            <dt>페이오티에서 개발한 제품을 만나보세요</dt>
            <dd>
              ㈜페이오티는 매우 다양한 무인장비와 호환이 되는 결제시스템,
              관리시스템을 개발하고있습니다
            </dd>
            <dd>
              스마트폰결제, 중앙카드결제시스템, 전산관리시스템을 통해 무인장비를
              보다 스마트하고 경쟁력 있게 운용할 수 있습니다
            </dd>
          </dl>
        </div>
        <div class="inner">
          <v-row>
            <v-col cols="12" md="4" sm="6">
              <div class="product-item">
                <div class="item-img">
                  <img src="@/assets/img/main-system.png" />
                </div>
                <div class="item-info">
                  <div class="makeUp">
                    <div class="dot" />
                    <div class="divider" />
                  </div>
                  <dl class="item-title">
                    <dt>무인매장 관리시스템</dt>
                    <dd>
                      무인장비(동전)의 매출을 기록합니다 직관적인 매출통계와
                      장비원격제어 등 다양한 기능을 제공합니다
                    </dd>
                  </dl>
                  <div class="item-bottom">
                    <v-btn text>자세히보기</v-btn>
                  </div>
                </div>
              </div>

            </v-col>
            <v-col cols="12" md="4" sm="6">
              <div class="product-item">
                <div class="item-img">
                  <img src="@/assets/img/main-kiosk.png" />
                </div>
                <div class="item-info">
                  <div class="makeUp">
                    <div class="dot" />
                    <div class="divider" />
                  </div>
                  <dl class="item-title">
                    <dt>포인트충전 키오스크</dt>
                    <dd>
                      현금결제, 카드결제, 포인트적립, 회원관리까지 다양한
                      서비스를 제공하는 무인장비 중앙결제 시스템
                    </dd>
                  </dl>
                  <div class="item-bottom">
                    <v-btn text>자세히보기</v-btn>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <div class="product-item">
                <div class="item-img">
                  <img src="@/assets/img/main-smart.png" />
                </div>
                <div class="item-info">
                  <div class="makeUp">
                    <div class="dot" />
                    <div class="divider" />
                  </div>
                  <dl class="item-title">
                    <dt>스마트폰 결제시스템</dt>
                    <dd>
                      동전을 사용하는 장비에 특수장치를 설치해 QR코드와
                      스마트폰을 이용하여 결제할 수 있습니다
                    </dd>
                  </dl>
                  <div class="item-bottom">
                    <v-btn text @click="$router.push('/product/smart')"
                      >자세히보기</v-btn
                    >
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
      

      <!-- main-product -->
      <div class="section main-movie">
        <div class="inner">
          <div class="section-title">
            <dl>
              <dt>Movie</dt>
              <dd>페이오티의 기술력을 동영상으로 확인해보세요</dd>
            </dl>
          </div>
        </div>

        <div class="inner">
          <div class="video-list">
            <v-row>
              <v-col cols="12" md="5" sm="6">
                <div class="video-item">
                  <span class="thumbnail">
                    <iframe
                      src="https://www.youtube.com/embed/UVXvaTSopWE"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </span>
                  <span class="item-title"
                    >셀프빨래방 카드결제 키오스크 (페이오티)</span
                  >
                  <span class="description"
                    >페이오티 키오스크의 사용방법을 동영상으로<br />
                    확인활 수 있습니다</span
                  >
                </div>
              </v-col>
              <v-col cols="12" md="5" sm="6">
                <div class="video-item">
                  <span class="thumbnail">
                    <iframe
                      src="https://www.youtube.com/embed/k9O5ArShASY"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </span>
                  <span class="item-title">페이오티 원격금액투입</span>
                  <span class="description"
                    >원격제어기능을 이용하여 장비에 금액을 투입합니다</span
                  >
                </div>
              </v-col>
            </v-row>
          </div>
          <div class="list-bg" />
          <div class="list-back-bg" />
        </div>
      </div>
      <!-- main-movie -->

      <div class="section main-review">
        <div class="inner">
          <div class="section-title">
            <dl>
              <dt>Review</dt>
              <dd>페이오티 제품의 설치사례들을 만나보세요</dd>
            </dl>
          </div>

          <div class="gallery">
            <v-row>
              <v-col xl="6" md="6">
                <span class="img-box first" v-ripple>
                  <img src="/contents/ex14.jpg" />
                </span>
              </v-col>
              <v-col xl="6" md="6">
                <div class="img-group">
                  <div class="img-row">
                    <span class="img-box" v-ripple>
                      <img src="/contents/ex15.jpg" />
                    </span>
                    <span class="img-box" v-ripple>
                      <img src="/contents/ex16.jpg" />
                    </span>
                    <span class="img-box" v-ripple>
                      <img src="/contents/ex04.jpg" />
                    </span>
                  </div>
                  <div class="img-row">
                    <span class="img-box" v-ripple>
                      <img src="/contents/ex08.jpg" />
                    </span>
                    <span class="img-box" v-ripple>
                      <img src="/contents/ex11.jpg" />
                    </span>
                    <span class="img-box btn">
                      <v-btn text @click="$router.push('/review')"
                        >더보기</v-btn
                      >
                    </span>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
      <!-- main-review -->

      <div class="media section">
        <div class="inner">
          <v-row>
            <v-col cols="12" md="6" sm="12">
              <div class="news media-item">
                <h3>News</h3>
                <ul>
                  <li>
                    <a href="http://www.nbntv.co.kr/news/articleView.html?idxno=901512" target="_new">
                      <div class="board-title" >
                        언택트(비대면) 시대, 대학 기숙사 공동 세탁실도 페이오티 관리시스템으로 스...
                      </div>
                      <div class="board-info">
                        <span class="company">내외경제TV</span>
                        <span class="date">2020.08.21</span>
                      </div>

                      <div class="board-description">
                        최근 코로나19 여파로 비대면 거래에 대한 관심이 높아지면서 무인관리시스템이 주목을 받고 있다. 대규모 인원이 생활하는 대학 기숙사에서도 무인화 시대에 발맞춰 무인택배함, 무인편의점, 무인 경비시스템 등을 빠르게 도입하고 있다. 하지만 대학 내 무인 시설이
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.e2news.com/news/articleView.html?idxno=224453" target="_new">
                      <div class="board-title" >
                        빨래방 카드결제·관리 시스템 개발 전문기업 페이오티, 셀프빨래방·세차장에...
                      </div>
                      <div class="board-info">
                        <span class="company">이투뉴스</span>
                        <span class="date">2020.07.21</span>
                      </div>

                      <div class="board-description">
                        ㈜페이오티는 셀프빨래방, 셀프세차장 관리 및 결제시스템 전문기업으로 특성화된 무인산업에 맞는 기술보유하고 있고 이러한 기술을 상품화하여 2019년부터 납품을 시작하여 현재 약 150여개의 무인화매장을 관리하고...
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <div class="blog media-item">
                <h3>Blog</h3>
                <ul>
                  <li v-for="(post, index) in blogPosts" :key="index">
                    <a :href="post.url" target="_new">
                      <div class="board-img">
                        <img :src="post.thumbnail" />
                      </div>
                      <div class="board-cont">
                        <div class="board-title" v-html="post.title" />
                        <div class="board-info">
                          <span class="company">{{post.blogname}}</span>
                          <span class="date">{{post.datetime.substring(0,10)}}</span>
                        </div>
                        <div class="board-description" v-html="post.contents.substring(0,60)" />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
      <!-- media -->

      <div class="customer section">
        <div class="inner">
          <v-row>
            <v-col cols="12" md="6" sm="12">
              <div class="section-title">
                <dl>
                  <dt>Customer</dt>
                </dl>
              </div>
              <div class="cs-number">
                070.7807.6857
              </div>
              <div class="cs-info">
                <label>운영시간</label>
                <span>오전 10시 ~ 오후 5시까지</span>
              </div>
              <div class="cs-info">
                <label>메일문의</label>
                <span>cs.payot@gmail.com</span>
              </div>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <v-row class="download">
                <v-col cols="12" md="6" sm="6">
                  <div class="item">
                    <img src="@/assets/img/catalog.png" />
                    <label>페이오티 브로슈어</label>
                    <v-btn text @click="downloadFile('catalog')">Download</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="6" sm="6">
                  <div class="item">
                    <img src="@/assets/img/guide.png" />
                    <label>페이오티 사용자메뉴얼</label>
                    <v-btn text @click="downloadFile('guide')">Download</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </div> <!-- customer -->
    </div> <!-- home -->
    <Footer />
  </div>
  <!-- wrap -->
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import Drawer from '@/components/drawer.vue';
import { daumSearch } from "@/utils/KakaoSearch";

let event;
let event2;
export default {
  name: "Home",

  components: {
    Header,
    Footer,
    Drawer,
  },

  data() {
    return {
      headState: true,
      isActive: false,
      blogPosts: [],
      webPosts:[],
      visualHeight:null,
    }
  },

  mounted() {
    event = window.addEventListener("scroll", this.headScroll);
    event2 = window.addEventListener('resize', this.screenHeight);

    this.headState = false;
    daumSearch('blog').then((data) => {
      this.blogPosts = data.documents;
    });
    daumSearch('web').then((data) => {
      this.webPosts = data.documents;
    });
    
  },

  methods: {
    headScroll() {
      const scrollTop = window.pageYOffset;
      const visualHeight = document.getElementsByClassName("visual")[0]
        .clientHeight;
      if (this.headState !== scrollTop > visualHeight) {
        this.headState = scrollTop > visualHeight;
      }
    },
    drawerHandle(value){
      this.$refs.drawer.drawerOpen(value);
    },
    screenHeight(){
      this.visualHeight = window.innerHeight
    },
    downloadFile(fileName) {
      const filePath = `http://www.payot-inc.com/pdf/${fileName}.pdf`;
      
      window.open(filePath, '_blank');
    }
  },

  beforeDestroy() {
    window.removeEventListener(event);
    window.removeEventListener(event2);
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  overflow: hidden;
}

.visual {
  background: #292929;
  img {
    width: 100%;
  }
}

.mobile-visual {
  display:none;
  
}

.section {
  padding: 80px 0;

  .section-title {
    dl {
      dt {
        font-size: 32px;
        line-height: 32px;
        margin-bottom: 10px;
      }
      dd {
        color: #888;
        font-size: 16px;
      }
    }
  }
}

.main-product {
  .section-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    dl {
      dt {
        margin-bottom: 35px;
      }
    }

    span {
      display: block;
      width: 1px;
      height: 35px;
      background: #292929;
      margin-bottom: 35px;
    }
  }

  .inner {
    margin-top: 150px;
  }

  .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .product-item {
    position: relative;
    padding: 0 15px;

    .item-img {
      padding: 0 30px;
      position: absolute;
      width: 100%;
      top: -100px;
      left: 0px;
      text-align: center;

      img {
        width: 100%;
      }
    }

    .item-info {
      background: #f2f2f2;
      border-radius: 10px;
      padding: 30px;
      padding-top: 150px;
      min-height: 400px;

      .makeUp {
        display: flex;
        align-items: center;
        margin: 40px 0;

        .dot {
          display: block;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #452ee9;
        }
        .divider {
          flex: 1;
          height: 1px;
          background: #452ee9;
        }
      }

      dl {
        dt {
          font-size: 22px;
        }
        dd {
          margin-top: 10px;
          color: #888;
        }
      }

      .item-bottom {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .v-btn {
          color: #452ee9;
        }
      }
    }
  }
}

.main-movie {
  .inner {
    position: relative;
  }

  .video-list {
    position: relative;
    display: flex;
    margin-top: 20px;
    background: #292929;
    border-radius: 10px 0 0 10px;
    padding: 30px;
    z-index: 3;

    .video-item {
      span {
        display: block;
        color: #fff;
      }
      span.thumbnail {
        overflow: hidden;
        background: #000;
        border-radius: 10px;
        margin-bottom: 20px;

        iframe {
          width: 100%;
          height: 200px;
        }
      }
      span.item-title {
        font-size: 18px;
      }
      span.description {
        color: #888;
        margin-top: 5px;
      }
      span.date {
        margin-top: 15px;
      }
    }

    .video-item:last-child {
      margin-right: 0px;
    }
  }

  .list-bg {
    position: absolute;
    top: 0px;
    left: 50%;
    width: 100%;
    height: 100%;
    background: #292929;
    z-index: 2;
  }

  .list-back-bg {
    position: absolute;
    background: #e2e2e2;
    width: 100%;
    height: 100%;
    top: 50px;
    right: 50%;
    z-index: 1;
    border-radius: 0 10px 10px 0;
  }
}

.main-review {
  .section-title {
    margin-bottom: 20px;
  }
  .gallery {
    .row {
      margin: 0;
      padding: 0;
    }
    .col {
      margin: 0;
      padding: 0;
    }

    .img-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      background: #e2e2e2;
      overflow: hidden;
      cursor: pointer;

      img {
        animation: img-default 1s forwards;
        height: 100%;
      }

      img:hover {
        animation: img-scale 1s forwards;
      }

      @keyframes img-default {
        0% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }

      @keyframes img-scale {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.05);
        }
      }
    }

    .img-box.first {
      width: 100%;
      height: 420px;
      overflow: hidden;
    }

    .img-group {
      margin-left: 10px;
      display: flex;
      flex-direction: column;

      .img-row {
        display: flex;
        margin-bottom: 10px;
      }

      .img-row:last-child {
        margin: 0px;
      }

      .img-box {
        flex: 1;
        height: 205px;
        margin-right: 10px;

        .v-btn {
          width: 100%;
          height: 100%;
          font-size: 18px;
          background: #452ee9;
          color: #fff;
        }
      }
      .img-box:last-child {
        margin-right: 0px;
      }
    }
  }
}

.media {
  background: #f2f2f2;

  h3 {
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 30px;
  }

  .media-item{
    padding: 30px;
    background: #fff;
    border-radius: 10px;

    ul {
      margin: 0;
      padding: 0;
      
      li {
        padding-bottom:20px;
        margin-bottom:20px;
        border-bottom: 1px solid #e2e2e2;

        a{
          text-decoration: none;
        }

        a:hover{
          .board-title{
            text-decoration: underline;
          }
        }

        .board-title {
              font-size: 14px;
            }

        .board-info {
          display: flex;
          align-items: center;
          margin-top: 5px;

          span {
            margin-right: 10px;
            color: #888;
          }
          .company {
            font-size:12px;
          }
          .date {
            font-size:12px;
          }
        }
        .board-description {
          margin-top: 5px;
          font-size:12px;
          color: #888;
        }
      }
      li:last-child {
        border: 0;
      }
    }
  }

  .media-item.blog {
    padding: 30px;
    background: #fff;
    border-radius: 10px;

    a{
      display:flex;
      text-decoration: none;

      .board-img {
        min-width: 100px;
        width:100px;
        height: 100px;
        overflow: hidden;
        border: 1px solid #e2e2e2;

        img {
          width: 100%;
        }
      }

      .board-cont {
        flex:1;
        margin-left:15px;
      }        
    }

    
  }
  
}

.customer {
  .cs-number {
    font-size: 42px;
    color: #452ee9;
  }
  .cs-time {
    display: flex;
    align-items: center;
    margin-top: 10px;
    label {
      margin-right: 10px;
    }
    span {
      color: #888;
    }
  }
  .cs-info {
    display: flex;
    align-items: center;
    margin-top: 10px;
    label {
      margin-right: 10px;
    }
    span {
      color: #888;
      letter-spacing: 0px;
    }
  }

  .download {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 50px;

      img {
        height: 200px;
      }
      label {
        margin-top: 30px;
        font-size: 16px;
      }
      .v-btn {
        margin-top: 10px;
        border: 1px solid #452ee9;
        height: 24px;
        font-size: 11px;
        padding: 0 20px;
        color: #452ee9;
        letter-spacing: 0px;
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .visual {
    display: none;
  }

  .mobile-visual{
    display:block;
    background:#191919;

    .slide-item{
      display:flex;
      flex-direction: column;
      justify-content: space-between;

      .slide-text{
        margin-top:120px;
        padding:0 30px;
        span{display:block;}
        span.title01{
          font-size:32px;
        }
        span.title02{
          font-size:20px;
        }
        span.title03{
          margin-top:20px;
          color:rgba(255,255,255,0.5)
        }
      }
    }

    .slide-img{
      flex:1;
      display:flex;
      align-items: flex-end;

      img{width:100%;}
    }
  }

  .main-review {
    .gallery {
      .img-group {
        margin-left: 0;
        margin-top: 10px;

        .img-box {
          height: 100px;
        }
      }
    }
  }

  .main-product {
    .row {
      .col-md-4 {
        margin-bottom: 60px;
      }
      .col-md-4:last-child {
        margin-bottom: 0px;
      }
    }

    .product-item {
      padding: 0px;

      .item-img {
        img {
          width: 22rem;
        }
      }
    }
  }

  .customer {
    .cs-number {
      font-size: 28px;
    }

    .download {
      justify-content: center;
      align-items: center;

      .item {
        width: 100%;
        background: #f2f2f2;
        border-radius: 10px;
        margin-left: 0px;
        padding: 20px;
      }
    }
  }
}

@media screen and(max-width:600px) {
  .main-product{
    .section-title{
      padding:0 20px;
      dl{
        dt{font-size:28px;}
        dd{font-size:14px;}
      }
    }
  }

  .main-movie {
    .inner {
      position: relative;
    }
    .video-list {
      flex-direction: column;
    }
  }
}
</style>
