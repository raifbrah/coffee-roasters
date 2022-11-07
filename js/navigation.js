window.addEventListener('scroll', () => {
  const navigation = document.querySelector('.navigation')

  if (pageYOffset > 10) {
    navigation.style.padding = '18px 40px'
    navigation.style.backgroundColor = '#000'
    if (navigation.style.willChange !== "auto") {
      navigation.style.willChange = "auto"
    }
  } else {
    navigation.style.padding = '48px 40px'
    navigation.style.backgroundColor = '#0000'
  }
});



/* === Scroll to selected section === */
const menu__btn = document.querySelectorAll('.menu__btn')

const header__btn = document.querySelector('.header__btn')

const header = document.querySelector('#header')
const whyUs = document.querySelector('#why-us')
const ourMenu = document.querySelector('#our-menu')
const testimonials = document.querySelector('#testimonials')
const news = document.querySelector('#news')
const ourLocation = document.querySelector('#our-location')
const newsletter = document.querySelector('#newsletter')


const sections = [header, whyUs, ourMenu, testimonials, news, ourLocation, newsletter]

for (let i=0; i<menu__btn.length; i++) {
  menu__btn[i].onclick = () => {
    sections[i].scrollIntoView({behavior: "smooth"});

    if (window.innerWidth <= 1200) {
      const menu__burgerBtn = document.querySelector('.menu__burger-btn')
      menu__burgerBtn.click()
    }
  }
}

header__btn.onclick = () => ourMenu.scrollIntoView({behavior: "smooth"});
