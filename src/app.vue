<script setup lang="ts">
import { ref } from 'vue'

const ptype  = ref<string>('top')

const changePType = (_ptype:string) => {
  ptype.value = _ptype
  // console.log(ptype)
}

// life cycle
// onUnmounted(() => { console.log('unmounts')})
// onBeforeMount(() => { console.log('beforeMount') })
onBeforeUpdate(() => { console.log('beforeupdate') })
// onUpdated(() => { console.log('updated') })
// onActivated(() => { console.log('onactive') })

</script>

<template>
  <div :class="`${ptype} site`">
    <Header :p_type="ptype" />
    <NuxtLayout>
      <NuxtLoadingIndicator 
      color="repeating-linear-gradient(to right, rgb(199, 210, 222) 0%, rgb(49, 87, 133) 41%, rgb(10, 55, 110) 100%)" />
      <NuxtPage @p_type="changePType" />
    </NuxtLayout>
    <Footer />
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
