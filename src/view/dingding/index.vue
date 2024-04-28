<template>
  <div class="dingding">
    <div class="advertisementBox" v-if="isShowGuangGao">
      <a
        href="https://n.dingtalk.com/dingding/exclusive_experience_center/exclusive/index.html?source=gw"
        target="_blank"
      >
        <div class="advertisement">
          <div class="advertisementOFF" @click="offGuangGao"></div>
        </div>
      </a>
    </div>
    <div style="height: 80px; min-width: 750px">
      <div class="DDheader clearfix">
        <div class="headerLeft">
          <a href="https://www.dingtalk.com" target="_blank">
            <img
              src="https://gw.alicdn.com/imgextra/i4/O1CN013OYoqp1foK6tig7lJ_!!6000000004053-2-tps-864-168.png"
              alt=""
            />
          </a>
        </div>
        <div class="headerCenter">
          <div class="headerItem" @mouseenter="hover" @mouseleave="leave">
            <HoverSelect
              title="产品功能"
              textWidth="94px"
              textHeight="36px"
              border="none"
              :isselect="false"
            >
            </HoverSelect>
            <CustomDwrop ref="customDwrop" :maxHight="maxHight" />
          </div>
          <div class="headerItem">
            <HoverSelect
              :options="options1"
              title="解决方案"
              @selectItem="selectItem1"
              :guodu="true"
              textWidth="94px"
              dHeight="1000px"
              dWidth="150px"
              border="none"
              textHeight="36px"
              :isselect="false"
            >
            </HoverSelect>
          </div>
          <div class="headerItem">
            <a
              href="https://page.dingtalk.com/wow/z/dingtalk/default/caselist"
              target="_blank"
              >客户案例</a
            >
          </div>
          <div class="headerItem">
            <HoverSelect
              :options="options2"
              title="开放平台"
              dWidth="150px"
              textWidth="94px"
              dHeight="1000px"
              textHeight="36px"
              border="none"
              @selectItem="selectItem2"
              :guodu="true"
              :isselect="false"
            >
            </HoverSelect>
          </div>
          <div class="headerItem">
            <HoverSelect
              :options="options3"
              title="了解钉钉"
              dWidth="150px"
              textWidth="94px"
              dHeight="1000px"
              textHeight="36px"
              border="none"
              @selectItem="selectItem2"
              :guodu="true"
              :isselect="false"
            >
            </HoverSelect>
          </div>
          <div class="headerItem">
            <a
              href="https://pages.dingtalk.com/wow/z/tianyuan/default/opportunity_index"
              target="_blank"
              >增值服务</a
            >
          </div>
        </div>
        <div class="headerRight">
          <a
            href="https://meeting.dingtalk.com/app/join?spm=a213l2.13146415.0.0.7f1571e1ZsSk2s"
            target="_blank"
          >
            <el-button>加入会议</el-button>
          </a>
          <a
            href="https://oa.dingtalk.com/register_new.htm?lwfrom=2020052015221741000&source=1008"
            target="_blank"
          >
            <el-button>注册钉钉</el-button>
          </a>
          <a href="https://page.dingtalk.com/wow/dingtalk/act/download" target="_blank">
            <el-button type="primary">下载钉钉</el-button>
          </a>
          <a href="https://oa.dingtalk.com" target="_blank">
            <el-button type="" text>{{ "登录" }}</el-button>
          </a>
        </div>
      </div>
    </div>
    <div class="main" ref="main">
      <div class="bannerBox">
        <Banner
          ref="banner"
          :noRuChu="true"
          :noclick="true"
          :width="innerwidth"
          :bannerImg="bannerImg"
          :isHoverShow="false"
          :xiankuan="750"
        >
          <template #card="prop">
            <div
              class="cardBox"
              :style="`background-color:${
                prop.current <= bannerImg.length - 1
                  ? bannerImg[prop.current].color
                  : bannerImg[0].color
              }`"
            >
              <div class="card" v-for="(item, index) in bannerCard" :key="index">
                <div class="text1">{{ item.text1 }}</div>
                <div class="text2">{{ item.text2 }}</div>
                <a :href="item.href" target="_blank"
                  ><el-button>{{ item.button }}</el-button></a
                >
                <img :src="item.src" alt="" />
              </div>
            </div>
            <div class="cardBox2">
              <div class="cardBox2Item" v-for="(item, index) in bannerCard" :key="index">
                <div class="bg"></div>
                <div class="cardBox2ItemBox">
                  <img :src="item.src" alt="" />
                  <div class="text1">{{ item.text1 }}</div>
                  <div class="text2">{{ item.text2 }}</div>
                  <a :href="item.href" target="_blank"
                    ><div class="btn">{{ item.button }}</div></a
                  >
                </div>
              </div>
              <div class="filter"></div>
              <div
                class="filter2"
                :style="`background-color:${
                  prop.current <= bannerImg.length - 1
                    ? bannerImg[prop.current].color
                    : bannerImg[0].color
                }`"
              ></div>
            </div>
          </template>
        </Banner>
      </div>
    </div>
    <div class="animationDing clearfix">
      <div class="guding clearfix">
        <div
          class="iconImg"
          :style="`transform: scale(${scale}) translate(0px,${-toUp}px); opacity:${opacityNum}`"
        >
          <img
            src="https://gw.alicdn.com/imgextra/i2/O1CN01kEuOaQ1OQe6INmAUY_!!6000000001700-55-tps-180-180.svg"
            alt=""
          />
        </div>
        <div
          class="textImg"
          :style="`transform: scale(${scale}) translate(0px,${-toUp2}px); opacity:${opacityNum}`"
        >
          <img
            src="https://gw.alicdn.com/imgextra/i2/O1CN01rC0EJs1ZZJR2WHfdQ_!!6000000003208-2-tps-1880-272.png"
            alt=""
          />
        </div>
        <div
          class="aniamtionBlock"
          ref="aniamtionBlock"
          v-for="(item, index) in aniamtionBlockData"
          :key="index"
          :style="{
            transform: `translate3D(1e-05px, 1e-05px,${d3}px)`,
            opacity: `${opacityNum2 * item.opacityConst}`,
            ...item,
          }"
        ></div>
        <div class="iconTextBox" :class="{ bg: bgShow }">
          <div
            class="iconTextItem"
            ref="iconTextItem"
            :class="{ iconTextItemActive: index == iconTextItemAc && isBest }"
            @click="iconTextClick(item)"
            v-for="(item, index) in iconTextData"
            :key="index"
            @mouseenter="iconTextItemEnter(index)"
          >
            <img :src="item.img" alt="" />
            <span>{{ item.text }}</span>
          </div>
        </div>
        <div class="aniIMG" :style="`opacity: ${bgShow2};`">
          <div class="aniIMGText1">
            为什么要数字化
            <svg
              class="dt__icon"
              viewBox="0 0 1024 1024"
              width="1em"
              fill="currentColor"
              height="1em"
              aria-hidden="true"
              color="#1086ff"
            >
              <defs></defs>
              <path
                d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64zm0 85.333c-200.299 0-362.667 162.368-362.667 362.667S311.701 874.667 512 874.667 874.667 712.299 874.667 512 712.299 149.333 512 149.333zm-64 210.539a21.333 21.333 0 0111.84 3.563L656.043 494.25a21.333 21.333 0 010 35.498L459.84 660.565a21.333 21.333 0 01-33.173-17.792V381.227A21.333 21.333 0 01448 359.893z"
              ></path>
            </svg>
          </div>
          <div class="aniIMGText2">企业数字化一个钉钉就解决</div>
        </div>
      </div>
    </div>
    <div class="accordionCard">
      <div class="accordionCardTitle">智能办公硬件多场景全面开放</div>
      <div class="accordionCardBox">
        <div
          class="accordionCardItemwrap clearfix"
          ref="accordionCardItemwrap"
          :class="{ accordionCardItemActive: index == activeA }"
          v-for="(item, index) in accordionCardData"
          :key="index"
          @mouseenter="accordionCardItemMouse(index)"
        >
          <div class="accordionCardItem">
            <div class="text1">{{ item.text1 }}</div>
            <div class="text2"></div>
            <div class="text3">{{ item.text2 }}</div>
          </div>
          <div class="accordionCardItemColor">
            <img :src="item.img" alt="" />
            <div>
              <div class="text1Wanzheng">{{ item.text1Wanzheng }}</div>
              <div class="text2Wanzheng">{{ item.text2Wanzheng }}</div>
            </div>
            <el-button @click="accordionCardBy(index)">购买</el-button>
          </div>
        </div>
      </div>
      <div class="accordionCardBox2">
        <div class="itemBox">
          <div
            class="item"
            v-for="(item, index) in accordionCardData.slice(0, 3)"
            :class="{ itemActive: index == activeA2 }"
            :key="item.img"
            @mouseenter="accordionCardItemMouse2(index)"
          >
            <div class="i">
              <div class="text1">{{ item.text1 }}</div>
              <div class="br"></div>
              <div class="text2">{{ item.text2 }}</div>
            </div>
            <div class="activeI">
              <img :src="item.img" alt="" />
              <div>
                <div class="text1Wanzheng">{{ item.text1Wanzheng }}</div>
                <div class="text2Wanzheng">{{ item.text2Wanzheng }}</div>
              </div>
              <el-button @click="accordionCardBy(index)">购买</el-button>
            </div>
          </div>
        </div>
        <div class="itemBox">
          <div
            class="item"
            v-for="(item, index) in accordionCardData.slice(3, 6)"
            :class="{ itemActive: index + 3 == activeA2 }"
            :key="item.img"
            @mouseenter="accordionCardItemMouse2(index + 3)"
          >
            <div class="i">
              <div class="text1">{{ item.text1 }}</div>
              <div class="br"></div>
              <div class="text2">{{ item.text2 }}</div>
            </div>
            <div class="activeI">
              <img :src="item.img" alt="" />
              <div>
                <div class="text1Wanzheng">{{ item.text1Wanzheng }}</div>
                <div class="text2Wanzheng">{{ item.text2Wanzheng }}</div>
              </div>
              <el-button @click="accordionCardBy(index)">购买</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="collaborationTools">
      <div class="collaborationToolsTitle">7亿用户的选择人人喜爱的协作工具</div>
      <div class="tabs">
        <div class="tabTop">
          <div
            :class="{ tabActive: index == tabAc }"
            v-for="(item, index) in tabData"
            ref="tabButton"
            :key="index"
            @click="collTabClick(index)"
          >
            {{ item.text }}
          </div>
          <div class="tabBg" :style="`left:${tabLeft}px`"></div>
        </div>
        <div class="tabContent">
          <div class="tabContentLeft" :style="`height:${tabContentLeftHeight}px`">
            <template v-for="(item, index) in tabContentLeftData">
              <div
                :class="{ xxx: index == tabAc, yyy: index != tabAc }"
                ref="shabi"
                style="transition: all 0.5s; position: absolute; top: 0; left: 0"
              >
                <div class="tabContentLeftBox1">
                  <div
                    class="tabContentLeftIcon"
                    :style="`background:url(${item.icon}) center center / 100% 100% no-repeat`"
                  ></div>
                  <span>{{ item.leftTitle1 }}</span>
                </div>
                <div class="tabContentLeftBox2">{{ item.leftTitle2 }}</div>

                <a
                  :href="item.href"
                  style="display: inline-flex; margin-bottom: 20px"
                  target="_blank"
                  ><el-button type="primary">立即使用</el-button></a
                >
                <div
                  class="step"
                  v-for="(item2, index2) in item.step"
                  :key="index2"
                  :class="{ stepFocus: stepActive == index2 }"
                  @mouseenter="stepClick(item2.img, index2)"
                >
                  <div class="stepLine"></div>
                  <div class="stepPoint"></div>
                  <div class="stepText1">{{ item2.text1 }}</div>
                  <div class="stepText2">{{ item2.text2 }}</div>
                </div>
              </div>
            </template>
          </div>
          <div class="tabContentRight">
            <div class="tabContentRightImg">
              <img v-if="currentImg" :src="currentImg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="EnterpriseClassificatio">
      <div class="EnterpriseClassificatioTitle">沉淀2500万企业组织数字化核心场景</div>
      <div class="dtdTabs">
        <div class="dtdTabsTop">
          <div
            :class="{ dtdTabsTopActive: index == dtdTabsTopAc }"
            v-for="(item, index) in dtdTabsTopBtnData"
            :key="index"
            ref="tabButton2"
            @click="dtdTabClick(index)"
          >
            {{ item }}
          </div>
          <div class="dtdTabsTopBg" :style="`left:${dtdLeft}px`"></div>
        </div>
        <div class="dadTabContentBox">
          <div class="dadTabContent">
            <template v-for="(item, index) in dadTabData" :key="index">
              <div
                class="dadTabContentLeft"
                v-if="index == dtdTabsTopAc"
                :style="`background: url(${item.img}) center center/auto ${dadBgsize}% no-repeat;`"
                :class="{ dadcontentActive: index == dtdTabsTopAc }"
              ></div>
            </template>
            <div class="dadTabContentRight">
              <div
                class="dadTabContentRightBox"
                :class="{ dadTabContentRightBoxZ: index == dtdTabsTopAc }"
                v-for="(item, index) in dadTabData"
                :key="index"
              >
                <img
                  :src="item.img2"
                  :style="item.position"
                  v-if="index == dtdTabsTopAc"
                  alt=""
                />
                <div class="textBox">
                  <div class="text1">一站式解决方案，助力产业升级</div>
                  <div
                    class="text2"
                    :class="{
                      dadTabContentRightTextX: index == dtdTabsTopAc,
                      dadTabContentRightTextY: index != dtdTabsTopAc,
                    }"
                  >
                    {{ item.text1 }}
                  </div>
                  <div
                    class="text3"
                    :class="{
                      dadTabContentRightTextX: index == dtdTabsTopAc,
                      dadTabContentRightTextY: index != dtdTabsTopAc,
                    }"
                  >
                    {{ item.text2 }}
                  </div>
                </div>
                <div class="buttonBox" v-if="index == dtdTabsTopAc">
                  <a
                    :href="item.href"
                    style="display: inline-flex; margin-bottom: 20px"
                    target="_blank"
                  >
                    <el-button type="primary">查看方案详情</el-button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="homeGradientBg">
      <div class="newCardsDDEdition">
        <div class="newCardsDDEditionTitle">钉钉陪伴组织全面进入数字化时代</div>
        <div class="newCardsContent">
          <div class="newCardsBox">
            <div
              class="newCardsItem"
              :class="{ newCardsItemAc: index == newCardsItemActive }"
              v-for="(item, index) in newCardsItemContentData"
              @mouseenter="newCardsItemEnter(index)"
              :key="index"
            >
              <div
                class="newCardsItemContent"
                :style="index == newCardsItemActive ? item.bg2 : item.bg"
              >
                <div style="width: 100%; height: 100%">
                  <img :src="item.icon" alt="" />
                  <div class="title">{{ item.title }}</div>
                  <div class="textBox">
                    <div class="text1">{{ item.text1 }}</div>
                    <div class="text2">{{ item.text2 }}</div>
                  </div>
                  <div class="price">
                    <span class="span1">{{ item.price || "￥" }}</span>
                    <span class="span2">{{ item.price1 }}</span>
                    <span class="span3">{{ item.price2 }}</span>
                  </div>
                  <div class="newCardsBtn">
                    <a :href="item.btnUrl" style="display: inline-block" target="_blank"
                      ><el-button> {{ item.btn }}</el-button></a
                    >
                    <div class="more" style="color: #fff">
                      <a :href="item.href" style="color: #fff" target="_blank">了解更多</a
                      ><el-icon class="icon1" :size="18"><Right /></el-icon
                      ><el-icon class="icon2" :size="14"><ArrowRightBold /></el-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="newCardsBtn">
          <a
            href="https://pages.dingtalk.com/wow/z/tianyuan/default/opportunity_index?spm=a213l2.21130016.8269183832.86.59387799kmPKQl&source=1001&lwfrom=2017120202091367000000111&wh_biz=tm&wh_weex=true&channel=aggregation_guanwang"
            style="display: inline-block"
            target="_blank"
            ><el-button>查看版本对比</el-button></a
          >
        </div>
      </div>
      <div class="allServe">
        <div class="allServeTitle">钉钉将为企业数字化提供全方位服务</div>
        <div class="allServeBox">
          <div class="allServeContent">
            <div
              class="allServeItem"
              :style="`background:url(${item.img}) right center / auto 100% no-repeat rgb(255, 255, 255)`"
              v-for="(item, index) in allServeData"
              :key="index"
            >
              <div class="text1">{{ item.text1 }}</div>
              <div class="text2">{{ item.text2 }}</div>
            </div>
          </div>
        </div>
        <div class="allServeFooter">我们将根据企业所购钉钉版本或套餐提供相应上述服务</div>
      </div>
      <div class="CaseBanner">
        <div class="CaseBannerTitle">客户案例</div>
        <div class="CaseBannerContent">
          <div
            class="CaseBannerItemBox"
            ref="CaseBannerItemBox"
            :style="`left:${CaseBannerItemBoxLeft}px`"
          >
            <div
              class="CaseBannerItem"
              ref="CaseBannerItem"
              v-for="(item, index) in CaseBannerData"
              :key="index"
            >
              <div class="CaseBannerItemContent">
                <div class="CaseBannerItemTop">
                  <div class="img" :style="`background-image: url(${item.img});`"></div>
                </div>
                <div class="CaseBannerItemBottom">
                  <div
                    class="icon"
                    :style="`background: url(${item.icon}) center center / auto 100% no-repeat;`"
                  ></div>
                  <div class="textBox">
                    <div class="textBoxNoHover" v-html="item.text1"></div>
                    <div class="textBoxHover">
                      <div class="text1">{{ item.activeText1 }}</div>
                      <div class="text2">{{ item.activeText2 }}</div>
                    </div>
                  </div>
                  <div class="more">
                    <a :href="item.href" target="_blank">了解更多</a
                    ><el-icon class="icon1" :size="18"><Right /></el-icon
                    ><el-icon class="icon2" :size="14"><ArrowRightBold /></el-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="CaseBannerTool">
          <div class="prev" :class="{ prevAc: CaseBannerToolActive == 0 }" @click="prev">
            <el-icon class="icon1" :size="23"><ArrowLeft /></el-icon
            ><el-icon class="icon1" :size="23"><Back /></el-icon>
          </div>
          <div class="next" :class="{ nextAc: CaseBannerToolActive == 1 }" @click="next">
            <el-icon class="icon1" :size="23"><Right /></el-icon
            ><el-icon class="icon1" :size="23"><ArrowRight /></el-icon>
          </div>
        </div>
      </div>
      <div class="CasePlay">
        <div class="CasePlayTitle">各行各业都在用钉钉</div>
        <div class="CasePlayItem">
          <scrollImg :imgs="CasePlayImgs" :imgWidth="200" :imgHeight="100" time="50s" />
          <scrollImg :imgs="CasePlayImgs2" :imgWidth="200" :imgHeight="100" time="60s" />
          <scrollImg :imgs="CasePlayImgs3" :imgWidth="200" :imgHeight="100" time="50s" />
        </div>
        <div class="CasePlayBtn">
          <a
            href="https://page.dingtalk.com/wow/z/dingtalk/default/caselist#/"
            style="display: inline-block"
            target="_blank"
            ><el-button>查看全部案例</el-button></a
          >
        </div>
      </div>
    </div>
    <div class="safe">
      <div class="safeTitle">钉钉持续保障企业组织的数字化安全</div>
      <div class="safeBtn">
        <a
          href="https://page.dingtalk.com/wow/dingtalk/default/dingtalk/qDknAwUPOrLlo0JRyXVWg?dd_mini_app_id=5000000004997171"
          target="_blank"
          ><el-button type="primary">安全合规中心</el-button></a
        >
      </div>
      <div class="safeMain">
        <div class="safeMainTop">
          <div class="left">
            <div class="leftSvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1176 760"
                width="1176"
                height="760"
                preserveAspectRatio="xMidYMid meet"
                style="
                  width: 100%;
                  height: 100%;
                  transform: translate3d(0px, 0px, 0px);
                  content-visibility: visible;
                "
              >
                <defs>
                  <clipPath id="__lottie_element_2">
                    <rect width="1176" height="760" x="0" y="0"></rect>
                  </clipPath>
                  <linearGradient
                    id="__lottie_element_7"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-6.236000061035156"
                    y1="-12.36400032043457"
                    x2="3.7730000019073486"
                    y2="0"
                  >
                    <stop offset="0%" stop-color="rgb(255,124,0)" stop-opacity="1"></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(255,145,0)"
                      stop-opacity="0.699999988079071"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(255,165,0)"
                      stop-opacity="0.4000000059604645"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_11"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-30.45199966430664"
                    y1="-32.1609992980957"
                    x2="-30.45199966430664"
                    y2="13.387999534606934"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.27799999713897705"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.13899999856948853"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_15"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-16.329999923706055"
                    y1="23.56800079345703"
                    x2="-7.952000141143799"
                    y2="10.12399959564209"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.4779999852180481"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.23899999260902405"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <clipPath id="__lottie_element_17">
                    <path d="M0,0 L1176,0 L1176,760 L0,760z"></path>
                  </clipPath>
                  <linearGradient
                    id="__lottie_element_23"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-83.5"
                    y1="-117.50599670410156"
                    x2="-53.01100158691406"
                    y2="44.51300048828125"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_24"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="103.11399841308594"
                    y1="-230.26699829101562"
                    x2="21.89699935913086"
                    y2="-33.409000396728516"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="28%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop
                      offset="56%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      offset="78%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <radialGradient
                    id="__lottie_element_25"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    cx="-61.361000061035156"
                    cy="249.0229949951172"
                    r="197.3673265050326"
                    fx="-61.361000061035156"
                    fy="249.0229949951172"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(255,146,32)"
                      stop-opacity="0.32199999690055847"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(255,121,16)"
                      stop-opacity="0.16099999845027924"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(255,95,0)"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <linearGradient
                    id="__lottie_element_26"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-139.23800659179688"
                    y1="101.2959976196289"
                    x2="122.55699920654297"
                    y2="-101.51300048828125"
                  >
                    <stop offset="4%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="13%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="23%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="33%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="44%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="63%" stop-color="rgb(110,176,243)"></stop>
                    <stop offset="82%" stop-color="rgb(0,127,255)"></stop>
                    <stop offset="88%" stop-color="rgb(110,176,243)"></stop>
                    <stop offset="93%" stop-color="rgb(221,225,230)"></stop>
                  </linearGradient>
                  <mask id="__lottie_element_28">
                    <path
                      stroke="url(#__lottie_element_27)"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="4"
                      stroke-width="1"
                      d=" M77.61111450195312,0 C77.61111450195312,0 77.61111450195312,0 77.61111450195312,0 C77.61111450195312,42.83357238769531 42.83357238769531,77.61111450195312 0,77.61111450195312 C0,77.61111450195312 0,77.61111450195312 0,77.61111450195312 C-42.83357238769531,77.61111450195312 -77.61111450195312,42.83357238769531 -77.61111450195312,0 C-77.61111450195312,0 -77.61111450195312,0 -77.61111450195312,0 C-77.61111450195312,-42.83357238769531 -42.83357238769531,-77.61111450195312 0,-77.61111450195312 C0,-77.61111450195312 0,-77.61111450195312 0,-77.61111450195312 C42.83357238769531,-77.61111450195312 77.61111450195312,-42.83357238769531 77.61111450195312,0z"
                    ></path>
                  </mask>
                  <linearGradient
                    id="__lottie_element_27"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-139.23800659179688"
                    y1="101.2959976196289"
                    x2="122.55699920654297"
                    y2="-101.51300048828125"
                  >
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="4%"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="13%"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="23%"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="23%"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="23%"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="33%"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="44%"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="63%"
                      stop-opacity="0.07999999821186066"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="82%"
                      stop-opacity="0.16099999845027924"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="88%"
                      stop-opacity="0.07999999821186066"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="93%"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_32"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-83.5"
                    y1="-117.50599670410156"
                    x2="-53.01100158691406"
                    y2="44.51300048828125"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_33"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="103.11399841308594"
                    y1="-230.26699829101562"
                    x2="21.89699935913086"
                    y2="-33.409000396728516"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="28%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop
                      offset="56%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      offset="78%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <radialGradient
                    id="__lottie_element_34"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    cx="-61.361000061035156"
                    cy="249.0229949951172"
                    r="197.3673265050326"
                    fx="-61.361000061035156"
                    fy="249.0229949951172"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(255,146,32)"
                      stop-opacity="0.32199999690055847"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(255,121,16)"
                      stop-opacity="0.16099999845027924"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(255,95,0)"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <linearGradient
                    id="__lottie_element_35"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-139.23800659179688"
                    y1="101.2959976196289"
                    x2="122.55699920654297"
                    y2="-101.51300048828125"
                  >
                    <stop offset="4%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="13%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="23%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="33%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="44%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="63%" stop-color="rgb(110,176,243)"></stop>
                    <stop offset="82%" stop-color="rgb(0,127,255)"></stop>
                    <stop offset="88%" stop-color="rgb(110,176,243)"></stop>
                    <stop offset="93%" stop-color="rgb(221,225,230)"></stop>
                  </linearGradient>
                  <mask id="__lottie_element_37">
                    <path
                      stroke="url(#__lottie_element_36)"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="4"
                      stroke-width="1"
                      d=" M101.0495834350586,0 C101.0495834350586,0 101.0495834350586,0 101.0495834350586,0 C101.0495834350586,55.769264221191406 55.769264221191406,101.0495834350586 0,101.0495834350586 C0,101.0495834350586 0,101.0495834350586 0,101.0495834350586 C-55.769264221191406,101.0495834350586 -101.0495834350586,55.769264221191406 -101.0495834350586,0 C-101.0495834350586,0 -101.0495834350586,0 -101.0495834350586,0 C-101.0495834350586,-55.769264221191406 -55.769264221191406,-101.0495834350586 0,-101.0495834350586 C0,-101.0495834350586 0,-101.0495834350586 0,-101.0495834350586 C55.769264221191406,-101.0495834350586 101.0495834350586,-55.769264221191406 101.0495834350586,0z"
                    ></path>
                  </mask>
                  <linearGradient
                    id="__lottie_element_36"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-139.23800659179688"
                    y1="101.2959976196289"
                    x2="122.55699920654297"
                    y2="-101.51300048828125"
                  >
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="4%"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="13%"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="23%"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="23%"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="23%"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="33%"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="44%"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="63%"
                      stop-opacity="0.07999999821186066"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="82%"
                      stop-opacity="0.16099999845027924"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="88%"
                      stop-opacity="0.07999999821186066"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="93%"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_41"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-83.5"
                    y1="-117.50599670410156"
                    x2="-53.01100158691406"
                    y2="44.51300048828125"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_42"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="103.11399841308594"
                    y1="-230.26699829101562"
                    x2="21.89699935913086"
                    y2="-33.409000396728516"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="28%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop
                      offset="56%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      offset="78%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <radialGradient
                    id="__lottie_element_43"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    cx="-61.361000061035156"
                    cy="249.0229949951172"
                    r="197.3673265050326"
                    fx="-61.361000061035156"
                    fy="249.0229949951172"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(255,146,32)"
                      stop-opacity="0.32199999690055847"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(255,121,16)"
                      stop-opacity="0.16099999845027924"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(255,95,0)"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <linearGradient
                    id="__lottie_element_44"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-139.23800659179688"
                    y1="101.2959976196289"
                    x2="122.55699920654297"
                    y2="-101.51300048828125"
                  >
                    <stop offset="4%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="13%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="23%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="33%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="44%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="63%" stop-color="rgb(110,176,243)"></stop>
                    <stop offset="82%" stop-color="rgb(0,127,255)"></stop>
                    <stop offset="88%" stop-color="rgb(110,176,243)"></stop>
                    <stop offset="93%" stop-color="rgb(221,225,230)"></stop>
                  </linearGradient>
                  <mask id="__lottie_element_46">
                    <path
                      stroke="url(#__lottie_element_45)"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="4"
                      stroke-width="1"
                      d=" M138,0 C138,0 138,0 138,0 C138,76.16220092773438 76.16220092773438,138 0,138 C0,138 0,138 0,138 C-76.16220092773438,138 -138,76.16220092773438 -138,0 C-138,0 -138,0 -138,0 C-138,-76.16220092773438 -76.16220092773438,-138 0,-138 C0,-138 0,-138 0,-138 C76.16220092773438,-138 138,-76.16220092773438 138,0z"
                    ></path>
                  </mask>
                  <linearGradient
                    id="__lottie_element_45"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-139.23800659179688"
                    y1="101.2959976196289"
                    x2="122.55699920654297"
                    y2="-101.51300048828125"
                  >
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="4%"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="13%"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="23%"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="23%"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="23%"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="33%"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="44%"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="63%"
                      stop-opacity="0.07999999821186066"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="82%"
                      stop-opacity="0.16099999845027924"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="88%"
                      stop-opacity="0.07999999821186066"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="93%"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_50"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-83.5"
                    y1="-117.50599670410156"
                    x2="-53.01100158691406"
                    y2="44.51300048828125"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_51"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="103.11399841308594"
                    y1="-230.26699829101562"
                    x2="21.89699935913086"
                    y2="-33.409000396728516"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="28%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop
                      offset="56%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      offset="78%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <radialGradient
                    id="__lottie_element_52"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    cx="-61.361000061035156"
                    cy="249.0229949951172"
                    r="197.3673265050326"
                    fx="-61.361000061035156"
                    fy="249.0229949951172"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(255,146,32)"
                      stop-opacity="0.32199999690055847"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(255,121,16)"
                      stop-opacity="0.16099999845027924"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(255,95,0)"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <linearGradient
                    id="__lottie_element_53"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-139.23800659179688"
                    y1="101.2959976196289"
                    x2="122.55699920654297"
                    y2="-101.51300048828125"
                  >
                    <stop offset="4%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="13%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="23%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="33%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="44%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="63%" stop-color="rgb(110,176,243)"></stop>
                    <stop offset="82%" stop-color="rgb(0,127,255)"></stop>
                    <stop offset="88%" stop-color="rgb(110,176,243)"></stop>
                    <stop offset="93%" stop-color="rgb(221,225,230)"></stop>
                  </linearGradient>
                  <mask id="__lottie_element_55">
                    <path
                      stroke="url(#__lottie_element_54)"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="4"
                      stroke-width="1"
                      d=" M155.8396453857422,0 C155.8396453857422,0 155.8396453857422,0 155.8396453857422,0 C155.8396453857422,86.00790405273438 86.00790405273438,155.8396453857422 0,155.8396453857422 C0,155.8396453857422 0,155.8396453857422 0,155.8396453857422 C-86.00790405273438,155.8396453857422 -155.8396453857422,86.00790405273438 -155.8396453857422,0 C-155.8396453857422,0 -155.8396453857422,0 -155.8396453857422,0 C-155.8396453857422,-86.00790405273438 -86.00790405273438,-155.8396453857422 0,-155.8396453857422 C0,-155.8396453857422 0,-155.8396453857422 0,-155.8396453857422 C86.00790405273438,-155.8396453857422 155.8396453857422,-86.00790405273438 155.8396453857422,0z"
                    ></path>
                  </mask>
                  <linearGradient
                    id="__lottie_element_54"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-139.23800659179688"
                    y1="101.2959976196289"
                    x2="122.55699920654297"
                    y2="-101.51300048828125"
                  >
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="4%"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="13%"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="23%"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="23%"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="23%"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="33%"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="44%"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="63%"
                      stop-opacity="0.07999999821186066"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="82%"
                      stop-opacity="0.16099999845027924"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="88%"
                      stop-opacity="0.07999999821186066"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="93%"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_59"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-83.5"
                    y1="-117.50599670410156"
                    x2="-53.01100158691406"
                    y2="44.51300048828125"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_60"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="103.11399841308594"
                    y1="-230.26699829101562"
                    x2="21.89699935913086"
                    y2="-33.409000396728516"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="28%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop
                      offset="56%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      offset="78%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <radialGradient
                    id="__lottie_element_61"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    cx="-61.361000061035156"
                    cy="249.0229949951172"
                    r="197.3673265050326"
                    fx="-61.361000061035156"
                    fy="249.0229949951172"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(255,146,32)"
                      stop-opacity="0.32199999690055847"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(255,121,16)"
                      stop-opacity="0.16099999845027924"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(255,95,0)"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <linearGradient
                    id="__lottie_element_62"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-139.23800659179688"
                    y1="101.2959976196289"
                    x2="122.55699920654297"
                    y2="-101.51300048828125"
                  >
                    <stop offset="4%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="13%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="23%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="33%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="44%" stop-color="rgb(221,225,230)"></stop>
                    <stop offset="63%" stop-color="rgb(110,176,243)"></stop>
                    <stop offset="82%" stop-color="rgb(0,127,255)"></stop>
                    <stop offset="88%" stop-color="rgb(110,176,243)"></stop>
                    <stop offset="93%" stop-color="rgb(221,225,230)"></stop>
                  </linearGradient>
                  <mask id="__lottie_element_64">
                    <path
                      stroke="url(#__lottie_element_63)"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="4"
                      stroke-width="1"
                      d=" M156.94000244140625,0 C156.94000244140625,0 156.94000244140625,0 156.94000244140625,0 C156.94000244140625,86.61518859863281 86.61518859863281,156.94000244140625 0,156.94000244140625 C0,156.94000244140625 0,156.94000244140625 0,156.94000244140625 C-86.61518859863281,156.94000244140625 -156.94000244140625,86.61518859863281 -156.94000244140625,0 C-156.94000244140625,0 -156.94000244140625,0 -156.94000244140625,0 C-156.94000244140625,-86.61518859863281 -86.61518859863281,-156.94000244140625 0,-156.94000244140625 C0,-156.94000244140625 0,-156.94000244140625 0,-156.94000244140625 C86.61518859863281,-156.94000244140625 156.94000244140625,-86.61518859863281 156.94000244140625,0z"
                    ></path>
                  </mask>
                  <linearGradient
                    id="__lottie_element_63"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-139.23800659179688"
                    y1="101.2959976196289"
                    x2="122.55699920654297"
                    y2="-101.51300048828125"
                  >
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="4%"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="13%"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="23%"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="23%"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="23%"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="33%"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="44%"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="63%"
                      stop-opacity="0.07999999821186066"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="82%"
                      stop-opacity="0.16099999845027924"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="88%"
                      stop-opacity="0.07999999821186066"
                    ></stop>
                    <stop
                      stop-color="rgb(255,255,255)"
                      offset="93%"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_68"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-2.1480000019073486"
                    y1="-1.5"
                    x2="1"
                    y2="-0.8180000185966492"
                  >
                    <stop offset="0%" stop-color="rgb(255,124,0)" stop-opacity="1"></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(255,145,0)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(255,165,0)"
                      stop-opacity="0.6000000238418579"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_72"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    y1="-1.5"
                    x2="0"
                    y2="1.5"
                  >
                    <stop
                      offset="6%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="40%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0.7509999871253967"
                    ></stop>
                    <stop
                      offset="75%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                  </linearGradient>
                  <radialGradient
                    id="__lottie_element_73"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    cx="-2.4670000076293945"
                    cy="0"
                    r="13.675377039274393"
                    fx="-2.4670000076293945"
                    fy="0"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.4779999852180481"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.23899999260902405"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <linearGradient
                    id="__lottie_element_77"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-7.915999889373779"
                    y1="-0.6859999895095825"
                    x2="17.025999069213867"
                    y2="-0.6859999895095825"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="28%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop
                      offset="56%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      offset="78%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_81"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-7.915999889373779"
                    y1="-0.6859999895095825"
                    x2="17.025999069213867"
                    y2="-0.6859999895095825"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="28%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop
                      offset="56%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      offset="78%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_85"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-1.9789999723434448"
                    y1="-0.6859999895095825"
                    x2="4.256999969482422"
                    y2="-0.6859999895095825"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="28%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop
                      offset="56%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      offset="78%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_89"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-1.9789999723434448"
                    y1="-0.6859999895095825"
                    x2="4.256999969482422"
                    y2="-0.6859999895095825"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="28%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop
                      offset="56%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      offset="78%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_93"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-7.517000198364258"
                    y1="-1.5"
                    x2="3.5"
                    y2="-0.8180000185966492"
                  >
                    <stop offset="0%" stop-color="rgb(255,124,0)" stop-opacity="1"></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(255,145,0)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(255,165,0)"
                      stop-opacity="0.6000000238418579"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_97"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-7.517000198364258"
                    y1="-1.5"
                    x2="3.5"
                    y2="-0.8180000185966492"
                  >
                    <stop offset="0%" stop-color="rgb(255,124,0)" stop-opacity="1"></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(255,145,0)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(255,165,0)"
                      stop-opacity="0.6000000238418579"
                    ></stop>
                  </linearGradient>
                </defs>
                <g clip-path="url(#__lottie_element_2)">
                  <g
                    clip-path="url(#__lottie_element_17)"
                    transform="matrix(1,0,0,1,-2,-138)"
                    opacity="1"
                    style="display: block"
                  >
                    <g
                      transform="matrix(1,0,0,1,588,307)"
                      opacity="0.1"
                      style="display: block"
                    >
                      <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke="rgb(222,222,223)"
                          stroke-opacity="1"
                          stroke-width="1"
                          d=" M-294,0 C-294,0 294,0 294,0"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,588,215)"
                      opacity="0.1"
                      style="display: block"
                    >
                      <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke="rgb(222,222,223)"
                          stroke-opacity="1"
                          stroke-width="1"
                          d=" M-294,0 C-294,0 294,0 294,0"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,588,355)"
                      opacity="0.1"
                      style="display: block"
                    >
                      <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke="rgb(222,222,223)"
                          stroke-opacity="1"
                          stroke-width="1"
                          d=" M-294,0 C-294,0 294,0 294,0"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,588,447)"
                      opacity="0.1"
                      style="display: block"
                    >
                      <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke="rgb(222,222,223)"
                          stroke-opacity="1"
                          stroke-width="1"
                          d=" M-294,0 C-294,0 294,0 294,0"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,506.63916015625,307)"
                      opacity="1"
                      style="display: block"
                    >
                      <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                        <path
                          fill="url(#__lottie_element_97)"
                          fill-opacity="1"
                          d=" M3.5,-1.5 C3.5,-1.5 3.5,1.5 3.5,1.5 C3.5,1.5 -3.5,1.5 -3.5,1.5 C-3.5,1.5 -3.5,-1.5 -3.5,-1.5 C-3.5,-1.5 3.5,-1.5 3.5,-1.5z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.8799999952316284,0,0,1,-21,355)"
                      opacity="0.8"
                      style="display: block"
                    >
                      <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                        <path
                          fill="url(#__lottie_element_93)"
                          fill-opacity="1"
                          d=" M3.5,-1.5 C3.5,-1.5 3.5,1.5 3.5,1.5 C3.5,1.5 -3.5,1.5 -3.5,1.5 C-3.5,1.5 -3.5,-1.5 -3.5,-1.5 C-3.5,-1.5 3.5,-1.5 3.5,-1.5z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,347,355)"
                      opacity="1"
                      style="display: block"
                    >
                      <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                        <path
                          fill="rgb(221,225,230)"
                          fill-opacity="0.32"
                          d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_89)"
                          fill-opacity="1"
                          d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,1251.5379638671875,355)"
                      opacity="1"
                      style="display: block"
                    >
                      <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                        <path
                          fill="rgb(221,225,230)"
                          fill-opacity="0.32"
                          d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_85)"
                          fill-opacity="1"
                          d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,425.4182434082031,355)"
                      opacity="1"
                      style="display: block"
                    >
                      <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                        <path
                          fill="rgb(221,225,230)"
                          fill-opacity="0.32"
                          d=" M6,-1.5 C6,-1.5 6,1.5 6,1.5 C6,1.5 -6,1.5 -6,1.5 C-6,1.5 -6,-1.5 -6,-1.5 C-6,-1.5 6,-1.5 6,-1.5z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_81)"
                          fill-opacity="1"
                          d=" M6,-1.5 C6,-1.5 6,1.5 6,1.5 C6,1.5 -6,1.5 -6,1.5 C-6,1.5 -6,-1.5 -6,-1.5 C-6,-1.5 6,-1.5 6,-1.5z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.6000000238418579,0,0,1,-102,215)"
                      opacity="1"
                      style="display: block"
                    >
                      <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                        <path
                          fill="rgb(221,225,230)"
                          fill-opacity="0.32"
                          d=" M6,-1.5 C6,-1.5 6,1.5 6,1.5 C6,1.5 -6,1.5 -6,1.5 C-6,1.5 -6,-1.5 -6,-1.5 C-6,-1.5 6,-1.5 6,-1.5z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_77)"
                          fill-opacity="1"
                          d=" M6,-1.5 C6,-1.5 6,1.5 6,1.5 C6,1.5 -6,1.5 -6,1.5 C-6,1.5 -6,-1.5 -6,-1.5 C-6,-1.5 6,-1.5 6,-1.5z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,1151,447)"
                      opacity="1"
                      style="display: block"
                    >
                      <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                        <path
                          fill="url(#__lottie_element_72)"
                          fill-opacity="1"
                          d=" M3.5,-1.5 C3.5,-1.5 3.5,1.5 3.5,1.5 C3.5,1.5 -3.5,1.5 -3.5,1.5 C-3.5,1.5 -3.5,-1.5 -3.5,-1.5 C-3.5,-1.5 3.5,-1.5 3.5,-1.5z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_73)"
                          fill-opacity="1"
                          d=" M3.5,-1.5 C3.5,-1.5 3.5,1.5 3.5,1.5 C3.5,1.5 -3.5,1.5 -3.5,1.5 C-3.5,1.5 -3.5,-1.5 -3.5,-1.5 C-3.5,-1.5 3.5,-1.5 3.5,-1.5z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,1174,447)"
                      opacity="1"
                      style="display: block"
                    >
                      <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                        <path
                          fill="rgb(255,146,0)"
                          fill-opacity="0.48"
                          d=" M1,-1.5 C1,-1.5 1,1.5 1,1.5 C1,1.5 -1,1.5 -1,1.5 C-1,1.5 -1,-1.5 -1,-1.5 C-1,-1.5 1,-1.5 1,-1.5z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_68)"
                          fill-opacity="1"
                          d=" M1,-1.5 C1,-1.5 1,1.5 1,1.5 C1,1.5 -1,1.5 -1,1.5 C-1,1.5 -1,-1.5 -1,-1.5 C-1,-1.5 1,-1.5 1,-1.5z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,863,381)"
                      opacity="0.06814285714285973"
                      style="display: none"
                    >
                      <g opacity="1" transform="matrix(-2,0,0,-2,0,0)">
                        <path
                          fill="rgb(23,24,25)"
                          fill-opacity="1"
                          d=" M156.94000244140625,0 C156.94000244140625,0 156.94000244140625,0 156.94000244140625,0 C156.94000244140625,86.61518859863281 86.61518859863281,156.94000244140625 0,156.94000244140625 C0,156.94000244140625 0,156.94000244140625 0,156.94000244140625 C-86.61518859863281,156.94000244140625 -156.94000244140625,86.61518859863281 -156.94000244140625,0 C-156.94000244140625,0 -156.94000244140625,0 -156.94000244140625,0 C-156.94000244140625,-86.61518859863281 -86.61518859863281,-156.94000244140625 0,-156.94000244140625 C0,-156.94000244140625 0,-156.94000244140625 0,-156.94000244140625 C86.61518859863281,-156.94000244140625 156.94000244140625,-86.61518859863281 156.94000244140625,0z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_59)"
                          fill-opacity="0.001060000000000041"
                          d=" M156.94000244140625,0 C156.94000244140625,0 156.94000244140625,0 156.94000244140625,0 C156.94000244140625,86.61518859863281 86.61518859863281,156.94000244140625 0,156.94000244140625 C0,156.94000244140625 0,156.94000244140625 0,156.94000244140625 C-86.61518859863281,156.94000244140625 -156.94000244140625,86.61518859863281 -156.94000244140625,0 C-156.94000244140625,0 -156.94000244140625,0 -156.94000244140625,0 C-156.94000244140625,-86.61518859863281 -86.61518859863281,-156.94000244140625 0,-156.94000244140625 C0,-156.94000244140625 0,-156.94000244140625 0,-156.94000244140625 C86.61518859863281,-156.94000244140625 156.94000244140625,-86.61518859863281 156.94000244140625,0z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_60)"
                          fill-opacity="0.0015900000000000603"
                          d=" M156.94000244140625,0 C156.94000244140625,0 156.94000244140625,0 156.94000244140625,0 C156.94000244140625,86.61518859863281 86.61518859863281,156.94000244140625 0,156.94000244140625 C0,156.94000244140625 0,156.94000244140625 0,156.94000244140625 C-86.61518859863281,156.94000244140625 -156.94000244140625,86.61518859863281 -156.94000244140625,0 C-156.94000244140625,0 -156.94000244140625,0 -156.94000244140625,0 C-156.94000244140625,-86.61518859863281 -86.61518859863281,-156.94000244140625 0,-156.94000244140625 C0,-156.94000244140625 0,-156.94000244140625 0,-156.94000244140625 C86.61518859863281,-156.94000244140625 156.94000244140625,-86.61518859863281 156.94000244140625,0z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_61)"
                          fill-opacity="0.0026500000000001032"
                          d=" M156.94000244140625,0 C156.94000244140625,0 156.94000244140625,0 156.94000244140625,0 C156.94000244140625,86.61518859863281 86.61518859863281,156.94000244140625 0,156.94000244140625 C0,156.94000244140625 0,156.94000244140625 0,156.94000244140625 C-86.61518859863281,156.94000244140625 -156.94000244140625,86.61518859863281 -156.94000244140625,0 C-156.94000244140625,0 -156.94000244140625,0 -156.94000244140625,0 C-156.94000244140625,-86.61518859863281 -86.61518859863281,-156.94000244140625 0,-156.94000244140625 C0,-156.94000244140625 0,-156.94000244140625 0,-156.94000244140625 C86.61518859863281,-156.94000244140625 156.94000244140625,-86.61518859863281 156.94000244140625,0z"
                        ></path>
                        <path
                          stroke="url(#__lottie_element_62)"
                          mask="url(#__lottie_element_64)"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke-opacity="1"
                          stroke-width="1"
                          d="M0 0 M156.94000244140625,0 C156.94000244140625,0 156.94000244140625,0 156.94000244140625,0 C156.94000244140625,86.61518859863281 86.61518859863281,156.94000244140625 0,156.94000244140625 C0,156.94000244140625 0,156.94000244140625 0,156.94000244140625 C-86.61518859863281,156.94000244140625 -156.94000244140625,86.61518859863281 -156.94000244140625,0 C-156.94000244140625,0 -156.94000244140625,0 -156.94000244140625,0 C-156.94000244140625,-86.61518859863281 -86.61518859863281,-156.94000244140625 0,-156.94000244140625 C0,-156.94000244140625 0,-156.94000244140625 0,-156.94000244140625 C86.61518859863281,-156.94000244140625 156.94000244140625,-86.61518859863281 156.94000244140625,0z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,863,381)"
                      opacity="0.14285714285714293"
                      style="display: block"
                    >
                      <g opacity="1" transform="matrix(-2,0,0,-2,0,0)">
                        <path
                          fill="rgb(23,24,25)"
                          fill-opacity="1"
                          d=" M155.8396453857422,0 C155.8396453857422,0 155.8396453857422,0 155.8396453857422,0 C155.8396453857422,86.00790405273438 86.00790405273438,155.8396453857422 0,155.8396453857422 C0,155.8396453857422 0,155.8396453857422 0,155.8396453857422 C-86.00790405273438,155.8396453857422 -155.8396453857422,86.00790405273438 -155.8396453857422,0 C-155.8396453857422,0 -155.8396453857422,0 -155.8396453857422,0 C-155.8396453857422,-86.00790405273438 -86.00790405273438,-155.8396453857422 0,-155.8396453857422 C0,-155.8396453857422 0,-155.8396453857422 0,-155.8396453857422 C86.00790405273438,-155.8396453857422 155.8396453857422,-86.00790405273438 155.8396453857422,0z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_50)"
                          fill-opacity="0.0021714892448679345"
                          d=" M155.8396453857422,0 C155.8396453857422,0 155.8396453857422,0 155.8396453857422,0 C155.8396453857422,86.00790405273438 86.00790405273438,155.8396453857422 0,155.8396453857422 C0,155.8396453857422 0,155.8396453857422 0,155.8396453857422 C-86.00790405273438,155.8396453857422 -155.8396453857422,86.00790405273438 -155.8396453857422,0 C-155.8396453857422,0 -155.8396453857422,0 -155.8396453857422,0 C-155.8396453857422,-86.00790405273438 -86.00790405273438,-155.8396453857422 0,-155.8396453857422 C0,-155.8396453857422 0,-155.8396453857422 0,-155.8396453857422 C86.00790405273438,-155.8396453857422 155.8396453857422,-86.00790405273438 155.8396453857422,0z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_51)"
                          fill-opacity="0.0031273079496872613"
                          d=" M155.8396453857422,0 C155.8396453857422,0 155.8396453857422,0 155.8396453857422,0 C155.8396453857422,86.00790405273438 86.00790405273438,155.8396453857422 0,155.8396453857422 C0,155.8396453857422 0,155.8396453857422 0,155.8396453857422 C-86.00790405273438,155.8396453857422 -155.8396453857422,86.00790405273438 -155.8396453857422,0 C-155.8396453857422,0 -155.8396453857422,0 -155.8396453857422,0 C-155.8396453857422,-86.00790405273438 -86.00790405273438,-155.8396453857422 0,-155.8396453857422 C0,-155.8396453857422 0,-155.8396453857422 0,-155.8396453857422 C86.00790405273438,-155.8396453857422 155.8396453857422,-86.00790405273438 155.8396453857422,0z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_52)"
                          fill-opacity="0.004525428637325204"
                          d=" M155.8396453857422,0 C155.8396453857422,0 155.8396453857422,0 155.8396453857422,0 C155.8396453857422,86.00790405273438 86.00790405273438,155.8396453857422 0,155.8396453857422 C0,155.8396453857422 0,155.8396453857422 0,155.8396453857422 C-86.00790405273438,155.8396453857422 -155.8396453857422,86.00790405273438 -155.8396453857422,0 C-155.8396453857422,0 -155.8396453857422,0 -155.8396453857422,0 C-155.8396453857422,-86.00790405273438 -86.00790405273438,-155.8396453857422 0,-155.8396453857422 C0,-155.8396453857422 0,-155.8396453857422 0,-155.8396453857422 C86.00790405273438,-155.8396453857422 155.8396453857422,-86.00790405273438 155.8396453857422,0z"
                        ></path>
                        <path
                          stroke="url(#__lottie_element_53)"
                          mask="url(#__lottie_element_55)"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke-opacity="1"
                          stroke-width="1"
                          d="M0 0 M155.8396453857422,0 C155.8396453857422,0 155.8396453857422,0 155.8396453857422,0 C155.8396453857422,86.00790405273438 86.00790405273438,155.8396453857422 0,155.8396453857422 C0,155.8396453857422 0,155.8396453857422 0,155.8396453857422 C-86.00790405273438,155.8396453857422 -155.8396453857422,86.00790405273438 -155.8396453857422,0 C-155.8396453857422,0 -155.8396453857422,0 -155.8396453857422,0 C-155.8396453857422,-86.00790405273438 -86.00790405273438,-155.8396453857422 0,-155.8396453857422 C0,-155.8396453857422 0,-155.8396453857422 0,-155.8396453857422 C86.00790405273438,-155.8396453857422 155.8396453857422,-86.00790405273438 155.8396453857422,0z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,863,381)"
                      opacity="1"
                      style="display: block"
                    >
                      <g opacity="1" transform="matrix(-2,0,0,-2,0,0)">
                        <path
                          fill="rgb(23,24,25)"
                          fill-opacity="1"
                          d=" M138,0 C138,0 138,0 138,0 C138,76.16220092773438 76.16220092773438,138 0,138 C0,138 0,138 0,138 C-76.16220092773438,138 -138,76.16220092773438 -138,0 C-138,0 -138,0 -138,0 C-138,-76.16220092773438 -76.16220092773438,-138 0,-138 C0,-138 0,-138 0,-138 C76.16220092773438,-138 138,-76.16220092773438 138,0z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_41)"
                          fill-opacity="0.02"
                          d=" M138,0 C138,0 138,0 138,0 C138,76.16220092773438 76.16220092773438,138 0,138 C0,138 0,138 0,138 C-76.16220092773438,138 -138,76.16220092773438 -138,0 C-138,0 -138,0 -138,0 C-138,-76.16220092773438 -76.16220092773438,-138 0,-138 C0,-138 0,-138 0,-138 C76.16220092773438,-138 138,-76.16220092773438 138,0z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_42)"
                          fill-opacity="0.03"
                          d=" M138,0 C138,0 138,0 138,0 C138,76.16220092773438 76.16220092773438,138 0,138 C0,138 0,138 0,138 C-76.16220092773438,138 -138,76.16220092773438 -138,0 C-138,0 -138,0 -138,0 C-138,-76.16220092773438 -76.16220092773438,-138 0,-138 C0,-138 0,-138 0,-138 C76.16220092773438,-138 138,-76.16220092773438 138,0z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_43)"
                          fill-opacity="0.05"
                          d=" M138,0 C138,0 138,0 138,0 C138,76.16220092773438 76.16220092773438,138 0,138 C0,138 0,138 0,138 C-76.16220092773438,138 -138,76.16220092773438 -138,0 C-138,0 -138,0 -138,0 C-138,-76.16220092773438 -76.16220092773438,-138 0,-138 C0,-138 0,-138 0,-138 C76.16220092773438,-138 138,-76.16220092773438 138,0z"
                        ></path>
                        <path
                          stroke="url(#__lottie_element_44)"
                          mask="url(#__lottie_element_46)"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke-opacity="1"
                          stroke-width="1"
                          d="M0 0 M138,0 C138,0 138,0 138,0 C138,76.16220092773438 76.16220092773438,138 0,138 C0,138 0,138 0,138 C-76.16220092773438,138 -138,76.16220092773438 -138,0 C-138,0 -138,0 -138,0 C-138,-76.16220092773438 -76.16220092773438,-138 0,-138 C0,-138 0,-138 0,-138 C76.16220092773438,-138 138,-76.16220092773438 138,0z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,863,381)"
                      opacity="1"
                      style="display: block"
                    >
                      <g opacity="1" transform="matrix(-2,0,0,-2,0,0)">
                        <path
                          fill="rgb(23,24,25)"
                          fill-opacity="1"
                          d=" M101.0495834350586,0 C101.0495834350586,0 101.0495834350586,0 101.0495834350586,0 C101.0495834350586,55.769264221191406 55.769264221191406,101.0495834350586 0,101.0495834350586 C0,101.0495834350586 0,101.0495834350586 0,101.0495834350586 C-55.769264221191406,101.0495834350586 -101.0495834350586,55.769264221191406 -101.0495834350586,0 C-101.0495834350586,0 -101.0495834350586,0 -101.0495834350586,0 C-101.0495834350586,-55.769264221191406 -55.769264221191406,-101.0495834350586 0,-101.0495834350586 C0,-101.0495834350586 0,-101.0495834350586 0,-101.0495834350586 C55.769264221191406,-101.0495834350586 101.0495834350586,-55.769264221191406 101.0495834350586,0z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_32)"
                          fill-opacity="0.05"
                          d=" M101.0495834350586,0 C101.0495834350586,0 101.0495834350586,0 101.0495834350586,0 C101.0495834350586,55.769264221191406 55.769264221191406,101.0495834350586 0,101.0495834350586 C0,101.0495834350586 0,101.0495834350586 0,101.0495834350586 C-55.769264221191406,101.0495834350586 -101.0495834350586,55.769264221191406 -101.0495834350586,0 C-101.0495834350586,0 -101.0495834350586,0 -101.0495834350586,0 C-101.0495834350586,-55.769264221191406 -55.769264221191406,-101.0495834350586 0,-101.0495834350586 C0,-101.0495834350586 0,-101.0495834350586 0,-101.0495834350586 C55.769264221191406,-101.0495834350586 101.0495834350586,-55.769264221191406 101.0495834350586,0z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_33)"
                          fill-opacity="0.22653633586945363"
                          d=" M101.0495834350586,0 C101.0495834350586,0 101.0495834350586,0 101.0495834350586,0 C101.0495834350586,55.769264221191406 55.769264221191406,101.0495834350586 0,101.0495834350586 C0,101.0495834350586 0,101.0495834350586 0,101.0495834350586 C-55.769264221191406,101.0495834350586 -101.0495834350586,55.769264221191406 -101.0495834350586,0 C-101.0495834350586,0 -101.0495834350586,0 -101.0495834350586,0 C-101.0495834350586,-55.769264221191406 -55.769264221191406,-101.0495834350586 0,-101.0495834350586 C0,-101.0495834350586 0,-101.0495834350586 0,-101.0495834350586 C55.769264221191406,-101.0495834350586 101.0495834350586,-55.769264221191406 101.0495834350586,0z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_34)"
                          fill-opacity="0.22747974935735918"
                          d=" M101.0495834350586,0 C101.0495834350586,0 101.0495834350586,0 101.0495834350586,0 C101.0495834350586,55.769264221191406 55.769264221191406,101.0495834350586 0,101.0495834350586 C0,101.0495834350586 0,101.0495834350586 0,101.0495834350586 C-55.769264221191406,101.0495834350586 -101.0495834350586,55.769264221191406 -101.0495834350586,0 C-101.0495834350586,0 -101.0495834350586,0 -101.0495834350586,0 C-101.0495834350586,-55.769264221191406 -55.769264221191406,-101.0495834350586 0,-101.0495834350586 C0,-101.0495834350586 0,-101.0495834350586 0,-101.0495834350586 C55.769264221191406,-101.0495834350586 101.0495834350586,-55.769264221191406 101.0495834350586,0z"
                        ></path>
                        <path
                          stroke="url(#__lottie_element_35)"
                          mask="url(#__lottie_element_37)"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke-opacity="1"
                          stroke-width="1"
                          d="M0 0 M101.0495834350586,0 C101.0495834350586,0 101.0495834350586,0 101.0495834350586,0 C101.0495834350586,55.769264221191406 55.769264221191406,101.0495834350586 0,101.0495834350586 C0,101.0495834350586 0,101.0495834350586 0,101.0495834350586 C-55.769264221191406,101.0495834350586 -101.0495834350586,55.769264221191406 -101.0495834350586,0 C-101.0495834350586,0 -101.0495834350586,0 -101.0495834350586,0 C-101.0495834350586,-55.769264221191406 -55.769264221191406,-101.0495834350586 0,-101.0495834350586 C0,-101.0495834350586 0,-101.0495834350586 0,-101.0495834350586 C55.769264221191406,-101.0495834350586 101.0495834350586,-55.769264221191406 101.0495834350586,0z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,863,381)"
                      opacity="1"
                      style="display: block"
                    >
                      <g opacity="1" transform="matrix(-2,0,0,-2,0,0)">
                        <path
                          fill="rgb(23,24,25)"
                          fill-opacity="1"
                          d=" M77.61111450195312,0 C77.61111450195312,0 77.61111450195312,0 77.61111450195312,0 C77.61111450195312,42.83357238769531 42.83357238769531,77.61111450195312 0,77.61111450195312 C0,77.61111450195312 0,77.61111450195312 0,77.61111450195312 C-42.83357238769531,77.61111450195312 -77.61111450195312,42.83357238769531 -77.61111450195312,0 C-77.61111450195312,0 -77.61111450195312,0 -77.61111450195312,0 C-77.61111450195312,-42.83357238769531 -42.83357238769531,-77.61111450195312 0,-77.61111450195312 C0,-77.61111450195312 0,-77.61111450195312 0,-77.61111450195312 C42.83357238769531,-77.61111450195312 77.61111450195312,-42.83357238769531 77.61111450195312,0z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_23)"
                          fill-opacity="0.03888888888888889"
                          d=" M77.61111450195312,0 C77.61111450195312,0 77.61111450195312,0 77.61111450195312,0 C77.61111450195312,42.83357238769531 42.83357238769531,77.61111450195312 0,77.61111450195312 C0,77.61111450195312 0,77.61111450195312 0,77.61111450195312 C-42.83357238769531,77.61111450195312 -77.61111450195312,42.83357238769531 -77.61111450195312,0 C-77.61111450195312,0 -77.61111450195312,0 -77.61111450195312,0 C-77.61111450195312,-42.83357238769531 -42.83357238769531,-77.61111450195312 0,-77.61111450195312 C0,-77.61111450195312 0,-77.61111450195312 0,-77.61111450195312 C42.83357238769531,-77.61111450195312 77.61111450195312,-42.83357238769531 77.61111450195312,0z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_24)"
                          fill-opacity="0.35000000000000003"
                          d=" M77.61111450195312,0 C77.61111450195312,0 77.61111450195312,0 77.61111450195312,0 C77.61111450195312,42.83357238769531 42.83357238769531,77.61111450195312 0,77.61111450195312 C0,77.61111450195312 0,77.61111450195312 0,77.61111450195312 C-42.83357238769531,77.61111450195312 -77.61111450195312,42.83357238769531 -77.61111450195312,0 C-77.61111450195312,0 -77.61111450195312,0 -77.61111450195312,0 C-77.61111450195312,-42.83357238769531 -42.83357238769531,-77.61111450195312 0,-77.61111450195312 C0,-77.61111450195312 0,-77.61111450195312 0,-77.61111450195312 C42.83357238769531,-77.61111450195312 77.61111450195312,-42.83357238769531 77.61111450195312,0z"
                        ></path>
                        <path
                          fill="url(#__lottie_element_25)"
                          fill-opacity="0.23333333333333334"
                          d=" M77.61111450195312,0 C77.61111450195312,0 77.61111450195312,0 77.61111450195312,0 C77.61111450195312,42.83357238769531 42.83357238769531,77.61111450195312 0,77.61111450195312 C0,77.61111450195312 0,77.61111450195312 0,77.61111450195312 C-42.83357238769531,77.61111450195312 -77.61111450195312,42.83357238769531 -77.61111450195312,0 C-77.61111450195312,0 -77.61111450195312,0 -77.61111450195312,0 C-77.61111450195312,-42.83357238769531 -42.83357238769531,-77.61111450195312 0,-77.61111450195312 C0,-77.61111450195312 0,-77.61111450195312 0,-77.61111450195312 C42.83357238769531,-77.61111450195312 77.61111450195312,-42.83357238769531 77.61111450195312,0z"
                        ></path>
                        <path
                          stroke="url(#__lottie_element_26)"
                          mask="url(#__lottie_element_28)"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke-opacity="1"
                          stroke-width="1"
                          d="M0 0 M77.61111450195312,0 C77.61111450195312,0 77.61111450195312,0 77.61111450195312,0 C77.61111450195312,42.83357238769531 42.83357238769531,77.61111450195312 0,77.61111450195312 C0,77.61111450195312 0,77.61111450195312 0,77.61111450195312 C-42.83357238769531,77.61111450195312 -77.61111450195312,42.83357238769531 -77.61111450195312,0 C-77.61111450195312,0 -77.61111450195312,0 -77.61111450195312,0 C-77.61111450195312,-42.83357238769531 -42.83357238769531,-77.61111450195312 0,-77.61111450195312 C0,-77.61111450195312 0,-77.61111450195312 0,-77.61111450195312 C42.83357238769531,-77.61111450195312 77.61111450195312,-42.83357238769531 77.61111450195312,0z"
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g
                    transform="matrix(1.0299999713897705,0,0,1.0299999713897705,861.0299682617188,173.35499572753906)"
                    opacity="1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(221,225,230)"
                        stroke-opacity="0.70196"
                        stroke-width="12"
                        d=" M-20.5,23.75 C-20.5,23.75 -20.5,-3.25 -20.5,-3.25 C-20.5,-14.569999694824219 -11.319999694824219,-23.75 0,-23.75 C11.319999694824219,-23.75 20.5,-14.569999694824219 20.5,-3.25 C20.5,-3.25 20.5,23.75 20.5,23.75"
                      ></path>
                      <path
                        stroke="url(#__lottie_element_15)"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke-opacity="1"
                        stroke-width="12"
                        d=" M-20.5,23.75 C-20.5,23.75 -20.5,-3.25 -20.5,-3.25 C-20.5,-14.569999694824219 -11.319999694824219,-23.75 0,-23.75 C11.319999694824219,-23.75 20.5,-14.569999694824219 20.5,-3.25 C20.5,-3.25 20.5,23.75 20.5,23.75"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1.0299999713897705,0,0,1.0299999713897705,861.0299682617188,273.7799987792969)"
                    opacity="1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(23,24,25)"
                        fill-opacity="1"
                        d=" M42.5,-32.534000396728516 C42.5,-32.534000396728516 42.5,32.534000396728516 42.5,32.534000396728516 C42.5,35.826637268066406 39.826637268066406,38.5 36.534000396728516,38.5 C36.534000396728516,38.5 -36.534000396728516,38.5 -36.534000396728516,38.5 C-39.826637268066406,38.5 -42.5,35.826637268066406 -42.5,32.534000396728516 C-42.5,32.534000396728516 -42.5,-32.534000396728516 -42.5,-32.534000396728516 C-42.5,-35.826637268066406 -39.826637268066406,-38.5 -36.534000396728516,-38.5 C-36.534000396728516,-38.5 36.534000396728516,-38.5 36.534000396728516,-38.5 C39.826637268066406,-38.5 42.5,-35.826637268066406 42.5,-32.534000396728516z"
                      ></path>
                      <path
                        fill="rgb(0,127,255)"
                        fill-opacity="0.64"
                        d=" M42.5,-32.534000396728516 C42.5,-32.534000396728516 42.5,32.534000396728516 42.5,32.534000396728516 C42.5,35.826637268066406 39.826637268066406,38.5 36.534000396728516,38.5 C36.534000396728516,38.5 -36.534000396728516,38.5 -36.534000396728516,38.5 C-39.826637268066406,38.5 -42.5,35.826637268066406 -42.5,32.534000396728516 C-42.5,32.534000396728516 -42.5,-32.534000396728516 -42.5,-32.534000396728516 C-42.5,-35.826637268066406 -39.826637268066406,-38.5 -36.534000396728516,-38.5 C-36.534000396728516,-38.5 36.534000396728516,-38.5 36.534000396728516,-38.5 C39.826637268066406,-38.5 42.5,-35.826637268066406 42.5,-32.534000396728516z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_11)"
                        fill-opacity="0.9"
                        d=" M42.5,-32.534000396728516 C42.5,-32.534000396728516 42.5,32.534000396728516 42.5,32.534000396728516 C42.5,35.826637268066406 39.826637268066406,38.5 36.534000396728516,38.5 C36.534000396728516,38.5 -36.534000396728516,38.5 -36.534000396728516,38.5 C-39.826637268066406,38.5 -42.5,35.826637268066406 -42.5,32.534000396728516 C-42.5,32.534000396728516 -42.5,-32.534000396728516 -42.5,-32.534000396728516 C-42.5,-35.826637268066406 -39.826637268066406,-38.5 -36.534000396728516,-38.5 C-36.534000396728516,-38.5 36.534000396728516,-38.5 36.534000396728516,-38.5 C39.826637268066406,-38.5 42.5,-35.826637268066406 42.5,-32.534000396728516z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1.0299999713897705,0,0,1.0299999713897705,862.0599975585938,271.7200012207031)"
                    opacity="1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(255,146,0)"
                        fill-opacity="0.7000000000000001"
                        d=" M0,-13.5 C4.070000171661377,-13.5 7.639999866485596,-10.770000457763672 8.6899995803833,-6.829999923706055 C9.75,-2.9000000953674316 8.029999732971191,1.2599999904632568 4.5,3.2899999618530273 C4.5,3.2899999618530273 4.5,9 4.5,9 C4.5,11.489999771118164 2.490000009536743,13.5 0,13.5 C-2.4800000190734863,13.5 -4.5,11.489999771118164 -4.5,9 C-4.5,9 -4.5,3.299999952316284 -4.5,3.299999952316284 C-8.029999732971191,1.2599999904632568 -9.75,-2.890000104904175 -8.6899995803833,-6.829999923706055 C-7.639999866485596,-10.770000457763672 -4.070000171661377,-13.5 0,-13.5 C0,-13.5 0,-13.5 0,-13.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_7)"
                        fill-opacity="1"
                        d=" M0,-13.5 C4.070000171661377,-13.5 7.639999866485596,-10.770000457763672 8.6899995803833,-6.829999923706055 C9.75,-2.9000000953674316 8.029999732971191,1.2599999904632568 4.5,3.2899999618530273 C4.5,3.2899999618530273 4.5,9 4.5,9 C4.5,11.489999771118164 2.490000009536743,13.5 0,13.5 C-2.4800000190734863,13.5 -4.5,11.489999771118164 -4.5,9 C-4.5,9 -4.5,3.299999952316284 -4.5,3.299999952316284 C-8.029999732971191,1.2599999904632568 -9.75,-2.890000104904175 -8.6899995803833,-6.829999923706055 C-7.639999866485596,-10.770000457763672 -4.070000171661377,-13.5 0,-13.5 C0,-13.5 0,-13.5 0,-13.5z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class="text1">多链路保障</div>
            <div class="text2">组织数字化安全</div>
            <div class="text3">
              钉钉采用国际顶级安全标准和要求，主动保障组织通讯录及架构信息，多种链路加密保障沟通内容安全、协作知识库文档权限精细化管理
            </div>
          </div>
          <div class="right">
            <div class="leftSvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1176 820"
                width="1176"
                height="820"
                preserveAspectRatio="xMidYMid meet"
                style="
                  width: 100%;
                  height: 100%;
                  transform: translate3d(0px, 0px, 0px);
                  content-visibility: visible;
                "
              >
                <defs>
                  <clipPath id="__lottie_element_111">
                    <rect width="1176" height="820" x="0" y="0"></rect>
                  </clipPath>
                  <linearGradient
                    id="__lottie_element_128"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    y1="-31.534000396728516"
                    x2="0"
                    y2="31.534000396728516"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0.9490000009536743"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0.875"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                  </linearGradient>
                  <radialGradient
                    id="__lottie_element_129"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    cx="-14.76099967956543"
                    cy="-31.534000396728516"
                    r="79.39908613733132"
                    fx="-14.76099967956543"
                    fy="-31.534000396728516"
                  >
                    <stop offset="0%" stop-color="rgb(255,255,255)" stop-opacity="1"></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(255,255,255)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(255,255,255)"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(255,255,255)"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(255,255,255)"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <radialGradient
                    id="__lottie_element_130"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    cx="-52.77299880981445"
                    cy="-40.981998443603516"
                    r="14.49119817480509"
                    fx="-52.77299880981445"
                    fy="-40.981998443603516"
                  >
                    <stop offset="0%" stop-color="rgb(255,255,255)" stop-opacity="1"></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(255,255,255)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(255,255,255)"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(255,255,255)"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(255,255,255)"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <linearGradient
                    id="__lottie_element_134"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-46.992000579833984"
                    y1="-62.5"
                    x2="-20.259000778198242"
                    y2="69.49700164794922"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.9020000100135803"
                    ></stop>
                    <stop
                      offset="28%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.5509999990463257"
                    ></stop>
                    <stop
                      offset="56%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      offset="78%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_135"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="44.63199996948242"
                    y1="-50.2859992980957"
                    x2="7.599999904632568"
                    y2="-9.871000289916992"
                  >
                    <stop offset="0%" stop-color="rgb(0,235,182)" stop-opacity="1"></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,235,182)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,235,182)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_139"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-40.84299850463867"
                    y1="-44.354000091552734"
                    x2="-15.434000015258789"
                    y2="39.28200149536133"
                  >
                    <stop offset="0%" stop-color="rgb(0,79,255)" stop-opacity="1"></stop>
                    <stop
                      offset="25%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7979999780654907"
                    ></stop>
                    <stop
                      offset="49%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.5960000157356262"
                    ></stop>
                    <stop
                      offset="75%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.2980000078678131"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_143"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-25.281999588012695"
                    y1="110.09700012207031"
                    x2="14.529000282287598"
                    y2="52.72800064086914"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_144"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-72.1760025024414"
                    y1="-161.0780029296875"
                    x2="-64.46600341796875"
                    y2="-46.380001068115234"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,235,182)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,235,182)"
                      stop-opacity="0.4000000059604645"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,235,182)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_145"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-106.08100128173828"
                    y1="-114.55699920654297"
                    x2="81.72200012207031"
                    y2="45.69200134277344"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0.32199999690055847"
                    ></stop>
                    <stop
                      offset="26%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0.16099999845027924"
                    ></stop>
                    <stop
                      offset="53%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="59%"
                      stop-color="rgb(110,176,243)"
                      stop-opacity="0"
                    ></stop>
                    <stop offset="66%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                    <stop
                      offset="83%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.11999999731779099"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.23899999260902405"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_149"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-25.281999588012695"
                    y1="110.09700012207031"
                    x2="14.529000282287598"
                    y2="52.72800064086914"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_150"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-72.1760025024414"
                    y1="-161.0780029296875"
                    x2="-64.46600341796875"
                    y2="-46.380001068115234"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,235,182)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,235,182)"
                      stop-opacity="0.4000000059604645"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,235,182)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_151"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-106.08100128173828"
                    y1="-114.55699920654297"
                    x2="81.72200012207031"
                    y2="45.69200134277344"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0.32199999690055847"
                    ></stop>
                    <stop
                      offset="26%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0.16099999845027924"
                    ></stop>
                    <stop
                      offset="53%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="59%"
                      stop-color="rgb(110,176,243)"
                      stop-opacity="0"
                    ></stop>
                    <stop offset="66%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                    <stop
                      offset="83%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.11999999731779099"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.23899999260902405"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_155"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-33.87799835205078"
                    y1="147.52999877929688"
                    x2="19.468000411987305"
                    y2="70.65599822998047"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_156"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-96.71600341796875"
                    y1="-215.843994140625"
                    x2="-86.38400268554688"
                    y2="-62.14899826049805"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,235,182)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,235,182)"
                      stop-opacity="0.4000000059604645"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,235,182)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_157"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-142.1479949951172"
                    y1="-153.50599670410156"
                    x2="109.50700378417969"
                    y2="61.22800064086914"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0.32199999690055847"
                    ></stop>
                    <stop
                      offset="26%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0.16099999845027924"
                    ></stop>
                    <stop
                      offset="53%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="59%"
                      stop-color="rgb(110,176,243)"
                      stop-opacity="0"
                    ></stop>
                    <stop offset="66%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                    <stop
                      offset="83%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.11999999731779099"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.23899999260902405"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_161"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-44.327999114990234"
                    y1="193.33999633789062"
                    x2="25.472999572753906"
                    y2="92.59600067138672"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_162"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-126.54900360107422"
                    y1="-282.8680114746094"
                    x2="-113.02999877929688"
                    y2="-81.4469985961914"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,235,182)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,235,182)"
                      stop-opacity="0.4000000059604645"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,235,182)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_163"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-185.9949951171875"
                    y1="-201.17300415039062"
                    x2="182.23800659179688"
                    y2="123.24500274658203"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0.32199999690055847"
                    ></stop>
                    <stop
                      offset="26%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0.16099999845027924"
                    ></stop>
                    <stop
                      offset="53%"
                      stop-color="rgb(221,225,230)"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="59%"
                      stop-color="rgb(110,176,243)"
                      stop-opacity="0"
                    ></stop>
                    <stop offset="66%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                    <stop
                      offset="83%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.11999999731779099"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.23899999260902405"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_167"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="3.5"
                    y1="-1.5"
                    x2="-1.5299999713897705"
                    y2="0.17900000512599945"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,235,182)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,235,182)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,235,182)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_171"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="3.5"
                    y1="-1.5"
                    x2="-1.5299999713897705"
                    y2="0.17900000512599945"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,235,182)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,235,182)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,235,182)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_175"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="3.5"
                    y1="-1.5"
                    x2="-1.5299999713897705"
                    y2="0.17900000512599945"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,235,182)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,235,182)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,235,182)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_179"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-1.9789999723434448"
                    y1="-0.6859999895095825"
                    x2="4.256999969482422"
                    y2="-0.6859999895095825"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="28%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop
                      offset="56%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      offset="78%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_183"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="17.5"
                    y1="-1.5"
                    x2="-7.651000022888184"
                    y2="0.17900000512599945"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,235,182)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,235,182)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,235,182)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_187"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="1.5"
                    y1="3.055999994277954"
                    x2="0.8610000014305115"
                    y2="1.0219999551773071"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_188"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-1.5"
                    y1="-2.1110000610351562"
                    x2="-0.9520000219345093"
                    y2="0.800000011920929"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_189"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-1.2369999885559082"
                    y1="-1.5"
                    x2="7.354000091552734"
                    y2="-0.871999979019165"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="28%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop
                      offset="56%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      offset="78%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_193"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="1.5"
                    y1="3.055999994277954"
                    x2="0.8610000014305115"
                    y2="1.0219999551773071"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_194"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-1.5"
                    y1="-2.1110000610351562"
                    x2="-0.9520000219345093"
                    y2="0.800000011920929"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_195"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-1.2369999885559082"
                    y1="-1.5"
                    x2="7.354000091552734"
                    y2="-0.871999979019165"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="28%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop
                      offset="56%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      offset="78%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_199"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="1.5"
                    y1="3.055999994277954"
                    x2="0.8610000014305115"
                    y2="1.0219999551773071"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_200"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-1.5"
                    y1="-2.1110000610351562"
                    x2="-0.9520000219345093"
                    y2="0.800000011920929"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_201"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-1.2369999885559082"
                    y1="-1.5"
                    x2="7.354000091552734"
                    y2="-0.871999979019165"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="28%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop
                      offset="56%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      offset="78%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_205"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="1.5"
                    y1="3.055999994277954"
                    x2="0.8610000014305115"
                    y2="1.0219999551773071"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_206"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-1.5"
                    y1="-2.1110000610351562"
                    x2="-0.9520000219345093"
                    y2="0.800000011920929"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.7020000219345093"
                    ></stop>
                    <stop
                      offset="50%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.35100001096725464"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_207"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-1.2369999885559082"
                    y1="-1.5"
                    x2="7.354000091552734"
                    y2="-0.871999979019165"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="28%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop
                      offset="56%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      offset="78%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_211"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-4.618000030517578"
                    y1="-0.6859999895095825"
                    x2="9.932000160217285"
                    y2="-0.6859999895095825"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(0,79,255)"
                      stop-opacity="0.800000011920929"
                    ></stop>
                    <stop
                      offset="28%"
                      stop-color="rgb(0,103,255)"
                      stop-opacity="0.5"
                    ></stop>
                    <stop
                      offset="56%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.20000000298023224"
                    ></stop>
                    <stop
                      offset="78%"
                      stop-color="rgb(0,127,255)"
                      stop-opacity="0.10000000149011612"
                    ></stop>
                    <stop offset="100%" stop-color="rgb(0,127,255)" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
                <g clip-path="url(#__lottie_element_111)">
                  <g transform="matrix(1,0,0,1,588,440)" opacity="1" style="display: block">
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)"></g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,588,137)"
                    opacity="0.1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(222,222,223)"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M-294,0 C-294,0 294,0 294,0"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,588,207)"
                    opacity="0.1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(222,222,223)"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M-294,0 C-294,0 294,0 294,0"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,588,277)"
                    opacity="0.1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(222,222,223)"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M-294,0 C-294,0 294,0 294,0"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,588,369)"
                    opacity="0.1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(222,222,223)"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M-294,0 C-294,0 294,0 294,0"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,588,413)"
                    opacity="0.1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)"></g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,588,323)"
                    opacity="0.1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(222,222,223)"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M-294,0 C-294,0 294,0 294,0"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,443,277)" opacity="1" style="display: block">
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(221,225,230)"
                        fill-opacity="0.32"
                        d=" M3.5,-1.5 C3.5,-1.5 3.5,1.5 3.5,1.5 C3.5,1.5 -3.5,1.5 -3.5,1.5 C-3.5,1.5 -3.5,-1.5 -3.5,-1.5 C-3.5,-1.5 3.5,-1.5 3.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_211)"
                        fill-opacity="1"
                        d=" M3.5,-1.5 C3.5,-1.5 3.5,1.5 3.5,1.5 C3.5,1.5 -3.5,1.5 -3.5,1.5 C-3.5,1.5 -3.5,-1.5 -3.5,-1.5 C-3.5,-1.5 3.5,-1.5 3.5,-1.5z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,291,207)" opacity="1" style="display: block">
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(221,225,230)"
                        fill-opacity="0.14"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_205)"
                        fill-opacity="1"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_206)"
                        fill-opacity="1"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_207)"
                        fill-opacity="1"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(4,0,0,1,982,207)" opacity="1" style="display: block">
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(221,225,230)"
                        fill-opacity="0.14"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_199)"
                        fill-opacity="1"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_200)"
                        fill-opacity="1"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_201)"
                        fill-opacity="1"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,982,277)" opacity="1" style="display: block">
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(221,225,230)"
                        fill-opacity="0.14"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_193)"
                        fill-opacity="1"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_194)"
                        fill-opacity="1"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_195)"
                        fill-opacity="1"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,638,207)" opacity="1" style="display: block">
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(221,225,230)"
                        fill-opacity="0.14"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_187)"
                        fill-opacity="1"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_188)"
                        fill-opacity="1"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_189)"
                        fill-opacity="1"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,485.9466552734375,207)"
                    opacity="1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(0,235,182)"
                        fill-opacity="0.6"
                        d=" M17.5,-1.5 C17.5,-1.5 17.5,1.5 17.5,1.5 C17.5,1.5 -17.5,1.5 -17.5,1.5 C-17.5,1.5 -17.5,-1.5 -17.5,-1.5 C-17.5,-1.5 17.5,-1.5 17.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_183)"
                        fill-opacity="1"
                        d=" M17.5,-1.5 C17.5,-1.5 17.5,1.5 17.5,1.5 C17.5,1.5 -17.5,1.5 -17.5,1.5 C-17.5,1.5 -17.5,-1.5 -17.5,-1.5 C-17.5,-1.5 17.5,-1.5 17.5,-1.5z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1161,277)"
                    opacity="1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(221,225,230)"
                        fill-opacity="0.32"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_179)"
                        fill-opacity="1"
                        d=" M1.5,-1.5 C1.5,-1.5 1.5,1.5 1.5,1.5 C1.5,1.5 -1.5,1.5 -1.5,1.5 C-1.5,1.5 -1.5,-1.5 -1.5,-1.5 C-1.5,-1.5 1.5,-1.5 1.5,-1.5z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1143,207)"
                    opacity="1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(0,235,182)"
                        fill-opacity="0.6"
                        d=" M3.5,-1.5 C3.5,-1.5 3.5,1.5 3.5,1.5 C3.5,1.5 -3.5,1.5 -3.5,1.5 C-3.5,1.5 -3.5,-1.5 -3.5,-1.5 C-3.5,-1.5 3.5,-1.5 3.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_175)"
                        fill-opacity="1"
                        d=" M3.5,-1.5 C3.5,-1.5 3.5,1.5 3.5,1.5 C3.5,1.5 -3.5,1.5 -3.5,1.5 C-3.5,1.5 -3.5,-1.5 -3.5,-1.5 C-3.5,-1.5 3.5,-1.5 3.5,-1.5z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,836,277)" opacity="1" style="display: block">
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(0,235,182)"
                        fill-opacity="0.6"
                        d=" M3.5,-1.5 C3.5,-1.5 3.5,1.5 3.5,1.5 C3.5,1.5 -3.5,1.5 -3.5,1.5 C-3.5,1.5 -3.5,-1.5 -3.5,-1.5 C-3.5,-1.5 3.5,-1.5 3.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_171)"
                        fill-opacity="1"
                        d=" M3.5,-1.5 C3.5,-1.5 3.5,1.5 3.5,1.5 C3.5,1.5 -3.5,1.5 -3.5,1.5 C-3.5,1.5 -3.5,-1.5 -3.5,-1.5 C-3.5,-1.5 3.5,-1.5 3.5,-1.5z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1.600000023841858,0,0,1,836,277)"
                    opacity="1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(0,235,182)"
                        fill-opacity="0.6"
                        d=" M3.5,-1.5 C3.5,-1.5 3.5,1.5 3.5,1.5 C3.5,1.5 -3.5,1.5 -3.5,1.5 C-3.5,1.5 -3.5,-1.5 -3.5,-1.5 C-3.5,-1.5 3.5,-1.5 3.5,-1.5z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_167)"
                        fill-opacity="1"
                        d=" M3.5,-1.5 C3.5,-1.5 3.5,1.5 3.5,1.5 C3.5,1.5 -3.5,1.5 -3.5,1.5 C-3.5,1.5 -3.5,-1.5 -3.5,-1.5 C-3.5,-1.5 3.5,-1.5 3.5,-1.5z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,867,288)" opacity="1" style="display: block">
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(23,24,25)"
                        fill-opacity="1"
                        d=" M23.540000915527344,-141.7100067138672 C23.540000915527344,-141.7100067138672 28.18000030517578,-140.8800048828125 28.18000030517578,-140.8800048828125 C28.18000030517578,-140.8800048828125 33.029998779296875,-139.9199981689453 33.029998779296875,-139.9199981689453 C35.5099983215332,-139.4199981689453 38.060001373291016,-138.86000061035156 40.70000076293945,-138.25 C40.70000076293945,-138.25 46.060001373291016,-136.97999572753906 46.060001373291016,-136.97999572753906 C46.060001373291016,-136.97999572753906 51.63999938964844,-135.57000732421875 51.63999938964844,-135.57000732421875 C51.63999938964844,-135.57000732421875 57.43000030517578,-134.0399932861328 57.43000030517578,-134.0399932861328 C57.43000030517578,-134.0399932861328 63.40999984741211,-132.38999938964844 63.40999984741211,-132.38999938964844 C63.40999984741211,-132.38999938964844 66.48999786376953,-131.50999450683594 66.48999786376953,-131.50999450683594 C66.48999786376953,-131.50999450683594 72.77999877929688,-129.66000366210938 72.77999877929688,-129.66000366210938 C72.77999877929688,-129.66000366210938 79.29000091552734,-127.68000030517578 79.29000091552734,-127.68000030517578 C79.29000091552734,-127.68000030517578 86,-125.58000183105469 86,-125.58000183105469 C86,-125.58000183105469 92.91999816894531,-123.3499984741211 92.91999816894531,-123.3499984741211 C92.91999816894531,-123.3499984741211 100.05000305175781,-120.9800033569336 100.05000305175781,-120.9800033569336 C100.05000305175781,-120.9800033569336 107.37999725341797,-118.5 107.37999725341797,-118.5 C107.37999725341797,-118.5 111.12999725341797,-117.20999908447266 111.12999725341797,-117.20999908447266 C121.56999969482422,-113.58999633789062 128.85000610351562,-104.12000274658203 129.66000366210938,-93.11000061035156 C132.5500030517578,-53.540000915527344 132.0399932861328,-17.989999771118164 128.1199951171875,13.539999961853027 C119.5,72.62000274658203 79.47000122070312,115.41999816894531 8.0600004196167,141.9499969482422 C8.0600004196167,141.9499969482422 4.690000057220459,143.17999267578125 4.690000057220459,143.17999267578125 C1.659999966621399,144.27000427246094 -1.659999966621399,144.27000427246094 -4.690000057220459,143.17999267578125 C-78.16999816894531,116.76000213623047 -119.31999969482422,73.54000091552734 -128.1199951171875,13.539999961853027 C-131.72999572753906,-19.5 -132.4499969482422,-52.779998779296875 -130.27999877929688,-85.94000244140625 C-130.27999877929688,-85.94000244140625 -129.77000427246094,-93.16000366210938 -129.77000427246094,-93.16000366210938 C-128.92999267578125,-104.12999725341797 -121.6500015258789,-113.55000305175781 -111.23999786376953,-117.16000366210938 C-111.23999786376953,-117.16000366210938 -103.79000091552734,-119.72000122070312 -103.79000091552734,-119.72000122070312 C-103.79000091552734,-119.72000122070312 -96.55999755859375,-122.1500015258789 -96.55999755859375,-122.1500015258789 C-96.55999755859375,-122.1500015258789 -89.5199966430664,-124.44000244140625 -89.5199966430664,-124.44000244140625 C-89.5199966430664,-124.44000244140625 -82.69000244140625,-126.61000061035156 -82.69000244140625,-126.61000061035156 C-82.69000244140625,-126.61000061035156 -76.06999969482422,-128.66000366210938 -76.06999969482422,-128.66000366210938 C-76.06999969482422,-128.66000366210938 -69.66000366210938,-130.57000732421875 -69.66000366210938,-130.57000732421875 C-69.66000366210938,-130.57000732421875 -66.52999877929688,-131.49000549316406 -66.52999877929688,-131.49000549316406 C-66.52999877929688,-131.49000549316406 -60.43000030517578,-133.2100067138672 -60.43000030517578,-133.2100067138672 C-60.43000030517578,-133.2100067138672 -57.45000076293945,-134.02000427246094 -57.45000076293945,-134.02000427246094 C-57.45000076293945,-134.02000427246094 -51.66999816894531,-135.5500030517578 -51.66999816894531,-135.5500030517578 C-51.66999816894531,-135.5500030517578 -46.08000183105469,-136.9600067138672 -46.08000183105469,-136.9600067138672 C-46.08000183105469,-136.9600067138672 -43.369998931884766,-137.61000061035156 -43.369998931884766,-137.61000061035156 C-43.369998931884766,-137.61000061035156 -38.099998474121094,-138.8300018310547 -38.099998474121094,-138.8300018310547 C-36.380001068115234,-139.2100067138672 -34.68000030517578,-139.57000732421875 -33.040000915527344,-139.91000366210938 C-33.040000915527344,-139.91000366210938 -28.170000076293945,-140.8699951171875 -28.170000076293945,-140.8699951171875 C-28.170000076293945,-140.8699951171875 -23.520000457763672,-141.6999969482422 -23.520000457763672,-141.6999969482422 C-14.430000305175781,-143.22999572753906 -6.590000152587891,-144 0.019999999552965164,-144 C6.619999885559082,-144.00999450683594 14.460000038146973,-143.24000549316406 23.540000915527344,-141.7100067138672z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_161)"
                        fill-opacity="0.08"
                        d=" M23.540000915527344,-141.7100067138672 C23.540000915527344,-141.7100067138672 28.18000030517578,-140.8800048828125 28.18000030517578,-140.8800048828125 C28.18000030517578,-140.8800048828125 33.029998779296875,-139.9199981689453 33.029998779296875,-139.9199981689453 C35.5099983215332,-139.4199981689453 38.060001373291016,-138.86000061035156 40.70000076293945,-138.25 C40.70000076293945,-138.25 46.060001373291016,-136.97999572753906 46.060001373291016,-136.97999572753906 C46.060001373291016,-136.97999572753906 51.63999938964844,-135.57000732421875 51.63999938964844,-135.57000732421875 C51.63999938964844,-135.57000732421875 57.43000030517578,-134.0399932861328 57.43000030517578,-134.0399932861328 C57.43000030517578,-134.0399932861328 63.40999984741211,-132.38999938964844 63.40999984741211,-132.38999938964844 C63.40999984741211,-132.38999938964844 66.48999786376953,-131.50999450683594 66.48999786376953,-131.50999450683594 C66.48999786376953,-131.50999450683594 72.77999877929688,-129.66000366210938 72.77999877929688,-129.66000366210938 C72.77999877929688,-129.66000366210938 79.29000091552734,-127.68000030517578 79.29000091552734,-127.68000030517578 C79.29000091552734,-127.68000030517578 86,-125.58000183105469 86,-125.58000183105469 C86,-125.58000183105469 92.91999816894531,-123.3499984741211 92.91999816894531,-123.3499984741211 C92.91999816894531,-123.3499984741211 100.05000305175781,-120.9800033569336 100.05000305175781,-120.9800033569336 C100.05000305175781,-120.9800033569336 107.37999725341797,-118.5 107.37999725341797,-118.5 C107.37999725341797,-118.5 111.12999725341797,-117.20999908447266 111.12999725341797,-117.20999908447266 C121.56999969482422,-113.58999633789062 128.85000610351562,-104.12000274658203 129.66000366210938,-93.11000061035156 C132.5500030517578,-53.540000915527344 132.0399932861328,-17.989999771118164 128.1199951171875,13.539999961853027 C119.5,72.62000274658203 79.47000122070312,115.41999816894531 8.0600004196167,141.9499969482422 C8.0600004196167,141.9499969482422 4.690000057220459,143.17999267578125 4.690000057220459,143.17999267578125 C1.659999966621399,144.27000427246094 -1.659999966621399,144.27000427246094 -4.690000057220459,143.17999267578125 C-78.16999816894531,116.76000213623047 -119.31999969482422,73.54000091552734 -128.1199951171875,13.539999961853027 C-131.72999572753906,-19.5 -132.4499969482422,-52.779998779296875 -130.27999877929688,-85.94000244140625 C-130.27999877929688,-85.94000244140625 -129.77000427246094,-93.16000366210938 -129.77000427246094,-93.16000366210938 C-128.92999267578125,-104.12999725341797 -121.6500015258789,-113.55000305175781 -111.23999786376953,-117.16000366210938 C-111.23999786376953,-117.16000366210938 -103.79000091552734,-119.72000122070312 -103.79000091552734,-119.72000122070312 C-103.79000091552734,-119.72000122070312 -96.55999755859375,-122.1500015258789 -96.55999755859375,-122.1500015258789 C-96.55999755859375,-122.1500015258789 -89.5199966430664,-124.44000244140625 -89.5199966430664,-124.44000244140625 C-89.5199966430664,-124.44000244140625 -82.69000244140625,-126.61000061035156 -82.69000244140625,-126.61000061035156 C-82.69000244140625,-126.61000061035156 -76.06999969482422,-128.66000366210938 -76.06999969482422,-128.66000366210938 C-76.06999969482422,-128.66000366210938 -69.66000366210938,-130.57000732421875 -69.66000366210938,-130.57000732421875 C-69.66000366210938,-130.57000732421875 -66.52999877929688,-131.49000549316406 -66.52999877929688,-131.49000549316406 C-66.52999877929688,-131.49000549316406 -60.43000030517578,-133.2100067138672 -60.43000030517578,-133.2100067138672 C-60.43000030517578,-133.2100067138672 -57.45000076293945,-134.02000427246094 -57.45000076293945,-134.02000427246094 C-57.45000076293945,-134.02000427246094 -51.66999816894531,-135.5500030517578 -51.66999816894531,-135.5500030517578 C-51.66999816894531,-135.5500030517578 -46.08000183105469,-136.9600067138672 -46.08000183105469,-136.9600067138672 C-46.08000183105469,-136.9600067138672 -43.369998931884766,-137.61000061035156 -43.369998931884766,-137.61000061035156 C-43.369998931884766,-137.61000061035156 -38.099998474121094,-138.8300018310547 -38.099998474121094,-138.8300018310547 C-36.380001068115234,-139.2100067138672 -34.68000030517578,-139.57000732421875 -33.040000915527344,-139.91000366210938 C-33.040000915527344,-139.91000366210938 -28.170000076293945,-140.8699951171875 -28.170000076293945,-140.8699951171875 C-28.170000076293945,-140.8699951171875 -23.520000457763672,-141.6999969482422 -23.520000457763672,-141.6999969482422 C-14.430000305175781,-143.22999572753906 -6.590000152587891,-144 0.019999999552965164,-144 C6.619999885559082,-144.00999450683594 14.460000038146973,-143.24000549316406 23.540000915527344,-141.7100067138672z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_162)"
                        fill-opacity="0.15"
                        d=" M23.540000915527344,-141.7100067138672 C23.540000915527344,-141.7100067138672 28.18000030517578,-140.8800048828125 28.18000030517578,-140.8800048828125 C28.18000030517578,-140.8800048828125 33.029998779296875,-139.9199981689453 33.029998779296875,-139.9199981689453 C35.5099983215332,-139.4199981689453 38.060001373291016,-138.86000061035156 40.70000076293945,-138.25 C40.70000076293945,-138.25 46.060001373291016,-136.97999572753906 46.060001373291016,-136.97999572753906 C46.060001373291016,-136.97999572753906 51.63999938964844,-135.57000732421875 51.63999938964844,-135.57000732421875 C51.63999938964844,-135.57000732421875 57.43000030517578,-134.0399932861328 57.43000030517578,-134.0399932861328 C57.43000030517578,-134.0399932861328 63.40999984741211,-132.38999938964844 63.40999984741211,-132.38999938964844 C63.40999984741211,-132.38999938964844 66.48999786376953,-131.50999450683594 66.48999786376953,-131.50999450683594 C66.48999786376953,-131.50999450683594 72.77999877929688,-129.66000366210938 72.77999877929688,-129.66000366210938 C72.77999877929688,-129.66000366210938 79.29000091552734,-127.68000030517578 79.29000091552734,-127.68000030517578 C79.29000091552734,-127.68000030517578 86,-125.58000183105469 86,-125.58000183105469 C86,-125.58000183105469 92.91999816894531,-123.3499984741211 92.91999816894531,-123.3499984741211 C92.91999816894531,-123.3499984741211 100.05000305175781,-120.9800033569336 100.05000305175781,-120.9800033569336 C100.05000305175781,-120.9800033569336 107.37999725341797,-118.5 107.37999725341797,-118.5 C107.37999725341797,-118.5 111.12999725341797,-117.20999908447266 111.12999725341797,-117.20999908447266 C121.56999969482422,-113.58999633789062 128.85000610351562,-104.12000274658203 129.66000366210938,-93.11000061035156 C132.5500030517578,-53.540000915527344 132.0399932861328,-17.989999771118164 128.1199951171875,13.539999961853027 C119.5,72.62000274658203 79.47000122070312,115.41999816894531 8.0600004196167,141.9499969482422 C8.0600004196167,141.9499969482422 4.690000057220459,143.17999267578125 4.690000057220459,143.17999267578125 C1.659999966621399,144.27000427246094 -1.659999966621399,144.27000427246094 -4.690000057220459,143.17999267578125 C-78.16999816894531,116.76000213623047 -119.31999969482422,73.54000091552734 -128.1199951171875,13.539999961853027 C-131.72999572753906,-19.5 -132.4499969482422,-52.779998779296875 -130.27999877929688,-85.94000244140625 C-130.27999877929688,-85.94000244140625 -129.77000427246094,-93.16000366210938 -129.77000427246094,-93.16000366210938 C-128.92999267578125,-104.12999725341797 -121.6500015258789,-113.55000305175781 -111.23999786376953,-117.16000366210938 C-111.23999786376953,-117.16000366210938 -103.79000091552734,-119.72000122070312 -103.79000091552734,-119.72000122070312 C-103.79000091552734,-119.72000122070312 -96.55999755859375,-122.1500015258789 -96.55999755859375,-122.1500015258789 C-96.55999755859375,-122.1500015258789 -89.5199966430664,-124.44000244140625 -89.5199966430664,-124.44000244140625 C-89.5199966430664,-124.44000244140625 -82.69000244140625,-126.61000061035156 -82.69000244140625,-126.61000061035156 C-82.69000244140625,-126.61000061035156 -76.06999969482422,-128.66000366210938 -76.06999969482422,-128.66000366210938 C-76.06999969482422,-128.66000366210938 -69.66000366210938,-130.57000732421875 -69.66000366210938,-130.57000732421875 C-69.66000366210938,-130.57000732421875 -66.52999877929688,-131.49000549316406 -66.52999877929688,-131.49000549316406 C-66.52999877929688,-131.49000549316406 -60.43000030517578,-133.2100067138672 -60.43000030517578,-133.2100067138672 C-60.43000030517578,-133.2100067138672 -57.45000076293945,-134.02000427246094 -57.45000076293945,-134.02000427246094 C-57.45000076293945,-134.02000427246094 -51.66999816894531,-135.5500030517578 -51.66999816894531,-135.5500030517578 C-51.66999816894531,-135.5500030517578 -46.08000183105469,-136.9600067138672 -46.08000183105469,-136.9600067138672 C-46.08000183105469,-136.9600067138672 -43.369998931884766,-137.61000061035156 -43.369998931884766,-137.61000061035156 C-43.369998931884766,-137.61000061035156 -38.099998474121094,-138.8300018310547 -38.099998474121094,-138.8300018310547 C-36.380001068115234,-139.2100067138672 -34.68000030517578,-139.57000732421875 -33.040000915527344,-139.91000366210938 C-33.040000915527344,-139.91000366210938 -28.170000076293945,-140.8699951171875 -28.170000076293945,-140.8699951171875 C-28.170000076293945,-140.8699951171875 -23.520000457763672,-141.6999969482422 -23.520000457763672,-141.6999969482422 C-14.430000305175781,-143.22999572753906 -6.590000152587891,-144 0.019999999552965164,-144 C6.619999885559082,-144.00999450683594 14.460000038146973,-143.24000549316406 23.540000915527344,-141.7100067138672z"
                      ></path>
                      <path
                        stroke="url(#__lottie_element_163)"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M23.540000915527344,-141.7100067138672 C23.540000915527344,-141.7100067138672 28.18000030517578,-140.8800048828125 28.18000030517578,-140.8800048828125 C28.18000030517578,-140.8800048828125 33.029998779296875,-139.9199981689453 33.029998779296875,-139.9199981689453 C35.5099983215332,-139.4199981689453 38.060001373291016,-138.86000061035156 40.70000076293945,-138.25 C40.70000076293945,-138.25 46.060001373291016,-136.97999572753906 46.060001373291016,-136.97999572753906 C46.060001373291016,-136.97999572753906 51.63999938964844,-135.57000732421875 51.63999938964844,-135.57000732421875 C51.63999938964844,-135.57000732421875 57.43000030517578,-134.0399932861328 57.43000030517578,-134.0399932861328 C57.43000030517578,-134.0399932861328 63.40999984741211,-132.38999938964844 63.40999984741211,-132.38999938964844 C63.40999984741211,-132.38999938964844 66.48999786376953,-131.50999450683594 66.48999786376953,-131.50999450683594 C66.48999786376953,-131.50999450683594 72.77999877929688,-129.66000366210938 72.77999877929688,-129.66000366210938 C72.77999877929688,-129.66000366210938 79.29000091552734,-127.68000030517578 79.29000091552734,-127.68000030517578 C79.29000091552734,-127.68000030517578 86,-125.58000183105469 86,-125.58000183105469 C86,-125.58000183105469 92.91999816894531,-123.3499984741211 92.91999816894531,-123.3499984741211 C92.91999816894531,-123.3499984741211 100.05000305175781,-120.9800033569336 100.05000305175781,-120.9800033569336 C100.05000305175781,-120.9800033569336 107.37999725341797,-118.5 107.37999725341797,-118.5 C107.37999725341797,-118.5 111.12999725341797,-117.20999908447266 111.12999725341797,-117.20999908447266 C121.56999969482422,-113.58999633789062 128.85000610351562,-104.12000274658203 129.66000366210938,-93.11000061035156 C132.5500030517578,-53.540000915527344 132.0399932861328,-17.989999771118164 128.1199951171875,13.539999961853027 C119.5,72.62000274658203 79.47000122070312,115.41999816894531 8.0600004196167,141.9499969482422 C8.0600004196167,141.9499969482422 4.690000057220459,143.17999267578125 4.690000057220459,143.17999267578125 C1.659999966621399,144.27000427246094 -1.659999966621399,144.27000427246094 -4.690000057220459,143.17999267578125 C-78.16999816894531,116.76000213623047 -119.31999969482422,73.54000091552734 -128.1199951171875,13.539999961853027 C-131.72999572753906,-19.5 -132.4499969482422,-52.779998779296875 -130.27999877929688,-85.94000244140625 C-130.27999877929688,-85.94000244140625 -129.77000427246094,-93.16000366210938 -129.77000427246094,-93.16000366210938 C-128.92999267578125,-104.12999725341797 -121.6500015258789,-113.55000305175781 -111.23999786376953,-117.16000366210938 C-111.23999786376953,-117.16000366210938 -103.79000091552734,-119.72000122070312 -103.79000091552734,-119.72000122070312 C-103.79000091552734,-119.72000122070312 -96.55999755859375,-122.1500015258789 -96.55999755859375,-122.1500015258789 C-96.55999755859375,-122.1500015258789 -89.5199966430664,-124.44000244140625 -89.5199966430664,-124.44000244140625 C-89.5199966430664,-124.44000244140625 -82.69000244140625,-126.61000061035156 -82.69000244140625,-126.61000061035156 C-82.69000244140625,-126.61000061035156 -76.06999969482422,-128.66000366210938 -76.06999969482422,-128.66000366210938 C-76.06999969482422,-128.66000366210938 -69.66000366210938,-130.57000732421875 -69.66000366210938,-130.57000732421875 C-69.66000366210938,-130.57000732421875 -66.52999877929688,-131.49000549316406 -66.52999877929688,-131.49000549316406 C-66.52999877929688,-131.49000549316406 -60.43000030517578,-133.2100067138672 -60.43000030517578,-133.2100067138672 C-60.43000030517578,-133.2100067138672 -57.45000076293945,-134.02000427246094 -57.45000076293945,-134.02000427246094 C-57.45000076293945,-134.02000427246094 -51.66999816894531,-135.5500030517578 -51.66999816894531,-135.5500030517578 C-51.66999816894531,-135.5500030517578 -46.08000183105469,-136.9600067138672 -46.08000183105469,-136.9600067138672 C-46.08000183105469,-136.9600067138672 -43.369998931884766,-137.61000061035156 -43.369998931884766,-137.61000061035156 C-43.369998931884766,-137.61000061035156 -38.099998474121094,-138.8300018310547 -38.099998474121094,-138.8300018310547 C-36.380001068115234,-139.2100067138672 -34.68000030517578,-139.57000732421875 -33.040000915527344,-139.91000366210938 C-33.040000915527344,-139.91000366210938 -28.170000076293945,-140.8699951171875 -28.170000076293945,-140.8699951171875 C-28.170000076293945,-140.8699951171875 -23.520000457763672,-141.6999969482422 -23.520000457763672,-141.6999969482422 C-14.430000305175781,-143.22999572753906 -6.590000152587891,-144 0.019999999552965164,-144 C6.619999885559082,-144.00999450683594 14.460000038146973,-143.24000549316406 23.540000915527344,-141.7100067138672z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,867,287.760009765625)"
                    opacity="1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(23,24,25)"
                        fill-opacity="1"
                        d=" M17.989999771118164,-108.12999725341797 C17.989999771118164,-108.12999725341797 21.540000915527344,-107.5 21.540000915527344,-107.5 C21.540000915527344,-107.5 25.25,-106.7699966430664 25.25,-106.7699966430664 C27.139999389648438,-106.37999725341797 29.09000015258789,-105.95999908447266 31.110000610351562,-105.48999786376953 C31.110000610351562,-105.48999786376953 35.209999084472656,-104.5199966430664 35.209999084472656,-104.5199966430664 C35.209999084472656,-104.5199966430664 39.470001220703125,-103.44999694824219 39.470001220703125,-103.44999694824219 C39.470001220703125,-103.44999694824219 43.88999938964844,-102.27999877929688 43.88999938964844,-102.27999877929688 C43.88999938964844,-102.27999877929688 48.459999084472656,-101.0199966430664 48.459999084472656,-101.0199966430664 C48.459999084472656,-101.0199966430664 50.810001373291016,-100.3499984741211 50.810001373291016,-100.3499984741211 C50.810001373291016,-100.3499984741211 55.630001068115234,-98.94000244140625 55.630001068115234,-98.94000244140625 C55.630001068115234,-98.94000244140625 60.599998474121094,-97.43000030517578 60.599998474121094,-97.43000030517578 C60.599998474121094,-97.43000030517578 65.7300033569336,-95.81999969482422 65.7300033569336,-95.81999969482422 C65.7300033569336,-95.81999969482422 71.0199966430664,-94.12000274658203 71.0199966430664,-94.12000274658203 C71.0199966430664,-94.12000274658203 76.45999908447266,-92.31999969482422 76.45999908447266,-92.31999969482422 C76.45999908447266,-92.31999969482422 82.06999969482422,-90.41999816894531 82.06999969482422,-90.41999816894531 C82.06999969482422,-90.41999816894531 84.93000030517578,-89.44000244140625 84.93000030517578,-89.44000244140625 C92.91000366210938,-86.68000030517578 98.4800033569336,-79.44999694824219 99.08999633789062,-71.05000305175781 C101.30000305175781,-40.86000061035156 100.91000366210938,-13.729999542236328 97.91999816894531,10.329999923706055 C91.33000183105469,55.40999984741211 60.7400016784668,88.06999969482422 6.159999847412109,108.31999969482422 C6.159999847412109,108.31999969482422 3.5799999237060547,109.26000213623047 3.5799999237060547,109.26000213623047 C1.2699999809265137,110.08999633789062 -1.2699999809265137,110.08999633789062 -3.5799999237060547,109.26000213623047 C-59.7400016784668,89.0999984741211 -91.19000244140625,56.119998931884766 -97.91999816894531,10.329999923706055 C-100.66999816894531,-14.880000114440918 -101.2300033569336,-40.279998779296875 -99.56999969482422,-65.58000183105469 C-99.56999969482422,-65.58000183105469 -99.18000030517578,-71.08000183105469 -99.18000030517578,-71.08000183105469 C-98.54000091552734,-79.44999694824219 -92.97000122070312,-86.6500015258789 -85.0199966430664,-89.4000015258789 C-85.0199966430664,-89.4000015258789 -79.33000183105469,-91.3499984741211 -79.33000183105469,-91.3499984741211 C-79.33000183105469,-91.3499984741211 -73.79000091552734,-93.19999694824219 -73.79000091552734,-93.19999694824219 C-73.79000091552734,-93.19999694824219 -68.41999816894531,-94.95999908447266 -68.41999816894531,-94.95999908447266 C-68.41999816894531,-94.95999908447266 -63.20000076293945,-96.61000061035156 -63.20000076293945,-96.61000061035156 C-63.20000076293945,-96.61000061035156 -58.13999938964844,-98.16999816894531 -58.13999938964844,-98.16999816894531 C-58.13999938964844,-98.16999816894531 -53.2400016784668,-99.62999725341797 -53.2400016784668,-99.62999725341797 C-53.2400016784668,-99.62999725341797 -50.84000015258789,-100.33000183105469 -50.84000015258789,-100.33000183105469 C-50.84000015258789,-100.33000183105469 -46.18000030517578,-101.6500015258789 -46.18000030517578,-101.6500015258789 C-46.18000030517578,-101.6500015258789 -43.90999984741211,-102.2699966430664 -43.90999984741211,-102.2699966430664 C-43.90999984741211,-102.2699966430664 -39.4900016784668,-103.43000030517578 -39.4900016784668,-103.43000030517578 C-39.4900016784668,-103.43000030517578 -35.220001220703125,-104.51000213623047 -35.220001220703125,-104.51000213623047 C-35.220001220703125,-104.51000213623047 -33.150001525878906,-105.01000213623047 -33.150001525878906,-105.01000213623047 C-33.150001525878906,-105.01000213623047 -29.1200008392334,-105.93000030517578 -29.1200008392334,-105.93000030517578 C-27.799999237060547,-106.22000122070312 -26.5,-106.5 -25.25,-106.76000213623047 C-25.25,-106.76000213623047 -21.530000686645508,-107.48999786376953 -21.530000686645508,-107.48999786376953 C-21.530000686645508,-107.48999786376953 -17.979999542236328,-108.12999725341797 -17.979999542236328,-108.12999725341797 C-11.029999732971191,-109.29000091552734 -5.03000020980835,-109.87999725341797 0.009999999776482582,-109.87999725341797 C5.059999942779541,-109.87999725341797 11.050000190734863,-109.30000305175781 17.989999771118164,-108.12999725341797z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_155)"
                        fill-opacity="0.15"
                        d=" M17.989999771118164,-108.12999725341797 C17.989999771118164,-108.12999725341797 21.540000915527344,-107.5 21.540000915527344,-107.5 C21.540000915527344,-107.5 25.25,-106.7699966430664 25.25,-106.7699966430664 C27.139999389648438,-106.37999725341797 29.09000015258789,-105.95999908447266 31.110000610351562,-105.48999786376953 C31.110000610351562,-105.48999786376953 35.209999084472656,-104.5199966430664 35.209999084472656,-104.5199966430664 C35.209999084472656,-104.5199966430664 39.470001220703125,-103.44999694824219 39.470001220703125,-103.44999694824219 C39.470001220703125,-103.44999694824219 43.88999938964844,-102.27999877929688 43.88999938964844,-102.27999877929688 C43.88999938964844,-102.27999877929688 48.459999084472656,-101.0199966430664 48.459999084472656,-101.0199966430664 C48.459999084472656,-101.0199966430664 50.810001373291016,-100.3499984741211 50.810001373291016,-100.3499984741211 C50.810001373291016,-100.3499984741211 55.630001068115234,-98.94000244140625 55.630001068115234,-98.94000244140625 C55.630001068115234,-98.94000244140625 60.599998474121094,-97.43000030517578 60.599998474121094,-97.43000030517578 C60.599998474121094,-97.43000030517578 65.7300033569336,-95.81999969482422 65.7300033569336,-95.81999969482422 C65.7300033569336,-95.81999969482422 71.0199966430664,-94.12000274658203 71.0199966430664,-94.12000274658203 C71.0199966430664,-94.12000274658203 76.45999908447266,-92.31999969482422 76.45999908447266,-92.31999969482422 C76.45999908447266,-92.31999969482422 82.06999969482422,-90.41999816894531 82.06999969482422,-90.41999816894531 C82.06999969482422,-90.41999816894531 84.93000030517578,-89.44000244140625 84.93000030517578,-89.44000244140625 C92.91000366210938,-86.68000030517578 98.4800033569336,-79.44999694824219 99.08999633789062,-71.05000305175781 C101.30000305175781,-40.86000061035156 100.91000366210938,-13.729999542236328 97.91999816894531,10.329999923706055 C91.33000183105469,55.40999984741211 60.7400016784668,88.06999969482422 6.159999847412109,108.31999969482422 C6.159999847412109,108.31999969482422 3.5799999237060547,109.26000213623047 3.5799999237060547,109.26000213623047 C1.2699999809265137,110.08999633789062 -1.2699999809265137,110.08999633789062 -3.5799999237060547,109.26000213623047 C-59.7400016784668,89.0999984741211 -91.19000244140625,56.119998931884766 -97.91999816894531,10.329999923706055 C-100.66999816894531,-14.880000114440918 -101.2300033569336,-40.279998779296875 -99.56999969482422,-65.58000183105469 C-99.56999969482422,-65.58000183105469 -99.18000030517578,-71.08000183105469 -99.18000030517578,-71.08000183105469 C-98.54000091552734,-79.44999694824219 -92.97000122070312,-86.6500015258789 -85.0199966430664,-89.4000015258789 C-85.0199966430664,-89.4000015258789 -79.33000183105469,-91.3499984741211 -79.33000183105469,-91.3499984741211 C-79.33000183105469,-91.3499984741211 -73.79000091552734,-93.19999694824219 -73.79000091552734,-93.19999694824219 C-73.79000091552734,-93.19999694824219 -68.41999816894531,-94.95999908447266 -68.41999816894531,-94.95999908447266 C-68.41999816894531,-94.95999908447266 -63.20000076293945,-96.61000061035156 -63.20000076293945,-96.61000061035156 C-63.20000076293945,-96.61000061035156 -58.13999938964844,-98.16999816894531 -58.13999938964844,-98.16999816894531 C-58.13999938964844,-98.16999816894531 -53.2400016784668,-99.62999725341797 -53.2400016784668,-99.62999725341797 C-53.2400016784668,-99.62999725341797 -50.84000015258789,-100.33000183105469 -50.84000015258789,-100.33000183105469 C-50.84000015258789,-100.33000183105469 -46.18000030517578,-101.6500015258789 -46.18000030517578,-101.6500015258789 C-46.18000030517578,-101.6500015258789 -43.90999984741211,-102.2699966430664 -43.90999984741211,-102.2699966430664 C-43.90999984741211,-102.2699966430664 -39.4900016784668,-103.43000030517578 -39.4900016784668,-103.43000030517578 C-39.4900016784668,-103.43000030517578 -35.220001220703125,-104.51000213623047 -35.220001220703125,-104.51000213623047 C-35.220001220703125,-104.51000213623047 -33.150001525878906,-105.01000213623047 -33.150001525878906,-105.01000213623047 C-33.150001525878906,-105.01000213623047 -29.1200008392334,-105.93000030517578 -29.1200008392334,-105.93000030517578 C-27.799999237060547,-106.22000122070312 -26.5,-106.5 -25.25,-106.76000213623047 C-25.25,-106.76000213623047 -21.530000686645508,-107.48999786376953 -21.530000686645508,-107.48999786376953 C-21.530000686645508,-107.48999786376953 -17.979999542236328,-108.12999725341797 -17.979999542236328,-108.12999725341797 C-11.029999732971191,-109.29000091552734 -5.03000020980835,-109.87999725341797 0.009999999776482582,-109.87999725341797 C5.059999942779541,-109.87999725341797 11.050000190734863,-109.30000305175781 17.989999771118164,-108.12999725341797z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_156)"
                        fill-opacity="0.25"
                        d=" M17.989999771118164,-108.12999725341797 C17.989999771118164,-108.12999725341797 21.540000915527344,-107.5 21.540000915527344,-107.5 C21.540000915527344,-107.5 25.25,-106.7699966430664 25.25,-106.7699966430664 C27.139999389648438,-106.37999725341797 29.09000015258789,-105.95999908447266 31.110000610351562,-105.48999786376953 C31.110000610351562,-105.48999786376953 35.209999084472656,-104.5199966430664 35.209999084472656,-104.5199966430664 C35.209999084472656,-104.5199966430664 39.470001220703125,-103.44999694824219 39.470001220703125,-103.44999694824219 C39.470001220703125,-103.44999694824219 43.88999938964844,-102.27999877929688 43.88999938964844,-102.27999877929688 C43.88999938964844,-102.27999877929688 48.459999084472656,-101.0199966430664 48.459999084472656,-101.0199966430664 C48.459999084472656,-101.0199966430664 50.810001373291016,-100.3499984741211 50.810001373291016,-100.3499984741211 C50.810001373291016,-100.3499984741211 55.630001068115234,-98.94000244140625 55.630001068115234,-98.94000244140625 C55.630001068115234,-98.94000244140625 60.599998474121094,-97.43000030517578 60.599998474121094,-97.43000030517578 C60.599998474121094,-97.43000030517578 65.7300033569336,-95.81999969482422 65.7300033569336,-95.81999969482422 C65.7300033569336,-95.81999969482422 71.0199966430664,-94.12000274658203 71.0199966430664,-94.12000274658203 C71.0199966430664,-94.12000274658203 76.45999908447266,-92.31999969482422 76.45999908447266,-92.31999969482422 C76.45999908447266,-92.31999969482422 82.06999969482422,-90.41999816894531 82.06999969482422,-90.41999816894531 C82.06999969482422,-90.41999816894531 84.93000030517578,-89.44000244140625 84.93000030517578,-89.44000244140625 C92.91000366210938,-86.68000030517578 98.4800033569336,-79.44999694824219 99.08999633789062,-71.05000305175781 C101.30000305175781,-40.86000061035156 100.91000366210938,-13.729999542236328 97.91999816894531,10.329999923706055 C91.33000183105469,55.40999984741211 60.7400016784668,88.06999969482422 6.159999847412109,108.31999969482422 C6.159999847412109,108.31999969482422 3.5799999237060547,109.26000213623047 3.5799999237060547,109.26000213623047 C1.2699999809265137,110.08999633789062 -1.2699999809265137,110.08999633789062 -3.5799999237060547,109.26000213623047 C-59.7400016784668,89.0999984741211 -91.19000244140625,56.119998931884766 -97.91999816894531,10.329999923706055 C-100.66999816894531,-14.880000114440918 -101.2300033569336,-40.279998779296875 -99.56999969482422,-65.58000183105469 C-99.56999969482422,-65.58000183105469 -99.18000030517578,-71.08000183105469 -99.18000030517578,-71.08000183105469 C-98.54000091552734,-79.44999694824219 -92.97000122070312,-86.6500015258789 -85.0199966430664,-89.4000015258789 C-85.0199966430664,-89.4000015258789 -79.33000183105469,-91.3499984741211 -79.33000183105469,-91.3499984741211 C-79.33000183105469,-91.3499984741211 -73.79000091552734,-93.19999694824219 -73.79000091552734,-93.19999694824219 C-73.79000091552734,-93.19999694824219 -68.41999816894531,-94.95999908447266 -68.41999816894531,-94.95999908447266 C-68.41999816894531,-94.95999908447266 -63.20000076293945,-96.61000061035156 -63.20000076293945,-96.61000061035156 C-63.20000076293945,-96.61000061035156 -58.13999938964844,-98.16999816894531 -58.13999938964844,-98.16999816894531 C-58.13999938964844,-98.16999816894531 -53.2400016784668,-99.62999725341797 -53.2400016784668,-99.62999725341797 C-53.2400016784668,-99.62999725341797 -50.84000015258789,-100.33000183105469 -50.84000015258789,-100.33000183105469 C-50.84000015258789,-100.33000183105469 -46.18000030517578,-101.6500015258789 -46.18000030517578,-101.6500015258789 C-46.18000030517578,-101.6500015258789 -43.90999984741211,-102.2699966430664 -43.90999984741211,-102.2699966430664 C-43.90999984741211,-102.2699966430664 -39.4900016784668,-103.43000030517578 -39.4900016784668,-103.43000030517578 C-39.4900016784668,-103.43000030517578 -35.220001220703125,-104.51000213623047 -35.220001220703125,-104.51000213623047 C-35.220001220703125,-104.51000213623047 -33.150001525878906,-105.01000213623047 -33.150001525878906,-105.01000213623047 C-33.150001525878906,-105.01000213623047 -29.1200008392334,-105.93000030517578 -29.1200008392334,-105.93000030517578 C-27.799999237060547,-106.22000122070312 -26.5,-106.5 -25.25,-106.76000213623047 C-25.25,-106.76000213623047 -21.530000686645508,-107.48999786376953 -21.530000686645508,-107.48999786376953 C-21.530000686645508,-107.48999786376953 -17.979999542236328,-108.12999725341797 -17.979999542236328,-108.12999725341797 C-11.029999732971191,-109.29000091552734 -5.03000020980835,-109.87999725341797 0.009999999776482582,-109.87999725341797 C5.059999942779541,-109.87999725341797 11.050000190734863,-109.30000305175781 17.989999771118164,-108.12999725341797z"
                      ></path>
                      <path
                        stroke="url(#__lottie_element_157)"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M17.989999771118164,-108.12999725341797 C17.989999771118164,-108.12999725341797 21.540000915527344,-107.5 21.540000915527344,-107.5 C21.540000915527344,-107.5 25.25,-106.7699966430664 25.25,-106.7699966430664 C27.139999389648438,-106.37999725341797 29.09000015258789,-105.95999908447266 31.110000610351562,-105.48999786376953 C31.110000610351562,-105.48999786376953 35.209999084472656,-104.5199966430664 35.209999084472656,-104.5199966430664 C35.209999084472656,-104.5199966430664 39.470001220703125,-103.44999694824219 39.470001220703125,-103.44999694824219 C39.470001220703125,-103.44999694824219 43.88999938964844,-102.27999877929688 43.88999938964844,-102.27999877929688 C43.88999938964844,-102.27999877929688 48.459999084472656,-101.0199966430664 48.459999084472656,-101.0199966430664 C48.459999084472656,-101.0199966430664 50.810001373291016,-100.3499984741211 50.810001373291016,-100.3499984741211 C50.810001373291016,-100.3499984741211 55.630001068115234,-98.94000244140625 55.630001068115234,-98.94000244140625 C55.630001068115234,-98.94000244140625 60.599998474121094,-97.43000030517578 60.599998474121094,-97.43000030517578 C60.599998474121094,-97.43000030517578 65.7300033569336,-95.81999969482422 65.7300033569336,-95.81999969482422 C65.7300033569336,-95.81999969482422 71.0199966430664,-94.12000274658203 71.0199966430664,-94.12000274658203 C71.0199966430664,-94.12000274658203 76.45999908447266,-92.31999969482422 76.45999908447266,-92.31999969482422 C76.45999908447266,-92.31999969482422 82.06999969482422,-90.41999816894531 82.06999969482422,-90.41999816894531 C82.06999969482422,-90.41999816894531 84.93000030517578,-89.44000244140625 84.93000030517578,-89.44000244140625 C92.91000366210938,-86.68000030517578 98.4800033569336,-79.44999694824219 99.08999633789062,-71.05000305175781 C101.30000305175781,-40.86000061035156 100.91000366210938,-13.729999542236328 97.91999816894531,10.329999923706055 C91.33000183105469,55.40999984741211 60.7400016784668,88.06999969482422 6.159999847412109,108.31999969482422 C6.159999847412109,108.31999969482422 3.5799999237060547,109.26000213623047 3.5799999237060547,109.26000213623047 C1.2699999809265137,110.08999633789062 -1.2699999809265137,110.08999633789062 -3.5799999237060547,109.26000213623047 C-59.7400016784668,89.0999984741211 -91.19000244140625,56.119998931884766 -97.91999816894531,10.329999923706055 C-100.66999816894531,-14.880000114440918 -101.2300033569336,-40.279998779296875 -99.56999969482422,-65.58000183105469 C-99.56999969482422,-65.58000183105469 -99.18000030517578,-71.08000183105469 -99.18000030517578,-71.08000183105469 C-98.54000091552734,-79.44999694824219 -92.97000122070312,-86.6500015258789 -85.0199966430664,-89.4000015258789 C-85.0199966430664,-89.4000015258789 -79.33000183105469,-91.3499984741211 -79.33000183105469,-91.3499984741211 C-79.33000183105469,-91.3499984741211 -73.79000091552734,-93.19999694824219 -73.79000091552734,-93.19999694824219 C-73.79000091552734,-93.19999694824219 -68.41999816894531,-94.95999908447266 -68.41999816894531,-94.95999908447266 C-68.41999816894531,-94.95999908447266 -63.20000076293945,-96.61000061035156 -63.20000076293945,-96.61000061035156 C-63.20000076293945,-96.61000061035156 -58.13999938964844,-98.16999816894531 -58.13999938964844,-98.16999816894531 C-58.13999938964844,-98.16999816894531 -53.2400016784668,-99.62999725341797 -53.2400016784668,-99.62999725341797 C-53.2400016784668,-99.62999725341797 -50.84000015258789,-100.33000183105469 -50.84000015258789,-100.33000183105469 C-50.84000015258789,-100.33000183105469 -46.18000030517578,-101.6500015258789 -46.18000030517578,-101.6500015258789 C-46.18000030517578,-101.6500015258789 -43.90999984741211,-102.2699966430664 -43.90999984741211,-102.2699966430664 C-43.90999984741211,-102.2699966430664 -39.4900016784668,-103.43000030517578 -39.4900016784668,-103.43000030517578 C-39.4900016784668,-103.43000030517578 -35.220001220703125,-104.51000213623047 -35.220001220703125,-104.51000213623047 C-35.220001220703125,-104.51000213623047 -33.150001525878906,-105.01000213623047 -33.150001525878906,-105.01000213623047 C-33.150001525878906,-105.01000213623047 -29.1200008392334,-105.93000030517578 -29.1200008392334,-105.93000030517578 C-27.799999237060547,-106.22000122070312 -26.5,-106.5 -25.25,-106.76000213623047 C-25.25,-106.76000213623047 -21.530000686645508,-107.48999786376953 -21.530000686645508,-107.48999786376953 C-21.530000686645508,-107.48999786376953 -17.979999542236328,-108.12999725341797 -17.979999542236328,-108.12999725341797 C-11.029999732971191,-109.29000091552734 -5.03000020980835,-109.87999725341797 0.009999999776482582,-109.87999725341797 C5.059999942779541,-109.87999725341797 11.050000190734863,-109.30000305175781 17.989999771118164,-108.12999725341797z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,866,288)" opacity="1" style="display: block">
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(23,24,25)"
                        fill-opacity="1"
                        d=" M13.430000305175781,-80.69999694824219 C13.430000305175781,-80.69999694824219 16.06999969482422,-80.22000122070312 16.06999969482422,-80.22000122070312 C16.06999969482422,-80.22000122070312 18.84000015258789,-79.68000030517578 18.84000015258789,-79.68000030517578 C20.25,-79.38999938964844 21.709999084472656,-79.06999969482422 23.209999084472656,-78.7300033569336 C23.209999084472656,-78.7300033569336 26.270000457763672,-78 26.270000457763672,-78 C26.270000457763672,-78 29.450000762939453,-77.19999694824219 29.450000762939453,-77.19999694824219 C29.450000762939453,-77.19999694824219 32.75,-76.33000183105469 32.75,-76.33000183105469 C32.75,-76.33000183105469 36.15999984741211,-75.38999938964844 36.15999984741211,-75.38999938964844 C36.15999984741211,-75.38999938964844 37.91999816894531,-74.88999938964844 37.91999816894531,-74.88999938964844 C37.91999816894531,-74.88999938964844 41.5099983215332,-73.83999633789062 41.5099983215332,-73.83999633789062 C41.5099983215332,-73.83999633789062 45.220001220703125,-72.70999908447266 45.220001220703125,-72.70999908447266 C45.220001220703125,-72.70999908447266 49.04999923706055,-71.51000213623047 49.04999923706055,-71.51000213623047 C49.04999923706055,-71.51000213623047 53,-70.23999786376953 53,-70.23999786376953 C53,-70.23999786376953 57.060001373291016,-68.88999938964844 57.060001373291016,-68.88999938964844 C57.060001373291016,-68.88999938964844 61.2400016784668,-67.4800033569336 61.2400016784668,-67.4800033569336 C61.2400016784668,-67.4800033569336 63.380001068115234,-66.73999786376953 63.380001068115234,-66.73999786376953 C69.33999633789062,-64.68000030517578 73.48999786376953,-59.290000915527344 73.94999694824219,-53.02000045776367 C75.5999984741211,-30.489999771118164 75.30999755859375,-10.239999771118164 73.06999969482422,7.710000038146973 C68.16000366210938,41.349998474121094 45.33000183105469,65.7300033569336 4.599999904632568,80.83000183105469 C4.599999904632568,80.83000183105469 2.6700000762939453,81.52999877929688 2.6700000762939453,81.52999877929688 C0.949999988079071,82.16000366210938 -0.9399999976158142,82.16000366210938 -2.6700000762939453,81.52999877929688 C-44.58000183105469,66.48999786376953 -68.05000305175781,41.880001068115234 -73.06999969482422,7.710000038146973 C-75.12999725341797,-11.100000381469727 -75.54000091552734,-30.059999465942383 -74.30000305175781,-48.939998626708984 C-74.30000305175781,-48.939998626708984 -74.01000213623047,-53.04999923706055 -74.01000213623047,-53.04999923706055 C-73.52999877929688,-59.290000915527344 -69.37999725341797,-64.66000366210938 -63.45000076293945,-66.70999908447266 C-63.45000076293945,-66.70999908447266 -59.20000076293945,-68.16999816894531 -59.20000076293945,-68.16999816894531 C-59.20000076293945,-68.16999816894531 -55.06999969482422,-69.55999755859375 -55.06999969482422,-69.55999755859375 C-55.06999969482422,-69.55999755859375 -51.060001373291016,-70.86000061035156 -51.060001373291016,-70.86000061035156 C-51.060001373291016,-70.86000061035156 -47.15999984741211,-72.0999984741211 -47.15999984741211,-72.0999984741211 C-47.15999984741211,-72.0999984741211 -43.38999938964844,-73.26000213623047 -43.38999938964844,-73.26000213623047 C-43.38999938964844,-73.26000213623047 -39.72999954223633,-74.3499984741211 -39.72999954223633,-74.3499984741211 C-39.72999954223633,-74.3499984741211 -37.939998626708984,-74.87999725341797 -37.939998626708984,-74.87999725341797 C-37.939998626708984,-74.87999725341797 -34.459999084472656,-75.8499984741211 -34.459999084472656,-75.8499984741211 C-34.459999084472656,-75.8499984741211 -32.77000045776367,-76.31999969482422 -32.77000045776367,-76.31999969482422 C-32.77000045776367,-76.31999969482422 -29.469999313354492,-77.19000244140625 -29.469999313354492,-77.19000244140625 C-29.469999313354492,-77.19000244140625 -26.280000686645508,-77.98999786376953 -26.280000686645508,-77.98999786376953 C-26.280000686645508,-77.98999786376953 -24.739999771118164,-78.36000061035156 -24.739999771118164,-78.36000061035156 C-24.739999771118164,-78.36000061035156 -21.729999542236328,-79.05000305175781 -21.729999542236328,-79.05000305175781 C-20.75,-79.2699966430664 -19.780000686645508,-79.4800033569336 -18.84000015258789,-79.66999816894531 C-18.84000015258789,-79.66999816894531 -16.06999969482422,-80.22000122070312 -16.06999969482422,-80.22000122070312 C-16.06999969482422,-80.22000122070312 -13.420000076293945,-80.69000244140625 -13.420000076293945,-80.69000244140625 C-8.229999542236328,-81.55999755859375 -3.759999990463257,-82 0.009999999776482582,-82 C3.7699999809265137,-82 8.25,-81.56999969482422 13.430000305175781,-80.69999694824219z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_149)"
                        fill-opacity="0.2"
                        d=" M13.430000305175781,-80.69999694824219 C13.430000305175781,-80.69999694824219 16.06999969482422,-80.22000122070312 16.06999969482422,-80.22000122070312 C16.06999969482422,-80.22000122070312 18.84000015258789,-79.68000030517578 18.84000015258789,-79.68000030517578 C20.25,-79.38999938964844 21.709999084472656,-79.06999969482422 23.209999084472656,-78.7300033569336 C23.209999084472656,-78.7300033569336 26.270000457763672,-78 26.270000457763672,-78 C26.270000457763672,-78 29.450000762939453,-77.19999694824219 29.450000762939453,-77.19999694824219 C29.450000762939453,-77.19999694824219 32.75,-76.33000183105469 32.75,-76.33000183105469 C32.75,-76.33000183105469 36.15999984741211,-75.38999938964844 36.15999984741211,-75.38999938964844 C36.15999984741211,-75.38999938964844 37.91999816894531,-74.88999938964844 37.91999816894531,-74.88999938964844 C37.91999816894531,-74.88999938964844 41.5099983215332,-73.83999633789062 41.5099983215332,-73.83999633789062 C41.5099983215332,-73.83999633789062 45.220001220703125,-72.70999908447266 45.220001220703125,-72.70999908447266 C45.220001220703125,-72.70999908447266 49.04999923706055,-71.51000213623047 49.04999923706055,-71.51000213623047 C49.04999923706055,-71.51000213623047 53,-70.23999786376953 53,-70.23999786376953 C53,-70.23999786376953 57.060001373291016,-68.88999938964844 57.060001373291016,-68.88999938964844 C57.060001373291016,-68.88999938964844 61.2400016784668,-67.4800033569336 61.2400016784668,-67.4800033569336 C61.2400016784668,-67.4800033569336 63.380001068115234,-66.73999786376953 63.380001068115234,-66.73999786376953 C69.33999633789062,-64.68000030517578 73.48999786376953,-59.290000915527344 73.94999694824219,-53.02000045776367 C75.5999984741211,-30.489999771118164 75.30999755859375,-10.239999771118164 73.06999969482422,7.710000038146973 C68.16000366210938,41.349998474121094 45.33000183105469,65.7300033569336 4.599999904632568,80.83000183105469 C4.599999904632568,80.83000183105469 2.6700000762939453,81.52999877929688 2.6700000762939453,81.52999877929688 C0.949999988079071,82.16000366210938 -0.9399999976158142,82.16000366210938 -2.6700000762939453,81.52999877929688 C-44.58000183105469,66.48999786376953 -68.05000305175781,41.880001068115234 -73.06999969482422,7.710000038146973 C-75.12999725341797,-11.100000381469727 -75.54000091552734,-30.059999465942383 -74.30000305175781,-48.939998626708984 C-74.30000305175781,-48.939998626708984 -74.01000213623047,-53.04999923706055 -74.01000213623047,-53.04999923706055 C-73.52999877929688,-59.290000915527344 -69.37999725341797,-64.66000366210938 -63.45000076293945,-66.70999908447266 C-63.45000076293945,-66.70999908447266 -59.20000076293945,-68.16999816894531 -59.20000076293945,-68.16999816894531 C-59.20000076293945,-68.16999816894531 -55.06999969482422,-69.55999755859375 -55.06999969482422,-69.55999755859375 C-55.06999969482422,-69.55999755859375 -51.060001373291016,-70.86000061035156 -51.060001373291016,-70.86000061035156 C-51.060001373291016,-70.86000061035156 -47.15999984741211,-72.0999984741211 -47.15999984741211,-72.0999984741211 C-47.15999984741211,-72.0999984741211 -43.38999938964844,-73.26000213623047 -43.38999938964844,-73.26000213623047 C-43.38999938964844,-73.26000213623047 -39.72999954223633,-74.3499984741211 -39.72999954223633,-74.3499984741211 C-39.72999954223633,-74.3499984741211 -37.939998626708984,-74.87999725341797 -37.939998626708984,-74.87999725341797 C-37.939998626708984,-74.87999725341797 -34.459999084472656,-75.8499984741211 -34.459999084472656,-75.8499984741211 C-34.459999084472656,-75.8499984741211 -32.77000045776367,-76.31999969482422 -32.77000045776367,-76.31999969482422 C-32.77000045776367,-76.31999969482422 -29.469999313354492,-77.19000244140625 -29.469999313354492,-77.19000244140625 C-29.469999313354492,-77.19000244140625 -26.280000686645508,-77.98999786376953 -26.280000686645508,-77.98999786376953 C-26.280000686645508,-77.98999786376953 -24.739999771118164,-78.36000061035156 -24.739999771118164,-78.36000061035156 C-24.739999771118164,-78.36000061035156 -21.729999542236328,-79.05000305175781 -21.729999542236328,-79.05000305175781 C-20.75,-79.2699966430664 -19.780000686645508,-79.4800033569336 -18.84000015258789,-79.66999816894531 C-18.84000015258789,-79.66999816894531 -16.06999969482422,-80.22000122070312 -16.06999969482422,-80.22000122070312 C-16.06999969482422,-80.22000122070312 -13.420000076293945,-80.69000244140625 -13.420000076293945,-80.69000244140625 C-8.229999542236328,-81.55999755859375 -3.759999990463257,-82 0.009999999776482582,-82 C3.7699999809265137,-82 8.25,-81.56999969482422 13.430000305175781,-80.69999694824219z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_150)"
                        fill-opacity="0.4"
                        d=" M13.430000305175781,-80.69999694824219 C13.430000305175781,-80.69999694824219 16.06999969482422,-80.22000122070312 16.06999969482422,-80.22000122070312 C16.06999969482422,-80.22000122070312 18.84000015258789,-79.68000030517578 18.84000015258789,-79.68000030517578 C20.25,-79.38999938964844 21.709999084472656,-79.06999969482422 23.209999084472656,-78.7300033569336 C23.209999084472656,-78.7300033569336 26.270000457763672,-78 26.270000457763672,-78 C26.270000457763672,-78 29.450000762939453,-77.19999694824219 29.450000762939453,-77.19999694824219 C29.450000762939453,-77.19999694824219 32.75,-76.33000183105469 32.75,-76.33000183105469 C32.75,-76.33000183105469 36.15999984741211,-75.38999938964844 36.15999984741211,-75.38999938964844 C36.15999984741211,-75.38999938964844 37.91999816894531,-74.88999938964844 37.91999816894531,-74.88999938964844 C37.91999816894531,-74.88999938964844 41.5099983215332,-73.83999633789062 41.5099983215332,-73.83999633789062 C41.5099983215332,-73.83999633789062 45.220001220703125,-72.70999908447266 45.220001220703125,-72.70999908447266 C45.220001220703125,-72.70999908447266 49.04999923706055,-71.51000213623047 49.04999923706055,-71.51000213623047 C49.04999923706055,-71.51000213623047 53,-70.23999786376953 53,-70.23999786376953 C53,-70.23999786376953 57.060001373291016,-68.88999938964844 57.060001373291016,-68.88999938964844 C57.060001373291016,-68.88999938964844 61.2400016784668,-67.4800033569336 61.2400016784668,-67.4800033569336 C61.2400016784668,-67.4800033569336 63.380001068115234,-66.73999786376953 63.380001068115234,-66.73999786376953 C69.33999633789062,-64.68000030517578 73.48999786376953,-59.290000915527344 73.94999694824219,-53.02000045776367 C75.5999984741211,-30.489999771118164 75.30999755859375,-10.239999771118164 73.06999969482422,7.710000038146973 C68.16000366210938,41.349998474121094 45.33000183105469,65.7300033569336 4.599999904632568,80.83000183105469 C4.599999904632568,80.83000183105469 2.6700000762939453,81.52999877929688 2.6700000762939453,81.52999877929688 C0.949999988079071,82.16000366210938 -0.9399999976158142,82.16000366210938 -2.6700000762939453,81.52999877929688 C-44.58000183105469,66.48999786376953 -68.05000305175781,41.880001068115234 -73.06999969482422,7.710000038146973 C-75.12999725341797,-11.100000381469727 -75.54000091552734,-30.059999465942383 -74.30000305175781,-48.939998626708984 C-74.30000305175781,-48.939998626708984 -74.01000213623047,-53.04999923706055 -74.01000213623047,-53.04999923706055 C-73.52999877929688,-59.290000915527344 -69.37999725341797,-64.66000366210938 -63.45000076293945,-66.70999908447266 C-63.45000076293945,-66.70999908447266 -59.20000076293945,-68.16999816894531 -59.20000076293945,-68.16999816894531 C-59.20000076293945,-68.16999816894531 -55.06999969482422,-69.55999755859375 -55.06999969482422,-69.55999755859375 C-55.06999969482422,-69.55999755859375 -51.060001373291016,-70.86000061035156 -51.060001373291016,-70.86000061035156 C-51.060001373291016,-70.86000061035156 -47.15999984741211,-72.0999984741211 -47.15999984741211,-72.0999984741211 C-47.15999984741211,-72.0999984741211 -43.38999938964844,-73.26000213623047 -43.38999938964844,-73.26000213623047 C-43.38999938964844,-73.26000213623047 -39.72999954223633,-74.3499984741211 -39.72999954223633,-74.3499984741211 C-39.72999954223633,-74.3499984741211 -37.939998626708984,-74.87999725341797 -37.939998626708984,-74.87999725341797 C-37.939998626708984,-74.87999725341797 -34.459999084472656,-75.8499984741211 -34.459999084472656,-75.8499984741211 C-34.459999084472656,-75.8499984741211 -32.77000045776367,-76.31999969482422 -32.77000045776367,-76.31999969482422 C-32.77000045776367,-76.31999969482422 -29.469999313354492,-77.19000244140625 -29.469999313354492,-77.19000244140625 C-29.469999313354492,-77.19000244140625 -26.280000686645508,-77.98999786376953 -26.280000686645508,-77.98999786376953 C-26.280000686645508,-77.98999786376953 -24.739999771118164,-78.36000061035156 -24.739999771118164,-78.36000061035156 C-24.739999771118164,-78.36000061035156 -21.729999542236328,-79.05000305175781 -21.729999542236328,-79.05000305175781 C-20.75,-79.2699966430664 -19.780000686645508,-79.4800033569336 -18.84000015258789,-79.66999816894531 C-18.84000015258789,-79.66999816894531 -16.06999969482422,-80.22000122070312 -16.06999969482422,-80.22000122070312 C-16.06999969482422,-80.22000122070312 -13.420000076293945,-80.69000244140625 -13.420000076293945,-80.69000244140625 C-8.229999542236328,-81.55999755859375 -3.759999990463257,-82 0.009999999776482582,-82 C3.7699999809265137,-82 8.25,-81.56999969482422 13.430000305175781,-80.69999694824219z"
                      ></path>
                      <path
                        stroke="url(#__lottie_element_151)"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M13.430000305175781,-80.69999694824219 C13.430000305175781,-80.69999694824219 16.06999969482422,-80.22000122070312 16.06999969482422,-80.22000122070312 C16.06999969482422,-80.22000122070312 18.84000015258789,-79.68000030517578 18.84000015258789,-79.68000030517578 C20.25,-79.38999938964844 21.709999084472656,-79.06999969482422 23.209999084472656,-78.7300033569336 C23.209999084472656,-78.7300033569336 26.270000457763672,-78 26.270000457763672,-78 C26.270000457763672,-78 29.450000762939453,-77.19999694824219 29.450000762939453,-77.19999694824219 C29.450000762939453,-77.19999694824219 32.75,-76.33000183105469 32.75,-76.33000183105469 C32.75,-76.33000183105469 36.15999984741211,-75.38999938964844 36.15999984741211,-75.38999938964844 C36.15999984741211,-75.38999938964844 37.91999816894531,-74.88999938964844 37.91999816894531,-74.88999938964844 C37.91999816894531,-74.88999938964844 41.5099983215332,-73.83999633789062 41.5099983215332,-73.83999633789062 C41.5099983215332,-73.83999633789062 45.220001220703125,-72.70999908447266 45.220001220703125,-72.70999908447266 C45.220001220703125,-72.70999908447266 49.04999923706055,-71.51000213623047 49.04999923706055,-71.51000213623047 C49.04999923706055,-71.51000213623047 53,-70.23999786376953 53,-70.23999786376953 C53,-70.23999786376953 57.060001373291016,-68.88999938964844 57.060001373291016,-68.88999938964844 C57.060001373291016,-68.88999938964844 61.2400016784668,-67.4800033569336 61.2400016784668,-67.4800033569336 C61.2400016784668,-67.4800033569336 63.380001068115234,-66.73999786376953 63.380001068115234,-66.73999786376953 C69.33999633789062,-64.68000030517578 73.48999786376953,-59.290000915527344 73.94999694824219,-53.02000045776367 C75.5999984741211,-30.489999771118164 75.30999755859375,-10.239999771118164 73.06999969482422,7.710000038146973 C68.16000366210938,41.349998474121094 45.33000183105469,65.7300033569336 4.599999904632568,80.83000183105469 C4.599999904632568,80.83000183105469 2.6700000762939453,81.52999877929688 2.6700000762939453,81.52999877929688 C0.949999988079071,82.16000366210938 -0.9399999976158142,82.16000366210938 -2.6700000762939453,81.52999877929688 C-44.58000183105469,66.48999786376953 -68.05000305175781,41.880001068115234 -73.06999969482422,7.710000038146973 C-75.12999725341797,-11.100000381469727 -75.54000091552734,-30.059999465942383 -74.30000305175781,-48.939998626708984 C-74.30000305175781,-48.939998626708984 -74.01000213623047,-53.04999923706055 -74.01000213623047,-53.04999923706055 C-73.52999877929688,-59.290000915527344 -69.37999725341797,-64.66000366210938 -63.45000076293945,-66.70999908447266 C-63.45000076293945,-66.70999908447266 -59.20000076293945,-68.16999816894531 -59.20000076293945,-68.16999816894531 C-59.20000076293945,-68.16999816894531 -55.06999969482422,-69.55999755859375 -55.06999969482422,-69.55999755859375 C-55.06999969482422,-69.55999755859375 -51.060001373291016,-70.86000061035156 -51.060001373291016,-70.86000061035156 C-51.060001373291016,-70.86000061035156 -47.15999984741211,-72.0999984741211 -47.15999984741211,-72.0999984741211 C-47.15999984741211,-72.0999984741211 -43.38999938964844,-73.26000213623047 -43.38999938964844,-73.26000213623047 C-43.38999938964844,-73.26000213623047 -39.72999954223633,-74.3499984741211 -39.72999954223633,-74.3499984741211 C-39.72999954223633,-74.3499984741211 -37.939998626708984,-74.87999725341797 -37.939998626708984,-74.87999725341797 C-37.939998626708984,-74.87999725341797 -34.459999084472656,-75.8499984741211 -34.459999084472656,-75.8499984741211 C-34.459999084472656,-75.8499984741211 -32.77000045776367,-76.31999969482422 -32.77000045776367,-76.31999969482422 C-32.77000045776367,-76.31999969482422 -29.469999313354492,-77.19000244140625 -29.469999313354492,-77.19000244140625 C-29.469999313354492,-77.19000244140625 -26.280000686645508,-77.98999786376953 -26.280000686645508,-77.98999786376953 C-26.280000686645508,-77.98999786376953 -24.739999771118164,-78.36000061035156 -24.739999771118164,-78.36000061035156 C-24.739999771118164,-78.36000061035156 -21.729999542236328,-79.05000305175781 -21.729999542236328,-79.05000305175781 C-20.75,-79.2699966430664 -19.780000686645508,-79.4800033569336 -18.84000015258789,-79.66999816894531 C-18.84000015258789,-79.66999816894531 -16.06999969482422,-80.22000122070312 -16.06999969482422,-80.22000122070312 C-16.06999969482422,-80.22000122070312 -13.420000076293945,-80.69000244140625 -13.420000076293945,-80.69000244140625 C-8.229999542236328,-81.55999755859375 -3.759999990463257,-82 0.009999999776482582,-82 C3.7699999809265137,-82 8.25,-81.56999969482422 13.430000305175781,-80.69999694824219z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,866,288)" opacity="1" style="display: block">
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(23,24,25)"
                        fill-opacity="1"
                        d=" M8.451000213623047,-49.119998931884766 C8.451000213623047,-49.119998931884766 10.067000389099121,-48.82600021362305 10.067000389099121,-48.82600021362305 C10.067000389099121,-48.82600021362305 11.76200008392334,-48.494998931884766 11.76200008392334,-48.494998931884766 C12.625,-48.31800079345703 13.519000053405762,-48.12200164794922 14.437000274658203,-47.91400146484375 C14.437000274658203,-47.91400146484375 16.30900001525879,-47.46699905395508 16.30900001525879,-47.46699905395508 C16.30900001525879,-47.46699905395508 18.2549991607666,-46.97800064086914 18.2549991607666,-46.97800064086914 C18.2549991607666,-46.97800064086914 20.274999618530273,-46.44499969482422 20.274999618530273,-46.44499969482422 C20.274999618530273,-46.44499969482422 22.36199951171875,-45.869998931884766 22.36199951171875,-45.869998931884766 C22.36199951171875,-45.869998931884766 23.43899917602539,-45.56399917602539 23.43899917602539,-45.56399917602539 C23.43899917602539,-45.56399917602539 25.63599967956543,-44.92100143432617 25.63599967956543,-44.92100143432617 C25.63599967956543,-44.92100143432617 27.906999588012695,-44.22999954223633 27.906999588012695,-44.22999954223633 C27.906999588012695,-44.22999954223633 30.250999450683594,-43.494998931884766 30.250999450683594,-43.494998931884766 C30.250999450683594,-43.494998931884766 32.667999267578125,-42.71799850463867 32.667999267578125,-42.71799850463867 C32.667999267578125,-42.71799850463867 35.15299987792969,-41.891998291015625 35.15299987792969,-41.891998291015625 C35.15299987792969,-41.891998291015625 37.71099853515625,-41.02899932861328 37.71099853515625,-41.02899932861328 C37.71099853515625,-41.02899932861328 39.020999908447266,-40.57600021362305 39.020999908447266,-40.57600021362305 C42.66899871826172,-39.314998626708984 45.20899963378906,-36.01599884033203 45.4900016784668,-32.17900085449219 C46.5,-18.389999389648438 46.323001861572266,-5.997000217437744 44.95199966430664,4.988999843597412 C41.946998596191406,25.57699966430664 27.974000930786133,40.49800109863281 3.046999931335449,49.73899841308594 C3.046999931335449,49.73899841308594 1.8660000562667847,50.167999267578125 1.8660000562667847,50.167999267578125 C0.8130000233650208,50.55400085449219 -0.34299999475479126,50.55400085449219 -1.4019999504089355,50.167999267578125 C-27.052000045776367,40.9630012512207 -41.41600036621094,25.902000427246094 -44.487998962402344,4.988999843597412 C-45.749000549316406,-6.5229997634887695 -46,-18.12700080871582 -45.24100112915039,-29.68199920654297 C-45.24100112915039,-29.68199920654297 -45.06399917602539,-32.196998596191406 -45.06399917602539,-32.196998596191406 C-44.77000045776367,-36.01599884033203 -42.22999954223633,-39.303001403808594 -38.60100173950195,-40.55799865722656 C-38.60100173950195,-40.55799865722656 -36,-41.45100021362305 -36,-41.45100021362305 C-36,-41.45100021362305 -33.47200012207031,-42.301998138427734 -33.47200012207031,-42.301998138427734 C-33.47200012207031,-42.301998138427734 -31.01799964904785,-43.09700012207031 -31.01799964904785,-43.09700012207031 C-31.01799964904785,-43.09700012207031 -28.631000518798828,-43.85599899291992 -28.631000518798828,-43.85599899291992 C-28.631000518798828,-43.85599899291992 -26.323999404907227,-44.566001892089844 -26.323999404907227,-44.566001892089844 C-26.323999404907227,-44.566001892089844 -24.083999633789062,-45.233001708984375 -24.083999633789062,-45.233001708984375 C-24.083999633789062,-45.233001708984375 -22.988000869750977,-45.55799865722656 -22.988000869750977,-45.55799865722656 C-22.988000869750977,-45.55799865722656 -20.857999801635742,-46.1510009765625 -20.857999801635742,-46.1510009765625 C-20.857999801635742,-46.1510009765625 -19.823999404907227,-46.43899917602539 -19.823999404907227,-46.43899917602539 C-19.823999404907227,-46.43899917602539 -17.804000854492188,-46.97100067138672 -17.804000854492188,-46.97100067138672 C-17.804000854492188,-46.97100067138672 -15.85200023651123,-47.46099853515625 -15.85200023651123,-47.46099853515625 C-15.85200023651123,-47.46099853515625 -14.90999984741211,-47.6879997253418 -14.90999984741211,-47.6879997253418 C-14.90999984741211,-47.6879997253418 -13.067000389099121,-48.11000061035156 -13.067000389099121,-48.11000061035156 C-12.467000007629395,-48.244998931884766 -11.87399959564209,-48.37300109863281 -11.298999786376953,-48.48899841308594 C-11.298999786376953,-48.48899841308594 -9.602999687194824,-48.82600021362305 -9.602999687194824,-48.82600021362305 C-9.602999687194824,-48.82600021362305 -7.98199987411499,-49.11399841308594 -7.98199987411499,-49.11399841308594 C-4.806000232696533,-49.645999908447266 -2.069000005722046,-49.915000915527344 0.23800000548362732,-49.915000915527344 C2.5390000343322754,-49.915000915527344 5.281000137329102,-49.652000427246094 8.451000213623047,-49.119998931884766z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_143)"
                        fill-opacity="0.4"
                        d=" M8.451000213623047,-49.119998931884766 C8.451000213623047,-49.119998931884766 10.067000389099121,-48.82600021362305 10.067000389099121,-48.82600021362305 C10.067000389099121,-48.82600021362305 11.76200008392334,-48.494998931884766 11.76200008392334,-48.494998931884766 C12.625,-48.31800079345703 13.519000053405762,-48.12200164794922 14.437000274658203,-47.91400146484375 C14.437000274658203,-47.91400146484375 16.30900001525879,-47.46699905395508 16.30900001525879,-47.46699905395508 C16.30900001525879,-47.46699905395508 18.2549991607666,-46.97800064086914 18.2549991607666,-46.97800064086914 C18.2549991607666,-46.97800064086914 20.274999618530273,-46.44499969482422 20.274999618530273,-46.44499969482422 C20.274999618530273,-46.44499969482422 22.36199951171875,-45.869998931884766 22.36199951171875,-45.869998931884766 C22.36199951171875,-45.869998931884766 23.43899917602539,-45.56399917602539 23.43899917602539,-45.56399917602539 C23.43899917602539,-45.56399917602539 25.63599967956543,-44.92100143432617 25.63599967956543,-44.92100143432617 C25.63599967956543,-44.92100143432617 27.906999588012695,-44.22999954223633 27.906999588012695,-44.22999954223633 C27.906999588012695,-44.22999954223633 30.250999450683594,-43.494998931884766 30.250999450683594,-43.494998931884766 C30.250999450683594,-43.494998931884766 32.667999267578125,-42.71799850463867 32.667999267578125,-42.71799850463867 C32.667999267578125,-42.71799850463867 35.15299987792969,-41.891998291015625 35.15299987792969,-41.891998291015625 C35.15299987792969,-41.891998291015625 37.71099853515625,-41.02899932861328 37.71099853515625,-41.02899932861328 C37.71099853515625,-41.02899932861328 39.020999908447266,-40.57600021362305 39.020999908447266,-40.57600021362305 C42.66899871826172,-39.314998626708984 45.20899963378906,-36.01599884033203 45.4900016784668,-32.17900085449219 C46.5,-18.389999389648438 46.323001861572266,-5.997000217437744 44.95199966430664,4.988999843597412 C41.946998596191406,25.57699966430664 27.974000930786133,40.49800109863281 3.046999931335449,49.73899841308594 C3.046999931335449,49.73899841308594 1.8660000562667847,50.167999267578125 1.8660000562667847,50.167999267578125 C0.8130000233650208,50.55400085449219 -0.34299999475479126,50.55400085449219 -1.4019999504089355,50.167999267578125 C-27.052000045776367,40.9630012512207 -41.41600036621094,25.902000427246094 -44.487998962402344,4.988999843597412 C-45.749000549316406,-6.5229997634887695 -46,-18.12700080871582 -45.24100112915039,-29.68199920654297 C-45.24100112915039,-29.68199920654297 -45.06399917602539,-32.196998596191406 -45.06399917602539,-32.196998596191406 C-44.77000045776367,-36.01599884033203 -42.22999954223633,-39.303001403808594 -38.60100173950195,-40.55799865722656 C-38.60100173950195,-40.55799865722656 -36,-41.45100021362305 -36,-41.45100021362305 C-36,-41.45100021362305 -33.47200012207031,-42.301998138427734 -33.47200012207031,-42.301998138427734 C-33.47200012207031,-42.301998138427734 -31.01799964904785,-43.09700012207031 -31.01799964904785,-43.09700012207031 C-31.01799964904785,-43.09700012207031 -28.631000518798828,-43.85599899291992 -28.631000518798828,-43.85599899291992 C-28.631000518798828,-43.85599899291992 -26.323999404907227,-44.566001892089844 -26.323999404907227,-44.566001892089844 C-26.323999404907227,-44.566001892089844 -24.083999633789062,-45.233001708984375 -24.083999633789062,-45.233001708984375 C-24.083999633789062,-45.233001708984375 -22.988000869750977,-45.55799865722656 -22.988000869750977,-45.55799865722656 C-22.988000869750977,-45.55799865722656 -20.857999801635742,-46.1510009765625 -20.857999801635742,-46.1510009765625 C-20.857999801635742,-46.1510009765625 -19.823999404907227,-46.43899917602539 -19.823999404907227,-46.43899917602539 C-19.823999404907227,-46.43899917602539 -17.804000854492188,-46.97100067138672 -17.804000854492188,-46.97100067138672 C-17.804000854492188,-46.97100067138672 -15.85200023651123,-47.46099853515625 -15.85200023651123,-47.46099853515625 C-15.85200023651123,-47.46099853515625 -14.90999984741211,-47.6879997253418 -14.90999984741211,-47.6879997253418 C-14.90999984741211,-47.6879997253418 -13.067000389099121,-48.11000061035156 -13.067000389099121,-48.11000061035156 C-12.467000007629395,-48.244998931884766 -11.87399959564209,-48.37300109863281 -11.298999786376953,-48.48899841308594 C-11.298999786376953,-48.48899841308594 -9.602999687194824,-48.82600021362305 -9.602999687194824,-48.82600021362305 C-9.602999687194824,-48.82600021362305 -7.98199987411499,-49.11399841308594 -7.98199987411499,-49.11399841308594 C-4.806000232696533,-49.645999908447266 -2.069000005722046,-49.915000915527344 0.23800000548362732,-49.915000915527344 C2.5390000343322754,-49.915000915527344 5.281000137329102,-49.652000427246094 8.451000213623047,-49.119998931884766z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_144)"
                        fill-opacity="0.8"
                        d=" M8.451000213623047,-49.119998931884766 C8.451000213623047,-49.119998931884766 10.067000389099121,-48.82600021362305 10.067000389099121,-48.82600021362305 C10.067000389099121,-48.82600021362305 11.76200008392334,-48.494998931884766 11.76200008392334,-48.494998931884766 C12.625,-48.31800079345703 13.519000053405762,-48.12200164794922 14.437000274658203,-47.91400146484375 C14.437000274658203,-47.91400146484375 16.30900001525879,-47.46699905395508 16.30900001525879,-47.46699905395508 C16.30900001525879,-47.46699905395508 18.2549991607666,-46.97800064086914 18.2549991607666,-46.97800064086914 C18.2549991607666,-46.97800064086914 20.274999618530273,-46.44499969482422 20.274999618530273,-46.44499969482422 C20.274999618530273,-46.44499969482422 22.36199951171875,-45.869998931884766 22.36199951171875,-45.869998931884766 C22.36199951171875,-45.869998931884766 23.43899917602539,-45.56399917602539 23.43899917602539,-45.56399917602539 C23.43899917602539,-45.56399917602539 25.63599967956543,-44.92100143432617 25.63599967956543,-44.92100143432617 C25.63599967956543,-44.92100143432617 27.906999588012695,-44.22999954223633 27.906999588012695,-44.22999954223633 C27.906999588012695,-44.22999954223633 30.250999450683594,-43.494998931884766 30.250999450683594,-43.494998931884766 C30.250999450683594,-43.494998931884766 32.667999267578125,-42.71799850463867 32.667999267578125,-42.71799850463867 C32.667999267578125,-42.71799850463867 35.15299987792969,-41.891998291015625 35.15299987792969,-41.891998291015625 C35.15299987792969,-41.891998291015625 37.71099853515625,-41.02899932861328 37.71099853515625,-41.02899932861328 C37.71099853515625,-41.02899932861328 39.020999908447266,-40.57600021362305 39.020999908447266,-40.57600021362305 C42.66899871826172,-39.314998626708984 45.20899963378906,-36.01599884033203 45.4900016784668,-32.17900085449219 C46.5,-18.389999389648438 46.323001861572266,-5.997000217437744 44.95199966430664,4.988999843597412 C41.946998596191406,25.57699966430664 27.974000930786133,40.49800109863281 3.046999931335449,49.73899841308594 C3.046999931335449,49.73899841308594 1.8660000562667847,50.167999267578125 1.8660000562667847,50.167999267578125 C0.8130000233650208,50.55400085449219 -0.34299999475479126,50.55400085449219 -1.4019999504089355,50.167999267578125 C-27.052000045776367,40.9630012512207 -41.41600036621094,25.902000427246094 -44.487998962402344,4.988999843597412 C-45.749000549316406,-6.5229997634887695 -46,-18.12700080871582 -45.24100112915039,-29.68199920654297 C-45.24100112915039,-29.68199920654297 -45.06399917602539,-32.196998596191406 -45.06399917602539,-32.196998596191406 C-44.77000045776367,-36.01599884033203 -42.22999954223633,-39.303001403808594 -38.60100173950195,-40.55799865722656 C-38.60100173950195,-40.55799865722656 -36,-41.45100021362305 -36,-41.45100021362305 C-36,-41.45100021362305 -33.47200012207031,-42.301998138427734 -33.47200012207031,-42.301998138427734 C-33.47200012207031,-42.301998138427734 -31.01799964904785,-43.09700012207031 -31.01799964904785,-43.09700012207031 C-31.01799964904785,-43.09700012207031 -28.631000518798828,-43.85599899291992 -28.631000518798828,-43.85599899291992 C-28.631000518798828,-43.85599899291992 -26.323999404907227,-44.566001892089844 -26.323999404907227,-44.566001892089844 C-26.323999404907227,-44.566001892089844 -24.083999633789062,-45.233001708984375 -24.083999633789062,-45.233001708984375 C-24.083999633789062,-45.233001708984375 -22.988000869750977,-45.55799865722656 -22.988000869750977,-45.55799865722656 C-22.988000869750977,-45.55799865722656 -20.857999801635742,-46.1510009765625 -20.857999801635742,-46.1510009765625 C-20.857999801635742,-46.1510009765625 -19.823999404907227,-46.43899917602539 -19.823999404907227,-46.43899917602539 C-19.823999404907227,-46.43899917602539 -17.804000854492188,-46.97100067138672 -17.804000854492188,-46.97100067138672 C-17.804000854492188,-46.97100067138672 -15.85200023651123,-47.46099853515625 -15.85200023651123,-47.46099853515625 C-15.85200023651123,-47.46099853515625 -14.90999984741211,-47.6879997253418 -14.90999984741211,-47.6879997253418 C-14.90999984741211,-47.6879997253418 -13.067000389099121,-48.11000061035156 -13.067000389099121,-48.11000061035156 C-12.467000007629395,-48.244998931884766 -11.87399959564209,-48.37300109863281 -11.298999786376953,-48.48899841308594 C-11.298999786376953,-48.48899841308594 -9.602999687194824,-48.82600021362305 -9.602999687194824,-48.82600021362305 C-9.602999687194824,-48.82600021362305 -7.98199987411499,-49.11399841308594 -7.98199987411499,-49.11399841308594 C-4.806000232696533,-49.645999908447266 -2.069000005722046,-49.915000915527344 0.23800000548362732,-49.915000915527344 C2.5390000343322754,-49.915000915527344 5.281000137329102,-49.652000427246094 8.451000213623047,-49.119998931884766z"
                      ></path>
                      <path
                        stroke="url(#__lottie_element_145)"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M8.451000213623047,-49.119998931884766 C8.451000213623047,-49.119998931884766 10.067000389099121,-48.82600021362305 10.067000389099121,-48.82600021362305 C10.067000389099121,-48.82600021362305 11.76200008392334,-48.494998931884766 11.76200008392334,-48.494998931884766 C12.625,-48.31800079345703 13.519000053405762,-48.12200164794922 14.437000274658203,-47.91400146484375 C14.437000274658203,-47.91400146484375 16.30900001525879,-47.46699905395508 16.30900001525879,-47.46699905395508 C16.30900001525879,-47.46699905395508 18.2549991607666,-46.97800064086914 18.2549991607666,-46.97800064086914 C18.2549991607666,-46.97800064086914 20.274999618530273,-46.44499969482422 20.274999618530273,-46.44499969482422 C20.274999618530273,-46.44499969482422 22.36199951171875,-45.869998931884766 22.36199951171875,-45.869998931884766 C22.36199951171875,-45.869998931884766 23.43899917602539,-45.56399917602539 23.43899917602539,-45.56399917602539 C23.43899917602539,-45.56399917602539 25.63599967956543,-44.92100143432617 25.63599967956543,-44.92100143432617 C25.63599967956543,-44.92100143432617 27.906999588012695,-44.22999954223633 27.906999588012695,-44.22999954223633 C27.906999588012695,-44.22999954223633 30.250999450683594,-43.494998931884766 30.250999450683594,-43.494998931884766 C30.250999450683594,-43.494998931884766 32.667999267578125,-42.71799850463867 32.667999267578125,-42.71799850463867 C32.667999267578125,-42.71799850463867 35.15299987792969,-41.891998291015625 35.15299987792969,-41.891998291015625 C35.15299987792969,-41.891998291015625 37.71099853515625,-41.02899932861328 37.71099853515625,-41.02899932861328 C37.71099853515625,-41.02899932861328 39.020999908447266,-40.57600021362305 39.020999908447266,-40.57600021362305 C42.66899871826172,-39.314998626708984 45.20899963378906,-36.01599884033203 45.4900016784668,-32.17900085449219 C46.5,-18.389999389648438 46.323001861572266,-5.997000217437744 44.95199966430664,4.988999843597412 C41.946998596191406,25.57699966430664 27.974000930786133,40.49800109863281 3.046999931335449,49.73899841308594 C3.046999931335449,49.73899841308594 1.8660000562667847,50.167999267578125 1.8660000562667847,50.167999267578125 C0.8130000233650208,50.55400085449219 -0.34299999475479126,50.55400085449219 -1.4019999504089355,50.167999267578125 C-27.052000045776367,40.9630012512207 -41.41600036621094,25.902000427246094 -44.487998962402344,4.988999843597412 C-45.749000549316406,-6.5229997634887695 -46,-18.12700080871582 -45.24100112915039,-29.68199920654297 C-45.24100112915039,-29.68199920654297 -45.06399917602539,-32.196998596191406 -45.06399917602539,-32.196998596191406 C-44.77000045776367,-36.01599884033203 -42.22999954223633,-39.303001403808594 -38.60100173950195,-40.55799865722656 C-38.60100173950195,-40.55799865722656 -36,-41.45100021362305 -36,-41.45100021362305 C-36,-41.45100021362305 -33.47200012207031,-42.301998138427734 -33.47200012207031,-42.301998138427734 C-33.47200012207031,-42.301998138427734 -31.01799964904785,-43.09700012207031 -31.01799964904785,-43.09700012207031 C-31.01799964904785,-43.09700012207031 -28.631000518798828,-43.85599899291992 -28.631000518798828,-43.85599899291992 C-28.631000518798828,-43.85599899291992 -26.323999404907227,-44.566001892089844 -26.323999404907227,-44.566001892089844 C-26.323999404907227,-44.566001892089844 -24.083999633789062,-45.233001708984375 -24.083999633789062,-45.233001708984375 C-24.083999633789062,-45.233001708984375 -22.988000869750977,-45.55799865722656 -22.988000869750977,-45.55799865722656 C-22.988000869750977,-45.55799865722656 -20.857999801635742,-46.1510009765625 -20.857999801635742,-46.1510009765625 C-20.857999801635742,-46.1510009765625 -19.823999404907227,-46.43899917602539 -19.823999404907227,-46.43899917602539 C-19.823999404907227,-46.43899917602539 -17.804000854492188,-46.97100067138672 -17.804000854492188,-46.97100067138672 C-17.804000854492188,-46.97100067138672 -15.85200023651123,-47.46099853515625 -15.85200023651123,-47.46099853515625 C-15.85200023651123,-47.46099853515625 -14.90999984741211,-47.6879997253418 -14.90999984741211,-47.6879997253418 C-14.90999984741211,-47.6879997253418 -13.067000389099121,-48.11000061035156 -13.067000389099121,-48.11000061035156 C-12.467000007629395,-48.244998931884766 -11.87399959564209,-48.37300109863281 -11.298999786376953,-48.48899841308594 C-11.298999786376953,-48.48899841308594 -9.602999687194824,-48.82600021362305 -9.602999687194824,-48.82600021362305 C-9.602999687194824,-48.82600021362305 -7.98199987411499,-49.11399841308594 -7.98199987411499,-49.11399841308594 C-4.806000232696533,-49.645999908447266 -2.069000005722046,-49.915000915527344 0.23800000548362732,-49.915000915527344 C2.5390000343322754,-49.915000915527344 5.281000137329102,-49.652000427246094 8.451000213623047,-49.119998931884766z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(0.8999999761581421,0,0,0.8999999761581421,866.1500244140625,288.54998779296875)"
                    opacity="1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(0,127,255)"
                        fill-opacity="0.56"
                        d=" M10.199999809265137,-61.5099983215332 C10.199999809265137,-61.5099983215332 12.220000267028809,-61.150001525878906 12.220000267028809,-61.150001525878906 C12.220000267028809,-61.150001525878906 14.319999694824219,-60.72999954223633 14.319999694824219,-60.72999954223633 C15.390000343322754,-60.5099983215332 16.5,-60.27000045776367 17.639999389648438,-60 C17.639999389648438,-60 19.969999313354492,-59.45000076293945 19.969999313354492,-59.45000076293945 C19.969999313354492,-59.45000076293945 22.3799991607666,-58.84000015258789 22.3799991607666,-58.84000015258789 C22.3799991607666,-58.84000015258789 24.889999389648438,-58.18000030517578 24.889999389648438,-58.18000030517578 C24.889999389648438,-58.18000030517578 27.489999771118164,-57.459999084472656 27.489999771118164,-57.459999084472656 C27.489999771118164,-57.459999084472656 28.81999969482422,-57.08000183105469 28.81999969482422,-57.08000183105469 C28.81999969482422,-57.08000183105469 31.549999237060547,-56.279998779296875 31.549999237060547,-56.279998779296875 C31.549999237060547,-56.279998779296875 34.369998931884766,-55.41999816894531 34.369998931884766,-55.41999816894531 C34.369998931884766,-55.41999816894531 37.279998779296875,-54.5099983215332 37.279998779296875,-54.5099983215332 C37.279998779296875,-54.5099983215332 40.279998779296875,-53.540000915527344 40.279998779296875,-53.540000915527344 C40.279998779296875,-53.540000915527344 43.369998931884766,-52.5099983215332 43.369998931884766,-52.5099983215332 C43.369998931884766,-52.5099983215332 46.54999923706055,-51.43000030517578 46.54999923706055,-51.43000030517578 C46.54999923706055,-51.43000030517578 48.16999816894531,-50.869998931884766 48.16999816894531,-50.869998931884766 C52.70000076293945,-49.29999923706055 55.849998474121094,-45.189998626708984 56.20000076293945,-40.40999984741211 C57.45000076293945,-23.239999771118164 57.22999954223633,-7.809999942779541 55.540000915527344,5.880000114440918 C51.79999923706055,31.520000457763672 34.45000076293945,50.099998474121094 3.490000009536743,61.61000061035156 C3.490000009536743,61.61000061035156 2.0299999713897705,62.150001525878906 2.0299999713897705,62.150001525878906 C0.7200000286102295,62.619998931884766 -0.7200000286102295,62.619998931884766 -2.0299999713897705,62.150001525878906 C-33.880001068115234,50.68000030517578 -51.720001220703125,31.920000076293945 -55.540000915527344,5.880000114440918 C-57.099998474121094,-8.460000038146973 -57.40999984741211,-22.90999984741211 -56.470001220703125,-37.29999923706055 C-56.470001220703125,-37.29999923706055 -56.25,-40.43000030517578 -56.25,-40.43000030517578 C-55.88999938964844,-45.189998626708984 -52.72999954223633,-49.279998779296875 -48.220001220703125,-50.849998474121094 C-48.220001220703125,-50.849998474121094 -44.9900016784668,-51.959999084472656 -44.9900016784668,-51.959999084472656 C-44.9900016784668,-51.959999084472656 -41.849998474121094,-53.02000045776367 -41.849998474121094,-53.02000045776367 C-41.849998474121094,-53.02000045776367 -38.79999923706055,-54.0099983215332 -38.79999923706055,-54.0099983215332 C-38.79999923706055,-54.0099983215332 -35.84000015258789,-54.95000076293945 -35.84000015258789,-54.95000076293945 C-35.84000015258789,-54.95000076293945 -32.97999954223633,-55.84000015258789 -32.97999954223633,-55.84000015258789 C-32.97999954223633,-55.84000015258789 -30.190000534057617,-56.66999816894531 -30.190000534057617,-56.66999816894531 C-30.190000534057617,-56.66999816894531 -28.84000015258789,-57.06999969482422 -28.84000015258789,-57.06999969482422 C-28.84000015258789,-57.06999969482422 -26.190000534057617,-57.81999969482422 -26.190000534057617,-57.81999969482422 C-26.190000534057617,-57.81999969482422 -24.899999618530273,-58.16999816894531 -24.899999618530273,-58.16999816894531 C-24.899999618530273,-58.16999816894531 -22.399999618530273,-58.83000183105469 -22.399999618530273,-58.83000183105469 C-22.399999618530273,-58.83000183105469 -19.969999313354492,-59.439998626708984 -19.969999313354492,-59.439998626708984 C-19.969999313354492,-59.439998626708984 -18.799999237060547,-59.72999954223633 -18.799999237060547,-59.72999954223633 C-18.799999237060547,-59.72999954223633 -16.510000228881836,-60.25 -16.510000228881836,-60.25 C-15.770000457763672,-60.41999816894531 -15.029999732971191,-60.58000183105469 -14.319999694824219,-60.720001220703125 C-14.319999694824219,-60.720001220703125 -12.210000038146973,-61.13999938964844 -12.210000038146973,-61.13999938964844 C-12.210000038146973,-61.13999938964844 -10.199999809265137,-61.5 -10.199999809265137,-61.5 C-6.25,-62.16999816894531 -2.8499999046325684,-62.5 0.009999999776482582,-62.5 C2.869999885559082,-62.5 6.269999980926514,-62.16999816894531 10.199999809265137,-61.5099983215332z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_139)"
                        fill-opacity="0.7000000000000001"
                        d=" M10.199999809265137,-61.5099983215332 C10.199999809265137,-61.5099983215332 12.220000267028809,-61.150001525878906 12.220000267028809,-61.150001525878906 C12.220000267028809,-61.150001525878906 14.319999694824219,-60.72999954223633 14.319999694824219,-60.72999954223633 C15.390000343322754,-60.5099983215332 16.5,-60.27000045776367 17.639999389648438,-60 C17.639999389648438,-60 19.969999313354492,-59.45000076293945 19.969999313354492,-59.45000076293945 C19.969999313354492,-59.45000076293945 22.3799991607666,-58.84000015258789 22.3799991607666,-58.84000015258789 C22.3799991607666,-58.84000015258789 24.889999389648438,-58.18000030517578 24.889999389648438,-58.18000030517578 C24.889999389648438,-58.18000030517578 27.489999771118164,-57.459999084472656 27.489999771118164,-57.459999084472656 C27.489999771118164,-57.459999084472656 28.81999969482422,-57.08000183105469 28.81999969482422,-57.08000183105469 C28.81999969482422,-57.08000183105469 31.549999237060547,-56.279998779296875 31.549999237060547,-56.279998779296875 C31.549999237060547,-56.279998779296875 34.369998931884766,-55.41999816894531 34.369998931884766,-55.41999816894531 C34.369998931884766,-55.41999816894531 37.279998779296875,-54.5099983215332 37.279998779296875,-54.5099983215332 C37.279998779296875,-54.5099983215332 40.279998779296875,-53.540000915527344 40.279998779296875,-53.540000915527344 C40.279998779296875,-53.540000915527344 43.369998931884766,-52.5099983215332 43.369998931884766,-52.5099983215332 C43.369998931884766,-52.5099983215332 46.54999923706055,-51.43000030517578 46.54999923706055,-51.43000030517578 C46.54999923706055,-51.43000030517578 48.16999816894531,-50.869998931884766 48.16999816894531,-50.869998931884766 C52.70000076293945,-49.29999923706055 55.849998474121094,-45.189998626708984 56.20000076293945,-40.40999984741211 C57.45000076293945,-23.239999771118164 57.22999954223633,-7.809999942779541 55.540000915527344,5.880000114440918 C51.79999923706055,31.520000457763672 34.45000076293945,50.099998474121094 3.490000009536743,61.61000061035156 C3.490000009536743,61.61000061035156 2.0299999713897705,62.150001525878906 2.0299999713897705,62.150001525878906 C0.7200000286102295,62.619998931884766 -0.7200000286102295,62.619998931884766 -2.0299999713897705,62.150001525878906 C-33.880001068115234,50.68000030517578 -51.720001220703125,31.920000076293945 -55.540000915527344,5.880000114440918 C-57.099998474121094,-8.460000038146973 -57.40999984741211,-22.90999984741211 -56.470001220703125,-37.29999923706055 C-56.470001220703125,-37.29999923706055 -56.25,-40.43000030517578 -56.25,-40.43000030517578 C-55.88999938964844,-45.189998626708984 -52.72999954223633,-49.279998779296875 -48.220001220703125,-50.849998474121094 C-48.220001220703125,-50.849998474121094 -44.9900016784668,-51.959999084472656 -44.9900016784668,-51.959999084472656 C-44.9900016784668,-51.959999084472656 -41.849998474121094,-53.02000045776367 -41.849998474121094,-53.02000045776367 C-41.849998474121094,-53.02000045776367 -38.79999923706055,-54.0099983215332 -38.79999923706055,-54.0099983215332 C-38.79999923706055,-54.0099983215332 -35.84000015258789,-54.95000076293945 -35.84000015258789,-54.95000076293945 C-35.84000015258789,-54.95000076293945 -32.97999954223633,-55.84000015258789 -32.97999954223633,-55.84000015258789 C-32.97999954223633,-55.84000015258789 -30.190000534057617,-56.66999816894531 -30.190000534057617,-56.66999816894531 C-30.190000534057617,-56.66999816894531 -28.84000015258789,-57.06999969482422 -28.84000015258789,-57.06999969482422 C-28.84000015258789,-57.06999969482422 -26.190000534057617,-57.81999969482422 -26.190000534057617,-57.81999969482422 C-26.190000534057617,-57.81999969482422 -24.899999618530273,-58.16999816894531 -24.899999618530273,-58.16999816894531 C-24.899999618530273,-58.16999816894531 -22.399999618530273,-58.83000183105469 -22.399999618530273,-58.83000183105469 C-22.399999618530273,-58.83000183105469 -19.969999313354492,-59.439998626708984 -19.969999313354492,-59.439998626708984 C-19.969999313354492,-59.439998626708984 -18.799999237060547,-59.72999954223633 -18.799999237060547,-59.72999954223633 C-18.799999237060547,-59.72999954223633 -16.510000228881836,-60.25 -16.510000228881836,-60.25 C-15.770000457763672,-60.41999816894531 -15.029999732971191,-60.58000183105469 -14.319999694824219,-60.720001220703125 C-14.319999694824219,-60.720001220703125 -12.210000038146973,-61.13999938964844 -12.210000038146973,-61.13999938964844 C-12.210000038146973,-61.13999938964844 -10.199999809265137,-61.5 -10.199999809265137,-61.5 C-6.25,-62.16999816894531 -2.8499999046325684,-62.5 0.009999999776482582,-62.5 C2.869999885559082,-62.5 6.269999980926514,-62.16999816894531 10.199999809265137,-61.5099983215332z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(0.8999999761581421,0,0,0.8999999761581421,866.1500244140625,288.54998779296875)"
                    opacity="1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(221,225,230)"
                        fill-opacity="0.8"
                        d=" M0.010999999940395355,-51.10599899291992 C-0.5590000152587891,-51.10599899291992 -1.1690000295639038,-51.08599853515625 -1.7990000247955322,-51.055999755859375 C-1.7990000247955322,-51.055999755859375 -3.11899995803833,-50.95600128173828 -3.11899995803833,-50.95600128173828 C-3.569000005722046,-50.91600036621094 -4.039000034332275,-50.875999450683594 -4.519000053405762,-50.816001892089844 C-4.519000053405762,-50.816001892089844 -6.019000053405762,-50.625999450683594 -6.019000053405762,-50.625999450683594 C-6.5289998054504395,-50.555999755859375 -7.059000015258789,-50.47600173950195 -7.598999977111816,-50.38600158691406 C-7.598999977111816,-50.38600158691406 -9.269000053405762,-50.10599899291992 -9.269000053405762,-50.10599899291992 C-9.559000015258789,-50.055999755859375 -9.83899974822998,-49.99599838256836 -10.138999938964844,-49.94599914550781 C-10.138999938964844,-49.94599914550781 -11.939000129699707,-49.58599853515625 -11.939000129699707,-49.58599853515625 C-11.939000129699707,-49.58599853515625 -13.819000244140625,-49.18600082397461 -13.819000244140625,-49.18600082397461 C-13.819000244140625,-49.18600082397461 -14.798999786376953,-48.965999603271484 -14.798999786376953,-48.965999603271484 C-14.798999786376953,-48.965999603271484 -16.80900001525879,-48.486000061035156 -16.80900001525879,-48.486000061035156 C-16.80900001525879,-48.486000061035156 -18.909000396728516,-47.965999603271484 -18.909000396728516,-47.965999603271484 C-18.909000396728516,-47.965999603271484 -21.099000930786133,-47.395999908447266 -21.099000930786133,-47.395999908447266 C-21.099000930786133,-47.395999908447266 -23.358999252319336,-46.7760009765625 -23.358999252319336,-46.7760009765625 C-23.358999252319336,-46.7760009765625 -25.7189998626709,-46.10599899291992 -25.7189998626709,-46.10599899291992 C-25.7189998626709,-46.10599899291992 -28.14900016784668,-45.395999908447266 -28.14900016784668,-45.395999908447266 C-28.14900016784668,-45.395999908447266 -30.66900062561035,-44.625999450683594 -30.66900062561035,-44.625999450683594 C-30.66900062561035,-44.625999450683594 -31.958999633789062,-44.22600173950195 -31.958999633789062,-44.22600173950195 C-31.958999633789062,-44.22600173950195 -34.5989990234375,-43.395999908447266 -34.5989990234375,-43.395999908447266 C-34.5989990234375,-43.395999908447266 -37.319000244140625,-42.50600051879883 -37.319000244140625,-42.50600051879883 C-37.319000244140625,-42.50600051879883 -40.12900161743164,-41.57600021362305 -40.12900161743164,-41.57600021362305 C-40.12900161743164,-41.57600021362305 -43.00899887084961,-40.59600067138672 -43.00899887084961,-40.59600067138672 C-43.00899887084961,-40.59600067138672 -44.479000091552734,-40.08599853515625 -44.479000091552734,-40.08599853515625 C-44.638999938964844,-40.0359992980957 -44.76900100708008,-39.91600036621094 -44.8390007019043,-39.76599884033203 C-44.8390007019043,-39.76599884033203 -44.87900161743164,-39.63600158691406 -44.87900161743164,-39.63600158691406 C-44.87900161743164,-39.63600158691406 -45.0890007019043,-36.57600021362305 -45.0890007019043,-36.57600021362305 C-45.91899871826172,-23.88599967956543 -45.729000091552734,-11.145999908447266 -44.52899932861328,1.503999948501587 C-44.52899932861328,1.503999948501587 -44.229000091552734,4.394000053405762 -44.229000091552734,4.394000053405762 C-44.229000091552734,4.394000053405762 -44.0890007019043,5.283999919891357 -44.0890007019043,5.283999919891357 C-40.729000091552734,25.554000854492188 -26.839000701904297,40.433998107910156 -0.8989999890327454,50.41400146484375 C-0.8989999890327454,50.41400146484375 0.0010000000474974513,50.74399948120117 0.0010000000474974513,50.74399948120117 C0.0010000000474974513,50.74399948120117 0.8709999918937683,50.41400146484375 0.8709999918937683,50.41400146484375 C26.85099983215332,40.433998107910156 40.74100112915039,25.573999404907227 44.06100082397461,5.513999938964844 C44.06100082397461,5.513999938964844 44.22100067138672,4.473999977111816 44.22100067138672,4.473999977111816 C45.82099914550781,-8.425999641418457 46.03099822998047,-23.115999221801758 44.83100128173828,-39.58599853515625 C44.81100082397461,-39.82600021362305 44.6510009765625,-40.0260009765625 44.430999755859375,-40.10599899291992 C44.430999755859375,-40.10599899291992 41.51100158691406,-41.11600112915039 41.51100158691406,-41.11600112915039 C41.51100158691406,-41.11600112915039 38.67100143432617,-42.066001892089844 38.67100143432617,-42.066001892089844 C38.67100143432617,-42.066001892089844 35.9109992980957,-42.97600173950195 35.9109992980957,-42.97600173950195 C35.9109992980957,-42.97600173950195 33.23099899291992,-43.82600021362305 33.23099899291992,-43.82600021362305 C33.23099899291992,-43.82600021362305 30.641000747680664,-44.63600158691406 30.641000747680664,-44.63600158691406 C30.641000747680664,-44.63600158691406 28.131000518798828,-45.40599822998047 28.131000518798828,-45.40599822998047 C28.131000518798828,-45.40599822998047 25.69099998474121,-46.11600112915039 25.69099998474121,-46.11600112915039 C25.69099998474121,-46.11600112915039 23.35099983215332,-46.7760009765625 23.35099983215332,-46.7760009765625 C23.35099983215332,-46.7760009765625 21.08099937438965,-47.395999908447266 21.08099937438965,-47.395999908447266 C21.08099937438965,-47.395999908447266 18.900999069213867,-47.965999603271484 18.900999069213867,-47.965999603271484 C18.551000595092773,-48.055999755859375 18.201000213623047,-48.145999908447266 17.840999603271484,-48.236000061035156 C17.840999603271484,-48.236000061035156 15.791000366210938,-48.736000061035156 15.791000366210938,-48.736000061035156 C15.791000366210938,-48.736000061035156 13.821000099182129,-49.18600082397461 13.821000099182129,-49.18600082397461 C13.821000099182129,-49.18600082397461 11.940999984741211,-49.58599853515625 11.940999984741211,-49.58599853515625 C11.940999984741211,-49.58599853515625 10.140999794006348,-49.94599914550781 10.140999794006348,-49.94599914550781 C9.571000099182129,-50.055999755859375 9.00100040435791,-50.15599822998047 8.430999755859375,-50.25600051879883 C8.430999755859375,-50.25600051879883 6.810999870300293,-50.51599884033203 6.810999870300293,-50.51599884033203 C6.810999870300293,-50.51599884033203 5.270999908447266,-50.72600173950195 5.270999908447266,-50.72600173950195 C4.520999908447266,-50.82600021362305 3.811000108718872,-50.895999908447266 3.13100004196167,-50.95600128173828 C3.13100004196167,-50.95600128173828 1.8209999799728394,-51.055999755859375 1.8209999799728394,-51.055999755859375 C1.2109999656677246,-51.08599853515625 0.6110000014305115,-51.10599899291992 0.010999999940395355,-51.10599899291992z M10.199999809265137,-61.5099983215332 C10.199999809265137,-61.5099983215332 12.220000267028809,-61.150001525878906 12.220000267028809,-61.150001525878906 C12.220000267028809,-61.150001525878906 14.319999694824219,-60.72999954223633 14.319999694824219,-60.72999954223633 C15.390000343322754,-60.5099983215332 16.5,-60.27000045776367 17.639999389648438,-60 C17.639999389648438,-60 19.969999313354492,-59.45000076293945 19.969999313354492,-59.45000076293945 C19.969999313354492,-59.45000076293945 22.3799991607666,-58.84000015258789 22.3799991607666,-58.84000015258789 C22.3799991607666,-58.84000015258789 24.889999389648438,-58.18000030517578 24.889999389648438,-58.18000030517578 C24.889999389648438,-58.18000030517578 27.489999771118164,-57.459999084472656 27.489999771118164,-57.459999084472656 C27.489999771118164,-57.459999084472656 28.81999969482422,-57.08000183105469 28.81999969482422,-57.08000183105469 C28.81999969482422,-57.08000183105469 31.549999237060547,-56.279998779296875 31.549999237060547,-56.279998779296875 C31.549999237060547,-56.279998779296875 34.369998931884766,-55.41999816894531 34.369998931884766,-55.41999816894531 C34.369998931884766,-55.41999816894531 37.279998779296875,-54.5099983215332 37.279998779296875,-54.5099983215332 C37.279998779296875,-54.5099983215332 40.279998779296875,-53.540000915527344 40.279998779296875,-53.540000915527344 C40.279998779296875,-53.540000915527344 43.369998931884766,-52.5099983215332 43.369998931884766,-52.5099983215332 C43.369998931884766,-52.5099983215332 46.54999923706055,-51.43000030517578 46.54999923706055,-51.43000030517578 C46.54999923706055,-51.43000030517578 48.16999816894531,-50.869998931884766 48.16999816894531,-50.869998931884766 C52.70000076293945,-49.29999923706055 55.849998474121094,-45.189998626708984 56.20000076293945,-40.40999984741211 C57.45000076293945,-23.239999771118164 57.22999954223633,-7.809999942779541 55.540000915527344,5.880000114440918 C51.79999923706055,31.520000457763672 34.45000076293945,50.099998474121094 3.490000009536743,61.61000061035156 C3.490000009536743,61.61000061035156 2.0299999713897705,62.150001525878906 2.0299999713897705,62.150001525878906 C0.7200000286102295,62.619998931884766 -0.7200000286102295,62.619998931884766 -2.0299999713897705,62.150001525878906 C-33.880001068115234,50.68000030517578 -51.720001220703125,31.920000076293945 -55.540000915527344,5.880000114440918 C-57.099998474121094,-8.460000038146973 -57.40999984741211,-22.90999984741211 -56.470001220703125,-37.29999923706055 C-56.470001220703125,-37.29999923706055 -56.25,-40.43000030517578 -56.25,-40.43000030517578 C-55.88999938964844,-45.189998626708984 -52.72999954223633,-49.279998779296875 -48.220001220703125,-50.849998474121094 C-48.220001220703125,-50.849998474121094 -44.9900016784668,-51.959999084472656 -44.9900016784668,-51.959999084472656 C-44.9900016784668,-51.959999084472656 -41.849998474121094,-53.02000045776367 -41.849998474121094,-53.02000045776367 C-41.849998474121094,-53.02000045776367 -38.79999923706055,-54.0099983215332 -38.79999923706055,-54.0099983215332 C-38.79999923706055,-54.0099983215332 -35.84000015258789,-54.95000076293945 -35.84000015258789,-54.95000076293945 C-35.84000015258789,-54.95000076293945 -32.97999954223633,-55.84000015258789 -32.97999954223633,-55.84000015258789 C-32.97999954223633,-55.84000015258789 -30.190000534057617,-56.66999816894531 -30.190000534057617,-56.66999816894531 C-30.190000534057617,-56.66999816894531 -28.84000015258789,-57.06999969482422 -28.84000015258789,-57.06999969482422 C-28.84000015258789,-57.06999969482422 -26.190000534057617,-57.81999969482422 -26.190000534057617,-57.81999969482422 C-26.190000534057617,-57.81999969482422 -24.899999618530273,-58.16999816894531 -24.899999618530273,-58.16999816894531 C-24.899999618530273,-58.16999816894531 -22.399999618530273,-58.83000183105469 -22.399999618530273,-58.83000183105469 C-22.399999618530273,-58.83000183105469 -19.969999313354492,-59.439998626708984 -19.969999313354492,-59.439998626708984 C-19.969999313354492,-59.439998626708984 -18.799999237060547,-59.72999954223633 -18.799999237060547,-59.72999954223633 C-18.799999237060547,-59.72999954223633 -16.510000228881836,-60.25 -16.510000228881836,-60.25 C-15.770000457763672,-60.41999816894531 -15.029999732971191,-60.58000183105469 -14.319999694824219,-60.720001220703125 C-14.319999694824219,-60.720001220703125 -12.210000038146973,-61.13999938964844 -12.210000038146973,-61.13999938964844 C-12.210000038146973,-61.13999938964844 -10.199999809265137,-61.5 -10.199999809265137,-61.5 C-6.25,-62.16999816894531 -2.8499999046325684,-62.5 0.009999999776482582,-62.5 C2.869999885559082,-62.5 6.269999980926514,-62.16999816894531 10.199999809265137,-61.5099983215332z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_134)"
                        fill-opacity="0.8"
                        d=" M0.010999999940395355,-51.10599899291992 C-0.5590000152587891,-51.10599899291992 -1.1690000295639038,-51.08599853515625 -1.7990000247955322,-51.055999755859375 C-1.7990000247955322,-51.055999755859375 -3.11899995803833,-50.95600128173828 -3.11899995803833,-50.95600128173828 C-3.569000005722046,-50.91600036621094 -4.039000034332275,-50.875999450683594 -4.519000053405762,-50.816001892089844 C-4.519000053405762,-50.816001892089844 -6.019000053405762,-50.625999450683594 -6.019000053405762,-50.625999450683594 C-6.5289998054504395,-50.555999755859375 -7.059000015258789,-50.47600173950195 -7.598999977111816,-50.38600158691406 C-7.598999977111816,-50.38600158691406 -9.269000053405762,-50.10599899291992 -9.269000053405762,-50.10599899291992 C-9.559000015258789,-50.055999755859375 -9.83899974822998,-49.99599838256836 -10.138999938964844,-49.94599914550781 C-10.138999938964844,-49.94599914550781 -11.939000129699707,-49.58599853515625 -11.939000129699707,-49.58599853515625 C-11.939000129699707,-49.58599853515625 -13.819000244140625,-49.18600082397461 -13.819000244140625,-49.18600082397461 C-13.819000244140625,-49.18600082397461 -14.798999786376953,-48.965999603271484 -14.798999786376953,-48.965999603271484 C-14.798999786376953,-48.965999603271484 -16.80900001525879,-48.486000061035156 -16.80900001525879,-48.486000061035156 C-16.80900001525879,-48.486000061035156 -18.909000396728516,-47.965999603271484 -18.909000396728516,-47.965999603271484 C-18.909000396728516,-47.965999603271484 -21.099000930786133,-47.395999908447266 -21.099000930786133,-47.395999908447266 C-21.099000930786133,-47.395999908447266 -23.358999252319336,-46.7760009765625 -23.358999252319336,-46.7760009765625 C-23.358999252319336,-46.7760009765625 -25.7189998626709,-46.10599899291992 -25.7189998626709,-46.10599899291992 C-25.7189998626709,-46.10599899291992 -28.14900016784668,-45.395999908447266 -28.14900016784668,-45.395999908447266 C-28.14900016784668,-45.395999908447266 -30.66900062561035,-44.625999450683594 -30.66900062561035,-44.625999450683594 C-30.66900062561035,-44.625999450683594 -31.958999633789062,-44.22600173950195 -31.958999633789062,-44.22600173950195 C-31.958999633789062,-44.22600173950195 -34.5989990234375,-43.395999908447266 -34.5989990234375,-43.395999908447266 C-34.5989990234375,-43.395999908447266 -37.319000244140625,-42.50600051879883 -37.319000244140625,-42.50600051879883 C-37.319000244140625,-42.50600051879883 -40.12900161743164,-41.57600021362305 -40.12900161743164,-41.57600021362305 C-40.12900161743164,-41.57600021362305 -43.00899887084961,-40.59600067138672 -43.00899887084961,-40.59600067138672 C-43.00899887084961,-40.59600067138672 -44.479000091552734,-40.08599853515625 -44.479000091552734,-40.08599853515625 C-44.638999938964844,-40.0359992980957 -44.76900100708008,-39.91600036621094 -44.8390007019043,-39.76599884033203 C-44.8390007019043,-39.76599884033203 -44.87900161743164,-39.63600158691406 -44.87900161743164,-39.63600158691406 C-44.87900161743164,-39.63600158691406 -45.0890007019043,-36.57600021362305 -45.0890007019043,-36.57600021362305 C-45.91899871826172,-23.88599967956543 -45.729000091552734,-11.145999908447266 -44.52899932861328,1.503999948501587 C-44.52899932861328,1.503999948501587 -44.229000091552734,4.394000053405762 -44.229000091552734,4.394000053405762 C-44.229000091552734,4.394000053405762 -44.0890007019043,5.283999919891357 -44.0890007019043,5.283999919891357 C-40.729000091552734,25.554000854492188 -26.839000701904297,40.433998107910156 -0.8989999890327454,50.41400146484375 C-0.8989999890327454,50.41400146484375 0.0010000000474974513,50.74399948120117 0.0010000000474974513,50.74399948120117 C0.0010000000474974513,50.74399948120117 0.8709999918937683,50.41400146484375 0.8709999918937683,50.41400146484375 C26.85099983215332,40.433998107910156 40.74100112915039,25.573999404907227 44.06100082397461,5.513999938964844 C44.06100082397461,5.513999938964844 44.22100067138672,4.473999977111816 44.22100067138672,4.473999977111816 C45.82099914550781,-8.425999641418457 46.03099822998047,-23.115999221801758 44.83100128173828,-39.58599853515625 C44.81100082397461,-39.82600021362305 44.6510009765625,-40.0260009765625 44.430999755859375,-40.10599899291992 C44.430999755859375,-40.10599899291992 41.51100158691406,-41.11600112915039 41.51100158691406,-41.11600112915039 C41.51100158691406,-41.11600112915039 38.67100143432617,-42.066001892089844 38.67100143432617,-42.066001892089844 C38.67100143432617,-42.066001892089844 35.9109992980957,-42.97600173950195 35.9109992980957,-42.97600173950195 C35.9109992980957,-42.97600173950195 33.23099899291992,-43.82600021362305 33.23099899291992,-43.82600021362305 C33.23099899291992,-43.82600021362305 30.641000747680664,-44.63600158691406 30.641000747680664,-44.63600158691406 C30.641000747680664,-44.63600158691406 28.131000518798828,-45.40599822998047 28.131000518798828,-45.40599822998047 C28.131000518798828,-45.40599822998047 25.69099998474121,-46.11600112915039 25.69099998474121,-46.11600112915039 C25.69099998474121,-46.11600112915039 23.35099983215332,-46.7760009765625 23.35099983215332,-46.7760009765625 C23.35099983215332,-46.7760009765625 21.08099937438965,-47.395999908447266 21.08099937438965,-47.395999908447266 C21.08099937438965,-47.395999908447266 18.900999069213867,-47.965999603271484 18.900999069213867,-47.965999603271484 C18.551000595092773,-48.055999755859375 18.201000213623047,-48.145999908447266 17.840999603271484,-48.236000061035156 C17.840999603271484,-48.236000061035156 15.791000366210938,-48.736000061035156 15.791000366210938,-48.736000061035156 C15.791000366210938,-48.736000061035156 13.821000099182129,-49.18600082397461 13.821000099182129,-49.18600082397461 C13.821000099182129,-49.18600082397461 11.940999984741211,-49.58599853515625 11.940999984741211,-49.58599853515625 C11.940999984741211,-49.58599853515625 10.140999794006348,-49.94599914550781 10.140999794006348,-49.94599914550781 C9.571000099182129,-50.055999755859375 9.00100040435791,-50.15599822998047 8.430999755859375,-50.25600051879883 C8.430999755859375,-50.25600051879883 6.810999870300293,-50.51599884033203 6.810999870300293,-50.51599884033203 C6.810999870300293,-50.51599884033203 5.270999908447266,-50.72600173950195 5.270999908447266,-50.72600173950195 C4.520999908447266,-50.82600021362305 3.811000108718872,-50.895999908447266 3.13100004196167,-50.95600128173828 C3.13100004196167,-50.95600128173828 1.8209999799728394,-51.055999755859375 1.8209999799728394,-51.055999755859375 C1.2109999656677246,-51.08599853515625 0.6110000014305115,-51.10599899291992 0.010999999940395355,-51.10599899291992z M10.199999809265137,-61.5099983215332 C10.199999809265137,-61.5099983215332 12.220000267028809,-61.150001525878906 12.220000267028809,-61.150001525878906 C12.220000267028809,-61.150001525878906 14.319999694824219,-60.72999954223633 14.319999694824219,-60.72999954223633 C15.390000343322754,-60.5099983215332 16.5,-60.27000045776367 17.639999389648438,-60 C17.639999389648438,-60 19.969999313354492,-59.45000076293945 19.969999313354492,-59.45000076293945 C19.969999313354492,-59.45000076293945 22.3799991607666,-58.84000015258789 22.3799991607666,-58.84000015258789 C22.3799991607666,-58.84000015258789 24.889999389648438,-58.18000030517578 24.889999389648438,-58.18000030517578 C24.889999389648438,-58.18000030517578 27.489999771118164,-57.459999084472656 27.489999771118164,-57.459999084472656 C27.489999771118164,-57.459999084472656 28.81999969482422,-57.08000183105469 28.81999969482422,-57.08000183105469 C28.81999969482422,-57.08000183105469 31.549999237060547,-56.279998779296875 31.549999237060547,-56.279998779296875 C31.549999237060547,-56.279998779296875 34.369998931884766,-55.41999816894531 34.369998931884766,-55.41999816894531 C34.369998931884766,-55.41999816894531 37.279998779296875,-54.5099983215332 37.279998779296875,-54.5099983215332 C37.279998779296875,-54.5099983215332 40.279998779296875,-53.540000915527344 40.279998779296875,-53.540000915527344 C40.279998779296875,-53.540000915527344 43.369998931884766,-52.5099983215332 43.369998931884766,-52.5099983215332 C43.369998931884766,-52.5099983215332 46.54999923706055,-51.43000030517578 46.54999923706055,-51.43000030517578 C46.54999923706055,-51.43000030517578 48.16999816894531,-50.869998931884766 48.16999816894531,-50.869998931884766 C52.70000076293945,-49.29999923706055 55.849998474121094,-45.189998626708984 56.20000076293945,-40.40999984741211 C57.45000076293945,-23.239999771118164 57.22999954223633,-7.809999942779541 55.540000915527344,5.880000114440918 C51.79999923706055,31.520000457763672 34.45000076293945,50.099998474121094 3.490000009536743,61.61000061035156 C3.490000009536743,61.61000061035156 2.0299999713897705,62.150001525878906 2.0299999713897705,62.150001525878906 C0.7200000286102295,62.619998931884766 -0.7200000286102295,62.619998931884766 -2.0299999713897705,62.150001525878906 C-33.880001068115234,50.68000030517578 -51.720001220703125,31.920000076293945 -55.540000915527344,5.880000114440918 C-57.099998474121094,-8.460000038146973 -57.40999984741211,-22.90999984741211 -56.470001220703125,-37.29999923706055 C-56.470001220703125,-37.29999923706055 -56.25,-40.43000030517578 -56.25,-40.43000030517578 C-55.88999938964844,-45.189998626708984 -52.72999954223633,-49.279998779296875 -48.220001220703125,-50.849998474121094 C-48.220001220703125,-50.849998474121094 -44.9900016784668,-51.959999084472656 -44.9900016784668,-51.959999084472656 C-44.9900016784668,-51.959999084472656 -41.849998474121094,-53.02000045776367 -41.849998474121094,-53.02000045776367 C-41.849998474121094,-53.02000045776367 -38.79999923706055,-54.0099983215332 -38.79999923706055,-54.0099983215332 C-38.79999923706055,-54.0099983215332 -35.84000015258789,-54.95000076293945 -35.84000015258789,-54.95000076293945 C-35.84000015258789,-54.95000076293945 -32.97999954223633,-55.84000015258789 -32.97999954223633,-55.84000015258789 C-32.97999954223633,-55.84000015258789 -30.190000534057617,-56.66999816894531 -30.190000534057617,-56.66999816894531 C-30.190000534057617,-56.66999816894531 -28.84000015258789,-57.06999969482422 -28.84000015258789,-57.06999969482422 C-28.84000015258789,-57.06999969482422 -26.190000534057617,-57.81999969482422 -26.190000534057617,-57.81999969482422 C-26.190000534057617,-57.81999969482422 -24.899999618530273,-58.16999816894531 -24.899999618530273,-58.16999816894531 C-24.899999618530273,-58.16999816894531 -22.399999618530273,-58.83000183105469 -22.399999618530273,-58.83000183105469 C-22.399999618530273,-58.83000183105469 -19.969999313354492,-59.439998626708984 -19.969999313354492,-59.439998626708984 C-19.969999313354492,-59.439998626708984 -18.799999237060547,-59.72999954223633 -18.799999237060547,-59.72999954223633 C-18.799999237060547,-59.72999954223633 -16.510000228881836,-60.25 -16.510000228881836,-60.25 C-15.770000457763672,-60.41999816894531 -15.029999732971191,-60.58000183105469 -14.319999694824219,-60.720001220703125 C-14.319999694824219,-60.720001220703125 -12.210000038146973,-61.13999938964844 -12.210000038146973,-61.13999938964844 C-12.210000038146973,-61.13999938964844 -10.199999809265137,-61.5 -10.199999809265137,-61.5 C-6.25,-62.16999816894531 -2.8499999046325684,-62.5 0.009999999776482582,-62.5 C2.869999885559082,-62.5 6.269999980926514,-62.16999816894531 10.199999809265137,-61.5099983215332z"
                      ></path>
                      <path
                        fill="url(#__lottie_element_135)"
                        fill-opacity="0.8"
                        d=" M0.010999999940395355,-51.10599899291992 C-0.5590000152587891,-51.10599899291992 -1.1690000295639038,-51.08599853515625 -1.7990000247955322,-51.055999755859375 C-1.7990000247955322,-51.055999755859375 -3.11899995803833,-50.95600128173828 -3.11899995803833,-50.95600128173828 C-3.569000005722046,-50.91600036621094 -4.039000034332275,-50.875999450683594 -4.519000053405762,-50.816001892089844 C-4.519000053405762,-50.816001892089844 -6.019000053405762,-50.625999450683594 -6.019000053405762,-50.625999450683594 C-6.5289998054504395,-50.555999755859375 -7.059000015258789,-50.47600173950195 -7.598999977111816,-50.38600158691406 C-7.598999977111816,-50.38600158691406 -9.269000053405762,-50.10599899291992 -9.269000053405762,-50.10599899291992 C-9.559000015258789,-50.055999755859375 -9.83899974822998,-49.99599838256836 -10.138999938964844,-49.94599914550781 C-10.138999938964844,-49.94599914550781 -11.939000129699707,-49.58599853515625 -11.939000129699707,-49.58599853515625 C-11.939000129699707,-49.58599853515625 -13.819000244140625,-49.18600082397461 -13.819000244140625,-49.18600082397461 C-13.819000244140625,-49.18600082397461 -14.798999786376953,-48.965999603271484 -14.798999786376953,-48.965999603271484 C-14.798999786376953,-48.965999603271484 -16.80900001525879,-48.486000061035156 -16.80900001525879,-48.486000061035156 C-16.80900001525879,-48.486000061035156 -18.909000396728516,-47.965999603271484 -18.909000396728516,-47.965999603271484 C-18.909000396728516,-47.965999603271484 -21.099000930786133,-47.395999908447266 -21.099000930786133,-47.395999908447266 C-21.099000930786133,-47.395999908447266 -23.358999252319336,-46.7760009765625 -23.358999252319336,-46.7760009765625 C-23.358999252319336,-46.7760009765625 -25.7189998626709,-46.10599899291992 -25.7189998626709,-46.10599899291992 C-25.7189998626709,-46.10599899291992 -28.14900016784668,-45.395999908447266 -28.14900016784668,-45.395999908447266 C-28.14900016784668,-45.395999908447266 -30.66900062561035,-44.625999450683594 -30.66900062561035,-44.625999450683594 C-30.66900062561035,-44.625999450683594 -31.958999633789062,-44.22600173950195 -31.958999633789062,-44.22600173950195 C-31.958999633789062,-44.22600173950195 -34.5989990234375,-43.395999908447266 -34.5989990234375,-43.395999908447266 C-34.5989990234375,-43.395999908447266 -37.319000244140625,-42.50600051879883 -37.319000244140625,-42.50600051879883 C-37.319000244140625,-42.50600051879883 -40.12900161743164,-41.57600021362305 -40.12900161743164,-41.57600021362305 C-40.12900161743164,-41.57600021362305 -43.00899887084961,-40.59600067138672 -43.00899887084961,-40.59600067138672 C-43.00899887084961,-40.59600067138672 -44.479000091552734,-40.08599853515625 -44.479000091552734,-40.08599853515625 C-44.638999938964844,-40.0359992980957 -44.76900100708008,-39.91600036621094 -44.8390007019043,-39.76599884033203 C-44.8390007019043,-39.76599884033203 -44.87900161743164,-39.63600158691406 -44.87900161743164,-39.63600158691406 C-44.87900161743164,-39.63600158691406 -45.0890007019043,-36.57600021362305 -45.0890007019043,-36.57600021362305 C-45.91899871826172,-23.88599967956543 -45.729000091552734,-11.145999908447266 -44.52899932861328,1.503999948501587 C-44.52899932861328,1.503999948501587 -44.229000091552734,4.394000053405762 -44.229000091552734,4.394000053405762 C-44.229000091552734,4.394000053405762 -44.0890007019043,5.283999919891357 -44.0890007019043,5.283999919891357 C-40.729000091552734,25.554000854492188 -26.839000701904297,40.433998107910156 -0.8989999890327454,50.41400146484375 C-0.8989999890327454,50.41400146484375 0.0010000000474974513,50.74399948120117 0.0010000000474974513,50.74399948120117 C0.0010000000474974513,50.74399948120117 0.8709999918937683,50.41400146484375 0.8709999918937683,50.41400146484375 C26.85099983215332,40.433998107910156 40.74100112915039,25.573999404907227 44.06100082397461,5.513999938964844 C44.06100082397461,5.513999938964844 44.22100067138672,4.473999977111816 44.22100067138672,4.473999977111816 C45.82099914550781,-8.425999641418457 46.03099822998047,-23.115999221801758 44.83100128173828,-39.58599853515625 C44.81100082397461,-39.82600021362305 44.6510009765625,-40.0260009765625 44.430999755859375,-40.10599899291992 C44.430999755859375,-40.10599899291992 41.51100158691406,-41.11600112915039 41.51100158691406,-41.11600112915039 C41.51100158691406,-41.11600112915039 38.67100143432617,-42.066001892089844 38.67100143432617,-42.066001892089844 C38.67100143432617,-42.066001892089844 35.9109992980957,-42.97600173950195 35.9109992980957,-42.97600173950195 C35.9109992980957,-42.97600173950195 33.23099899291992,-43.82600021362305 33.23099899291992,-43.82600021362305 C33.23099899291992,-43.82600021362305 30.641000747680664,-44.63600158691406 30.641000747680664,-44.63600158691406 C30.641000747680664,-44.63600158691406 28.131000518798828,-45.40599822998047 28.131000518798828,-45.40599822998047 C28.131000518798828,-45.40599822998047 25.69099998474121,-46.11600112915039 25.69099998474121,-46.11600112915039 C25.69099998474121,-46.11600112915039 23.35099983215332,-46.7760009765625 23.35099983215332,-46.7760009765625 C23.35099983215332,-46.7760009765625 21.08099937438965,-47.395999908447266 21.08099937438965,-47.395999908447266 C21.08099937438965,-47.395999908447266 18.900999069213867,-47.965999603271484 18.900999069213867,-47.965999603271484 C18.551000595092773,-48.055999755859375 18.201000213623047,-48.145999908447266 17.840999603271484,-48.236000061035156 C17.840999603271484,-48.236000061035156 15.791000366210938,-48.736000061035156 15.791000366210938,-48.736000061035156 C15.791000366210938,-48.736000061035156 13.821000099182129,-49.18600082397461 13.821000099182129,-49.18600082397461 C13.821000099182129,-49.18600082397461 11.940999984741211,-49.58599853515625 11.940999984741211,-49.58599853515625 C11.940999984741211,-49.58599853515625 10.140999794006348,-49.94599914550781 10.140999794006348,-49.94599914550781 C9.571000099182129,-50.055999755859375 9.00100040435791,-50.15599822998047 8.430999755859375,-50.25600051879883 C8.430999755859375,-50.25600051879883 6.810999870300293,-50.51599884033203 6.810999870300293,-50.51599884033203 C6.810999870300293,-50.51599884033203 5.270999908447266,-50.72600173950195 5.270999908447266,-50.72600173950195 C4.520999908447266,-50.82600021362305 3.811000108718872,-50.895999908447266 3.13100004196167,-50.95600128173828 C3.13100004196167,-50.95600128173828 1.8209999799728394,-51.055999755859375 1.8209999799728394,-51.055999755859375 C1.2109999656677246,-51.08599853515625 0.6110000014305115,-51.10599899291992 0.010999999940395355,-51.10599899291992z M10.199999809265137,-61.5099983215332 C10.199999809265137,-61.5099983215332 12.220000267028809,-61.150001525878906 12.220000267028809,-61.150001525878906 C12.220000267028809,-61.150001525878906 14.319999694824219,-60.72999954223633 14.319999694824219,-60.72999954223633 C15.390000343322754,-60.5099983215332 16.5,-60.27000045776367 17.639999389648438,-60 C17.639999389648438,-60 19.969999313354492,-59.45000076293945 19.969999313354492,-59.45000076293945 C19.969999313354492,-59.45000076293945 22.3799991607666,-58.84000015258789 22.3799991607666,-58.84000015258789 C22.3799991607666,-58.84000015258789 24.889999389648438,-58.18000030517578 24.889999389648438,-58.18000030517578 C24.889999389648438,-58.18000030517578 27.489999771118164,-57.459999084472656 27.489999771118164,-57.459999084472656 C27.489999771118164,-57.459999084472656 28.81999969482422,-57.08000183105469 28.81999969482422,-57.08000183105469 C28.81999969482422,-57.08000183105469 31.549999237060547,-56.279998779296875 31.549999237060547,-56.279998779296875 C31.549999237060547,-56.279998779296875 34.369998931884766,-55.41999816894531 34.369998931884766,-55.41999816894531 C34.369998931884766,-55.41999816894531 37.279998779296875,-54.5099983215332 37.279998779296875,-54.5099983215332 C37.279998779296875,-54.5099983215332 40.279998779296875,-53.540000915527344 40.279998779296875,-53.540000915527344 C40.279998779296875,-53.540000915527344 43.369998931884766,-52.5099983215332 43.369998931884766,-52.5099983215332 C43.369998931884766,-52.5099983215332 46.54999923706055,-51.43000030517578 46.54999923706055,-51.43000030517578 C46.54999923706055,-51.43000030517578 48.16999816894531,-50.869998931884766 48.16999816894531,-50.869998931884766 C52.70000076293945,-49.29999923706055 55.849998474121094,-45.189998626708984 56.20000076293945,-40.40999984741211 C57.45000076293945,-23.239999771118164 57.22999954223633,-7.809999942779541 55.540000915527344,5.880000114440918 C51.79999923706055,31.520000457763672 34.45000076293945,50.099998474121094 3.490000009536743,61.61000061035156 C3.490000009536743,61.61000061035156 2.0299999713897705,62.150001525878906 2.0299999713897705,62.150001525878906 C0.7200000286102295,62.619998931884766 -0.7200000286102295,62.619998931884766 -2.0299999713897705,62.150001525878906 C-33.880001068115234,50.68000030517578 -51.720001220703125,31.920000076293945 -55.540000915527344,5.880000114440918 C-57.099998474121094,-8.460000038146973 -57.40999984741211,-22.90999984741211 -56.470001220703125,-37.29999923706055 C-56.470001220703125,-37.29999923706055 -56.25,-40.43000030517578 -56.25,-40.43000030517578 C-55.88999938964844,-45.189998626708984 -52.72999954223633,-49.279998779296875 -48.220001220703125,-50.849998474121094 C-48.220001220703125,-50.849998474121094 -44.9900016784668,-51.959999084472656 -44.9900016784668,-51.959999084472656 C-44.9900016784668,-51.959999084472656 -41.849998474121094,-53.02000045776367 -41.849998474121094,-53.02000045776367 C-41.849998474121094,-53.02000045776367 -38.79999923706055,-54.0099983215332 -38.79999923706055,-54.0099983215332 C-38.79999923706055,-54.0099983215332 -35.84000015258789,-54.95000076293945 -35.84000015258789,-54.95000076293945 C-35.84000015258789,-54.95000076293945 -32.97999954223633,-55.84000015258789 -32.97999954223633,-55.84000015258789 C-32.97999954223633,-55.84000015258789 -30.190000534057617,-56.66999816894531 -30.190000534057617,-56.66999816894531 C-30.190000534057617,-56.66999816894531 -28.84000015258789,-57.06999969482422 -28.84000015258789,-57.06999969482422 C-28.84000015258789,-57.06999969482422 -26.190000534057617,-57.81999969482422 -26.190000534057617,-57.81999969482422 C-26.190000534057617,-57.81999969482422 -24.899999618530273,-58.16999816894531 -24.899999618530273,-58.16999816894531 C-24.899999618530273,-58.16999816894531 -22.399999618530273,-58.83000183105469 -22.399999618530273,-58.83000183105469 C-22.399999618530273,-58.83000183105469 -19.969999313354492,-59.439998626708984 -19.969999313354492,-59.439998626708984 C-19.969999313354492,-59.439998626708984 -18.799999237060547,-59.72999954223633 -18.799999237060547,-59.72999954223633 C-18.799999237060547,-59.72999954223633 -16.510000228881836,-60.25 -16.510000228881836,-60.25 C-15.770000457763672,-60.41999816894531 -15.029999732971191,-60.58000183105469 -14.319999694824219,-60.720001220703125 C-14.319999694824219,-60.720001220703125 -12.210000038146973,-61.13999938964844 -12.210000038146973,-61.13999938964844 C-12.210000038146973,-61.13999938964844 -10.199999809265137,-61.5 -10.199999809265137,-61.5 C-6.25,-62.16999816894531 -2.8499999046325684,-62.5 0.009999999776482582,-62.5 C2.869999885559082,-62.5 6.269999980926514,-62.16999816894531 10.199999809265137,-61.5099983215332z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(0.8999999761581421,0,0,0.8999999761581421,865.6567993164062,284.25250244140625)"
                    opacity="1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="url(#__lottie_element_128)"
                        fill-opacity="0.8"
                        d=" M18.106000900268555,-2.003999948501587 C7.97599983215332,-9.753999710083008 -3.434000015258789,-20.034000396728516 -15.944000244140625,-31.04400062561035 C-16.93400001525879,-31.913999557495117 -17.804000854492188,-31.573999404907227 -18.243999481201172,-30.423999786376953 C-21.06399917602539,-23.034000396728516 -18.333999633789062,-16.464000701904297 -13.913999557495117,-12.684000015258789 C-9.484000205993652,-8.883999824523926 -2.8940000534057617,-5.394000053405762 1.1460000276565552,-3.5339999198913574 C1.305999994277954,-3.4639999866485596 1.1660000085830688,-3.2339999675750732 1.00600004196167,-3.303999900817871 C-6.414000034332275,-6.544000148773193 -11.564000129699707,-8.883999824523926 -18.56399917602539,-14.244000434875488 C-19.323999404907227,-14.824000358581543 -20.083999633789062,-14.593999862670898 -20.173999786376953,-13.473999977111816 C-20.743999481201172,-6.4039998054504395 -16.194000244140625,-0.8539999723434448 -11.104000091552734,1.0160000324249268 C-7.964000225067139,2.1760001182556152 -4.52400016784668,2.815999984741211 -1.3240000009536743,3.2060000896453857 C-1.1640000343322754,3.2260000705718994 -1.2039999961853027,3.4660000801086426 -1.3639999628067017,3.4660000801086426 C-5.484000205993652,3.4760000705718994 -10.454000473022461,2.50600004196167 -14.753999710083008,0.8659999966621399 C-15.663999557495117,0.515999972820282 -15.973999977111816,1.2359999418258667 -15.833999633789062,1.805999994277954 C-15.104000091552734,4.785999774932861 -11.383999824523926,9.355999946594238 -5.453999996185303,10.305999755859375 C-4.354000091552734,10.486000061035156 -3.1740000247955322,10.515999794006348 -2.124000072479248,10.486000061035156 C-1.8739999532699585,10.47599983215332 -1.8040000200271606,10.616000175476074 -1.8940000534057617,10.805999755859375 C-1.8940000534057617,10.805999755859375 -5.914000034332275,17.645999908447266 -6.084000110626221,17.93600082397461 C-6.223999977111816,18.166000366210938 -6.144000053405762,18.34600067138672 -5.854000091552734,18.34600067138672 C-5.573999881744385,18.34600067138672 -0.7940000295639038,18.34600067138672 -0.5440000295639038,18.34600067138672 C-0.30399999022483826,18.34600067138672 -0.15399999916553497,18.506000518798828 -0.27399998903274536,18.70599937438965 C-0.40400001406669617,18.916000366210938 -7.363999843597412,30.375999450683594 -7.693999767303467,30.916000366210938 C-7.984000205993652,31.395999908447266 -7.644000053405762,31.756000518798828 -7.104000091552734,31.365999221801758 C-6.564000129699707,30.97599983215332 15.685999870300293,14.815999984741211 16.31599998474121,14.345999717712402 C16.606000900268555,14.13599967956543 16.54599952697754,13.845999717712402 16.13599967956543,13.845999717712402 C15.72599983215332,13.845999717712402 11.685999870300293,13.845999717712402 11.37600040435791,13.845999717712402 C11.065999984741211,13.845999717712402 10.996000289916992,13.645999908447266 11.206000328063965,13.435999870300293 C11.416000366210938,13.22599983215332 16.606000900268555,8.086000442504883 18.445999145507812,6.165999889373779 C20.375999450683594,4.165999889373779 21.356000900268555,0.4860000014305115 18.106000900268555,-2.003999948501587"
                      ></path>
                      <path
                        fill="url(#__lottie_element_129)"
                        fill-opacity="1"
                        d=" M18.106000900268555,-2.003999948501587 C7.97599983215332,-9.753999710083008 -3.434000015258789,-20.034000396728516 -15.944000244140625,-31.04400062561035 C-16.93400001525879,-31.913999557495117 -17.804000854492188,-31.573999404907227 -18.243999481201172,-30.423999786376953 C-21.06399917602539,-23.034000396728516 -18.333999633789062,-16.464000701904297 -13.913999557495117,-12.684000015258789 C-9.484000205993652,-8.883999824523926 -2.8940000534057617,-5.394000053405762 1.1460000276565552,-3.5339999198913574 C1.305999994277954,-3.4639999866485596 1.1660000085830688,-3.2339999675750732 1.00600004196167,-3.303999900817871 C-6.414000034332275,-6.544000148773193 -11.564000129699707,-8.883999824523926 -18.56399917602539,-14.244000434875488 C-19.323999404907227,-14.824000358581543 -20.083999633789062,-14.593999862670898 -20.173999786376953,-13.473999977111816 C-20.743999481201172,-6.4039998054504395 -16.194000244140625,-0.8539999723434448 -11.104000091552734,1.0160000324249268 C-7.964000225067139,2.1760001182556152 -4.52400016784668,2.815999984741211 -1.3240000009536743,3.2060000896453857 C-1.1640000343322754,3.2260000705718994 -1.2039999961853027,3.4660000801086426 -1.3639999628067017,3.4660000801086426 C-5.484000205993652,3.4760000705718994 -10.454000473022461,2.50600004196167 -14.753999710083008,0.8659999966621399 C-15.663999557495117,0.515999972820282 -15.973999977111816,1.2359999418258667 -15.833999633789062,1.805999994277954 C-15.104000091552734,4.785999774932861 -11.383999824523926,9.355999946594238 -5.453999996185303,10.305999755859375 C-4.354000091552734,10.486000061035156 -3.1740000247955322,10.515999794006348 -2.124000072479248,10.486000061035156 C-1.8739999532699585,10.47599983215332 -1.8040000200271606,10.616000175476074 -1.8940000534057617,10.805999755859375 C-1.8940000534057617,10.805999755859375 -5.914000034332275,17.645999908447266 -6.084000110626221,17.93600082397461 C-6.223999977111816,18.166000366210938 -6.144000053405762,18.34600067138672 -5.854000091552734,18.34600067138672 C-5.573999881744385,18.34600067138672 -0.7940000295639038,18.34600067138672 -0.5440000295639038,18.34600067138672 C-0.30399999022483826,18.34600067138672 -0.15399999916553497,18.506000518798828 -0.27399998903274536,18.70599937438965 C-0.40400001406669617,18.916000366210938 -7.363999843597412,30.375999450683594 -7.693999767303467,30.916000366210938 C-7.984000205993652,31.395999908447266 -7.644000053405762,31.756000518798828 -7.104000091552734,31.365999221801758 C-6.564000129699707,30.97599983215332 15.685999870300293,14.815999984741211 16.31599998474121,14.345999717712402 C16.606000900268555,14.13599967956543 16.54599952697754,13.845999717712402 16.13599967956543,13.845999717712402 C15.72599983215332,13.845999717712402 11.685999870300293,13.845999717712402 11.37600040435791,13.845999717712402 C11.065999984741211,13.845999717712402 10.996000289916992,13.645999908447266 11.206000328063965,13.435999870300293 C11.416000366210938,13.22599983215332 16.606000900268555,8.086000442504883 18.445999145507812,6.165999889373779 C20.375999450683594,4.165999889373779 21.356000900268555,0.4860000014305115 18.106000900268555,-2.003999948501587"
                      ></path>
                      <path
                        fill="url(#__lottie_element_130)"
                        fill-opacity="1"
                        d=" M18.106000900268555,-2.003999948501587 C7.97599983215332,-9.753999710083008 -3.434000015258789,-20.034000396728516 -15.944000244140625,-31.04400062561035 C-16.93400001525879,-31.913999557495117 -17.804000854492188,-31.573999404907227 -18.243999481201172,-30.423999786376953 C-21.06399917602539,-23.034000396728516 -18.333999633789062,-16.464000701904297 -13.913999557495117,-12.684000015258789 C-9.484000205993652,-8.883999824523926 -2.8940000534057617,-5.394000053405762 1.1460000276565552,-3.5339999198913574 C1.305999994277954,-3.4639999866485596 1.1660000085830688,-3.2339999675750732 1.00600004196167,-3.303999900817871 C-6.414000034332275,-6.544000148773193 -11.564000129699707,-8.883999824523926 -18.56399917602539,-14.244000434875488 C-19.323999404907227,-14.824000358581543 -20.083999633789062,-14.593999862670898 -20.173999786376953,-13.473999977111816 C-20.743999481201172,-6.4039998054504395 -16.194000244140625,-0.8539999723434448 -11.104000091552734,1.0160000324249268 C-7.964000225067139,2.1760001182556152 -4.52400016784668,2.815999984741211 -1.3240000009536743,3.2060000896453857 C-1.1640000343322754,3.2260000705718994 -1.2039999961853027,3.4660000801086426 -1.3639999628067017,3.4660000801086426 C-5.484000205993652,3.4760000705718994 -10.454000473022461,2.50600004196167 -14.753999710083008,0.8659999966621399 C-15.663999557495117,0.515999972820282 -15.973999977111816,1.2359999418258667 -15.833999633789062,1.805999994277954 C-15.104000091552734,4.785999774932861 -11.383999824523926,9.355999946594238 -5.453999996185303,10.305999755859375 C-4.354000091552734,10.486000061035156 -3.1740000247955322,10.515999794006348 -2.124000072479248,10.486000061035156 C-1.8739999532699585,10.47599983215332 -1.8040000200271606,10.616000175476074 -1.8940000534057617,10.805999755859375 C-1.8940000534057617,10.805999755859375 -5.914000034332275,17.645999908447266 -6.084000110626221,17.93600082397461 C-6.223999977111816,18.166000366210938 -6.144000053405762,18.34600067138672 -5.854000091552734,18.34600067138672 C-5.573999881744385,18.34600067138672 -0.7940000295639038,18.34600067138672 -0.5440000295639038,18.34600067138672 C-0.30399999022483826,18.34600067138672 -0.15399999916553497,18.506000518798828 -0.27399998903274536,18.70599937438965 C-0.40400001406669617,18.916000366210938 -7.363999843597412,30.375999450683594 -7.693999767303467,30.916000366210938 C-7.984000205993652,31.395999908447266 -7.644000053405762,31.756000518798828 -7.104000091552734,31.365999221801758 C-6.564000129699707,30.97599983215332 15.685999870300293,14.815999984741211 16.31599998474121,14.345999717712402 C16.606000900268555,14.13599967956543 16.54599952697754,13.845999717712402 16.13599967956543,13.845999717712402 C15.72599983215332,13.845999717712402 11.685999870300293,13.845999717712402 11.37600040435791,13.845999717712402 C11.065999984741211,13.845999717712402 10.996000289916992,13.645999908447266 11.206000328063965,13.435999870300293 C11.416000366210938,13.22599983215332 16.606000900268555,8.086000442504883 18.445999145507812,6.165999889373779 C20.375999450683594,4.165999889373779 21.356000900268555,0.4860000014305115 18.106000900268555,-2.003999948501587"
                      ></path>
                    </g>
                  </g>
                  <g style="display: none">
                    <g><path></path></g>
                  </g>
                  <g style="display: none">
                    <g><path></path></g>
                  </g>
                  <g style="display: none">
                    <g><path></path></g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,1208,428)"
                    opacity="1"
                    style="display: block"
                  >
                    <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                      <path
                        fill="rgb(143,53,255)"
                        fill-opacity="1"
                        d=" M0,-8 C4.415200233459473,-8 8,-4.415200233459473 8,0 C8,4.415200233459473 4.415200233459473,8 0,8 C-4.415200233459473,8 -8,4.415200233459473 -8,0 C-8,-4.415200233459473 -4.415200233459473,-8 0,-8z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class="text1">八重防护</div>
            <div class="text2">业务数字化安全</div>
            <div class="text3">
              钉钉采用业内领先的解决方案，对钉钉各类应用配置八重防护手段，开放平台各类组件接口原生安全，混合云本地个性化业务专属保障
            </div>
          </div>
        </div>
        <div class="safeMainBottom">
          <div class="safeMainBottomTitle">安全专业认证</div>
          <div class="safeMainBottomText">
            ISO 27001:2013信息安全管理体系标准认证公安部信息系统三级等级保护认证
          </div>
          <div class="safeMainBottomLogoBox">
            <img :src="item" alt="" v-for="(item, index) in safeLogo" :key="index" />
          </div>
        </div>
      </div>
    </div>
    <div class="footerImgBox">
      <div class="caoniniang">
        <div class="dIcon"></div>
        <div class="dBottonBox">
          <a
            href="https://oa.dingtalk.com/register_new.htm?lwfrom=2020052015221741000&source=1008"
            target="_blank"
          >
            <el-button type="primary">注册钉钉</el-button>
          </a>
          <a href="https://page.dingtalk.com/wow/dingtalk/act/download" target="_blank">
            <el-button>下载钉钉</el-button>
          </a>
        </div>
      </div>
    </div>
    <div class="DDfooter">
      <div class="DDfooterContent">
        <div class="footer1">
          <div class="footer1Item" v-for="(item, index) in footer1" :key="index">
            <div class="footer1ItemTitle">{{ item.title }}</div>
            <ul>
              <li v-for="(item2, index2) in item.data" :key="index2">
                <a :href="item2.href" target="_blank">{{ item2.text }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer2">
          <div class="footer2Left">
            <div class="email">
              <div class="icon">
                <el-icon :size="18"><Message /></el-icon>
              </div>
              <div class="text1">市场商务合作</div>
              <div class="text2">dingtalk_market@service.dingtalk.com</div>
            </div>
            <div class="lauguage">
              <img src="../../assets/icon/lauguage.svg" alt="" />
              <el-select
                v-model="lauguageValue"
                placeholder="Select"
                size="large"
                style="width: 100px"
              >
                <el-option
                  v-for="item in lauguageOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
          <div class="footer2Right">
            <div class="imgItem">
              <a
                href="https://weibo.com/dingdingtalk?spm=a3140.8736650.2231772.24.7f153a1absdWzw"
                target="_blank"
              >
                <img
                  src="https://gw.alicdn.com/tfs/TB16zuGGaL7gK0jSZFBXXXZZpXa-64-64.png"
                  alt=""
                />
                <img
                  src="https://gw.alicdn.com/tfs/TB16juGGaL7gK0jSZFBXXXZZpXa-64-64.png"
                  alt=""
                />
              </a>
            </div>
            <div class="imgItem">
              <img
                src="https://gw.alicdn.com/tfs/TB13caLGmf2gK0jSZFPXXXsopXa-64-64.png"
                alt=""
              />
              <img
                src="https://gw.alicdn.com/tfs/TB1.beOGbY1gK0jSZTEXXXDQVXa-64-64.png"
                alt=""
              />
              <div class="qrContent">
                <img
                  src="https://gw.alicdn.com/imgextra/i2/O1CN01A6g3wN1pvKJN8wDzn_!!6000000005422-0-tps-200-200.jpg"
                  alt=""
                />
                <div class="qrContentText">钉钉扫描二维码<br />关注微信公众号</div>
              </div>
            </div>
            <div class="imgItem">
              <img
                src="https://gw.alicdn.com/tfs/TB1CI5KGkP2gK0jSZPxXXacQpXa-64-64.png"
                alt=""
              />
              <img
                src="https://gw.alicdn.com/tfs/TB1ofeQGbj1gK0jSZFuXXcrHpXa-64-64.png"
                alt=""
              />
              <div class="qrContent">
                <img
                  src="https://gw.alicdn.com/tfs/TB1tIqtGhn1gK0jSZKPXXXvUXXa-260-260.png"
                  alt=""
                />
                <div class="qrContentText">钉钉扫描二维码<br />关注抖音官方号</div>
              </div>
            </div>
            <div class="imgItem">
              <img
                src="https://gw.alicdn.com/tfs/TB1e1mKGbr1gK0jSZR0XXbP8XXa-64-64.png"
                alt=""
              />
              <img
                src="https://gw.alicdn.com/tfs/TB1lrqKGXP7gK0jSZFjXXc5aXXa-64-64.png"
                alt=""
              />
              <div class="qrContent">
                <img
                  src="https://gw.alicdn.com/tfs/TB1EF9xGbj1gK0jSZFOXXc7GpXa-260-260.png"
                  alt=""
                />
                <div class="qrContentText">钉钉扫描二维码<br />关注B站官方号</div>
              </div>
            </div>
            <div class="imgItem">
              <img
                src="https://img.alicdn.com/imgextra/i3/O1CN019pg6aS1WIProanBnW_!!6000000002765-2-tps-64-64.png"
                alt=""
              />
              <img
                src="https://img.alicdn.com/imgextra/i2/O1CN01IVwD5w1mqnRxmUBng_!!6000000005006-2-tps-64-64.png"
                alt=""
              />
              <div class="qrContent">
                <img
                  src="https://gw.alicdn.com/imgextra/i1/O1CN01De2VLV1Mxxje0ewum_!!6000000001502-0-tps-200-200.jpg"
                  alt=""
                />
                <div class="qrContentText">钉钉扫描二维码<br />尊享客户服务</div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer3">
          <div class="footer3Item" v-for="(item, index) in footer3ItemData" :key="index">
            <img class="img1" :src="item.img" :style="item.style" alt="" />
            <img
              class="img2"
              :style="item.style"
              v-if="item.img2"
              :src="item.img2"
              alt=""
            />
            <div class="qrContent" v-if="item.imgQr">
              <img :src="item.imgQr" alt="" />
              <div class="qrContentText">扫描二维码<br />{{ item.imgQrText }}</div>
            </div>
          </div>
        </div>
        <div class="footer4">
          <div class="footer4Text1">
            <a
              :href="item.href"
              target="_blank"
              v-for="(item, index) in footer4Text1Data"
              :key="index"
            >
              <span>{{ item.text }}</span>
            </a>
          </div>
          <div class="footer4Text2">
            阿里钉钉Ⓒ版权公告© 2014-2024 钉钉科技有限公司和／或其关联公司版权所有
          </div>
          <div class="footer4Text3">
            跨地区增值电信业务证号：
            <a href="http://beian.miit.gov.cn" target="_blank">
              <span>B2-20184300</span>
            </a>
            &nbsp;&nbsp;浙江省增值电信业务经营许可证：
            <a href="http://beian.miit.gov.cn" target="_blank">
              <span>浙B2-20180981</span>
            </a>
            <a href="javascript:;" target="_blank">
              <span>&nbsp;&nbsp;人力资源服务许可证：余人社人介行许决【2020】003号</span>
            </a>
          </div>
          <div class="footer4Text4">
            <img
              src="https://img.alicdn.com/tfs/TB1WvYPX2WG3KVjSZFPXXXaiXXa-40-40.png"
              alt=""
            />
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002010140"
              target="_blank"
              >浙公网安备 33011002010140号</a
            >
            <img
              src="https://gw.alicdn.com/tfs/TB1GxwdSXXXXXa.aXXXXXXXXXXX-65-70.gif"
              alt=""
            />
            <a href="http://beian.miit.gov.cn" target="_blank">浙ICP备18037475号-1</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import HoverSelect from "../../components/hoverSelect.vue";
import Banner from "../../components/banner.vue";
import scrollImg from "../../components/scrollImg.vue";
import CustomDwrop from "./component/customDwrop.vue";
import { watch } from "vue";
const isShowGuangGao = ref(true);
const currentImg = ref(
  "https://img.alicdn.com/imgextra/i2/O1CN015mNOvD1ZHRzMns5Uf_!!6000000003169-2-tps-1558-958.png"
);
const isBest = ref(false);
const iconTextItemAc = ref(null);
const tabButton = ref(null);
const tabButton2 = ref(null);
const CaseBannerItemBox = ref(null);
const CaseBannerItem = ref(null);
const accordionCardItemwrap = ref(null);
const tabContentLeftHeight = ref(null);
const shabi = ref(null);
const bgShow = ref(false);
const dadBgsize = ref(110);
const CaseBannerItemBoxLeft = ref(0);
const CaseBannerToolActive = ref(0);
const bgShow2 = ref(0);
const tabLeft = ref(0);
const dtdLeft = ref(0);
const tabAc = ref(0);
const dtdTabsTopAc = ref(0);
const newCardsItemActive = ref(0);
const maxHight = ref(0);
const activeA = ref(0);
const activeA2 = ref(0);
const stepActive = ref(0);
const iconTextItem = ref();
const toUp = ref(0);
const toUp2 = ref(0);
const shangyige = ref(0);
const scale = ref(0.1);
const opacityNum = ref(0.1);
const opacityNum2 = ref(0.1);
const d3 = ref(0);
const customDwrop = ref(null);
const banner = ref(null);
const main = ref(null);
const innerwidth = ref(window.innerWidth);
const options1 = ref([
  { value: 1, label: "产业链" },
  { value: 2, label: "政府" },
  { value: 3, label: "零售" },
  { value: 4, label: "制造业" },
  { value: 5, label: "互联网" },
  { value: 6, label: "金融" },
  { value: 7, label: "医疗" },
  { value: 8, label: "交通" },
  { value: 9, label: "高校" },
  { value: 10, label: "地产物业" },
  { value: 11, label: "汽车" },
  { value: 12, label: "物流" },
  { value: 13, label: "一站式迁移" },
]);
const options2 = ref([
  { value: 1, label: "了解开放平台" },
  { value: 2, label: "钉钉PaaS" },
  { value: 3, label: "文档&帮助" },
  { value: 4, label: "开发者社区" },
  { value: 5, label: "生态&合作" },
]);
const options3 = ref([
  { value: 1, label: "帮助中心" },
  { value: 2, label: "钉钉动态" },
  { value: 3, label: "钉钉发布会" },
  { value: 4, label: "新功能推荐" },
  { value: 5, label: "魔法数智营" },
  { value: 6, label: "钉钉培训" },
  { value: 7, label: "安全合规中心" },
  { value: 8, label: "广告合作" },
  { value: 9, label: "社会招聘" },
  { value: 10, label: "校园招聘" },
  { value: 11, label: "钉钉进步体" },
]);
const bannerImg = ref([
  {
    img:
      "https://img.alicdn.com/imgextra/i4/O1CN01z1KiSy1Mx32WFPxFk_!!6000000001500-2-tps-3840-2600.png",
    color: "rgb(14, 223, 192)",
    a: "",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i2/O1CN01U1muil1mEmkij6lks_!!6000000004923-0-tps-3840-2600.jpg",
    color: "rgb(0, 106, 255)",
    a: "",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i3/O1CN01L1byYm1nAUeOYSBrj_!!6000000005049-0-tps-1920-1300.jpg",
    color: "rgb(0, 0, 30)",
    a: "",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i1/O1CN01YdBIM31ZqiY6Y8IMN_!!6000000003246-0-tps-3840-2600.jpg",
    color: "rgb(0, 102, 255)",
    a: "",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i4/O1CN01XlC2bK1kc1bJW70ug_!!6000000004703-0-tps-1920-1300.jpg",
    color: "rgb(1, 0, 0)",
    a: "",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i3/O1CN018Vxmzj1ywXxDaDa9M_!!6000000006643-0-tps-3840-2600.jpg",
    color: "rgb(35, 96, 245)",
    a: "",
  },
  {
    img:
      "https://gw.alicdn.com/imgextra/i1/O1CN013KBE191VxLqP7sNdF_!!6000000002719-2-tps-3840-2600.png",
    color: "rgb(80, 200, 255)",
    a: "",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i3/O1CN01nwj0Qi28cWqhH5k6n_!!6000000007953-2-tps-3840-2600.png",
    color: "rgb(24, 147, 254)",
    a: "",
  },
  {
    img:
      "	https://img.alicdn.com/imgextra/i1/O1CN014Hs5IE1ufowO6QL7p_!!6000000006065-2-tps-2496-1690.png",
    color: "rgb(17, 48, 145)",
    a: "",
  },
]);
const bannerCard = ref([
  {
    text1: "视频会议",
    text2: "让高效会议自然发生",
    src:
      "	https://img.alicdn.com/imgextra/i2/O1CN01MpKOZN1vg6nRxNuoH_!!6000000006201-2-tps-280-280.png",
    button: "加入会议",
    href: "https://www.dingtalk.com/meeting",
  },
  {
    text1: "钉钉AI助理",
    text2: "汇聚钉钉AI能力，助力企业智能办公",
    src:
      "https://img.alicdn.com/imgextra/i2/O1CN01OSWRkg1v4YRe2vGA9_!!6000000006119-2-tps-280-280.png",
    button: "立即查看",
    href: "https://page.dingtalk.com/wow/dingtalk/default/dingtalk/I0HfYX4QStBIpLgxnZQe",
  },
  {
    text1: "Teambition",
    text2: "Teambition轻松完成工作事",
    src:
      "https://img.alicdn.com/imgextra/i1/O1CN013ZfoHw22KJFv7VdX1_!!6000000007101-2-tps-280-280.png",
    button: "创建项目",
    href: "https://www.teambition.com/?channel=ding_gwyy",
  },
  {
    text1: "钉钉文档",
    text2: "活的文档，链接万物",
    src:
      "https://img.alicdn.com/imgextra/i3/O1CN01iGHrC31kXtvTsd3iF_!!6000000004694-2-tps-280-280.png",
    button: "立即使用",
    href: "https://docs.dingtalk.com/",
  },
]);
const aniamtionBlockData = ref([
  {
    position: "absolute",
    backgroundImage:
      "linear-gradient(-33deg,#8f35ff,rgba(143,53,255,0)),radial-gradient(circle at 62% -28%,rgba(0,45,156,.75) 0,#002d9c 68%,rgba(0,45,156,0) 111%),linear-gradient(116deg,rgba(0,137,255,.2) 1%,rgba(0,186,255,.04) 38%,rgba(68,149,255,.08) 68%,rgba(3,79,255,.16) 88%)",
    height: "1.6em",
    width: "1.6em",
    borderRadius: "0.3333em",
    left: "calc(50% - 7.56em)",
    top: "calc(50% - 4.21em)",
    noAdd: true,
    d3: -200,
    opacityConst: 0.42,
  },
  {
    position: "absolute",
    backgroundImage:
      "linear-gradient(133deg,rgba(255,186,0,0),rgba(255,207,0,.6) 68%),linear-gradient(170deg,#ffc400,#ff9200),linear-gradient(170deg,#ffc400,#ff9200)",
    height: "0.8em",
    width: "0.8em",
    borderRadius: "0.1667em",
    left: "calc(50% - 4.87em)",
    top: "calc(50% - 1.92em)",
    noAdd: true,
    d3: -200,
    opacityConst: 1,
  },
  {
    position: "absolute",
    backgroundColor: "#cc7201",
    height: "0.96em",
    width: "0.96em",
    borderRadius: "0.2em",
    left: "calc(50% - 6.24em)",
    top: "calc(50% - 1.41em)",
    noAdd: true,
    d3: -200,
    opacityConst: 0.8,
  },
  {
    position: "absolute",
    backgroundImage: "linear-gradient(170deg,#3e9eff,#0062ff)",
    height: ".4em",
    width: ".4em",
    borderRadius: "0.0833em",
    left: "calc(50% - 3.16em)",
    top: "calc(50% - 0.67em)",
    noAdd: true,
    d3: -200,
    opacityConst: 0.8,
  },
  {
    position: "absolute",
    backgroundImage: "linear-gradient(46deg,#ff5f00,#ff8d16)",
    height: "0.72em",
    width: "0.72em",
    borderRadius: "0.15em",
    left: "calc(50% - 5.79em)",
    bottom: "calc(50% - 1.75em)",
    noAdd: true,
    d3: -200,
    opacityConst: 0.4,
  },
  {
    position: "absolute",
    backgroundImage:
      "linear-gradient(220deg,#e58dff,#8f35ff 67%,rgba(143,53,255,0)),radial-gradient(circle at 1.2222% -87%,rgba(0,45,156,.75) 0,#002d9c 171%,rgba(0,45,156,0) 278%),linear-gradient(137deg,rgba(0,137,255,.3),rgba(3,79,255,.24))",
    height: "1.6em",
    width: "1.6em",
    borderRadius: "0.3333em",
    left: "calc(50% - 7.01em)",
    bottom: "calc(50% - 4.12em)",
    noAdd: true,
    d3: -200,
    opacityConst: 0.3,
  },
  {
    position: "absolute",
    backgroundImage:
      "linear-gradient(220deg,#e58dff,#8f35ff 67%,rgba(143,53,255,0)),radial-gradient(circle at 1.2222% -87%,rgba(0,45,156,.75) 0,#002d9c 171%,rgba(0,45,156,0) 278%),linear-gradient(137deg,rgba(0,137,255,.3),rgba(3,79,255,.24))",
    borderRadius: "0.05em",
    height: "0.24em",
    left: "calc(50% - 2.43em)",
    top: "calc(50% - .03em)",
    width: "0.24em",
    noAdd: true,
    d3: -200,
    opacityConst: 0.3,
  },
  {
    position: "absolute",
    backgroundImage:
      "linear-gradient(-27deg,rgba(143,53,255,.8) 11%,rgba(143,53,255,0)),radial-gradient(circle at 62% -28%,rgba(0,45,156,.75) 0,#002d9c 68%,rgba(0,45,156,0) 111%)",
    height: "0.96em",
    width: "0.96em",
    borderRadius: "0.2em",
    left: "calc(50% - 1.54em)",
    top: "calc(50% - 4.73em)",
    noAdd: false,
    d3: -200,
    opacityConst: 0.32,
  },
  {
    position: "absolute",
    backgroundColor: "#ffa800",
    height: "0.46em",
    width: "0.46em",
    borderRadius: "0.0958em",
    left: "calc(50% - 3.62em)",
    bottom: "calc(50% - 0.98em)",
    noAdd: true,
    d3: -200,
    opacityConst: 1,
  },
  {
    position: "absolute",
    backgroundImage: "linear-gradient(180deg,#004fff,rgba(0,45,156,0) 70%)",
    height: "0.96em",
    width: "0.96em",
    borderRadius: "0.2em",
    left: "calc(50% - 1.65em)",
    bottom: "calc(50% - 4.8em)",
    noAdd: true,
    d3: -200,
    opacityConst: 0.28,
  },
  {
    position: "absolute",
    backgroundImage:
      "-webkit-radial-gradient(top,rgba(0,45,156,.75) 0,#002d9c 92%,rgba(0,45,156,0) 166%)",
    height: ".4em",
    width: ".4em",
    borderRadius: ".0833em",
    left: "calc(50% - .26em)",
    bottom: "calc(50% - 3.52em)",
    noAdd: false,
    d3: -200,
    opacityConst: 0.39,
  },
  {
    position: "absolute",
    backgroundImage:
      "-webkit-radial-gradient(top,rgba(0,45,156,.75) 0,#002d9c 92%,rgba(0,45,156,0) 166%),-webkit-linear-gradient(334deg,rgba(0,137,255,.2) 1%,rgba(0,186,255,.04) 38%,rgba(68,149,255,.08) 68%,rgba(3,79,255,.16) 88%)",
    height: "64px",
    width: "64px",
    borderRadius: "13.33px",
    right: "calc(50% - 1.02em)",
    top: "calc(50% - 3.95em)",
    noAdd: false,
    d3: -200,
    opacityConst: 0.45,
  },
  {
    position: "absolute",
    backgroundImage:
      "linear-gradient(147deg,#004fff,#002d9c 82%),linear-gradient(153deg,#007fff 5%,#0063ff 95%)",
    height: ".24em",
    width: ".24em",
    borderRadius: ".05em",
    right: "calc(50% - .38em)",
    top: "calc(50% - 2.06em)",
    noAdd: false,
    d3: -200,
    opacityConst: 0.3,
  },
  {
    position: "absolute",
    backgroundImage:
      "linear-gradient(39deg,rgba(0,79,255,0),#004fff 72%),linear-gradient(153deg,#007fff 5%,#0063ff 95%)",
    height: "1.3em",
    width: "1.3em",
    borderRadius: ".2708em",
    right: "calc(50% - 7.04em)",
    top: "calc(50% - 3.63em)",
    noAdd: false,
    d3: -200,
    opacityConst: 0.7,
  },
  {
    position: "absolute",
    backgroundImage: "linear-gradient(128deg,#00ebb6,#00ba46 69%)",
    height: ".64em",
    width: ".64em",
    borderRadius: ".1333em",
    right: "calc(50% - 5.05em)",
    top: "calc(50% - 2.26em)",
    noAdd: false,
    d3: -200,
    opacityConst: 1,
  },
  {
    position: "absolute",
    backgroundImage: "linear-gradient(170deg,#ffc400,rgba(255,207,0,.6))",
    height: ".24em",
    width: ".24em",
    borderRadius: ".05em",
    right: "calc(50% - 2.18em)",
    top: "calc(50% - .52em)",
    noAdd: false,
    d3: -200,
    opacityConst: 0.2,
  },
  {
    position: "absolute",
    backgroundImage: "linear-gradient(170deg,#00b6ff,#007fff)",
    height: ".24em",
    width: ".24em",
    borderRadius: ".05em",
    right: "calc(50% - 3em)",
    bottom: "calc(50% - .49em)",
    noAdd: false,
    d3: -200,
    opacityConst: 1,
  },
  {
    position: "absolute",
    backgroundImage: "linear-gradient(148deg,#76d2ff,#09baff 99%)",
    height: ".64em",
    width: ".64em",
    borderRadius: ".1333em",
    right: "calc(50% - 4.53em)",
    bottom: "calc(50% - 1.7em)",
    noAdd: false,
    d3: -200,
    opacityConst: 1,
  },
  {
    position: "absolute",
    backgroundImage: "linear-gradient(136deg,#3e9eff 19%,#0062ff)",
    height: ".96em",
    width: ".96em",
    borderRadius: ".2em",
    right: "calc(50% - 6.57em)",
    bottom: "calc(50% - 1.33em)",
    noAdd: false,
    d3: -200,
    opacityConst: 1,
  },
  {
    position: "absolute",
    backgroundImage:
      "linear-gradient(147deg,rgba(0,79,255,.6),rgba(0,45,156,.6) 82%),linear-gradient(153deg,#007fff 5%,#0063ff 95%)",
    height: "1.6em",
    width: "1.6em",
    borderRadius: ".3333em",
    right: "calc(50% - 8em)",
    bottom: "calc(50% - 3.45em)",
    noAdd: false,
    d3: -200,
    opacityConst: 0.5,
  },
]);
const iconTextData = ref([
  {
    img:
      "https://img.alicdn.com/imgextra/i3/O1CN01TVWH501KYCEaUxPgv_!!6000000001175-0-tps-480-480.jpg",
    text: "即时沟通",
    iconTextItemStyle: [],
    href:
      "https://page.dingtalk.com/wow/dingtalk/act/goutongh5?spm=a213l2.24228413.2195812800.17.d31c4a8fj4tHA7",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i1/O1CN01vqBxIP1L5d98G9xJD_!!6000000001248-0-tps-480-480.jpg",
    text: "组织",
    iconTextItemStyle: [],
    href:
      "https://page.dingtalk.com/wow/dingtalk/act/groupcontact?spm=a213l2.13308863.5866441701.46.4148ddd6pi8D5A",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i3/O1CN01AKJU3T1tSi2NAFHFP_!!6000000005901-0-tps-480-480.jpg",
    text: "智能人士",
    iconTextItemStyle: [],
    href:
      "https://page.dingtalk.com/wow/z/dingtalk/default/HrmPlatform?spm=a213l2.14027862.9451075229.41.587324a8XpNChQ",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i1/O1CN01E0GR9h1ZXwFI8dRl1_!!6000000003205-0-tps-480-480.jpg",
    text: "组织大脑",
    iconTextItemStyle: [],
    href:
      "https://page.dingtalk.com/wow/z/dingtalk/default/8LK7JRROU1H?spm=a213l2.13146415.4929779444.40.2ddd71e1SjUvkU",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i1/O1CN01sphiAp1Fj7bOKEppz_!!6000000000522-2-tps-480-480.png",
    text: "OA审批",
    iconTextItemStyle: [],
    href:
      "https://page.dingtalk.com/wow/dingtalk/act/approvalweb?spm=a213l2.24828320.8508212844.50.6eeb4b55NXu8c2",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i2/O1CN015T9BdZ28Ns5n1A82W_!!6000000007921-0-tps-480-480.jpg",
    text: "邮箱",
    iconTextItemStyle: [],
    href:
      "https://page.dingtalk.com/wow/z/dingtalk/act/dingemail?spm=a213l2.13290233.7026689102.36.54504414lVdmoL",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i3/O1CN01bc6FKX1OCuHkDC2J7_!!6000000001670-0-tps-480-480.jpg",
    text: "Teambition",
    iconTextItemStyle: [],
    href: "https://www.teambition.com/?channel=ding_gwyy",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i1/O1CN01Y936lS1whluhvos2E_!!6000000006340-0-tps-480-480.jpg",
    text: "文档",
    iconTextItemStyle: [],
    href: "https://docs.dingtalk.com/",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i3/O1CN017Wk2Cp1lp8VaSd22U_!!6000000004867-0-tps-480-480.jpg",
    text: "音视频会议",
    iconTextItemStyle: [],
    href:
      "https://page.dingtalk.com/wow/dingtalk/act/shipinhuiyipc?spm=a213l2.23906990.5689269260.19.498a23bcOAq0rx",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i4/O1CN016JIoXg1lMHYbmErdR_!!6000000004804-0-tps-240-240.jpg",
    text: "开放平台",
    iconTextItemStyle: [],
    href: "https://open.dingtalk.com/?spm=a213l2.13303826.2859856354.88.3e265595xhY4Mi",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i3/O1CN011GyvMe1of0bAveV4u_!!6000000005251-0-tps-480-480.jpg",
    text: "宜搭",
    iconTextItemStyle: [],
    href:
      "https://www.aliwork.com/?spm=a213l2.13303826.2859856354.58.3e265595xhY4Mi&lwfrom=2019082517081737000",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i2/O1CN01zFSNcP26wYrM09A4S_!!6000000007726-0-tps-480-480.jpg",
    text: "钉闪会",
    iconTextItemStyle: [],
    href:
      "https://page.dingtalk.com/wow/z/dingtalk/default/flashmeeting?spm=a213l2.24828320.8508212844.30.6eeb4b55NXu8c2",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i2/O1CN0142F9wc23s261dItxf_!!6000000007310-0-tps-480-480.jpg",
    text: "连接器",
    iconTextItemStyle: [],
    href: "https://open.dingtalk.com/developer/connector",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i4/O1CN012wi8vZ1xt3HbO0ttd_!!6000000006500-0-tps-480-480.jpg",
    text: "酷应用",
    iconTextItemStyle: [],
    href:
      "https://open.dingtalk.com/coolapp?spm=a213l2.23906990.5689269260.39.498a23bcOAq0rx",
  },
]);
const accordionCardData = ref([
  {
    img:
      "https://img.alicdn.com/imgextra/i2/O1CN01N0P5QZ1n4XNS0upCQ_!!6000000005036-2-tps-816-520.png",
    text1: "云考勤机",
    text2: "M2",
    text1Wanzheng: "云考勤机M2",
    text2Wanzheng: "这不仅仅是一台考勤机",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i2/O1CN01kMPCp81bPoNmfkFlH_!!6000000003458-2-tps-816-538.png",
    text1: "智能门禁机",
    text2: "D3",
    text1Wanzheng: "智能门禁机D3",
    text2Wanzheng: "有温度的理想办公即可开启",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i1/O1CN01dBbYYB21IBnvcjjnq_!!6000000006961-2-tps-816-520.png",
    text1: "云打印机",
    text2: "M6568NW",
    text1Wanzheng: "智能云打印机",
    text2Wanzheng: "多终端共享打印",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i2/O1CN01ijFrry20uND3ZRSr5_!!6000000006909-2-tps-828-520.png",
    text1: "音视频硬件",
    text2: "F2",
    text1Wanzheng: "音视频硬件F2",
    text2Wanzheng: "让高效会议自然发生",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i3/O1CN01ltxwcI20dQYOVKFNM_!!6000000006872-2-tps-816-520.png",
    text1: "XR眼镜",
    text2: "Rokid Air",
    text1Wanzheng: "XR眼镜Rokid Air",
    text2Wanzheng: "开启你的沉浸办公空间",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i3/O1CN01EEbztT1PAu6XwNS2g_!!6000000001801-2-tps-816-520.png",
    text1: "硬件生态",
    text2: "开放共赢",
    text1Wanzheng: "硬件生态开放共赢",
    text2Wanzheng: "XR混合办公室打造计划",
  },
]);
const tabData = ref([
  {
    text: "内容创作",
  },
  {
    text: "项目协作",
  },
  {
    text: "知识管理",
  },
  {
    text: "高效会议",
  },
]);
const tabContentLeftData = ref([
  {
    icon:
      "https://img.alicdn.com/imgextra/i1/O1CN01O78AaM1HuERLY6Q31_!!6000000000817-2-tps-200-200.png",
    leftTitle1: "钉钉文档",
    leftTitle2: "内容创作与知识管理平台",
    step: [
      {
        text1: "流畅编辑，沉浸著作",
        text2: "输入“/”立刻唤起50+种插入方式",
        img:
          "https://img.alicdn.com/imgextra/i2/O1CN015mNOvD1ZHRzMns5Uf_!!6000000003169-2-tps-1558-958.png",
      },
      {
        text1: "连接人和文档，高效协作",
        text2: "文档中“@”协作伙伴，快速触达",
        img:
          "https://img.alicdn.com/imgextra/i3/O1CN01gXTwdU1Tu1eU6e1oP_!!6000000002441-2-tps-1560-959.png",
      },
      {
        text1: "多种方式，精彩分享",
        text2: "文档秒变PPT；支持生成成长图/视频",
        img:
          "https://img.alicdn.com/imgextra/i1/O1CN01nUDq3B1zHc8hYVgqn_!!6000000006689-2-tps-1558-958.png",
      },
    ],
    href: "https://docs.dingtalk.com/",
  },
  {
    icon:
      "https://img.alicdn.com/imgextra/i3/O1CN012uxavr1kXtzPUS7Fa_!!6000000004694-2-tps-200-200.png",
    leftTitle1: "Teambition",
    leftTitle2: "项目协作，简单好用",
    step: [
      {
        text1: "强大的项目视图",
        text2: "项目进度一览无余，随时随地知晓信息",
        img:
          "https://img.alicdn.com/imgextra/i1/O1CN01NdQboY24qwiORWcdj_!!6000000007443-2-tps-1556-956.png",
      },
      {
        text1: "协作管理闭环",
        text2: "轻松构建协作，统计分析，把控全局",
        img:
          "https://img.alicdn.com/imgextra/i4/O1CN01D2bHwa1dYAr5zipEu_!!6000000003747-2-tps-1556-956.png",
      },
      {
        text1: "聚合的任务协作",
        text2: "承载所有信息，任务跟进有始有终",
        img:
          "https://img.alicdn.com/imgextra/i1/O1CN016I0wdk1oLlu059QwA_!!6000000005209-2-tps-1556-956.png",
      },
    ],
    href: "https://www.teambition.com/?channel=ding_gwyy",
  },
  {
    icon:
      "https://img.alicdn.com/imgextra/i2/O1CN01UK4pEF1sfhf20A8K6_!!6000000005794-2-tps-200-200.png",
    leftTitle1: "知识库",
    leftTitle2: "知识沉淀，井井有条",
    step: [
      {
        text1: "零散文件，统一沉淀",
        text2: "文件、日志、闪会意见保存至知识库",
        img:
          "https://img.alicdn.com/imgextra/i4/O1CN0164du7U1E7jehYBz7c_!!6000000000305-2-tps-1558-958.png",
      },
      {
        text1: "整理方便，清晰呈现",
        text2: "用书本目录方式整理文档，一目了然",
        img:
          "https://img.alicdn.com/imgextra/i2/O1CN014Mproh25ONga7VTNB_!!6000000007516-2-tps-1558-958.png",
      },
      {
        text1: "全局搜索，快速查找",
        text2: "输入关键字，快速找到所需文档",
        img:
          "https://img.alicdn.com/imgextra/i4/O1CN01IP7SDL1tD8ZXeZyUA_!!6000000005867-2-tps-1558-958.png",
      },
    ],
    href:
      "https://login.dingtalk.com/oauth2/challenge.htm?redirect_uri=https%3A%2F%2Fdocs.dingtalk.com%2Fi%2Fdesktop%2Fspaces&response_type=none&client_id=dingoajosaltohiugdhutt&scope=openid",
  },
  {
    icon:
      "https://img.alicdn.com/imgextra/i3/O1CN016IEXA81viOq7Egqxv_!!6000000006206-2-tps-200-200.png",
    leftTitle1: "钉闪会",
    leftTitle2: "少开会，开好会，开会就用钉闪会",
    step: [
      {
        text1: "会前有准备",
        text2: "海量会议模板，提前填报议题",
        img:
          "https://img.alicdn.com/imgextra/i4/O1CN01Yb2pUS27Wk5VIEBfv_!!6000000007805-2-tps-1560-960.png",
      },
      {
        text1: "会中有聚焦",
        text2: "划词评论聚焦问题，计时器有效的把控",
        img:
          "https://img.alicdn.com/imgextra/i3/O1CN01C45O8k1emezyn7Z9v_!!6000000003914-2-tps-1560-960.png",
      },
      {
        text1: "会后有跟进",
        text2: "会议代办责任到人，进展清晰明确",
        img:
          "https://img.alicdn.com/imgextra/i3/O1CN01SfbWMO1KTcFpBQOAX_!!6000000001165-2-tps-1558-958.png",
      },
    ],
    href:
      "https://page.dingtalk.com/wow/z/dingtalk/default/flashmeeting?spm=a213l2.24828320.8508212844.30.6eeb4b55NXu8c2",
  },
]);
const dadTabData = ref([
  {
    img:
      "https://img.alicdn.com/imgextra/i3/O1CN01IVrV7L29OcIfoOh4J_!!6000000008058-2-tps-1176-840.png",
    text1: "零售解决方案",
    text2:
      "通过钉钉底座能力开放，全面实现采购、门店、生产、物流等流程融合、数据互通，彻底释放零售组织业务效能！",
    img2:
      "https://img.alicdn.com/imgextra/i4/O1CN011DAbc81O9hRnDy3h5_!!6000000001663-2-tps-600-600.png",
    position: {
      bottom: "24px",
      right: "-53px",
    },
    href: "https://page.dingtalk.com/wow/z/dingtalk/ddhome/F7sj7Ba6REZfZ4MhaJDN",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i4/O1CN01uKwGe627yDrPM3yjN_!!6000000007865-2-tps-882-630.png",
    text1: "制造解决方案",
    text2:
      "钉钉制造业依托阿里云坚实基础，上连生产业务、下连生产设备，让“工单找人”、“机器找人”为工厂加速。",
    img2:
      "https://img.alicdn.com/imgextra/i3/O1CN017k4BvI1taUi9QBnYQ_!!6000000005918-2-tps-610-610.png",
    position: {
      top: "-87px",
      left: "-78px",
    },
    href: "https://page.dingtalk.com/wow/z/dingtalk/ddhome/8jjcEXc6YAMHGQWhtWE4",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i2/O1CN01PdoOGf27mlxaemLLm_!!6000000007840-2-tps-882-630.png",
    text1: "金融解决方案",
    text2:
      "钉钉助力金融机构打造数字化基础设施，构建安全协同环境，2000+API与自建应用深度融合，低代码填平内部数字化“鸿沟”，TB支撑全组织项目事务协同，最终实现全要素…",
    img2:
      "https://img.alicdn.com/imgextra/i2/O1CN01Rhicu51q0p0udex87_!!6000000005434-2-tps-600-600.png",
    position: {
      top: "17px",
      right: "59",
    },
    href: "https://page.dingtalk.com/wow/z/dingtalk/ddhome/I4192KEKGE",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i3/O1CN01mZtG6H1KsLbnRcqvY_!!6000000001219-2-tps-882-630.png",
    text1: "医疗解决方案",
    text2:
      "将钉钉作为运营管理底座，以人为中心，联结全场景应用，支撑跨院区协同，全面提升管理效能。",
    img2:
      "https://img.alicdn.com/imgextra/i1/O1CN01o7202H1YQmNPP3WrO_!!6000000003054-2-tps-600-600.png",
    position: {
      top: "-60px",
      left: "-11px",
    },
    href: "https://page.dingtalk.com/wow/z/dingtalk/ddhome/204FT7CD3NN",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i2/O1CN01RY5Y9z1d79UizJrE2_!!6000000003688-2-tps-882-630.png",
    text1: "高校解决方案",
    text2:
      "助力高校实现教育技术数据智能，从数字校园、智慧教学、科研创新、人才服务，全方位支撑高校教学模式改革和教育质量提升。",
    img2:
      "https://img.alicdn.com/imgextra/i1/O1CN01AHSogO1H4TcafhN6b_!!6000000000704-2-tps-600-600.png",
    position: {
      top: "31px",
      right: "-61px",
    },
    href: "https://page.dingtalk.com/wow/z/dingtalk/ddhome/SN7E64O3CT",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i3/O1CN01QdKCXy23qesbsKTi7_!!6000000007307-0-tps-1176-840.jpg",
    text1: "高校解决方案",
    text2:
      "助力高校实现教育技术数据智能，从数字校园、智慧教学、科研创新、人才服务，全方位支撑高校教学模式改革和教育质量提升。",
    img2:
      "https://img.alicdn.com/imgextra/i1/O1CN015FKAO41TuU1GPByTx_!!6000000002442-2-tps-600-600.png",
    position: {
      top: "60px",
    },
    href:
      "https://page.dingtalk.com/wow/z/dingtalk/ddhome/1QO31RW6XTT?spm=a1zfx5.my_create_page.0.0.fde222518MF4eg",
  },
]);
const newCardsItemContentData = ref([
  {
    icon:
      "https://gw.alicdn.com/imgextra/i4/O1CN01VOF2FB1bUOU3le6EF_!!6000000003468-1-tps-500-500.gif",
    title: "企业版",
    text1: "面向初创小微企业;",
    text2: "管理有序、协同高效、形象专业",
    price: undefined,
    price1: "980",
    price2: "/年",
    btn: "立即升级",
    bg: {
      background:
        "linear-gradient(51deg, rgb(117, 210, 253) 10%, rgba(233, 246, 253, 0.8) 106%), rgb(255, 255, 255)",
    },
    bg2: {
      background:
        "linear-gradient(214deg, rgb(191, 228, 251) -6%, rgba(46, 181, 255, 0.35) 76%), linear-gradient(223deg, rgb(53, 184, 255) 7%, rgb(0, 146, 234) 82%)",
    },
    href:
      "https://page.dingtalk.com/wow/dingtalk/default/dingtalk/dingtalkstartup_pc?channel=onlineop_guanwang_sytj_pc",
    btnUrl:
      "https://oa.dingtalk.com/goods_order#/orderCreate?articleCode=DT_GOODS_dingtalkstartup&channel=onlineop_guanwang_sytj_pc",
  },
  {
    icon:
      "https://gw.alicdn.com/imgextra/i2/O1CN01ym60VV1IfPJHOwLTt_!!6000000000920-2-tps-500-500.png",
    title: "专业版",
    text1: "面向中小企业;",
    text2: "深度协同、资产安全、灵活开放",
    price: undefined,
    price1: "9800",
    price2: "/年",
    btn: "预约咨询",
    bg: {
      background:
        "linear-gradient(58deg, rgb(124, 183, 255) -1%, rgb(190, 219, 255) 51%, rgb(219, 238, 255) 76%, rgb(255, 255, 255) 138%), rgb(255, 255, 255)",
    },
    bg2: {
      background:
        "linear-gradient(60deg, rgb(0, 120, 241) 1%, rgb(217, 227, 255) 123%), rgb(255, 255, 255)",
    },
    href:
      "https://page.dingtalk.com/wow/dingtalk/default/dingtalk/DTProfVersion2?channel=aggregation&spm=a2q49.26303778",
    btnUrl:
      "https://partner.dingtalk.com/opportunity_web.html?templateId=00df3f641dee48c7838b4ca473235145&channel=aggregation&invitedCode=&invitedDeptId=&subSource&spm=a2q49.26303778#/consultingService",
  },
  {
    icon:
      "https://gw.alicdn.com/imgextra/i4/O1CN01hUUrBC1t3WKT0Yb64_!!6000000005846-2-tps-500-500.png",
    title: "专属版",
    text1: "面向中大企业;",
    text2: "安全合规、自主可控、产业互联",
    price: undefined,
    price1: "98000",
    price2: "/年起",
    btn: "预约咨询",
    bg: {
      background:
        "linear-gradient(35deg, rgb(140, 172, 255) -4%, rgb(197, 214, 255) 51%, rgb(217, 227, 255) 78%, rgb(255, 255, 255) 144%), rgb(255, 255, 255)",
    },
    bg2: {
      background:
        "linear-gradient(48deg, rgb(0, 71, 250) 22%, rgb(217, 227, 255) 126%), rgb(255, 255, 255)",
    },
    href:
      "https://page.dingtalk.com/wow/dingtalk/default/dingtalk/dnR75GyEQ1q4lXoU83Wu?dd_mini_app_id=5000000004997171",
    btnUrl:
      "https://partner.dingtalk.com/opportunity_web.html?channel=guanwang_trial&templateId=092b3722b3fd4dd08fb641a194a90691#/consultingService",
  },
  {
    icon:
      "https://gw.alicdn.com/imgextra/i3/O1CN01JOSf161R7MPRfVAzB_!!6000000002064-1-tps-500-500.gif",
    title: "混合版",
    text1: "面向大型组织;",
    text2: "公私结合、本地运行、一致体验",
    price: "按需购买",
    price1: "",
    price2: "",
    btn: "预约咨询",
    bg: {
      background:
        "linear-gradient(35deg, rgb(140, 155, 255) -2%, rgb(216, 219, 255) 67%, rgb(218, 228, 255) 105%, rgb(255, 255, 255) 147%), rgb(255, 255, 255)",
    },
    bg2: {
      background:
        "linear-gradient(206deg, rgb(60, 70, 255) 3%, rgba(30, 53, 175, 0) 70%), conic-gradient(from 247deg at 56% 125%, rgb(20, 25, 105) 0deg, rgb(41, 56, 232) 162deg, rgb(20, 25, 105) 360deg, rgb(41, 56, 232) 522deg), rgb(255, 255, 255)",
    },
    href:
      "https://page.dingtalk.com/wow/dingtalk/default/dingtalk/TiXM7A9ga0m8zwiVtk1hw?dd_mini_app_id=5000000004997171",
    btnUrl:
      "https://yida.alibaba-inc.com/o/zhuanyoudd?channel=aggregation&spm=a2q49.26303778#/",
  },
]);
const dtdTabsTopBtnData = ref(["零售", "制造", "金融", "医疗", "交通", "高校"]);
const aniamtionBlock = ref(null);
const allServeData = ref([
  {
    text1: "人工服务",
    text2: "在线和热线客服为你解答",
    img:
      "https://gw.alicdn.com/imgextra/i4/O1CN01ei7Y2k25juNCpdEMt_!!6000000007563-2-tps-1560-720.png",
  },
  {
    text1: "技术支持",
    text2: "专属服务群1V1支持（付费版）",
    img:
      "https://gw.alicdn.com/imgextra/i4/O1CN01TpDSud1qP68of5UO1_!!6000000005487-2-tps-1560-720.png",
  },
  {
    text1: "帮助中心",
    text2: "7x24小时AI服务，降低企业运营成本",
    img:
      "https://gw.alicdn.com/imgextra/i1/O1CN01UtpfhX1dLLtfavwbV_!!6000000003719-2-tps-1560-720.png",
  },
  {
    text1: "方案专家",
    text2: "根据企业需求，制定解决方案",
    img:
      "https://gw.alicdn.com/imgextra/i4/O1CN01xq83L71bT1IRA1Phf_!!6000000003465-2-tps-1560-720.png",
  },
  {
    text1: "数智化服务专家",
    text2: "数字化咨询与培训服务，帮助企业AI转型",
    img:
      "https://gw.alicdn.com/imgextra/i3/O1CN01MXi4H81rgKezQrMt9_!!6000000005660-2-tps-1560-720.png",
  },
  {
    text1: "迁移服务",
    text2: "提供组织上钉数据迁移服务",
    img:
      "https://gw.alicdn.com/imgextra/i4/O1CN01agHb461CAMlpY2cmm_!!6000000000040-2-tps-1560-720.png",
  },
]);
const CaseBannerData = ref([
  {
    img:
      "https://img.alicdn.com/imgextra/i3/O1CN01YA0GhR1y2fXFdst1E_!!6000000006521-2-tps-384-200.png",
    icon:
      "https://img.alicdn.com/imgextra/i4/O1CN015LT1jT1I4lU9tHU4p_!!6000000000840-2-tps-240-48.png",
    text1: `钉钉助力盒马<br>极致生鲜`,
    activeText1: "零售｜2000人以上",
    activeText2:
      "盒马力求让顾客足不出户就可以享受到世界美味。现在通过钉钉，盒马员工提高了工作协同效率。钉钉和盒马，两者对于工作高效的追求非常契合。",
    href:
      "https://page.dingtalk.com/wow/tianyuan/act/toufang?wh_showError=true&caseId=MjI3NA==",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i4/O1CN01kmW7CH1iYEyzozLEr_!!6000000004424-2-tps-768-400.png",
    icon:
      "https://img.alicdn.com/imgextra/i2/O1CN01e1Vhgj1p9Efn5GKjm_!!6000000005317-2-tps-480-96.png",
    text1: `后疫情时代下<br>新零售的高效管理`,
    activeText1: "零售｜1000-2000人",
    activeText2: "高频流动的门店管理问题如何通过钉钉解决。",
    href:
      "https://pages.dingtalk.com/wow/tianyuan/act/toufang?spm=a213l2.13146415.4929779444.134.7f1571e1mzSNfo&wh_showError=true&caseId=Mzc1OA%3D%3D",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i2/O1CN01WSHt3h1OcYOvRqynm_!!6000000001726-2-tps-768-400.png",
    icon:
      "https://img.alicdn.com/imgextra/i4/O1CN01hymOlH24sJth1Ag2X_!!6000000007446-2-tps-480-96.png",
    text1: `深耕'耳朵经济',<br>打造高效核心团队`,
    activeText1: "零售 ｜ 2000人以上 ",
    activeText2:
      "喜马拉雅选择钉钉作为公司的工作平台，通过为产品、研发、运营等部门带来的新协同工作方式，将开发迭代周期缩短三分之二，切实有效地提升了研发效能。",
    href:
      "https://page.dingtalk.com/wow/tianyuan/act/toufang?spm=a213l2.13951850.list.128.1630537aJ2qsGS&wh_showError=true&caseId=MzI0MQ==&aa=1",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i4/O1CN0182ZFyO1c9bzX1PmDH_!!6000000003558-2-tps-768-400.png",
    icon:
      "https://img.alicdn.com/imgextra/i3/O1CN016TFQm01pSvhYtcVAx_!!6000000005360-2-tps-480-96.png",
    text1: `钉钉赋能酒店管理的升<br>级变革`,
    activeText1: "连锁酒店 ｜2000人以上 ",
    activeText2:
      "钉钉通过“数字化”解决运营中的“痛”，有效解决了酒店行业不得不面临管理的“难”、成本控制上的“难”",
    href:
      "https://page.dingtalk.com/wow/tianyuan/act/toufang?spm=a213l2.13951850.list.10.31a6537axX6Eoj&wh_showError=true&caseId=MjE1NA==&aa=1",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i2/O1CN01RV0a7a21VTI2VIC3r_!!6000000006990-2-tps-768-400.png",
    icon:
      "https://img.alicdn.com/imgextra/i2/O1CN01yG9EP81QWGBr7Sm4h_!!6000000001983-2-tps-480-96.png",
    text1: `打造数字化透明工厂，传统企业数字转型的新思路`,
    activeText1: "制造业｜2000人以上 ",
    activeText2:
      "柳钢集团在使用钉钉后，致力为设备赋能赋智，实现新突破，打开新局面，力争在数字化建设道路上更进一步！",
    href:
      "https://page.dingtalk.com/wow/tianyuan/act/toufang?spm=a213l2.13951850.list.22.31a6537axX6Eoj&wh_showError=true&caseId=MzA0Mg==&aa=1",
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i2/O1CN01RJurny251TuJR8eh3_!!6000000007466-0-tps-1778-870.jpg",
    icon:
      "https://img.alicdn.com/imgextra/i1/O1CN01XP5xms1pL8y8xWYtH_!!6000000005343-2-tps-480-96.png",
    text1: "“人通”“事通”“数通”构建三通数字化底座，激活组织效能",
    activeText1: "保险｜2000人以上 ",
    activeText2:
      "通过全面部署钉钉，快速发展中的信泰保险驶上数字化快车道，组织执行力和协同效能强势跃迁。",
    href:
      "https://page.dingtalk.com/wow/tianyuan/act/toufang?wh_showError=true&caseId=NTI5Nw==",
  },
]);
const CasePlayImgs = ref([
  "https://img.alicdn.com/imgextra/i4/O1CN018xHqp11HAQm1dR3W4_!!6000000000717-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01cxNKfp25LdFUsauQ9_!!6000000007510-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i4/O1CN01iGda6e1wRHat2myvC_!!6000000006304-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i1/O1CN018HEhI51QIyhzR6T33_!!6000000001954-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i3/O1CN01TZT2j51Q3rjEfObPe_!!6000000001921-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i1/O1CN01m4EHxP1kmYbIFG40O_!!6000000004726-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i3/O1CN01aa2yQo1gN89RNzGE0_!!6000000004129-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i3/O1CN01uVG86O24RIX0Neu2T_!!6000000007387-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01rsyfxW1lbqxdLxtbj_!!6000000004838-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i3/O1CN01ELhOte1KDaLm3i2mE_!!6000000001130-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i4/O1CN01uPXqL31jTUV3Ohik8_!!6000000004549-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01bMC8W01hiUEijrBqL_!!6000000004311-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01qw0L3g25S2nOrdAEA_!!6000000007524-2-tps-400-200.png",
]);
const CasePlayImgs2 = ref([
  "https://img.alicdn.com/imgextra/i3/O1CN01ybcx2k29yLBZzrO52_!!6000000008136-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01Mrw1oc1DzwrZdK9Qm_!!6000000000288-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i3/O1CN01HXgMfO1pCRRwMSjq9_!!6000000005324-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i1/O1CN01rkxbRH1IhEl9Y6wHX_!!6000000000924-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i4/O1CN01ygzLuQ1koqaGBSDQG_!!6000000004731-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01QLSUcS1lv5azFRBQK_!!6000000004880-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01xT5wGH20uNDMqEbWp_!!6000000006909-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i1/O1CN01qIrOub1a4uhfqpkkp_!!6000000003277-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i3/O1CN01rXGSLX1QWGC5DIOkt_!!6000000001983-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i3/O1CN01P2oLnV1e7tkPACuLZ_!!6000000003825-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01lTgpyA29q63X4OdNt_!!6000000008118-2-tps-400-200.png",
]);
const CasePlayImgs3 = ref([
  "https://img.alicdn.com/imgextra/i4/O1CN01S5Owuw1l9unfvBPVI_!!6000000004777-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i1/O1CN01PrlyXM1enZn0Ybxxu_!!6000000003916-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i1/O1CN01dqg8rM28Bxjhm2l5s_!!6000000007895-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01hQ3umX1e6WYi8UWKb_!!6000000003822-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i1/O1CN01aouCwu1JiRPoJouGL_!!6000000001062-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i3/O1CN01FcvdSW1X9XrL5CA4d_!!6000000002881-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i3/O1CN01jxRviY1TT0Du59mtJ_!!6000000002382-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i2/O1CN014d1bSm1mYTejvpykS_!!6000000004966-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i3/O1CN01clVEV11KudZybXe1k_!!6000000001224-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i3/O1CN01xs1Fl127DxqjBkcbq_!!6000000007764-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i4/O1CN01xsHEg01jY4Sd0ihoY_!!6000000004559-2-tps-400-200.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01LZfUT322j2eA99Dbl_!!6000000007155-2-tps-400-200.png",
]);
const footer1 = ref([
  {
    title: "热门产品",
    data: [
      {
        text: "钉钉文档",
        href: "https://docs.dingtalk.com/?spm=a213l2.13146415.0.0.7f1571e1JgH95K",
      },
      {
        text: "视频会议",
        href:
          "https://page.dingtalk.com/wow/dingtalk/act/shipinhuiyipc?spm=a213l2.13146415.0.0.7f1571e1JgH95K",
      },
      {
        text: "钉闪会",
        href:
          "https://page.dingtalk.com/wow/z/dingtalk/default/flashmeeting?spm=a213l2.13146415.0.0.7f1571e1JgH95K",
      },
      {
        text: "库应用",
        href:
          "https://page.dingtalk.com/wow/z/dingtalk/default/1I4U8ES6UU2H?spm=a213l2.13146415.0.0.7f1571e1JgH95K",
      },
      {
        text: "钉钉搭",
        href:
          "https://open.dingtalk.com/dingdingda?spm=a213l2.13146415.0.0.7f1571e1JgH95K",
      },
    ],
  },
  {
    title: "钉钉教育",
    data: [
      {
        text: "家长通讯录",
        href:
          "https://page.dingtalk.com/wow/dingtalk/act/newsch?spm=a213l2.13146415.0.0.7f1571e1JgH95K&source=50037&lwfrom=2019111114191522000&wh_biz=tm&acm=lb-zebra-518495-6834894.1003.4.6233194&scm=1003.4.lb-zebra-518495-6834894.OTHER_15815295389192_6233194",
      },
      {
        text: "班级群",
        href:
          "https://page.dingtalk.com/wow/dingtalk/act/dingtclass?spm=a213l2.13146415.0.0.7f1571e1JgH95K&source=50037&lwfrom=2019111114191522000&wh_biz=tm&acm=lb-zebra-518495-6834894.1003.4.6233194&scm=1003.4.lb-zebra-518495-6834894.OTHER_15615100544891_6233194",
      },
      {
        text: "班级打卡",
        href:
          "https://page.dingtalk.com/wow/dingtalk/act/classexer?spm=a213l2.13146415.0.0.7f1571e1JgH95K&source=50037&lwfrom=2019111114191522000&wh_biz=tm&acm=lb-zebra-518495-6834894.1003.4.6233194&scm=1003.4.lb-zebra-518495-6834894.OTHER_15815306931663_6233194",
      },
      {
        text: "家校本",
        href:
          "https://page.dingtalk.com/wow/dingtalk/act/clashomework?spm=a213l2.13146415.0.0.7f1571e1JgH95K&source=50037&lwfrom=2019111114191522000&wh_biz=tm&acm=lb-zebra-518495-6834894.1003.4.6233194&scm=1003.4.lb-zebra-518495-6834894.OTHER_15815303084194_6233194",
      },
    ],
  },
  {
    title: "增值服务",
    data: [
      {
        text: "钉钉专业版",
        href:
          "https://page.dingtalk.com/wow/dingtalk/default/dingtalk/DTProfVersion2?spm=a213l2.13146415.0.0.7f1571e1JgH95K&channel=guanwang",
      },
      {
        text: "钉钉专属版",
        href:
          "https://page.dingtalk.com/wow/dingtalk/default/dingtalk/dnR75GyEQ1q4lXoU83Wu?spm=a213l2.13146415.0.0.7f1571e1JgH95K&dd_mini_app_id=5000000004997171",
      },
      {
        text: "钉钉创业版",
        href:
          "https://page.dingtalk.com/wow/dingtalk/default/dingtalk/dingtalkstartup_pc?spm=a213l2.13146415.0.0.7f1571e1FVlugf&channel=onlineop_guanwang_pc_topline",
      },
      {
        text: "钉钉混合版",
        href:
          "https://page.dingtalk.com/wow/dingtalk/default/dingtalk/TiXM7A9ga0m8zwiVtk1hw?spm=a213l2.13146415.0.0.7f1571e1FVlugf&dd_mini_app_id=5000000004997171",
      },
      {
        text: "数字县域",
        href:
          "https://page.dingtalk.com/wow/dingtalk/act/szxy?spm=a213l2.13146415.0.0.7f1571e1FVlugf",
      },
      {
        text: "智能人事平台",
        href:
          "https://pages.dingtalk.com/wow/z/tianyuan/default/opportunity_detail?spm=a213l2.13146415.0.0.7f1571e1FVlugf&articleCode=DT_GOODS_881603867765821&channel=aggregation_guanwang",
      },
    ],
  },
  {
    title: "支持与服务",
    data: [
      {
        text: "帮助中心",
        href: "https://www.dingtalk.com/qidian/helpCenter/pcPage",
      },
      {
        text: "开发中心",
        href:
          "https://appcenter.dingtalk.com/?spm=a213l2.13146415.0.0.7f1571e1FVlugf&source=50037&lwfrom=2019111114191522000&acm=lb-zebra-518649-6834935.1003.4.6233238&scm=1003.4.lb-zebra-518649-6834935.OTHER_15615105513924_6233238",
      },
      {
        text: "培训中心",
        href:
          "https://page.dingtalk.com/wow/z/dingtalk/default/dddxfgwss-copy?spm=a213l2.13146415.0.0.7f1571e1FVlugf",
      },
      {
        text: "使用手册",
        href: "https://alidocs.dingtalk.com/i/p/Y7kmbokZp3pgGLq2",
      },
      {
        text: "安全合规中心",
        href:
          "https://page.dingtalk.com/wow/dingtalk/default/dingtalk/qDknAwUPOrLlo0JRyXVWg?spm=a213l2.13146415.0.0.7f1571e1FVlugf&dd_mini_app_id=5000000004997171",
      },
      {
        text: "合作伙伴",
        href:
          "https://partner.dingtalk.com/?spm=a213l2.13146415.0.0.7f1571e1FVlugf&source=50037&lwfrom=2019111114191522000&acm=lb-zebra-518649-6834935.1003.4.6233238&scm=1003.4.lb-zebra-518649-6834935.OTHER_15615097818952_6233238#/",
      },
      {
        text: "钉钉服务状态中心",
        href: "https://status.dingtalk.com/?spm=a213l2.13146415.0.0.7f1571e1FVlugf",
      },
    ],
  },
  {
    title: "法律",
    data: [
      {
        text: "钉钉公约",
        href:
          "https://page.dingtalk.com/wow/dingtalk/act/ddgypc?spm=a213l2.13146415.0.0.7f1571e1FVlugf&source=50037&lwfrom=2019111114191522000&wh_biz=tm&acm=lb-zebra-518649-6835027.1003.4.6233302&scm=1003.4.lb-zebra-518649-6835027.OTHER_15615109675273_6233302",
      },
      {
        text: "法律声明",
        href:
          "https://terms.alicdn.com/legal-agreement/terms/suit_bu1_dingtalk/suit_bu1_dingtalk202010200940_52441.html?spm=a213l2.13146415.0.0.7f1571e1FVlugf",
      },
      {
        text: "服务协议",
        href:
          "https://terms.alicdn.com/legal-agreement/terms/suit_bu1_dingtalk/suit_bu1_dingtalk202010200940_84493.html?spm=a213l2.13146415.0.0.7f1571e1FVlugf",
      },
      {
        text: "钉钉隐私政策",
        href:
          "https://terms.alicdn.com/legal-agreement/terms/suit_bu1_dingtalk/suit_bu1_dingtalk202010070946_49604.html?spm=a213l2.13146415.0.0.7f1571e1FVlugf",
      },
      {
        text: "钉钉SDK说明",
        href:
          "https://terms.alicdn.com/legal-agreement/terms/suit_bu1_dingtalk/suit_bu1_dingtalk202010091407_23127.html?spm=a213l2.13146415.0.0.7f1571e1FVlugf",
      },
      {
        text: "钉钉儿童隐私政策",
        href:
          "https://terms.alicdn.com/legal-agreement/terms/suit_bu1_dingtalk/suit_bu1_dingtalk202010070946_20255.html?spm=a213l2.13146415.0.0.7f1571e1FVlugf",
      },
    ],
  },
  {
    title: "钉钉",
    data: [
      {
        text: "广告合作",
        href:
          "https://page.dingtalk.com/wow/z/dingtalk/simple/ddintro?spm=a213l2.13146415.0.0.7f1571e1FVlugf#/",
      },
      {
        text: "顶顶数字化专家",
        href:
          "https://page.dingtalk.com/wow/dingtalk/default/dingtalk/P6yh1XEJLci4ttcdbmmAR?spm=a213l2.13146415.0.0.7f1571e1FVlugf",
      },
      {
        text: "加入我们",
        href:
          "https://talent-holding.alibaba.com/off-campus/position-list?lang=zh&search=%E9%92%89%E9%92%89&spm=a213l2.13146415.0.0.7f1571e1FVlugf",
      },
    ],
  },
]);
const lauguageValue = ref(1);
const lauguageOptions = ref([
  {
    label: "English",
    value: 0,
  },
  {
    label: "中文",
    value: 1,
  },
  {
    label: "繁体中文",
    value: 2,
  },
  {
    label: "日本语",
    value: 3,
  },
]);
const footer3ItemData = ref([
  {
    img: "https://gw.alicdn.com/tfs/TB1DqmOGhD1gK0jSZFKXXcJrVXa-222-84.png",
    img2: "https://gw.alicdn.com/tfs/TB1Q8fSF4D1gK0jSZFyXXciOVXa-222-84.png",
    imgQr: "https://gw.alicdn.com/tfs/TB1JuICF1H2gK0jSZJnXXaT1FXa-300-300.png",
    imgQrText: "下载Android正式版",
    style: {
      width: "111px",
      height: "42px",
    },
  },
  {
    img: "https://gw.alicdn.com/tfs/TB1W1uCGeL2gK0jSZPhXXahvXXa-194-84.png",
    img2: "https://gw.alicdn.com/tfs/TB1TD6OF9f2gK0jSZFPXXXsopXa-194-84.png",
    imgQr: "https://gw.alicdn.com/tfs/TB1JuICF1H2gK0jSZJnXXaT1FXa-300-300.png",
    imgQrText: "下载iPhone正式版",
    style: {
      width: "97px",
      height: "42px",
    },
  },
  {
    img: "https://gw.alicdn.com/tfs/TB1JIqKGXP7gK0jSZFjXXc5aXXa-192-84.png",
    img2: "https://gw.alicdn.com/tfs/TB1A12OF1T2gK0jSZFvXXXnFXXa-192-84.png",
    imgQr: undefined,
    imgQrText: undefined,
    style: {
      width: "96px",
      height: "42px",
    },
  },
  {
    img: "https://gw.alicdn.com/tfs/TB1VZqLGbr1gK0jSZFDXXb9yVXa-244-84.png",
    img2: "https://gw.alicdn.com/tfs/TB14wnOFYr1gK0jSZR0XXbP8XXa-244-84.png",
    imgQr: undefined,
    imgQrText: undefined,
    style: {
      width: "122px",
      height: "42px",
    },
  },
  {
    img:
      "https://img.alicdn.com/imgextra/i2/O1CN01BtgYhF1gUSUdYk0WA_!!6000000004145-2-tps-200-84.png",
    img2:
      "https://img.alicdn.com/imgextra/i4/O1CN01wnFdcB1LaJcw51qLU_!!6000000001315-2-tps-200-84.png",
    imgQr: undefined,
    imgQrText: undefined,
    style: {
      width: "96px",
      height: "42px",
    },
  },
]);
const footer4Text1Data = ref([
  {
    href: "http://www.alibabagroup.com/cn/global/home",
    text: "阿里巴巴集团",
  },
  {
    href: "https://www.taobao.com",
    text: "淘宝网",
  },
  {
    href: "https://www.tmall.com",
    text: "天猫",
  },
  {
    href: "https://ju.taobao.com",
    text: "聚划算",
  },
  {
    href: "https://www.aliexpress.com",
    text: "全球速卖通",
  },
  {
    href: "https://www.alibaba.com",
    text: "阿里巴巴国际交易市场",
  },
  {
    href: "https://www.1688.com",
    text: "1688",
  },
  {
    href: "https://www.alimama.com",
    text: "阿里妈妈",
  },
  {
    href: "https://www.fliggy.com",
    text: "飞猪",
  },
  {
    href: "https://www.aliyun.com",
    text: "阿里云计算",
  },
  {
    href: "http://www.alios.cn",
    text: "AliOS",
  },
  {
    href: "https://www.alipay.com/",
    text: "支付宝",
  },
  {
    href: "https://b.alipay.com/?ynsrc=dingdingB",
    text: "支付宝商家平台",
  },
  {
    href: "http://www.uc.cn",
    text: "UC",
  },
  {
    href: "https://damo.alibaba.com",
    text: "达摩院",
  },
  {
    href: "https://www.aliyundrive.com/",
    text: "阿里云盘",
  },
]);
const safeLogo = ref([
  "https://img.alicdn.com/imgextra/i1/O1CN01o7siW429VUERsWFfy_!!6000000008073-2-tps-318-152.png",
  "https://img.alicdn.com/imgextra/i1/O1CN01IqEVrd1p61tpBfOwa_!!6000000005310-2-tps-318-152.png",
  "https://img.alicdn.com/imgextra/i3/O1CN014zW1Or1fr4Q3kAU5X_!!6000000004059-2-tps-318-152.png",
  "https://img.alicdn.com/imgextra/i1/O1CN01OlgGLx1vGScHic5DI_!!6000000006145-2-tps-318-152.png",
  "https://img.alicdn.com/imgextra/i3/O1CN01jfGb3Y1jMA9rv4YXB_!!6000000004533-2-tps-318-152.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01tiiqpn1vAxrck8aHj_!!6000000006133-2-tps-318-152.png",
]);
function iconTextClick(item) {
  if (isBest.value) {
    window.open(item.href);
  }
}
onMounted(() => {
  if (shabi.value) {
    tabContentLeftHeight.value = shabi.value[tabAc.value].offsetHeight;
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY < main.value.scrollHeight) {
      bgShow.value = false;
      bgShow2.value = 0;
      isBest.value = false;
      // 动画阶段1
      scale.value = window.scrollY / main.value.scrollHeight;
      opacityNum.value = window.scrollY / main.value.scrollHeight;
      opacityNum2.value = window.scrollY / main.value.scrollHeight;
    } else if (
      main.value.scrollHeight < window.scrollY &&
      window.scrollY < main.value.scrollHeight + 320
    ) {
      bgShow.value = false;
      bgShow2.value = 0;
      isBest.value = false;
      // 动画阶段2
      scale.value = window.scrollY / main.value.scrollHeight;
      opacityNum.value = -((9 / 5500) * window.scrollY) + 12880 / 5500;
      opacityNum2.value = window.scrollY / main.value.scrollHeight;
      toUp.value = 0.7 * window.scrollY - 574;
      toUp2.value = 0.7 * window.scrollY - 580;
    } else if (
      window.scrollY > main.value.scrollHeight + 320 &&
      window.scrollY < main.value.scrollHeight + 840
    ) {
      bgShow.value = false;
      bgShow2.value = 0;
      isBest.value = false;
      opacityNum.value = 0;
      toUp.value = 0.7 * window.scrollY - 574;
      toUp2.value = 0.7 * window.scrollY - 580;
      iconTextItem.value.forEach((item, index) => {
        if (index == 0) {
          var tr = 466;
          var tb = 96;
          let scale = createAnimationFn(
            main.value.scrollHeight + 320.0,
            0.4,
            main.value.scrollHeight + 500,
            1
          )(window.scrollY);
          let x1 = createAnimationFn(
            main.value.scrollHeight + 320.0,
            tr,
            main.value.scrollHeight + 640,
            0
          )(window.scrollY);
          iconTextItem.value[
            index
          ].style.transform = `translate(${x1}px,${createAnimationFn(
            0,
            0,
            tr,
            tb
          )(x1)}px) scale(${scale})`;
          var opacity = createAnimationFn(
            main.value.scrollHeight + 320.0,
            0,
            main.value.scrollHeight + 600,
            1
          )(window.scrollY);
        } else if (index == 1) {
          var tr = 312;
          var tb = 96;
          let scale = createAnimationFn(
            main.value.scrollHeight + 370.0,
            0.4,
            main.value.scrollHeight + 500,
            1
          )(window.scrollY);
          let x1 = createAnimationFn(
            main.value.scrollHeight + 370.0,
            tr,
            main.value.scrollHeight + 640,
            0
          )(window.scrollY);
          iconTextItem.value[
            index
          ].style.transform = `translate(${x1}px,${createAnimationFn(
            0,
            0,
            tr,
            tb
          )(x1)}px) scale(${scale})`;
          var opacity = createAnimationFn(
            main.value.scrollHeight + 370.0,
            0,
            main.value.scrollHeight + 600,
            1
          )(window.scrollY);
        } else if (index == 2) {
          var tr = 156;
          var tb = 96;
          let scale = createAnimationFn(
            main.value.scrollHeight + 420.0,
            0.4,
            main.value.scrollHeight + 500,
            1
          )(window.scrollY);
          let x1 = createAnimationFn(
            main.value.scrollHeight + 420.0,
            tr,
            main.value.scrollHeight + 640,
            0
          )(window.scrollY);
          iconTextItem.value[
            index
          ].style.transform = `translate(${x1}px,${createAnimationFn(
            0,
            0,
            tr,
            tb
          )(x1)}px) scale(${scale})`;
          var opacity = createAnimationFn(
            main.value.scrollHeight + 420.0,
            0,
            main.value.scrollHeight + 600,
            1
          )(window.scrollY);
        } else if (index == 3) {
          var tr = 0;
          var tb = 96;
          let scale = createAnimationFn(
            main.value.scrollHeight + 470.0,
            0.4,
            main.value.scrollHeight + 500,
            1
          )(window.scrollY);
          iconTextItem.value[index].style.transform = `translate(0px,${createAnimationFn(
            main.value.scrollHeight + 470.0,
            96,
            main.value.scrollHeight + 640,
            0
          )(window.scrollY)}px) scale(${scale})`;
          var opacity = createAnimationFn(
            main.value.scrollHeight + 470.0,
            0,
            main.value.scrollHeight + 600,
            1
          )(window.scrollY);
        } else if (index == 4) {
          var tr = -156;
          var tb = 96;
          let scale = createAnimationFn(
            main.value.scrollHeight + 420.0,
            0.4,
            main.value.scrollHeight + 500,
            1
          )(window.scrollY);
          let x1 = createAnimationFn(
            main.value.scrollHeight + 420.0,
            tr,
            main.value.scrollHeight + 640,
            0
          )(window.scrollY);
          iconTextItem.value[
            index
          ].style.transform = `translate(${x1}px,${createAnimationFn(
            tr,
            tb,
            0,
            0
          )(x1)}px) scale(${scale})`;
          var opacity = createAnimationFn(
            main.value.scrollHeight + 420.0,
            0,
            main.value.scrollHeight + 600,
            1
          )(window.scrollY);
        } else if (index == 5) {
          var tr = -312;
          var tb = 96;
          let scale = createAnimationFn(
            main.value.scrollHeight + 370.0,
            0.4,
            main.value.scrollHeight + 500,
            1
          )(window.scrollY);
          let x1 = createAnimationFn(
            main.value.scrollHeight + 370.0,
            tr,
            main.value.scrollHeight + 640,
            0
          )(window.scrollY);
          iconTextItem.value[
            index
          ].style.transform = `translate(${x1}px,${createAnimationFn(
            tr,
            tb,
            0,
            0
          )(x1)}px) scale(${scale})`;
          var opacity = createAnimationFn(
            main.value.scrollHeight + 370.0,
            0,
            main.value.scrollHeight + 600,
            1
          )(window.scrollY);
        } else if (index == 6) {
          var tr = -466;
          var tb = 96;
          let scale = createAnimationFn(
            main.value.scrollHeight + 320.0,
            0.4,
            main.value.scrollHeight + 500,
            1
          )(window.scrollY);
          let x1 = createAnimationFn(
            main.value.scrollHeight + 320.0,
            tr,
            main.value.scrollHeight + 640,
            0
          )(window.scrollY);
          iconTextItem.value[
            index
          ].style.transform = `translate(${x1}px,${createAnimationFn(
            tr,
            tb,
            0,
            0
          )(x1)}px) scale(${scale})`;
          var opacity = createAnimationFn(
            main.value.scrollHeight + 320.0,
            0,
            main.value.scrollHeight + 600,
            1
          )(window.scrollY);
        } else if (index == 7) {
          var tr = 466;
          var tb = -96;
          let scale = createAnimationFn(
            main.value.scrollHeight + 320.0,
            0.4,
            main.value.scrollHeight + 500,
            1
          )(window.scrollY);
          let x1 = createAnimationFn(
            main.value.scrollHeight + 320.0,
            tr,
            main.value.scrollHeight + 640,
            0
          )(window.scrollY);
          iconTextItem.value[
            index
          ].style.transform = `translate(${x1}px,${createAnimationFn(
            0,
            0,
            tr,
            tb
          )(x1)}px) scale(${scale})`;
          var opacity = createAnimationFn(
            main.value.scrollHeight + 320.0,
            0,
            main.value.scrollHeight + 600,
            1
          )(window.scrollY);
        } else if (index == 8) {
          var tr = 312;
          var tb = -96;
          let scale = createAnimationFn(
            main.value.scrollHeight + 370.0,
            0.4,
            main.value.scrollHeight + 500,
            1
          )(window.scrollY);
          let x1 = createAnimationFn(
            main.value.scrollHeight + 370.0,
            tr,
            main.value.scrollHeight + 640,
            0
          )(window.scrollY);
          iconTextItem.value[
            index
          ].style.transform = `translate(${x1}px,${createAnimationFn(
            0,
            0,
            tr,
            tb
          )(x1)}px) scale(${scale})`;
          var opacity = createAnimationFn(
            main.value.scrollHeight + 370.0,
            0,
            main.value.scrollHeight + 600,
            1
          )(window.scrollY);
        } else if (index == 9) {
          var tr = 156;
          var tb = -96;
          let scale = createAnimationFn(
            main.value.scrollHeight + 420.0,
            0.4,
            main.value.scrollHeight + 500,
            1
          )(window.scrollY);
          let x1 = createAnimationFn(
            main.value.scrollHeight + 420.0,
            tr,
            main.value.scrollHeight + 640,
            0
          )(window.scrollY);
          iconTextItem.value[
            index
          ].style.transform = `translate(${x1}px,${createAnimationFn(
            0,
            0,
            tr,
            tb
          )(x1)}px) scale(${scale})`;
          var opacity = createAnimationFn(
            main.value.scrollHeight + 420.0,
            0,
            main.value.scrollHeight + 600,
            1
          )(window.scrollY);
        } else if (index == 10) {
          var tr = 0;
          var tb = -96;
          let scale = createAnimationFn(
            main.value.scrollHeight + 470.0,
            0.4,
            main.value.scrollHeight + 500,
            1
          )(window.scrollY);
          iconTextItem.value[index].style.transform = `translate(0px,${createAnimationFn(
            main.value.scrollHeight + 470.0,
            -96,
            main.value.scrollHeight + 640,
            0
          )(window.scrollY)}px) scale(${scale})`;
          var opacity = createAnimationFn(
            main.value.scrollHeight + 470.0,
            0,
            main.value.scrollHeight + 600,
            1
          )(window.scrollY);
        } else if (index == 11) {
          var tr = -156;
          var tb = -96;
          let scale = createAnimationFn(
            main.value.scrollHeight + 420.0,
            0.4,
            main.value.scrollHeight + 500,
            1
          )(window.scrollY);
          let x1 = createAnimationFn(
            main.value.scrollHeight + 420.0,
            tr,
            main.value.scrollHeight + 640,
            0
          )(window.scrollY);
          iconTextItem.value[
            index
          ].style.transform = `translate(${x1}px,${createAnimationFn(
            tr,
            tb,
            0,
            0
          )(x1)}px) scale(${scale})`;
          var opacity = createAnimationFn(
            main.value.scrollHeight + 420.0,
            0,
            main.value.scrollHeight + 600,
            1
          )(window.scrollY);
        } else if (index == 12) {
          var tr = -312;
          var tb = -96;
          let scale = createAnimationFn(
            main.value.scrollHeight + 370.0,
            0.4,
            main.value.scrollHeight + 500,
            1
          )(window.scrollY);
          let x1 = createAnimationFn(
            main.value.scrollHeight + 370.0,
            tr,
            main.value.scrollHeight + 640,
            0
          )(window.scrollY);
          iconTextItem.value[
            index
          ].style.transform = `translate(${x1}px,${createAnimationFn(
            tr,
            tb,
            0,
            0
          )(x1)}px) scale(${scale})`;
          var opacity = createAnimationFn(
            main.value.scrollHeight + 370.0,
            0,
            main.value.scrollHeight + 600,
            1
          )(window.scrollY);
        } else if (index == 13) {
          var tr = -466;
          var tb = -96;
          let scale = createAnimationFn(
            main.value.scrollHeight + 320.0,
            0.4,
            main.value.scrollHeight + 500,
            1
          )(window.scrollY);
          let x1 = createAnimationFn(
            main.value.scrollHeight + 320.0,
            tr,
            main.value.scrollHeight + 640,
            0
          )(window.scrollY);
          iconTextItem.value[
            index
          ].style.transform = `translate(${x1}px,${createAnimationFn(
            tr,
            tb,
            0,
            0
          )(x1)}px) scale(${scale})`;
          var opacity = createAnimationFn(
            main.value.scrollHeight + 320.0,
            0,
            main.value.scrollHeight + 600,
            1
          )(window.scrollY);
        } else {
        }
        iconTextItem.value[index].style.opacity = opacity;
      });
    } else {
      bgShow.value = true;
      bgShow2.value = 1;
      isBest.value = true;
    }
    d3.value = (window.scrollY / main.value.scrollHeight) * 150 - 150;
    shangyige.value = window.scrollY;
  });
});
function offGuangGao(e) {
  e.preventDefault();
  isShowGuangGao.value = false;
}
function selectItem1() {}
function selectItem2() {}
function hover() {
  customDwrop.value.initActive();
  maxHight.value = 1000;
}
function leave() {
  maxHight.value = 0;
}
function createAnimationFn(scrollStart, valueStart, scrollEnd, valueEnd) {
  return function (x) {
    if (x < scrollStart) {
      return valueStart;
    }
    if (x > scrollEnd) {
      return valueEnd;
    }
    const progress = (x - scrollStart) / (scrollEnd - scrollStart);
    return valueStart + (valueEnd - valueStart) * progress;
  };
}
watch(CaseBannerItemBoxLeft, (newD) => {
  if (newD == 0) {
    CaseBannerToolActive.value = 0;
  } else if (
    0 - newD ==
    CaseBannerItem.value[0].offsetWidth * CaseBannerData.value.length - window.innerWidth
  ) {
    CaseBannerToolActive.value = 1;
  } else {
    CaseBannerToolActive.value = 2;
  }
});
function accordionCardItemMouse(val) {
  activeA.value = val;
}
function accordionCardItemMouse2(val) {
  activeA2.value = val;
}
function iconTextItemEnter(val) {
  iconTextItemAc.value = val;
}
function accordionCardBy(val) {
  switch (val) {
    case 0:
      window.open(
        "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-15824065466.71.3bdd489etMUbB1&id=560050482818&rn=4d904d04a076b6e86e8e3fddd4d67ec8&abbucket=18"
      );
      break;

    case 1:
      window.open(
        "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-15824065466.51.6db2489es7pkSZ&id=620003365157&rn=04950312d99120d8bb0a0e843b40df20&abbucket=13"
      );
      break;

    case 2:
      window.open(
        "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-15824065466.63.5627489ert9uDT&id=657787627233&rn=8bcb9bb8bcd7ef28e4b9edd63d76f785&abbucket=18&sku_properties=5919063:6536025"
      );
      break;

    case 3:
      window.open(
        "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-15824065466.27.2948489ecTPsn3&id=669846425377&rn=089583fc581bc7934da317e3fbba2bab&abbucket=18"
      );
      break;

    case 4:
      window.open(
        "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-15824065466.22.7e83489e0nD72s&id=673830622747&rn=26ab1960af2961c799ec0d6002d60e56&abbucket=18"
      );
      break;
    case 5:
      window.open(
        "https://page.dingtalk.com/wow/z/dingtalk/default/5pmRYxya2JxBBnsTEebn?spm=a213l2.13146415.4929779444.71.7f1571e1KpeFi9"
      );
      break;

    default:
      break;
  }
}

function collTabClick(val) {
  tabAc.value = val;
  tabLeft.value = tabButton.value[0].offsetWidth * val;
  stepActive.value = 0;
  currentImg.value = tabContentLeftData.value[val].step[0].img;
  console.log(shabi.value[tabAc.value].offsetHeight);
  if (shabi.value) {
    tabContentLeftHeight.value = shabi.value[tabAc.value].offsetHeight;
    console.log(tabContentLeftHeight.value);
  }
}
function dtdTabClick(val) {
  dadBgsize.value = 100;
  dtdTabsTopAc.value = val;
  dtdLeft.value = tabButton2.value[0].offsetWidth * val;
  setTimeout(() => {
    dadBgsize.value = 110;
  }, 50);
}
function stepClick(url, index) {
  currentImg.value = url;
  stepActive.value = index;
}
function newCardsItemEnter(val) {
  newCardsItemActive.value = val;
}
function prev() {
  let item = CaseBannerItemBox.value.style.left.split("p")[0] - 0;
  if (item) {
    if (0 - item < CaseBannerItem.value[0].offsetWidth) {
      CaseBannerItemBoxLeft.value = item + (0 - item);
    } else {
      CaseBannerItemBoxLeft.value = item + CaseBannerItem.value[0].offsetWidth;
    }
  }
}
function next() {
  const long =
    CaseBannerItem.value[0].offsetWidth * CaseBannerData.value.length - window.innerWidth;
  let item = CaseBannerItemBox.value.style.left.split("p")[0] - 0;
  if (0 - item < long) {
    if (long - (0 - item) < CaseBannerItem.value[0].offsetWidth) {
      CaseBannerItemBoxLeft.value = item - (long - (0 - item));
    } else {
      CaseBannerItemBoxLeft.value = item - CaseBannerItem.value[0].offsetWidth;
    }
  }
}
</script>

<style scoped lang="scss">
.clearfix::before,
.clearfix::after {
  content: "";
  display: block;
  clear: both;
  overflow: hidden;
}
.advertisementBox {
  height: 54px;
  .advertisement {
    height: 54px;
    background: url(https://img.alicdn.com/imgextra/i1/O1CN01Js6M7k29WrZ3ASsCp_!!6000000008076-0-tps-3840-140.jpg)
      center top / auto 100% no-repeat rgb(219, 231, 252);
    top: 0;
    width: 100%;
    position: fixed;
    z-index: 10000;
    .advertisementOFF {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      right: 82px;
      background: url("https://gw.alicdn.com/imgextra/i1/O1CN01sQpNjq1dxMh4e4anI_!!6000000003802-55-tps-16-16.svg")
        center center / 12px 12px no-repeat;
      transform: translate(0, -50%);
      background-color: hsla(0, 0%, 100%, 0.4);
      cursor: pointer;
      &:hover {
        background-color: hsla(0, 0%, 100%, 0.6);
      }
    }
  }
}
@media screen and (max-width: 1920px) {
  .DDheader {
    padding: 0 32px;
  }
}
@media screen and (min-width: 1920px) {
  .DDheader {
    padding: 0 64px;
  }
}
.DDheader {
  position: fixed;
  z-index: 100;
  height: 80px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  z-index: 10000;
  .headerLeft {
    width: 216px;
    a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }
  }
  .headerCenter {
    display: flex;
    .headerItem {
      font-size: 16px;
      color: #171a1d;
      font-weight: 400;
      font-family: "PingFangSC-Regular", "Microsoft YaHei", "Open Sans", Arial,
        "Hiragino Sans GB", "微软雅黑", "STHeiti", "WenQuanYi Micro Hei", SimSun,
        sans-serif;
      -webkit-font-smoothing: antialiased;
      display: flex;
      align-items: center;
      margin-right: 30px;
      cursor: pointer;
      &:hover a {
        color: #0089ff;
      }
      .hoverSelect {
        padding: 0;
        margin: 0;
      }
      :deep(.dwrop) {
        border-radius: 0 0 10px 10px;
        display: flex;
        align-items: center;
        li::first-child {
          padding-top: 6px;
        }
        li::last-child {
          padding-bottom: 6px;
        }
        li {
          height: 35px;
          width: 90%;
          border-radius: 6px;
          color: #171a1d;
          line-height: 35px;
          padding-left: 15px;
          font-size: 14px;
          &:hover {
            color: #0089ff;
          }
        }
      }
      & > a {
        display: block;
        width: 80px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        &:hover {
          background-color: #eee;
          border-radius: 7px;
        }
      }
    }
  }
  .headerRight {
    display: flex;
    justify-content: center;
    align-items: center;
    & > a {
      margin-left: 12px;
    }
  }
}

.bannerBox {
  position: relative;
  z-index: 1000;
  .cardBox {
    box-sizing: border-box;
    height: 212px;
    justify-content: center;
    overflow: hidden;
    padding: 36px 0;
    width: 100%;
    transition: background-color 0.5s ease 0s;
    bottom: 0;
    min-width: 750px !important;
    position: absolute;
    z-index: 5;
    .card {
      width: 288px;
      box-sizing: border-box;
      padding: 16px 0 0 24px;
      background-image: linear-gradient(
        115deg,
        rgba(0, 127, 255, 0.8) 0px,
        rgba(0, 127, 255, 0.3) 50%,
        rgba(0, 127, 255, 0) 100%
      );
      border-radius: 8px;
      -webkit-box-shadow: 0 20px 40px 0 rgba(23, 26, 29, 0.04);
      box-shadow: 0 20px 40px 0 rgba(23, 26, 29, 0.04);
      background-color: hsla(0, 0%, 100%, 0.8);
      cursor: pointer;
      margin-right: 16px;
      z-index: 2;
      position: relative;
      &:nth-child(2) {
        background-image: linear-gradient(
          115deg,
          rgba(14, 190, 254, 0.8) 0px,
          rgba(14, 190, 254, 0.3) 50%,
          rgba(14, 190, 254, 0) 100%
        );
      }
      &:nth-child(3) {
        background-image: linear-gradient(
          115deg,
          rgba(143, 53, 255, 0.8) 0px,
          rgba(143, 53, 255, 0.3) 50%,
          rgba(143, 53, 255, 0) 100%
        );
      }
      &:nth-child(4) {
        background-image: linear-gradient(
          115deg,
          rgba(61, 202, 138, 0.8) 0px,
          rgba(61, 202, 138, 0.3) 50%,
          rgba(61, 202, 138, 0) 100%
        );
      }
      .text1 {
        font-family: PingFangSC-Medium;
        font-size: 20px;
        font-weight: 500;
        z-index: 200;
        position: relative;
      }
      .text2 {
        color: rgba(23, 26, 29, 0.6);
        font-size: 14px;
        margin-bottom: 18px;
        margin-top: 4px;
        z-index: 200;
        position: relative;
      }
      .el-button {
        background-color: hsla(0, 0%, 100%, 0.4);
        border: 1px solid hsla(210, 7%, 53%, 0.24);
      }
      img {
        width: 80px;
        height: 80px;
        position: absolute;
        bottom: 10%;
        right: 10%;
        opacity: 0;
        transition: all 0.5s;
      }
      &:hover img {
        transform: scale(1.5, 1.5);
        opacity: 1;
      }
    }
  }
  :deep(.banner) {
    height: 820px;
    min-height: 680px;
    position: relative;
    border-radius: 0;
    .imgBox {
      a {
        height: 820px;
        min-height: 680px;
        img {
          display: block;
        }
      }
    }
    .promo {
      background-color: transparent;
      min-width: 440px;
      left: 20%;
      bottom: 40%;
      li {
        background-color: hsla(0, 0%, 100%, 0.3);
        border-radius: 2px;
        height: 4px;
        overflow: hidden;
        position: relative;
        width: 40px;
        padding: 0;
      }
    }
    .aLeft {
      display: none;
    }
    .aRight {
      display: none;
    }
  }
}
.animationDing {
  width: 100%;
  height: 2000px;
  box-sizing: border-box;
  position: relative;
  .guding {
    position: sticky;
    background-color: black;
    width: 100%;
    top: 134px;
    left: 0;
    perspective: 800px;
    height: calc(100vh - 134px);
    z-index: 100;
    overflow: hidden;
    .aniIMG {
      background: url(https://gw.alicdn.com/imgextra/i2/O1CN01DL98PU1o7ZcDBmNDk_!!6000000005178-2-tps-3840-920.png)
        no-repeat 50%;
      background-size: cover;
      height: 4.8em;
      left: 0;
      // opacity: 0;
      position: absolute;
      top: -webkit-calc(50% - 5em);
      top: calc(50% - 5em);
      -webkit-transform-origin: 50% 50%;
      -ms-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      width: 100vw;
      z-index: 1;
      transition: all 1s;
      font-family: PingFangSC-Medium;
      .aniIMGText1 {
        background: linear-gradient(90deg, #7ebeff, #1086ff);
        background-clip: text;
        color: transparent;
        font-size: 0.2em;
        position: absolute;
        top: 35%;
        left: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(-50%, -50%);
        transition: all 1s;
        &:hover {
          transform: translate(-50%, -50%) scale(1.5);
        }
        svg {
          margin-top: 2px;
          margin-left: 5px;
        }
      }
      .aniIMGText2 {
        color: #fff;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        height: 0.67em;
        letter-spacing: 0;
        line-height: 0.67em;
        position: absolute;
        text-align: center;
        top: 47%;
        transform-origin: 50% 50%;
        width: 100%;
        font-size: 0.48em;
      }
    }
    .iconTextBox {
      display: flex;
      flex-wrap: wrap;
      height: 5.6em;
      left: 50%;
      line-height: 0;
      max-width: 1200px;
      padding: 0.83em 0.43em;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -1.89em);
      transform-origin: 50% 50%;
      width: 12em;
      z-index: 10;

      border-radius: 0.16em;
      max-width: 1200px;
      box-sizing: border-box;
      &.bg {
        background-color: rgba(23, 26, 29, 0.9);
      }
      .iconTextItem {
        width: calc(100% / 7);
        height: auto;
        // background-color: #0089ff;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0;
        cursor: pointer;
        img {
          height: 0.8em;
          width: 0.8em;
          border-radius: 0.1667em;
          margin-bottom: 0.32em;
          opacity: 1;
          transition: all 0.5s;
        }
        span {
          font-size: 0.2em;
          line-height: 1;
          color: #fff;
          opacity: 1;
          transition: all 0.5s;
        }
      }
      .iconTextItemActive {
        &:hover img {
          opacity: 0.7;
        }
        &:hover span {
          opacity: 0.7;
        }
      }
    }
    .iconImg {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 1.43em;
      margin-left: -0.7em;
      margin-top: -0.7em;
      transform: scale(0.1);
      transform: translate(-50%);
      img {
        height: 100%;
      }
    }
    .textImg {
      position: absolute;
      bottom: calc(50% - 2em);
      left: 0%;
      display: flex;
      justify-content: center;
      height: 0.55em;
      width: 100%;
      transform: scale(0.1);
      img {
        height: 100%;
      }
    }
    .animationBox {
      transform-origin: 50% 50%;
    }
  }
}
.accordionCard {
  padding: 0 0 106px;
  position: relative;
  z-index: 2;
  background-color: black;
  .accordionCardTitle {
    font-family: PingFangSC-Medium;
    font-weight: 500;
    min-width: 750px;
    position: relative;
    text-align: center;
    user-select: none;
    white-space: pre-wrap;
    font-size: calc(31.3043px + 1.15942vw);
    color: rgb(255, 255, 255);
  }
  .accordionCardBox {
    color: #fff;
    justify-content: center;
    margin: 56px auto 0;
    // width: 1200px;
    .accordionCardItemwrap {
      position: relative;
      overflow: hidden;
      .accordionCardItem {
        transform: rotate(0deg);
        border-right: 1px solid #292b2f;
        cursor: pointer;
        height: 260px;
        // overflow: hidden;
        position: relative;
        width: 160px;
        font-family: PingFangSC-Medium;
        background-color: rgba(23, 26, 29, 0.9);
        background-repeat: no-repeat;
        background-size: auto 260px;
        height: 260px;
        padding-left: 32px;
        padding-top: 88px;
        box-sizing: border-box;
      }
      &:last-child {
        border-radius: 0 16px 16px 0;
        border: 0;
      }
      &:first-child {
        border-radius: 16px 0 0 16px;
      }
      &:last-child .accordionCardItem {
        border-radius: 0 16px 16px 0;
        border: 0;
      }
      &:first-child .accordionCardItem {
        border-radius: 16px 0 0 16px;
      }
      .text1 {
        font-size: 20px;
        font-weight: 500;
        opacity: 1;
      }
      .tetx2 {
        background-image: linear-gradient(69deg, #004fff, rgba(0, 79, 255, 0) 51%),
          radial-gradient(
            circle at 170% -17%,
            rgba(112, 208, 255, 0.4) 0,
            rgba(220, 251, 255, 0) 122%
          ),
          linear-gradient(239deg, #3296fa, #007fff);
        height: 1px;
        margin: 6px 0;
        opacity: 1;
        width: 14px;
      }
      .text3 {
        color: hsla(0, 0%, 100%, 0.6);
        font-size: 16px;
        font-weight: 500;
        height: 26px;
        letter-spacing: 0;
        line-height: 26px;
        opacity: 1;
        width: 68px;
      }
    }

    .accordionCardItemActive {
      width: 400px;
      position: relative;
      .accordionCardItem {
        width: 100%;
      }
      .accordionCardItemColor {
        position: absolute;
        top: 0;
        right: 0px;
        background-image: linear-gradient(
            40deg,
            rgba(155, 235, 255, 0.2),
            rgba(220, 251, 255, 0) 16%,
            rgba(220, 251, 255, 0) 0
          ),
          linear-gradient(69deg, #004fff, rgba(0, 79, 255, 0) 78%, rgba(0, 79, 255, 0) 0),
          linear-gradient(8deg, #004fff, rgba(0, 79, 255, 0) 80%),
          radial-gradient(
            circle at 170% -17%,
            rgba(112, 208, 255, 0.4) 0,
            rgba(220, 251, 255, 0) 122%
          ),
          linear-gradient(239deg, #3296fa, #007fff);
        display: flex;
        flex-direction: column;
        height: 260px;
        opacity: 1;
        padding-bottom: 51px;
        padding-left: 32px;
        padding-top: 45px;
        width: 400px;
        box-sizing: border-box;
        transform: translate(0, 0);
        transition: transform 0.8s;
        img {
          transform: translate(0, 0);
        }
      }
    }
    .accordionCardItemColor {
      width: 0;
      height: 0;
      font-family: PingFangSC-Medium;
      overflow: hidden;
      position: relative;
      justify-content: space-between;
      transform: translate(400px, 0);
      .text1Wanzheng {
        color: #fff;
        font-size: 28px;
        font-weight: 500;
        height: 40px;
        letter-spacing: 0;
        margin-bottom: 9px;
      }
      .text2Wanzheng {
        color: hsla(0, 0%, 100%, 0.6);
        font-size: 16px;
        line-height: 26px;
      }
      img {
        height: 260px;
        opacity: 1;
        position: absolute;
        right: -140px;
        top: 0;
        transition: transform 1s 0.5s;
        transform: translate(0, 10px);
      }
      .el-button {
        color: rgb(0, 127, 255);
        width: 60px;
        height: 32px;
        cursor: pointer;
      }
    }
  }
}
.collaborationTools {
  background-color: rgb(228, 241, 254);
  position: relative;
  overflow: hidden;
  padding: 106px 0 66px;
  position: relative;
  transition: background-color 1s !important;
  font-family: PingFangSC-Medium;
  font-weight: 500;

  .collaborationToolsTitle {
    min-width: 750px;
    position: relative;
    text-align: center;
    user-select: none;
    white-space: pre-wrap;
    font-size: calc(31.3043px + 1.15942vw);
    color: rgb(23, 26, 29);
  }
  .tabs {
    display: flex;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    margin: 0;
    overflow: hidden;
    box-sizing: border-box;
    color: var(--common_level2_base_color, rgba(23, 26, 29));
    padding: 0;
    flex-direction: column;
    .tabTop {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      padding: 56px 0 40px;
      position: relative;
      div {
        border-radius: 20px;
        cursor: pointer;
        font-family: PingFangSC-Medium;
        font-size: 16px;
        font-weight: 500;
        height: 40px;
        line-height: 24px;
        padding: 8px 20px;
        transition: color 0.5s;
        z-index: 1;
        box-sizing: border-box;
        transition: all 0.3s;
        position: relative;
        z-index: 100;
      }
      .tabActive {
        color: #fff;
        z-index: 100;
      }
      .tabBg {
        position: absolute;
        background-color: rgba(23, 26, 29);
        top: 42%;
        height: 40px;
        width: 25%;
        z-index: 1;
      }
    }
    .tabContent {
      .tabContentLeft {
        margin-right: 40px;
        padding: 32px 0 50px;
        width: 360px;
        overflow: hidden;
        position: relative;
        .tabContentLeftBox1 {
          display: flex;
          align-items: center;
          color: #171a1d;
          font-family: PingFangSC-Medium;
          font-size: 17.78px;
          font-weight: 500;
          line-height: 31.11px;
          .tabContentLeftIcon {
            height: 32px;
            margin-right: 7px;
            width: 32px;
          }
        }
        .tabContentLeftBox2 {
          color: #171a1d;
          font-family: PingFangSC-Medium;
          font-size: 32px;
          font-weight: 500;
          margin: 6px 0 24px;
        }
        .el-button {
          padding: 9px 22px;
          font-size: 18px;
          height: 44px;
          cursor: pointer;
          background: var(--theme_primary_hover_color, #007fff);
          color: var(--common_white1_color, #fff);
          border-radius: 6px;
        }
        .step {
          color: rgba(23, 26, 29, 0.4);
          cursor: pointer;
          font-size: 16px;
          line-height: 32px;
          margin-top: 11px;
          padding-left: 33px;
          position: relative;
          .stepLine {
            display: flex;
            border: 1px solid hsla(210, 7%, 53%, 0.24);
            height: 100%;
            left: 8px;
            position: absolute;
            width: 0;
          }
          .stepPoint {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-between;
            left: 8px;
            position: absolute;
            width: 1px;
          }
          .stepText1 {
            font-family: PingFangSC-Medium;
            font-size: 18px;
            font-weight: 500;
          }
          .stepText2 {
          }
        }
        .stepFocus {
          .stepText1 {
            color: #007fff;
          }
          .stepText2 {
            color: #171a1d;
          }
          .stepPoint {
            height: 22px;
            left: 13px;
            top: -12px;
            transform: rotate(-45deg) translateX(-100%);
            width: 22px;
            background-color: rgba(230, 240, 253, 1);
            &::before {
              content: "";
              position: absolute;
              background-color: #007fff;
              height: 12px;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              width: 12px;
            }
          }
        }
        .yyy {
          opacity: 0;
          pointer-events: none;
        }
        .xxx {
          opacity: 1;
        }
      }
      .tabContentRight {
        width: 800px;
        display: block;
        position: relative;
        .tabContentRightImg {
          border-radius: 16px;
          margin-bottom: 40px;
          overflow: hidden;
          transition: box-shadow 0.3s, -webkit-box-shadow 0.3s;

          width: 100%;
          z-index: -1;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
.homeGradientBg {
  background: radial-gradient(
      58% 31% at 100% 30%,
      rgba(224, 203, 255, 0.4) 0,
      rgba(224, 203, 255, 0.4) 0,
      rgba(238, 227, 255, 0.4) 0,
      hsla(0, 0%, 100%, 0) 100%
    ),
    -webkit-gradient(linear, left top, left bottom, color-stop(15%, #fff), color-stop(24%, #f1f7ff), color-stop(34%, #d5e8ff), color-stop(37%, #d3e7fe), color-stop(47%, #e8f1fa), color-stop(60%, #f5f7fa), color-stop(60%, #f5f7fa), color-stop(80%, #eaecef));
}
.EnterpriseClassificatio {
  background-color: #fff;
  padding-top: 106px;
  .EnterpriseClassificatioTitle {
    min-width: 750px;
    position: relative;
    text-align: center;
    user-select: none;
    white-space: pre-wrap;
    font-size: calc(31.3043px + 1.15942vw);
    color: rgb(23, 26, 29);
  }
  .dtdTabs {
    font-feature-settings: "tnum", "tnum";
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.85);
    display: flex;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    margin: 0;
    overflow: hidden;
    flex-direction: column;
    .dtdTabsTop {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      display: flex;
      justify-content: center;
      margin: 0 auto;
      padding: 56px 0 40px;
      position: relative;
      div {
        border-radius: 20px;
        cursor: pointer;
        font-size: 16px;
        height: 40px;
        line-height: 24px;
        padding: 8px 20px;
        transition: color 0.5s;
        z-index: 1;
        box-sizing: border-box;
        transition: all 0.3s;
        position: relative;
        z-index: 100;
      }
      .dtdTabsTopBg {
        position: absolute;
        background-color: rgba(23, 26, 29);
        top: 56px;
        height: 40px;
        width: calc(100% / 6);
        z-index: 1;
      }
      .dtdTabsTopActive {
        color: #fff;
      }
    }
    .dadTabContent {
      border-radius: 16px;
      display: flex;
      overflow: hidden;
      .dadTabContentLeft {
        transition: background-size 2s;
      }
      .dadTabContentRight {
        background-color: #171a1f;
        color: #fff;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        justify-items: left;
        overflow: hidden;

        position: relative;
        .dadTabContentRightBox {
          position: absolute;
          height: calc(100% - 110px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .dadTabContentRightBoxZ {
          z-index: 1000;
        }
        img {
          display: block;
          position: absolute;
          width: 300px;
          z-index: -1;
        }
        .textBox {
          .text1 {
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-image: -webkit-linear-gradient(left, #69b3ff, #004fff 25%);
            font-family: PingFangSC-Medium;
            font-size: 20px;
          }
          .text2 {
            font-size: 32px;
            font-weight: 500;
            margin: 8px 0;
            transition: opacity 0.5s;
          }
          .text3 {
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            color: hsla(0, 0%, 100%, 0.8);
            font-size: 18px;
            font-style: Regular;
            letter-spacing: 0;
            line-height: 32px;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            width: 100%;
            transition: opacity 0.5s;
          }
        }
        .dadTabContentRightTextX {
          opacity: 1;
        }
        .dadTabContentRightTextY {
          opacity: 0;
        }
        .buttonBox {
          .el-button {
            font-size: 18px;
            height: 44px;
            margin-bottom: 20px;
            cursor: pointer;
            padding: 9px 22px;
          }
        }
      }
    }
  }
}
.newCardsDDEdition {
  color: #fff;
  padding: 106px 0 0;

  .newCardsDDEditionTitle {
    white-space: pre-wrap;
    font-size: calc(31.3043px + 1.15942vw);
    color: rgb(23, 26, 29);
    min-width: 750px;
    position: relative;
    text-align: center;
    user-select: none;
  }
  .newCardsContent {
    width: 100%;
    .newCardsBox {
      display: flex;
      margin: 54px auto 40px;
      width: 100%;
      .newCardsItem {
        cursor: pointer;
        height: 356px;
        margin-right: 16px;
        padding-top: 40px;
        transition: width 0.4s;
        width: 256px;
        .newCardsItemContent {
          border-radius: 16px;
          height: 316px;
          position: relative;
          background: linear-gradient(
              51deg,
              rgb(117, 210, 253) 10%,
              rgba(233, 246, 253, 0.8) 106%
            ),
            rgb(255, 255, 255);
          background: linear-gradient(
              58deg,
              rgb(124, 183, 255) -1%,
              rgb(190, 219, 255) 51%,
              rgb(219, 238, 255) 76%,
              rgb(255, 255, 255) 138%
            ),
            rgb(255, 255, 255);
          background: linear-gradient(
              35deg,
              rgb(140, 172, 255) -4%,
              rgb(197, 214, 255) 51%,
              rgb(217, 227, 255) 78%,
              rgb(255, 255, 255) 144%
            ),
            rgb(255, 255, 255);
          background: linear-gradient(
              35deg,
              rgb(140, 155, 255) -2%,
              rgb(216, 219, 255) 67%,
              rgb(218, 228, 255) 105%,
              rgb(255, 255, 255) 147%
            ),
            rgb(255, 255, 255);
          & > div {
            padding-left: 24px;
            padding-right: 6px;
            padding-top: 10px;
            transition: transform 0.4s;
          }
          img {
            height: 74px;
            margin-bottom: 32px;
            margin-left: -6px;
            transition: width 0.4s linear, height 0.4s linear, margin-bottom 0.4s linear;
            width: 74px;
          }
          .title {
            font-family: PingFangSC-Medium;
            font-size: 26px;
            font-weight: 600;
            letter-spacing: 0;
            line-height: 24px;
            margin-bottom: 12px;
            color: rgb(0, 85, 152);
          }
          .textBox {
            font-size: 16px;
            font-weight: 500;
            height: 48px;
            letter-spacing: -0.5px;
            line-height: 24px;
            margin-bottom: 32px;
            color: rgb(0, 85, 152);
            opacity: 0.6;
          }
          .price {
            .span1 {
              color: #171a1d;
              font-size: 20px;
              font-weight: 700;
              letter-spacing: 0;
            }
            .span2 {
              color: rgba(23, 26, 29, 0.94);
              font-size: 40px;
              font-weight: 700;
              letter-spacing: 0;
            }
            .span3 {
              color: rgba(23, 26, 29, 0.6);
              font-size: 14px;
              font-weight: 500;
              letter-spacing: 0;
            }
          }
          .newCardsBtn {
            display: flex;
            margin-top: 32px;
            opacity: 0;
            transition: margin 0.4s linear;
            align-items: center;
            .el-button {
              cursor: pointer;
              margin-right: 16px;
              font-size: 16px;
              height: 40px;
              line-height: 40px;
              padding-left: 32.5px;
              padding-right: 32.5px;
            }
          }
        }
      }
      .newCardsItemAc {
        width: 376px;
        .newCardsItemContent {
          & > div {
            transform: translateY(-72px);
          }
          img {
            height: 80px;
            margin-bottom: 20px;
            width: 80px;
          }
          .title {
            color: #fff;
          }
          .textBox {
            color: #fff;
          }
          .price {
            .span1 {
              color: #fff;
            }
            .span2 {
              color: #fff;
            }
            .span3 {
              color: #fff;
            }
          }
          .newCardsBtn {
            opacity: 1;
          }
        }
      }
    }
  }
  .newCardsBtn {
    text-align: center;
    .el-button {
      padding: 9px 22px;
      font-size: 18px;
      height: 44px;
      cursor: pointer;
      border-radius: 6px;
    }
  }
}
.allServe {
  color: #fff;
  padding: 106px 0 0;
  .allServeTitle {
    min-width: 750px;
    position: relative;
    text-align: center;
    user-select: none;
    white-space: pre-wrap;
    font-size: calc(31.3043px + 1.15942vw);
    color: rgb(23, 26, 29);
  }
  .allServeBox {
    display: flex;
    margin: 65px auto 24px;
    max-width: 1200px;
    width: 100%;
    .allServeContent {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      .allServeItem {
        box-shadow: inset 0 -1px 1px 0 hsla(0, 0%, 100%, 0.3);
        height: 180px;
        margin-right: 15px;
        padding: 60px 24px 0;
        white-space: nowrap;
        backdrop-filter: blur(30px);
        border-radius: 16px;
        margin-bottom: 15px;
        box-sizing: border-box;
        .text1 {
          color: #171a1d;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 0;
          line-height: 24px;
          margin-bottom: 12px;
          max-width: 100%;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
        }
        .text2 {
          color: #666;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0;
          line-height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
  .allServeFooter {
    color: #666;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 20px;
    margin: 0 auto;
    max-width: 1200px;
    text-align: center;
    white-space: pre-wrap;
  }
}
.CaseBanner {
  font-weight: 400;
  overflow: hidden;
  padding-top: 106px;
  .CaseBannerTitle {
    white-space: pre-wrap;
    font-size: calc(31.3043px + 1.15942vw);
    color: rgb(23, 26, 29);
    margin-bottom: 32px;
    min-width: 750px;
    position: relative;
    text-align: center;
    user-select: none;
  }
  .CaseBannerContent {
    margin: 0 40px;
    cursor: grab;
    max-width: 1200px;
    position: relative;
    user-select: none;
    width: 100%;
    .CaseBannerItemBox {
      display: flex;
      position: relative;
      transition: left 0.5s;
      width: 3500px;
      left: 0;
      .CaseBannerItem {
        padding-bottom: 54px;
        padding-left: 12px;
        padding-right: 12px;
        .CaseBannerItemContent {
          background-color: #fff;
          border-radius: 16px;
          cursor: pointer;
          transition: box-shadow 0.3s, -webkit-box-shadow 0.3s;
          width: 384px;
          .CaseBannerItemTop {
            border-radius: 16px 16px 0 0;
            height: 200px;
            overflow: hidden;
            .img {
              background-position: top;
              background-repeat: no-repeat;
              background-size: auto 100%;
              height: 100%;
              transition: all 1.5s;
              width: 384px;
            }
          }
          .CaseBannerItemBottom {
            display: flex;
            flex-direction: column;
            height: 280px;
            justify-content: space-between;
            padding: 12px 24px 40px;
            box-sizing: border-box;
            .icon {
              height: 48px;
              width: 240px;
            }
            .textBox {
              display: flex;
              flex: 1;
              position: relative;
              .textBoxNoHover {
                white-space: pre-wrap;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                display: -webkit-box;
                font-family: PingFangSC-Medium;
                font-size: 32px;
                font-weight: 500;
                line-height: 45px;
                margin-top: 8px;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100%;
                opacity: 1;
              }
              .textBoxHover {
                height: 100%;
                opacity: 0;
                position: absolute;
                top: 0;
                transition: opacity 0.3s;
                width: 100%;
                .text1 {
                  font-family: PingFangSC-Medium;
                  font-size: 20px;
                  font-weight: 500;
                  line-height: 28px;
                  margin-bottom: 8px;
                  padding-top: 15px;
                }
                .text2 {
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 3;
                  color: #171a1d;
                  display: -webkit-box;
                  font-size: 18px;
                  line-height: 32px;
                  overflow: hidden;
                  -o-text-overflow: ellipsis;
                  text-overflow: ellipsis;
                  width: 100%;
                }
              }
            }
          }
          &:hover .CaseBannerItemBottom .textBox .textBoxNoHover {
            opacity: 0;
          }
          &:hover .CaseBannerItemBottom .textBox .textBoxHover {
            opacity: 1;
          }
          &:hover .CaseBannerItemTop .img {
            transform: scale(1.2);
          }
        }
      }
    }
  }
  .CaseBannerTool {
    display: flex;
    justify-content: center;
    .prev {
      margin-right: 24px;
      cursor: unset;
      align-items: center;
      background-color: #fff;
      border: 1px solid hsla(210, 7%, 53%, 0.24);
      border-radius: 22px;
      cursor: pointer;
      font-size: 18px;
      height: 44px;
      width: 44px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-icon:first-child {
        position: absolute;
        top: 10px;
        left: 10px;
        opacity: 1;
        transition: left 0.5s;
      }
      .el-icon:last-child {
        position: absolute;
        top: 10px;
        left: 15px;
        opacity: 0;
        transition: left 0.5s;
      }
      &:hover {
        background-color: #f6f3f3;
      }
      &:hover .el-icon:last-child {
        left: 10px;
        opacity: 1;
      }
      &:hover .el-icon:first-child {
        // left: 8px;
        opacity: 0;
      }
    }
    .next {
      align-items: center;
      background-color: #fff;
      border: 1px solid hsla(210, 7%, 53%, 0.24);
      border-radius: 22px;
      cursor: pointer;
      font-size: 18px;
      height: 44px;
      width: 44px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-icon:first-child {
        position: absolute;
        top: 10px;
        left: 5px;
        opacity: 0;
        transition: left 0.1s;
      }
      .el-icon:last-child {
        position: absolute;
        top: 10px;
        left: 10px;
        opacity: 1;
        transition: left 0.1s;
      }
      &:hover {
        background-color: #f6f3f3;
      }
      &:hover .el-icon:first-child {
        left: 10px;
        opacity: 1;
      }
      &:hover .el-icon:last-child {
        // left: 12px;
        opacity: 0;
      }
    }
    .nextAc {
      cursor: not-allowed;
      .el-icon:last-child {
        color: rgb(216, 216, 216);
      }
      &:hover .el-icon:last-child {
        opacity: 1;
      }
      &:hover .el-icon:first-child {
        opacity: 0;
      }
      &:hover {
        background-color: #fff;
      }
    }
    .prevAc {
      cursor: not-allowed;
      .el-icon:first-child {
        color: rgb(216, 216, 216);
      }
      &:hover .el-icon:last-child {
        opacity: 0;
      }
      &:hover .el-icon:first-child {
        opacity: 1;
      }
      &:hover {
        background-color: #fff;
      }
    }
  }
}
.CasePlay {
  padding: 106px 0;
  .CasePlayTitle {
    white-space: pre-wrap;
    font-size: 48px;
    color: rgb(23, 26, 29);
    margin-bottom: 40px;
    min-width: 750px;
    position: relative;
    text-align: center;
    user-select: none;
  }
  .CasePlayItem {
    margin: 0 auto;
    max-width: 1200px;
    min-width: 680px;
  }
  .CasePlayBtn {
    text-align: center;
    margin-top: 44px;
    .el-button {
      padding: 9px 22px;
      font-size: 18px;
      height: 44px;
      cursor: pointer;
    }
  }
}
.more {
  color: #2c86fe;
  font-size: 18px;
  display: flex;
  align-items: center;
  position: relative;
  width: auto;
  .icon1 {
    position: absolute;
    top: 4.5px;
    left: 70px;
    opacity: 0;
    transition: left 0.1s;
  }
  .icon2 {
    position: absolute;
    top: 6px;
    left: 75px;
    opacity: 1;
    transition: left 0.1s;
  }
  &:hover .icon1 {
    left: 75px;
    opacity: 1;
  }
  &:hover .icon2 {
    opacity: 0;
  }
  a {
    color: rgb(0, 127, 255);
  }
  &:hover a {
    color: rgba(0, 127, 255, 0.6);
  }
}
.safe {
  background-color: #000;
  color: hsla(0, 0%, 100%, 0.8);
  min-width: 750px;
  padding: 106px 0;
  .safeTitle {
    white-space: pre-wrap;
    font-size: 48px;
    color: rgb(255, 255, 255);
    text-align: center;
  }
  .safeBtn {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    .el-button {
      padding: 9px 22px;
      font-size: 18px;
      height: 44px;
      cursor: pointer;
    }
  }
  .safeMain {
    max-width: 1200px;
    .safeMainTop {
      display: flex;
      height: 380px;
      .text1 {
        background-image: -webkit-linear-gradient(
          left,
          #69b3ff,
          #007fff 50%,
          rgba(105, 179, 255, 0.14)
        );
        margin-bottom: 0;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .text2 {
        color: #fff;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        line-height: 45px;
        margin-bottom: 12px;
        z-index: 2;
      }
      .text3 {
        color: hsla(0, 0%, 100%, 0.8);
        line-height: 32px;
        z-index: 2;
      }
      .left,
      .right {
        background-color: hsla(0, 0%, 100%, 0.08);
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        justify-content: end;
        overflow: hidden;
        padding: 40px 90px 40px 32px;
        width: 588px;
        position: relative;
        .leftSvg {
          height: 588px;
          position: absolute;
          right: 0;
          top: -102px;
          width: 588px;
        }
      }
      .left {
        margin-right: 24px;
        .text1 {
          background-image: -webkit-linear-gradient(
            left,
            #ff9200,
            #ff722a 50%,
            rgba(255, 84, 226, 0)
          );
        }
      }
    }
    .safeMainBottom {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 24px;
      padding: 40px 32px 48px;
      background-color: hsla(0, 0%, 100%, 0.08);
      border-radius: 16px;
      .safeMainBottomTitle {
        background-image: -webkit-linear-gradient(left, #00ebb6, #0ebdb9 50%, #040506);
        color: transparent;
        font-family: PingFangSC-Medium;
        font-size: 34px;
        font-weight: 500;
        line-height: 45px;
        margin-bottom: 12px;
        background-clip: text;
      }
      .safeMainBottomText {
        color: hsla(0, 0%, 100%, 0.8);
        font-size: 18px;
        line-height: 32px;
      }
      .safeMainBottomLogoBox {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        padding-top: 28px;
        img {
          margin-right: 24px;
          margin-top: 16px;
          width: 155px;
        }
      }
    }
  }
}

a {
  display: inline-block;
}
.DDfooter {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f6f6f6;
  color: #000000;
  .DDfooterContent {
    width: 83.333333333333333%;
    padding-top: 79px;
    box-sizing: border-box;
    .footer1 {
      display: flex;
      justify-content: space-between;
      padding-bottom: 42px;
      border-bottom: 1px solid rgba(126, 134, 142, 0.24);
      .footer1Item {
        width: 16.666666666666666%;
        min-width: 120px;
        box-sizing: border-box;
        .footer1ItemTitle {
          font-weight: 600;
          font-size: 14px;
          color: #171a1d;
          margin-bottom: 18px;
          line-height: 22px;
        }
        ul {
          margin-bottom: 1em;
          li {
            margin-bottom: 8px;
            a {
              display: inline-block;
              font-weight: 400;
              font-size: 14px;
              color: #000000;
              line-height: 22px;
              text-decoration: none;
              opacity: 0.4;
              text-wrap: nowrap;
              &:hover {
                color: rgb(0, 127, 255);
                opacity: 1;
              }
            }
          }
        }
      }
    }
    .footer2 {
      padding-top: 47px;
      margin-bottom: 42px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      white-space: nowrap;
      .footer2Left {
        .email {
          display: flex;
          line-height: 16px;
          margin-bottom: 12px;
          .icon {
            height: 20px;
            margin-right: 8px;
          }
          .text1 {
            font-weight: 500;
            font-size: 14px;
            color: #000000;
            margin-right: 4px;
          }
          .text2 {
            font-weight: 400;
            font-size: 14px;
            color: rgba(23, 26, 29, 0.6);
            letter-spacing: 0;
          }
        }
        .lauguage {
          display: flex;
          align-items: center;
          img {
            width: 17px;
            margin-right: 8px;
          }
          :deep(.el-select) {
            .el-select__wrapper {
              background-color: transparent;
              padding: 0 8px !important;
              height: 26px;
              min-height: auto;
            }
          }
        }
      }
      .footer2Right {
        display: flex;
        .imgItem {
          cursor: pointer;
          margin-left: 20px;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          position: relative;
          box-sizing: border-box;
          img:nth-child(1) {
            display: block;
          }
          img:nth-child(2) {
            display: none;
          }
          &:hover img:nth-child(1) {
            display: none;
          }
          &:hover img:nth-child(2) {
            display: block;
          }
          &:hover .qrContent {
            opacity: 1;
          }
          img {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
    .footer3 {
      display: flex;
      justify-content: center;
      margin-bottom: 24px;
      .footer3Item {
        margin-right: 16px;
        border-radius: 6px;
        position: relative;
        .img1 {
          display: block;
        }
        .img2 {
          display: none;
        }
        &:hover {
          .img1 {
            display: none;
          }
          .img2 {
            display: block;
          }
        }
        img {
          display: block;
        }
        &:hover .qrContent {
          opacity: 1 !important;
        }
      }
    }
    .footer4 {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      line-height: 18px;
      .footer4Text1 {
        margin-bottom: 4px;
        a {
          display: inline-block;
          padding: 0 5px;
          margin-bottom: 10px;
          color: rgba(0, 0, 0, 0.4);
          border-right: 1px solid rgba(0, 0, 0, 0.4);
          line-height: 12px;
          text-decoration: none;
          white-space: nowrap;
          &:hover {
            color: #171a1f;
          }
        }
      }
      .footer4Text2,
      .footer4Text3 {
        font-weight: 400;
        font-size: 12px;
        color: rgba(23, 26, 29, 0.6);
        letter-spacing: 0;
        text-align: center;
        line-height: 22px;
        white-space: nowrap;
        a {
          color: rgba(23, 26, 29, 0.6);
          span {
            white-space: nowrap;
          }
          &:hover {
            color: #171a1f;
          }
        }
      }
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }
      .footer4Text4 {
        margin-top: 35px;
        margin-bottom: 84px;
        img:nth-of-type(1) {
          width: 20px;
          height: 20px;
        }
        img:nth-of-type(2) {
          width: 22px;
          vertical-align: top;
        }
        a {
          margin: 0 4px;
          text-decoration: none;
          font-weight: 400;
          font-size: 12px;
          color: rgba(23, 26, 29, 0.6);
          letter-spacing: 0;
          transition: color 0.3s;
          touch-action: manipulation;
          &:hover {
            color: #171a1f;
          }
        }
      }
    }
  }
}
.qrContent {
  width: 130px;
  height: 177px;
  background: #ffffff;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.18);
  border-radius: 6px;
  padding: 0 13px;
  position: absolute;
  top: -190px;
  left: 50%;
  transform: translate(-50%, 10px) scale(0.9);
  opacity: 0;
  transition-property: transform, opacity, visibility;
  pointer-events: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    display: block !important;
    width: 104px !important;
    height: 104px !important;
    margin: 13px 0 3px;
    box-sizing: border-box;
  }
  .qrContentText {
    text-align: center;
    line-height: 17px;
    font-size: 14px;
    color: #000000;
    height: 34px;
    padding-top: 5px;
    border-top: 0.5px solid #b4babd;
  }
}
.footerImgBox {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: url("https://img.alicdn.com/imgextra/i4/O1CN01XMzHdj1Y1abe5TgF1_!!6000000002999-2-tps-2496-624.png")
    center center / auto 100% no-repeat #01160b;
  transition: all 8s;
  &:hover {
    background-size: auto 120%;
  }
  .caoniniang {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.48);
    width: 100%;
  }
  .dIcon {
    width: 100%;
    height: 52px;
    background: url("https://gw.alicdn.com/imgextra/i2/O1CN01rC0EJs1ZZJR2WHfdQ_!!6000000003208-2-tps-1880-272.png")
      center center / auto 100% no-repeat;
  }
  .dBottonBox {
    margin-top: 32px;
    text-align: center;
    a:nth-of-type(1) {
      margin-right: 20px;
    }
    .el-button {
      padding: 9px 22px;
      font-size: 18px;
      height: 44px;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 1200px) {
  :deep(.banner) {
    min-width: 750px;
    a {
      min-width: 750px;
      img {
        min-width: 750px;
        height: 820px;
      }
    }
  }
  .bannerBox {
    min-width: 750px;
  }
  .cardBox {
    display: none;
  }
  .cardBox2 {
    display: flex;
    justify-content: center;
    padding: 24px 48px;
    width: 100%;
    flex-wrap: wrap;
    bottom: 0;
    min-width: 750px !important;
    position: absolute;
    z-index: 5;
    box-sizing: border-box;
    .filter {
      background-color: hsla(0, 0%, 100%, 0.15);
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 0;
    }
    .filter2 {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
      transition: background-color 0.5s ease 0s;
      opacity: 0.3;
    }
    .cardBox2Item {
      border-radius: 6.63px;
      box-shadow: none;
      cursor: pointer;
      height: 112px;
      transition: all 10s;
      width: calc(50% - 8px);
      z-index: 2;
      position: relative;
      .bg {
        background-color: hsla(0, 0%, 100%, 0.8);
        border-radius: 8px;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
      }
      .cardBox2ItemBox {
        position: relative;
        z-index: 10;
        border: 1px solid #fff;
        border-radius: 6.63px;
        height: 100%;
        overflow: hidden;
        padding-left: 20px;
        padding-top: 16px;
        transition: all 0.3s;
        width: 100%;
        box-sizing: border-box;
        img {
          opacity: 0;
          position: absolute;
          transform: scale(0.8);
          transition: all 0.3s;
          width: 120px;
          z-index: -1;
          bottom: -15px;
          right: 20px;
        }
        .text1 {
          font-family: PingFangSC-Medium;
          font-size: 16px;
          font-weight: 500;
          height: 22px;
        }
        .text2 {
          color: rgba(23, 26, 29, 0.6);
          font-size: 12px;
          height: 17px;
          margin-bottom: 14px;
          margin-top: 4px;
        }
        .btn {
          align-items: center;
          background-color: hsla(0, 0%, 100%, 0.4);
          border: 1px solid hsla(210, 7%, 53%, 0.24);
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          font-size: 11.38px;
          font-weight: 400;
          height: 26px;
          justify-content: center;
          width: 62px;
        }
      }
      &:hover .cardBox2ItemBox img {
        opacity: 1;
        transform: scale(1);
      }
      &:nth-of-type(1) {
        background-image: linear-gradient(
          115deg,
          rgba(0, 127, 255, 0.8) 0px,
          rgba(0, 127, 255, 0.3) 50%,
          rgba(0, 127, 255, 0) 100%
        );
        margin-right: 16px;
        margin-bottom: 16px;
      }
      &:nth-of-type(2) {
        background-image: linear-gradient(
          115deg,
          rgba(14, 190, 254, 0.8) 0px,
          rgba(14, 190, 254, 0.3) 50%,
          rgba(14, 190, 254, 0) 100%
        );
        margin-bottom: 16px;
      }
      &:nth-of-type(3) {
        background-image: linear-gradient(
          115deg,
          rgba(143, 53, 255, 0.8) 0px,
          rgba(143, 53, 255, 0.3) 50%,
          rgba(143, 53, 255, 0) 100%
        );
        margin-right: 16px;
      }
      &:nth-of-type(4) {
        background-image: linear-gradient(
          115deg,
          rgba(61, 202, 138, 0.8) 0px,
          rgba(61, 202, 138, 0.3) 50%,
          rgba(61, 202, 138, 0) 100%
        );
      }
    }
  }
  .accordionCard {
    min-width: 750px;
    .accordionCardBox {
      display: none;
    }
    .accordionCardBox2 {
      display: block;
      margin: 56px calc(-30.33333px + 10.44444vw) 0;
      .itemBox {
        display: flex;
        height: 180px;
        width: 100%;
        overflow: hidden;
        .item {
          border-right: 1px solid #292b2f;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          transition: width 0.5s;
          width: 33.33%;
          .i {
            background-color: rgba(23, 26, 29, 0.9);
            background-position: bottom 25% left 20%;
            background-repeat: no-repeat;
            background-size: auto 200%;
            height: 180px;
            padding-left: 32px;
            padding-top: 48px;
            transition: width 0.5s;
            width: 100%;
            box-sizing: border-box;
            .text1 {
              color: #fff;
              font-family: PingFangSC-Medium;
              font-size: 16px;
              font-weight: 500;
              height: 22px;
              letter-spacing: 0;
              opacity: 1;
            }
            .br {
              background-image: linear-gradient(69deg, #004fff, rgba(0, 79, 255, 0) 51%),
                radial-gradient(
                  circle at 170% -17%,
                  rgba(112, 208, 255, 0.4) 0,
                  rgba(220, 251, 255, 0) 122%
                ),
                linear-gradient(239deg, #3296fa, #007fff);
              height: 1px;
              margin: 6px 0;
              opacity: 1;
              width: 14px;
            }
            .text2 {
              color: hsla(0, 0%, 100%, 0.6);
              font-size: 14px;
              height: 26px;
              letter-spacing: 0;
              line-height: 26px;
              opacity: 1;
              width: 68px;
            }
          }
          &:last-child {
            border: 0;
          }
        }
        &:first-child {
          border-radius: 16px 16px 0 0;
        }
        &:last-child {
          border-radius: 0 0 16px 16px;
        }
        .activeI {
          position: absolute;
          background-image: linear-gradient(
              40deg,
              rgba(155, 235, 255, 0.2),
              rgba(220, 251, 255, 0) 16%,
              rgba(220, 251, 255, 0) 0
            ),
            linear-gradient(
              69deg,
              #004fff,
              rgba(0, 79, 255, 0) 78%,
              rgba(0, 79, 255, 0) 0
            ),
            linear-gradient(8deg, #004fff, rgba(0, 79, 255, 0) 80%),
            radial-gradient(
              circle at 170% -17%,
              rgba(112, 208, 255, 0.4) 0,
              rgba(220, 251, 255, 0) 122%
            ),
            linear-gradient(239deg, #3296fa, #007fff);
          display: flex;
          flex-direction: column;
          height: 180px;
          justify-content: space-between;
          left: 100%;
          padding-bottom: 34px;
          padding-left: 20px;
          padding-top: 32px;
          top: 0;
          width: 100%;
          box-sizing: border-box;
          opacity: 0;
          transition: left 1s;
          img {
            height: 180px;
            opacity: 1;
            position: absolute;
            right: -97px;
            top: 20px;
            transition: top 0.5s 0.5s;
          }
          .text1Wanzheng {
            color: #fff;
            font-size: 28px;
            font-weight: 500;
            height: 40px;
            letter-spacing: 0;
            margin-bottom: 9px;
          }
          .text2Wanzheng {
            color: hsla(0, 0%, 100%, 0.6);
            font-size: 16px;
            line-height: 26px;
          }
          .el-button {
            color: rgb(0, 127, 255);
            width: 60px;
            height: 32px;
            cursor: pointer;
          }
        }
      }
      .itemActive {
        position: relative;
        flex: 0 0 340px;
        .activeI {
          top: 0;
          left: 0;
          position: absolute;
          opacity: 1;
          img {
            height: 180px;
            opacity: 1;
            position: absolute;
            right: -97px;
            top: 0;
          }
        }
      }
    }
  }
  .collaborationTools {
    .tabContent {
      display: block;
    }
  }
  .EnterpriseClassificatio {
    min-width: 750px;
    .dadTabContent {
      height: calc(153.33333px + 22.22222vw);
      width: auto;
      margin: 0 calc(-30.33333px + 10.44444vw);
      .dadTabContentLeft {
        height: calc(153.33333px + 22.22222vw);
        width: calc(-126.66667px + 59.55556vw);
      }
      .dadTabContentRight {
        padding: calc(-69.33333px + 12.44444vw) calc(-11.66667px + 5.55556vw)
          calc(13.66667px + 2.44444vw);
      }
    }
  }
  .allServe {
    min-width: 750px;
    .allServeItem {
      width: calc(50% - 15px);
    }
  }
  .newCardsDDEdition {
    min-width: 750px;
    .newCardsBox {
      max-width: 90%;
      justify-content: center;
      flex-wrap: wrap;

      .newCardsItem {
        width: 45% !important;
      }
    }
  }
  .safeMain {
    margin: calc(-61.33333px + 9.77778vw) calc(-30.33333px + 10.44444vw) 0;
    .safeMainTop {
      height: calc(166.66667px + 17.77778vw);
      .left {
        margin-right: calc(2.66667px + 1.77778vw);
      }
      .left,
      .right {
        padding: calc(13.33333px + 2.22222vw) calc(-78px + 14vw)
          calc(13.33333px + 2.22222vw) 32px;
        width: -webkit-calc(-129.33333px + 59.77778vw);
        .text1 {
          font-size: calc(18px + 1.33333vw);
          line-height: calc(23.66667px + 1.77778vw);
        }
        .text2 {
          font-size: calc(16px + 1.33333vw);
          line-height: calc(23.66667px + 1.77778vw);
        }
        .text3 {
          font-size: calc(7.33333px + 0.88889vw);
          line-height: calc(16px + 1.33333vw);
        }
        // .leftSvg{
        //   height: calc(29px + 38.66667vw);
        //   top: calc(28.66667px - 10.88889vw);
        //   width: calc(29px + 38.66667vw);
        // }
      }
    }
    .safeMainBottom {
      margin-top: calc(2.66667px + 1.77778vw) !important;
      padding: calc(18.66667px + 1.77778vw) 32px calc(61.33333px - 1.77778vw) !important;
      .safeMainBottomTitle {
        font-size: calc(18px + 1.33333vw);
        line-height: calc(26.33333px + 1.55556vw);
      }
      .safeMainBottomText {
        font-size: calc(7.33333px + 0.88889vw);
        line-height: calc(16px + 1.33333vw);
      }

      .safeMainBottomLogoBox {
        padding-top: calc(-1.33333px + 2.44444vw);
        img {
          width: calc(40.33333px + 9.55556vw) !important;
          height: calc(16.66667px + 4.77778vw);
        }
      }
    }
  }
  .footerImgBox {
    .caoniniang {
      padding: calc(60.66667px + 5.77778vw) 0 calc(55px + 12.66667vw);
    }
  }
}

@media screen and (min-width: 1200px) {
  :deep(.banner) {
    min-width: 1200px;
  }
  .cardBox {
    display: flex;
  }
  .cardBox2 {
    display: none;
  }
  .bannerBox {
    min-width: 1200px;
    a {
      min-width: 1200px;
      img {
        min-width: 1200px;
        height: 1300px;
      }
    }
  }
  .accordionCard {
    min-width: 1200px;
    .accordionCardBox {
      display: flex;
    }
    .accordionCardBox2 {
      display: none;
    }
  }
  .collaborationTools {
    .tabContent {
      display: flex;
      justify-content: center;
    }
  }
  .EnterpriseClassificatio {
    min-width: 1200px;
    .dadTabContent {
      height: 420px;
      width: 1200px;
      margin: 0 auto;
      .dadTabContentLeft {
        width: 588px;
      }
      .dadTabContentRight {
        padding: 80px 55px 43px;
      }
    }
  }
  .allServe {
    min-width: 1200px;
    .allServeItem {
      width: calc(33.33333% - 15px);
    }
  }
  .newCardsDDEdition {
    min-width: 1200px;
    .newCardsBox {
      max-width: 1200px;
    }
  }
  .safeMain {
    margin: 56px auto 0;
    .text1 {
      font-size: 34px;
    }
    .text2 {
      font-size: 32px;
    }
    .text3 {
      font-size: 18px;
    }
  }
  .footerImgBox {
    .caoniniang {
      padding: 130px 0 207px;
    }
  }
}
@media screen and (max-width: 750px) {
  .safeMain {
    margin: 44px 48px 0;
    .safeMainTop {
      height: 300px;
      .left {
        padding: 30px 27px 30px 32px;
        width: 319px;
        .text1 {
          font-size: 28px;
          line-height: 37px;
        }
        .text2 {
          font-size: 26px;
          line-height: 37px;
        }
        .text3 {
          font-size: 14px;
          line-height: 26px;
        }
      }
    }
  }
  .footerImgBox {
    .caoniniang {
      padding: 104px 0 150px;
    }
  }
}
@media screen and (min-width: 1440px) {
  .animationDing {
    font-size: 100px;
  }
}
@media screen and (max-width: 1440px) {
  .animationDing {
    font-size: 6.94444444444vw;
  }
}
</style>
