<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import gsap from 'gsap';

useHead({
  title: 'SPグループの強み | SPグループ',
  meta:[]
})

const emit = defineEmits(['p_type'])

const type:string = "company"

const elm = ref()
const imgs = ref()

const ttl_view = ref<String>('')

let ctx1,ctx2,tl1;

onMounted(() => {
  emit('p_type', 'about')
  
  nextTick(() => {
    // console.log('tick')
    
    const images = elm.value.querySelectorAll('.image')
    // console.log(images)
    images.forEach(
      _img => {
        // console.log(_img.previousElementSibling)

        const _copy = _img.cloneNode(true);
        const _header = _img.previousElementSibling.querySelector('.box__header')
        
        // console.log(_header);
        _header.parentNode.insertBefore(_copy, _header.nextElementSiblings)
        // _header.insertAdjacentElement('afterend', _copy)
        _copy.classList.remove('u_pc')
        _copy.classList.add('u_sp')
        _copy.classList.add('tw-mt-12')
        // _img.classList.add('u_pc')
      }
    )

    // const ttls = elm.value.querySelectorAll('.box__header-ttl')
    // ttls.forEach(
    //   _ttl => {
    //     console.log(_ttl)
    //     const _span = document.createElement('span')
    //     _span.classList.add('bgttl')
    //     _ttl.appendChild(_span)
    //   }
    // )
    
    setTimeout(() => {
      ttl_view.value = 'on'
    },1500)


    //------------------------
    ctx1 = gsap.context((self) => {

      const ttls_bg = self.selector('.box__header-ttl .bgttl')
      ttls_bg.forEach(
          _ttl => {
            gsap.set(_ttl, {y:'100%'})
          }
        )

        setTimeout(() => {
      //nextTick(() => {
        ttls_bg.forEach(
          _bg => {
            gsap.to(_bg, {
              y:0,
              duration: .7,
              scrollTrigger: {
                trigger: _bg,
                start: 'center bottom-=10%',
              }
            })
          }
        )
      //})
        },1000)

    },elm.value)

    ctx2 = gsap.context((self) => {
      const spTitle = self.selector('.spTitle')
      const spList1 = self.selector('.spList-item.item1')
      const spList2 = self.selector('.spList-item.item2')
      const spList3 = self.selector('.spList-item.item3')
      const spList4 = self.selector('.spList-item.item4')
      const spListitems = gsap.utils.toArray(self.selector('.spList-item'))
      
      gsap.set(spTitle,{opacity:0})
      gsap.set(spList1,{opacity:0,y:'20%'})
      gsap.set(spList2,{opacity:0,x:'-20%'})
      gsap.set(spList3,{opacity:0,y:'-20%'})
      gsap.set(spList4,{opacity:0,x:'20%'})

      setTimeout(() => {
        tl1=gsap.timeline({paused: true})
        gsap.to(spTitle, {
          opacity:1,
          duration:.7,
          scrollTrigger: {
            trigger: spTitle,
            start: 'center bottom-=20%',
            onEnter: (e) => {
              setTimeout(() => {
                tl1.play()
              },500)
            }
          }
        })

        spListitems.forEach(
          _el => {
            tl1.to(_el, {
              opacity:1,
              x:0,
              y:0,
              duration:.7,
            }, '-=.2')
          }
        )
      },1000)
    },imgs.value)

  })
  
})

onUnmounted(() => {
  // console.log('clean')
  ctx1.revert();
  ctx2.revert();

})
</script>

<template>
  <main class="site-main about page">
    <div class="breadContainer">
      <div class="breadList tw-flex tw-justify-end">
        <NuxtLink :to="`/`">ホーム</NuxtLink>
        <span class="arr tw-block tw-px-2">&gt;</span>
        <span class="txt current">SPグループの強み</span>
      </div>
    </div>
    <header class="ttlContainer tw-px-8 tw-relative">
      <div class="ttlContainer__inner u_mx">
        <p :class="`ttlContainer-ttl ${ttl_view}`">
          <span class="txt tw-block anm_t"><span>OUR</span></span>
          <span class="txt tw-block anm_t d2"><span>ADVANTAGE</span></span>
        </p>
        <h2 class="ttlContainer-txt tw-font-semibold">SPグループの強み</h2>
      </div>
      <p class="header-txt u_mx tw-mt-12 md:tw-mt-16">販売部門、倉庫部門、運送部門、人材紹介部門…<br>
      お客様の夢（ビジネス）を実現するための<br>
      トータルサポート体制がここにはあります。</p>
    </header>
    <article class="secContainer">
      <section class="sec sec1 angle u_px" ref="imgs">
        <div class="sec__inner u_mx">
          <div class="imageContainer tw-relative tw-max-w">
                <h3 class="spTitle">
                  <span class="txt">トータルサポート</span>
                  <NuxtLink :to="`/company#gp1`" class="link">
                    <img src="@/assets/images/page/img_company_sec3_list_ttl_01.png" alt="株式会社セブンピース" height="24">
                    <SvgAngleRight />
                  </NuxtLink>
                </h3>
                <ul class="spList tw-absolute tw-top-0 tw-right-0 tw-bottom-0 tw-left-0">
                  <li class="spList-item item1">
                    <h4 class="sp-ttl">ソリューション</h4>
                    <p class="sp-txt">販売提案営業<br>書類作成代行<br>設置代行</p>
                    <div class="l_image">
                      <NuxtLink :to="`/company#gp3`" class="link">
                        <img src="@/assets/images/page/img_company_sec3_list_ttl_03.png" alt="株式会社ココプランニング" height="24">
                        <SvgAngleRight />
                        </NuxtLink>
                      <NuxtLink :to="`/company#gp4`" class="link">
                        <img src="@/assets/images/page/img_company_sec3_list_ttl_04.png" alt="株式会社ソリッド" height="24">
                        <SvgAngleRight />
                        </NuxtLink>
                    </div>
                  </li>
                  <li class="spList-item item2">
                    <h4 class="sp-ttl">ロジスティック</h4>
                    <p class="sp-txt">システム管理<br>（SP.Ⅱシステム）<br>保管管理業務<br>洗浄・メンテナンス</p>
                    <div class="l_image">
                      <NuxtLink :to="`/company#gp1`" class="link">
                        <img src="@/assets/images/page/img_company_sec3_list_ttl_01.png" alt="株式会社セブンピース" height="24">
                        <SvgAngleRight />
                        </NuxtLink>
                    </div>
                  </li>
                  <li class="spList-item item3">
                    <h4 class="sp-ttl">トランスポート</h4>
                    <p class="sp-txt">精密機器配送</p>
                    <div class="l_image">
                      <NuxtLink :to="`/company#gp2`" class="link">
                        <img src="@/assets/images/page/img_company_sec3_list_ttl_02.png" alt="株式会社セブンピースロジスティック" height="24">
                        <SvgAngleRight />
                        </NuxtLink>
                    </div>
                  </li>
                  <li class="spList-item item4">
                    <h4 class="sp-ttl">キャリア</h4>
                    <p class="sp-txt">人材紹介<br>人材派遣</p>
                    <div class="l_image">
                      <NuxtLink :to="`https://sp-career.com/`" class="link" target="_blank">
                        <img src="@/assets/images/page/img_company_sec3_list_ttl_05.png" alt="SPキャリア.com" height="24">
                        <SvgAngleRight />
                        </NuxtLink>
                    </div>
                  </li>
                </ul>
              </div>
        </div>
      </section>
      <section class="sec sec2 u_px" ref="elm">
        <div class="sec__inner u_mx">
          <article class="box md:tw-flex">
            <div class="txtContainer">
              <header class="box__header">
                <h3 class="box__header-ttl"><span class="txt">ソリューション</span><span class="bgttl"></span></h3>
              </header>
              <p class="box-txt tw-mt-12">新台がわずか一週間で中古台と位置づけられるなど、その市場は刻一刻と変化しています。まさに遊技機の導入や転売は、ホールの経営を左右する大きなポイントです。<br>
              SPグループでは、年間約80,000台もの遊技機の流通を手がけています。その経験から、さまざまなノウハウを蓄積。<br>
              いち早い対応で、ホール様や販社様の利益に貢献できる体制を整えています。中古遊技機販売はもちろん、新台販売も行っています。</p>
              <div class="lg_image tw-flex tw-gap-12 tw-py-12">
                <img src="@/assets/images/page/img_group_3.png" alt="KOKO PLANNING" width="129">
                <img src="@/assets/images/page/img_group_2.png" alt="SOLID" width="107">
              </div>
              <div class="btnContainer tw-text-right">
                <NuxtLink :to="`/solution`" class="btnContainer-btn bl">事業案内はこちら</NuxtLink>
              </div>
            </div>
            <div class="image u_pc">
              <img src="@/assets/images/page/img_about_sec2_1.jpg" alt="">
            </div>
          </article>
          <article class="box md:tw-flex">
            <div class="txtContainer">
              <header class="box__header">
                <h3 class="box__header-ttl"><span class="txt">ロジスティック</span><span class="bgttl"></span></h3>
              </header>
              <p class="box-txt tw-mt-12">SPグループは、床面積約2500㎡の川崎倉庫（保管可能台数約30,000台）と約1200㎡の埼玉倉庫（保管可能台数約4,000台）を有しています。セコムカメラによる24時間のセキュリティ体制が、安心の保管台管理を実現。独自の在庫管理システムとプロフェッショナルな倉庫作業でミスなく、確実な流通へ展開することが可能です。<br>
              また、ロジスティクとの連動によって、臨機応変にスピーディな納品や転売を行うことができます。</p>
              <div class="lg_image tw-flex tw-gap-12 tw-py-12">
                <img src="@/assets/images/page/img_group_1.png" alt="SEVEN PEACE" width="163">
              </div>
              <div class="btnContainer tw-text-right">
                <NuxtLink :to="`/logistic`" class="btnContainer-btn bl">事業案内はこちら</NuxtLink>
              </div>
            </div>
            <div class="image u_pc">
              <img src="@/assets/images/page/img_about_sec2_2.jpg" alt="">
            </div>
          </article>
          <article class="box md:tw-flex">
            <div class="txtContainer">
              <header class="box__header">
                <h3 class="box__header-ttl"><span class="txt">トランスポート</span><span class="bgttl"></span></h3>
              </header>
              <p class="box-txt tw-mt-12">遊運協に加盟し、プロのスタッフによる遊技機および関連部品を全国に配送。<br>
              たとえば、メーカーごとに新台の納品を行うことは、輸送コストに大きな無駄が生まれてしまいます。SPグループでは、複数のメーカーの遊技機を同時に納品。輸送コストが大幅に削減できます。また、搬入時の煩雑な納品手続きも一度で済むため、これまでにないスムーズな納品が実現します。</p>
              <div class="lg_image tw-flex tw-gap-12 tw-py-12">
                <img src="@/assets/images/page/img_group_4.png" alt="SEVEN PEACE LOGISTIC" width="167">
              </div>
              <div class="btnContainer tw-text-right">
                <NuxtLink :to="`/transport`" class="btnContainer-btn bl">事業案内はこちら</NuxtLink>
              </div>
            </div>
            <div class="image u_pc">
              <img src="@/assets/images/page/img_about_sec2_3.jpg" alt="">
            </div>
          </article>
          <article class="box md:tw-flex">
            <div class="txtContainer">
              <header class="box__header">
                <h3 class="box__header-ttl"><span class="txt">キャリア</span><span class="bgttl"></span></h3>
              </header>
              <p class="box-txt tw-mt-12">SPグループはパチンコ業界の様々な分野でお取引させていただいてます。<br>
              メーカー様、ホール様、販社様、運送会社様、その繋がりやコミュニティーは他の人材紹介会社には無い独自の強み(交渉力、提案力)だと自負しております。<br>
              今後のキャリア形成、人生プランを描く際、必ずお力になれます。</p>
              <div class="lg_image tw-flex tw-gap-12 tw-py-12">
                <img src="@/assets/images/page/img_group_5.png" alt="SPキャリア.com" width="119">
              </div>
              <div class="btnContainer tw-text-right">
                <NuxtLink :to="`https://sp-career.com/`" target="_blank" class="btnContainer-btn bl">事業案内はこちら</NuxtLink>
              </div>
            </div>
            <div class="image u_pc">
              <img src="@/assets/images/page/img_about_sec2_4.jpg" alt="">
            </div>
          </article>
        </div>
      </section>
      <CompanyInfo :types="type" />
    </article>
  </main>
</template>

<style lang="scss" scoped>
.ttl{
  
}
.content{

}
</style>
