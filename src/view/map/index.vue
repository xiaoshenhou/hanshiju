<template>
  <div id="map">
    <div style=" width:100%;position:absolute;z-index: 100;display: flex;justify-content: space-between;">

      <el-button  @click="ccc">绘制点</el-button>
      <el-button  @click="aaa">规划路线</el-button>
      <el-button  @click="fff">开始动画</el-button>

      <el-button @click="bbb">绘制围栏</el-button>
      <el-button @click="ddd">绘制圆</el-button>
      <el-input v-model="searchValue" style="width: 300px;height: 40px;" id="myInput"></el-input>
    </div>
    
  </div>
</template>
    
<script setup lang='ts'>
import * as AMapLoader from "@amap/amap-jsapi-loader"
import { onMounted, reactive, ref } from 'vue'
let map = null
let AMap  = ref(null) 
let searchValue  = ref('') 
const markerList = ref([])
const lineArr = ref([])
const car = ref(null)
onMounted(()=>{
  AMapLoader.load({
    key:'7176f95da28a062b9a311981cb0993c7',
    version:'2.0',
    plugins: ['AMap.MouseTool']
  }).then((aMap)=>{
    if(aMap){
      AMap.value = aMap
      map = new AMap.value.Map('map',{
        viewMode:'3D',
        zoom:11,
        // center:[116.397428, 39.90923]
      })

      AMap.value.plugin(['AMap.PlaceSearch','AMap.AutoComplete'], function(){
        var auto = new AMap.value.AutoComplete({input:'myInput'});
        var placeSearch = new AMap.value.PlaceSearch({
            map: map
        });  //构造地点查询类
        auto.on("select", select);//注册监听，当选中某条记录时会触发
        function select(e) {
            placeSearch.setCity(e.poi.adcode,11111);
            placeSearch.search(e.poi.name,22222);  //关键字查询查询
        }
    });
    }
  })
})
function aaa(){
  if(AMap.value){
    AMap.value.plugin(["AMap.Driving",'AMap.Pixel'], function () {
      let driving = new AMap.value.Driving({
        policy: 0, //驾车路线规划策略，0是速度优先的策略
      });
      let startLngLat = [markerList.value[0]._position.lng, markerList.value[0]._position.lat]; //起始点坐标
      let endLngLat = [markerList.value[1]._position.lng, markerList.value[1]._position.lat]; //终点坐标
      driving.search(startLngLat, endLngLat, function (status, result) {
        //status：complete 表示查询成功，no_data 为查询无结果，error 代表查询错误
        //查询成功时，result 即为对应的驾车导航信息
        if(status === 'complete'){
           lineArr.value = []
          result.routes[0].steps.forEach(item => {
            lineArr.value.push(...item.path)
          });
          car.value = new AMap.value.Marker({
            map:map,
            position:lineArr.value[0],
            icon: "https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",
            offset: new AMap.value.Pixel(-13, -26),
          })
          let polyline = new AMap.value.Polyline({
              map: map,
              path: lineArr.value,
              showDir:true,
              strokeColor: "#28F",  //线颜色
              // strokeOpacity: 1,     //线透明度
              strokeWeight: 6,      //线宽
              // strokeStyle: "solid"  //线样式
          });
  
        }else{

        }

      });
    });
  }
}
function bbb(){
  AMap.value.plugin(["AMap.MouseTool"],function () {
    let mouseTool =  new AMap.value.MouseTool(map);
    mouseTool.on('draw',function(e){
      mouseTool.close()
    }) 
    mouseTool.polygon({
      fillColor:'#00b0ff',
      strokeColor:'#80d8ff'
      //同Polygon的Option设置
    });
  })
}  
function ccc(){
  map.on("click", function (e) {
    if(markerList.value.length < 2){
      let marker = new AMap.value.Marker({
        map:map,
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        position: e.lnglat,
        offset:[-8,-30]
      });
      markerList.value.push(marker)
    }
  });
}

function ddd (){
  AMap.value.plugin(['AMap.MouseTool'],()=>{
    let mouseTool = new AMap.value.MouseTool(map)
    mouseTool.circle({

    })
    mouseTool.on('draw',function(e){
      mouseTool.close()
    }) 
  })

}
function fff(){
  AMap.value.plugin('AMap.MoveAnimation',()=>{
    car.value.moveAlong(lineArr.value, {
      // 每一段的时长
      duration: 500,//可根据实际采集时间间隔设置
      // JSAPI2.0 是否延道路自动设置角度在 moveAlong 里设置
      autoRotation: true,
    });
  })
  
  // car.value.pauseMove();
}
</script>
    
<style>
    #map{
      width: 100vw;
      height: 100vh;
    }
</style>