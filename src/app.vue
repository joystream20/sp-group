<script setup lang="ts">
import { ref } from 'vue'

const ptype  = ref<string>('top')

const changePType = (_ptype:string) => {
  ptype.value = _ptype
  // console.log(ptype)
}
</script>

<template>
  <div class="site">
    <Header :p_type="ptype" />
    <NuxtLayout>
      <NuxtLoadingIndicator 
      color="repeating-linear-gradient(to right, rgb(199, 210, 222) 0%, rgb(49, 87, 133) 41%, rgb(10, 55, 110) 100%)" />
      <NuxtPage @p_type="changePType" />
    </NuxtLayout>
    <Footer />
  </div>
</template>
