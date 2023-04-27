<script setup lang="ts">
const {data: news} = await useFetch('/api/newsList')
console.log(news)
</script>

<template>
  <div>
    <h2>News</h2>
    <div class="postContainer">
      <NewsList :news="news.contents" />
    </div>
  </div>
</template>
