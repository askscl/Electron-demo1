<template>

    <div>
        <button @click="btn_rtm">渲染进程到主进程===异步操作</button>
        <br/>
        <button @click="btn_rtm_sync">渲染进程到主进程==同步操作</button> 
    </div>

</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
const { ipcRenderer } = require('electron')

// 渲染进程到主进程===异步操作
const btn_rtm = () => {
    ipcRenderer.send('rtm', '渲染进程发送的异步消息')
}

// 渲染进程到主进程==同步操作
const btn_rtm_sync = () => {
    const res=ipcRenderer.sendSync('rtm_sync', '同步消息')
    console.log(res)
}

ipcRenderer.on('mtr', (event, data) => {
    console.log(data)
})

</script>

<style scoped>

</style>
