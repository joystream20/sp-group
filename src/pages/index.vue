<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'top')
})

</script>
<template>
  <div>
    <h2>top</h2>
  </div>
</template>
