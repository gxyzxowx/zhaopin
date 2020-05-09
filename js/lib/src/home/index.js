
window.onload=function(){
    //轮播图代码
   
   var swiperr = new Swiper('.swiper-container', {
     spaceBetween: 9,
     centeredSlides: true,
     autoplay: {
       delay: 4000,
       disableOnInteraction: false,
       color:"red",
     },
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     
   });
  }