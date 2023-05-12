<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'about')
})
</script>

<template>
  <main class="site-main">
    <h2 class="ttl">about</h2>
  </main>
</template>

<style lang="scss" scoped>
.ttl{
  
}
.content{

}
</style>
