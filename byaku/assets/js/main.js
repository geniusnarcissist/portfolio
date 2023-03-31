/* hamburger */
$(function (){
  /* ハンバーガークリック */
  $('.c-drawer_cont').on('click', function(){
    $(this).toggleClass('open');
    $('.c-drawer_nav').toggleClass('navOpen');
    $('.c-navBg').toggleClass('navBg');
  });
  /* バックグラウンドクリック */
  $('.c-navBg').on('click', function(){
    $('.c-drawer_cont').removeClass('open');
    $('.c-drawer_nav').removeClass('navOpen');
    $(this).removeClass('navBg');
  });
  /* ナビアイテムクリック */
  $('tap').on('click', function(){
    $('.c-drawer_cont').removeClass('open');
    $('.c-drawer_nav').removeClass('navOpen');
    $('.c-drawer_nav').removeClass('navBg');
  });
});
/* drawer_txt.hover */
$('.c-drawer_txt_link').hover(
  function() {
    $('.c-drawer_txt').addClass('txtBg');
  },
  function() {
    $('.c-drawer_txt').removeClass('txtBg');
  }
);
/* firstSlide */
$(function () {
  $(".c-slide_ul")
    // 1番目のスライドに"zoom"のclassを付ける
    .on("init", function () {
      $('.slick-slide[data-slick-index="0"]').addClass("zoom");
    })
    .slick({
      autoplay: true, //スライダーの自動再生
      fade: true, //スライドの切り替えをフェードに
      arrows: false, //前へ、次への矢印ボタンの有無
      speed: 10000, // スライド、フェードアニメーションの速度1000ミリ秒
      autoplaySpeed: 8000, //自動再生時のスライドの静止時間
      pauseOnFocus: false, //フォーカスで一時停止を無効
      pauseOnHover: false, //マウスホバーで一時停止を無効
      pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
    })
    .on({
      // スライドが移動する前に表示されているスライドに"animation"のclassをつける
      // "animation"のclassを消すための"remove"classを付ける
      beforeChange: function (event, slick, currentSlide, nextSlide) {
        $(".slick-slide", this).eq(nextSlide).addClass("zoom");
        $(".slick-slide", this).eq(currentSlide).addClass("remove");
      },
      // スライドが移動した後に表示していないスライダーはアニメーションのclassを外す
      afterChange: function () {
        $(".remove", this).removeClass(
          "remove zoom"
        );
      },
    });
});
/* secSlide */
$(function (){
  $('.c-secSlide').slick({
    autoplay: true, //スライダーの自動再生
    fade: true, //スライドの切り替えをフェードに
    arrows: false, //前へ、次への矢印ボタンの有無
    speed: 10000, // スライド、フェードアニメーションの速度1000ミリ秒
    autoplaySpeed: 1000, //自動再生時のスライドの静止時間
    pauseOnFocus: false, //フォーカスで一時停止を無効
    pauseOnHover: false, //マウスホバーで一時停止を無効
    pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
  });
});
/* loopSlide */
$(function(){
  $('.c-loopSlider_photo').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 10000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 1, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    variableWidth: true,
  });
});
$(function(){
  $('.c-loopSlider_txt').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 8000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 1, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    variableWidth: true,
  });
});
$(function(){
  $('.c-loopSlider_tit').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 10000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 1, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    variableWidth: true,
  });
});