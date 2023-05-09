<script setup lang="ts">

type Props = {
  numPages:number,
  current: number
}

const { numPages, current } = defineProps<Props>()

function getPath(p:number){
  return `/topics/page/${p}`
}

function getClass(page:number, current:number){
  if(page == current) return 'current'
  return 'link'
}
</script>

<template>
  <div class="pagination">
    <p>pagination</p>
    <p>pages: {{ numPages }}</p>
    <p>current: {{ current }}</p>
    <NuxtLink v-for="page in numPages" :key="page" :class="getClass(page, current)" :to="getPath(page)">
      <span class="pagination-litem">{{ page }}</span>
    </NuxtLink>
  </div>
</template>
