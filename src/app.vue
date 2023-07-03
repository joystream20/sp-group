<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const site = ref(null)

const ptype  = ref<string>('top')
const tscroll = ref<string>('')

const changePType = (_ptype:string) => {
  ptype.value = _ptype
  // console.log(ptype)
}

const tScroll = (_tscroll:string) => {
  tscroll.value = _tscroll
}

const { isMobile, isTablet, isDesktop } = useDevice()

const _ua = ref((() => {
  if(isMobile){
    return "mobile"
  }else if(isTablet){
    return "tablet"
  }else if(isDesktop){
    return "pc"
  }
})())

// life cycle
// onUnmounted(() => { console.log('unmounts')})
// onBeforeMount(() => { console.log('beforeMount') })
onBeforeUpdate(() => { 
  console.log('beforeupdate')
 })
// onUpdated(() => { console.log('updated') })
onActivated(() => { console.log('onactive') })
onMounted(() => { 
  
  setTimeout(() => {
    if(isMobile){
    _ua.value = 'mobile'
    console.log(site.value.classList)
    if(site.value.classList.contains('pc')){
      site.value.classList.remove('pc')
      site.value.classList.add('mobile')
    }
  }else if(isTablet){
    _ua.value = 'tablet'
  }else if(isDesktop){
    _ua.value = 'pc'
  }
  console.log(_ua.value)
  
  },500)
  
  // console.log('onMounted app')

if (process.client) {
  console.log('process client')
  gsap.registerPlugin(ScrollTrigger)
}

})

</script>

<template>
  <div :class="`${ptype} site ${_ua}`" ref="site">
    <p class="ua tw-absolute">{{ _ua }}</p>
    <Header :p_type="ptype" :t_scroll="tscroll" />
    <NuxtLayout>
      <NuxtLoadingIndicator 
      color="repeating-linear-gradient(to right, rgb(199, 210, 222) 0%, rgb(49, 87, 133) 41%, rgb(10, 55, 110) 100%)" />
      <NuxtPage @p_type="changePType" @t_scroll="tScroll" :ua="_ua" />
    </NuxtLayout>
    <Footer />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active{
}

.page-enter-active{
  transition: all .7s .3s;
}
.page-leave-active{
  transition: all .5s;
}

.page-enter-from,
.page-leave-to{
  opacity:0;
  filter: blur(.2rem);
}
</style>
