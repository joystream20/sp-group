<script setup lang="ts">
import { onMounted } from 'vue';
const type:string = "company"

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'company')
})
</script>
<template>
  <main class="site-main philosophy page">
    <div class="breadContainer">
      <div class="breadList tw-flex tw-justify-end">
        <NuxtLink :to="`/`">ホーム</NuxtLink>
        <span class="arr tw-block tw-px-2">&gt;</span>
        <NuxtLink :to="`/company`">企業情報</NuxtLink>
        <span class="tw-block tw-px-2">-</span>
        <span class="txt current">経営理念</span>
      </div>
    </div>
    <header class="ttlContainer tw-px-8 tw-relative">
      <div class="ttlContainer__inner u_mx">
        <h2 class="ttlContainer-ttl">
          <span class="txt tw-block">COMPANY</span>
          <span class="txt tw-block">INFO</span>
        </h2>
        <p class="ttlContainer-txt">経営理念</p>
      </div>
    </header>
    <article class="secContainer">
      <section class="sec sec1 angle">
        <div class="sec__inner">
          <header class="sec__header">
            <h2 class="sec__header-ttl">
              私たちは、夢を現実に導く為の企業であり続けます。
            </h2>
          </header>
          <div class="sec__container">
            <dl class="phList">
            <div class="phList-box">
              <dt><span class="num">1.</span>お客様がいる幸せ</dt>
              <dd>お客様と共にビジネスが出来る幸せ</dd>
            </div>
           </dl>
          </div>
        </div>
      </section>
      
    </article>
    
  </main>
</template>
