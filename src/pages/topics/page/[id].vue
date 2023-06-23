<script setup lang="ts">
import { MicroCMSQueries } from 'microcms-js-sdk';
import { onMounted } from 'vue';

const emit = defineEmits(['p_type'])

const ttl_view = ref<String>()

onMounted(() => {
  emit('p_type', 'topics')

  nextTick(() => {
    setTimeout(() => {
      ttl_view.value = 'on'
    },1500)
  })
})

const route = useRoute()
const page = Number(route.params.id || 1)
const type:string = "topics"
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
        <h2 :class="`ttlContainer-ttl ${ttl_view}`">
          <span class="txt tw-block anm_t"><span>TOPICS</span></span>
        </h2>
        <p class="ttlContainer-txt">トピックス</p>
      </div>
    </header>
    <article class="postContainer">
      <div class="postContainer__inner u_mx">
        <Topic :page="page" :belongsTo="type" :path="`/topics/page`" />
        <LinkAreaNews />
      </div>
    </article>
  </main>
</template>
