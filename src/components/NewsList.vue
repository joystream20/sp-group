<script setup lang="ts">
import { News } from '../types/blog'

type Props = {
  news: News[]
}

const { news } = defineProps<Props>()

</script>

<template>
  <div>
    <article v-for="post in news" class="article" :key="post.id">
      <NuxtLink :to="`/news/${post.id}`">
        <h2>{{ post.title }}</h2>
      </NuxtLink>
    </article>
  </div>
</template>
