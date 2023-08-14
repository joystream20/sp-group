<script setup lang="ts">
import { Listener } from 'listhen'
import { ref } from 'vue'
type Props = {
  p_type: string,
  t_scroll: string
}
defineProps<Props>()


const { isMobile, isTablet, isDesktop } = useDevice()
const state = ref<boolean>(false)
const btnClass = ref<string>('')
const breakPoint = <string>"896"
// const __hh = ref<number>()

const gnav = ref<HTMLElement>()
const gnavH = ref<string>('')

const nuxtApp = useNuxtApp()
const loading = ref(false)

const btnSp = ref<HTMLElement>()
const navContainer = ref<HTMLElement>()


nuxtApp.hook('page:start', () => {
  loading.value = true
  // console.log(loading)
})

nuxtApp.hook('page:finish', () => {
  loading.value = false
})

const view = ref(false)

const sp = ref(false)


onMounted(() => {
  //console.log('on Mounted header')
  const _html = <HTMLElement>document.documentElement
  const _header = <HTMLElement>document.getElementById('siteHeader')
  gnav.value = document.getElementById('gnav')
  // console.log(gnav);
  btnSp.value = document.getElementById('btnSp')
  navContainer.value = document.getElementById('navContainer')

  const items = <NodeList>document.querySelectorAll('.gnavList-item a')

  //resize
  const resizeEvent = () => {
    _html.style.setProperty('--hh',_header.offsetHeight+"px")
    // __hh.value = _header.offsetHeight
  }
  const queryMatchEvent = (jud:string) => { 
    if(jud === 'sp'){
      // console.log('sp')
      sp.value = true
    }else{
      // console.log('pc')
      sp.value = false
      state.value=false
      btnClass.value = ''
      btnSp.value.querySelector<HTMLElement>('.bar:nth-child(1)').style.animationName=""
      btnSp.value.querySelector<HTMLElement>('.bar:nth-child(3)').style.animationName=""
      navContainer.value.style.animationName=""
      // state.value=false
    }
   }
  const mediaQueryList =  <MediaQueryList>window.matchMedia(`(min-width:${breakPoint}px)`)
  const listener =  (e:MediaQueryList) => {
    if(e.matches){
      // console.log('pc');
      queryMatchEvent('pc')
      // console.log(state.value)
    }else{
      // console.log('sp');
      queryMatchEvent('sp')
      // console.log(state.value)
    }
  }
  mediaQueryList.addEventListener('change', listener)
  listener(mediaQueryList)

  window.addEventListener('resize', resizeEvent)

  resizeEvent()

  items.forEach(
    item => {
      item.addEventListener('click', (e) => {
        btnClass.value=''
        state.value=false
      })
    }
  )

})

// life cycle
// onUnmounted(() => {})
// onBeforeMount(() => {})
// onBeforeUpdate(() => {})
// onUpdated(() => {})
// onActivated(() => {})

const itemClick = () => {
  btnClass.value=''
  state.value=false
}


const btnClick = () => {
  state.value = !state.value
  if(state.value){
    btnClass.value = 'on'
    gnavH.value = String(gnav.value.offsetHeight)
  }else{
    btnClass.value = ''
    btnSp.value.querySelector<HTMLElement>('.bar:nth-child(1)').style.animationName="bar1"
    btnSp.value.querySelector<HTMLElement>('.bar:nth-child(3)').style.animationName="bar3"
    navContainer.value.style.animationName="hide"
  }
}

// $device.isDesktop
// $device.isMobile
// $device.isTablet
// $device.isMobileOrTablet
// $device.isDesktopOrTablet
// $device.isIos
// $device.isWindows
// $device.isMacOS
// $device.isApple
// $device.isAndroid
// $device.isFirefox
// $device.isEdge
// $device.isChrome
// $device.isSafari
// $device.isSamsung
// $device.isCrawler

</script>
<template>
  <header id="siteHeader" :class="`${btnClass} site-header tw-fixed tw-w-full tw-text-white`">
    <div :class="`${t_scroll} site-header__inner `">

      <div class="tw-flex tw-justify-between tw-items-center u_mx">
        <h1 class="site-title" v-if="p_type == 'top'"><img src="@/assets/images/img_logo2.png" width="229" ></h1>
        <p class="site-title" v-else><nuxtLink :to="`/`"><img src="@/assets/images/img_logo2.png" width="229"></nuxtLink></p>
        <div id="navContainer" class="navContainer tw-fixed tw-w-full md:tw-w-fit md:tw-relative md:tw-block">
          <div class="navContainer__inner tw-flex max-md:tw-flex-col max-md:tw-items-center  md:tw-justify-end">
            <div>
              <span v-if="sp">お電話でのお問い合わせ</span>
              <a href="tel:0357637770" class="tel tw-inline-block">
                <span class="num u_ff3 tw-flex tw-justify-center tw-items-center tw-text-5xl tw-leading-none tw-tracking-widest"><SvgPhone />03-5763-7770</span>
              </a>
            </div>
            <div><a href="mailto:info@sevenpeace.com" class="mail tw-inline-block"><span class="txt tw-flex tw-items-center tw-text-xl"><SvgMail /><span v-if="sp">メールでの</span>お問い合わせ</span></a></div>
          </div>
          <div class="max-md:tw-flex sp-wrap">
            <ul id="gnav" class="site-header-gnavList gnavList md:tw-flex">
              <li class="gnavList-item">
                <NuxtLink :to="`/`" class="txt">ホーム</NuxtLink>
              </li>
              <li class="gnavList-item">
                <NuxtLink :to="`/about`" class="txt" >SPグループの強み</NuxtLink>
              </li>
              <li class="gnavList-item has_ch" @mouseover="view = true" @mouseout="view = false" v-bind:class="{ view : view }">
                <span class="txt">事業案内<span v-if="!sp">
                  <SvgAngleDown />
                </span></span>
                <div class="subList-wrap">
                  <ul class="subList md:tw-flex">
                    <li class="subList-item">
                      <NuxtLink :to="`/solution`">
                        <div v-if="!sp" class="image">
                          <img src="@/assets/images/page/img_service01_thumb.jpg" width="160" alt="">
                        </div>
                        <div class="txt">ソリューション</div>
                      </NuxtLink>
                    </li>
                    <li class="subList-item">
                      <NuxtLink :to="`/logistic`">
                        <div v-if="!sp" class="image">
                          <img src="@/assets/images/page/img_service02_thumb.jpg" width="160" alt="">
                        </div>
                        <div class="txt">ロジスティック</div>
                      </NuxtLink>
                    </li>
                    <li class="subList-item">
                      <NuxtLink :to="`/transport`">
                        <div v-if="!sp" class="image">
                          <img src="@/assets/images/page/img_service03_thumb.jpg" width="160" alt="">
                        </div>
                        <div class="txt">トランスポート</div>
                      </NuxtLink>
                    </li>
                    <li class="subList-item">
                      <NuxtLink :to="`https://sp-career.com/`" target="_blank">
                        <div v-if="!sp" class="image">
                          <img src="@/assets/images/page/img_service04_thumb.jpg" width="160" alt="">
                        </div>
                        <div class="txt">キャリア</div>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="gnavList-item">
                <NuxtLink to="/#casestudies" class="txt">事例</NuxtLink>
              </li>
              <li v-if="!sp" class="gnavList-item">
                <NuxtLink :to="`/news`" class="txt">ニュース</NuxtLink>
              </li>
              <li  v-if="!sp" class="gnavList-item">
                <NuxtLink :to="`https://sp-career.com/`" target="_blank">採用情報</NuxtLink>
              </li>
              <li  v-if="!sp" class="gnavList-item">
                <NuxtLink :to="`/company`" class="txt">企業情報</NuxtLink>
              </li>
            </ul>
            <ul v-if="sp" class="site-header-gnavList gnavList right">
              <li class="gnavList-item">
                <NuxtLink :to="`/news`" class="txt" @click.native="itemClick">ニュース</NuxtLink>
              </li>
              <li class="gnavList-item">
                <NuxtLink :to="`https://sp-career.com/`" target="_blank">採用情報</NuxtLink>
              </li>
              <li class="gnavList-item">
                <NuxtLink :to="`/company`" class="txt" @click.native="itemClick">企業情報</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div id="btnSp" class="btnSp sp md:tw-hidden" @click="btnClick"><div class="btnSp-inner">
            <span class="bar"></span><span class="bar"></span><span class="bar"></span>
            </div>
            </div>
      </div>


    </div>
  </header>
  <!-- <div v-if="loading" class="tw-fixed tw-left-0 tw-top-0 tw-h-5 tw-w-full tw-z-50 tw-bg-green-500" /> -->
</template>
