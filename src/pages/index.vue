<script setup lang="ts">
import { MicroCMSQueries } from 'microcms-js-sdk';
import { onMounted } from 'vue';
const { isMobile, isTablet, isDesktop } = useDevice()
const newsQueries:MicroCMSQueries = {
  limit:5
} 
const topicQueries: MicroCMSQueries = {
  limit: 2
}
const {data: news} = await useFetch('/api/newsList', {params: newsQueries})
const {data: topics} = await useFetch('/api/postList', {params: topicQueries})

console.log(topics)
console.log(news)

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'top')
})

const breakPoint = <string>"896"

const objClass : object = {
  'tw-h-screen' : isMobile || isTablet
}
</script>
<template>
  <main class="site-main top">
    <div class="heroContainer tw-relative tw-w-full tw-aspect-video" :class="objClass">
      <img src="@/assets/images/poster01.jpg" class="tw-object-cover tw-w-full tw-h-full" alt="">
      <div class="imageContainer tw-absolute tw-inset-0 tw-w-full">
        <div class="imageContainer-image tw-absolute">
          <img src="@/assets/images/top/img_h_1.jpg" alt="">
        </div><!-- -->
        <div class="imageContainer-image tw-absolute">
          <img src="@/assets/images/top/img_h_2.jpg" alt="">
        </div><!-- -->
        <div class="imageContainer-image tw-absolute">
          <img src="@/assets/images/top/img_h_3.jpg" alt="">
        </div><!-- -->
        <div class="imageContainer-image tw-absolute">
          <img src="@/assets/images/top/img_h_4.jpg" alt="">
        </div><!-- -->
        <div class="imageContainer-text tw-absolute">
          <div class="image"><img src="@/assets/images/top/img_hero_text01.png" alt="SPECIAL"></div>
          <div class="image"><img src="@/assets/images/top/img_hero_text02.png" alt="PARTNER"></div>
          <div class="image"><img src="@/assets/images/top/img_hero_text03.png" alt="今も、この先もずっと。"></div>
        </div>
      </div>
    </div>
    <div class="site-main__inner">
      <div class="secContainer">
        <section class="sec sec1 tw-px-8">
          <div class="sec__inner mx">
            <header class="sec__header tw-text-white">
              <h2 class="sec__header-ttl">
                <picture>
								<source :media="`(min-width:${breakPoint}px)`" srcset="@/assets/images/top/img_sec_ttl01.png">
								<source :media="`(max-width:${breakPoint}px)`" srcset="@/assets/images/top/img_sec_ttl01_sp.png">
								<img src="@/assets/images/top/img_sec_ttl01_sp.png"  alt="our advantage お客様と共に夢を現実にしていくSPグループ" width="916">
							</picture>
              </h2>
              <p class="sec__header-txt">SPグループの強み</p>
            </header>
            <div class="sec__container tw-text-white md:tw-flex md:tw-items-center">
              <div class="txtContainer tw-pt-12 md:tw-px-28">
                <h3 class="txtContainer-ttl">他社にない<br>ビジネスアウトライン</h3>
                <p class="txtContainer-txt tw-mt-6">パチンコ・スロット業界のすべての業務を包括しワンストップでご提供しています。<br>それが他社にない、SPグループの大きな強みです。</p>
                <div class="btnContainer tw-mt-24 tw-text-right md:tw-text-left">
                  <a href="" class="btnContainer-btn btn"><span class="txt">詳しく見る</span></a>
                </div>
              </div>
              <div class="imageContainer tw-relative tw-max-w">
                <h3 class="spTitle">トータル<br>サポート</h3>
                <ul class="spList tw-absolute tw-top-0 tw-right-0 tw-bottom-0 tw-left-0">
                  <li class="spList-item">
                    <h4 class="sp-ttl">ソリューション</h4>
                    <p class="sp-txt">システム管理<br>（SP.Ⅱシステム）<br>保管管理業務<br>洗浄・メンテナンス</p>
                  </li>
                  <li class="spList-item">
                    <h4 class="sp-ttl">ロジスティック</h4>
                    <p class="sp-txt">販売提案営業<br>書類作成代行<br>設置代行</p>
                  </li>
                  <li class="spList-item">
                    <h4 class="sp-ttl">トランスポート</h4>
                    <p class="sp-txt">精密機器配送</p>
                  </li>
                  <li class="spList-item">
                    <h4 class="sp-ttl">キャリア</h4>
                    <p class="sp-txt">人材紹介<br>人材派遣</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="sec sec2 tw-px-8">
          <div class="sec__inner mx">
            <header class="sec__header ">
              <h2 class="sec__header-ttl">
                <img src="@/assets/images/top/img_sec_ttl02.png"  alt="business" width="916">
              </h2>
              <p class="sec__header-txt">事業案内</p>
            </header>
            <div class="sec__container ">
            </div>
          </div>
        </section>
        <section class="sec sec3 tw-px-8">
          <div class="sec__inner mx">
            <header class="sec__header ">
              <h2 class="sec__header-ttl">
                <img src="@/assets/images/top/img_sec_ttl03.png"  alt="case studies" width="916">
              </h2>
              <p class="sec__header-txt">事例</p>
            </header>
            <div class="sec__container md:tw-pt-28 tw-pt-12">
              <p class="txt tw-text-sm md:tw-text-base">お客さまにより業態や規模、環境もさまざまです。<br>サポートさせていただいている事例の一部をご紹介いたします。</p>
              
            </div>
          </div>
        </section>
        <div class="sec sec4 tw-px-8">
          <div class="sec__inner mx md:tw-flex tw-pt-52 md:tw-pt-72">
            <section class="sec_nt news tw-pt-28 md:tw-pt-48 md:tw-w-6/12 tw-flex tw-flex-col tw-px-8">
              <header class="sec_nt__header">
                <h2 class="sec_nt__header-ttl tw-text-xl md:tw-text-4xl">ニュース</h2>
              </header>
              <div class="sec_nt__container tw-mt-24 md:tw-mt-32 tw-flex-1">
                <NewsList :news="news.contents" />
              </div>
              <div class="btnContainer tw-text-right">
                  <a href="" class="btnContainer-btn btn"><span class="txt">一覧を見る</span></a>
                </div>
            </section>
            <section class="sec_nt topics tw-pt-28 md:tw-pt-48 md:tw-w-6/12 tw-flex tw-flex-col tw-px-8">
              <header class="sec_nt__header">
                <h2 class="sec_nt__header-ttl tw-text-xl md:tw-text-4xl">トピックス</h2>
              </header>
              <div class="sec_nt__container tw-mt-24 md:tw-mt-32 tw-flex-1">
                <PostList :topics="topics.contents" />
              </div>
              <div class="btnContainer tw-text-right">
                  <a href="" class="btnContainer-btn btn"><span class="txt">一覧を見る</span></a>
                </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
