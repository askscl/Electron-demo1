<template>

    <div>
        <h2>剪贴板</h2>
        <h3>文字</h3>
        <div>
            <input type="text" v-model="text" />
        <button @click="copy">复制</button>
        <input type="text" v-model="text2" />
        <button @click="paste">粘贴</button>
        </div>
        <h3>图片</h3>
        <p>备注：图片路径获取不到</p>
        <div ref="div_image" class="div_image">
            <button @click="copyImage">复制图片</button>
        </div>
        
    </div>

</template>

<script setup lang="ts">
import { ref, reactive , useTemplateRef} from "vue"
const { clipboard, nativeImage} = require("electron")
import Img from "@/assets/fq.png"

const text = ref("")
const text2 = ref("")

const copy = () => {
    // 浏览器API
    // navigator.clipboard.writeText(text.value)

    // electron API
    clipboard.writeText(text.value)

}

const paste = () => {
    // 浏览器API
    /* navigator.clipboard.readText().then((res) => {
        text2.value = res
    }) */

    // electron API
    text2.value = clipboard.readText()

}

const div_image = useTemplateRef("div_image")
const copyImage = () => {
    // electron API
    // clipboard.writeImage(nativeImage.createFromDataURL("https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"))
    // clipboard.writeImage(nativeImage.createFromPath('@/src/assets/logo.svg'))
    clipboard.writeImage(nativeImage.createFromPath('@/src/assets/fq.png'))
    // clipboard.writeImage(nativeImage.createFromPath(Img))
    // div_image.value!.style.backgroundImage = `url(${clipboard.readImage().toDataURL()})`
    const oImage = clipboard.readImage()
    console.log(oImage)
    console.log(oImage.toDataURL())

    div_image.value!.style.backgroundImage = `url(${oImage.toDataURL()})`

}

</script>

<style scoped>
.div_image{
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    background-size: cover;
    background-position: center;
}
</style>
