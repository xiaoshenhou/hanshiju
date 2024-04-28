<template>
  <div>
    <span v-if="health !== null">生命值:{{ health }}</span>
    <span v-if="mana !== null">魔法值:{{ mana }}</span>
    <span v-if="defense !== null">防御:{{ defense }}</span>
    <span v-if="aggressivity !== null">攻击力:{{ aggressivity }}</span>
    <span v-if="crit !== null">暴击率:{{ crit }}</span>
  </div>
  <div class="box" ref="box"></div>
  <div class="box" ref="box2"></div>
  <div class="box" ref="box3"></div>
</template>
  
<script setup lang='ts'>
  import {onMounted, ref} from 'vue'
  import * as echarts from  'echarts'
  const box = ref(null)
  const box2 = ref(null)
  const box3 = ref(null)
  const health = ref(null)
  const mana = ref(null)
  const defense  = ref(null)
  const aggressivity = ref(null)
  const crit = ref(null)
  const flash = ref(true);
  const timer = ref(null);
  const timer2 = ref(null);
  const xData = ref(['木棒', '尾火棍', '青云冰刀', '紫金镔铁棍','天荒','虬龙棍','祁水']);
  const xData2 = ref(['行者衣', '枯叶衫', '翼火甲', '紫金轻甲','厄夜','蟠龙袍','斗战']);


  function lunboEcharts(echartsId, dataLen,currentIndex=-1) {
    timer.value = setInterval(() => {
      // echartsId.dispatchAction({
      //     type: 'downplay',
      //     seriesIndex: 0,
      //     dataIndex: currentIndex
      // });
      currentIndex = (currentIndex + 1) % dataLen;
      // echartsId.dispatchAction({
      //     type: 'highlight',
      //     seriesIndex: 0,
      //     dataIndex: currentIndex,
      // });
      echartsId.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
      });
    }, 3000)
  }
  function lunboEcharts2(echartsId, dataLen,currentIndex=-1) {
    timer2.value = setInterval(() => {
      // echartsId.dispatchAction({
      //     type: 'downplay',
      //     seriesIndex: 0,
      //     dataIndex: currentIndex
      // });
      currentIndex = (currentIndex + 1) % dataLen;
      // echartsId.dispatchAction({
      //     type: 'highlight',
      //     seriesIndex: 0,
      //     dataIndex: currentIndex,
      // });
      echartsId.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
      });
    }, 3000)
  }
  onMounted(()=>{
    armor()
    weapon()
    qqq()
  })
  function weapon(){
    let myChart = echarts.init(box.value)
    let option = {
        tooltip:{
          show:true,
          trigger:'axis',
          formatter:(data)=>{
            aggressivity.value = data[0].value
            crit.value = data[1].value
            let text = ``
            data.forEach(item => {
              text+=`${item.seriesName}: ${item.value} <br/>`
            });
            return text
          }
        },
        xAxis: {
          type: 'category',
          data: xData.value,
          axisLine: {
            symbol: ['none', 'arrow'],
            show: true,
            onZero: true,
          },
          axisTick: {
            inside: true,
            alignWithLabel:true,
            lineStyle: {
              color:'#3c3c3c'
            }
          },
          zlevel:100
        },
        yAxis: [
          {
            type: 'value',
            name: '攻击力',
            axisLine: {
              symbol: ['none', 'arrow'],
              show: true,
              onZero: true
            },
          },
          {
            type: 'value',
            name: '暴击率',
            position: 'right',
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: [
          {
            name: '攻击力',
            type: 'bar',
            yAxisIndex: 0,
            emphasis: {
              focus: 'series'
            },
            data: [10, 15, 35, 70, 95, 350, 500]
          },
          {
            name: '暴击',
            type: 'line',
            yAxisIndex: 1,
            emphasis: {
              focus: 'series'
            },
            data: [0, 0, 3, 5, 5, 10, 7]
          },
        ]
      }
      if(timer.value){
        clearInterval(timer.value)
        timer.value = null
      }
      myChart.setOption(option)
      if(flash) lunboEcharts(myChart,xData.value.length,-1)
  }
function armor(){
  let myChart2 = echarts.init(box2.value)
  let option = {
    tooltip:{
      show:true,
      trigger:'axis',
      formatter:(data)=>{
        health.value = data[0].value
        mana.value = data[1].value
        defense.value = data[2].value
        aggressivity.value = data[3].value
        crit.value = data[4].value
        let text = ``
        data.forEach(item => {
          text+=`${item.seriesName}: ${item.value} <br/>`
        });
        return text
      }
    },
    xAxis: {
      type: 'category',
      data: xData2.value,
      axisLine: {
        symbol: ['none', 'arrow'],
        show: true,
        onZero: true,
      },
      axisTick: {
        inside: true,
        alignWithLabel:true,
        lineStyle: {
          color:'#3c3c3c'
        }
      },
      zlevel:100
    },
    yAxis: [
      {
        type: 'value',
        axisLine: {
          symbol: ['none', 'arrow'],
          show: true,
          onZero: true
        },
      },
      {
        type: 'value',
        name: '暴击率',
        position: 'right',
        axisLabel: {
          formatter: '{value} %'
        },
        min:0,
        max:10,
      }
    ],
    series: [
      {
        name: '生命值',
        type: 'bar',
        yAxisIndex: 0,
        emphasis: {
          focus: 'series'
        },
        data: [30, 105, 460, 630, 0, 1500, 2500]
      },
      {
        name: '魔法',
        type: 'bar',
        yAxisIndex: 0,
        emphasis: {
          focus: 'series'
        },
        data: [20, 60, 200, 270, 0, 2000, 1000]
      },
      {
        name: '防御',
        type: 'bar',
        yAxisIndex: 0,
        emphasis: {
          focus: 'series'
        },
        data: [2, 4, 17, 24, 0, 150, 220]
      },
      {
        name: '攻击力',
        type: 'bar',
        yAxisIndex: 0,
        emphasis: {
          focus: 'series'
        },
        data: [0, 0, 0, 0, 93, 0, 0]
      },
      {
        name: '暴击',
        type: 'line',
        yAxisIndex: 1,
        emphasis: {
          focus: 'series'
        },
        data: [0, 0, 0, 0, 5, 0, 7]
      },
    ]
  }

  if(timer2.value){
    clearInterval(timer2.value)
    timer2.value = null
  }
  myChart2.setOption(option)
  if(flash) lunboEcharts2(myChart2,xData2.value.length,-1)
}
function qqq(){
  let myChart3 = echarts.init(box3.value)

  let option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };
  myChart3.setOption(option)
}
</script>
  
<style>
  .box{
    width: 1000px;
    height: 600px;
    display: inline-block;
  }
</style>