<script setup lang="ts">
import { Topics } from '../types/blog'

type Props = {
  topics: Topics[]
}

const { topics } = defineProps<Props>()
// console.log(topics)
</script>

<template>
  <div>
    <article class="article" v-for="topic in topics" :key="topic.id">
        <span class="published">{{ topic.publishedAt }}</span>
        <span class="tag" v-for="cat in topic.category" :key="cat.id">{{ cat.name }}</span>
        <NuxtLink :to="`/topics/${topic.id}`">
          <h2 class="title">{{ topic.title }}</h2>
        </NuxtLink>
      </article>
  </div>
</template>
