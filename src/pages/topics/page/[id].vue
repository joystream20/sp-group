<script setup lang="ts">
import { MicroCMSQueries } from 'microcms-js-sdk';
import { onMounted } from 'vue';

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'topics')
})

const route = useRoute()
const page = Number(route.params.id || 1)
const type:string = "topics"
</script>

<template>
  <main class="site-main topics">
    <h2>topics - page{{ page }}</h2>
    <Topic :page="page" :belongsTo="type" />
  </main>
</template>
