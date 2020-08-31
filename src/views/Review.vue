<template>
  <SubLayout>
    <div class="review">
     
      <div class="top">
        <dl>
          <dt>설치사례</dt>
          <dd></dd>
        </dl>
      </div>
     
      <div class="masonry">
        <div class="inner">
          <div v-masonry transition-duration="0.2s" item-selector=".item" class="masonry-container">
            <div v-masonry-tile v-for="(item) in images" :key="item" class="item col-md-4 col-sm-6">
              <div class="photo" v-ripple @click="$refs.largeImage.showImage(item)">
                <img :src="'/contents/'+item"  >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Photo ref="largeImage"/>
  </SubLayout>
</template>

<script>
import SubLayout from '@/layout/subLayout.vue';
import Photo from '@/components/photo.vue';

export default {
  components:{
    SubLayout, Photo
  },
  data(){
    return{
      active:false,
      imageIndex:0,
      images:[
        'ex17.jpg',
        'ex14.jpg',
        'ex01.jpg',
        'ex15.jpg',
        'ex02.jpg',
        'ex16.jpg',
        'ex03.jpg',
        'ex04.jpg',
        'ex05.jpg',
        'ex06.jpg',
        'ex07.jpg',
        'ex08.jpg',
        'ex09.jpg',
        'ex10.jpg',
        'ex11.jpg',
        'ex12.jpg',
        'ex13.jpg',
      ]
    }
  },
  mounted () {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  },
}
</script>

<style lang="scss" scoped>


.review{
  
  .top{
    height:150px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:0 50px;
    background:#fff;

    dl{
      dt{
        font-size:32px;
        color:#292929;
      }
      dd{
        font-size:16px;
        margin-top:10px;
        color:#888;
      }
    }
  }

  .masonry{
    padding:50px;
    background:#f2f2f2;
  }
  .masonry-container{
    .col-md-4{
      margin:0px;
      padding:1px;      
    }
    .photo{
      display:flex;
      flex-direction: column;
      overflow: hidden;

      img{width:100%;}
    }

    .photo:hover{
      cursor: pointer;
      img{
        transform: scale(1.05);
        transition: 1s ease-in-out;
      }
    }
  }
}

@media screen and(max-width:600px){
  .review{
    .masonry{
      padding:20px 0;
    }
  }
}


</style>