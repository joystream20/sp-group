
<script setup lang="ts">
import {MicroCMSQueries} from 'microcms-js-sdk'
const route = useRoute()
const year = String(route.params.year || '2023')
const queries:MicroCMSQueries = {
  filters: `publishedAt[contains]${year}`
}
const {data: posts} = await useFetch('/api/postList',{params:queries})
</script>

<template>
  <div>
    <h2>products-year</h2>
    <p>year : {{ year }}</p>
    <div class="postContainer">
      <PostList :posts="posts.contents" />
    </div>
  </div>
</template>
