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

const ttl_view = ref<String>('')

const main = ref()
let ctx;

onMounted(() => {
  emit('p_type', 'transport')

  ctx = gsap.context((self) => {
  nextTick(() => {

    setTimeout(() => {

    
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
      })

    },1000)//timeout

    }) //tick
  }) //ctx

  nextTick(() => {
    setTimeout(() => {
      ttl_view.value = 'on'
    },1500)
  })

})// mounted

onUnmounted(() => {
  // console.log('clean')
  ctx.revert(); // <- Easy Cleanup!
})

</script>


<template>
  <main class="site-main transport page h_image">
    <div class="breadContainer">
      <div class="breadList tw-flex tw-justify-end">
        <NuxtLink :to="`/`">ホーム</NuxtLink>
        <span class="arr tw-block tw-px-2">&gt;</span>
        <NuxtLink :to="`/about`">SPグループの強み</NuxtLink>
        <span class="tw-block tw-px-2">-</span>
        <span class="txt current">トランスポート</span>
      </div>
    </div>
    <header class="ttlContainer tw-px-8 tw-relative angle_b_t">
      <div class="ttlContainer__inner u_mx">
        <p :class="`ttlContainer-ttl ${ttl_view}`">
          <span class="txt tw-block anm_t"><span>OUR</span></span>
          <span class="txt tw-block anm_t d2"><span>ADVANTAGE</span></span>
        </p>
        <h2 class="ttlContainer-txt tw-font-semibold">トランスポート</h2>
      </div>
      <p class="header-txt u_mx tw-mt-12 md:tw-mt-16">
        <span class="bg u_col1 tw-font-semibold tw-block">スピーディで安全確実にお届けする</span>
        <span class="txt tw-block tw-mt-4">SPグループの運送部門は、バチンコ台、スロット台の流通で培ったノウハウを活かし、一般商品の輸送にもスピーディで安全確実なお届けを実現しています。</span></p>
    </header>
    <article class="secContainer" ref="main">
      
        <section class="sec sec1 angle_b_b u_px30">
          <div class="sec__inner u_mx md:tw-flex">
            <div class="blkNavContainer tw-hidden md:tw-block">
              <ul class="blkNav">
                <li v-bind:class="[ _current === 'sl1' ? 'blkNav-item current': 'blkNav-item']"><NuxtLink to="#sl1" href="#sl1">安全確実</NuxtLink></li>
                <li v-bind:class="[ _current === 'sl2' ? 'blkNav-item current': 'blkNav-item']"><NuxtLink to="#sl2" href="#sl2">経費削減</NuxtLink></li>
              </ul>
            </div>
            <div class="blockContainer">
              <div id="sl1" class="blockContainer-block md:tw-flex md:tw-flex-row-reverse md:tw-items-center">
                <div class="image">
                  <img src="@/assets/images/page/img_transport_1_1.jpg" alt="">
                </div>
                <div class="txtContainer">
                  <h3 class="ttl tw-text-xl md:tw-text-2xl tw-font-semibold u_col1">安全確実に</h3>
                  <p class="txt tw-mt-7">バチンコ台やスロット台は精密機器です。衝撃対策など、その輸送には織心の注竃を払わなければなりません。SPグループのロジスティクはそうした輸送で培ったノウハウを一般の輸送にも応用しています。<br>
                  SPグループだからこそお届けできる安心がある。<br>
                  大切な商品を迅速に、そして安全確実に納品します。</p>
                </div>
              </div>
              <div id="sl2" class="blockContainer-block md:tw-flex md:tw-flex-row-reverse md:tw-items-center">
                <div class="image">
                  <img src="@/assets/images/page/img_transport_1_2.jpg" alt="">
                </div>
                <div class="txtContainer">
                  <h3 class="ttl tw-text-xl md:tw-text-2xl tw-font-semibold u_col1">自社の倉庫とトラックで経費削減</h3>
                  <p class="txt tw-mt-7">自社の倉庫で遊技台を管理し、自社のトラックによって輸送できるため、時間的なロスがなく、遊技台を流通させることができます。<br>
                  もちろん、輸送におけるコストダウンも実現。転売がスムーズであれば、その費用を新台購入にあてることができ、ホール様の経営にも大きなメリットをもたらします。</p>
                </div>
              </div>
              
            </div>
        
          </div>
        </section>
        
      
      
      
    </article>
    <Other/>
  </main>
</template>
