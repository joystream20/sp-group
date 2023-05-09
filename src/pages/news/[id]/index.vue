<script setup lang="ts">
import { onMounted } from 'vue'
const route = useRoute()
const id = String(route.params.id)

const {data: article} = await useFetch(`/api/newsDetail`, {
  params: {slug: id}
})

if(!article.value){
  throw createError({statusCode: 404, statusMessage: 'Page Not Found'})
}

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'news')
})
</script>

<template>
  <div>
    <div class="main">
      <span class="published">{{ article.publishedAt }}</span>
      <h1 class="title">{{ article.title }}</h1>
      <div class="content" v-html="article.text"></div>
    </div>
  </div>
</template>
