<script setup lang="ts">
import { onMounted } from 'vue';
const type:string = "company"
const info_type:string = "advantage"
const emit = defineEmits(['p_type'])

const ttl_view = ref<String>('')

onMounted(() => {
  emit('p_type', 'company')
  nextTick(() => {
    setTimeout(() => {
      ttl_view.value = 'on'
    },1500)
  })
})

</script>
<template>
  <main class="site-main philosophy page">
    <div class="breadContainer">
      <div class="breadList tw-flex tw-justify-end">
        <NuxtLink :to="`/`">ホーム</NuxtLink>
        <span class="arr tw-block tw-px-2">&gt;</span>
        <NuxtLink :to="`/company`">企業情報</NuxtLink>
        <span class="tw-block tw-px-2">-</span>
        <span class="txt current">経営理念</span>
      </div>
    </div>
    <header class="ttlContainer tw-px-8 tw-relative">
      <div class="ttlContainer__inner u_mx">
        <h2 :class="`ttlContainer-ttl ${ttl_view}`">
          <span class="txt tw-block anm_t"><span>COMPANY</span></span>
          <span class="txt tw-block anm_t d2"><span>INFO</span></span>
        </h2>
        <p class="ttlContainer-txt tw-font-semibold">経営理念</p>
      </div>
    </header>
    <article class="secContainer">
      <section class="sec sec1 angle">
        <div class="sec__inner u_mx tw-text-center">
          <div class="sec__container tw-text-left tw-inline-block">
            <h2 class="ttl tw-font-semibold">
              私たちは、夢を現実に導く為の企業であり続けます。
            </h2>
            <dl class="phList">
            <div class="phList-box tw-flex max-md:tw-flex-col  md:tw-items-center tw-mb-8">
              <dt class="tw-font-semibold"><span class="num tw-text-3xl">1.</span>お客様がいる幸せ</dt>
              <dd class="max-md:tw-mt-3">お客様と共にビジネスが出来る幸せ</dd>
            </div>
            <div class="phList-box tw-flex max-md:tw-flex-col  md:tw-items-center tw-mb-8">
              <dt class="tw-font-semibold"><span class="num tw-text-3xl">2.</span>仕事がある幸せ</dt>
              <dd class="max-md:tw-mt-3">ビジネスを通じて共に進める幸せ</dd>
            </div>
            <div class="phList-box tw-flex max-md:tw-flex-col  md:tw-items-center tw-mb-8">
              <dt class="tw-font-semibold"><span class="num tw-text-3xl">3.</span>仲間がいる幸せ</dt>
              <dd class="max-md:tw-mt-3">仲間と共に道を進んで行ける幸せ</dd>
            </div>
            <div class="phList-box tw-flex max-md:tw-flex-col  md:tw-items-center tw-mb-8">
              <dt class="tw-font-semibold"><span class="num tw-text-3xl">4.</span>お客様と共に喜べる幸せ</dt>
              <dd class="max-md:tw-mt-3">お客様と共に達成し喜びあえる幸せ</dd>
            </div>
            <div class="phList-box tw-flex max-md:tw-flex-col  md:tw-items-center tw-mb-8">
              <dt class="tw-font-semibold"><span class="num tw-text-3xl">5.</span>希望がある幸せ</dt>
              <dd class="max-md:tw-mt-3">希望を持って共に進んで行ける幸せ</dd>
            </div>
            <div class="phList-box tw-flex max-md:tw-flex-col  md:tw-items-center tw-mb-8">
              <dt class="tw-font-semibold"><span class="num tw-text-3xl">6.</span>感謝出来る幸せ</dt>
              <dd class="max-md:tw-mt-3">感謝を共にしあえる幸せ</dd>
            </div>
            <div class="phList-box tw-flex max-md:tw-flex-col  md:tw-items-center tw-mb-8">
              <dt class="tw-font-semibold"><span class="num tw-text-3xl">7.</span>実行出来る幸せ</dt>
              <dd class="max-md:tw-mt-3">実行を共に遂行出来る幸せ</dd>
            </div>
           </dl>
           <p class="txt tw-font-semibold md:tw-text-2xl tw-mt-8">７つの想いを胸に大切なお客様と共に歩みます。</p>
          </div>
        </div>
      </section>
      <section class="sec sec2 u_px">
        <div class="sec__inner u_mx1000">
          <div class="sec__container">
            <h2 class="ttl tw-font-semibold tw-text-xl">目標</h2>
            <ul class="tgtList tw-font-semibold tw-mt-8">
              <li class="tgtList-item tw-mb-12 md:tw-mb-4">お客様にとって必要とされる存在を目標にしています</li>
              <li class="tgtList-item tw-mb-12 md:tw-mb-4">お客様にとって[プロ]として認められる存在を目標にしています</li>
              <li class="tgtList-item tw-mb-12 md:tw-mb-4">お客様にとって総合プロデュースを任される存在を目標にしています</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="sec sec3 tw-mt-24 u_px">
        <div class="sec__inner u_mx1000">
          <div class="sec__container">
            <h2 class="ttl tw-font-semibold tw-text-xl">行動指針</h2>
            <dl class="gidList tw-mt-8">
              <dt class="tw-font-semibold">●お客様への誠実な対応</dt>
              <dd class="tw-mb-16">お客様の「声」に誠実に耳を傾ける姿勢を持ち、これを今後の業務運営に活用します。</dd>
              <dt class="tw-font-semibold">●商品の表示・説明と広告等</dt>
              <dd class="tw-mb-16">お客様に商品等の正しい情報を提供し、お客様への安心と満足をお届けします。</dd>
              <dt class="tw-font-semibold">●守秘義務</dt>
              <dd class="tw-mb-16">守秘すべき情報等は厳重に管理し、正当な理由なく決して他に漏らしません。</dd>
              <dt class="tw-font-semibold">●健全かつ安全な職場の維持</dt>
              <dd class="tw-mb-16">私達は、健全かつ安全な職場環境に関わる社内規則を遵守するとともに、風通しの良い職場を作ります。</dd>
              <dt class="tw-font-semibold">●人権尊重</dt>
              <dd class="tw-mb-16">私達は、性別・年齢・出身地・国籍・人種・民族・信条・宗教・疾病・障害等による差別をせず、人権を尊重し、差別や嫌がらせのない職場の維持に努めます。</dd>
              <dt class="tw-font-semibold">●プライバシー保護</dt>
              <dd class="tw-mb-16">個人のプライバシーを最大限に尊重し、不当に侵害しません。</dd>
              <dt class="tw-font-semibold">●社会貢献</dt>
              <dd class="">会社は良き企業市民とし、より良き会社の実現に努めます。私達一人ひとりは自ら社会貢献について考え、社会貢献に努めます。</dd>
            </dl>
          </div>
        </div>
      </section>
      <div class="btnContainer u_mx tw-text-right tw-mt-20 md:tw-mt-36 u_px">
        <NuxtLink :to="`/company`" class="btnContainer-btn bl">企業情報に戻る</NuxtLink>
      </div>
      <CompanyInfo :types="info_type" />
    </article>
    
  </main>
</template>
