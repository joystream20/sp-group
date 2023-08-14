<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';

const info = ref()
let ctx1;
onMounted(() => {
  ctx1 = gsap.context((self) => {
  const wrap = self.selector('.infoContainer__inner-wrap')
  const target = self.selector('.infoContainer__inner')
  // setTimeout(()=>{
  //   gsap.to(target,{
  //     scrollTrigger: {
  //       trigger:target,
  //       start:''
  //       markers:true
  //     }
  //   })
  // },500)
  },info.value)
  

})



</script>

<template>
  <footer class="site-footer tw-px-8 md:tw-pt-20 md:tw-pt-32">
    <div class="site-footer__inner u_mx md:tw-flex tw-flex-row-reverse">
      <div class="infoContainer" ref="info">
        <div class="infoContainer__inner-wrap">
          <div class="infoContainer__inner">
              <div>
                <div>お電話でのお問い合わせ</div>
                <a href="tel:0357637770" class="tel tw-inline-block">
                  <span class="num u_ff3 tw-flex tw-justify-center tw-items-center tw-text-5xl tw-leading-none tw-tracking-widest"><SvgPhone />03-5763-7770</span>
                </a>
              </div>
              <div><a href="mailto:info@sevenpeace.com" class="mail tw-inline-block"><span class="txt tw-flex tw-justify-center tw-items-center tw-text-xl"><SvgMail />メールでのお問い合わせ</span></a></div>
            </div>
        </div>
      </div>
      <div class="fnavContainer md:tw-flex-1 max-md:tw-flex-wrap tw-flex tw-justify-between tw-pt-20 md:tw-pt-16 md:tw-pb-8 md:tw-flex-col">
        
          <div class="tw-w-2/4 md:tw-w-full fnav-wrap">
            <ul class="fnav md:tw-flex tw-font-semibold">
              <li class="fnav-item md:tw-mr-12"><NuxtLink :to="`/`">ホーム</NuxtLink></li>
              <li class="fnav-item md:tw-mr-12"><NuxtLink :to="`/about`">SPグループの強み</NuxtLink></li>
              <li class="fnav-item md:tw-mr-12"><NuxtLink :to="`/company`">企業情報</NuxtLink></li>
              <li class="fnav-item"><NuxtLink :to="`/#casestudies`">事例</NuxtLink></li>
            </ul>
          </div>
          <div class="tw-w-2/4 md:tw-w-full fnav-wrap">
            <p class="ttl tw-font-semibold">事業案内</p>
            <ul class="fnav md:tw-flex tw-text-sm tw-mt-4">
              <li class="fnav-item md:tw-mr-8"><NuxtLink :to="`/solution`">ソリューション</NuxtLink></li>
              <li class="fnav-item md:tw-mr-8"><NuxtLink :to="`/logistic`">ロジスティック</NuxtLink></li>
              <li class="fnav-item md:tw-mr-8"><NuxtLink :to="`/transport`">トランスポート</NuxtLink></li>
              <li class="fnav-item md:tw-mr-8"><NuxtLink :to="`https://sp-career.com/`" target="_blank">キャリア</NuxtLink></li>
            </ul>
          </div>
        
        <ul class="fnav md:tw-flex tw-font-semibold tw-w-full max-md:tw-text-center max-md:tw-mt-8  bt_bl">
          <li class="fnav-item md:tw-mr-12"><NuxtLink :to="`/news`" class=" ">ニュース</NuxtLink></li>
          <li class="fnav-item"><NuxtLink :to="`/topics`" class=" ">トピックス</NuxtLink></li>
        </ul>
        <ul class="fnav tw-font-semibold tw-w-full max-md:tw-text-center  bt_bl">
          <li class="fnav-item"><NuxtLink :to="`/`" class=" ">採用情報</NuxtLink></li>
        </ul>
      </div>
      <div class="site-footer__infoContainer tw-text-smm md:tw-text-sm max-md:tw-mt-16">
        <div class="box logo tw-text-center">
          <img src="@/assets/images/img_logo_f.png" alt="SP Group" width="220">
        </div>
        <div class="box txtContainer">
          <h2 class="ttl tw-font-semibold tw-text-xl tw-mt-12">SPグループ</h2>
          <ul class="gpList">
            <li class="gpList-item">株式会社 セブンピース</li>
            <li class="gpList-item">株式会社 セブンピースロジスティック</li>
            <li class="gpList-item">株式会社 ココ プランニング</li>
            <li class="gpList-item">株式会社 ソリッド</li>
          </ul>
          <h2 class="ttl tw-font-semibold tw-text-xl tw-mt-8">本社</h2>
          <div class="txtContainner__inner">
            <p>〒140-0012<br>
            東京都品川区勝島1-3-49<br>
            加瀬ビル116 7Ｆ</p>
            <p class="tw-mt-2">TEL: <span class="num tw-text-xl tw-font-medium">03-5763-7770</span><br>
            FAX: <span class="num tw-text-xl tw-font-medium">03-5763-7771</span></p>
          </div>
        </div>
      </div>

    </div>
    <div class="copy u_mx tw-pt-16 tw-pb-8 tw-text-right">
      <NuxtLink :to="`/privacy`">個人情報保護方針</NuxtLink>
      <small class="tw-block tw-text-sm u_col1">Copyright(c) 2023 SP CORPORATION GROUP All right reserved.</small>
    </div>
  </footer>
</template>
