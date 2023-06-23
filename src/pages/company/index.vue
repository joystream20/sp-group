<script setup lang="ts">
import { onMounted } from 'vue';
const route = useRoute()
const type:string = "company"
const info_type:string = "advantage"
const emit = defineEmits(['p_type'])

const _hash = route.hash

console.log(_hash)

onMounted(() => {
  emit('p_type', 'company')
})

const dtClick = (e) => {
  const _dt = <HTMLElement>e.currentTarget
  const _dd = <HTMLElement>e.currentTarget.nextElementSibling
  if(_dt.classList.contains('on')){
    _dt.classList.remove('on')
    _dd.style.maxHeight=""
  }else{
    _dt.classList.add('on')
    _dd.style.maxHeight = _dd.querySelector('.dd__inner').offsetHeight + "px"
    
  }
}

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
              <img src="@/assets/images/page/img_sec1_ttl_txt.png" alt="お客様と共に夢を現実にしていくSPグループ" width="563">
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
        <div class="btnContainer md:tw-py-44 tw-py-20 tw-px-8">
          <NuxtLink :to="`/company/philosophy`" class="btnContainer-btn btn-sc tw-text-def"><span class="txt">経営理念<font-awesome-icon :icon="['fas', 'angle-right']" /></span></NuxtLink>
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
      <section class="sec sec3 tw-mt-24">
        <div class="sec__inner">
          <header class="sec__header">
            <h2 class="sec__header-ttl tw-text-2xl md:tw-text-3xl tw-font-semibold u_col1 max-md:tw-px-16">SPグループ</h2>
          </header>
          <div class="sec__container tw-mt-12">
            <dl class="groupList">
              <div id="gp1" class="groupList-block">
                <dt  @click="dtClick">
                  <img src="@/assets/images/page/img_company_sec3_list_ttl_01.png" height="52" alt="SEVEN PEACE">
                  <h3 class="name max-md:tw-block tw-font-semibold mac-md:tw-mt-4 md:tw-px-8">株式会社セブンピース</h3>
                  <div class="tw-flex tw-items-center max-md:tw-mt-4 md:tw-flex-1">
                    <span class="content tw-text-sm">事業内容：遊技保管・管理、コンサルタント</span>
                    <font-awesome-icon :icon="['fass', 'angle-down']" />
                  </div>
                </dt>
                <dd>
                  <div class="dd__inner">
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
                  </div>
                </dd>
              </div>
              <div id="gp2" class="groupList-block">
                <dt  @click="dtClick">
                  <img src="@/assets/images/page/img_company_sec3_list_ttl_02.png" height="52" alt="SEVEN PEACE LOGISTIC">
                  <h3 class="name max-md:tw-block tw-font-semibold mac-md:tw-mt-4 md:tw-px-8">株式会社セブンピースロジスティック</h3>
                  <div class="tw-flex tw-items-center max-md:tw-mt-4 md:tw-flex-1">
                    <span class="content tw-text-sm">事業内容：遊技保管・管理、コンサルタント</span>
                    <font-awesome-icon :icon="['fass', 'angle-down']" />
                  </div>
                </dt>
                <dd>
                  <div class="dd__inner">
                    <dl class="groupInnerList">
                      <div class="groupInnerList-item">
                        <dt>設立</dt>
                        <dd>平成22年8月10日</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>資本金</dt>
                        <dd>1200万円</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>遊技機運送事業協同組合</dt>
                        <dd>組合員番号　No.061</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>決算</dt>
                        <dd>5月</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>代表取締役</dt>
                        <dd>林　将真</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>取締役</dt>
                        <dd>中村　俊之</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>主要取引銀行</dt>
                        <dd>横浜銀行</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>本社所在地</dt>
                        <dd>〒140-0012 東京都品川区勝島1-3-49　加瀬ビル116　7Ｆ<br>
                        TEL：03-5763-7772　　FAX：03-5763-7771</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>川崎営業所</dt>
                        <dd>〒210-0869 神奈川県川崎市川崎区東扇島19-2 ロジポート東扇島C棟2階-Ｇ<br>
                        TEL：044-281-2415　　FAX：044-281-2416</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>埼玉営業所</dt>
                        <dd>〒339-0073 埼玉県さいたま市岩槻区上野6−11−22<br>
                        TEL：048-793-1181　　FAX：048-793-1182</dd>
                      </div>
                    </dl>
                  </div>
                </dd>
              </div>
              <div id="gp3" class="groupList-block">
                <dt  @click="dtClick">
                  <img src="@/assets/images/page/img_company_sec3_list_ttl_03.png" height="52" alt="KOKO PLANNING">
                  <h3 class="name max-md:tw-block tw-font-semibold mac-md:tw-mt-4 md:tw-px-8">株式会社ココプランニング</h3>
                  <div class="tw-flex tw-items-center max-md:tw-mt-4 md:tw-flex-1">
                    <span class="content tw-text-sm">東京都経営革新計画承認企業<br>
                    事業内容：新台・中古台販売、遊技機設置</span>
                    <font-awesome-icon :icon="['fass', 'angle-down']" />
                  </div>
                </dt>
                <dd>
                  <div class="dd__inner">
                    <dl class="groupInnerList">
                      <div class="groupInnerList-item">
                        <dt>設立</dt>
                        <dd>平成14年11月25日</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>資本金</dt>
                        <dd>1300万円</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>古物商許可番号</dt>
                        <dd>東京都公安委員会　第306600305713号</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>遊技機販売業者登録証</dt>
                        <dd>第31-18015号</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>回胴式遊技機商業協同組合</dt>
                        <dd>組合員番号　T-292</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>東日本遊技機商業協同組合</dt>
                        <dd>組合員番号 　第31-18015号</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>決算</dt>
                        <dd>9月</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>代表取締役</dt>
                        <dd>榎本　雅充</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>取締役</dt>
                        <dd>藤田　裕</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>取締役</dt>
                        <dd>城﨑　克己</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>主要取引銀行</dt>
                        <dd>横浜銀行・みずほ銀行</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>本社所在地</dt>
                        <dd>〒140-0012 東京都品川区勝島1-3-49　加瀬ビル116　7Ｆ<br>
                        TEL：03-5763-7775　　FAX：03-5763-7771</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>上野営業所</dt>
                        <dd>〒110-0015　東京都台東区東上野3-16-1　佐野ビル1F、2F<br>
                        TEL：03-3837-9555　　FAX：03-3837-9557</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>福岡営業所（株式会社ソリッド内）</dt>
                        <dd>〒818-0041 福岡県筑紫野市上古賀4-16-3　オフィスパレア筑紫野ⅡA-1<br>
                        TEL：092-555-2720　　FAX：092-555-2721</dd>
                      </div>
                    </dl>
                  </div>
                </dd>
              </div>
              <div class="groupList-block" id="gp4">
                <dt  @click="dtClick">
                  <img src="@/assets/images/page/img_company_sec3_list_ttl_04.png" height="52" alt="SOLID">
                  <h3 class="name max-md:tw-block tw-font-semibold mac-md:tw-mt-4 md:tw-px-8">株式会社ソリッド</h3>
                  <div class="tw-flex tw-items-center max-md:tw-mt-4 md:tw-flex-1">
                    <span class="content tw-text-sm">事業内容：新台・中古台販売、書類作成</span>
                    <font-awesome-icon :icon="['fass', 'angle-down']" />
                  </div>
                </dt>
                <dd>
                  <div class="dd__inner">
                    <dl class="groupInnerList">
                      <div class="groupInnerList-item">
                        <dt>設立</dt>
                        <dd>平成23年6月20日</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>資本金</dt>
                        <dd>300万円</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>古物商許可番号</dt>
                        <dd>福岡県公安委員会　第901131110080号</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>代表取締役</dt>
                        <dd>藤田　裕</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>取締役</dt>
                        <dd>榎本　雅充</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>主要取引銀行</dt>
                        <dd>西日本シティ銀行　　二日市支店</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>本社所在地</dt>
                        <dd>〒818-0041 福岡県筑紫野市上古賀4丁目16-3　オフィスパレア筑紫野ⅡＡ－１<br>
                        TEL：092-555-2720　　FAX：092-555-2721</dd>
                      </div>
                      <div class="groupInnerList-item">
                        <dt>上野オフィス</dt>
                        <dd>〒110-0015 東京都台東区東上野3-16-1　佐野ビル2F<br>
                        TEL：03-6806-0556　　FAX：03-6806-0557</dd>
                      </div>
                    </dl>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <section class="sec sec4">
        <div class="sec__inner u_mx">
          <NuxtLink :to="`/company/history`" class="sec__container md:tw-flex tw-flex-row-reverse">
            <div class="image">
              <img src="@/assets/images/page/img_company_sec4_1.jpg" width="498" alt="">
            </div>
            <div class="txtContainer md:tw-flex md:tw-flex-col">
              <h2 class="txtContainer-ttl tw-font-semibold tw-text-2xl">SPグループの歴史</h2>
                <p class="txtContainer-txt tw-mt-12 md:tw-mt-16 md:tw-flex-1 ">SPグループは、創業から着実に成長を遂げてきました。<br>
それは、お客様のニーズと信頼に応える足跡でもありました。</p>
              <div class="btnContainer tw-text-right">
                <span class="btnContainer-btn bl max-md:tw-mt-8"><span class="txt">詳しく見る</span></span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>
      <section class="sec sec5 tw-mt-24 md:tw-mt-52 u_px">
        <div class="sec__inner u_mx">
          <header class="sec__header">
            <h2 class="sec__header-ttl tw-text-2xl md:tw-text-3xl tw-font-semibold u_col1">提携会社</h2>
          </header>
          <div class="sec__container tw-mt-12">
            <dl class="tieupList md:tw-flex md:tw-flex-wrap">
              <div class="tieupList-item tw-mb-12">
                <dt class="tw-font-semibold tw-text-2xl">アクティブ株式会社</dt>
                <dd>
                  事業内容：コンピュータ利用に関するコンサルタント、ソフトウェア開発、ソフトウェア販売、機器販売<br>
                  〒064-0808 北海道札幌市中央区南8条西4丁目422番地5　グランドパークビル<br>
                  TEL：011-520-6388　　FAX：011-520-6389<br>
                  URL： http://www.actweb.co.jp/
                </dd>
              </div>
              <div class="tieupList-item tw-mb-12">
                <dt class="tw-font-semibold tw-text-2xl">株式会社丸和</dt>
                <dd>
                  事業内容：全国遊技機配送<br>
                  〒353-0001 埼玉県志木市上宗岡2-8-63<br>
                  TEL：048-475-1808　　FAX：048-476-5564
                </dd>
              </div>
              <div class="tieupList-item tw-mb-12">
                <dt class="tw-font-semibold tw-text-2xl">株式会社エス・ピー・ジー</dt>
                <dd>
                  事業内容：アミューズメント業界向け、各種プロモーションツールの企画・デザイン・制作<br>
                  〒105-0013 東京都港区浜松町2-10-10　第二小林ビル５Ｆ<br>
                  TEL：03-3434-5221　　FAX：03-3434-5223
                </dd>
              </div>
              <div class="tieupList-item tw-mb-12">
                <dt class="tw-font-semibold tw-text-2xl">ラッキー運輸株式会社</dt>
                <dd>事業内容：全国遊技機配送<br>
                  〒003-0871　北海道札幌市白石区米里1条2-6-6
                </dd>
              </div>
              <div class="tieupList-item tw-mb-12">
                <dt class="tw-font-semibold tw-text-2xl">株式会社光運送</dt>
                <dd>
                  〒702-8055　岡山県岡山市中区江崎277-1<br>
                  事業内容：全国遊技機配送
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <CompanyInfo :types="info_type" />
    </article>
    
  </main>
</template>
