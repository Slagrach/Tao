$(document).ready(function () {
  // слайдер на детальной странице
  $(".detail-page__slider").on(`init reInit`, function (event, slick) {
    $(".detail-page__dots").text(1 + " / " + slick.slideCount);
  });
  $(".detail-page__slider").on(
    `afterChange`,
    function (event, slick, currentSlide, nextSlide) {
      $(".detail-page__dots").text(currentSlide + 1 + " / " + slick.slideCount);
    }
  );
  $(".detail-page__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    dotsClass: ".detail-page__dots",
  });

  // переключение меню
  $(".header-bottom__link").click(function (e) {
    $(".header-bottom__link").removeClass("active");
    $(this).toggleClass("active");
    $(".main__content").removeClass("active");
    $(".main__content")
      .filter('[id="' + $(this).data("btn") + '"]')
      .toggleClass("active");
  });

  // переключение кнопок в подвале
  $(".footer__link").click(function () {
    $(".footer__link").removeClass("active");
    $(this).toggleClass("active");
  });

  // кнопки плюс минус
  $(document).on("click", ".minus", function () {
    var parent = $(this).closest(".add-basket__count-el");
    var item = parent.find(".add-basket__count-number");
    if (item.val() >= 1) {
      item.val(parseInt(item.val()) - 1);
    }
  });

  $(document).on("click", ".plus", function () {
    var parent = $(this).closest(".add-basket__count-el");
    var item = parent.find(".add-basket__count-number");
    item.val(parseInt(item.val()) + 1);
  });

  // левое меню
  $(".category__btn").click(function () {
    $(".category__btn").removeClass("active");
    $(this).toggleClass("active");

    $(".category__content").removeClass("active");
    $(".category__content")
      .filter('[id="' + $(this).data("btn") + '"]')
      .toggleClass("active");
  });

  // вызов модального окна добавление в корзину
  $(".add-basket__popup").click(function () {
    $(".add-basket").css("bottom", "-100%");
  });

  $("input[name='size']").change(function () {
    $(".add-basket__tab-content").removeClass("active");
    $(".add-basket__tab-content")
      .filter('[id="' + $(this).data("btn") + '"]')
      .toggleClass("active");
  });

  $(".header-bottom-recall__item").click(function () {
    $(".header-bottom-recall__item").removeClass("active");
    $(this).toggleClass("active");
  });

  $(".auth__else").click(function () {
    $(".auth-fade__popup").addClass("show");
    $('body').addClass('hide');
  });

  $(".auth__popup").click(function () {
    $(".auth-fade__popup").removeClass("show");
    $('body').removeClass('hide');
  });

  $("#all").click(function () {
    if ($(this).is(":checked")) {
      $(".basket-page__card input:checkbox").prop("checked", true);
    } else {
      $(".basket-page__card input:checkbox").prop("checked", false);
    }
  });
  $("#footer-check").click(function () {
    if ($(this).is(":checked")) {
      $(".basket-page__card input:checkbox").prop("checked", true);
    } else {
      $(".basket-page__card input:checkbox").prop("checked", false);
    }
  });
});
