<script setup lang="ts">
  import { Tag } from '../types/blog'
  
  type Props = {
    tags: Tag[]
    selectedTagId?: string,
    belongsTo?: string
  }

  const {tags, selectedTagId, belongsTo} = defineProps<Props>();

  function getClass(tagId: string){
    if(tagId == selectedTagId){
      return 'active'
    }else{
      return 'link'
    }
  }



</script>

<template>
    <div class="wrapper">
      <h1>Tag</h1>
      <ul>
        <li v-for="tag in tags" :key="tag.id" class="list">
          <NuxtLink :to="`/tags/${tag.id}/page/1?type=${belongsTo}`" :class="getClass(tag.id)">{{ tag.name }}</NuxtLink>
        </li>
      </ul>
    </div>
</template>
