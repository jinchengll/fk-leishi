<template>
    <view class="animation-container">
        <image class="iamge" :src="data[number]"></image>
    </view>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import iamge0 from '../../../assets/image/animation/0.png'
import iamge1 from '../../../assets/image/animation/1.png'
import iamge2 from '../../../assets/image/animation/2.png'
import iamge3 from '../../../assets/image/animation/3.png'
import iamge4 from '../../../assets/image/animation/4.png'
import iamge5 from '../../../assets/image/animation/5.png'
import iamge6 from '../../../assets/image/animation/6.png'
import iamge7 from '../../../assets/image/animation/7.png'
import iamge8 from '../../../assets/image/animation/8.png'
import iamge9 from '../../../assets/image/animation/9.png'
import iamge10 from '../../../assets/image/animation/10.png'
import iamge11 from '../../../assets/image/animation/11.png'
import iamge12 from '../../../assets/image/animation/12.png'
import iamge13 from '../../../assets/image/animation/13.png'
import iamge14 from '../../../assets/image/animation/14.png'
import iamge15 from '../../../assets/image/animation/15.png'
import iamge16 from '../../../assets/image/animation/16.png'
import iamge17 from '../../../assets/image/animation/17.png'
import iamge18 from '../../../assets/image/animation/18.png'
import iamge19 from '../../../assets/image/animation/19.png'
import iamge20 from '../../../assets/image/animation/20.png'
import iamge21 from '../../../assets/image/animation/21.png'
let data = [
    iamge0,
    iamge1,
    iamge2,
    iamge3,
    iamge4,
    iamge5,
    iamge6,
    iamge7,
    iamge8,
    iamge9,
    iamge10,
    iamge11,
    iamge12,
    iamge13,
    iamge14,
    iamge15,
    iamge16,
    iamge17,
    iamge18,
    iamge19,
    iamge20,
    iamge21,
]
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['show'])
const number = ref(0)


watch (()=>props.show, (val) => {
    if(val){
        number.value = 0
        const timer = setInterval(() => {
            ++number.value
        }, 100);
        setTimeout(() => {
            clearInterval(timer);
            console.log('定时器已销毁');
            emit('show',false)
        }, 2100);
    }
})
</script>
<style lang="scss" scoped>
.animation-container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
}
.iamge{
    width: 100vw;
    height: 100vh;
}
</style>