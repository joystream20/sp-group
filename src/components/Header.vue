<template>
  <header class="site-header">
    <div class="site-header__inner">
      <ul class="site-header-gnavList gnavList">
        <li class="gnavList-item">
          <nuxtLink :to="`/`">top</nuxtLink>
        </li>
        <li class="gnavList-item">
          <nuxtLink :to="`/about`">about</nuxtLink>
        </li>
        <li class="gnavList-item">
          <nuxtLink :to="`/topics`">topics</nuxtLink>
        </li>
        <li class="gnavList-item">
          <nuxtLink :to="`/news`">news</nuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>
