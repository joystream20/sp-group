<script setup lang="ts">
import { onMounted } from 'vue';
const {data: news} = await useFetch('/api/newsList')

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'news')
})

</script>

<template>
  <main class="site-main news page">
    <div class="breadContainer">
      <div class="breadList tw-flex tw-justify-end">
        <NuxtLink :to="`/`">ホーム</NuxtLink>
        <span class="arr tw-block tw-px-2">&gt;</span>
        <span class="txt current">ニュース</span>
      </div>
    </div>
    <header class="ttlContainer tw-px-8 tw-relative">
      <div class="ttlContainer__inner u_mx">
        <h2 class="ttlContainer-ttl">
          <span class="txt tw-block">NEWS</span>
        </h2>
        <p class="titleContainer-txt">ニュース</p>
      </div>
    </header>
    <article class="postContainer">
      <div class="postContainer__inner u_mx">
        <NewsList :news="news.contents" />
      </div>
    </article>
  </main>
</template>
