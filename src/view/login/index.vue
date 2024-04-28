<template>
  <div class="login">
      <el-form ref="loginRef" :model="loginForm" :rules="loginRules" class="login-form" :key="loginFormFlag" v-if="loginFormFlag === 0" >
        <h3 class="title">{{t('title.login')}}</h3>
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            type="text"
            size="large"
            auto-complete="off"
            placeholder="账号"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            size="large"
            auto-complete="off"
            placeholder="密码"
            @keyup.enter="handleLogin"
          >
          </el-input>
        </el-form-item>
        <div class="entr">
          <div class="checkboxWrap"><el-checkbox v-model="loginForm.rememberMe" >记住密码</el-checkbox></div>
          <div class="forget"><span  @click="forgetPassword">忘记密码？</span></div>
        </div>
        <el-form-item style="width:100%;">
          <el-button
            :loading="loading"
            size="large"
            type="primary"
            style="width:100%;"
            @click.prevent="handleLogin"
          >
            <span v-if="!loading">登 录</span>
            <span v-else>登 录 中...</span>
          </el-button>
        </el-form-item>
        <div class="btns">
          <el-button class="btn" @click="goMobil">手机登录</el-button>
          <el-button class="btn" @click="goQrcode">二维码登录</el-button>
          <el-button class="btn" @click="goRegister">立即注册</el-button>
        </div>
        <div class="else">
          <div class="else-title" >
            <span>其他方式登录</span>
          </div>
          <div class="icons">
            <img src="../../assets/icon/github.svg" alt="">
            <img src="../../assets/icon/weixin.svg" alt="">
            <img src="../../assets/icon/guge.svg" alt="">
            <img src="../../assets/icon/zhifubao.svg" alt="">
          </div>
        </div>
      </el-form>
      <el-form ref="resetRef" :model="resetForm" :rules="resetRules" class="login-form" :key="loginFormFlag" v-if="loginFormFlag === 1" >
        <h3>重置密码</h3>
        <el-form-item prop="username">
          <el-input
            v-model="resetForm.username"
            type="text"
            size="large"
            auto-complete="off"
            placeholder="账号"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="resetForm.password"
            type="password"
            size="large"
            auto-complete="off"
            placeholder="密码"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="code" class="aaa">
          <el-input
            v-model="resetForm.code"
            type="text"
            size="large"
            auto-complete="off"
            placeholder="验证码"
          >
          </el-input>
          <el-button>获取验证码</el-button>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button
            :loading="loading"
            size="large"
            type="primary"
            style="width:100%;"
          >
            <span>重置</span>
          </el-button>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button
            :loading="loading"
            size="large"
            style="width:100%;"
            @click="goBack"
          >
            <span>返回</span>
          </el-button>
        </el-form-item>
      </el-form>
      <el-form ref="phoneRef" :model="phoneForm" :rules="phoneRules" class="login-form" :key="loginFormFlag" v-if="loginFormFlag === 2" >
        <h3>手机登录</h3>
        <el-form-item prop="telephoneNumber">
          <el-input
            v-model="phoneForm.telephoneNumber"
            type="text"
            size="large"
            auto-complete="off"
            placeholder="手机号"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="code" class="aaa">
          <el-input
            v-model="phoneForm.code"
            type="text"
            size="large"
            auto-complete="off"
            placeholder="验证码"
          >
          </el-input>
          <el-button>获取验证码</el-button>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button
            :loading="loading"
            size="large"
            type="primary"
            style="width:100%;"
          >
            <span>登录</span>
          </el-button>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button
            :loading="loading"
            size="large"
            style="width:100%;"
            @click="goBack"
          >
            <span>返回</span>
          </el-button>
        </el-form-item>
      </el-form>
      <el-form ref="qrcodeRef" :model="qrcodeForm" class="login-form" :key="loginFormFlag" v-if="loginFormFlag === 3">
        <h3>二维码登录</h3>
        <div class="qrcodeBox"><img src="" alt=""></div>
        <div class="title"><span>扫码后点击"确认"，即可完成登录</span></div>
        <el-form-item style="width:100%;">
          <el-button
            :loading="loading"
            size="large"
            style="width:100%;"
            @click="goBack"
          >
            <span>返回</span>
          </el-button>
        </el-form-item>
      </el-form>
      <el-form ref="registerRef" :model="registerForm" :rules="registerRules" class="login-form" :key="loginFormFlag" v-if="loginFormFlag === 4" >
        <h3 class="title">注册</h3>
        <el-form-item prop="username">
          <el-input
            v-model="registerForm.username"
            type="text"
            size="large"
            auto-complete="off"
            placeholder="账号"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="telephoneNumber">
          <el-input
            v-model="registerForm.telephoneNumber"
            type="text"
            size="large"
            auto-complete="off"
            placeholder="手机号"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="code" class="aaa">
          <el-input
            v-model="registerForm.code"
            type="text"
            size="large"
            auto-complete="off"
            placeholder="验证码"
          >
          </el-input>
          <el-button>获取验证码</el-button>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="registerForm.password"
            type="password"
            size="large"
            auto-complete="off"
            placeholder="密码"
          >
          </el-input>
        </el-form-item>
        <div class="safeBox">
          <div class="safeItem" :class="{red:safeNum>0,yellow:safeNum>2,green:safeNum>3}"></div>
          <div class="safeItem" :class="{red:safeNum>1,yellow:safeNum>2,green:safeNum>3}"></div>
          <div class="safeItem" :class="{yellow:safeNum>2,green:safeNum>3}"></div>
          <div class="safeItem" :class="{green:safeNum>3}"></div>
          <div class="safeItem" :class="{green:safeNum>4}"></div>
        </div>
        <el-form-item prop="passwordAgain">
          <el-input
            v-model="registerForm.passwordAgain"
            type="password"
            size="large"
            auto-complete="off"
            placeholder="密码"
            @keyup.enter="handleLogin"
          >
          </el-input>
        </el-form-item>
        <div class="entr">
          <div class="checkboxWrap"><el-checkbox v-model="registerForm.agree" >同意xxx协议</el-checkbox></div>
        </div>
        <el-form-item style="width:100%;">
          <el-button
            :loading="loading"
            size="large"
            type="primary"
            style="width:100%;"
            @click.prevent="handleLogin"
          >
            <span>注册</span>
          </el-button>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button
            :loading="loading"
            size="large"
            style="width:100%;"
            @click="goBack"
          >
            <span>返回</span>
          </el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script setup>
import {ref,watch,computed} from 'vue'
import bus from '../../libs/bus'
import { useI18n } from "vue-i18n";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";
const { t } = useI18n();
const { locale } = useI18n({ useScope: "global" });
// 中英文切换开关
const langSwitch = ref(locale.value === "zh_CN");
const elLocale = computed(() => (locale.value === "zh_CN" ? zhCn : en));
const loading = ref(false)
const captchaEnabled = ref(true)
const safeNum = ref(0)
const loginForm = ref({
  username: "",
  password: "",
  rememberMe: false,
  code: "",
  uuid: ""
});
const resetForm = ref({
  username: "",
  password: "",
  code:""
});
const phoneForm = ref({
  telephoneNumber: "",
  code:""
});
const qrcodeForm = ref({});
const registerForm = ref({
  username:'',
  telephoneNumber:'',
  code:'',
  agree:false,
  password:'',
  passwordAgain:''
});
const loginFormFlag = ref(0)
const loginRules = {
  username: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
  password: [{ required: true, trigger: "blur", message: "请输入您的密码" }]
};
const resetRules = {
  username: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
  password: [{ required: true, trigger: "blur", message: "请输入您的密码" }],
  code: [{ required: true, trigger: "change", message: "请输入验证码" }]
};
const phoneRules =  ref({                                                                                               
  telephoneNumber: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
  code: [{ required: true, trigger: "change", message: "请输入验证码" }]
}) 
const registerRules = {
  username: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
  telephoneNumber: [{ required: true, trigger: "blur", message: "请输入您的手机号" }],
  password: [{ required: true, trigger: "blur", message: "请输入您的密码" }],
  passwordAgain: [{ required: true, trigger: "blur", message: "请再次输入您的密码" }],
  code: [{ required: true, trigger: "change", message: "请输入验证码" }]
};

function forgetPassword(){
  loginFormFlag.value = 1
}
function goBack(){
  loginFormFlag.value = 0
}
function goMobil(){
  loginFormFlag.value = 2
}
function goQrcode(){
  loginFormFlag.value = 3
}
function goRegister(){
  loginFormFlag.value = 4
}

function getCode() {
  getCodeImg().then(res => {
    captchaEnabled.value = res.data.captchaEnabled === undefined ? true : res.data.captchaEnabled;
    if (captchaEnabled.value) {
      codeUrl.value = "data:image/gif;base64," + res.data.img;
      loginForm.value.uuid = res.data.uuid;
    }
  });
}
function bbb(a){
console.log(resetForm.value)
}
function handleLogin() {
  // proxy.$refs.loginRef.validate(valid => {
  //   if (valid) {
  //     loading.value = true;
  //     // 勾选了需要记住密码设置在 cookie 中设置记住用户名和密码
  //     if (loginForm.value.rememberMe) {
  //       Cookies.set("username", loginForm.value.username, { expires: 30 });
  //       Cookies.set("password", encrypt(loginForm.value.password), { expires: 30 });
  //       Cookies.set("rememberMe", loginForm.value.rememberMe, { expires: 30 });
  //     } else {
  //       // 否则移除
  //       Cookies.remove("username");
  //       Cookies.remove("password");
  //       Cookies.remove("rememberMe");
  //     }
  //     // 调用action的登录方法
  //     userStore.login(loginForm.value).then(() => {
  //       router.push({ path: redirect.value || "/" });
  //     }).catch(() => {
  //       loading.value = false;
  //       // 重新获取验证码
  //       if (captchaEnabled.value) {
  //         getCode();
  //       }
  //     });
  //   }
  // });
}
watch(
  ()=>registerForm.value['password'],
  (newData,oldData)=>{
    console.log(newData.length,oldData)
    safeNum.value = 0
    let reg = /\d/
    let rege = /[!@#$%^&*(),.?":{}|<>]/
    let regex = /[A-Z]/
    let regexv = /[a-z]/
    if(newData.length>8){
      safeNum.value++
      console.log('超8位')
    }if(rege.test(newData)){
      safeNum.value++
      console.log('有特殊字符')
    }if(regex.test(newData)){
      safeNum.value++
      console.log('有大写')
    }if(regexv.test(newData)){
      safeNum.value++
      console.log('有小写')
    }if(reg.test(newData)){
      safeNum.value++
      console.log('有数字')
    }
})
watch(loginFormFlag,(newData,oldData)=>{
  if(newData.value !== oldData){
    loginForm.value = {
      username: "",
      password: "",
      rememberMe: false,
      code: "",
      uuid: ""
    };
    resetForm.value = {
      username: "",
      password: "",
      code:""
    };
    phoneForm.value = {
      telephoneNumber: "",
      code:""
    };
    registerForm.value = {
      username:'',
      telephoneNumber:'',
      code:'',
      agree:false,
      password:'',
      passwordAgain:''
    };
  }
})



</script>

<style lang='scss' scoped>

.entr{
  display: flex;
  align-items: center;
  margin:0px 0px 20px 0px;
  .checkboxWrap{
    text-align: left;
    flex: 1;
  }
  .forget{
    flex: 1;
    text-align: right;
    span{
      font-size: 14px;
      color: #409eff;
      cursor: pointer;
    }
  }
}

.btns{
    display: flex;
    justify-content: space-between;
    margin:28px 0;
    .btn{
      flex: 1;
    }
}
.else{
  // margin: 0px 0 35px 0;
  .else-title{
    margin: 16px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &::before,&::after{
      content: '';
      display: block;
      width: 30%;
      height: 1px;
      background-color:rgba($color: #606266, $alpha: 0.2);
    }
  }
}
.icons{
  display:flex ;
  justify-content: space-around;
  img{
    width: 25px;
    height: 25px;
    color: #606266;
    cursor: pointer;
  }
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(../../assets/login-background.jpg);
  background-size: cover;
  position: relative;
}
.el-switch{
  position: absolute;
  top: 10px;
  right: 10px;
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}
@keyframes toLeft{
  0%{
    opacity: 0;
    transform: translate(20px);
  }

  100%{
    opacity: 1;
    transform: translate(0px);
  }
}
.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 35px 25px;
  *{
    animation: toLeft 1s ease 0s ;
  }
  .safeBox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    height: 5px;
    padding: 0 5px;
    .safeItem{
      height: 100%;
      flex: 1;
      margin-right: 10px;
      background-color: #00000040;
      border-radius: 5px;
    }
    :last-child{
      margin-right: 0;

    }
  }
  .qrcodeBox{
    img{
      width: 280px;
      height: 280px;
      background-color: red;
    }
  }
  .title{
    margin: 16px 0 36px 0;
  }
  .aaa{
    :deep(.el-form-item__content){
      flex-wrap: nowrap;
      .el-input{
        margin-right: 20px;
      }
      .el-button{
        height: 100%;
      }
    }
  }
  .el-input {
    height: 40px;
    input {
      height: 40px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 0px;
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.login-code {
  width: 33%;
  height: 40px;
  float: right;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
.login-code-img {
  height: 40px;
  padding-left: 12px;
}
.red{
  background-color: red !important;
}
.yellow{
  background-color: yellow !important;
}
.green{
  background-color: #55d187 !important;
}
</style>
