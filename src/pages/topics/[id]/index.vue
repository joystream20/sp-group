
<script setup lang="ts">
import { Topics } from "~/types/blog";
import { ref } from 'vue'
import { MicroCMSQueries } from 'microcms-js-sdk';

const route = useRoute();
const id = String(route.params.id)
let _body:string = ""

const {data: article} = await useFetch(`/api/postDetail`, {
  params: {slug:id}
})

// console.log(article.value.publishedAt)

const nextQuery :MicroCMSQueries = {
  limit:1,
  orders: 'publishedAt',
  filters: 'publishedAt[greater_than]' + article.value.publishedAt
}
const {data: nextPost} = await useFetch(`/api/postList`, {
  params: nextQuery
})

const prevQuery :MicroCMSQueries = {
  limit:1,
  orders: '-publishedAt',
  filters: 'publishedAt[less_than]' + article.value.publishedAt
}
const {data: prevPost} = await useFetch(`/api/postList`, {
  params: prevQuery
})

// console.log(prevPost.value)

if(!article.value){
  throw createError({statusCode: 404, statusMessage: 'Page Not Found'})
}

_body = article.value.text;

if(article.value.shortCode){


article.value.shortCode.map(_code => {
  const code = new RegExp("&lt;&lt;"+_code.code+"&gt;&gt;")
  _body = _body.replace(code, _code.body)
})
}

const icatch = article.value.icatch.url

</script>

<template>
  <div>
    <div class="main">
      <span class="published">{{ article.publishedAt }}</span>
      <h1 class="title">{{ article.title }}</h1>
      <div v-if="icatch" class="image">
        <img :src="icatch" alt="">
      </div>
      <div class="md" v-html="_body"></div>
      <div class="pager">
        <div v-if="prevPost.contents.length > 0 ">
          <NuxtLink :to="`/topics/${prevPost.contents[0].id}`"><span class="arrow">&lt;</span></NuxtLink>
        </div>
        <div v-if="nextPost.contents.length > 0 ">
          <NuxtLink :to="`/topics/${nextPost.contents[0].id}`"><span class="arrow">&gt;</span></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
