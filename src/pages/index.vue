<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'top')
})

</script>
<template>
  <main class="site-main">
    <div class="heroContainer tw-relative tw-w-full max-md:tw-h-screen md:tw-aspect-video">
      <img src="@/assets/images/poster01.jpg" class="tw-object-cover tw-w-full tw-h-full" alt="">
      <div class="imageContainer tw-absolute tw-inset-0 tw-w-full">
        <div class="imageContainer-image tw-absolute tw-w-top1 tw-top-[calc(3.8%+var(--hh))] tw-left-[4.2%]">
          <img src="@/assets/images/top/img_h_1.jpg" alt="">
        </div>
        <div class="imageContainer-image tw-absolute tw-w-top2 tw-top-[calc(14.7%+var(--hh))] tw-right-[1.85%]">
          <img src="@/assets/images/top/img_h_2.jpg" alt="">
        </div>
        <div class="imageContainer-image tw-absolute tw-w-top3 tw-bottom-0 tw-translate-y-bt3 tw-left-[47.3%]">
          <img src="@/assets/images/top/img_h_3.jpg" alt="">
        </div>
        <div class="imageContainer-image tw-absolute tw-w-top4 tw-bottom-0 tw-right-0 tw-translate-y-bt4">
          <img src="@/assets/images/top/img_h_4.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="site-main__inner">
      <section class="sec sec1">
        <div class="sec__inner tw-max-w-6xl tw-p-5 md:pw-p-2.5">

        </div>
      </section>
    </div>
  </main>
</template>
