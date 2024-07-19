<template>
    <view class="container">
        <image class="logo" src="../../../assets/image/logo1.png"></image>
        <image class="word" src="../../../assets/image/word.png"></image>
        <view class="bottom">
            <image class="touch" src="../../../assets/image/touch.png"></image>
        </view>
    </view>
</template>
<script setup lang="ts">
const systemInfo = uni.getSystemInfoSync();
const screenHeight = systemInfo.screenHeight;
const scale = screenHeight/1448
const top = 97 * scale + 'px'
const bottom = 359 * scale + 'px'
</script>
<style lang="scss" scoped>
.container{
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .logo{
        width:189rpx;
        height: 129rpx;
        // margin-top: 304rpx;
    }
    .word{
        height: 509rpx;
        width: 457rpx;
        // margin-top: 150rpx;
        animation: fadeIn 2s ease forwards;
        margin-top: v-bind(top);
        margin-bottom: v-bind(bottom);
        // margin-left: 50rpx;
    }
    .bottom{
        display: flex;
        justify-content: space-around;
        align-items: center;
        // margin-top: 400rpx;
        .touch{
            height: 113rpx;
            width: 190rpx;
            padding-right:40rpx;
            animation: moveTo 2s infinite;
        }
    }
}
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes moveTo {
    0% {left: 0px;}
    50% {left: 20px;}
    100% {left: 0px;}
}
</style>