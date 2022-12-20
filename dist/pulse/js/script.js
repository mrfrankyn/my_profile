// Использование библиотеки "slick"
$(document).ready(function() {
//     $('.carousel__inner').slick({
//         speed: 800,
//         adaptiveHeight: false,
//         prevArrow: `<button type="button" class="slick-prev"><img src="icons/left.svg"></button>`,
//         nextArrow: `<button type="button" class="slick-next"><img src="icons/right.svg"></button>`,
//         responsive: [
//           {
//             breakpoint: 992,
//             settings: {
//               arrows: false,
//               dots: true
//             }
//           }
//         ]
//       });
// 

  // Использование tiny-slider
  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page', 
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
    speed: 700,
    nav: true,
    navPosition: "bottom",
    controls: false
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

  // Использование jQuery для tabs
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.content').removeClass('content_active').eq($(this).index()).addClass('content_active');
  });

  function toggleSlide(classItem) {
    $(classItem).each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__descr-list').eq(i).toggleClass('catalog-item__descr-list_active');
    });
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // Modal
  // открытие модал консультации
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn(1000);
  });
  
  // $('.button_mini').on('click', function() {
  //   $('overlay, #order').fadeIn();
  // });
  // закрытие модал консультации
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut();
  });
  // открытие модал покупка c заменой текста
  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('.overlay, #order').fadeIn(1000);
    })
  });

  // валидация форм
  function validForms(form) {
    $(form).validate({
      validClass: "success",
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: {
          required: true
        },
        email: {
          required: true
        }
      },       
      messages: {
        name: {
          required: "Укажите ваше имя!",
          minlength: jQuery.validator.format("Имя должно содержать не менее {0} символов!")
        },
        phone: {
          required: "Укажите ваш номер телефона!"
        },
        email: {
          required: "Пожалуйста, укажите вашу почту!",
          email: "Неправильно указан адрес почты"
        }
      }  
    });
  };

  validForms('#consultation .feed_form');
  validForms('#order .feed_form');
  validForms('#consultation_form');

  // masked input
  $("input[name=phone]").mask("+7(999) 999-9999");

  // mail sending
  $('form').submit(function(e) {
    // Предотвращаем действие браузера по умолчанию 
    e.preventDefault();
    // Отправка данных на сервер
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      // Указываем данные, которые отправляем на сервер
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");


      $('form').trigger('reset');
    });
    return false; 
  });

// smooth scroll and page up

  $(window).scroll(function() {
    if($(this).scrollTop() > 1000) {
      $('.page_up').fadeIn();
    } else {
      $('.page_up').fadeOut();
    }
  });

  const anchorSelector = 'a[href^="#"]';
    $(anchorSelector).on('click', function (e) {
    e.preventDefault();
    const destination = $(this.hash);
    const scrollPosition
    = destination.offset().top;
    const animationDuration = 200;
    $('html, body').animate({
    scrollTop: scrollPosition
    }, animationDuration);
  });

// wow
  new WOW().init();
});