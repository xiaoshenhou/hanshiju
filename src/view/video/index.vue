<template>
  <video ref="videoPlayer" class="video-js" style="margin: auto auto"></video>
  <div class="one1"></div>
  <div class="one2"></div>
  <div class="one3"></div>
  <div class="one4"></div>
</template>
    
<script setup lang='ts'>
    import { onMounted, onUnmounted, ref } from "vue"
    import videojs from "video.js"
    import "video.js/dist/video-js.css"
    
    const videoPlayer = ref(null)
    
    const myPlayer = ref(null)
    
    onMounted(() => {
      const option = {
          poster: "https://nimg.ws.126.net/?url=http%3A%2F%2Fvideoimg.ws.126.net%2Fcover%2F20230420%2FCvzTZf5Nn_cover.jpg&thumbnail=750x2147483647&quality=75&type=jpg",
          controls: true,
          notSupportedMessage: "此视频暂无法播放，请稍后再试",
          sources: [
            {
              src: 'blob:https://www.bilibili.com/37f4bc32-3976-4d66-b5a9-bf5077218263',
              type: 'application/x-mpegURL',
            }
          ],
          controlBar: {
            remainingTimeDisplay: {
              displayNegative: false
            }
          },
          playbackRates: [0.5, 1, 1.5, 2]  
      }
      myPlayer.value = videojs(videoPlayer.value,option,() => {myPlayer.value.log("play.....")})
    })
    
    onUnmounted(() => {
        if (myPlayer.value) {
          myPlayer.value.dispose()
      }
  })
    
    // function abc(){
    //   const h = []
    // }
</script>
    
<style>
    .one1{
      height: 1px;
      transform: scaleY(0.5);
      background-color: black;
      border: 0;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    .one2{
      height: 0;
      border-top: 1px solid black;
      transform: scaleY(0.5);
      margin-bottom: 20px;
    }
    .one3{
      height: 1px;
      background-image: linear-gradient(to bottom, black 0%, black 50%, transparent 50%, transparent 100%);
      border: 0;
      margin-bottom: 20px;
      background-repeat: repeat-x;
      background-size: 1px 1px;
    }
    .one4{
      height:1px;
      background-color: black;
    }
</style>