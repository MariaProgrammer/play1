// Плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// Burger

const burgerButton = document.querySelector(".nav__btn-burger");
const burgerMenu = document.querySelector(".burger");
const crossButton = document.querySelector(".burger__cross");
const cover = document.querySelector(".cover");

burgerButton.addEventListener("click", () => {
  burgerMenu.classList.add("active");
  cover.classList.add("active");
  
  
document.body.classList.add("stop-scroll");
});
crossButton.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  cover.classList.remove("active");
  
document.body.classList.remove("stop-scroll");
});
//footer Burger

const footerBurgerButton = document.querySelector(".footer__burger");
// const burgerMenu = document.querySelector(".burger");
// const crossButton = document.querySelector(".burger__cross");
// const cover = document.querySelector(".cover");

footerBurgerButton.addEventListener("click", () => {  
  burgerMenu.classList.add("active");
  cover.classList.add("active");
  
  
document.body.classList.add("stop-scroll");
});
crossButton.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  cover.classList.remove("active");
  
document.body.classList.remove("stop-scroll");
});

//swiper footer
const swiper4 = new Swiper(".swiper4", {
  slidesPerView: 'auto',
  // IOSEdgeSwipeDetection: true,
  //   onTouchStart: function()
  //   {
  //       return false;
  //   },
  //   scrollbarDraggable: true,
  //   scrollbar: '.swiper-scrollbar',
  //   scrollbarHide: true,
  
  spaceBetween: 3,  
  loop: false,
  // centeredSlides: true,
  // centerInsufficientSlides: true,
 
  navigation: {
  	nextEl: '.swiper-button-next4',
  	prevEl: '.swiper-button-prev4'
  },

  mousewhell: true,
  keyboard: true,
  
});
const swiper5 = new Swiper(".swiper5", {
  slidesPerView: 'auto',
  
  spaceBetween: 3,  
  loop: false,
  // centeredSlides: true,
  // centerInsufficientSlides: true,
 
  navigation: {
  	nextEl: '.swiper-button-next5',
  	prevEl: '.swiper-button-prev5'
  },

  mousewhell: true,
  keyboard: true,
  
});

//Подсвечивает текст в кнопках footer при наведении на кнопку

const buttonText = Array.from(document.querySelectorAll('.footer__bottom-button'))


buttonText.forEach(button => {
  button.addEventListener('mouseover', (e) => {
    let path = e.currentTarget.children[1]
    path.classList.add('active')
    
  })
})
buttonText.forEach(button => {
  button.addEventListener('mouseleave', (e) => {
    let path = e.currentTarget.children[1]
    path.classList.remove('active')    
  })
})
//развернуть footer
const footerBtn = document.querySelector('.footer__top-btn')
const footerTopContainer = document.querySelector('.footer__top-container')

footerBtn.addEventListener('click', () => {
  footerTopContainer.classList.toggle('active')
  if (footerTopContainer.classList.contains('active')) {
    footerBtn.textContent = 'Свернуть'
  } else {
    footerBtn.textContent = 'Развернуть'

  }
})

//аккордеон в footer
document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');
			const img = self.querySelector('.accordion__icon-img');

			self.classList.toggle('open');
			img.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
        
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
});









