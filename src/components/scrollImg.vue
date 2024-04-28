<template>
    <div class="scrollImgBox">
      <div class="imgWrap" >
        <img class="itemImg"  v-for="(item,index) in imgs" :key="index" :style="`width:${imgWidth}px;height:${imgHeight}px;`" :src="item"/>
      </div>
      <div class="imgWrap2">
        <img class="itemImg" v-for="(item,index) in imgs" :key="index" :style="`width:${imgWidth}px;height:${imgHeight}px;`" :src="item"/>
      </div>
    </div>
</template>
  
<script setup lang='ts'>
import { toRefs } from 'vue';


const props = defineProps({
  imgs:Array<string>,
  imgWidth:Number,
  imgHeight:Number,
  time:String
})
const {imgs,imgWidth} = toRefs(props)




</script>
  
<style lang="scss">
@keyframes itemImgMotion {
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(-100%);

  }
}
@keyframes itemImgMotion2 {
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(-100%);
  }
}
  .scrollImgBox{
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    &::before{
      background-image: -webkit-linear-gradient(left, #ebedf0 20%, rgba(235, 237, 240, 0));
      content: "";
      height: 120%;
      left: -15px;
      position: absolute;
      top: -10px;
      width: 100px;
      z-index: 2;
    }
    &::after{
      background-image: -webkit-linear-gradient(right, #ebedf0 20%, rgba(235, 237, 240, 0));
      content: "";
      height: 120%;
      position: absolute;
      right: -15px;
      top: -10px;
      width: 100px;
      z-index: 2;
    }
    .imgWrap{
      display: flex;
      animation: itemImgMotion v-bind(time)  linear infinite ;
     
    }
    .imgWrap2{
      display: flex;
      animation: itemImgMotion2 v-bind(time) linear infinite ;
      
    }
    img{
      display: block;
      margin-bottom: 16px;
      margin-right: 16px;
      background-color: #fff;
      border-radius: 8px;
      cursor: pointer;
    }
    &:hover .imgWrap{
      animation-play-state: paused;
    }
    &:hover .imgWrap2{
      animation-play-state: paused;
    }
  }
</style>