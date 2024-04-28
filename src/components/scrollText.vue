<template>
    <div class="scrollText" :style="`width:${width}px;height:${height}px;`">
        <div class="textBox" :style="`left:${left}px`" :class="{transition:num !== 0}">
            <div v-for="(item,index) in data" :key="index" :style="`width:${width}px;height:${height}px`" >
                <span>{{ item.title }}</span>
                <span>{{ item.main }}</span>
            </div>
            <div>
                <span>{{ data[0].title }}</span>
                <span>{{ data[0].main }}</span>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts" setup>
import { toRefs, ref, onMounted } from 'vue';

const props = defineProps({
    data:Object,
    width:Number,
    height:Number,
})
const { data,width,height } = toRefs(props)
const left = ref(0)
const num = ref(0)
function start(){
    num.value++
    left.value = -num.value*width.value
    console.log(left.value)
    if(num.value === data.value.length){
        setTimeout(()=>{
            num.value = 0
            left.value = -(num.value* width.value)  
        },1000)
    }
}
onMounted(()=>{
    setInterval(()=>{
        start()
    },2000)
})
</script>

<style lang="scss">
.scrollText{
    overflow: hidden;
    position: relative;
    .textBox{
        display: flex;
        position: absolute;
        top: 0;
        div{
            flex-shrink: 0;
            display: flex;
            span{
                &:nth-child(1){
                    display: block;
                    color: #ff5000;
                }
                &:nth-child(2){
                    margin-left: 8px;
                    display: block;
                    color: #666;
                }
            }
        }
    }
    .transition{
        transition: left 1s;
    }
}
</style>