<<template>

    <div>
        <h2>主进程对话框练习</h2>
        <button @click="showDialog">打开对话框</button>
    </div>

</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
const {dialog } = require("electron")

// 验证无效
const showDialog = ()=>{
    console.log(11)
    dialog.showOpenDialog({
        title:"打开文件",
        buttonLabel:"打开",
        properties:["openFile"]
    }).then(result=>{
        console.log(result)
    })
}
</script>

<style scoped>

</style>
