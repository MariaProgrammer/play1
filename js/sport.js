//изменение картинки и цвета шрифта по наведению на карточку
const bannerCover = document.querySelector('.bonus__banner-right-cover')
const banner = document.querySelector('.bonus__banner')
const bannerTitle = document.querySelector('.bonus__banner-title')

banner.addEventListener('mouseover', () => {
  bannerCover.style.transform = 'scale(1.2)'
  bannerTitle.style.color = '#2ecc71'

})
banner.addEventListener('mouseleave', () => {
  bannerCover.style.transform = 'scale(1)'
  bannerTitle.style.color = '#000'

})

//изменение карточки по наведению
const cards = Array.from(document.querySelectorAll('.bonus__card'))
console.log(cards);

// cards.foreach(card => {
//   card.addEventListener('mouseover', (e) => {
//     let currentCard = e.currentTarget
//     console.log(currentCard)
//   })

// })
cards.forEach(card => {
  card.addEventListener('mouseover', (e) => {
    let img = e.currentTarget.children[0].children[0].children[0]
    let text = e.currentTarget.children[1].children[1]    
    img.style.transform = 'scale(1.2)';
   
    text.style.color = '#2ecc71';
  })
})
cards.forEach(card => {
  card.addEventListener('mouseleave', (e) => {
    let img = e.currentTarget.children[0].children[0].children[0]
    let text = e.currentTarget.children[1].children[1]
    img.style.transform = 'scale(1)';
    
    text.style.color = '#000';
  })
})