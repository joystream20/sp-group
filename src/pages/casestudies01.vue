<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';

useHead({
  title: 'パチンコホール経営のA法人の事例 | SPグループ',
  meta:[
    {name: 'description', content:'弊社契約後は、セブンピース倉庫に一括管理を行い、撤去台・備品保管を行っています。また、新台はメーカーの運送会社からセブンピース倉庫に全店分を一括で納品。中古台や備品等も合わせて、セブンピースロジスティックが各ホール様へ配送しています。'}
  ]
})

const emit = defineEmits(['p_type'])

const ttl_view = ref<string>('')
let _cnt = 0;
onMounted(() => {
  emit('p_type', 'case_studies case1')
  console.log('monted')

  setTimeout(() => {
    ttl_view.value = 'on'
  }, 1500)

})


</script>

<template>
  <main class="site-main case_studies page h_image case1">
    <div class="breadContainer">
      <div class="breadList tw-flex tw-justify-end">
        <NuxtLink :to="`/`">ホーム</NuxtLink>
        <span class="arr tw-block tw-px-2">&gt;</span>
        <span class="txt current">パチンコホール経営のA法人の事例</span>
      </div>
    </div>
    <header class="ttlContainer tw-px-8 tw-relative angle_b_t">
      <div class="ttlContainer__inner u_mx">
        <p :class="`ttlContainer-ttl ${ttl_view}`">
          <span class="txt tw-block anm_t"><span>CASE</span><span>STUDIES</span></span>
        </p>
        <h2 class="ttlContainer-txt tw-font-semibold">パチンコホール経営のA法人の事例</h2>
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
            <p class="probContainer-txt">SPグループに依頼する以前、A法人様では撤去台の保管、備品の保管、購入台の保管の為、各店舗のバックヤードや所有している2つの倉庫に各店舗の判断で台の移動等を行っておりました。<br>
            そのため、保管場所については各店舗の記憶やメモに頼らざるを得ない状況が発生し、店舗使用台の探索は保管の可能性がある全箇所への連絡を強いられてしまい、不要な台や廃棄物も無駄に保管していたのです。<br>
            また、新台の輸送も多数の運送会社から行っており、新台納品にかかる金額的なコストや、運送会社が1日に何回もやってくる為、従業員様の肉体的コスト、また新台を全台把握している運送会社が無い為、店舗様が納品日を勘違いし、入る予定の無い台を設置しようとする等のトラブルも発生しておりました。</p>
          </div>
        </div>
        <div class="solContainer proc ">
            <div class="angle_b_b">
              <div class="proc__inner u_mx">
                <div class="imageContainer tw-text-center">
                  <div class="block">
                    <p class="ttl">SPグループ契約以前</p>
                    <div class="image">
                      <img src="@/assets/images/case/img_case1_1.png" width="790" alt="">
                    </div>
                    <p class="txt">台の把握ができず、無駄なコストが発生！</p>
                  </div>
                  <div class="block">
                    <p class="ttl _sp">すべての業務をSPグループに依頼</p>
                    <div class="image">
                      <img src="@/assets/images/case/img_case1_2.png" width="480" alt="">
                    </div>
                    <p class="txt">保管台を正確に把握！<br>
                    新台運送会社の統一でコスト削減！</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="solListContainer tw-text-center u_mx">
              <dl class="solList tw-bg-white tw-inline-block tw-text-left">
                <dt>課題解決のために行った業務</dt>
                <dd>
                  <ul class="list">
                    <li class="list-item">セブンピース倉庫に一括管理</li>
                    <li class="list-item">新台・中古遊技機販売</li>
                    <li class="list-item">中古機売買・廃棄処理</li>
                    <li class="list-item">新台・中古台書類作成</li>
                    <li class="list-item">遊技機台洗浄</li>
                    <li class="list-item">遊技機設置業務</li>
                    <li class="list-item">セブンピースロジスティックが運送</li>
                    <li class="list-item">クリアセブンを導入しリアルタイムで遊技機の情報を把握</li>
                  </ul>
                </dd>
              </dl>
              <p class="solContainer-txt tw-text-left">弊社契約後は、セブンピース倉庫に一括管理を行い、撤去台・備品保管を行っています。また、新台はメーカーの運送会社からセブンピース倉庫に全店分を一括で納品。中古台や備品等も合わせて、セブンピースロジスティックが各ホール様へ配送しています。<br>
              さらに、遊技台をシステムで管理することにより、設置されている遊技台の情報、そして倉庫に保管されている遊技台の情報が、本社様、店舗様でもリアルタイムに把握できるようになりました。 同時に、各ホール様でも把握できる環境を構築し、倉庫には常に必要なものだけが保管されているという状況を作り出しました。管理が簡単で、しかも無駄を省くことができるため、大幅なコスト削減をもたらしています。また、このシステムを使用した中古機の転売も実施。より早い段階での中古機転売が、ホール様への利益を創出し、経営に大きく貢献しています。<br>
              撤去台のチェーン店移動書類も、撤去翌日にはQRコードが読み取れるため、きわめてスムーズです。</p>
            </div>
          </div>
          <div class="resContainer proc u_px">
          <div class="proc__inner u_mx">
            <dl class="resList">
              <dt>SPグループの業務によって<span class="u_nw">生み出した効果</span></dt>
              <dd>
                <ol class="list">
                  <li class="list-item"><span class="txt">自社倉庫家賃や維持費＋運搬配送費＝無駄な経費が半分～１／３に軽減</span></li>
                  <li class="list-item"><span class="txt">中古機転売による収入</span></li>
                  <li class="list-item"><span class="txt">必要ないものを廃棄することにより、倉庫費を軽減。</span></li>
                  <li class="list-item"><span class="txt">システムによる管理により、まちがいない台番号を確認でき、欠品状況もリアルタイムの確認が可能</span></li>
                  <li class="list-item"><span class="txt">早いチェーン店移動が可能</span></li>
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
