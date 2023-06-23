<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';

const emit = defineEmits(['p_type'])

const _current = ref<string>('')

// const navClick = (e) => {
//   const _cur = e.currentTarget
//   const _sib = _cur.closest('.blkNav').querySelectorAll('.blkNav-item')
//   _sib.forEach(
//     (_item, index) => {
//       _item.classList.remove('current')
//     }
//   )
//   _cur.classList.add('current')
// }

const main = ref()
let ctx;

onMounted(() => {
  emit('p_type', 'solution')

  ctx = gsap.context((self) => {
    const blocks = document.querySelectorAll('.blockContainer-block');
    blocks.forEach(
      block => {
        gsap.to(block, {
          scrollTrigger: {
            trigger: block,
            start: 'top 124px',
            onEnter: () => {
              // console.log(block.id + "- enter")
              _current.value = block.id
            },
            onLeave: () => {
              // console.log(block.id + "- leave")
              // _current.value = block.id
            },
            onLeaveBack: () => {
              // console.log(block.id+ "- leaveBack")
              _current.value = block.id
            },
            // markers:true
          }
        })
      }
    )
  })

})

const open = ref(false)
const panel = ref('')
const openUp = (_p:string) => {
  open.value = true
  panel.value = _p
  // console.log(_p)
}
const close = () => {
  open.value = false
  panel.value = ''
}

</script>


<template>
  <main class="site-main solution page h_image">
    <div class="breadContainer">
      <div class="breadList tw-flex tw-justify-end">
        <NuxtLink :to="`/`">ホーム</NuxtLink>
        <span class="arr tw-block tw-px-2">&gt;</span>
        <NuxtLink :to="`/about`">SPグループの強み</NuxtLink>
        <span class="tw-block tw-px-2">-</span>
        <span class="txt current">ソリューション</span>
      </div>
    </div>
    <header class="ttlContainer tw-px-8 tw-relative angle_b_t">
      <div class="ttlContainer__inner u_mx">
        <p class="ttlContainer-ttl">
          <span class="txt tw-block">OUR</span>
          <span class="txt tw-block">ADVANTAGE</span>
        </p>
        <h2 class="ttlContainer-txt tw-font-semibold">ソリューション</h2>
      </div>
      <p class="header-txt u_mx tw-mt-12 md:tw-mt-16">いち早い対応で、ホール様や販売会社様の利益に貢献できる体制を整えています。中古遊技機販売はもちろん、新台販売も行っています。</p>
    </header>
    <article class="secContainer" ref="main">
      
        <section class="sec sec1 angle_b_b u_px30">
          <div class="sec__inner u_mx md:tw-flex">
            <div class="blkNavContainer tw-hidden md:tw-block">
              <ul class="blkNav">
                <li v-bind:class="[ _current === 'sl1' ? 'blkNav-item current': 'blkNav-item']"><NuxtLink to="#sl1" href="#sl1">ノウハウと安心</NuxtLink></li>
                <li v-bind:class="[ _current === 'sl2' ? 'blkNav-item current': 'blkNav-item']"><NuxtLink to="#sl2" href="#sl2">煩雑な書類作成</NuxtLink></li>
                <li v-bind:class="[ _current === 'sl3' ? 'blkNav-item current': 'blkNav-item']"><NuxtLink to="#sl3" href="#sl3">新台購入</NuxtLink></li>
              </ul>
            </div>
            <div class="blockContainer">
              <div id="sl1" class="blockContainer-block md:tw-flex md:tw-flex-row-reverse md:tw-items-center">
                <div class="image">
                  <img src="@/assets/images/page/img_solution_1_1.jpg" alt="">
                </div>
                <div class="txtContainer">
                  <h3 class="ttl tw-text-xl md:tw-text-2xl tw-font-semibold u_col1">大きく貢献できるノウハウと安心</h3>
                  <p class="txt tw-mt-7">SPグループは、年間で約80,000台もの遊技機の売買を行なうなど、大量の販売台数実績を誇っています。<br>
                  大手顧客リストの情報も集積し、情報を販売促進に活用することも可能です。<br>
                  お客様との確かな信頼関係構築を最優先に、刻々と変動する遊技台市場において、有効な対策をご提供します。SPグループには、販売会社様の戦略に大きく貢献できるノウハウと安心があります。</p>
                </div>
              </div>
              <div id="sl2" class="blockContainer-block md:tw-flex md:tw-flex-row-reverse md:tw-items-center">
                <div class="image">
                  <img src="@/assets/images/page/img_solution_1_2.jpg" alt="">
                </div>
                <div class="txtContainer">
                  <h3 class="ttl tw-text-xl md:tw-text-2xl tw-font-semibold u_col1">煩雑な書類作成もお任せ</h3>
                  <p class="txt tw-mt-7">遊技台の売買、撤去、転売などにおいて、さまざまなシーンで書類作成が必要となります。<br>
                  書類作成は非常に煩雑な作業で、人的な労力が求められます。<br>
                  ＳＰグループの倉庫には「取扱主任者」を常駐させており、急な書類作成は他社には真似のできないスピードで対応出来ます。<br>
                  速やかに書類を作成し、ホール様の遊技台戦略をきめ細かくサポート。コストパフォーマンスにも優れたサービスをご提供致します。</p>
                </div>
              </div>
              <div id="sl3" class="blockContainer-block md:tw-flex md:tw-flex-row-reverse md:tw-items-center">
                <div class="image">
                  <img src="@/assets/images/page/img_solution_1_3.jpg" alt="">
                </div>
                <div class="txtContainer">
                  <h3 class="ttl tw-text-xl md:tw-text-2xl tw-font-semibold u_col1">戦略に合わせた新台購入</h3>
                  <p class="txt tw-mt-7">SPグループは、販売代理店としての機能があります。さまざまなメーカーの遊技台を取り扱っているため、ホール様の戦略にあわせて、いろいろなタイプの新台購入が可能となります。<br>
                  最少ロットなどの問題もなく、ご要望にあわせて、フレキシブルに対応することができます。<br>
                  ホールのスペースを最大限活かした遊技台の展開をサポートします。</p>
                </div>
              </div>
            </div>
        
          </div>
        </section>
        <section class="sec sec2 u_px30">
          <div class="sec__inner u_mx1000 ">
            <header class="sec__header">
              <h3 class="sec-ttl tw-text-xl md:tw-text-3xl tw-font-semibold u_col1">SPグループの総合力</h3>
              <p class="sec-txt tw-mt-10">SPグループは、新台・中古台の流通からホール経営まで、ホールの運営に関してあらゆるプロセスのサービスを提供しています。その中で培ってきたノウハウはもちろん、遊技台に関する、さまざまな情報も集積しています。<br>
              販売会社様にとっても、信頼できるビジネスパートナーとして、SPグループの総合力をご活用ください。</p>
            </header>
            <div class="sec__container tw-mt-32 max-md:tw-max-w-lg">
              <div class="procContainer tw-relative">
                <dl class="procList">
                  <div class="procList-item md:tw-flex">
                    <dt class="u_ff4 u_col1 tw-text-center"><span class="en">PROCESS.<span class="num">1</span></span><span class="ja tw-block tw-text-center">遊技機導入</span></dt>
                    <dd>
                      <ul class="chList tw-flex tw-flex-wrap">
                        <li class="chList-item">
                          <a @click="openUp('p1')">新台遊技機販売</a>
                        </li>
                        <li class="chList-item">
                          <a @click="openUp('p2')">中古遊技機販売</a>
                        </li>
                        <li class="chList-item">
                          <a @click="openUp('p3')">書類作成代行</a>
                        </li>
                        <li class="chList-item">
                          <a @click="openUp('p4')">遊技機設置代行</a>
                        </li>
                      </ul>
                    </dd>
                  </div>
                  <div class="procList-item md:tw-flex">
                    <dt class="u_ff4 u_col1 tw-text-center"><span class="en">PROCESS.<span class="num">2</span></span><span class="ja tw-block tw-text-center">遊技機撤去</span></dt>
                    <dd>
                      <ul class="chList tw-flex tw-flex-wrap">
                        <li class="chList-item">
                          <a @click="openUp('p5')">中古遊技機転売</a>
                        </li>
                        <li class="chList-item">
                          <a @click="openUp('p6')">液晶買取・破棄処理</a>
                        </li>
                        <li class="chList-item">
                          <a @click="openUp('p7')">遊技機洗浄</a>
                        </li>
                        
                      </ul>
                    </dd>
                  </div>
                  <div class="procList-item md:tw-flex">
                    <dt class="u_ff4 u_col1 tw-text-center"><span class="en">PROCESS.<span class="num">3</span></span><span class="ja tw-block tw-text-center">遊技機保管</span></dt>
                    <dd>
                      <ul class="chList tw-flex tw-flex-wrap">
                        <li class="chList-item">
                          <a @click="openUp('p8')">遊技機保管管理叢務</a>
                        </li>
                      </ul>
                    </dd>
                  </div>
                </dl>
                <dl class="comList md:tw-flex md:tw-flex-col max-md:tw-mt-12">
                  <dt class="tw-font-semibold tw-text-center">各プロセス共通のサービス</dt>
                  <dd class="md:tw-flex-1 md:tw-flex tw-flex-col md:tw-justify-center max-md:tw-mt-8">
                    <ul class="">
                      <li>
                        <a @click="openUp('p9')">内外装・設置工事・保守管理</a>
                      </li>
                      <li>
                        <a @click="openUp('p10')">遊技機運送</a>
                      </li>
                      <li>
                        <a @click="openUp('p11')">コンサルティング</a>
                      </li>
                      <li>
                        <a @click="openUp('p12')">システム販売</a>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
              <p class="txt md:tw-text-right max-md:tw-mt-4">個々の事業のみでもご対応いたします。まずはご相談ください。</p>
            </div>
          </div>
        </section>
      
      <section class="sec sec3">
        <div class="sec__inner u_mx1000 ">
          <header class="sec__header u_px">
            <h3 class="sec-ttl tw-text-xl md:tw-text-3xl tw-font-semibold u_col1">遊技機のご購入</h3>
            <p class="sec-txt tw-mt-10">最大在庫台数約34,000台。<br>
            毎週、多くの売買を手がけ、多数のホール様ともお取引しています。<br>
            お探しの台をご提供できるバックボーンがあります。 </p>
          </header>
          <div class="sec__container tw-mt-12 md:tw-mt-24">
            <div class="stpContainer">
              <div class="stpContainer-box">
                <div class="stpContainer-wrap md:tw-flex tw-text-center u_px">
                  <div class="stpContainer__inner tw-flex tw-items-center tw-text-left">
                    <div class="image">
                      <img src="@/assets/images/page/img_sol_step_ico1.png" width="58" alt="">
                    </div>
                    <div class="txtContainer">
                      <p class="stp">STEP.<span class="num">1</span></p>
                      <p class="txt">お電話でお申し込みいただき、登録の手続きを行います。</p>
                    </div>
                  </div>
                  <div class="info tw-text-left tw-p-5 tw-inline-block tw-mt-4 md:tw-mt-0">
                    <p class="txt">ご連絡お待ちしております。
                      <span class="tel tw-block tw-mt-2">03-5763-7770</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="arContainer tw-text-center tw-text-6xl">
                <SvgAngleDown />
              </div>
              <div class="stpContainer-box">
                <div class="stpContainer-wrap md:tw-flex tw-text-center">
                  <div class="stpContainer__inner tw-flex tw-items-center tw-text-left">
                    <div class="image">
                      <img src="@/assets/images/page/img_sol_step_ico2.png" width="51" alt="">
                    </div>
                    <div class="txtContainer">
                      <p class="stp">STEP.<span class="num">2</span></p>
                      <p class="txt">御社の情報などを参考に審査※を行い、その後 IDとバスワードを発行します。</p>
                    </div>
                  </div>
                </div>
                <p class="note tw-text-smm tw-text-right">※審査の結果ご希望に添えない場合があります。あらかじめご了承ください。</p>
              </div>
              <div class="arContainer tw-text-center tw-text-6xl">
                <SvgAngleDown />
              </div>
              <div class="stpContainer-box">
                <div class="stpContainer-wrap md:tw-flex tw-text-center">
                  <div class="stpContainer__inner tw-flex tw-items-center tw-text-left">
                    <div class="image">
                      <img src="@/assets/images/page/img_sol_step_ico3.png" width="128" alt="">
                    </div>
                    <div class="txtContainer">
                      <p class="stp">STEP.<span class="num">3</span></p>
                      <p class="txt">在庫情報サイトから”最新在庫情報”をご覧いただき、お探しの商品を検索してください。</p>
                    </div>
                  </div>
                </div>
                
              </div>
              <div class="arContainer tw-text-center tw-text-6xl">
                <SvgAngleDown />
              </div>
              <div class="stpContainer-box">
                <div class="stpContainer-wrap md:tw-flex tw-text-center">
                  <div class="stpContainer__inner tw-flex tw-items-center tw-text-left">
                    <div class="image">
                      <img src="@/assets/images/page/img_sol_step_ico4.png" width="82" alt="">
                    </div>
                    <div class="txtContainer">
                      <p class="stp">STEP.<span class="num">4</span></p>
                      <p class="txt">ご希望の面品がございましたら弊社までお電話ください。出庫の手続きに入ります。</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </article>
    <Other/>
    
      <div class="popupWrap" v-bind:class="{on : open}">
        <div class="popup">
          <div class="btnClose" @click="close"><span class="bar"></span><span class="bar"></span></div>
          <div class="popup-item" v-if="panel === 'p1'">
            <div class="inner">
              <h3 class="ttl tw-font-semibold tw-text-xl">新台遊技機販売</h3>
              <p class="txt tw-mt-8 md:tw-mt-12">ホール様がメーカーから直接、新台を購入する場合、最少ロットの制限や欲しい台だけの購入ができないというデメリットが発生します。そこで、SPグループが販売代理店として新台を購入。ホール様は、経営戦略にあわせた台のラインナップが可能となります。ロジスティックとの連携で、万全な管理体制で輸送しますので、安心の新台遊技機販売で信頼にお応えします。</p>
            </div>
          </div>
          <div class="popup-item" v-if="panel === 'p2'">
            <div class="inner">
              <h3 class="ttl tw-font-semibold tw-text-xl">中古遊技機販売</h3>
              <p class="txt tw-mt-8 md:tw-mt-12">中古遊技機の導入メリットは人気台の増設、集客のための台の入れ替え時の導入コストを大幅に削減することが出来ます。</p>
            </div>
          </div>
          <div class="popup-item" v-if="panel === 'p3'">
            <div class="inner">
              <h3 class="ttl tw-font-semibold tw-text-xl">書類作成代行</h3>
              <p class="txt tw-mt-8 md:tw-mt-12">面倒なパチンコ・スロットの書類作成を私たちが承ります。店舗間移動や中古売買時に、ぜひご利用ください。</p>
            </div>
          </div>
          <div class="popup-item" v-if="panel === 'p4'">
            <div class="inner">
              <h3 class="ttl tw-font-semibold tw-text-xl">遊技機設置代行</h3>
              <p class="txt tw-mt-8 md:tw-mt-12">御社の配送時間に合わせ、台の設置作業を行います。</p>
            </div>
          </div>
          <div class="popup-item" v-if="panel === 'p5'">
            <div class="inner">
              <h3 class="ttl tw-font-semibold tw-text-xl">中古遊技機転売</h3>
              <p class="txt tw-mt-8 md:tw-mt-12">中古遊技機は人気がある機種をいかに早く売るかに掛かっています。市場が落ち着いてしまった場合はたった数日の差で金額が大きく変わってきます。もちろん不要になったセルの液晶売却もしております。保管費用削減のためにもぜひご検討ください。</p>
            </div>
          </div>
          <div class="popup-item" v-if="panel === 'p6'">
            <div class="inner">
              <h3 class="ttl tw-font-semibold tw-text-xl">液晶買取・破棄処理</h3>
              <p class="txt tw-mt-8 md:tw-mt-12">パチンコスロット台の廃棄。<br>
              液晶代を算出し、廃棄証明証（マニュフェスト）を作成いたします。<br>
              大量一括廃棄処分も可能です。</p>
            </div>
          </div>
          <div class="popup-item" v-if="panel === 'p7'">
            <div class="inner">
              <h3 class="ttl tw-font-semibold tw-text-xl">遊技機洗浄</h3>
              <p class="txt tw-mt-8 md:tw-mt-12">保管台のチェーン店移動時などにご利用ください。新台同様ピカピカに仕上げます。</p>
            </div>
          </div>
          <div class="popup-item" v-if="panel === 'p8'">
            <div class="inner">
              <h3 class="ttl tw-font-semibold tw-text-xl">遊技機保管管理業務</h3>
              <p class="txt tw-mt-8 md:tw-mt-12">お客様からお預かりしている大切な遊技機を当社独自の開発による保管管理システムにより一括管理します。遊技機の取扱いに慣れたスタッフが丁寧に扱い大切に保管いたします。当社管理倉庫内にてセル番号・基盤番号・枠番号等を読み取り社内管理します。</p>
            </div>
          </div>
          <div class="popup-item" v-if="panel === 'p9'">
            <div class="inner">
              <h3 class="ttl tw-font-semibold tw-text-xl">内外装・設置工事・保守管理</h3>
              <p class="txt tw-mt-8 md:tw-mt-12">内装・外装の設備工事、看板等店舗の全てをプロデュースいたします。</p>
            </div>
          </div>
          <div class="popup-item" v-if="panel === 'p10'">
            <div class="inner">
              <h3 class="ttl tw-font-semibold tw-text-xl">遊技機運送</h3>
              <p class="txt tw-mt-8 md:tw-mt-12">ホール様にとって運送業者を選ぶこともコスト削減の大きなポイントです。メーカーごとに新台納品をしては配送コストが非常にかかります。配送コストを抑える方法として【混載納品】を提案します。1回の納品で複数のメーカーの商品を同時に納品できるので運送費用を削減できます。また搬入時の納品手続きも1回で終わりコスト的にも人的にも無駄がなくなります。保管台・販売中古台との同時納品も可能となります。もちろんセキュリティや人員教育にも力を入れています。</p>
            </div>
          </div>
          <div class="popup-item" v-if="panel === 'p11'">
            <div class="inner">
              <h3 class="ttl tw-font-semibold tw-text-xl">コンサルティング</h3>
              <p class="txt tw-mt-8 md:tw-mt-12">企業の抱える経営課題や問題をさまざまな方法や角度から解決していきます。企業の柱である【人】の育て方で企業は大きく変わります。新人や中間管理職などの教育にも力になります。</p>
            </div>
          </div>
          <div class="popup-item" v-if="panel === 'p12'">
            <div class="inner">
              <h3 class="ttl tw-font-semibold tw-text-xl">システム販売</h3>
              <p class="txt tw-mt-8 md:tw-mt-12">業界に通じているからこそホール様の求める経営に役立つシステム環境が構築できます。お客様のご要望にあわせた本社部門・ホール共に活用できるシステムを開発・ご提供いたします。</p>
            </div>
          </div>
        </div>
        <div class="popupBack" @click="close"></div>
      </div>
  </main>
</template>

<style scoped lang="scss">
.btnClose{
  width:2em;
  height:2em;
  position:absolute;
  z-index: 3;
  right:1em;
  top:1em;
  cursor: pointer;
  span{
    display: block;
    width:100%;
    height:2px;
    position:absolute;
    background:$col1;
    top:50%;
    left:0;
    &:nth-child(1){
      transform:rotate(45deg);
    }
    &:nth-child(2){
      transform:rotate(-45deg);
    }
  }
}
.popupWrap{
  position:fixed;
  top:0; right:0; bottom:0; left:0;
  // z-index: 100;
  padding:20px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: -1;
  opacity:0;
  

  &.on{
    transition:opacity 1s;
    opacity:1;
    z-index: 100;
    pointer-events: all;
  }
}
.popupBack{
  position:absolute;
  top:0; right:0; bottom:0; left:0;
  background-color:rgba($col1, .3);
  z-index: 1;
}
.popup{
  max-width:680px;
  width:100%;
  background:#fff;
  padding:3em 2em;
  position:relative;
  z-index: 2;
}
</style>
