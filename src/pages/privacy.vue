<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'privacy')
})

const type:string = "company"

</script>

<template>
  <main class="site-main privacy page">
    <div class="breadContainer">
      <div class="breadList tw-flex tw-justify-end">
        <NuxtLink :to="`/`">ホーム</NuxtLink>
        <span class="arr tw-block tw-px-2">&gt;</span>
        <span class="txt current">個人情報保護方針</span>
      </div>
    </div>
    <header class="ttlContainer tw-px-8 tw-relative">
      <div class="ttlContainer__inner u_mx">
        <h2 class="ttlContainer-ttl">
          <span class="txt tw-block">PRIVACY</span>
          <span class="txt tw-block">POLICY</span>
        </h2>
        <p class="ttlContainer-txt">個人情報保護方針</p>
      </div>
    </header>
    <article class="secContainer">
      <section class="sec sec1">
        <div class="sec__inner u_mx">
          <div class="sec-content">
            <p class="txt">エスピーグループ（以下「SPグループ」という。）は、個人情報の保護を重要な社会的責務と認識し、下記の個人情報保護方針を定め、個人情報の取扱い、管理、維持に努めて参ります。</p>
            <dl class="pvList">
              <dt>1． 個人情報の収集、利用・提供</dt>
              <dd>個人情報の収集、利用および提供にあたっては、個人情報保護の重要性を認識し、適切な取扱いを実施致します。</dd>
              <dt>2． 安全対策の実施</dt>
              <dd>当社は、個人情報について、厳格な管理を行うために最適な体制を維持し、合理的な安全管理措置を講じることにより、個人情報への不正アクセス、個人情報の紛失、破壊、改ざん、漏えい等に対する予防並びに是正策を徹底します。</dd>
              <dt>3． 継続的改善の実施</dt>
              <dd>当社は、個人情報保護のためのコンプライアンス・プログラムを策定し、実施、維持すると共に、これを定期的に見直し継続的な改善に努めます。</dd>
              <dt>4． 法令・規範の遵守</dt>
              <dd>当社は、個人情報の取扱いにあたり、個人情報の保護に関する法令、その他の規範を遵守致します。</dd>
            </dl>
            <p class="tw-text-right tw-mt-8 md:tw-mt-16">
              <span class="txt tw-text-left tw-inline-block">
              2008年5月1日<br>
              SPグループ<br>
              SPグループ代表　林 誠
            </span>
            </p>
            <h3>情報セキュリティ</h3>
            <dl class="scList">
              <dt>1. 情報セキュリティへの取組み</dt>
              <dd>当社は情報セキュリティの重要性を認識し、情報資産に対する適切な管理を行い、これを継続的に改善して参ります。</dd>
              <dt>2. 法令等の遵守（コンプライアンスの確立）</dt>
              <dd>当社は、情報セキュリティに関連する法令、確立された規格、その他の規範を遵守し、これらに準拠・適合した情報セキュリティの構築・確保に向け取組みます。</dd>
              <dt>3. 情報資産の保護</dt>
              <dd>当社は、情報資産の機密性、完全性及び可用性を確保するための適切な管理を行い、これらを脅かす全ての脅威から情報資産を保護することに努めます。</dd>
              <dt>4. 事故への対応</dt>
              <dd>当社は、情報セキュリティに関する事故の発生予防に努めるとともに、万一事故が発生した場合は、事故対応のみならず再発防止策を含む適切な対策を速やかに講じます。</dd>
            </dl>
          </div>
          <div class="btnContainer tw-text-right tw-mt-20 md:tw-mt-36">
            <NuxtLink :to="`/`" class="btnContainer-btn bl">ホームに戻る</NuxtLink>
          </div>
        </div>
      </section>
      <CompanyInfo :types="type" />
    </article>
  </main>
</template>

<style lang="scss" scoped>
.ttl{
  
}
.content{

}
</style>
