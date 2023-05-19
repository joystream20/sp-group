
<script setup lang="ts">
import { onMounted } from 'vue';
const {data: topics} = await useFetch('/api/postList')
const type:string = "topics"

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'topics')
})
</script>

<template>
  <main class="site-main topics">
    <h2>Topics-topXXXXX</h2>
    <p>this is topics top page</p>
    <Topic :page=1 :belongsTo="type"/>
  </main>
</template>
