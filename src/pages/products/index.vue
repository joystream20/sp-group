
<script setup lang="ts">
const {data: posts} = await useFetch('/api/postList')
const type:string = "post"
</script>

<template>
  <div>
    <h2>products-topXXXXX</h2>
    <p>this is products top page</p>
    <Product :page=1 :belongsTo="type"/>
  </div>
</template>
