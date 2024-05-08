<template>
    <div class="banner" :style="`width:${changeWidth}px;height:${height}px`" @mouseenter="yiRu" @mouseleave="yiChu">
        <div class="imgBox" ref="imgBox" :style="`left:${left}px`" :class="{transition:(num !== 0||!flag)&&resizeFlag}">
            <a :class="{noclick:noclick}" :href="item.a" v-for="(item,index) in bannerImg" :key="index"><img :src="item.img" alt="" ></a>
            <a :class="{noclick:noclick}" :href="bannerImg[0].a"><img :src="bannerImg[0].img" alt=""></a>
        </div>
        <ul class="promo">
            <li v-for="(item,index) in bannerImg" :class="{active:index === num||index==0&&num==bannerImg.length}" :key="index" @click="promoClick(index)"><div class="myPromo">{{item }}</div></li>
        </ul>
        <div class="aLeft" @click="prev" :class="{isHoverShow:isHoverShow}"><el-icon><ArrowLeft  style="width: 100px;height: 100px;"/></el-icon></div>
        <div class="aRight" @click="next" :class="{isHoverShow:isHoverShow}"><el-icon><ArrowRight style="width: 100px;height: 100px;"/></el-icon></div>
        <slot name="card" :current="num"></slot>
    </div>
</template>
<script lang="ts" setup>
import { toRefs, ref, onMounted, inject } from 'vue';
let reload = inject('updata')

interface isHoverShow{
    a:string,
    img:string,
    color:string
}

const props = defineProps({
    width:Number,
    height:Number,
    noRuChu:Boolean,
    bannerImg:{
        default:null,
        type:Array<isHoverShow>
    },
    isHoverShow:Boolean,
    noclick:Boolean,
    xiankuan:Number
})
const flag = ref(false)
const resizeFlag = ref(true)
const time = ref(4500)
const timer = ref(null)
const imgBox = ref(null)
const resizeTimer = ref(null)
const {width,height,bannerImg,isHoverShow,noRuChu,xiankuan} = toRefs(props)
const left = ref(0)
const num = ref(0)
const changeWidth = ref(null)
function yiRu(){
    if(!noRuChu.value){
        clearInterval(timer.value)
    }
}
function prev(){
    if(num.value<=0)return
    flag.value = false
    num.value--
    start(false)

}
function next(){
    if(num.value>=bannerImg.value.length-1)return
    num.value++
    start(false)
}
function yiChu(){
    if(!noRuChu.value){
        timer.value= setInterval(()=>{
            start()
        },time.value)
    }
  
}
function promoClick(value){
    clearInterval(timer.value)
    flag.value = false
    num.value = value - 1
    start()
    if(num.value !== bannerImg.value.length){
        timer.value = setInterval(()=>{
            start()
        },time.value)
    }
}
function start(value=true) {
    if(!value){
    }else{
        num.value++
    }
    left.value = -(num.value* changeWidth.value) 
    if(num.value === bannerImg.value.length){
        setTimeout(()=>{
            flag.value = true
            num.value = 0
            left.value = -(num.value* changeWidth.value)  
        },4000)
    }
}
window.onresize = (e)=>{
    clearInterval(timer.value)
    // clearTimeout(resizeTimer.value)
    // resizeTimer.value = setTimeout(()=>{
        resizeFlag.value = false
        if(xiankuan.value){
            changeWidth.value = e.target.innerWidth<xiankuan.value?xiankuan.value:e.target.innerWidth
        }else{
            changeWidth.value = e.target.innerWidth
        }
        left.value = -(num.value* changeWidth.value) 
    // },300)
    timer.value = setInterval(()=>{
        resizeFlag.value = true
        start()
    },time.value)
  }
onMounted(()=>{
    if(xiankuan.value){
        changeWidth.value = width.value<xiankuan.value?xiankuan.value:width.value

    }else{

        changeWidth.value = width.value
    }
    timer.value = setInterval(()=>{
        start()
    },time.value)
})
defineExpose({
    changeWidth
})
</script>
<style lang="scss" scoped>
    @keyframes identifier {
        0%{
            width: 0;

        }

        100%{
            width: 100%

        }
    }
.banner{
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    .imgBox{
        display: flex;
        position: absolute;
        top: 0;
        a{
            flex-shrink: 0;
            img{
            }
        }
        .noclick{
            pointer-events: none;
        }
    }
    .transition{
        transition: left .5s;
    }
    .promo{
        border-radius: 10px;
        position: absolute;
        bottom: 15px;
        height: 13px;
        text-align: center;
        font-size: 0;
        left: 50%;
        margin-left: -39px;
        background-color: rgba(255,255,255,.3);
        z-index: 2000;
        li{
            float: left;
            display: block;
            padding-top: 8px;
            width: 8px;
            height: 0;
            border-radius: 50%;
            background: #fff;
            margin: 3px;
            cursor: pointer;
        }
        .active{
            background-color:#ff7000;
            .myPromo{
                background-color: #fff;
                height: 100%;
                width: 0;
                animation: identifier 4.5s;
                animation-fill-mode: forwards;
            }
        }
    }

    .aLeft,.aRight{
        width: 40px;
        height: 30px;
        border-radius: 30px;
        background-color:rgba(#333,.3) ;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 2000;
        cursor: pointer;
        .el-icon{
            font-size: 20px;
            color: #fff;
        }
    }
    .aLeft{
        top: 50%;
        left: -10px;
        .el-icon{
                margin-left: 5px;
        }
    }
    .aRight{
        top: 50%;
        right: -10px;
        .el-icon{
            margin-right: 5px;
        }
    }
    .aLeft:hover,.aRight:hover{
        background-color: rgba(#333,.5);
    }
    .isHoverShow{
        display: none;
    }
    &:hover .isHoverShow{
        display: flex;
    }
}
</style>