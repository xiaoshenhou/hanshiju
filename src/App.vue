<script setup lang="ts">
import { provide, ref, nextTick } from 'vue';
const isRouterAlive = ref(true)
provide('updata',reload)
function reload(){
    isRouterAlive.value = false
    nextTick(()=>{
        isRouterAlive.value = true
    })
}
</script>

<template>
    <router-view v-if="isRouterAlive"></router-view>
</template>

<style scoped>
  
</style>
