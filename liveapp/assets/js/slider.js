$(function() {
  $('.p-main__right__slider__area__container').slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    preArrow:'<div class="slick-prev"></div>',
    nextArrow:'<div class="slick-next"></div>',
    autoplay: true,
    infinity: true,
    speed: 300,
    variableWidth:true,
  });
  $('.p-main__right__capture__container__area__ul').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    preArrow:'<div class="slick-prev"></div>',
    nextArrow:'<div class="slick-next"></div>',
    infinite: false,
    speed: 300,
    variableWidth:true,
  });
  $('.p-main__right__event__container__area__ul').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: false,
    speed: 300,
    variableWidth:true,
});
});
