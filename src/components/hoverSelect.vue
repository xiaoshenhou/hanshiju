<template>
    <div class="hoverSelect" ref="hoverSelect" @mouseenter="hover" @mouseleave="leave" :class="{isHover:show&&!self}">
        <slot name="icon"></slot>
        <div :class="{yinYing:textWidth&&textHeight}" :style="`width:${textWidth};height:${textHeight};line-height:${textHeight};text-align:center`">
            <span>{{title2}}</span>
            <el-icon><ArrowDownBold /></el-icon>
        </div>
        <ul class="dwrop" :class="{guodu:guodu}" :style="`width:${width};max-height:${height};top:${top};border:${border}`">
            <li v-for="(item,index) in options" @click="selectItem(item)" :key="index">{{item.label}}</li>
        </ul>
        <slot name="dwrop"></slot>
    </div>
    
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { toRefs, ref } from 'vue';
const props = defineProps({
    options:Object,
    dWidth:String,
    dHeight:String,
    isselect:Boolean,
    title:String,
    self:Boolean,
    textWidth:String,
    textHeight:String,
    guodu:Boolean,
    border:String
})
const emit = defineEmits(['selectItem'])
let {options, dWidth, dHeight, isselect,title} = toRefs(props)
const show = ref(false)
const top = ref('0px')
const height = ref('0px')
const width = ref('0px')
const hoverSelect = ref(null)
let title2 = ref(title.value)

onMounted(()=>{
    top.value =  hoverSelect.value.offsetHeight+'px'
})
function hover(){
    show.value = true
    height.value = dHeight.value
    width.value = dWidth.value
}
function leave(){
    show.value = false
    height.value = '0px'
    width.value = '0px'
}
function selectItem(item){
    if(isselect.value){
        title2.value = item.label
    }
    emit('selectItem',item)
}
</script>

<style scoped>
.hoverSelect{
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 12px;
    cursor: pointer;
    position: relative;
    padding: 0 5px;
}
.el-icon{
    margin-left: 5px;
    width: 8px;
    height: 8px;
}
.dwrop{
    height: auto;
    overflow: auto;
    position: absolute;
    left: 0;
    background-color: #fff;
    border-width: 0 1px 1px 1px;
    border-style: solid;
    border-color: #eeeeee;
    /* transition: max-height 1s; */
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    z-index: 1000;
    li{
        padding: 0 5px;
        width: 100%;
        height: 30px;
        margin: 0;
        box-sizing: border-box;
        flex-shrink: 0;
        text-wrap: nowrap;
        list-style: none;
    }
    li:hover{
        background-color: #eeeeee;
    }
    &::-webkit-scrollbar { width: 0 !important }
    &{ -ms-overflow-style: none; }
    &{ overflow: -moz-scrollbars-none; }
    }
.yinYing:hover{
    background-color: #EEE;
    border-radius: 7px
}
.guodu{
    transition: max-height 1s;
}
.isHover{
    background-color: #fff;
}

</style>