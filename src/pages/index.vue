<script setup lang="ts">
import { MicroCMSQueries } from 'microcms-js-sdk';
import { onMounted, onUnmounted, nextTick, reactive } from 'vue';
import gsap from 'gsap';


const { isMobile, isTablet, isDesktop } = useDevice()
const newsQueries:MicroCMSQueries = {
  limit:5
} 
const topicQueries: MicroCMSQueries = {
  limit: 2
}
const {data: news} = await useFetch('/api/newsList', {params: newsQueries})
const {data: topics} = await useFetch('/api/postList', {params: topicQueries})

// console.log(topics)
// console.log(news)

const emit = defineEmits(['p_type','t_scroll'])

const { first } = firstTime();




const main = ref()
const topImage = ref()
let tl1;
let tl2;
let tl3;
let tl4,tl5;
let ctx;
let ctxImage;

const video = ref()

onMounted(() => {
  emit('p_type', 'top')

  window.addEventListener("DOMContentLoaded", async () => {
    console.log('window loaded')
  });

  nextTick(() => {
    const _video = video.value.querySelector('.videoContainer video')
    console.log('--next tick--', _video);
    setTimeout(() => {
      playVideo()
    },500)
    

    async function playVideo() {
      try {
        await _video.play()
        // console.log(_video)
        _video.addEventListener('ended', () => {
          // console.log('loop')
          _video.play()
        })
      } catch(err){
        console.log(err)
      }
    }

    console.log("first=",first.value)
    if(!first.value){
      first.value = true
    }

  })

  ctxImage = gsap.context((self) => {
    const tx1 = self.selector('.imageContainer-text .tx1 img')
    const tx2 = self.selector('.imageContainer-text .tx2 img')
    const tx3 = self.selector('.imageContainer-text .tx3 img')

    const sq1 = self.selector('.imageContainer .sq1 img')
    const sq2 = self.selector('.imageContainer .sq2 img')
    const sq3 = self.selector('.imageContainer .sq3 img')
    const sq4 = self.selector('.imageContainer .sq4 img')
    
    tl1=gsap.timeline()
    tl1.fromTo(tx1,{opacity:0,y:30},{opacity:1,y:0,duration:.7,delay:1})
    tl1.fromTo(tx2,{opacity:0,y:30},{opacity:1,y:0,duration:.7}, "-=.4")
    tl1.fromTo(tx3,{opacity:0,y:30},{opacity:1,y:0,duration:.7}, "-=.4")

    tl2=gsap.timeline()
    tl2.fromTo(sq1, {opacity:0,y:30},{opacity:1,y:0,duration:.7,delay:1.2})
    tl2.fromTo(sq2, {opacity:0,y:30},{opacity:1,y:0,duration:.7}, "-=.3")
    tl2.fromTo(sq3, {opacity:0,y:30},{opacity:1,y:0,duration:.7}, "-=.3")
    tl2.fromTo(sq4, {opacity:0,y:30},{opacity:1,y:0,duration:.7}, "-=.3")
    
  },topImage.value)

  ctx = gsap.context((self) => {

    const sec1_ttl = self.selector('#sec1-ttl')
    const sec1_tx1 = self.selector('#sec1-ttl .tx1 span')
    const sec1_tx2 = self.selector('#sec1-ttl .tx2 span')
    const sec1_tx3 = self.selector('#sec1-ttl .tx3 img')

    const spList1 = self.selector('.spList-item.item1')
    const spList2 = self.selector('.spList-item.item2')
    const spList3 = self.selector('.spList-item.item3')
    const spList4 = self.selector('.spList-item.item4')
    const spTitle = self.selector('.sec1 .spTitle')
    const spList = self.selector('.spList')
    const spListitem = gsap.utils.toArray(self.selector('.spList-item'))

    const sec2_ttl = self.selector('#sec2-ttl')
    const sec2_tx1 = self.selector('#sec2-ttl .tx1 span')
    const sec2_tx2 = self.selector('#sec2-ttl .tx2 span')

    const sec_news_ttl = self.selector('.sec_nt.news .bg span')
    const sec_topic_ttl = self.selector('.sec_nt.topics .bg span')

    //nextTick(() => {
      // console.log('index gsap nextTick')
      gsap.set(sec1_tx1, { y:'100%' })
      gsap.set(sec1_tx2, { y:'100%' })
      gsap.set(sec1_tx3, { x:100, opacity:0 })

      gsap.set(spTitle,{opacity:0 })

      // spListitem.forEach(_el => { gsap.set(_el, {opacity:0 }) })

      gsap.set(spList1,{opacity:0,y:'20%'})
      gsap.set(spList2,{opacity:0,x:'-20%'})
      gsap.set(spList3,{opacity:0,y:'-20%'})
      gsap.set(spList4,{opacity:0,x:'20%'})

      gsap.set(sec2_tx1, { y:'100%' })
      gsap.set(sec2_tx2, { y:'100%' })

      gsap.set(sec_news_ttl, {x:'-100%'})
      gsap.set(sec_topic_ttl, {x:'-100%'})


    setTimeout( () => {
      tl5=gsap.timeline({paused: true})
      tl5.to(sec2_tx1, {
        y:0,
        duration:.7,
        scrollTrigger: {
          trigger:sec2_ttl,
          start: 'center bottom-=20%',
          onEnter: () => {
            tl5.play();
          }
        }
      })
      tl5.to(sec2_tx2, {
        y:0,
        duration:.7,
        delay:.3
      })

      tl4=gsap.timeline({paused: true})
      tl4.to(sec1_tx1, {
        y:0, duration:.7,
        scrollTrigger: {
          trigger:sec1_ttl,
          start:'center bottom-=20%',
          // markers: true,
          onEnter: (e) => {
            emit('t_scroll', 'on')
            tl4.play();
          },
          onLeaveBack: () => {
            // console.log('on leave scroll trigger')
            emit('t_scroll', 'off')
          }
        }
      })

      tl4.to(sec1_tx2, {
        y:0,
        duration:.7,
        delay:.3
      })
      tl4.to(sec1_tx3, {
        x:0,
        opacity:1,
        duration:.5,
      },'-=.7')


      tl3=gsap.timeline({paused: true})
      gsap.to(spTitle, {
        opacity:1,
        duration:.7,
        scrollTrigger: {
          trigger: spTitle,
          start: 'center bottom-=20%',
          onEnter: (e) => {
            setTimeout(()=>{
              tl3.play()
            },500)
          }
        }
      })

      spListitem.forEach(
      _el => {
        tl3.to(_el, {
          opacity:1,
          x:0,
          y:0,
          duration:.7,
        },'-=.3')
      }
      
     )


      gsap.to(sec_news_ttl, {
        x:0,
        duration:.7,
        // delay:2,
        scrollTrigger: {
          trigger:sec_news_ttl,
          start:'center bottom',
          // markers: true
        }
      })
      gsap.to(sec_topic_ttl, {
        x:0,
        duration:.7,
        // delay:2,
        scrollTrigger: {
          trigger:sec_topic_ttl,
          start:'center bottom',
          // markers: true
        }
      })

    }, 1000)

    //})//nextTick

  }, main.value)

})

onUnmounted(() => {
  console.log('clean')
  // console.log(ctx)
  emit('t_scroll', 'off')
  ctx.revert(); // <- Easy Cleanup!
  ctxImage.revert();

})

const breakPoint = <string>"896"

const objClass : object = reactive({
  'tw-h-screen' : isMobile || isTablet
})

</script>

<template>
  <main class="site-main top">
    <div class="heroContainer tw-relative tw-w-full tw-aspect-video" :class="objClass">
      <div class="videoContainer" ref="video">
      <video id="video" src="@/assets/movie/DJI_0015.mp4" muted playsinline></video>
   </div>
      <div class="imageContainer tw-absolute tw-inset-0 tw-w-full" ref="topImage">
        <div class="imageContainer-image tw-absolute sq1">
          <img src="@/assets/images/top/img_h_1.jpg" alt="">
        </div><!-- -->
        <div class="imageContainer-image tw-absolute sq2">
          <img src="@/assets/images/top/img_h_2.jpg" alt="">
        </div><!-- -->
        <div class="imageContainer-image tw-absolute sq3">
          <img src="@/assets/images/top/img_h_3.jpg" alt="">
        </div><!-- -->
        <div class="imageContainer-image tw-absolute sq4">
          <img src="@/assets/images/top/img_h_4.jpg" alt="">
        </div><!-- -->
        <div class="imageContainer-text tw-absolute">
          <div class="image tx1"><img src="@/assets/images/top/img_hero_text01.png" alt="SPECIAL"></div>
          <div class="image tx2"><img src="@/assets/images/top/img_hero_text02.png" alt="PARTNER"></div>
          <div class="image tx3"><img src="@/assets/images/top/img_hero_text03.png" alt="今も、この先もずっと。"></div>
        </div>
      </div>
    </div>
   
    <div class="site-main__inner">
      <article class="secContainer" ref="main">
        <section class="sec sec1 tw-px-8 ">
          <div class="sec__inner u_mx">
            <header class="sec__header tw-text-white">
              <h2 id="sec1-ttl" class="sec__header-ttl tw-relative animTxt">
                <span class="txt tw-block tx1 anm"><span>OUR</span></span>
                <span class="txt tw-block tx2 anm"><span>ADVANTAGE</span></span>
                <span class="txt tw-block anm tx3 anm_x tw-absolute txt-image">
                  <picture>
                  <source media='(min-width:897px)' srcset='@/assets/images/top/img_sec1_ttl_txt.png'>
                  <source media='(max-width:896px)' srcset='@/assets/images/top/img_sec1_ttl_txt_sp.png'>
                  <img src="@/assets/images/top/img_sec1_ttl_txt_sp.png" width="720px" alt="お客様と共に夢を現実にしていくSPグループ">
                  </picture>
                  
                </span>
              </h2>
              <p class="sec__header-txt tw-font-semibold tw-text-4xl">SPグループの強み</p>
            </header>
            <div class="sec__container tw-text-white md:tw-flex md:tw-items-end max-md:tw-mt-20">
              <div class="txtContainer">
                <div class="txtContainer__inner tw-relative">
                  <h3 class="txtContainer-ttl">お客様のビジネスをトータルサポート</h3>
                  <p class="txtContainer-txt tw-mt-6">販売部門、倉庫部門、運送部門、人材紹介部門…<br>
                  お客様の夢（未来）を実現するための<br>
                  トータルサポート体制がここにはあります。<br>
                  <span class="bg tw-font-semibold tw-block tw-mt-12 md:tw-mt-6">お客様のスペシャルパートナーになるために。</span></p>
                  <div class="btnContainer tw-mt-12 md:tw-mt-24 tw-text-right ">
                    <NuxtLink :to="`/about`" class="btnContainer-btn btn"><span class="txt">詳しく見る</span></NuxtLink>
                  </div>
                </div>
              </div>
              <div class="imageContainer tw-relative tw-max-w tw-mt-16 md:tw-mt-12">
                <h3 class="spTitle"><div class="inner">トータル<br>サポート</div></h3>
                <ul class="spList tw-absolute tw-top-0 tw-right-0 tw-bottom-0 tw-left-0">
                  <li class="spList-item item1">
                    <div class="inner">
                      <h4 class="sp-ttl">ソリューション</h4>
                      <p class="sp-txt">販売提案営業<br>書類作成代行<br>設置代行</p>
                    </div>
                  </li>
                  <li class="spList-item item2">
                    <div class="inner">
                      <h4 class="sp-ttl">ロジスティック</h4>
                      <p class="sp-txt">システム管理<br>（SP.Ⅱシステム）<br>保管管理業務<br>洗浄・メンテナンス</p>
                    </div>
                  </li>
                  <li class="spList-item item3">
                    <div class="inner">
                      <h4 class="sp-ttl">トランスポート</h4>
                      <p class="sp-txt">精密機器配送</p>
                    </div>
                  </li>
                  <li class="spList-item item4">
                    <div class="inner">
                      <h4 class="sp-ttl">キャリア</h4>
                      <p class="sp-txt">人材紹介<br>人材派遣</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sec__container group">
              <div class="sec__header">
                <h3 class="sec__header-sub_ttl tw-font-semibold tw-relative"><span class="tw-absolute tw-bottom-0.5">SPグループ</span></h3>
              </div>
              <ul class="gpList md:tw-flex tw-mt-10 md:tw-mt-20">
                <li class="gpList-item max-md:tw-mb-12">
                  <div class="image">
                    <img src="@/assets/images/page/img_company_sec3_list_ttl_01.png" alt="株式会社セブンピース" height="35">
                  </div>
                  <h4 class="gpList-item-ttl">株式会社セブンピース</h4>
                  <NuxtLink :to="`/company#gp1`" class="btn">概要はこちら<SvgAngleRight /></NuxtLink>
                </li>
                <li class="gpList-item max-md:tw-mb-12">
                  <div class="image">
                    <img src="@/assets/images/page/img_company_sec3_list_ttl_02.png" alt="株式会社セブンピースロジスティック" height="35">
                  </div>
                  <h4 class="gpList-item-ttl">株式会社セブンピース<br class="u_sp">ロジスティック</h4>
                  <NuxtLink :to="`/company#gp2`" class="btn">概要はこちら<SvgAngleRight /></NuxtLink>
                </li>
                <li class="gpList-item max-md:tw-mb-12">
                  <div class="image">
                    <img src="@/assets/images/page/img_company_sec3_list_ttl_03.png" alt="株式会社ココプランニング" height="35">
                  </div>
                  <h4 class="gpList-item-ttl">株式会社ココプランニング</h4>
                  <NuxtLink :to="`/company#gp3`" class="btn">概要はこちら<SvgAngleRight /></NuxtLink>
                </li>
                <li class="gpList-item max-md:tw-mb-12">
                  <div class="image">
                    <img src="@/assets/images/page/img_company_sec3_list_ttl_04.png" alt="株式会社ソリッド" height="35">
                  </div>
                  <h4 class="gpList-item-ttl">株式会社ソリッド</h4>
                  <NuxtLink :to="`/company#gp4`" class="btn">概要はこちら<SvgAngleRight /></NuxtLink>
                </li>
                <li class="gpList-item max-md:tw-mb-12">
                  <div class="image">
                    <img src="@/assets/images/page/img_company_sec3_list_ttl_05.png" alt="SPキャリア.com" height="35">
                  </div>
                  <h4 class="gpList-item-ttl">SPキャリア.com</h4>
                  <NuxtLink :to="`https://sp-career.com/`" target="_blank" class="btn">概要はこちら<SvgAngleRight /></NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="casestudies" class="sec sec3 tw-px-8 tw-mt-20 md:tw-mt-28">
          <div class="sec__inner mx">
            <header class="sec__header ">
              <h2 id="sec2-ttl" class="sec__header-ttl animTxt">
                <!-- <img src="@/assets/images/top/img_sec_ttl03.png"  alt="case studies" width="916"> -->
                <span class="txt tw-block anm tx1"><span>CASE</span></span>
                <span class="txt tw-block anm tx2"><span>STUDIES</span></span>
              </h2>
              <p class="sec__header-txt tw-text-4xl tw-font-semibold">事例</p>
              <p class="txt tw-text-sm md:tw-text-base tw-mt-12 md:tw-mt-28">お客さまにより業態や規模、環境もさまざまです。<br>サポートさせていただいている事例の一部をご紹介いたします。</p>
            </header>
            <div class="sec__container">
              <div class="caseListContainer tw-mt-12 md:tw-mt-24 tw-text-center">
                <div class="caseListContainer__inner">
                  <h3 class="caseListContainer-ttl tw-text-def md:tw-text-3xl tw-font-bold">このような<span class="bg">お悩み</span>ありませんか？</h3>
                  <ul class="caseList tw-inline-block tw-text-left tw-mt-8 md:tw-text-xl">
                    <li class="caseList-item">
                      <span class="ico">
                        <SvgSquareCheck />
                      </span>
                    <span class="txt"><span class="bg">集客率を上げる</span>ための、提案をして欲しい。</span>
                    </li>
                    <li class="caseList-item">
                      <span class="ico">
                        <SvgSquareCheck />
                      </span>
                      <span class="txt"><span class="bg">輸送コストの削減</span>をしたい。</span>
                      </li>
                    <li class="caseList-item">
                      <span class="ico">
                        <SvgSquareCheck />
                      </span>
                      <span class="txt"><span class="bg">保管在庫の管理</span>が面倒だ。</span>
                      </li>
                      <li class="caseList-item">
                      <span class="ico">
                        <SvgSquareCheck />
                      </span>
                      <span class="txt"><span class="bg">保管在庫の有効な活用方法</span>をコンサルティングして欲しい。</span>
                      </li>
                    <li class="caseList-item">
                      <span class="ico">
                        <SvgSquareCheck />
                      </span>
                      <span class="txt">本当に<span class="bg">必要としている人材</span>を見つけたい。</span>
                      </li>
                  </ul>
                </div>
                <p class="caseListContainer-txt tw-mt-20 tw-text-def md:tw-text-3xl tw-font-semibold tw-leading-loose">SPグループだからできる<br class="u_sp"><span class="bg">トータルサポート</span>で<br class="u_sp"><span class="bg">解決</span>します。</p>
              </div>
              
            </div>
          </div>
        </section>
        <div class="sec slideContainer tw-mt-12 md:tw-mt-24 u_mx">
         <Slider />
        </div>
        <div id="news" class="sec sec4 tw-px-8 tw-mb-20 md:tw-mb-56 angle">
          <div class="sec__inner mx md:tw-flex ">
            <section class="sec_nt news md:tw-pb-12 md:tw-w-6/12 tw-flex tw-flex-col tw-px-8">
              <span class="bg"><span></span></span>
              <div class="sec_nt__inner">
                <header class="sec_nt__header">
                  <h2 class="sec_nt__header-ttl tw-text-xl md:tw-text-4xl">ニュース</h2>
                </header>
                <div class="sec_nt__container tw-mt-24 md:tw-mt-32 tw-flex-1">
                  <NewsList :news="news.contents" />
                </div>
                <div class="btnContainer tw-text-right tw-mt-28">
                  <NuxtLink class="btnContainer-btn btn" :to="`/news`"><span class="txt">一覧を見る</span></NuxtLink>
                </div>
              </div>
            </section>
            <section class="sec_nt topics max-md:tw-mt-36 md:tw-pb-12 md:tw-w-6/12 tw-flex tw-flex-col tw-px-8">
            <span class="bg"><span></span></span>
              <div class="sec_nt__inner">
                <header class="sec_nt__header">
                  <h2 class="sec_nt__header-ttl tw-text-xl md:tw-text-4xl">トピックス</h2>
                </header>
                <div class="sec_nt__container tw-mt-24 md:tw-mt-32 tw-flex-1">
                  <PostList :topics="topics.contents" />
                </div>
                <div class="btnContainer tw-text-right">
                  <NuxtLink :to="`/topics`" class="btnContainer-btn btn"><span class="txt">一覧を見る</span></NuxtLink>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="sec sec5">
          <div class="sec__inner tw-max-w-7xl tw-mx-auto u_px">
            <p class="txt tw-text-2xl u_col2">ワンストップのサービスで、経営課題を解決するサポート体制を整えています。</p>
            <div class="telContainer tw-text-center u_col2 tw-mt-20">
              <div class="tw-text-center tw-inline-block">
                <p class="txt tw-text-4xl tw-text-left">お電話でのお問い合わせ</p>
                <a href="tel:0357637770" class="tel tw-inline-block">
                  <span class="num u_ff3 tw-flex tw-items-center tw-text-6xl md:tw-text-10xl tw-leading-none tw-tracking-widest"><SvgPhone />03-5763-7770</span>
                </a>
                <p class="txt tw-text-right tw-text-xl">受付時間　平日10:00~19:00</p>
              </div>
            </div>
            <div class="mailContainer tw-text-center tw-mt-12 md:tw-mt-24">
              <a class="mail u_bgcol2 tw-inline-block"><span class="txt u_col1 tw-flex tw-items-center tw-text-4xl tw-font-semibold"><SvgMail />メールでのお問い合わせ</span></a>
            </div>
          </div>
        </div>
      </article><!-- article -->
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>
