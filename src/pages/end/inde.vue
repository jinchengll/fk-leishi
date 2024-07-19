<template>
    <view class="container">
        <image class="star" src="../../assets/image/star-plus.png" />
        <view class="number">
            <up-count-to :startVal="0" :endVal="100" :duration="5000" color="#fff" fontSize="24"></up-count-to>
            <text>%...</text>
        </view>
        <view class="btn" @click="btnClick">
            <image class="btn-img" src="../../assets/image/home-btn.png" />
        </view>
    </view>
</template>
<script setup lang="ts">
const btnClick = () => {
    uni.navigateTo({
        url: '/pages/index/index'
    })
}
</script>
<style scoped lang="scss">
.container{
    display: flex;
    background-image: url('../../assets/image/end-bg.png');
    background-size: 100% 100%;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
}
.star{
    width:750rpx;
    height:750rpx;
    margin-top: 200rpx;
    animation: blink 3s infinite;
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
        animation: expandBox 5s ease forwards;
    }
}
@keyframes expandBox {
    0% {
    width: 0;
    height: 0;
  }
  50% {
    width: 0;
    height: 0;
  }
  100% {
    width: 406rpx;
    height: 106rpx;
  }
}
@keyframes blink {
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
</style>