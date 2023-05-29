<template>
  <footer class="site-footer tw-px-8">
    <div class="site-footer__inner u_mx">
      <div class="fnavContainer">
        <ul class="fnav">
          <li class="fnav-item"><NuxtLink :to="`/`">ホーム</NuxtLink></li>
          <li class="fnav-item"><NuxtLink :to="`/about`">SPグループの強み</NuxtLink></li>
          <li class="fnav-item"><NuxtLink :to="`/service`">事業案内</NuxtLink></li>
          <li class="fnav-item"><NuxtLink :to="`/news`">ニュース</NuxtLink></li>
          <li class="fnav-item"><NuxtLink :to="`/topics`">トピックス</NuxtLink></li>
          <li class="fnav-item"><NuxtLink :to="`/casestudies`">事例</NuxtLink></li>
          <li class="fnav-item"><NuxtLink :to="`/`">採用情報</NuxtLink></li>
          <li class="fnav-item"><NuxtLink :to="`/company`">企業情報</NuxtLink></li>
          <li class="fnav-item"><NuxtLink :to="`/privacy`">個人情報保護方針</NuxtLink></li>
        </ul>
      </div>
      <div class="site-footer__infoContainer md:tw-flex md:tw-items-end tw-text-smm md:tw-text-sm md:tw-pb-8 tw-mt-28">
        <div class="box logo tw-text-center">
          <img src="@/assets/images/img_logo_f.png" alt="SP Group" width="101">
        </div>
        <div class="box txtContainer md:tw-flex-1 md:tw-pl-8">
          <h2 class="ttl">SPグループ</h2>
          <div class="txtContainner__inner md:tw-flex md:tw-justify-between">
            <p>〒140-0012<br>東京都品川区勝島1-3-49<br class="u_sp">加瀬ビル116 7Ｆ</p>
            <p>TEL: 03-5763-7770<br>FAX: 03-5763-7771</p>
            <p>株式会社 セブンピース<br>株式会社 セブンピースロジスティック</p>
            <p>株式会社 ココ プランニング<br>株式会社 ソリッド</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
