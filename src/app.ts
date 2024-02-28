import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
document.addEventListener('DOMContentLoaded', () => {
  let currentSlide: number = 0;

  const pagination: HTMLElement = document.querySelector('.pagination')!;
  const slides: HTMLElement = document.querySelector('.slides')!;
  const totalSlides: number = document.querySelectorAll('.slideContainer').length;

  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  for (let i = 0; i < totalSlides; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.setAttribute('data-slide', `${i}`);
    pagination.appendChild(bar);
  }

  const selectBar = (selectedBar: Element) => {
    bars.forEach(bar => {
      bar.classList.remove('selectedBar');
    })
    selectedBar.classList.add('selectedBar');
  }

  const bars = document.querySelectorAll('.bar');
  bars[0].classList.add('selectedBar');
  bars.forEach(bar => {
    bar.addEventListener('click', () => {
      const slideIndex = bar.getAttribute('data-slide')!;
      selectBar(bar)
      showSlide(parseInt(slideIndex));
    });
  });

  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => changeSlide(-1));
    nextButton.addEventListener('click', () => changeSlide(1));
  }


  function changeSlide(n: number): void {
    showSlide(currentSlide += n);
  }

  function showSlide(n: number): void {

    if (n >= totalSlides) {
      currentSlide = 0;
    } else if (n < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = n;
    }
    selectBar(bars[currentSlide])
    const slideElement: HTMLElement = document.querySelector('.slideContainer')!
    const slideWidth: number = slideElement.offsetWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

});