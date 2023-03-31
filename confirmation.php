<!DOCTYPE html>
<html la="jp">
<head>
  <meta charSet="utf-8">
  <title>ポートフォリオ-WORKS_DENRYOKUGAISHA(B)</title>
  <meta name="description" content="Generated by create next app">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="max-image-preview:large">

  <meta property="og:title" content="ポートフォリオ-WORKS_DENRYOKUGAISHA(B)">
  <meta property="og:description" content="WORKS">
  <meta property="og:type" content="article">
  <!-- <meta property="og:url" content="ページの URL"> -->
  <meta property="og:image" content="assets/images/works_list/denryoku_01.png">
  <meta property="og:site_name" content="ポートフォリオ">
  <meta property="og:locale" content="ja_JP">
  <link rel="stylesheet" href="assets/sass/app.css">
</head>
<body>
  <header>
    <div class="l-header" id="l-header">
      <div class="l-header__container">
        <div class="l-header__container__logo u-logo">
          <a href="index.html">
            <p class="l-header__container__logo__top">MIYAZAKI HITOKI</p>
            <p class="l-header__container__logo__bottom">MY PORTFOLIO</p>
          </a>
        </div>
        <ul class="l-header__container__list u-list">
          <li class="l-header__container__list__items"><a href="index.html#p-main__profile">PROFILE</a></li>
          <li class="l-header__container__list__items"><a href="index.html#p-main__skills">SKILLS</a></li>
          <li class="l-header__container__list__items"><a href="index.html#p-main__works">WORKS</a></li>
          <li class="l-header__container__list__items l-header__container__list__items__button u-navbtn"><a href="#c-contact">CONTACT</a></li>
        </ul>
        <div class="l-header__container__menu">
          <div class="l-header__container__menu__btn">メニュー</div>
          <div class="l-header__container__menu__container">
            <ul class="l-header__container__menu__container__list">
              <li class="l-header__container__menu__container__list__items"><a href="index.html#p-main__profile">PROFILE</a></li>
              <li class="l-header__container__menu__container__list__items"><a href="index.html#p-main__skills">SKILLS</a></li>
              <li class="l-header__container__menu__container__list__items"><a href="index.html#p-main__works">WORKS</a></li>
              <li class="l-header__container__menu__container__list__items"><a href="#c-contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main>
    <div class="p-works_btob" id="p-works_btob">

      <!-- TOP-SECTION -->
      <section class="c-top" id="c-top">
        <div class="c-top__container">
          <div class="c-top__container__txtarea">
            <div class="c-top__container__txtarea__txt">
              <h1>お問い合わせ内容</h1>
              <p>送信確認</p>
            </div>
          </div>
        </div>
      </section>
      <!-- TOP-SECTION-END -->
      <!-- CONTACT-SECTION -->
      <section class="c-contact" id="c-contact">
        <div class="c-contact__container">
          <div class="c-contact__container__h2">
            <h2>CONTACT</h2>
          </div>
          <form action="mailto.php" method="post">
            <div class="c-contact__container__form__name">
              <div class="c-contact__container__form__name__title">お名前</div>
              <?php echo $_POST["name"]; ?>
            </div>
            <div class="c-contact__container__form__email">
              <div class="c-contact__container__form__email__title">メールアドレス</div>
              <?php echo $_POST["email"]; ?>
            </div>
            <div class="c-contact__container__form__detail">
              <div class="c-contact__container__form__detail__title">お問い合わせ内容</div>
              <?php echo $_POST["detail"]; ?>
            </div>
            <div class="c-contact__container__form__button">
              w<input type="submit" value="送信" />
            </div>
          </form>
        </div>
      </section>
      <!-- CONTACT-SECTION-END -->
    </div>
  </main>
  <footer>
    <div class="l-footer" id="l-footer">
      <p><span>&copy;</span>2022 Miyazaki Hitoki All rights reserved.</p>
    </div>
  </footer>
  <script src="assets/js/jquery-3.6.1.min.js"></script>
  <script src="assets/js/menu.js"></script>
</body>
</html>