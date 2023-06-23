<script setup lang="ts">

</script>

<template>
  <div class="u_px">
    <div class="otherContainer u_mx1000">
          <p class="other-ttl tw-font-semibold titleLine">その他の事業</p>
          <ul class="otherList tw-flex tw-mt-20">
            <li class="otherList-item">
              <NuxtLink :to="`/solution`">
                <div class="image">
                  <img src="@/assets/images/page/img_service01_thumb.jpg" alt="">
                </div>
                <p class="txt">
                  <span class="en">SOLUTION</span>
                  <span class="ja">ソリューション</span>
                </p>
              </NuxtLink>
            </li>
            <li class="otherList-item">
              <NuxtLink :to="`/logistic`">
                <div class="image">
                  <img src="@/assets/images/page/img_service02_thumb.jpg" alt="">
                </div>
                <p class="txt">
                  <span class="en">LOGISTIC</span>
                  <span class="ja">ロジスティック</span>
                </p>
              </NuxtLink>
            </li>
            <li class="otherList-item">
              <NuxtLink :to="`/transport`">
                <div class="image">
                  <img src="@/assets/images/page/img_service03_thumb.jpg" alt="">
                </div>
                <p class="txt">
                  <span class="en">TRANSPORT</span>
                  <span class="ja">トランスポート</span>
                </p>
              </NuxtLink>
            </li>
            <li class="otherList-item">
              <NuxtLink :to="`https://sp-career.com/`" target="_blank">
                <div class="image">
                  <img src="@/assets/images/page/img_service04_thumb.jpg" alt="">
                </div>
                <p class="txt">
                  <span class="en">CARRIER</span>
                  <span class="ja">キャリア</span>
                </p>
              </NuxtLink>
            </li>
          </ul>
        </div>
  </div>
</template>

<style scoped lang="scss">
.otherContainer{
  margin-top:clamp(70px, #{pvv(140, 1100)}, 140px);
  padding-bottom:clamp(70px, #{pvv(150,1100)}, 150px);
  position:relative;
  z-index: 2;
}
.other{
  &-ttl{
    font-size:clamp(20px,#{pvv(24,896)} ,24px);
  }
}
.otherList{
  gap:4%;
  flex-wrap:wrap;
  max-width:550px;
  margin-left: auto;
  margin-right: auto;
  &-item{
    width:48%;
    
    .image{
      
      img{
        aspect-ratio: 1/1;
        border-radius: 50%;
        filter: drop-shadow(0px 6px 4px rgba(10, 55, 110, 0.6));
      }
      
    }
    .txt{
      color:$col1;
      text-align: center;
      .en{
        font-family:$font4;
        display: block;
        font-size:clamp(24px,#{pvv(35, 896)} ,35px);
      }

    }
  }
}

@media screen and (min-width: 896px) {
  .otherList{
    max-width: none;
  &-item{
    width:22%;
    max-width:250px;
    .image{
      
      img{
        aspect-ratio: 1/1;
        border-radius: 50%;
      }
      
    }
  }
}
}
</style>
