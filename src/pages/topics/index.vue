
<script setup lang="ts">
const {data: topics} = await useFetch('/api/postList')
const type:string = "topics"
</script>

<template>
  <div>
    <h2>Topics-topXXXXX</h2>
    <p>this is topics top page</p>
    <Topic :page=1 :belongsTo="type"/>
  </div>
</template>
