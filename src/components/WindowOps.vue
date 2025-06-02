<template>

    <div>
        <button @btn_minimize="btn_minimize">最小化</button>
        <button @btn_maximize="btn_maximize">最大化</button>
        <button @btn_close="btn_close">关闭</button>
    </div>

</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
const { BrowserWindow} = require('electron')

const btn_minimize = () => {
    
}

const btn_maximize = () => {
    
}

const btn_close = () => {
    
}
</script>

<style scoped>

</style>
