const swiper6 = new Swiper(".swiper6", {
  slidesPerView: 'auto',  
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

//изменение цвета шрифта по наведению

const bottomCards = Array.from(document.querySelectorAll('.news__slide'))

bottomCards.forEach(card => {
  card.addEventListener('mouseover', (e) => {
    let currentCard = e.currentTarget
    let currentText = currentCard.childNodes[3].childNodes[1]
    currentText.style.color = '#2ecc71'

  })
})
bottomCards.forEach(card => {
  card.addEventListener('mouseleave', (e) => {
    let currentCard = e.currentTarget
    let currentText = currentCard.childNodes[3].childNodes[1]
    currentText.style.color = '#000000'

  })
})
