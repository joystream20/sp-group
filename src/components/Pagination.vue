<script setup lang="ts">

type Props = {
  numPages:number,
  current: number,
  path: string,
  belongsTo: string | undefined
}

const { numPages, current, path, belongsTo } = defineProps<Props>()

function getPath(p:number){
  if(belongsTo){
    return `${path}/${p}?type=${belongsTo}`
  }else{
    return `${path}/${p}`
  }
  
}

function getClass(page:number, current:number){
  if(page == current) return 'current pageList-item'
  return 'link pageList-item'
}
</script>

<template>
  <div class="pagination">
    <!-- <p>pages: {{ numPages }}</p>
    <p>current: {{ current }}</p> -->
    <ul class="pageList tw-flex tw-justify-center md:tw-text-xl u_col1 tw-font-semibold">
      <li v-for="page in numPages" :key="page" :class="getClass(page, current)">
        <template v-if="page === current">
          <span class="pagination-item">{{ page }}</span>
        </template>
        <template v-else>
          <NuxtLink :to="getPath(page)"><span class="pagination-item">{{ page }}</span></NuxtLink>
        </template>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.pageList{
  padding:2em 1em;
  &-item{
    margin:0 .5em;
    &.current{
      border-bottom:1px solid;
    }
  }
}

@media screen and (min-width: 896px) {
  .pageList{
    &-item{
      
    }
  }
}
</style>
