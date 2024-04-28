<template>
    <div class="magnifier" ref="mag" @mousemove="move($event)" @mouseover="over()" >
        <img class="img" :src="url" :style="`width:${width}px`" alt=""  >
        <div class="box" ref="box" :style="`left:${left}px;top:${top}px;width:${bigWidth/multiple}px;height:${bigWidth/multiple}px`" @mouseout="out"></div>
    </div>
    <div class="big" v-if="show" :style="`width:${bigWidth}px;height:${bigWidth}px`">
        <img :src="url" :style="`left:${-left*multiple}px;top:${-top*multiple}px;width:${multiple*width}px`" alt="">
    </div>
</template>

<script lang="ts" setup name='Magnifier'>
import { toRefs } from 'vue';
import {ref} from 'vue'
const props = defineProps({
    width:Number,
    url:String,
    multiple:Number,
    bigWidth:Number
})
// const {width,url} = toRefs(props)
const top = ref(0)
const left = ref(0)
const mag = ref(null)
const box = ref(null)
const show = ref(false)

function move(e){
    console.log(e)
    let top2 = e.pageY-box.value.offsetHeight/2
    let left2 = e.pageX-box.value.offsetWidth/2
    if(top2<=0)top2 = 0
    if(top2>=mag.value.offsetHeight-box.value.offsetHeight)top2 = mag.value.offsetHeight-box.value.offsetHeight
    if(left2<=0)left2 = 0
    if(left2>=mag.value.offsetWidth-box.value.offsetWidth)left2 = mag.value.offsetWidth-box.value.offsetWidth
    if(top2>=0 && top2<=mag.value.offsetHeight-box.value.offsetHeight && left2>=0 && left2<=mag.value.offsetWidth-box.value.offsetWidth){
        top.value = top2
        left.value = left2
    }
}
function over(){
    show.value = true
}
function out(){
    show.value = false
}

</script>

<style lang="scss">

.magnifier{
    position: relative;
    display: inline-block;
    background-color: rgb(126, 117, 105);

    img{
        display: block;
    }
    .box{
        width: 100px;
        height: 100px;
        background-color: rgba(#333,.2);
        position: absolute;
        z-index: 100;
    }
}
.big{
    width: 300px;
    height: 300px;
    overflow: hidden;
    border: 1px solid red;
    position: relative;
    img{
        position: absolute;
    }
}
</style>