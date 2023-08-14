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
      transition:700,
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
        'title':'パチンコホール経営のA法人の事例',
        'text':'自社倉庫維持費がかかる<br>運搬コストが高い<br>不要な台の無駄な保管'
      },
      {
        'id':2,
        'src':'img_case2_thumb.jpg',
        'href': '/casestudies02',
        'title':'建築資材専門商社Bの事例',
        'text':'自社倉庫維持費がかかる<br>運搬コストが高い<br>不要な台の無駄な保管'
      },
      {
        'id':3,
        'src':'img_case3_thumb.jpg',
        'href': '/casestudies03',
        'title':'飲食店経営C社様の事例',
        'text':'ムダな保管備品を抱えてしまっている<br>運送車両の不足による非効率的な配送<br>イベント等での大量車両の確保が出来ない'
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
  width:clamp(35px, #{pvv(60, 896)},60px);//2em;
  height: clamp(35px, #{pvv(60, 896)},60px);//2em;
  overflow: hidden;
  top:40%;
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
