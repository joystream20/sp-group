<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'about')
})
</script>

<template>
  <div class="content">
    <h2 class="ttl">about</h2>
  </div>
</template>

<style lang="scss" scoped>
.ttl{
  
}
.content{

}
</style>
