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
  <main class="site-main history page">
    <div class="breadContainer">
      <div class="breadList tw-flex tw-justify-end">
        <NuxtLink :to="`/`">ホーム</NuxtLink>
        <span class="arr tw-block tw-px-2">&gt;</span>
        <NuxtLink :to="`/company`">企業情報</NuxtLink>
        <span class="tw-block tw-px-2">-</span>
        <span class="txt current">SPグループの歴史</span>
      </div>
    </div>
    <header class="ttlContainer tw-px-8 tw-relative">
      <div class="ttlContainer__inner u_mx">
        <h2 :class="`ttlContainer-ttl ${ttl_view}`">
          <span class="txt tw-block anm_t"><span>COMPANY</span></span>
          <span class="txt tw-block anm_t d2"><span>INFO</span></span>
        </h2>
        <p class="ttlContainer-txt tw-font-semibold">SPグループの歴史</p>
      </div>
    </header>
    <article class="secContainer">
      <div class="sec angle fst"></div>
      <section class="sec sec1 ">
        <div class="sec1-txtContainer u_mx">
          <p class="txt tw-px-8">SPグループは、創業から着実に成長を遂げてきました。<br>
          それは、お客様のニーズと信頼に応える足跡でもありました。</p>
        </div>
        <div class="sec__inner u_mx angle_b_b">
          <dl class="hisList u_mx1000">
           <div class="hisList-block">
            <dt><span class="num">2007</span>年</dt>
            <dd>
              <h3 class="hisList-ttl tw-font-semibold tw-text-3xl">（株）セブンピース創業</h3>
              <p class="hisList-txt">遵技機の中古売買をメインの業務として、神奈川県藤沢を拠点に7名によるスタートでした。<br>
              現代表の独立に、それまでお付き合いのあったお客様が顧客となって、支えていただいたという経緯がありました。<br>
              その顧客様のスペシャルパートナーであるために…これが、SPグループの始まりだったのです。</p>
              <div class="image">
                <img src="@/assets/images/page/img_group_1.png" alt="SEVEN PEACE" width="221">
              </div>

              <h3 class="hisList-ttl tw-font-semibold tw-text-3xl">倉庫の自社保有</h3>
              <p class="hisList-txt">中古台の売買を行う際の遊技機台の発送は、他社の専門業者に依頼をしていました。 しかし、お客様のニーズに迅速にお応えするためにも、同時に、さらなる事業の発展を目指すためにも、倉庫を自社で保有することが不可欠と考え神奈川県川崎に倉庫を開設しました。</p>
            </dd>
           </div>
           <div class="hisList-block">
            <dt><span class="num">2008</span>年</dt>
            <dd>
              <h3 class="hisList-ttl tw-font-semibold tw-text-3xl">遊技機管埋システム クリアセブン開発</h3>
              <p class="hisList-txt">中古台の売買を行う際の遊技機台の発送は、他社の専門業者に依頼をしていました。 しかし、お客様のニーズに迅速にお応えするためにも、同時に、さらなる事業の発展を目指すためにも、倉庫を自社で保有することが不可欠と考え神奈川県川崎に倉庫を開設しました。</p>
            </dd>
           </div>
           <div class="hisList-block">
            <dt><span class="num">2009</span>年</dt>
            <dd>
              <h3 class="hisList-ttl tw-font-semibold tw-text-3xl">M&amp;Aにより（株）ココプランニングが参入</h3>
              <p class="hisList-txt">遊技機のチェーン店移動、転売や撒去には、さまざまな書類が必要です。<br>
              書類の作成は非常に煩雑で、お客様は対応に苦慮していました。そこで、書類作成を代行するサービスとして、 回胴式遊技機商業協同組合に加盟しているココプランニングとタッグを組み、在庫保管倉庫と書類作成を連動させる事で、迅速な対応が可能になりお客檬に大変喜ばれています。</p>
              <div class="image">
                <img src="@/assets/images/page/img_group_3.png" alt="KOKO PLANNING" width="182">
              </div>
            </dd>
           </div>
           <div class="hisList-block">
            <dt><span class="num">2010</span>年</dt>
            <dd>
              <h3 class="hisList-ttl tw-font-semibold tw-text-3xl">埼玉営業所設立</h3>
              <p class="hisList-txt">埼玉・東京を中心に展開されているホール様の運営を円滑に行えるよう、 また、運送会社との連携も考え、埼玉に営業所を設立。保管管理はもちろん、中古機の販売もスムーズに行えるようになりました。ホール～連送～倉庫の導線を整理する事で経費削減にも実現でき、大変喜ばれました。</p>
              <h3 class="hisList-ttl tw-font-semibold tw-text-3xl">（株）セブンピースロジスティック設立</h3>
              <p class="hisList-txt">新台・中古台をホール様に納品する場合、スピーディであることはもちろん、納品の曜日や時間指定など、臨機応変の対応が望まれています。輪送を自社で行うことによって、速やかな納品を実現したい。そうした思いから、自社によるロジスティク業務を開始しました。</p>
              <div class="image">
                <img src="@/assets/images/page/img_group_4.png" alt="SEVEN PEACE LOGISTIC" width="215">
              </div>
            </dd>
           </div>
           <div class="hisList-block">
            <dt><span class="num">2011</span>年</dt>
            <dd>
              <h3 class="hisList-ttl tw-font-semibold tw-text-3xl">東日本遊技機商業協同組合加盟</h3>
              <p class="hisList-txt">スロットだけではなく、バチンコの書類も出来る事がお客様のご要望にもっとお答えできるという想いから、東日本遊技機商業協同組合にココプランニングが加盟しました。これを機に、遊技機全体の強化を図り、いつでも瞬時に対応できるようになり、ホール様へ中古機を販売するというサービスも増えました。</p>
              <h3 class="hisList-ttl tw-font-semibold tw-text-3xl">（株）ソリッド設立</h3>
              <p class="hisList-txt">東北大地震があり、会社の安定とより強固なものにするために九州福岡に拠点を設けました。新台と中古機販売をメインとしたサービスを行い、長年業界に精遍した人材で、地元を中心に展開されているホール様へ培ったノウハウをご提案しています。</p>
              <div class="image">
                <img src="@/assets/images/page/img_group_2.png" alt="SOLID" width="152">
              </div>
            </dd>
           </div>
           <div class="hisList-block">
            <dt><span class="num">2012</span>年</dt>
            <dd>
              <h3 class="hisList-ttl tw-font-semibold tw-text-3xl">遊技機運送事業協同組合加盟</h3>
              <p class="hisList-txt">お客様の大切な遊技機を扱う以上、遊技機運送事業で関わる不正行為及び遊技機の不法廃棄等を徘除し、安心してお任せ頂けるよう同組合に加盟いたしました。今後、更なる事業拡大には、まずは信頼と安心が不可欠だと考えての事でした。</p>
            </dd>
           </div>
           <div class="hisList-block">
            <dt><span class="num">2014</span>年</dt>
            <dd>
              <h3 class="hisList-ttl tw-font-semibold tw-text-3xl">日本遊技関連事業協会に加盟</h3>
              <p class="hisList-txt">ホール、遊技機メーカー、販売商社、設備機器メーカー、最品卸、その他遊技業に関連した企業が参加する、唯一の業界横断的組織に加盟しました。<br>
              新時代に相応しいパチンコ・パチスロ産業の基盤造りにSPグループも一役買えるよう、積極的に支援しています。</p>
            </dd>
           </div>
           <div class="hisList-block">
            <dt><span class="num">2016</span>年</dt>
            <dd>
              <h3 class="hisList-ttl tw-font-semibold tw-text-3xl">本社移転</h3>
              <p class="hisList-txt">リニア開業により、東京の玄園口が品川になることを見据え移転することになりました。<br>
              また、複数ヵ所に分かれていたグループ会社の本社機能を集約させることにより、グループ全体の業務強化を行い、更なる効率化を図ってまいります。</p>
            </dd>
           </div>
           <div class="hisList-block">
            <dt><span class="num">2022</span>年</dt>
            <dd>
              <h3 class="hisList-ttl tw-font-semibold tw-text-3xl">本社移転</h3>
              <p class="hisList-txt">リニア開業により、東京の玄園口が品川になることを見据え移転することになりました。<br>
              また、複数ヵ所に分かれていたグループ会社の本社機能を集約させることにより、グループ全体の業務強化を行い、更なる効率化を図ってまいります。</p>
            </dd>
           </div>
           <div class="hisList-block">
            <dt><span class="num">2023</span>年</dt>
            <dd>
              <h3 class="hisList-ttl tw-font-semibold tw-text-3xl">本社移転</h3>
              <p class="hisList-txt">リニア開業により、東京の玄園口が品川になることを見据え移転することになりました。<br>
              また、複数ヵ所に分かれていたグループ会社の本社機能を集約させることにより、グループ全体の業務強化を行い、更なる効率化を図ってまいります。</p>
            </dd>
           </div>
          </dl>
        </div>
      </section>
      <div class="btnContainer u_mx tw-text-right tw-mt-24 u_px">
        <p class="txt tw-text-center tw-mb-16"><span class="inner tw-text-left tw-inline-block tw-font-semibold u_col1 tw-text-4xl">これからも私たちは、<br>お客様と共に夢を現実に導く為の企業であり続けます。</span></p>
        <NuxtLink :to="`/company`" class="btnContainer-btn bl">企業情報に戻る</NuxtLink>
      </div>
      <CompanyInfo :types="info_type" />
    </article>
    
  </main>
</template>
