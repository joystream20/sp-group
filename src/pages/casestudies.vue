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
        <span class="txt current">東北〇〇ホール様の事例</span>
      </div>
    </div>
    <header class="ttlContainer tw-px-8 tw-relative">
      <div class="ttlContainer__inner u_mx">
        <h2 class="ttlContainer-ttl">
          <span class="txt tw-block">CASE STUDIES</span>
        </h2>
        <p class="titleContainer-txt">ホール店舗数：東北県内に23店舗</p>
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
