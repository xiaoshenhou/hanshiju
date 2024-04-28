<template>
  <div class="tableBox">
    <el-form :inline="true" :model="formData">
      <el-form-item  label="时间">
        <el-input v-model="formData.date" clearable/>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formData.name" clearable/>
      </el-form-item>
      <el-form-item label="身高">
        <el-input v-model="formData.height" clearable/>
      </el-form-item>
      <el-form-item label="程度">
        <el-input v-model="formData.degree" clearable/>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="formData.address" clearable/>
      </el-form-item>
    </el-form>
    <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 1264px" border>
      <el-table-column prop="date" label="时间"/>
      <el-table-column prop="name" label="姓名"/>
      <el-table-column prop="height" label="身高"/>
      <el-table-column prop="degree" label="程度"/>
      <el-table-column prop="address" label="地址"/>
      <el-table-column label="操作" width="120">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope)"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="mt-4" style="width: 1264px" @click="onAddItem">新增一行</el-button>
    <el-config-provider :locale="zhCn">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[6, 12, 24]"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-config-provider>
  </div>
</template>
<script lang="ts" setup>
// ElConfigProvider 组件
import { ElConfigProvider } from 'element-plus'
// 引入中文包
import zhCn from 'element-plus/es/locale/lang/zh-cn'
  import { ref, watch } from "vue";

  const background = ref(true)
  const total = ref(0)
  const currentPage = ref(1)
  const pageSize = ref(6)
  const formData = ref({
    date:'',
    name:'',
    height:'',
    degree:'',
    address:'',
  })
  const tableData = ref([
    {
      id:1,
      date:'kindergarten',
      name:'徐澜菲',
      height:'165',
      degree:'0%',
      address:'河南长垣'
    },
    {
      id:2,
      date:'primary school',
      name:'高瑞丽',
      height:'163',
      degree:'90%',
      address:'河南长垣'
    },
    {
      id:3,
      date:'middle school',
      name:'郭瑞瑾',
      height:'156',
      degree:'80%',
      address:'河南长垣'
    },
    {
      id:4,
      date:'senior school',
      name:'--',
      height:'158',
      degree:'1%',
      address:'河南长垣'
    },
    {
      id:5,
      date:'university',
      name:'李明',
      height:'160',
      degree:'95%',
      address:'河南南阳'
    },
    {
      id:6,
      date:'kindergarten',
      name:'徐澜菲',
      height:'165',
      degree:'0%',
      address:'河南长垣'
    },
    {
      id:7,
      date:'primary school',
      name:'高瑞丽',
      height:'163',
      degree:'90%',
      address:'河南长垣'
    },
    {
      id:8,
      date:'middle school',
      name:'郭瑞瑾',
      height:'156',
      degree:'80%',
      address:'河南长垣'
    },
    {
      id:9,
      date:'senior school',
      name:'--',
      height:'158',
      degree:'1%',
      address:'河南长垣'
    },
    {
      id:10,
      date:'university',
      name:'李明',
      height:'160',
      degree:'95%',
      address:'河南南阳'
    },
    {
      id:11,
      date:'kindergarten',
      name:'徐澜菲',
      height:'165',
      degree:'0%',
      address:'河南长垣'
    },
    {
      id:12,
      date:'primary school',
      name:'高瑞丽',
      height:'163',
      degree:'90%',
      address:'河南长垣'
    },
    {
      id:13,
      date:'middle school',
      name:'郭瑞瑾',
      height:'156',
      degree:'80%',
      address:'河南长垣'
    },
    {
      id:14,
      date:'senior school',
      name:'--',
      height:'158',
      degree:'1%',
      address:'河南长垣'
    },
    {
      id:15,
      date:'university',
      name:'李明',
      height:'160',
      degree:'95%',
      address:'河南南阳'
    },
    {
      id:16,
      date:'kindergarten',
      name:'徐澜菲',
      height:'165',
      degree:'0%',
      address:'河南长垣'
    },
    {
      id:17,
      date:'primary school',
      name:'高瑞丽',
      height:'163',
      degree:'90%',
      address:'河南长垣'
    },
    {
      id:18,
      date:'middle school',
      name:'郭瑞瑾',
      height:'156',
      degree:'80%',
      address:'河南长垣'
    },
    {
      id:19,
      date:'senior school',
      name:'--',
      height:'158',
      degree:'1%',
      address:'河南长垣'
    },
    {
      id:20,
      date:'university',
      name:'李明',
      height:'160',
      degree:'95%',
      address:'河南南阳'
    },
    {
      id:21,
      date:'kindergarten',
      name:'徐澜菲',
      height:'165',
      degree:'0%',
      address:'河南长垣'
    },
    {
      id:22,
      date:'primary school',
      name:'高瑞丽',
      height:'163',
      degree:'90%',
      address:'河南长垣'
    },
    {
      id:23,
      date:'middle school',
      name:'郭瑞瑾',
      height:'156',
      degree:'80%',
      address:'河南长垣'
    },
    {
      id:24,
      date:'senior school',
      name:'--',
      height:'158',
      degree:'1%',
      address:'河南长垣'
    },
    {
      id:25,
      date:'university',
      name:'李明',
      height:'160',
      degree:'95%',
      address:'河南南阳'
    },
  ])
  function onAddItem(){
    tableData.value.push({
      id:new Date().getTime(),
      date:formData.value.date,
      name:formData.value.name,
      height:formData.value.height,
      degree:formData.value.degree,
      address:formData.value.address
    })
    currentPage.value = Math.ceil(tableData.value.length/pageSize.value)
    console.log(tableData.value)
  }
  function deleteRow(val){
    console.log(val)
    tableData.value.forEach((item,index) => {
      if(item.id ===val.row.id){
        tableData.value.splice(index,1)
      }
    });
  }
  function handleSizeChange(){
    
  }
  function handleCurrentChange(val){
    console.log(val,currentPage.value)
  }
  watch(()=>tableData.value,(newD)=>{
    total.value = newD.length
  },{deep:true,immediate:true})
</script>

<style lang="scss" scoped>
  .el-input{
    width: 180px;
  }
  .tableBox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .mt-4{
    margin-bottom: 40px;
  }
</style>
