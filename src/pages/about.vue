<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'about')
})
</script>

<template>
  <main class="site-main about page">
    <div class="breadContainer">
      <div class="breadList tw-flex tw-justify-end">
        <NuxtLink :to="`/`">ホーム</NuxtLink>
        <span class="arr tw-block tw-px-2">&gt;</span>
        <span class="txt current">SPグループの強み</span>
      </div>
    </div>
    <header class="ttlContainer tw-px-8 tw-relative">
      <div class="ttlContainer__inner u_mx">
        <h2 class="ttlContainer-ttl">
          <span class="txt tw-block">OUR</span>
          <span class="txt tw-block">ADVANTAGE</span>
        </h2>
        <p class="titleContainer-txt">SPグループの強み</p>
      </div>
    </header>
    <article class="secContainer">
      <section class="sec sec1 tw-pt-20">
      </section>
    </article>
  </main>
</template>

<style lang="scss" scoped>
.ttl{
  
}
.content{

}
</style>
