<script setup lang="ts">
import { News } from '../types/blog'

type Props = {
  news: News[]
}

const { news } = defineProps<Props>()

</script>

<template>
  <div class="newsList">
    <article v-for="post in news" class="newsList-item" :key="post.id">
      <div class="catContainer">
        <span class="cat tw-text-sm" v-for="cat in post.category" :key="cat.id">
          <NuxtLink :to="`/cats/${cat.id}/page/1`">{{ cat.name }}</NuxtLink>
        </span>
      </div>
      <div class="txtContainer tw-flex">
        <time class="published">{{ $formatDate(String(post.publishedAt)) }}</time>
        <NuxtLink :to="`/news/${post.id}`">
          <h2 class="ttl tw-font-bold">{{ post.title }}</h2>
        </NuxtLink>
      </div>
    </article>
  </div>
</template>
