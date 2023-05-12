<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'top')
})

</script>
<template>
  <main class="site-main">
    <div class="heroContainer tw-aspect-video">
      <img src="@/assets/images/poster01.jpg" class="tw-object-cover tw-w-full tw-h-full" alt="">
    </div>
    <div class="site-main__inner">
      <section class="sec sec1">
        <div class="sec__inner tw-max-w-6xl tw-p-5 md:pw-p-2.5">

        </div>
      </section>
    </div>
  </main>
</template>
