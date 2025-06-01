<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <div>我是一个vue项目{{ count }}</div>
  <button @click="count++">点击</button>
</template>

<style scoped>

</style>
