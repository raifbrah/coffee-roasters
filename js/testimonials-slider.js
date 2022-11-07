const testimonialsSlider = document.querySelector('.testimonials-slider')
const testimonialsSlider__radio = document.querySelectorAll('.testimonials-slider__radio')
const testimonialsSliderSwitch = document.querySelectorAll('.testimonials-slider__switch')


testimonialsSlider.addEventListener('scroll', () => {
  let scroll = testimonialsSlider.scrollLeft
  const testimonialsSlider__slide = document.querySelector('.testimonials-slider__slide')
  
  if (scroll < testimonialsSlider__slide.offsetWidth / 2) {
    testimonialsSlider__radio[0].checked = true
  } else if (scroll >= testimonialsSlider__slide.offsetWidth / 2 && scroll < testimonialsSlider__slide.offsetWidth / 2 + testimonialsSlider__slide.offsetWidth) {
    testimonialsSlider__radio[1].checked = true
  } else {
    testimonialsSlider__radio[2].checked = true
  }
})


for (let i=0; i<testimonialsSliderSwitch.length; i++) {
  testimonialsSliderSwitch[i].onclick = () => {
    const testimonialsSlider__slide = document.querySelector('.testimonials-slider__slide')
    testimonialsSlider.scrollLeft = testimonialsSlider__slide.offsetWidth * i
  }
}