<script setup lang="ts">
import { Post } from '../types/blog'

type Props = {
  posts: Post[]
}

const { posts } = defineProps<Props>()
</script>

<template>
  <div>
    <article class="article" v-for="post in posts" :key="post.id">
        <span class="published">{{ post.publishedAt }}</span>
        <span class="tag" v-for="tag in post.tag" :key="tag.id">{{ tag.name }}</span>
        <NuxtLink :to="`/products/${post.id}`">
          <h2 class="title">{{ post.title }}</h2>
        </NuxtLink>
      </article>
  </div>
</template>
