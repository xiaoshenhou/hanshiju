<template>
  <div id="my-three"></div>
</template>
​
<script lang='ts' setup>
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
  import { onMounted  } from 'vue'

  //创建一个三维场景
  const scene = new THREE.Scene();
  // 线材质对象
  const material = new THREE.LineBasicMaterial({
      color: 0xff0000 //线条颜色
  }); 
  const material2 = new THREE.MeshLambertMaterial({
      color: 0xff0000 //线条颜色
  }); 
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
      0, 0, 0, //顶点1坐标
      60, 0, 0, //顶点2坐标
      60, 60, 0, //顶点3坐标

      0, 0, 0, //顶点4坐标   和顶点1位置相同
      60, 60, 0, //顶点5坐标  和顶点3位置相同
      0, 60, 0, //顶点6坐标
  ]);
  // 创建线模型对象
  const attribue = new THREE.BufferAttribute(vertices, 3); 
  geometry.attributes.position = attribue;
  const line = new THREE.Line(geometry, material);
  var geometry2 = new THREE.BoxGeometry(100, 100, 100);
  var MESH = new THREE.Mesh(geometry2, material2)

  //把网格模型添加到三维场景
  scene.add(line);//网络模型添加到场景中
  scene.add(MESH);//网络模型添加到场景中

  //添加光源 //会照亮场景里的全部物体（氛围灯），前提是物体是可以接受灯光的，这种灯是无方向的，即不会有阴影。
  const ambient = new THREE.AmbientLight(0xffffff, 0.4);
  const light = new THREE.PointLight(0xffffff, 1);//点光源，color:灯光颜色，intensity:光照强度
  scene.add(ambient);
  light.position.set(200,300,400);
  scene.add(light);

  //创建一个透视相机，窗口宽度，窗口高度
  const width = window.innerWidth, height = window.innerHeight;
  const camera = new THREE.PerspectiveCamera(45, width/height, 1, 1000);
  //设置相机位置
  camera.position.set(300,300,30);
  //设置相机方向
  camera.lookAt(0,0,0);

  //创建辅助坐标轴
  const axesHelper = new THREE.AxesHelper(200);//参数200标示坐标系大小，可以根据场景大小去设置
  scene.add(axesHelper);

  //创建一个WebGL渲染器
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(width,height)//设置渲染区尺寸
  renderer.render(scene,camera)//执行渲染操作、指定场景、相机作为参数

  const controls = new OrbitControls(camera, renderer.domElement)//创建控件对象
let T0 = new Date();//上次时间
function render() {
        let T1 = new Date();//本次时间
        let t:any = T1-T0;//时间差
        T0 = T1;//把本次时间赋值给上次时间
        requestAnimationFrame(render);
        renderer.render(scene,camera);//执行渲染操作
        MESH.rotateY(0.001*t);//旋转角速度0.001弧度每毫秒
    }
render();
  controls.addEventListener('change',()=>{
      renderer.render(scene, camera)//监听鼠标，键盘事件
  })
  onMounted(()=>{
      document.getElementById('my-three')?.appendChild(renderer.domElement)
  })
  </script>