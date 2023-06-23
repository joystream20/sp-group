
<script setup lang="ts">
import { onMounted } from 'vue';
const {data: topics} = await useFetch('/api/postList')
const type:string = "topics"

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'topics')
})
</script>

<template>
  <main class="site-main topics page">
    <div class="breadContainer">
      <div class="breadList tw-flex tw-justify-end">
        <NuxtLink :to="`/`">ホーム</NuxtLink>
        <span class="arr tw-block tw-px-2">&gt;</span>
        <span class="txt current">トピックス</span>
      </div>
    </div>
    <header class="ttlContainer tw-px-8 tw-relative">
      <div class="ttlContainer__inner u_mx">
        <h2 class="ttlContainer-ttl">
          <span class="txt tw-block">TOPICS</span>
        </h2>
        <p class="ttlContainer-txt">トピックス</p>
      </div>
    </header>
    <article class="postContainer">
      <div class="postContainer__inner u_mx">
        <Topic :page=1 :belongsTo="type" :path="`/topics/page`" />
        <LinkAreaNews />
      </div>
    </article>
  </main>
</template>
