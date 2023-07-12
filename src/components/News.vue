<script setup lang="ts">
import { MicroCMSQueries } from 'microcms-js-sdk';
import { POST_PER_PAGE } from '../setting/siteSetting';

type Props = {
  page: number,
  catId?:string,
  belongsTo:string | undefined,
  path: string
}

const { page, catId, belongsTo, path } = defineProps<Props>()

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
if(belongsTo){
  cat_queries.filters=`belongsto[contains]${belongsTo}`
}

const {data: news} = await useFetch('/api/newsList', {params: queries})

const {data: cats} = await useFetch('/api/catList', {params: cat_queries})

const numPages = Math.ceil(news.value.totalCount / limit)



</script>

<template>
 <div>
  <div class="archiveNavContainer tw-flex tw-justify-end">
      <Cats :cats="cats.contents" :selectedCatId="catId" :belongsTo="belongsTo" />
    </div>
    <div class="listContainer tw-mt-24 md:tw-mt-36">
      <NewsList :news="news.contents" />
    </div>
    <div class="pagerContainer tw-mt-24 md:tw-mt-36">
      <!-- <p>-{{ path }} {{ belongsTo }}-</p> -->
      <Pagination :numPages="numPages" :current="page" :path="path" :belongsTo="belongsTo" />
    </div>  
</div> 
</template>
