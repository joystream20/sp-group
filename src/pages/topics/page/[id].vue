<script setup lang="ts">
import { MicroCMSQueries } from 'microcms-js-sdk';

const route = useRoute()
const page = Number(route.params.id || 1)
const type:string = "topics"
</script>

<template>
  <div>
    <h2>topics - page{{ page }}</h2>
    <Topic :page="page" :belongsTo="type" />
  </div>
</template>
