

/* scroll */

/* thirdSlider */
$(function(){
  $('.p-third__container__link__slider__area').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 20000, // スライドが流れる速度を設定
    cssEase: 'linear', // スライドの流れ方を等速に設定
    slidesToShow: 1, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    infinite: true,
    variableWidth: true,
    rtl: false,
  });
});
/* thirdHover */
$(function (){
  $(".hover01").hover(
    function (){
      $('.rotate01').addClass('third01');
      $('.scale01').addClass('bg01');
    },
    function (){
      $('.rotate01').removeClass('third01');
      $('.scale01').removeClass('bg01');
    }
  )
  $(".hover02").hover(
    function (){
      $('.rotate02').addClass('third02');
      $('.scale02').addClass('bg02');
    },
    function (){
      $('.rotate02').removeClass('third02');
      $('.scale02').removeClass('bg02');
    }
  )
  $(".hover03").hover(
    function (){
      $('.rotate03').addClass('third03');
      $('.scale03').addClass('bg03');
    },
    function (){
      $('.rotate03').removeClass('third03');
      $('.scale03').removeClass('bg03');
    }
  )
});
/* fourthSlider */
$(function (){
  $('.p-fourth__container__slider__ul').slick({
    autoplay: false, // 自動でスクロール 
    speed: 200, // スライドが流れる速度を設定
    cssEase: 'linear', // スライドの流れ方を等速に設定
    slidesToShow: 1, // 表示するスライドの数
    swipe: true, // 操作による切り替えはさせない
    arrows: true, // 矢印非表示
    prevArrow: '<div class="slide-arrow prev-arrow"><div class="slide-arrow__width arrowLeft"></div></div>',
    nextArrow: '<div class="slide-arrow next-arrow"><div class="slide-arrow__width arrowRight"></div></div>',
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    infinite: true,
    variableWidth: true,
  });
});
/* fourthHover */