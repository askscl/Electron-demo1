<<template>

    <div><div>我是2一个vue3项目{{ count }}</div>
  <button @click="btn_open">点击</button></div>

</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
const {contextBridge} = require('electron')

const count = ref(0)

const btn_open = () => {
  count.value++
}
</script>

<style scoped>

</style>
