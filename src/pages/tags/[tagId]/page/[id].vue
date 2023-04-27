<script setup lang="ts">
const route = useRoute()
const page = Number(route.params.id || "")
const tagId = String(route.params.tagId || "")
const belongsTo = String(route.query.type || '')
// console.log(route.query.type)
</script>

<template>
  <Product :page="page" :tagId="tagId" :belongsTo="belongsTo" />
</template>
