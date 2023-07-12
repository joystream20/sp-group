<script setup lang="ts">
import { onMounted } from 'vue';

const route = useRoute()
const page = Number(route.params.id || 1)
const catId = String(route.params.catId || "")
const belongsTo = String(route.query.type || '')
console.log(route.params.catId)

// const {data: news} = await useFetch('/api/newsList',{})

const ttl_view = ref<String>('')

const {data: currentCat} = await useFetch(`/api/catDetail`, {
  params: {catId: catId}
})

useHead({
  title: `${currentCat.value.name} | SPグループ`,
  meta:[]
})

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'news')

  // console.log(currentCat.value.name)
  nextTick(() => {
    setTimeout(() => {
      ttl_view.value = 'on'
    },1500)
  })
})

</script>

<template>
  <main class="site-main news page">
    <div class="breadContainer">
      <div class="breadList tw-flex tw-justify-end">
        <NuxtLink :to="`/`">ホーム</NuxtLink>
        <span class="arr tw-block tw-px-2">&gt;</span>
        <NuxtLink :to="`/news`">ニュース</NuxtLink>
        <span class="tw-block tw-px-2">-</span>
        <span class="txt current">{{ currentCat.name }}</span>
      </div>
    </div>
    <header class="ttlContainer tw-px-8 tw-relative">
      <div class="ttlContainer__inner u_mx">
        <h2 :class="`ttlContainer-ttl ${ttl_view}`">
          <span class="txt tw-block anm_t"><span>NEWS</span></span>
        </h2>
        <p class="ttlContainer-txt">ニュース</p>
      </div>
    </header>
    <article class="postContainer tw-px-8">
      <div class="postContainer__inner u_mx">
        <News :page="page" :catId="catId" :belongsTo="belongsTo" :path="`/ncats/${catId}/page`" />
        <LinkAreaNews />
      </div>
    </article>
  </main>
</template>
