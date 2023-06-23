<script setup lang="ts">
import { onMounted } from 'vue';
const {data: news} = await useFetch('/api/newsList')
const type:string = "news"

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
        <p class="ttlContainer-txt">ニュース</p>
      </div>
    </header>
    <article class="postContainer">
      <div class="postContainer__inner u_mx">
        <!-- <NewsList :news="news.contents" /> -->
        <News :page=1 :belongsTo="type" :path="`/news/page`" />
        <LinkAreaNews />
      </div>
    </article>
  </main>
</template>
