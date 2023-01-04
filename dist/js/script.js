window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  hamburger = document.querySelector('.hamburger');
  menuClose = document.querySelector('.menu__close');
  buttonCheck = document.querySelector('#checkButton');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuClose.onclick = function() {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  };

  // скрипт для автоматичекого выставления процента
  const percentage = document.querySelectorAll('.skills__analytics_item_percentage'),
  sub_percentage = document.querySelectorAll('.skills__analytics_item_scale span');
  percentage.forEach( (item, i) => {
  sub_percentage[i].style.width = item.innerHTML;
  });
})

const hover_img1 = document.querySelector('#id1')
const hover_img2 = document.querySelector('#id2')
const hover_img3 = document.querySelector('#id3')
const hover_img4 = document.querySelector('#id4')
const hover_img5 = document.querySelector('#id5')
const hover_img6 = document.querySelector('#id6')

    overlay = document.querySelector('.overlay');
    // картинка 1
    hover_img1.addEventListener('mouseenter', () => {
    overlay.classList.toggle('overlay_active');
    });
    hover_img1.addEventListener('mouseout', () => {
    overlay.classList.toggle('overlay_active');            
    });
    // картинка 2
    hover_img2.addEventListener('mouseenter', () => {
    overlay.classList.toggle('overlay_active');
    });
    hover_img2.addEventListener('mouseout', () => {
    overlay.classList.toggle('overlay_active');            
    });
    // картинка 3
    hover_img3.addEventListener('mouseenter', () => {
    overlay.classList.toggle('overlay_active');
    });
    hover_img3.addEventListener('mouseout', () => {
    overlay.classList.toggle('overlay_active');            
    });
    // картинка 4
    hover_img4.addEventListener('mouseenter', () => {
    overlay.classList.toggle('overlay_active');
    });
    hover_img4.addEventListener('mouseout', () => {
    overlay.classList.toggle('overlay_active');            
    });
    // картинка 5
    hover_img5.addEventListener('mouseenter', () => {
    overlay.classList.toggle('overlay_active');
    });
    hover_img5.addEventListener('mouseout', () => {
    overlay.classList.toggle('overlay_active');            
    });
    // картинка 6
    hover_img6.addEventListener('mouseenter', () => {
    overlay.classList.toggle('overlay_active');
    });
    hover_img6.addEventListener('mouseout', () => {
    overlay.classList.toggle('overlay_active');            
    });

$(document).ready(function() {
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

// Валидация форм
      $('form').trigger('reset');
    });
    return false; 
  });

  $("form").validate({
    rules:{
      name:{
        required: true
      },
      email:{
        required: true
      },
      checkbox:{
        required: true,
        onclick: false
      }
    },
    messages:{
      name:{
        required: "Укажите имя"
      },
      email:{
        required: "Укажите почту",
        email: "Введите корректную почту"
      },
      checkbox:{
        required: "Подтвердите политику"
      }
    }
  });

  // // smooth scroll and page up
  $(window).scroll(function() {
    if($(this).scrollTop() > 1000) {
      $('.page_up').fadeIn();
    } else {
      $('.page_up').fadeOut();
    }
  });

  // const anchorSelector = 'a[href^="#"]';
  //   $(anchorSelector).on('click', function (e) {
  //   e.preventDefault();
  //   const destination = $(this.hash);
  //   const scrollPosition
  //   = destination.offset().top;
  //   const animationDuration = 200;
  //   $('html, body').animate({
  //   scrollTop: scrollPosition
  //   }, animationDuration);
  // });
  $(".wow").each(function() {
    var wowHeight = $(this).height();
    $(this).attr("data-wow-offset", wowHeight);
  });
}); 

// Get the button:
let mybutton = document.getElementById("page_up");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  document.querySelector(targetId).scrollntoView({
    behavior: "smooth",
    block: "start"
  });
}

new WOW().init();
const scroll = new SmoothScroll('a[href*="#"]');

