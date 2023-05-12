<script setup lang="ts">
import { onMounted } from 'vue';
const {data: news} = await useFetch('/api/newsList')

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'news')
})

</script>

<template>
  <main class="site-main">
    <h2>News</h2>
    <div class="postContainer">
      <NewsList :news="news.contents" />
    </div>
  </main>
</template>
