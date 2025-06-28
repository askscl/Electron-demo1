<template>

    <div>
        <h2>打开系统通知</h2>
        <button @click="btn_open()">Open Notification</button>
    </div>

</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

const btn_open = () => {
    const options = {
        title: '云上通知',
        body: '这是一条通知',
        icon: '@/assets/logo.svg'
    }
    const notice = new window.Notification(options.title, options)
    notice.onclick = () => {
        console.log('点击了通知')
    }
    notice.onclose = () => {
        console.log('关闭了通知')
    }
}

</script>

<style scoped>

</style>
