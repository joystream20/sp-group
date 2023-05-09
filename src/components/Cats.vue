<script setup lang="ts">
  import { Category } from '../types/blog'
  
  type Props = {
    cats: Category[]
    selectedCatId?: string,
    belongsTo?: string
  }

  const {cats, selectedCatId, belongsTo} = defineProps<Props>();

  function getClass(catId: string){
    if(catId == selectedCatId){
      return 'active'
    }else{
      return 'link'
    }
  }



</script>

<template>
    <div class="wrapper">
      <h1>Category</h1>
      <ul>
        <li v-for="cat in cats" :key="cat.id" class="list">
          <NuxtLink :to="`/cats/${cat.id}/page/1?type=${belongsTo}`" :class="getClass(cat.id)">{{ cat.name }}</NuxtLink>
        </li>
      </ul>
    </div>
</template>
