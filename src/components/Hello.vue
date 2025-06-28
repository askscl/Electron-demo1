<template>

    <div>
        <h2>我是2一个vue3项目{{ count }}</h2>
        <button @click="btn_open">点击</button>
    </div>

</template>

    <script setup lang="ts">
    import { ref } from "vue"

    const count = ref(0)

    const btn_open = () => {
        count.value++
    }
</script>

    <style scoped></style>
