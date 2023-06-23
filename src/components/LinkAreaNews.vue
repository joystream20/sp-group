
<template>
  <div class="linkContainer md:tw-flex tw-mt-24 md:tw-mt-56 tw-pb-8">
    <div class="block">
      <NuxtLink :to="`/company`" class="tw-relative">
        <img src="@/assets/images/page/img_btn_f_1_1.jpg" alt="">
        <div class="txt">企業情報<font-awesome-icon :icon="['fas', 'angle-right']" /></div>
      </NuxtLink>
    </div>
    <div class="block">
      <NuxtLink :to="`/about`" class="tw-relative">
        <img src="@/assets/images/page/img_btn_f_1_2.jpg" alt="">
        <div class="txt">SPグループの強み<font-awesome-icon :icon="['fas', 'angle-right']" /></div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.block{
  margin-bottom:10px;
  a{
    display: block;
    overflow: hidden;
    img{
      transition:transform .5s ;
    }
    &:hover{
      img{
        transform:scale(1.1);
      }
    }
  }
  .txt{
      position:absolute;
      left:.7em;
      bottom:.7em;
      display: block;
      background: #fff;
      color:$col1;
      font-weight: 600;
      padding:.5em .7em;
      line-height: 1;
      width:50%;
      max-width:300px;
      display: flex;
      align-items: center;
      svg{
        font-size:1.1em;
        margin-left:auto;
      }
    }
}
@media screen and (min-width: 896px) {
  .linkContainer{
    gap:10px;
  }
  .block{
    width:calc(50% - 5px);
    .txt{
      font-size: 1.125em;
      min-width:40%;
    }
  }
}
</style>
