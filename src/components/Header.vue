<script setup lang="ts">
import { Listener } from 'listhen'
import { ref } from 'vue'
type Props = {
  p_type: string
}
defineProps<Props>()


const { isMobile, isTablet, isDesktop } = useDevice()
const state = ref<boolean>(false)
const btnClass = ref<string>('')
const breakPoint = <string>"769"
// const __hh = ref<number>()
const gnavH = ref<string>('')

const nuxtApp = useNuxtApp()
const loading = ref(false)
nuxtApp.hook('page:start', () => {
  loading.value = true
  // console.log(loading)
})

nuxtApp.hook('page:finish', () => {
  loading.value = false
})




onMounted(() => {
  console.log('on Mounted')
  const _html = <HTMLElement>document.documentElement
  const _header = <HTMLElement>document.getElementById('siteHeader')
  const gnav = <HTMLElement>document.getElementById('gnav')
  // console.log(gnav);
  const btnSp = <HTMLElement>document.getElementById('btnSp')
  const navContainer = <HTMLElement>document.getElementById('navContainer')

  const items = <NodeList>document.querySelectorAll('.gnavList-item a')

  //resize
  const resizeEvent = () => {
    _html.style.setProperty('--hh',_header.offsetHeight+"px")
    // __hh.value = _header.offsetHeight
  }
  const queryMatchEvent = (jud:string) => { 
    if(jud === 'sp'){
      console.log('sp')
    }else{
      console.log('pc')
      btnSp.querySelector<HTMLElement>('.bar:nth-child(1)').style.animationName=""
    btnSp.querySelector<HTMLElement>('.bar:nth-child(3)').style.animationName=""
    navContainer.style.animationName=""
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
      console.log(state.value)
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


const btnClick = () => {
  state.value = !state.value
  if(state.value){
    btnClass.value = 'on'
    gnavH.value = gnav.offsetHeight
  }else{
    btnClass.value = ''
    btnSp.querySelector<HTMLElement>('.bar:nth-child(1)').style.animationName="bar1"
    btnSp.querySelector<HTMLElement>('.bar:nth-child(3)').style.animationName="bar3"
    navContainer.style.animationName="hide"
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
    <div class="site-header__inner u_mx1100 tw-flex tw-justify-between tw-items-center">
      <h1 class="site-title" v-if="p_type == 'top'"><img src="@/assets/images/img_logo.png" width="78" ></h1>
      <p class="site-title" v-else><nuxtLink :to="`/`"><img src="@/assets/images/img_logo.png" width="78"></nuxtLink></p>
      <div id="navContainer" class="navContainer tw-fixed tw-w-full md:tw-w-fit md:tw-relative md:tw-block">
        <ul id="gnav" class="site-header-gnavList gnavList md:tw-flex">
          <li class="gnavList-item">
            <nuxtLink :to="`/`">ホーム</nuxtLink>
          </li>
          <li class="gnavList-item">
            <nuxtLink :to="`/about`">SPグループの強み</nuxtLink>
          </li>
          <li class="gnavList-item">
            <nuxtLink :to="`/topics`">トピックス</nuxtLink>
          </li>
          <li class="gnavList-item">
            <nuxtLink :to="`/news`">ニュース</nuxtLink>
          </li>
        </ul>
      </div>
      <div id="btnSp" class="btnSp sp md:tw-hidden" @click="btnClick"><div class="btnSp-inner">
    <span class="bar"></span><span class="bar"></span><span class="bar"></span>
    </div></div>
    </div>
  </header>
  <!-- <div v-if="loading" class="tw-fixed tw-left-0 tw-top-0 tw-h-5 tw-w-full tw-z-50 tw-bg-green-500" /> -->
</template>
