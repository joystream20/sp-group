<script setup lang="ts">
  import { Category } from '../types/blog'
  
  type Props = {
    cats: Category[]
    selectedCatId?: string,
    belongsTo?: string
  }

  const {cats, selectedCatId, belongsTo} = defineProps<Props>();

  const _cats = belongsTo == "topics" ? 'cats' : 'ncats'

  function getClass(catId: string){
    // console.log(catId, selectedCatId)
    if(catId == selectedCatId){
      return 'active'
    }else{
      return 'link'
    }
  }

  const mOver = (e) => {
    const _wrap = e.currentTarget.querySelector('.arcList-wrap')
    const _h = _wrap.querySelector('.arcList').offsetHeight;
    _wrap.style.maxHeight=_h+"px"
    // console.log(_h)
    // const _list = document.getElementById('arcList');
    // const _h = _list.offsetHeight;
    // _listWrap.style.maxHeight=_h+"px";
    
  }
  const mOut = (e) => {
    const _wrap = e.currentTarget.querySelector('.arcList-wrap')
    _wrap.style.maxHeight=0
  }


</script>

<template>
    <div class="catContainer tw-relative" @mouseover="mOver" @mouseleave="mOut">
      <p class="ttl u_ff4 u_col1 u_bgcol3 tw-px-8 tw-py-1 md:tw-text-xl tw-flex tw-justify-between tw-items-center"><span class="txt">CATEGORY</span><font-awesome-icon :icon="['fass', 'angle-down']" /></p>
      <div class="arcList-wrap tw-absolute tw-w-full u_bgcol3">
        <ul class="arcList tw-px-4 tw-py-4">
          <li v-for="cat in cats" :key="cat.id" class="arcList-item">
            <NuxtLink :to="`/${_cats}/${cat.id}/page/1?type=${belongsTo}`" :class="getClass(cat.id)">{{ cat.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
</template>

<style scoped lang="scss">
  .ttl{
    min-width:11em;
    svg{
      font-size:1.5em;
    }
  }
  .arcList{
    display: flex;
    flex-wrap: wrap;
    gap:.7em;
    &-wrap{
      max-height:0;
      overflow: hidden;
      transition:max-height .5s;
    }
    &-item{
      font-size:.875em;
      line-height:1;
      &:not(:last-child){
      }
      a{
        background: $col1;
        color:#fff;
        padding:.7em .5em;
        display: block;
      }
    }
  }


</style>
