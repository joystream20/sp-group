<script setup lang="ts">
const route = useRoute()
const page = Number(route.params.id || "")
const catId = String(route.params.catId || "")
const belongsTo = String(route.query.type || '')
// console.log(route.query.type)
</script>

<template>
  <Topic :page="page" :catId="catId" :belongsTo="belongsTo" />
</template>
