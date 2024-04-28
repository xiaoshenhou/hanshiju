<template>
  <video ref="videoPlayer" class="video-js" style="margin: auto auto"></video>
</template>
    
<script setup lang='ts'>
    import { onMounted, onUnmounted, ref } from "vue"
    import videojs from "video.js"
    import "video.js/dist/video-js.css"
    
    const videoPlayer = ref(null)
    
    const myPlayer = ref(null)
    
    onMounted(() => {
      const option = {
          poster: "//vjs.zencdn.net/v/oceans.png",
          controls: true,
          sources: [
            {
              src: "//vjs.zencdn.net/v/oceans.mp4",
              type: 'video/mp4',
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
    
    
</script>
    
<style>
    
</style>