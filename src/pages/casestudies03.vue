<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';

useHead({
  title: '飲食店経営C社様の事例 | SPグループ',
  meta:[
    
  ]
})

const emit = defineEmits(['p_type'])

const ttl_view = ref<string>('')
let _cnt = 0;
onMounted(() => {
  emit('p_type', 'case_studies case3')
  // console.log('monted')

  setTimeout(() => {
    ttl_view.value = 'on'
  }, 1500)

})


</script>

<template>
  <main class="site-main case_studies page h_image case3">
    <div class="breadContainer">
      <div class="breadList tw-flex tw-justify-end">
        <NuxtLink :to="`/`">ホーム</NuxtLink>
        <span class="arr tw-block tw-px-2">&gt;</span>
        <span class="txt current">飲食店経営C社様の事例</span>
      </div>
    </div>
    <header class="ttlContainer tw-px-8 tw-relative angle_b_t">
      <div class="ttlContainer__inner u_mx">
        <p :class="`ttlContainer-ttl ${ttl_view}`">
          <span class="txt tw-block anm_t"><span>CASE</span><span>STUDIES</span></span>
        </p>
        <h2 class="ttlContainer-txt tw-font-semibold">飲食店経営C社様の事例</h2>
      </div>
    </header>
    <article class="secContainer">
      <div class="sec sec1 ">
        <div class="probContainer proc">
          <div class="proc__inner u_mx">
            <div class="probListContainer tw-text-center">
              <dl class="probList tw-bg-white tw-inline-block tw-text-left">
                <dt>課題</dt>
                <dd>
                  <ul class="list">
                    <li class="list-item">ムダな保管備品を抱えてしまっている</li>
                    <li class="list-item">運送車両の不足による非効率的な配送</li>
                    <li class="list-item">イベント等での大量車両の確保が出来ない</li>
                  </ul>
                </dd>
              </dl>
            </div>
            <p class="probContainer-txt">飲食店経営のC社様では自店倉庫を持っておらず、店舗のバックヤードに備品類は保管するか、廃棄するかの2択を常に判断する必要があり、保管資材の有効活用ができておりませんでした。<br>
            また店舗数が多数あるが、食品加工場は1つしかない為、毎日の定期便を自車で行うために必要なサイズの車両が足りず遠方であっても、加工場とのピストン運行が必要になり、ルート配送の効率は店舗数が増えるごとに悪化していきました。</p>
          </div>
        </div>
        <div class="solContainer proc ">
            <div class="angle_b_b">
              <div class="proc__inner u_mx">
                <div class="imageContainer tw-text-center">
                  <div class="block">
                    <p class="ttl">SPグループ契約以前</p>
                    <div class="image">
                      <img src="@/assets/images/case/img_case3_1.png" width="660" alt="">
                    </div>
                    <p class="txt">ルート配送の為の車両が足りず、食品工場と店舗を何回も往復…<br>
                    バックヤードの備品管理を店舗主導で行っている為<br class="u_pc">
                    本社で一括管理できず…</p>
                  </div>
                  <div class="block">
                    <p class="ttl _sp">すべての業務をSPグループに依頼</p>
                    <div class="image">
                      <img src="@/assets/images/case/img_case3_2.png" width="660" alt="">
                    </div>
                    <p class="txt">ルート配送にセブンピースのトラックを使用、<br class="u_sp">効率的な配送が可能に<br>
                    バックヤードに保管していた備品を<br class="u_sp">SP倉庫で一元管理。保管備品が明瞭に！</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="solListContainer tw-text-center u_mx">
              <dl class="solList tw-bg-white tw-inline-block tw-text-left">
                <dt>課題解決のために行った業務</dt>
                <dd>
                  <ul class="list">
                    <li class="list-item">セブンピース倉庫で備品類を保管、必要に応じて店舗への配送</li>
                    <li class="list-item">セブンピースロジスティック所有の冷蔵トラックを使用し、毎日のルート配送</li>
                    <li class="list-item">季節イベント等で各店舗への大型納品があった場合、必要な配送トラックを手配</li>
                  </ul>
                </dd>
              </dl>
              <p class="solContainer-txt tw-text-left">セブンピースで店舗様でしばらく使用予定の無い備品を全て保管し、正確な在庫票をC社本社様に送信、本社様で備品を全て精査し必要な備品だけを残して全て廃棄をしました。<br>
              また、セブンピースロジスティック所有の冷蔵トラックで定期ルート配送を行うようになり、店舗様への納品効率がアップしました。<br>
              クリスマス等のイベントではルート便とは別にお客様からの依頼で配送トラックを手配し、イベントが滞らない用にご協力致しました。</p>
            </div>
          </div>
          <div class="resContainer proc u_px">
          <div class="proc__inner u_mx">
            <dl class="resList">
              <dt>SPグループの業務によって<span class="u_nw">生み出した効果</span></dt>
              <dd>
                <ol class="list">
                  <li class="list-item"><span class="txt">保管備品を本社一括で把握でき、ロスや無駄の削減に成功</span></li>
                  <li class="list-item"><span class="txt">冷蔵トラックによるルート配送による効率的な納品</span></li>
                  <li class="list-item"><span class="txt">イベント等で大量の車両が必要な際も、確保が可能に</span></li>
                </ol>
              </dd>
            </dl>
          </div>
        </div>
        <div class="sec slideContainer ">
          <div class="header">
            <h3 class="header-ttl">その他事例</h3>
          </div>
         <div class="slideContainer__inner u_mx">
           <Slider />
         </div>
        </div>
      </div>
        
     
    </article>
  </main>
</template>

<style lang="scss" scoped>
.ttl{
  
}
.content{

}
</style>
