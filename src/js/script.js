window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger');
    menuClose = document.querySelector('.menu__close');

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

    // работает
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
     
