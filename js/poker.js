const swiper6 = new Swiper(".swiper6", {
  slidesPerView: 4,  
  spaceBetween: 20,  
  loop: false,
  slidesPerGroup: 1,
  // centeredSlides: true,
  centerInsufficientSlides: true,
 
  navigation: {
  	nextEl: '.swiper-button-next6',
  	prevEl: '.swiper-button-prev6'
  },

  mousewhell: true,
  keyboard: true,
  
});