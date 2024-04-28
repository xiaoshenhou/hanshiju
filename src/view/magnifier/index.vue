<template>
    <Magnifier :width="300" :multiple="4" :bigWidth="400" url="	https://pic.rmb.bdstatic.com/bjh/914b8c0f9814b14c5fedeec7ec6615df5813.jpeg"></Magnifier>
    <div class="anBox">
        <div></div>
    </div>
</template>
<script lang="ts" setup>
// import {ref,onMounted} from 'vue'
import Magnifier from '../../components/magnifier.vue'

</script>
<style lang='scss'>
.anBox{
    position: relative;
    div{
        width: 300px;
        height: 300px;
        border-radius: 50%;
        border-radius: 50%;
        background: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F20181%2F16%2F201811618255_uyaiA.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1711584908&t=3d20dc2bb34eacfdb5add71999b08370)  center/cover;
        position: relative;
    }
    div::after,div::before{
        content: '';
        position: absolute;
        border-radius: 50%;
        inset:0;
    }
    div::before{
        background: rgba(0,0,0,0.5);  
    }
    div::after{
        background: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F20181%2F16%2F201811618255_uyaiA.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1711584908&t=3d20dc2bb34eacfdb5add71999b08370)  center/cover;
        clip-path: circle(0% at 50% 50%);
        transition: clip-path 0.5s;
    }
    div:hover::after{
        clip-path: circle(50% at 50% 50%);
    }

}
</style>