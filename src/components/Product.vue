<script setup lang="ts">
import { MicroCMSQueries } from 'microcms-js-sdk';
import { POST_PER_PAGE } from '../setting/siteSetting';


type Props = {
  page: number,
  tagId?:string,
  belongsTo:string | undefined
}

const { page, tagId, belongsTo } = defineProps<Props>()

const limit = POST_PER_PAGE
const queries:MicroCMSQueries = {
  limit: limit,
  offset: (page - 1) * limit
}

const tag_queries: MicroCMSQueries = {
  limit: 100,
}

if(tagId){
  queries.filters=`tag[contains]${tagId}`
}
// console.log(belongsTo,page)
if(belongsTo){
  tag_queries.filters=`belongsto[contains]${belongsTo}`
}

const {data: posts} = await useFetch('/api/postList', {params: queries})

const {data: tags} = await useFetch('/api/tagList', {params: tag_queries})

const numPages = Math.ceil(posts.value.totalCount / limit)

// console.log(tags)

</script>

<template>
  <div>
    <div class="postContainer">
      <PostList :posts="posts.contents" />
    </div>
    <div class="tagContainer">
      <Tags :tags="tags.contents" :selectedTagId="tagId" :belongsTo="belongsTo" />
    </div>
    <div class="pagerContainer">
      <Pagination :numPages="numPages" :current="page" />
    </div>
  </div>
</template>
