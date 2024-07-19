<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue'
import Frist from './components/frist.vue'
import Frists from './components/frists.vue'
import Animation from './components/animation.vue'
import Animations from './components/animation1.vue'
import {Particle} from './components/particle.js'
const systemInfo = uni.getSystemInfoSync();
const windowHeight = systemInfo.windowHeight;
const windowWidth = systemInfo.windowWidth;
const topHight = systemInfo.statusBarHeight || 0;
const halfWindowWidth = windowWidth / 2
const bili = 19510/1448
const scale = windowHeight / 1448
console.log(topHight,windowHeight)
const scaleX = 375 / windowWidth
const scrollViewWidth = bili * windowHeight + 'px'
const scrollViewWidts = bili * windowHeight - 80 + 'px'
const scrollViewWidtss = bili * windowHeight - 50 + 'px'
const buildBottomHeight = 190 * scale + 'px'
const scroll = ref(0)
const audioRef = ref(null)
const playMusic = ref(false)
const swiperRef = ref(null)
// 创建响应式数据
const show = ref(false);
const getImgFn = (name:string)=>{
  return new URL(`../../assets/image/dialog/${name}.png`,import.meta.url).href
}
const getYearImgFn = (name:string)=>{
  return new URL(`../../assets/image/${name}.png`,import.meta.url).href
}
const getCloudImgFn = (name:number)=>{
  return new URL(`../../assets/image/cloud/cloud${name}.png`,import.meta.url).href
}
const getBuildImgFn = (name:string)=>{
  return new URL(`../../assets/image/main/${name}.png`,import.meta.url).href
}
const getProspectImgFn = (name:string)=>{
  return new URL(`../../assets/image/prospect/${name}.png`,import.meta.url).href
}
const toUrl = (src:string) => {
  return new URL(`${src}`, import.meta.url).href
}
//弹出动画图片数组
const popPics = ref([])
const yearView = [
  {
      left:908 * scale,
      year: getYearImgFn('2008-2010'),
      word:'从国家首次圆梦夏奥\n到广州亚运会再续荣光\n\n雷士照明以光匠铸\n助力中国体育迈入世界先进行列'
  },
  {
      left:5412 * scale,
      year:getYearImgFn('2011-2014'),
      word:'从深圳大运会超然绽耀\n到武汉军运会惊艳亮相\n\n雷士照明凝光添彩\n让世界一次次看见中国体育实力'
  },
  {
      left:12213 * scale,
      year:getYearImgFn('2022-2023'),
      word:'从北京解锁 ”双奥之城“\n到杭州亚运会全球瞩目\n\n雷士照明携光相伴\n同心共筑中国体育强国梦'
  }
]
const cloudView = [
  {
    left:783 * scale,
    top:856 * scale,
    width:391 * scale,
    height:96 * scale,
    cloud:getCloudImgFn(1)
  },{
    left: 2200 * scale,
    top: 294 * scale,
    width:407 * scale,
    height:106 * scale,
    cloud:getCloudImgFn(2)
  },{
    left: 7502 * scale,
    top: 405 * scale,
    width:433 * scale,
    height:204 * scale,
    cloud:getCloudImgFn(3)
  },{
    left: 9878 * scale,
    top: 719 * scale,
    width:375 * scale,
    height:174 * scale,
    cloud:getCloudImgFn(4)
  },{
    left: 13760 * scale,
    top: 317 * scale,
    width:407 * scale,
    height:106 * scale,
    cloud:getCloudImgFn(5)
  },{
    left: 14358 * scale, 
    top: 860 * scale,
    width:375 * scale,
    height:174 * scale,
    cloud:getCloudImgFn(6)
  },{
    left: 16576 * scale,
    top: 259 * scale,
    width:407 * scale,
    height:106 * scale,
    cloud:getCloudImgFn(7)
  },{
    left: 18890 * scale,
    top: 565 * scale,
    width:433 * scale,
    height:204 * scale,
    cloud:getCloudImgFn(8)
  }
]
const buildView = [
  {
    left:1209 * scale,
    width: 1428 * scale,
    height: 776 * scale,
    img:getBuildImgFn('bj'),
    image:[
      getImgFn('bjayh1'),
      getImgFn('bjayh2')
    ]
  },
  {
    left:3676 * scale,
    width: 1481 * scale,
    height: 796 * scale,

    img:getBuildImgFn('gz'),
    image:[
      getImgFn('gzyyh1'),
      getImgFn('gzyyh2')
    ]
  },
  {
    left:5712 * scale,
    width: 1790 * scale,
    height: 786 * scale,

    img:getBuildImgFn('sz'),
    image:[
      getImgFn('szdyh1'),
      getImgFn('szdyh2')
    ]
  },
  {
    left:8292 * scale,
    width: 1463 * scale,
    height: 775 * scale,

    img:getBuildImgFn('nj'),
    image:[
      getImgFn('njqah1'),
      getImgFn('njqah2')
    ]
  },
  {
    left:10446.8 * scale,
    width: 1542 * scale,
    height: 793 * scale,

    img:getBuildImgFn('wh'),
    image:[
      getImgFn('jrydh1'),
      getImgFn('jrydh2')
    ]
  },
  {
    left:12844 * scale,
    width: 1406 * scale,
    height: 782 * scale,

    img:getBuildImgFn('bj2'),
    image:[
      getImgFn('bjdah1'),
      getImgFn('bjdah2'),
      getImgFn('bjdah3')
    ]
  },{
    left:15165 * scale,
    width: 1245 * scale,
    height: 786 * scale,

    img:getBuildImgFn('cd'),
    image:[
      getImgFn('cddyh1'),
      getImgFn('cddyh2')
    ]
  },{
    left:17197 * scale,
    width: 1845 * scale,
    height: 916 * scale,

    img:getBuildImgFn('hz'),
    image:[
      getImgFn('hzyyh1'),
      getImgFn('hzyyh2')
    ]
  }
]
const prospectView = [
  {
    left:3031 * scale,
    width: 596 * scale,
    height: 1019 * scale,
    img:getProspectImgFn('deng'),

  },
  {
    left:5432 * scale,
    width: 987 * scale,
    height: 359 * scale,

    img:getProspectImgFn('szb'),

  },
  {
    left:7785 * scale,
    width: 411 * scale,
    height: 732 * scale,

    img:getProspectImgFn('nj'),

  },
  {
    left:10011 * scale,
    width: 654 * scale,
    height: 652 * scale,

    img:getProspectImgFn('wh'),

  },
  {
    left:12314 * scale,
    width: 650 * scale,
    height: 486 * scale,

    img:getProspectImgFn('bj'),

  },{
    left:14664 * scale,
    width: 343 * scale,
    height: 888 * scale,

    img:getProspectImgFn('cd'),

  },{
    left:16850 * scale,
    width: 359 * scale,
    height: 631 * scale,

    img:getProspectImgFn('hz'),

  }
]
const pointView = [
  {
    left:1968 * scale,
    top:636 * scale
  },
  {
    left:4504 * scale,
    top:565 * scale
  },
  {
    left:6830 * scale,
    top:883 * scale
  },
  {
    left:9155 * scale,
    top:768 * scale
  },
  {
    left:11335 * scale,
    top:700 * scale
  },
  {
    left:13599 * scale,
    top:898 * scale
  },
  {
    left:15897 * scale,
    top:836 * scale
  },
  {
    left:18228 * scale,
    top:808 * scale
  }
]
// const audioSrc = toUrl('../../assets/audio/bgm.m4a')
const endWord1 = '每一束微光皆蕴含非凡力量\n汇聚之时便能绽放传奇荣光'
const endWord2 = '雷士照明\n以微光，见荣光'
const endWord3 = '坚守品质初心，点亮大国赛事\n致力为中国体育事业持续敬献卓越光辉\n借此之际也预祝全体中国健儿\n在今夏的体育盛世中勇创佳绩，为国争光'
const startTop = computed(()=>{
  let move = Math.sin(scroll.value * 0.01) * 40
  if(scroll.value < 300){
    return 50 + move + scroll.value * 350/300
  }else{
    console.log(move + 400)
    return move + 450
  }
})
const startLeft = computed(() => {
  if(scroll.value < 300){
    let difference = 300 - halfWindowWidth 
    return scroll.value + halfWindowWidth + 1+scroll.value/difference
  }else{
    return scroll.value + halfWindowWidth
  }
})
const showAnimation = ref(false)
const showAnimations = ref(false)

const clickBuild = (img:any[]) => {
  popPics.value = img
  setTimeout(()=>{
    show.value = true;
  },300)
  
}
function open() {
  show.value = true;
}
function close() {
  show.value = false;
}
const particles = ref([])

// const init = () => {
//     loop();
// }
// init()
function loop() {
  requestAnimationFrame(loop);
  updateParticles();
}
function updateParticles() {
 // Updated
 for (var i = 0; i < particles.value.length; i++) {
   particles.value[i].update();
 }

 // Remove dead particles
 for (var i = particles.value.length - 1; i >= 0; i--) {
   if (particles.value[i].lifeSpan < 0) {
     particles.value[i].die();
     particles.value.splice(i, 1);
   }
 }
}
const useThrottle = (fn: Function, delay: number) => {
  const canRun = ref(true);
  return (...args: any[]) => {
    if (!canRun.value) return;
    canRun.value = false;
    setTimeout(() => {
      fn(...args);
      canRun.value = true;
    }, delay);
  };
};
const addParticle = useThrottle((x:number, y:number,direction:number,startTops:number) => {
    let particle = new Particle();
    let up = startTop.value - startTops > 0 ? 1 : -1 
    particle.init(x, y,direction,up);
    particles.value.push(particle);
},50)
const onScroll = (e: any) => {
  console.log(e.detail)
  let direction = e.detail.scrollLeft - scroll.value > 0 ? -1 : 1
  let startTops = startTop.value
  scroll.value = e.detail.scrollLeft
  // addParticle(startLeft.value - e.detail.scrollLeft,startTop.value,direction,startTops)
  // let start = document.getElementById('start');
}
const bjScaleComputed = computed(() => {
  const { left } = buildView[0]
  if(!left) return 1
  if(scroll.value < left){
    return 1
  }if(left < scroll.value && left + halfWindowWidth > scroll.value){
    
    return 1 + ((scroll.value-left)/halfWindowWidth) * 0.1
  }else{
    return 1.1
  }
})
const gzScaleComputed = computed(() => {
  const { left } = buildView[1]
  
  if(!left) return 1
  if(scroll.value < left){
    return 1
  }if(left < scroll.value && left + halfWindowWidth > scroll.value){
    
    return 1 + ((scroll.value-left)/halfWindowWidth) * 0.1
  }else{
    return 1.1
  }
})
const szScaleComputed = computed(() => {
  const { left } = buildView[2]
  
  if(!left) return 1
  if(scroll.value < left){
    return 1
  }if(left < scroll.value && left + halfWindowWidth > scroll.value){
    
    return 1 + ((scroll.value-left)/halfWindowWidth) * 0.1
  }else{
    return 1.1
  }
})
const njScaleComputed = computed(() => {
  const { left } = buildView[3]
  
  if(!left) return 1
  if(scroll.value < left){
    return 1
  }if(left < scroll.value && left + halfWindowWidth > scroll.value){
    
    return 1 + ((scroll.value-left)/halfWindowWidth) * 0.1
  }else{
    return 1.1
  }
})
const whScaleComputed = computed(() => {
  const { left } = buildView[4]
  
  if(!left) return 1
  if(scroll.value < left){
    return 1
  }if(left < scroll.value && left + halfWindowWidth > scroll.value){
    
    return 1 + ((scroll.value-left)/halfWindowWidth) * 0.1
  }else{
    return 1.1
  }
})
const bj2ScaleComputed = computed(() => {
  const { left } = buildView[5]
  
  if(!left) return 1
  if(scroll.value < left){
    return 1
  }if(left < scroll.value && left + halfWindowWidth > scroll.value){
    
    return 1 + ((scroll.value-left)/halfWindowWidth) * 0.1
  }else{
    return 1.1
  }
})
const cdScaleComputed = computed(() => {
  const { left } = buildView[6]
  
  if(!left) return 1
  if(scroll.value < left){
    return 1
  }if(left < scroll.value && left + halfWindowWidth > scroll.value){
    
    return 1 + ((scroll.value-left)/halfWindowWidth) * 0.1
  }else{
    return 1.1
  }
})
const hzScaleComputed = computed(() => {
  const { left } = buildView[7]
  
  if(!left) return 1
  if(scroll.value < left){
    return 1
  }if(left < scroll.value && left + halfWindowWidth > scroll.value){
    
    return 1 + ((scroll.value-left)/halfWindowWidth) * 0.1
  }else{
    return 1.1
  }
})
const dengpScaleComputed = computed(() => {
  const { left } = prospectView[0]
  
  if(!left) return 1
  if(scroll.value + halfWindowWidth < left){
    return 1
  }if(left < scroll.value + halfWindowWidth && left >= scroll.value){
    return 0.9 + ((left - scroll.value)/halfWindowWidth) * 0.1
  }else{
    return 0.9
  }
})
const szbpScaleComputed = computed(() => {
  const { left } = prospectView[1]
  
  if(!left) return 1
  if(scroll.value + halfWindowWidth < left){
    return 1
  }if(left < scroll.value + halfWindowWidth && left >= scroll.value){
    return 0.9 + ((left - scroll.value)/halfWindowWidth) * 0.1
  }else{
    return 0.9
  }
})
const njpScaleComputed = computed(() => {
  const { left } = prospectView[2]
  
  if(!left) return 1
  if(scroll.value + halfWindowWidth < left){
    return 1
  }if(left < scroll.value + halfWindowWidth && left >= scroll.value){
    return 0.9 + ((left - scroll.value)/halfWindowWidth) * 0.1
  }else{
    return 0.9
  }
})
const whpScaleComputed = computed(() => {
  const { left } = prospectView[3]
  
  if(!left) return 1
  if(scroll.value + halfWindowWidth < left){
    return 1
  }if(left < scroll.value + halfWindowWidth && left >= scroll.value){
    return 0.9 + ((left - scroll.value)/halfWindowWidth) * 0.1
  }else{
    return 0.9
  }
})
const bjpScaleComputed = computed(() => {
  const { left } = prospectView[4]
  
  if(!left) return 1
  if(scroll.value + halfWindowWidth < left){
    return 1
  }if(left < scroll.value + halfWindowWidth && left >= scroll.value){
    return 0.9 + ((left - scroll.value)/halfWindowWidth) * 0.1
  }else{
    return 0.9
  }
})
const cdpScaleComputed = computed(() => {
  const { left } = prospectView[5]
  
  if(!left) return 1
  if(scroll.value + halfWindowWidth < left){
    return 1
  }if(left < scroll.value + halfWindowWidth && left >= scroll.value){
    return 0.9 + ((left - scroll.value)/halfWindowWidth) * 0.1
  }else{
    return 0.9
  }
})
const hzpScaleComputed = computed(() => {
  const { left } = prospectView[6]
  
  if(!left) return 1
  if(scroll.value + halfWindowWidth < left){
    return 1
  }if(left < scroll.value + halfWindowWidth && left >= scroll.value){
    return 0.9 + ((left - scroll.value)/halfWindowWidth) * 0.1
  }else{
    return 0.9
  }
})
const controlMusic = () => {
  audioRef?.value.audioPause()
}
const autoPlayFn = ()=>{
  setTimeout(()=>{
    audioRef?.value.audioPause()
  },1000)
}
const musicChange = (val: boolean) => {
  console.log(123123,val)
}
const current = ref(0)
const clickChange = () =>{
  current.value = 2
  showAnimations.value = true
}
const btnClick = () => {
  showAnimation.value = true
  // current.value = 1
}
const swiperChange = (e:any) => {
  console.log('swiperChange',e)
  current.value = e.detail.current
  if(e.detail.current === 2){
    showAnimations.value = true
  }
}
const showAnimationFn = (val) =>{
  showAnimation.value = false
  current.value = 1
}
const showAnimationsFn = (val) =>{
  showAnimations.value = false
}
</script>

<template>
  <swiper ref="swiperRef" class="swiper-container" :current="current" @change="swiperChange">
      <swiper-item>
        <view class="first-container">
          <image class="star" src="../../assets/image/star-plus.png" v-if="!showAnimation" />
          <view class="number" v-if="!showAnimation">
              <up-count-to :startVal="0" :endVal="100" :duration="10000" color="#fff" fontSize="24"></up-count-to>
              <text>%...</text>
          </view>
          <view class="btn" @click="btnClick" v-if="!showAnimation">
              <image class="btn-img" src="../../assets/image/home-btn.png" />
          </view>
      </view>
      </swiper-item>
      <swiper-item>
        <scroll-view class="scroll-view_H" :scroll-x="true"  @scroll="onScroll"> 
          <view id="demo1" class="scroll-view-item_H">
            <frist />
            <!-- <frists :scroll="scroll"/> -->
            <view v-for="item in yearView" :key="item.left" class="year-build" :style="`left:${item.left}px;`">
              <template v-if="scroll > item.left - 50">
                <image class="year-img" :src="item.year" />
                <image class="year-line" src="../../assets/image/line.png" />
                <view class="year-word">
                  <text>{{ item.word }}</text>
                </view>
              </template>
            </view>
            <view v-for="item in cloudView" :key="item.left" class="cloud" :style="`left:${item.left}px;top:${item.top}px;}`">
              <image class="cloud-img" :src="item.cloud" :style="`width:${item.width}px;height:${item.height}px;}`"/>
            </view>
            <view class="builds" :style="`left:${buildView[0].left}px;`">
              <image class="build-img" :src="buildView[0].img" :style="`width:${buildView[0].width}px;height:${buildView[0].height}px;scale:${bjScaleComputed};`"/>
            </view>
            <view class="builds" :style="`left:${buildView[1].left}px;`">
              <image class="build-img" :src="buildView[1].img" :style="`width:${buildView[1].width}px;height:${buildView[1].height}px;scale:${gzScaleComputed};`"/>
            </view>
            <view class="builds" :style="`left:${buildView[2].left}px;`">
              <image class="build-img" :src="buildView[2].img" :style="`width:${buildView[2].width}px;height:${buildView[2].height}px;scale:${szScaleComputed};`"/>
            </view>
            <view class="builds" :style="`left:${buildView[3].left}px;`">
              <image class="build-img" :src="buildView[3].img" :style="`width:${buildView[3].width}px;height:${buildView[3].height}px;scale:${njScaleComputed};`"/>
            </view>
            <view class="builds" :style="`left:${buildView[4].left}px;`">
              <image class="build-img" :src="buildView[4].img" :style="`width:${buildView[4].width}px;height:${buildView[4].height}px;scale:${whScaleComputed};`"/>
            </view>
            <view class="builds" :style="`left:${buildView[5].left}px;`">
              <image class="build-img" :src="buildView[5].img" :style="`width:${buildView[5].width}px;height:${buildView[5].height}px;scale:${bj2ScaleComputed};`"/>
            </view>
            <view class="builds" :style="`left:${buildView[6].left}px;`">
              <image class="build-img" :src="buildView[6].img" :style="`width:${buildView[6].width}px;height:${buildView[6].height}px;scale:${cdScaleComputed};`"/>
            </view>
            <view class="builds" :style="`left:${buildView[7].left}px;`">
              <image class="build-img" :src="buildView[7].img" :style="`width:${buildView[7].width}px;height:${buildView[7].height}px;scale:${hzScaleComputed};`"/>
            </view>
            <view class="prospect" :style="`left:${prospectView[0].left}px;`">
              <image class="prospect-img" :src="prospectView[0].img" :style="`width:${prospectView[0].width}px;height:${prospectView[0].height}px;scale:${dengpScaleComputed};`"/>
            </view>
            <view class="prospect" :style="`left:${prospectView[1].left}px;`">
              <image class="prospect-img" :src="prospectView[1].img" :style="`width:${prospectView[1].width}px;height:${prospectView[1].height}px;scale:${szbpScaleComputed};`"/>
            </view>
            <view class="prospect" :style="`left:${prospectView[2].left}px;`">
              <image class="prospect-img" :src="prospectView[2].img" :style="`width:${prospectView[2].width}px;height:${prospectView[2].height}px;scale:${njpScaleComputed};`"/>
            </view>
            <view class="prospect" :style="`left:${prospectView[3].left}px;`">
              <image class="prospect-img" :src="prospectView[3].img" :style="`width:${prospectView[3].width}px;height:${prospectView[3].height}px;scale:${whpScaleComputed};`"/>
            </view>
            <view class="prospect" :style="`left:${prospectView[4].left}px;`">
              <image class="prospect-img" :src="prospectView[4].img" :style="`width:${prospectView[4].width}px;height:${prospectView[4].height}px;scale:${bjpScaleComputed};`"/>
            </view>
            <view class="prospect" :style="`left:${prospectView[5].left}px;`">
              <image class="prospect-img" :src="prospectView[5].img" :style="`width:${prospectView[5].width}px;height:${prospectView[5].height}px;scale:${cdpScaleComputed};`"/>
            </view>
            <view class="prospect" :style="`left:${prospectView[6].left}px;`">
              <image class="prospect-img" :src="prospectView[6].img" :style="`width:${prospectView[6].width}px;height:${prospectView[6].height}px;scale:${hzpScaleComputed};`"/>
            </view>
            <!-- <view class="prospect" :style="`left:${prospectView[6].left}px;`">
              <image class="prospect-img" :src="prospectView[6].img" :style="`width:${prospectView[6].width}px;height:${prospectView[6].height}px;scale:${hzpScaleComputed};`"/>
            </view> -->
            <!-- <view class="prospect" v-for="item in prospectView" :key="item.left" :style="`left:${item.left}px;`" >
              <image class="prospect-img" :src="item.img" :style="`width:${item.width}px;height:${item.height}px;`"/>
            </view> -->
            <view v-for="(item,index) in pointView" :key="item.left" class="point" :style="`left:${item.left}px;top:${item.top}px;}`" @click="clickBuild(buildView[index].image)">
              <image class="point-img" src="../../assets/image/point.png" :style="`width:${item.width}px;height:${item.height}px;}`"/>
            </view>
          </view>
          <view class="to-end" style="top: 50%;" @click="clickChange">
            <up-icon name="arrow-right-double" size="40" color="#fff"></up-icon>
          </view>
          <image v-if="scroll" class="start" :style="`left:${startLeft +'px'};top:${startTop + 'px'}`" src="../../assets/image/start.png"></image>
          <!-- <image v-else class="starts" src="../../assets/image/start.png"></image> -->
          <view class="particle"></view>
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <view class="end-container">
          <image v-if="current == 2 && !showAnimations" class="end-img" src="../../assets/image/end-img.png" />
          <view class="end-word" v-if="!showAnimations">
          <view class="end-words">
            <text>{{ endWord1 }}</text>
          </view>
          <view class="end-words" style="padding: 50rpx 0rpx;font-weight: 600;">
            <text>{{ endWord2 }}</text>
          </view>
          <view class="end-words">
            <text>{{ endWord3 }}</text>
          </view>
          </view>
        </view>
      </swiper-item>
    </swiper>
  
  <!--弹窗-->
  <view>
    <up-popup round :show="show" :customStyle="
    {
      background: 'rgba(0, 0, 0, 0)'
    }"
    :closeOnClickOverlay="false"
    @open="open" mode="center">
      <up-swiper
            :list="popPics"
            class="swiper"
            height="960rpx"
            indicator
            indicatorMode="dot"
    ></up-swiper>
    <view class="closeicon">
      <up-icon name="close-circle" color="#fff" size="26" @click="close"></up-icon>
    </view>
    </up-popup>
  </view>
  <Animation class="animation-container" @show="showAnimationFn" v-show="showAnimation" :show="showAnimation"></Animation>
  <Animations class="animation-container" @show="showAnimationsFn" v-show="showAnimations" :show="showAnimations"></Animations>
  <view class="music" @click="controlMusic">
    <image class="music-icon" src="../../assets/image/music-icon.png" />
    <sy-audio style="display: none;" ref="audioRef" src="https://static-mp-7c88e685-9cc9-474a-a436-982f3e7c35d9.next.bspapp.com/public/bgm.m4a" @audioCanplay="autoPlayFn" @change="musicChange"></sy-audio>
  </view>
</template>

<style lang="scss">
.first-container{
    display: flex;
    background-image: url('../../assets/image/home-bg.png');
    background-size: 100% 100%;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    .star{
      width:750rpx;
      height:750rpx;
      margin-top: 200rpx;
      animation: blinks 3s infinite;
    }
    .number{
        display: flex;
        justify-content: center;
        font-size: 24px;
        color: #fff;
        // width: 200rpx;
        // border-top: 1rpx solid #fff;
    }
    .btn{
        display: flex;
        justify-content: center;
        margin-top: 100rpx;
        .btn-img{
            width: 406rpx;
            height: 106rpx;
            animation: expandBox 10s ease forwards;
            animation: scales 3s infinite;
        }
    }
}
@keyframes expandBox {
    0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 406rpx;
    height: 106rpx;
  }
}
@keyframes blinks {
  0% {
    opacity: 1;
    scale: 1;
  }

  50% {
    opacity: 0.2;
    scale: 0.5;
  }

  100% {
    opacity: 1;
    scale: 1;
  }
}
.point{
  position: absolute;
  .point-img{
    width: 231rpx;
    height: 232rpx;
    animation: blink 2s infinite;
  }
}
.swiper-container{
  width: 100vw;
  height: 100vh;
}
.builds{
  position: absolute;
  bottom: v-bind(buildBottomHeight);
}
.prospect{
  position: absolute;
  bottom: 0;
}
.to-end{
  position: absolute;
  top:50%;
  left: v-bind(scrollViewWidts);
  animation: moveTos 3s infinite;
}
:deep(.uni-scroll-view-content){
  display: flex;
}
.end-container{
  display: flex;
  background-image: url('../../assets/image/home-bg.png');
  background-size: 100% 100%;
  min-width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .end-img{
    position: absolute;
    top:241rpx;
    width: 395rpx;
    height: 586rpx;
    clip-path: inset(0 0 0 0);
    transition: clip-path 3s ease-in-out;
    animation: revealImage 3s ease forwards;
  }
  .end-word{
    // display: flex;
    animation: fadeIn 3s ease forwards;
    text-align: center;
    color:#333;
    font-family: "Source Han Serif CN", serif;
    .end-words{
      text-align: center;
      line-height: 50rpx;
      color:#333;
      font-family: "Source Han Serif CN", serif;
  }
  }
}
@keyframes revealImage {
  0% {
        clip-path: inset(100% 0 0 0);
    }
    100% {
        clip-path: inset(0 0 0 0);
    }
}
.music{
  position: absolute;
  right: 50rpx;
  top: 50rpx;
  width: 80rpx;
  height: 80rpx;
  .music-icon{
    width: 80rpx;
    height: 80rpx;
    animation: rotate 4s linear infinite;
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.build{
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
}
.build-start{
  position: absolute;
  width: 150rpx;
  height: 150rpx;
  // background-color: black;
  white-space: nowrap;
  background-image: url('../../assets/image/start.png');
  background-size: 100% 100%;
  animation: blink 3s infinite;
}
.year-build{
  position: absolute;
  top:144rpx;
  width: 750rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .year-img{
    width: 421rpx;
    height: 52rpx;
    padding-left: 100rpx;
    animation: fadeIn 1s ease forwards;
  }
  .year-line{
    margin-top: 40rpx;
    width: 300rpx;
    height: 10rpx;
    animation: fadeIn 1s ease forwards;
  }
  .year-word{
    margin-top: 20px;
    text-align: center;
    font-weight: 600;
    color: #333;
    animation: fadeIn 3s ease forwards;
    font-family: "Source Han Serif CN", serif;
  }
}
.cloud{
  position: absolute;
  .cloud-img{
    animation: moveTo 15s infinite;
  }
}
.scroll-view-item_H {
  white-space: nowrap;
  background-image: url('../../assets/image/lsay.png');
  background-size: contain;
  min-width: v-bind(scrollViewWidth);
  height: 100vh;
}
.starts{
  width: 100rpx;
  height: 100rpx;
  position: absolute;
  animation: blink 2s infinite;
  animation: move 4s ease forwards;
}
.start{
  width: 150rpx;
  height: 150rpx;
  position: absolute;
  top: 50px;
  left: 300px;
  animation: blink 2s infinite;
}
.svg{
  position: absolute;
  left: 0;
  top: 0;
}
.closeicon{
  display: flex;
  justify-content: center;
  margin-top: 80rpx;
}
@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.7;
  }

  100% {
    opacity: 1;
  }
}
@keyframes scales {
  0% {
    scale: 1;
  }

  50% {
    scale: 1.2;
  }

  100% {
    scale: 1;
  }
}
@keyframes move {
  from {
    left: 10rpx;
    top: 1200rpx;
  }
  to {
    top: 50px;
    left: 300px;
  }
}
.swiper {
  width: 540rpx;
  height: 960rpx;
}
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes moveTo {
    0% {right: 0px;}
    50% {right: 300px;}
    100% {right: 0px;}
}
@keyframes moveTos {
    0% {
      left: v-bind(scrollViewWidts);
      scale: 1;
    }
    50% {
      left: v-bind(scrollViewWidtss);
      scale: 1.2;
    }
    100% {
      left: v-bind(scrollViewWidts);
      scale: 1;
    }
}
:deep(.u-swiper__indicator){
  bottom: 5px;
}
.animation-container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
}
</style>
