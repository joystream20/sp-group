<script setup lang="ts">
import { onMounted } from 'vue';
const type:string = "company"

const emit = defineEmits(['p_type'])

onMounted(() => {
  emit('p_type', 'company')
})
</script>
<template>
  <main class="site-main company page">
    <div class="breadContainer">
      <div class="breadList tw-flex tw-justify-end">
        <NuxtLink :to="`/`">ホーム</NuxtLink>
        <span class="arr tw-block tw-px-2">&gt;</span>
        <span class="txt current">企業情報</span>
      </div>
    </div>
    <header class="ttlContainer tw-px-8 tw-relative">
      <div class="ttlContainer__inner u_mx">
        <h2 class="ttlContainer-ttl">
          <span class="txt tw-block">COMPANY</span>
          <span class="txt tw-block">INFO</span>
        </h2>
        <p class="ttlContainer-txt">企業情報</p>
      </div>
    </header>
    <article class="secContainer">
      <section class="sec sec1 angle">
        <div class="sec__inner">
          <header class="sec__header">
            <h2 class="sec__header-ttl">
              <img src="@/assets/images/page/img_sec1_ttl_txt.png" alt="お客様と共に夢を現実にしていくSPグループ" width="767">
            </h2>
          </header>
          <div class="sec__container">
            <div class="image tw-pt-8 md:tw-pt-0">
              <img src="@/assets/images/page/img_company_sec1.jpg" alt="SPグループ代表 林　誠">
            </div>
            <div class="txtContainer md:tw-flex md:tw-flex-row-reverse md:tw-items-end">
              <div class="txtContainer__inner">
                <h3 class="txtContainer-ttl">SPグループは、2007年にスペシャルパートナーとして遊技機業界に携わる全ての業務に対してのコンサルタントとしてスタートしました。</h3>
                <p class="txtContainer-txt">以来、多様化した時代のニーズに柔軟に対応するため、企業組織を形成し、様々な業種の物流サービスや販売サービスなどにも力を入れ、高品質のサービスを提供し、 お客様の「あったらいい」を叶えるため、独自のプロフェッショナルなサービスで、経営課題を解決するサポート体制を整えています。</p>
                <p class="txtContainer-txt">私たちは今後も、様々なお客様にご利用いただけるよう、多岐にわたる事業展開を目指し、たゆまぬ努力を積み重ね、お客様のスペシャルパートナーとして期待を超えるご満足をお客様に感じていただけるようこれからも努力してまいります。</p>
                <p class="txtContainer-txt">これからも、お客様との絆を大切に、常にお客様への感謝の心を忘れずに、役員、社員一同事業に邁進していく所存です。引き続き皆様のご支援ご鞭撻を賜りますようお願い申し上げます。</p>
                 <p class="txtContainer-txt tw-text-right tw-flex tw-items-end tw-justify-end">
                  <span class="txt tw-mr-8 tw-flex-1">SPグループ代表</span>
                  <img class="name" src="@/assets/images/page/img_name.png" width="127" alt="林 誠">
                 </p>
              </div>
              <p class="txtContainer__text">
                <span class="t1">LEAD</span>
                <span class="t2">YOUR DREAM</span>
                <span class="t3">TO THE REALITY</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="sec sec-btn">
      <div class="sec__inner u_mx">
        <div class="btnContainer tw-py-44">
          <NuxtLink :to="`/company/philosophy`" class="btnContainer-btn btn-sc"><span class="txt">経営理念</span></NuxtLink>
        </div>
      </div>
    </div>
    <section class="sec sec2">
        <div class="sec__inner">
          <header class="sec__header">
            <h2 class="sec__header-ttl">会社概要</h2>
          </header>
          <div class="sec__container">
            <dl class="aboutList">
              <div class="aboutList-item">
                <dt>グループ名</dt>
                <dd>SPグループ</dd>
              </div>
              <div class="aboutList-item">
                <dt>事業内容<br>（グループ企業含む）</dt>
                <dd>全国遊技機販売・代行・保管・管理<br>
                全国遊技機配送<br>
                清掃・設備・ビルメンテナンス<br>
                内外装・設備工事・保守管理<br>
                倉庫管理業務<br>
                全国の遊技場経営のサポート・コンサルタント<br>
                システム開発<br>
                中古台書類作成・インターネット通信販売</dd>
              </div>
              <div class="aboutList-item">
                <dt>従業員数</dt>
                <dd>50名（グループ企業含む）令和5年2月現在</dd>
              </div>
              <div class="aboutList-item">
                <dt>公認会計士</dt>
                <dd>出縄　真一</dd>
              </div>
              <div class="aboutList-item">
                <dt>労務士</dt>
                <dd>佐藤　出</dd>
              </div>
              <div class="aboutList-item">
                <dt>行政書士</dt>
                <dd>原田　勝哉</dd>
              </div>
              <div class="aboutList-item">
                <dt>顧問</dt>
                <dd>林　芳弘</dd>
              </div>
              <div class="aboutList-item">
                <dt>相談役</dt>
                <dd>玉木　康</dd>
              </div>
            </dl>
            <div class="image">
              <img src="@/assets/images/page/img_company_sec2_2.jpg" alt="">
            </div>
          </div>
        </div>
      </section>
      <section class="sec sec3">
        <div class="sec__inner">
          <header class="sec__header">
            <h2 class="sec__header-ttl">SPグループ</h2>
          </header>
          <div class="sec__container">
            <dl class="groupList">
              <dt>
                <img src="@/assets/images/page/img_company_sec3_list_ttl_01.png" height="52" alt="SEVEN PEACE">
                <span class="name">株式会社セブンピース</span>
                <span class="content">事業内容：遊技保管・管理、コンサルタント</span>
              </dt>
              <dd>
                <dl class="groupInnerList">
                  <div class="groupInnerList-item">
                    <dt>設立</dt>
                    <dd>平成19年6月27日</dd>
                  </div>
                  <div class="groupInnerList-item">
                    <dt>資本金</dt>
                    <dd>2200万円</dd>
                  </div>
                  <div class="groupInnerList-item">
                    <dt>倉庫業登録番号</dt>
                    <dd>登録第7390号</dd>
                  </div>
                  <div class="groupInnerList-item">
                    <dt>古物商許可番号</dt>
                    <dd>神奈川県公安委員会　第452660004392号</dd>
                  </div>
                  <div class="groupInnerList-item">
                    <dt>加盟社団法人</dt>
                    <dd>一般社団法人日本遊技関連事業協会・一般社団法人余暇環境整備推進協議会</dd>
                  </div>
                  <div class="groupInnerList-item">
                    <dt>決算</dt>
                    <dd>2月</dd>
                  </div>
                  <div class="groupInnerList-item">
                    <dt>代表取締役</dt>
                    <dd>林　誠</dd>
                  </div>
                  <div class="groupInnerList-item">
                    <dt>取締役</dt>
                    <dd>林　将真</dd>
                  </div>
                  <div class="groupInnerList-item">
                    <dt>取締役</dt>
                    <dd>榎本　雅充</dd>
                  </div>
                  <div class="groupInnerList-item">
                    <dt>取締役</dt>
                    <dd>藤田　裕</dd>
                  </div>
                  <div class="groupInnerList-item">
                    <dt>主要取引銀行</dt>
                    <dd>横浜銀行・みずほ銀行</dd>
                  </div>
                  <div class="groupInnerList-item">
                    <dt>本社所在地</dt>
                    <dd>〒140-0012 東京都品川区勝島1-3-49　加瀬ビル116　7Ｆ<br>
                    TEL：03-5763-7770　　FAX：03-5763-7771</dd>
                  </div>
                  <div class="groupInnerList-item">
                    <dt>湘南営業所</dt>
                    <dd>〒251-0047 神奈川県藤沢市辻堂1丁目5番10号<br>
                    TEL：0466-31-0322　　FAX：0466-31-0323</dd>
                  </div>
                  <div class="groupInnerList-item">
                    <dt>川崎営業所</dt>
                    <dd>〒210-0869 神奈川県川崎市川崎区東扇島19-2 ロジポート東扇島C棟2階-Ｇ<br>
                    TEL：044-281-2415　　FAX：044-281-2416</dd>
                  </div>
                  <div class="groupInnerList-item">
                    <dt>埼玉営業所</dt>
                    <dd>〒339-0073 埼玉県さいたま市岩槻区上野6-11-22<br>
                    TEL：048-793-1181　　FAX：048-793-1182</dd>
                  </div>
                </dl>
              </dd>
              <dt>
                <img src="@/assets/images/page/img_company_sec3_list_ttl_02.png" height="52" alt="SEVEN PEACE LOGISTIC">
              </dt>
              <dd></dd>
              <dt>
                <img src="@/assets/images/page/img_company_sec3_list_ttl_03.png" height="52" alt="KOKO PLANNING">
              </dt>
              <dd></dd>
              <dt>
                <img src="@/assets/images/page/img_company_sec3_list_ttl_04.png" height="52" alt="SOLID">
              </dt>
              <dd></dd>
            </dl>
          </div>
        </div>
      </section>
    </article>
    
  </main>
</template>
