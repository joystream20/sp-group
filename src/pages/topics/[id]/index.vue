
<script setup lang="ts">
import { Topics } from "~/types/blog";
import { ref, onMounted } from 'vue'
import { MicroCMSQueries } from 'microcms-js-sdk';

const route = useRoute();
const id = String(route.params.id)
let _body:string = ""

const {data: article} = await useFetch(`/api/postDetail`, {
  params: {slug:id}
})

useHead({
  title: `${article.value.title} | SPグループ`,
  meta:[]
})

const cats = article.value.category;
console.log(cats)
// console.log(article.value.category)

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

_body = article.value.content;

if(article.value.shortCode){


article.value.shortCode.map(_code => {
  const code = new RegExp("&lt;&lt;"+_code.code+"&gt;&gt;")
  _body = _body.replace(code, _code.body)
})
}

const icatch = article.value.icatch.url

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'topics')
})

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    onBeforeEnter: (el) => {
      console.log('before enter')
    }
  }
})

</script>

<template>
  <main class="site-main topics single">
    <div class="breadContainer">
      <div class="breadList tw-flex tw-justify-end">
        <NuxtLink :to="`/`">ホーム</NuxtLink>
        <span class="arr tw-block tw-px-2">&gt;</span>
        <NuxtLink :to="`/topics`">トピックス</NuxtLink>
        <span class="tw-block tw-px-2">-</span>
        <span class="txt current">{{ $formatDate(String(article.publishedAt)) }}</span>
      </div>
    </div>


    <div class="postContainer tw-px-8">
      <div class="postContainer__inner u_mx">

        <div class="topContainer">
          <div class="topContainer__inner">
            <div class="ttlContainer">
              <h1 class="ttlContainer-ttl">{{ article.title }}</h1>
            </div>
            <div class="md:tw-flex md:tw-flex-row-reverse md:tw-items-end">
              <div v-if="icatch" class="image">
                <img :src="icatch" alt="">
              </div>
              <div class="txtContainer tw-flex tw-items-center tw-text-smm">
                <time class="published tw-mr-4">{{ $formatDate(String(article.publishedAt)) }}</time>
                <ul class="catList">
                  <li class="catList-item cat" v-for="cat in cats" :key="cat.id">
                    <NuxtLink :to="`/cats/${cat.id}/page/1`">{{ cat.name }}</NuxtLink>
                  </li>
                </ul>
                </div>
            </div>
          </div>
        </div>

        <div class="postContent tw-mt-20" v-html="_body"></div>
        <div class="pager tw-mt-24 md:tw-mt-48">
          <div v-if="prevPost.contents && prevPost.contents.length > 0 ">
            <NuxtLink :to="`/topics/${prevPost.contents[0].id}`" class="_btn prev"><span class="arrow">&lt;</span></NuxtLink>
          </div>
          <div class="btnContainer">
            <NuxtLink :to="`/topics`" class="btn">一覧へ戻る</NuxtLink>
          </div>
          <div v-if="nextPost.contents && nextPost.contents.length > 0 ">
            <NuxtLink :to="`/topics/${nextPost.contents[0].id}`" class="_btn next"><span class="arrow">&gt;</span></NuxtLink>
          </div>
        </div>

        <LinkAreaNews />
        
      </div>
    </div>

  </main>
</template>
