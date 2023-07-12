<script setup lang="ts">

type Props = {
  types:string
}
const {types} = defineProps<Props>()
const cl = ref<string>( types + " compInfoContainer tw-mt-24 md:tw-mt-48" )
let ttl = ref<string>("")

// switch(types){
//   case "company":
//     ttl = "COMPANY<br>INFO"
//   break;
//   case "advantage":
//     ttl = "OUR<br>ADVANTAGE"
//   break;
// }

</script>

<template>
  <div :class="cl">
    <template v-if="types === 'company'">
      <NuxtLink :to="`/company`">
        <div class="comInfoContainer__inner u_mx md:tw-flex md:tw-flex-row-reverse">
          <div class="ttlInfoContainer tw-relative">
            <div class="image"></div>
            <p class="ttlInfoContainer-ttl tw-absolute">COMPANY<br>INFO</p>
          </div>
          <div class="txtInfoContainer">
            <p class="txtInfoContainer-txt">企業情報<SvgAngleRight /></p>
          </div>
        </div>
      </NuxtLink>
    </template>
    <template v-else-if="types === 'advantage'">
      <NuxtLink :to="`/about`">
        <div class="comInfoContainer__inner u_mx md:tw-flex md:tw-flex-row-reverse">
          <div class="ttlInfoContainer tw-relative">
            <div class="image"></div>
            <p class="ttlInfoContainer-ttl tw-absolute">OUR<br>ADVANTAGE</p>
          </div>
          <div class="txtInfoContainer">
            <p class="txtInfoContainer-txt">SPグループの強み<SvgAngleRight /></p>
          </div>
        </div>
      </NuxtLink>
    </template>
  </div>
</template>

<style scoped lang="scss">

.compInfoContainer{
  background: rgb(10,55,110);
background: linear-gradient(90deg, rgba(10,55,110,1) 0%, rgba(10,55,110,1) 31%, rgba(207,217,230,1) 100%);

  >a{
    display: block;
    padding-top:clamp(85px, #{pvv(140, 896)}, 140px);
    padding-bottom:clamp(20px, #{pvv(50, 1100)}, 30px);
    &:hover{
      opacity:1;
      .ttlInfoContainer{
        .image{
         &:before{
          transform:scale(1.1);
         }
        }
      }
    }
  }
    &.company{
      .ttlInfoContainer{
        .image{
         &:before{
          background:url(../assets/images/page/img_footer_link_1.jpg) no-repeat;
          background-size:cover;
         }
        }
      }
    }
    &.advantage{
      .ttlInfoContainer{
        .image{
          &:before{
            background:url(../assets/images/page/img_footer_link_2.jpg) no-repeat;
            background-size:cover;
          }
        }
      }
    }
  }

  .ttlInfoContainer{
    width: 90%;
    margin-left:10%;
    .image{
      // aspect-ratio: 1 / .4;
      overflow: hidden;
      &:before{
      content:"";
      display: block;
      aspect-ratio: 1 / .4;
      transition:transform .5s;
    }
    }
   
    &-ttl{
      top:0;
      left:0;
      color:#fff;
      font-family: $font4;
      font-size:clamp(37px, #{pvv(86, 1100)}, 86px);
      transform:translate(1em, -80%);
      line-height: .9;
    }
  }

  .txtInfoContainer{
    text-align: right;
    padding:2em 2em 0;
    &-txt{
      color:#fff;
      display:inline-flex;
      align-items: center;
    }
    svg{
      width:35px;
      height:35px;
      background:#fff;
      border-radius: 50%;
      color:$col1;
      fill:$col1;
      padding:.5em;
      margin-left:1em;
      border:1px solid $col1;
    }
  }

@media screen and (min-width: 896px) {
  .compInfoContainer{
    >a{
      padding-top:85px;
    }
  }
  .ttlInfoContainer{
    width:57%;
    margin-left:0;
    &-ttl{
      transform:translate(-2em, -30%);
    }
  }
  .txtInfoContainer{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding:0;
    &-txt{
      transform:translate(clamp(-172px, #{pvv(-74, 896)}, -74px),-100%);
    }
    svg{
      width:48px;
      height:48px;
      padding:.5em;
    }
  }
}
</style>
