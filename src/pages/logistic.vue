<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
useHead({
  title: 'ロジスティック | SPグループ',
  meta:[]
})


const emit = defineEmits(['p_type'])

const _current = ref<string>('')

type Props = {
  ua: string
}
const { ua } = defineProps<Props>()

const padT:string = ua == 'mobile' ? 'top 10%' : 'top 20%'

// console.log('ua='+ua)

// const navClick = (_id) => {
//   _current.value = _id
//   console.log("click"+_id)
//   const _cur = e.currentTarget
//   const _sib = _cur.closest('.blkNav').querySelectorAll('.blkNav-item')
//   _sib.forEach(
//     (_item, index) => {
//       _item.classList.remove('current')
//     }
//   )
//   _cur.classList.add('current')
// }

const ttl_view = ref<String>('')

//const main = ref()
const sec1 = ref()
const sec3 = ref()
let ctx;
let ctx2;


onMounted(() => {
  emit('p_type', 'logistic')
  
  if (process.client) {
  // gsap.registerPlugin(ScrollTrigger)

  
  ctx = gsap.context((self) => {
    // console.log(self.selector('.meritList'))
    
    
    // console.log(listEl[0],listEl[0].clientWidth, listWrapperEl[0])
    // setTimeout( () => {
    //   console.log(listEl[0],listEl[0].clientWidth, listWrapperEl[0])
    // },500)


    //nextTick(() => {
      setTimeout(() => {

      
        const blocks = self.selector('.blockContainer-block')
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
                  //_current.value = block.id
                  const _nextNum = parseInt(block.id.replace('sl',''))-1
                  if(_nextNum > 0){
                    _current.value = "sl"+_nextNum//block.id
                  }
                },
                // markers:true
              }
            })
          })
      },1000)

    //})


  },sec1.value)

  ctx2 = gsap.context((self) => {

    const listWrapperEl = self.selector('.meritList-wrap')[0]
    const listEl = self.selector('.meritList')[0]

    setTimeout(() => {

      // console.log(listEl.clientWidth)

      gsap.to(listEl, {
        x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: '.sec3',
          start:padT,
          end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // markers:true
        }
      })

      },1200)
  },sec3.value)

  
  nextTick(() => {
    setTimeout(() => {
      ttl_view.value = 'on'
    },1500)
  })
}


})

onUnmounted(() => {
  // console.log('clean')
  // console.log(ctx)
  ctx.revert();
  ctx2.revert();
  // console.log(ctx)
})

</script>


<template>
  <main class="site-main logistic page h_image" >
    <div class="breadContainer">
      <div class="breadList tw-flex tw-justify-end">
        <NuxtLink :to="`/`">ホーム</NuxtLink>
        <span class="arr tw-block tw-px-2">&gt;</span>
        <NuxtLink :to="`/about`">SPグループの強み</NuxtLink>
        <span class="tw-block tw-px-2">-</span>
        <span class="txt current">ロジスティック</span>
      </div>
    </div>
    <header class="ttlContainer tw-px-8 tw-relative angle_b_t">
      <div class="ttlContainer__inner u_mx">
        <p :class="`ttlContainer-ttl ${ttl_view}`">
          <span class="txt tw-block anm_t"><span>OUR</span></span>
          <span class="txt tw-block anm_t d2"><span>ADVANTAGE</span></span>
        </p>
        <h2 class="ttlContainer-txt tw-font-semibold">ロジスティック</h2>
      </div>
      <p class="header-txt u_mx tw-mt-12 md:tw-mt-16">独自の在庫管理システムとプロフェッショナルな倉庫作業でミスなく、確実な流通へ展開することが可能です。</p>
    </header>
    <article class="secContainer" >
      
        <section class="sec sec1 angle_b_b u_px30" ref="sec1">
          <div class="sec__inner u_mx md:tw-flex">
            <div class="blkNavContainer tw-hidden md:tw-block">
              <ul class="blkNav">
                <li v-bind:class="[ _current === 'sl1' ? 'blkNav-item current': 'blkNav-item']"><NuxtLink to="#sl1" href="#sl1">遊戯台管理</NuxtLink></li>
                <li v-bind:class="[ _current === 'sl2' ? 'blkNav-item current': 'blkNav-item']"><NuxtLink to="#sl2" href="#sl2">出庫</NuxtLink></li>
                <li v-bind:class="[ _current === 'sl3' ? 'blkNav-item current': 'blkNav-item']"><NuxtLink to="#sl3" href="#sl3">サービス</NuxtLink></li>
              </ul>
            </div>
            <div class="blockContainer">
              <div id="sl1" class="blockContainer-block md:tw-flex md:tw-flex-row-reverse md:tw-items-center">
                <div class="image">
                  <img src="@/assets/images/page/img_logistic_1_1.jpg" alt="">
                </div>
                <div class="txtContainer">
                  <h3 class="ttl tw-text-xl md:tw-text-2xl tw-font-semibold u_col1">いつでも正確に遊技台管理</h3>
                  <p class="txt tw-mt-7">ホール様の重要な業務の一つに、遊技台の管理があります。<br>
                  撤去や倉庫への移動など、遊技台の履歴を正確に把握することが、売買においても非常に大切です。<br>
                  SPグループが開発した在庫管理システム「SP.Ⅱシステム」は、ホールシステムと連動。パソコン上でデータ管理するため、いつでも正確に遊技台をリサーチすることができます。</p>
                </div>
              </div>
              <div id="sl2" class="blockContainer-block md:tw-flex md:tw-flex-row-reverse md:tw-items-center">
                <div class="image">
                  <img src="@/assets/images/page/img_logistic_1_2.jpg" alt="">
                </div>
                <div class="txtContainer">
                  <h3 class="ttl tw-text-xl md:tw-text-2xl tw-font-semibold u_col1">月曜の午前中には出庫可能</h3>
                  <p class="txt tw-mt-7">日曜日の夜、営業後にホールから遊技台を撤去し、翌月曜日の午前中には自社の倉庫から出庫できる。SPグループでは、こうしたスピーディな対応が可能です。<br>
                  これは、倉庫運営のプロだからこそ実現できます。また、ハンディーによる読み取りにより遊技機番号が直ぐに確認できるのも大きなメリット。<br>
                  SPグループの無駄もミスもない管理が、遊技台の流通を大きく変えていきます。</p>
                </div>
              </div>
              <div id="sl3" class="blockContainer-block md:tw-flex md:tw-flex-row-reverse md:tw-items-center">
                <div class="image">
                  <img src="@/assets/images/page/img_logistic_1_3.jpg" alt="">
                </div>
                <div class="txtContainer">
                  <h3 class="ttl tw-text-xl md:tw-text-2xl tw-font-semibold u_col1">台に詳しいスタッフによる様々なサービス</h3>
                  <p class="txt tw-mt-7">購入された中古機の洗浄や修理も台に詳しいスタッフだから安心してお任せ頂けます。<br>
                  販売会社様の倉庫としても保管して頂くと、遊技台管理システムの利用でインターネットで枠色もすぐにご確認いただけます。<br>
                  「SPグループだと安心」と言って頂けるのは長年の経験や能力を持ったスタッフが、迅速かつ正確に業務を遂行しているからです。</p>
                </div>
              </div>
            </div>
        
          </div>
        </section>
        <section class="sec2 sec u_px30">
          <div class="sec__inner u_mx">
            <h3 class="ttl tw-text-xl md:tw-text-2xl tw-font-semibold u_col1">SP.Ⅱシステム</h3>
            <div class="image tw-mt-12 md:tw-mt-16">
              <picture>
                <source media='(min-width:897px)' srcset='@/assets/images/page/img_logic_sec2_1.png'>
                <source media='(max-width:896px)' srcset='@/assets/images/page/img_logic_sec2_1_sp.png'>
                <img class='hero' src='@/assets/images/page/img_logic_sec2_1_sp.png' alt='' >
                </picture>
            </div>
          </div>
        </section>
        <section class="sec3 sec" ref="sec3">
          <div class="sec__inner">
            <h3 class="ttl tw-text-xl md:tw-text-2xl tw-font-semibold u_col1 u_mx u_px30">SP.Ⅱシステム導入の7つのメリット</h3>
            <div class="meritList-wrap">
              <ul class="meritList">
                <li class="meritList-item">
                  <div class="num u_ff4 u_col1">1</div>
                  <h4 class="ttl tw-font-semibold tw-text-2xl">ハンディスキャナーで<span class="u_nw">ヒューマンエラーをゼロに</span></h4>
                  <p class="txt tw-mt-8">出庫や入庫において、人為的なミスが生じるケースがあります。SP.Ⅱを導入すると、遊技台のQRコードなどをハンディーで読み込むだけで正確に記録し、撤去予定以外の台が読み込まれた場合は、警告音でお知らせします。<br>
                  手入力などの作業時間も大幅に短縮されます。</p>
                </li>
                <li class="meritList-item">
                  <div class="num u_ff4 u_col1">2</div>
                  <h4 class="ttl tw-font-semibold tw-text-2xl">WEB上の操作で<span class="u_nw">委託販売に連動</span></h4>
                  <p class="txt tw-mt-8">SP.Ⅱの保管在庫画面では、弊社の倉庫に保管した遊技台の在庫がWEB上で確認できます。また、販売したい遊技台にチェックを入れるだけで、委託販売に連動。在庫管理とともに、スピーディな販売につなげることができます。</p>
                </li>
                <li class="meritList-item">
                  <div class="num u_ff4 u_col1">3</div>
                  <h4 class="ttl tw-font-semibold tw-text-2xl">ネットでいつでも閲覧可能</h4>
                  <p class="txt tw-mt-8">インターネットにつながる環境なら、どこからでも閲覧が可能です。リアルタイムな在庫状況を、いつでも把握することができます。もちろん、特定の場所以外から繋がらないように設定する事も可能でセキュリティーの面でも安心してご利用頂けます。</p>
                </li>
                <li class="meritList-item">
                  <div class="num u_ff4 u_col1">4</div>
                  <h4 class="ttl tw-font-semibold tw-text-2xl">チェックするだけの<span class="u_nw">検索機能</span></h4>
                  <p class="txt tw-mt-8">WEB上で簡単にログイン。クリックひとつで、各店舗に配置されている設置台、倉庫等で保管されている保管台の一覧が確認できます。店舗名、メーカー、機種名、番号などによって、検索したい項目で絞り込むことができます。また、顧客ごとに発行するIDとパスワードでセキュリティも万全です。</p>
                </li>
                <li class="meritList-item">
                  <div class="num u_ff4 u_col1">5</div>
                  <h4 class="ttl tw-font-semibold tw-text-2xl">煩雑な書類作成作業を<span class="u_nw">大幅に軽減</span></h4>
                  <p class="txt tw-mt-8">島図を直接操作する簡単な作業だけで変更承認申請書、設置機種一覧、島配置図、撤去明細書、中古遊技機確認書などの入替に必要な帳票類を作成出来ます。<br>
                  それぞれ、地域や所轄に合わせた書類のカスタマイズや新規の書類を作成することも可能です。<br>
                  煩雑で時間を費やしていた書類作成作業が、従来より大幅に軽減出来ます。</p>
                </li>
                <li class="meritList-item">
                  <div class="num u_ff4 u_col1">6</div>
                  <h4 class="ttl tw-font-semibold tw-text-2xl">コスト削減によって<span class="u_nw">経営戦略を促進</span></h4>
                  <p class="txt tw-mt-8">SP.Ⅱの導入によって、在庫確認がリアルタイムで可能。不要な台を即転売して、コストの大幅な削減が可能になります。同時に、書類作成の時間も軽減。つまり、ホール経営に優れたコストパフォーマンスと、人材資源の有効活用を実現します。</p>
                </li>
                <li class="meritList-item">
                  <div class="num u_ff4 u_col1">7</div>
                  <h4 class="ttl tw-font-semibold tw-text-2xl">経理情報を正確に把握</h4>
                  <p class="txt tw-mt-8">設置台の購入時に購入価格を入力して頂くことで購入情報を正確に把握できます。<br>
                  契約日や、支払日等、項目の追加も可能でお客様に本当に必要なデータを保存して頂くことが可能です。また、入力した情報はカスタマイズしてCSVファイルとして出力が可能で、お客様の使用されている経理ソフトとの連携も可能です。</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      
    </article>
    <Other/>
  </main>
</template>
