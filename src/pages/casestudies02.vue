<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';

useHead({
  title: '建築資材専門商社Bの事例 | SPグループ',
  meta:[]
})

const emit = defineEmits(['p_type'])

const ttl_view = ref<string>('')
let _cnt = 0;
onMounted(() => {
  emit('p_type', 'case_studies case2')
  console.log('monted')

  setTimeout(() => {
    ttl_view.value = 'on'
  }, 1500)

})


</script>

<template>
  <main class="site-main case_studies page h_image case2">
    <div class="breadContainer">
      <div class="breadList tw-flex tw-justify-end">
        <NuxtLink :to="`/`">ホーム</NuxtLink>
        <span class="arr tw-block tw-px-2">&gt;</span>
        <span class="txt current">建築資材専門商社Bの事例</span>
      </div>
    </div>
    <header class="ttlContainer tw-px-8 tw-relative angle_b_t">
      <div class="ttlContainer__inner u_mx">
        <p :class="`ttlContainer-ttl ${ttl_view}`">
          <span class="txt tw-block anm_t"><span>CASE</span><span>STUDIES</span></span>
        </p>
        <h2 class="ttlContainer-txt tw-font-semibold">建築資材専門商社Bの事例</h2>
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
                    <li class="list-item">自社倉庫維持費がかかる</li>
                    <li class="list-item">運搬コストが高い</li>
                    <li class="list-item">不要な台の無駄な保管</li>
                  </ul>
                </dd>
              </dl>
            </div>
            <p class="probContainer-txt">SPグループに依頼する以前、B社様では地域ごとの拠点を持っておらず、本社倉庫からすべてのお客様へ自車トラックで配送しておりました。<br>
            その結果、輸送コストが大幅にかかり、車両数の不足などの要因も関係し納品遅延等のトラブルをかかえていました。</p>
          </div>
        </div>
        <div class="solContainer proc ">
            <div class="angle_b_b">
              <div class="proc__inner u_mx">
                <div class="imageContainer tw-text-center">
                  <div class="block">
                    <p class="ttl">SPグループ契約以前</p>
                    <div class="image">
                      <img src="@/assets/images/case/img_case2_1.png" width="660" alt="">
                    </div>
                    <p class="txt">遠方への輸送でコスト増大<br>必要車両の確保が困難で輸送遅トラブルも…</p>
                  </div>
                  <div class="block">
                    <p class="ttl _sp">すべての業務をSPグループに依頼</p>
                    <div class="image">
                      <img src="@/assets/images/case/img_case2_2.png" width="660" alt="">
                    </div>
                    <p class="txt">セブンピース倉庫を神奈川県内への納品拠点に<br>
                    多種多様な車両を確保している為、スムーズな納品も可能<br>
                    定期的な棚卸で在庫ロスも減少</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="solListContainer tw-text-center u_mx">
              <dl class="solList tw-bg-white tw-inline-block tw-text-left">
                <dt>課題解決のために行った業務</dt>
                <dd>
                  <ul class="list">
                    <li class="list-item">セブンピース倉庫で関東地方納品商品を保管管理</li>
                    <li class="list-item">セブンピースロジスティック所有の車両で納品</li>
                    <li class="list-item">定期的に保管商品の棚卸を行い、B社様に報告</li>
                  </ul>
                </dd>
              </dl>
              <p class="solContainer-txt tw-text-left">まず、セブンピース川崎営業所でB社様の商品をお預かりし、そこを拠点として活用してもらい、関東のお客様への納品を行っていただきました。<br>
              その後、セブンピースロジスティックへご依頼いただき、弊社車両で関東のお客様への納品を行うようになりました。<br>
              その結果、納品コストの削減やスムーズな配送が可能になり、またGPSでの車両管理を行っている為、万一のトラブルが発生した際もスムーズにご対応をさせていただく事ができました。</p>
            </div>
          </div>
          <div class="resContainer proc u_px">
          <div class="proc__inner u_mx">
            <dl class="resList">
              <dt>SPグループの業務によって<span class="u_nw">生み出した効果</span></dt>
              <dd>
                <ol class="list">
                  <li class="list-item"><span class="txt">セブンピース倉庫を中継拠点にする事で輸送コストを削減</span></li>
                  <li class="list-item"><span class="txt">セブンピースロジスティック所有の多種多様なトラックにより、納品が難しかったお客様への納品が可能に</span></li>
                  <li class="list-item"><span class="txt">関東での納品ノウハウを持っているセブンピースロジスティックによりトラブル減少</span></li>
                  <li class="list-item"><span class="txt">GPSによる車両の所在地を完璧に把握、遅延等の対処がリアルタイムで行えるように</span></li>
                  <li class="list-item"><span class="txt">定期的な棚卸で商品数も正確に把握</span></li>
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
