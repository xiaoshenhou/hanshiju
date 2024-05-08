<template>
  <div class="customDwrop clearfix" :style="`max-height:${maxHight}px; min-width:750px`">
    <div class="customDwropLeft">
      <a target="_blank" :class="{active:active==0}" class="text" @mouseenter="changeMenu(0)"><span>组织数字化</span></a>
      <a target="_blank" :class="{active:active==1}" class="text" @mouseenter="changeMenu(1)"><span>业务数字化</span></a>
      <a target="_blank" class="hr"><div></div></a>
      <a target="_blank" :class="{active:active==2}" class="text" @mouseenter="changeMenu(2)"><span>钉钉套件</span></a>
      <a target="_blank" :class="{active:active==3}" class="text" @mouseenter="changeMenu(3)"><span>智能办公硬件</span></a>
      <a target="_blank" class="hr"><div></div></a>
      <a target="_blank" :class="{active:active==4}" class="text" @mouseenter="changeMenu(4)"><span>钉钉个人版</span></a>
      <a target="_blank" :class="{active:active==5}" class="text" @mouseenter="changeMenu(5)"><span>钉钉HCM+</span></a>
      <a target="_blank" :class="{active:active==6}" class="text" @mouseenter="changeMenu(6)"><span>钉钉教育</span></a>
      <a target="_blank" class="hr"><div></div></a>
      <a target="_blank" :class="{active:active==7}" class="text" @mouseenter="changeMenu(7)"><span>沉浸式体验中心</span></a>
    </div>
    <div class="customDwropRight">
      <div class="dwropRightMain">
        <div class="dwropRightMainItem" v-if="active == 0">
          <div class="dwropRightMainContent">
            <div class="mainContent1">
              <div class="mainContent1Title">
                <span>办公协同</span>
              </div>
              <div class="customDwropRightBtns">
                <div class="customDwropRightBtnList">
                  <div>沟通</div>
                  <div v-for="(item,index) in collaborationWork.talk" :key="index">
                    <a target="_blank" :href="item.href">
                      <span>{{ item.label }}</span>
                    </a>
                  </div>
                </div>
                <div class="customDwropRightBtnList">
                  <div>协作</div>
                  <div v-for="(item,index) in collaborationWork.collaborate" :key="index">
                    <a target="_blank" :href="item.href">
                      <span> {{ item.label }}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="mainContent2">+</div>
            <div class="mainContent1 mainContent3">
              <div class="mainContent1Title">
                <span>组织管理</span>
              </div>
              <div class="customDwropRightBtns">
                <div class="customDwropRightBtnList">
                  <div>治理</div>
                  <div v-for="(item,index) in organization.govern" :key="index">
                    <a target="_blank" :href="item.href">
                      <span>{{ item.label }}</span>
                    </a>
                  </div>
                </div>
                <div class="customDwropRightBtnList">
                  <div>架构</div>
                  <div v-for="(item,index) in organization.architecture" :key="index">
                    <a target="_blank" :href="item.href">
                      <span>{{ item.label }}</span>
                    </a>
                  </div>
                </div>
                <div class="customDwropRightBtnList">
                  <div>制度</div>
                  <div v-for="(item,index) in organization.institution" :key="index">
                    <a target="_blank" :href="item.href">
                      <span>{{ item.label }}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dwropRightMainItem" v-if="active == 1">
          <div class="dwropRightMainContent">
            <div class="mainContent1">
              <div class="mainContent1Title">
                <span>应用开发平台</span>
              </div>
              <div class="customDwropRightBtns">
                <div class="customDwropRightBtnList">
                  <div>搭</div>
                  <div v-for="(item,index) in platform.build" :key="index">
                    <a target="_blank" :href="item.href">
                      <span>{{ item.label }}</span>
                    </a>
                  </div>
                </div>
                <div class="customDwropRightBtnList">
                  <div>建</div>
                  <div v-for="(item,index) in platform.establish" :key="index">
                    <a target="_blank" :href="item.href">
                      <span>{{ item.label }}</span>
                    </a>
                  </div>
                </div>
                <div class="customDwropRightBtnList">
                  <div>连</div>
                  <div v-for="(item,index) in platform.even" :key="index">
                    <a target="_blank" :href="item.href">
                      <span>{{ item.label }}</span>
                    </a>
                  </div>
                </div>
                <div class="customDwropRightBtnList">
                  <div>跨</div>
                  <div v-for="(item,index) in platform.across" :key="index">
                    <a target="_blank" :href="item.href">
                      <span>{{ item.label }}</span>
                    </a>
                  </div>
                </div>
                <div class="customDwropRightBtnList">
                  <div>酷</div>
                  <div v-for="(item,index) in platform.cool" :key="index">
                    <a target="_blank" :href="item.href">
                      <span>{{ item.label }}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dwropRightMainItem dwropRightMainItem2" v-if="active == 2">
          <el-row>
            <el-col :span="kit.length>1?12:24" v-for="(item,index) in kit" :key="index">
              <a target="_blank" :href="item.href" :style="`background: url(${item.bgimg}) no-repeat center top,${item.bgcolor};background-size:auto 100%;`" class="{qqq:(kit.length%2==0&&(index==kit.length-1||index==kit.length-2))||((kit.length%2!=0)&&index==kit.length-1)}">
                <div class="imgBlocTextBox">
                  <div class="imgBlocText" >{{item.text1}}</div>
                  <div class="imgBlocText2">{{item.text2}}<br v-if="item.text3">{{item.text3}}</div>
                </div>
                <div class="imgBlockBtn">
                  <el-icon class="icon1" :size="16"><ArrowRight /></el-icon>
                  <el-icon class="icon2" :size="16"><Right /></el-icon>
                </div>
              </a>
            </el-col>
          </el-row>
        </div>
        <div class="dwropRightMainItem dwropRightMainItem2" v-if="active == 3">
          <el-row>
            <el-col :span="hardware.length>1?12:24" v-for="(item,index) in hardware" :key="index">
              <a target="_blank" :href="item.href" :style="`background: url(${item.bgimg}) no-repeat center top/auto 100%,${item.bgcolor};background-size:auto 100%;`" class="{qqq:(kit.length%2==0&&(index==kit.length-1||index==kit.length-2))||((kit.length%2!=0)&&index==kit.length-1)}">
                <div class="imgBlocTextBox">
                  <div class="imgBlocText" >{{item.text1}}</div>
                  <div class="imgBlocText2">{{item.text2}}<br v-if="item.text3">{{item.text3}}</div>
                </div>
                <div class="imgBlockBtn">
                  <el-icon class="icon1" :size="16"><ArrowRight /></el-icon>
                  <el-icon class="icon2" :size="16"><Right /></el-icon>
                </div>
              </a>
            </el-col>
          </el-row>
        </div>
        <div class="dwropRightMainItem dwropRightMainItem2" v-if="active == 4">
          <el-row>
            <el-col :span="personal.length>1?12:24" v-for="(item,index) in personal" :key="index">
              <a target="_blank" :href="item.href" :style="`background: url(${item.bgimg}) no-repeat center top/auto 100%,${item.bgcolor};background-size:auto 100%;`" class="{qqq:(kit.length%2==0&&(index==kit.length-1||index==kit.length-2))||((kit.length%2!=0)&&index==kit.length-1)}">
                <div class="imgBlocTextBox">
                  <div class="imgBlocText" >{{item.text1}}</div>
                  <div class="imgBlocText2">{{item.text2}}<br v-if="item.text3">{{item.text3}}</div>
                </div>
                <div class="imgBlockBtn">
                  <el-icon class="icon1" :size="16"><ArrowRight /></el-icon>
                  <el-icon class="icon2" :size="16"><Right /></el-icon>
                </div>
              </a>
            </el-col>
          </el-row>
        </div>
        <div class="dwropRightMainItem dwropRightMainItem2" v-if="active == 5">
          <el-row>
            <el-col :span="hcm.length>1?12:24" v-for="(item,index) in hcm" :key="index">
              <a target="_blank" :href="item.href" :style="`background: url(${item.bgimg}) no-repeat center top/auto 100%,${item.bgcolor};background-size:auto 100%;`" class="{qqq:(kit.length%2==0&&(index==kit.length-1||index==kit.length-2))||((kit.length%2!=0)&&index==kit.length-1)}">
                <div class="imgBlocTextBox">
                  <div class="imgBlocText" >{{item.text1}}</div>
                  <div class="imgBlocText2">{{item.text2}}<br v-if="item.text3">{{item.text3}}</div>
                </div>
                <div class="imgBlockBtn">
                  <el-icon class="icon1" :size="16"><ArrowRight /></el-icon>
                  <el-icon class="icon2" :size="16"><Right /></el-icon>
                </div>
              </a>
            </el-col>
          </el-row>
        </div>
        <div class="dwropRightMainItem" v-if="active == 6">
          <div class="dwropRightMainContent" >
            <el-row>
              <el-col :span="5" v-for="(item,index) in education" :key="index">
                <div class="dwropRightMainEducation">
                    <a target="_blank" :href="item2.href" v-for="(item2,index2) in item" :key="index2"><span>{{ item2.label }}</span></a>
                </div>
              </el-col>
            </el-row>
            
          </div>
        </div>
        <div class="dwropRightMainItem dwropRightMainItem2" v-if="active == 7">
          <el-row>
            <el-col :span="experience.length>1?12:24" v-for="(item,index) in experience" :key="index">
              <a target="_blank" :href="item.href" :style="`background: url(${item.bgimg}) no-repeat center top/auto 100%,${item.bgcolor};background-size:auto 100%;`" class="{qqq:(kit.length%2==0&&(index==kit.length-1||index==kit.length-2))||((kit.length%2!=0)&&index==kit.length-1)}">
                <div class="imgBlocTextBox">
                  <div class="imgBlocText" >{{item.text1}}</div>
                  <div class="imgBlocText2">{{item.text2}}<br v-if="item.text3">{{item.text3}}</div>
                </div>
                <div class="imgBlockBtn">
                  <el-icon class="icon1" :size="16"><ArrowRight /></el-icon>
                  <el-icon class="icon2" :size="16"><Right /></el-icon>
                </div>
              </a>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue';
const collaborationWork = reactive({
  talk:[
    {
      label:'DING',
      value:1,
      href:"https://page.dingtalk.com/wow/dingtalk/act/dingh5"
    },
    {
      label:'及时沟通',
      value:2,
      href:"https://page.dingtalk.com/wow/dingtalk/act/goutongh5"
    },
    {
      label:'视频会议',
      value:3,
      href:"https://www.dingtalk.com/meeting"
    },
    {
      label:'电话会议',
      value:4,
      href:"https://page.dingtalk.com/wow/dingtalk/act/dingdianhuahuiyi"
    },
    {
      label:'融合通信',
      value:5,
      href:"https://page.dingtalk.com/wow/z/dingtalk/default/dingphone?wh_biz=tm"
    },
    {
      label:'办公电话',
      value:6,
      href:"https://page.dingtalk.com/wow/dingtalk/act/biangongdianhuapc"
    },
    {
      label:'钉钉直播',
      value:7,
      href:"https://page.dingtalk.com/wow/dingtalk/act/qunzhibopc"
    },
    {
      label:'专注模式',
      value:8,
      href:"https://page.dingtalk.com/wow/dingtalk/act/streamlinemode"
    },
    {
      label:'互动消息',
      value:9,
      href:"https://page.dingtalk.com/wow/dingtalk/act/interactivemsg"
    },
    {
      label:'标签',
      value:10,
      href:"https://page.dingtalk.com/wow/dingtalk/act/biaoqianguanw"
    },
    {
      label:'看看',
      value:11,
      href:"https://page.dingtalk.com/wow/z/dingtalk/default/kankan?spm=a213l2.13146415.4929779444.13.7f156057hPYc83"
    }
  ],
  collaborate:[
    {
      label:'钉闪会',
      value:1,
      href:"https://page.dingtalk.com/wow/z/dingtalk/default/flashmeeting?spm=a213l2.23775334.3864046106.32.9e817f5eHwWb0y"
    },
    {
      label:'代办',
      value:2,
      href:"https://page.dingtalk.com/wow/z/dingtalk/act/todo?spm=a213l2.23906990.5689269260.33.216323bc85maed&wh_biz=tm"
    },
    {
      label:'项目(Teambition)',
      value:3,
      href:"https://www.teambition.com"
    },
    {
      label:'钉钉文档',
      value:4,
      href:"https://docs.dingtalk.com/"
    },
    {
      label:'协作空间(wolai)',
      value:5,
      href:"https://www.wolai.com/"
    },
    {
      label:'钉盘',
      value:6,
      href:"https://page.dingtalk.com/wow/dingtalk/act/clouddisk?spm=a213l2.13155127.7045720052.45.50d433ff1d8B0J"
    },
    {
      label:'日志',
      value:7,
      href:"https://page.dingtalk.com/wow/z/dingtalk/act/reportofficial"
    },
    {
      label:'钉钉企业邮箱',
      value:8,
      href:"https://page.dingtalk.com/wow/dingtalk/default/dingtalk/dingtalk-mail-pc"
    },
    {
      label:'钉钉会议室(Rooms)',
      value:9,
      href:"https://page.dingtalk.com/wow/z/dingtalk/Rax/RoomsIntro"
    },
    {
      label:'日历',
      value:10,
      href:"https://page.dingtalk.com/wow/dingtalk/act/calendar"
    },
  ]
})
const organization = reactive({
  govern:[
    {
      label:'智能人士',
      value:1,
      href:"https://page.dingtalk.com/wow/dingtalk/default/dingtalk/vRPjAZoF0Gsnc5gMYXkK"
    },
    {
      label:'智能财务',
      value:2,
      href:"https://page.dingtalk.com/wow/dingtalk/default/dingtalk/LTEAntdB6NIBkUZELNkcl"
    },
    {
      label:'职能招聘',
      value:3,
      href:"https://page.dingtalk.com/wow/z/dingtalk/default/9TYZ4Q2IBSO"
    },
    {
      label:'智能差旅',
      value:4,
      href:"https://page.dingtalk.com/wow/dingtalk/default/dingtalk/kUe0iyV6W1YqSrumrT2"
    },
    {
      label:'智能合同',
      value:5,
      href:"https://page.dingtalk.com/wow/dingtalk/default/dingtalk/vndC82LuWGJMmxHRTHWQg"
    },
  ],
  architecture:[
    {
      label:'企业通讯录',
      value:1,
      href:"https://page.dingtalk.com/wow/dingtalk/act/groupcontact"
    },
    {
      label:'钉工牌',
      value:2,
      href:"https://page.dingtalk.com/wow/z/dingtalk/default/hrmseo-copy-copy?spm=a213l2.13300375.3114648912.39.4fb47350mcAF75&lwfrom=2019082517081737000&wh_biz=tm"
    },
    {
      label:'上下游组织',
      value:3,
      href:"https://page.dingtalk.com/wow/z/dingtalk/default/shangxiayou"
    },
  ],
  institution:[
  {
      label:'考勤打卡',
      value:1,
      href:"https://page.dingtalk.com/wow/dingtalk/act/kaoqsem?spm=a213l2.24312764.6291504042.48.77c9775fplBYxa&lwfrom=2019082517081737000"
    },
    {
      label:'OA审批',
      value:2,
      href:"https://page.dingtalk.com/wow/dingtalk/act/approvalweb?spm=a213l2.14021711.5805103004.47.5f9b2c29UytTHR"
    },
    {
      label:'智能薪酬',
      value:3,
      href:"https://page.dingtalk.com/wow/dingtalk/act/zhinengxinchou?spm=a213l2.13290233.7026689102.49.494e4414AWaccn&lwfrom=2019082517081737000"
    },
    {
      label:'数字化绩效',
      value:4,
      href:"https://page.dingtalk.com/wow/dingtalk/act/performanceplatform?lwfrom=2020051721573709001"
    },
    {
      label:'组织文化套件',
      value:5,
      href:"https://page.dingtalk.com/wow/dingtalk/act/organization-culture"
    },
    {
      label:'新职业在线平台',
      value:6,
      href:"https://page.dingtalk.com/wow/dingtalk/act/banner01"
    },
  ],
})
const platform = reactive({
  build:[
    {
      label:'钉钉搭',
      value:1,
      href:"https://open.dingtalk.com/dingdingda"
    },
    {
      label:'宜搭',
      value:2,
      href:"https://www.aliwork.com/?spm=a213l2.13146415.4929779444.137.20e16057XIT2bj&lwfrom=2019082517081737000"
    },
  ],
  establish:[
    {
      label:'能力中心',
      value:1,
      href:"https://developers.dingtalk.com/?spm=a213l2.13146415.4929779444.97.20e16057XIT2bj&lwfrom=2019082517081737000"
    },
  ],
  even:[
    {
      label:'业财一体',
      value:1,
      href:"https://page.dingtalk.com/wow/z/dingtalk/act/dingconnector"
    },
    {
      label:'营销服一体',
      value:2,
      href:"https://page.dingtalk.com/wow/dingtalk/default/dingtalk/uci579PjZ9xRFBx0ZdL34"
    },
    {
      label:'智能报表',
      value:3,
      href:"https://page.dingtalk.com/wow/z/dingtalk/default/MERJR1NB19G"
    }
  ],
  across:[
    {
      label:'服务窗',
      value:1,
      href:"https://page.dingtalk.com/wow/z/dingtalk/default/hrmseo-copy?spm=a213l2.24828067.8694560897.45.52eb151fw2pBd6&source=1001&lwfrom=2017120202091367000000111&wh_biz=tm"
    },
    {
      label:'产业互联',
      value:2,
      href:"https://page.dingtalk.com/wow/z/dingtalk/default/7H52PL2Z6UQ?spm=a213l2.23424264.6291504042.98.616f66c6laxphb&source=1001&lwfrom=2017120202091367000000111"
    },
    {
      label:'小程序',
      value:3,
      href:"https://page.dingtalk.com/wow/z/dingtalk/default/DINGminiApp?"
    }
  ],
  cool:[
    {
      label:'酷应用',
      value:1,
      href:"https://open.dingtalk.com/coolapp?spm=a213l2.13146415.4929779444.30.101e71e1um4qUO"
    },
  ]
})
const kit = ref([
  {
    href:'https://page.dingtalk.com/wow/dingtalk/default/dingtalk/I0HfYX4QStBIpLgxnZQe',
    bgimg:'https://img.alicdn.com/imgextra/i1/O1CN01o6eDkv1Ea8GyAZ5lV_!!6000000000367-2-tps-2062-480.png',
    bgcolor:'#D4CBFF',
    text1:'钉钉AI助理',
    text2:'钉钉AI助理汇集了钉钉AI产品能力帮助',
    text3:'企业迈入智能新时代',
  },
  {
    href:'https://page.dingtalk.com/wow/dingtalk/default/dingtalk/8JPLHiuvlKnxJiiZOBiW',
    bgimg:'https://img.alicdn.com/imgextra/i2/O1CN01JnycBd1hlh7zrvjDa_!!6000000004318-2-tps-2062-480.png',
    bgcolor:'#DCE7FA',
    text1:'钉钉管理套件',
    text2:'从组织到业务，涵盖企业核心管理场景',
    text3:'助力千行百业经营升级，降本增收',
  },
  {
    href:'https://page.dingtalk.com/wow/dingtalk/default/dingtalk/xxVfjFjatfZdsY6iywOzR',
    bgimg:'https://img.alicdn.com/imgextra/i2/O1CN01GmnK0Y1hL89m3Zj7D_!!6000000004260-2-tps-2062-480.png',
    bgcolor:'#B3DAFF',
    text1:'钉钉Office套件',
    text2:'打造原生的文档编辑体验、安全高效的数字资产管理能力',
    text3:'助力组织数字化协同与管理提效',
  },
  {
    href:'https://open.dingtalk.com/developer',
    bgimg:'https://img.alicdn.com/imgextra/i2/O1CN01WX3qkR1pIr7CANARv_!!6000000005338-0-tps-2062-480.jpg',
    bgcolor:'#C8F9F9',
    text1:'钉钉PaaS为想法创造方法',
    text2:'为企业和生态提供业务数字化的底座',
    text3:undefined,
  },
])
const hardware = ref([
  {
    href:'https://dingtalk.tmall.com/shop/view_shop.htm',
    bgimg:'https://img.alicdn.com/imgextra/i2/O1CN01v95FXE1mDPVv0eY9d_!!6000000004920-2-tps-2062-480.png',
    bgcolor:'#eceef1',
    text1:'企业智能办公设备一站式采购',
    text2:'企业智能办公设备一站式采购，涵盖多款智能办公硬件设备',
    text3:'助力企业进入混合办公新时代',
  },
])
const personal = ref([
  {
    href:'https://workspace.dingtalk.com/welcome?from=dingtalk',
    bgimg:'https://img.alicdn.com/imgextra/i2/O1CN01xyM5NV1dTaxzQLyjw_!!6000000003737-2-tps-2062-320.png',
    bgcolor:'#DADFFC',
    text1:'钉钉个人版，探索未来的工作方式',
    text2:'每个人的数字生产力工具，',
    text3:'让智能化变革普惠每一个个体',
  },
  
])
const hcm = ref([
  {
    href:'https://page.dingtalk.com/wow/z/dingtalk/simple/aQfHjaA4DiW7wrZnipkB#/org',
    bgimg:'https://img.alicdn.com/imgextra/i4/O1CN01NwKq1N1PQ1FjPVpc6_!!6000000001834-0-tps-2062-480.jpg',
    bgcolor:'#d3e1fc',
    text1:'组织大脑，知人善用，降本增效',
    text2:'助力企业通过数字化组织人才管理',
    text3:'实现企业降本增效，人才生生不息',
  },
  {
    href:'https://okr.dingtalk.com/homepage#/okr',
    bgimg:'https://img.alicdn.com/imgextra/i2/O1CN01YN8MQo1GMVgALMXDK_!!6000000000608-0-tps-2062-480.jpg',
    bgcolor:'#ecf5fe',
    text1:'助力企业家将管理理念全面落地',
    text2:'从战略穿透到日常执行，更进一步',
    text3:'钉钉Teambition、日志、OKR、绩效管理...',
  },
])
const education = ref([
  [
    {
      href:'https://page.dingtalk.com/wow/z/dingtalk/default/zxkt?wh_biz=tm',
      label:'在线课堂',
      value:1
    },
    {
      href:'https://page.dingtalk.com/wow/dingtalk/act/onlinehomework2',
      label:'在线智能作业',
      value:2
    },
    {
      href:'https://page.dingtalk.com/wow/dingtalk/act/newsch',
      label:'家校通讯录',
      value:3
    },
    {
      href:'https://page.dingtalk.com/wow/dingtalk/act/dingtclass',
      label:'班级群',
      value:4
    }
  ],
  [
    {
      href:'https://page.dingtalk.com/wow/dingtalk/act/clashomework',
      label:'家校本',
      value:1
    },
    {
      href:'https://page.dingtalk.com/wow/dingtalk/act/classexer',
      label:'班级打卡',
      value:2
    },
    {
      href:'https://page.dingtalk.com/wow/dingtalk/act/classnoti',
      label:'班级通知',
      value:3
    },
    {
      href:'https://page.dingtalk.com/wow/dingtalk/act/classtrees',
      label:'班级树',
      value:4
    },
  ],
  [
    {
      href:'https://page.dingtalk.com/wow/dingtalk/act/classcycle',
      label:'班级圈',
      value:1
    },
    {
      href:'https://page.dingtalk.com/wow/dingtalk/act/teachermeun',
      label:'教师工作台',
      value:2
    },
    {
      href:'https://page.dingtalk.com/wow/dingtalk/act/edustu',
      label:'局校家管理平台',
      value:3
    },
  ]
])

const experience = ref([
  {
    href:'https://n.dingtalk.com/dingding/exclusive_experience_center/exclusive/index.html?source=gw',
    bgimg:'https://img.alicdn.com/imgextra/i1/O1CN013V8mGj1DYvdP1oXHb_!!6000000000229-2-tps-2062-400.png',
    bgcolor:'#d2e5fb',
    text1:'专属版｜安全合规',
    text2:'提供全链路安全防护，保障企业数据资产',
    text3:'守护企业的每一份信任',
  },
])

const active =  ref(1)
const props = defineProps({
  maxHight:Number
})
const {maxHight} = toRefs(props)
  
  function changeMenu(val){
    active.value = val
  }
  defineExpose({
    initActive(){
      active.value = 0
    }
  })
</script>
  
<style scoped lang="scss">
.clearfix::after,
.clearfix::before{
  content: '';
  clear: both;
  display: block;
}
.customDwrop::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}
  .customDwrop{
    scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
    position: absolute;
    box-sizing: border-box;
    width: 100vw;
    top: 80px;
    left: 0;
    z-index: 100;
    background-color: #fff;
    overflow: hidden;
    transition: max-height .8s;
    display: flex;
    font-weight: 500;
    color: #171a1d;
    font-family: PingFangSC-Medium;
    &::before{
      content: '';
      border-top: 2px solid #eee;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .customDwropLeft{
      background-color: rgb(248,249,253);
      width: 22%;
      box-sizing: border-box;
      padding-top: 16px;
      padding-bottom: 22px;
      padding-right: 46px;
      font-size: 14px;
      white-space:nowrap;
      padding-left: calc(10.2vw - 77px);
      .active{
        color: #0089ff;
      }
      a{
        width: fit-content;
        height: 36px;
        line-height: 36px;
        text-decoration: none;
        margin-bottom: 8px;
        cursor: pointer;
        text-decoration: none;
        color: #171a1d;
        padding: 0 10px ;
        display: block;
      }
      .text:hover{
        background-color: #eee;
        border-radius: 7px;
      }
      .hr{
        padding: 10px 0;
        margin-bottom: 8px;
        height: auto;
        div{
          height: 1px;
          width: 118px;
          background: rgba(126, 134, 142, 0.16);
          border: 0;
        }
      }
    }
    .customDwropRight{
      flex: 1;
      padding-top: 16px;
      padding-bottom: 22px;
      padding-right: 48px;
      .dwropRightMain{
        .dwropRightMainItem{
          padding-left: 48px;
          color: #3c3c3c;
          .dwropRightMainContent{
            display: flex;
            width: 100%;
            max-width: 950px;
            font-size: 14px;
            .mainContent1{
              flex: 2;
              .mainContent1Title{
                height: 36px;
                line-height: 36px;
                margin-bottom: 6px;
                text-align: center;
                -webkit-box-shadow: inset 0 -1px 0 0 rgba(126, 134, 142, 0.16);
                box-shadow: inset 0 -1px 0 0 rgba(126, 134, 142, 0.16);
                font-weight: 500;
                font-size: 14px;
                color: #171a1d;
              }
              .customDwropRightBtns{
                display: flex;
                justify-content: space-between;
                .customDwropRightBtnList{
                  div{
                    span{
                      display: inline-block;
                      font-weight: 400;
                      padding: 0 10px;
                      margin-bottom: 4px;
                      line-height: 32px;
                      border-radius: 6px;
                      transition: background-color 0.3s, color 0.4s;
                      cursor: pointer;
                      color: #171a1d;
                      &:hover{
                        background-color: #eee;
                        border-radius: 7px;
                        color: #0089ff;
                      }
                    }
                  }
                  div:first-child{
                    height: 30px;
                    line-height: 30px;
                    margin-left: 10px;
                    margin-bottom: 2px;
                    font-size: 12px;
                    color: rgba(23, 26, 29, 0.6);
                  }
                }
              }
            }
            .mainContent2{
              flex: 1;
              width: 104px;
              height: 36px;
              line-height: 36px;
              text-align: center;
              flex: unset;
              color: #171a1d;
            }
            .mainContent3{
              flex: 3;
            }
            .el-row{
              width: 100%;
              .dwropRightMainEducation{
                a{
                  display: block;
                  span{
                    display: inline-block;
                    font-weight: 400;
                    padding: 0 10px;
                    margin-bottom: 4px;
                    line-height: 32px;
                    border-radius: 6px;
                    -webkit-transition: background-color 0.3s, color 0.4s;
                    -o-transition: background-color 0.3s, color 0.4s;
                    -moz-transition: background-color 0.3s, color 0.4s;
                    transition: background-color 0.3s, color 0.4s;
                    cursor: pointer;
                    color: #171a1d;
                    &:hover{
                      background-color: #eee;
                      border-radius: 7px;
                      color: #0089ff;
                    }
                  }
                }
              }
            }
          }
        }
        .dwropRightMainItem2{
          // display: flex;
          width: 100%;
          margin-top: 16px;
          margin-bottom: 10px;
          // flex-wrap: wrap;
          // justify-content: space-between;
          a{
            margin-right: 0px;
            flex: none;
            height: 200px;
            padding: 24px 24px 28px 30px;
            border-radius: 8px;
            margin-right: 24px;
            margin-bottom: 24px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: background-size 8s ease-out;
            box-sizing: border-box;
            .imgBlocTextBox{
              .imgBlocText{
                font-size: 20px;
                line-height: 34px;
                height: 34px;
                color: #171a1d;
                font-weight: 500;
                font-family: PingFangSC-Medium;
                margin-bottom: 4px;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
              }
              .imgBlocText2{
                font-size: 14px;
                font-weight: normal;
                line-height: 24px;
                letter-spacing: 0px;
                color: rgba(23, 26, 29, 0.6);
                max-height: 48px;
                word-break: break-all;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }
            }
            .imgBlockBtn{
              display: flex;
              align-items: center;
              justify-content: center;
              width: 30px;
              height: 30px;
              opacity: 1;
              background: #ffffff;
              box-sizing: border-box;
              border: 0.68px solid rgba(126, 134, 142, 0.24);
              border-radius: 50%;
              flex-shrink: 0;
              position: relative;
            }
            .icon1{
              opacity: 1;
              position: absolute;
              color: #171a1d;
              left: 7px;
            }
            .icon2{
              opacity: 0;
              position: absolute;
              color: #171a1d;
              left: 0;
              transition: left .3s;
            }
            &:hover .icon1{
              opacity: 0;
            }
            &:hover .icon2{
              opacity: 1;
              left: 6px;
            }
            &:hover {
              background-size: auto 120% !important;
            }
          }
          .qqq{
            margin-bottom: 0;
          }
        }
      }
    }
  }
</style>