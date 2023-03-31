$(function menuClick(){
  /* menu */
  $('.l-header__container__right__modal__btn').on('click', function(){
    $('.l-header__container__right__modal__container').toggleClass('open');
    $('.c-menuBackground').toggleClass('activeMenu');
  });
});
  $(function menuItemsClick(){
  /* menuItems */
    $(".newBtn").click(function () {
      $(".l-header__container__right__modal__container").removeClass('open');
      $('.c-menuBackground').removeClass('activeMenu');
      $('.c-modal-signup').toggleClass('active');
      $('.c-modalBackground').toggleClass('activeModal');
    });
    $(".loginBtn").click(function () {
      $(".l-header__container__right__modal__container").removeClass('open');
      $('.c-menuBackground').removeClass('activeMenu');
      $('.c-modal-login').toggleClass('active'); 
      $('.c-modalBackground').toggleClass('activeModal');
    });
    $(".u-darkFlex").click(function () {
      $(".l-header__container__right__modal__container").removeClass('open');
      $('.c-menuBackground').removeClass('activeMenu');
    });
  });
    $(function menuBackgroundClick(){
  /* menuBackground */
    $('.c-menuBackground').on('click', function(){
      $(this).removeClass('activeMenu');
      $('.l-header__container__right__modal__container').removeClass('open');
      $('.c-modal').removeClass('active');
    });
  });
    $(function modalBackgroundClick(){
  /* modalBackground */
  $('.c-modalBackground').on('click', function(){
    $('.c-modal-signup').removeClass('active');
    $('.c-modal-login').removeClass('active');
    $(this).removeClass('activeModal');
  });
});
  $(function modalLoginClick(){
  /* modalLogin */
  $('.c-modal__content__items__login').on('click', function(){
    $('.c-modal').removeClass('active');
    $('.c-modal-login').toggleClass('active'); 
  });

});
  $(function modalSinupClick(){
  /* modalSignup */
  $('.c-modal__content__items__signup').on('click', function(){
    $('.c-modal').removeClass('active');
    $('.c-modal-signup').toggleClass('active');
  });
});