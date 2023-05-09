<script setup lang="ts">

type Props = {
  p_type: string
}

defineProps<Props>()

</script>
<template>
  <header class="site-header tw-text-white">
    <div class="site-header__inner u_mx1100 u_d_fl u_fl_jc_sb">
      <h1 class="site-title" v-if="p_type == 'top'"><img src="@/assets/images/img_logo.png" width="78" ></h1>
      <p class="site-title" v-else><nuxtLink :to="`/`"><img src="@/assets/images/img_logo.png" width="78"></nuxtLink></p>
      <ul class="site-header-gnavList gnavList tw-flex">
        <li class="gnavList-item">
          <nuxtLink :to="`/`">ホーム</nuxtLink>
        </li>
        <li class="gnavList-item">
          <nuxtLink :to="`/about`">SPグループの強み</nuxtLink>
        </li>
        <li class="gnavList-item">
          <nuxtLink :to="`/topics`">トピックス</nuxtLink>
        </li>
        <li class="gnavList-item">
          <nuxtLink :to="`/news`">ニュース</nuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>
