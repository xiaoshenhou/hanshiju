<script setup lang="ts">
import { provide, ref, nextTick,createElementVNode } from 'vue';
import { ElMessage } from 'element-plus'
import {useRouter} from 'vue-router'
import {constantRoutes} from './router'

const isRouterAlive = ref(true)
const router = useRouter()
provide('updata',reload)
function reload(){
    isRouterAlive.value = false
    nextTick(()=>{
        isRouterAlive.value = true
    })
}
function goPage(){
    try {
        router.push(constantRoutes[Math.floor(Math.random()*10)].path)
        let arr = [1,2,3,4,5,6,7,8,9]
        console.log((arr as any).push('nima'))//改变原数组
        console.log(arr.pop())//改变原数组
        console.log((arr as any).unshift('nimade'))//改变原数组
        console.log(arr.shift())//改变原数组
        let arr2 = arr.slice(0,3)//不改变原数组
        console.log(arr,arr2)
        console.log(arr.splice(0,3),arr)//改变原数组
        console.log(arr.sort((a,b)=>{return b-a}))//改变原数组
        console.log(arr.concat([3,2,1]))//不改变原数组
        arr = arr.concat([3,2,1])
        console.log(arr.reverse())//改变原数组
        console.log(arr.join('.'))//不改变原数组
        console.log()
        console.log( arr.map(()=>{
            return 1
        }))//不改变原数组
       console.log(arr.forEach((item)=>{
            item+100
       }),arr)
       console.log(arr.filter((item)=>{
            return item > 6
       }))
       console.log()
    } catch (error) {
         ElMessage({
            message:createElementVNode('div',{},error),
            type: 'error',
        })
    }
}
</script>

<template>
    <div style="height: 32px;">
        <div style="background-color:#fff;position:fixed;width:100vw;z-index:2000">
            <el-button @click="goPage" type="primary">随机去哪</el-button>
        </div>
    </div>
    <router-view v-if="isRouterAlive"></router-view>
</template>

<style scoped>
  
</style>
