<template>
  <Carousel :wrap-around="true" v-bind="settings">
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item">
        <div class="image">
          <NuxtLink :to="`${slide.href}`">
            <img :src="`/images/case/${slide.src}`" alt="">
          </NuxtLink>
        </div>
        <div class="txtContainer">
          <h3 class="ttl tw-font-semibold">{{ slide.title }}</h3>
          <p v-html="slide.text"></p>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Navigation
    // Pagination,
  },
  data:() => ({
    settings: {
      // autoplay:"3000",
      transition:"700",
      itemsToShow:1,
      snapAlign:'center',
      breakpoints: {
      896: {
        itemsToShow: 3,
        snapAlign:'center'
      }
    }
    },
    slides: [
      {
        'id':1,
        'src':'img_case1_thumb.jpg',
        'href': '/casestudies01',
        'title':'東北〇〇ホール様のケース',
        'text':'自社倉庫維持費<br>運搬コスト<br>不要な台の無駄な保管'
      },
      {
        'id':2,
        'src':'img_case2_thumb.jpg',
        'href': '',
        'title':'関西〇〇ホール様のケース',
        'text':'管理費<br>倉庫人件費<br>運搬コスト'
      },
      {
        'id':3,
        'src':'img_case1_thumb.jpg',
        'href': '/casestudies01',
        'title':'東北〇〇ホール様のケース',
        'text':'自社倉庫維持費<br>運搬コスト<br>不要な台の無駄な保管'
      }
    ]
  })
})
</script>

<style lang="scss" >
.carousel__slide {
  padding: .5%;
  opacity: .5;
  transform:scale(.9);

  .txtContainer{
    margin-top:.7em;
    text-align: left;
  }
  
  &:not(.carousel__slide--active){
    transition:transform .7s;
  }
  &--active{
    transform:scale(1);
    opacity: 1;
  }
}

.carousel__next,
.carousel__prev{
  border-radius: 50%;
  background: #fff;
  width:2em;
  height: 2em;
  overflow: hidden;
}
.carousel__icon {
  width:80%;
  height: 80%;
}

@media screen and (min-width: 896px) {
    .carousel__next,
    .carousel__prev{
    
    top:37%;
    z-index: 100;
  }
  
  .carousel__next{
    right:29% ;
  }
  .carousel__prev{
    left:29%;
  }
}

</style>
