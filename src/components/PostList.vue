<script setup lang="ts">
import { Topics } from '../types/blog'

type Props = {
  topics: Topics[]
}

const { topics } = defineProps<Props>()
// console.log(topics)

</script>

<template>
  <div class="topicList">
    <article class="topicList-item" v-for="topic in topics" :key="topic.id">
        <div class="image">
          <NuxtLink :to="`/topics/${topic.id}`"><img :src="topic.icatch.url" alt=""></NuxtLink>
        </div>
        <div class="txtContainer md:tw-flex tw-items-center">
          <time class="published tw-mr-4">{{ $formatDate(String(topic.publishedAt)) }}</time>
          <ul class="catList">
            <li class="catList-item cat tw-text-sm btn" v-for="cat in topic.category" :key="cat.id">
              <NuxtLink :to="`/cats/${cat.id}/page/1`" class="tw-leading-none md:tw-leading-tight">{{ cat.name }}</NuxtLink>
              </li>
          </ul>
        </div>
        <NuxtLink :to="`/topics/${topic.id}`">
          <h2 class="title tw-font-bold leading-tight">{{ topic.title }}</h2>
        </NuxtLink>
      </article>
  </div>
</template>
