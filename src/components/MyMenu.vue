<template>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">首页</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(router)
  console.log(key, keyPath)
}
</script>

<style scoped>

</style>
