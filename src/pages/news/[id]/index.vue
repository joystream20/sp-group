<script setup lang="ts">
const route = useRoute()
const id = String(route.params.id)

const {data: article} = await useFetch(`/api/newsDetail`, {
  params: {slug: id}
})

if(!article.value){
  throw createError({statusCode: 404, statusMessage: 'Page Not Found'})
}
</script>

<template>
  <div>
    <div class="main">
      <span class="published">{{ article.publishedAt }}</span>
      <h1 class="title">{{ article.title }}</h1>
      <div class="content" v-html="article.content"></div>
    </div>
  </div>
</template>
