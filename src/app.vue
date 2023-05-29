<script setup lang="ts">
import { ref } from 'vue'

const ptype  = ref<string>('top')

const changePType = (_ptype:string) => {
  ptype.value = _ptype
  // console.log(ptype)
}

const { isMobile, isTablet, isDesktop } = useDevice()

const _ua = (() => {
  if(isMobile){
    return "mobile"
  }else if(isTablet){
    return "tablet"
  }else if(isDesktop){
    return "pc"
  }
})()

// life cycle
// onUnmounted(() => { console.log('unmounts')})
// onBeforeMount(() => { console.log('beforeMount') })
onBeforeUpdate(() => { console.log('beforeupdate') })
// onUpdated(() => { console.log('updated') })
// onActivated(() => { console.log('onactive') })

</script>

<template>
  <div :class="`${ptype} site ${_ua}`">
    
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active{
  transition: all .4s;
}

.page-enter-from,
.page-leave-to{
  opacity:0;
  filter: blur(.2rem);
}
</style>
