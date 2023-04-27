<script setup lang="ts">
import { MicroCMSQueries } from 'microcms-js-sdk';

const route = useRoute()
const page = Number(route.params.id || 1)
const type:string = "post"
</script>

<template>
  <div>
    <h2>products - page{{ page }}</h2>
    <Product :page="page" :belongsTo="type" />
  </div>
</template>
