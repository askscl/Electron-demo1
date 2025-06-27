<template>

    <div>
        <button @click="btnClick">Click me</button>
        <button @click="btn_openFolder">打开目录</button>
        <iframe id="myIframe" src="https://www.baidu.com/"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
const {shell} = require("electron");
const path = require("path");

const btnClick = () => {
    shell.openExternal("https://www.baidu.com/");
}

const btn_openFolder = () => {
    // const url1 = path.resolve(__filename);
    // console.log(url1);
    // shell.showItemInFolder(path.resolve(__filename));
    // 打开当前目录
    // shell.showItemInFolder()
}
</script>

<style scoped>
#myIframe {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 50px;
    left: 0;
    border: none
}
</style>
