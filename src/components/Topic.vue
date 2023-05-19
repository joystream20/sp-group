<script setup lang="ts">
import { MicroCMSQueries } from 'microcms-js-sdk';
import { POST_PER_PAGE } from '../setting/siteSetting';


type Props = {
  page: number,
  catId?:string,
  belongsTo:string | undefined
}

const { page, catId, belongsTo } = defineProps<Props>()

const limit = POST_PER_PAGE
const queries:MicroCMSQueries = {
  limit: limit,
  offset: (page - 1) * limit
}

const cat_queries: MicroCMSQueries = {
  limit: 100,
}

if(catId){
  queries.filters=`category[contains]${catId}`
}
// console.log(queries)
// console.log(belongsTo,page)
if(belongsTo){
  cat_queries.filters=`belongsto[contains]${belongsTo}`
}

const {data: topics} = await useFetch('/api/postList', {params: queries})

const {data: cats} = await useFetch('/api/catList', {params: cat_queries})

const numPages = Math.ceil(topics.value.totalCount / limit)

// console.log(cats)
// console.log(topics)
</script>

<template>
  <div>
    <div class="postContainer">
      <PostList :topics="topics.contents" />
    </div>
    <div class="catContainer">
      <Cats :cats="cats.contents" :selectedTagId="catId" :belongsTo="belongsTo" />
    </div>
    <div class="pagerContainer">
      <Pagination :numPages="numPages" :current="page" />
    </div>
  </div>
</template>
