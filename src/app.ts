import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Product, productsMen, productsAcessories, productsWomen } from './data'
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

  // const slides: HTMLElement = document.querySelector('.slides')!;

  // const changeSlideFuniture = (n:number):void => {

  // }

  const addProductsToFurniture = (id: string, productsArray: Product[]) => {
    const productsDiv = document.getElementById(id);

    if (productsDiv) {
      productsArray.forEach(produto => {
        const section = document.createElement('section');
        section.className = 'productFurniture';

        const img = document.createElement('img');
        img.src = produto.img;
        img.alt = produto.alt;

        const h5 = document.createElement('h5');
        h5.textContent = produto.tittle;

        const link = document.createElement('a');
        link.href = produto.departament;
        link.textContent = produto.departament;

        const pricesDiv = document.createElement('div');
        pricesDiv.className = 'prices';

        const realPrice = document.createElement('h5');
        realPrice.className = 'realPrice';
        realPrice.textContent = produto.realPrice;

        const discountPrice = document.createElement('h5');
        discountPrice.className = 'discountPrice';
        discountPrice.textContent = produto.discountPrice;

        pricesDiv.appendChild(realPrice);
        pricesDiv.appendChild(discountPrice);

        section.appendChild(img);
        section.appendChild(h5);
        section.appendChild(link);
        section.appendChild(pricesDiv);

        productsDiv.appendChild(section);
      });
    }
  }

  const furnitureClasses01: HTMLElement = document.getElementById('furnitureClasses01')!
  const furnitureClasses02: HTMLElement = document.getElementById('furnitureClasses02')!
  if (furnitureClasses01) {
    const furnitureLiElements = furnitureClasses01.getElementsByTagName('h6');
    let productsId = 'productsFurniture01'
    furnitureLiElements[0].classList.add('selectedFurniture')
    addProductsToFurniture(productsId, productsMen);

    furnitureClasses01.addEventListener('click', (event) => {
      const target = event.target as HTMLLIElement;
      let productsDiv = document.getElementById(productsId)!;

      if (target.innerText.toLowerCase().length < 15) {
        productsDiv.innerHTML = '';
        for (const h6 of furnitureLiElements) {
          h6.classList.remove('selectedFurniture');
        }
        target.classList.add('selectedFurniture')
      }

      switch (target.innerText.toLowerCase()) {
        case 'men':
          addProductsToFurniture(productsId, productsMen);
          break;
        case 'women':
          addProductsToFurniture(productsId, productsWomen);
          break;
        case 'acessories':
          addProductsToFurniture(productsId, productsAcessories);
          break;
        default:
          break;
      }
    });
  }
  if (furnitureClasses02) {
    const furnitureLiElements = furnitureClasses02.getElementsByTagName('h6');
    let productsId = 'productsFurniture02'
    furnitureLiElements[0].classList.add('selectedFurniture')
    addProductsToFurniture(productsId, productsMen);

    furnitureClasses02.addEventListener('click', (event) => {
      const target = event.target as HTMLLIElement;
      let productsDiv = document.getElementById(productsId)!;

      if (target.innerText.toLowerCase().length < 15) {
        productsDiv.innerHTML = '';
        for (const h6 of furnitureLiElements) {
          h6.classList.remove('selectedFurniture');
        }
        target.classList.add('selectedFurniture')
      }

      switch (target.innerText.toLowerCase()) {
        case 'men':
          addProductsToFurniture(productsId, productsMen);
          break;
        case 'women':
          addProductsToFurniture(productsId, productsWomen);
          break;
        case 'acessories':
          addProductsToFurniture(productsId, productsAcessories);
          break;
        default:
          break;
      }
    });
  }


  let currentPage01 = 0;
  let currentPage02 = 0;
  let itemsPerPage = 6;

  document.getElementById('arrowRightFurniture01')?.addEventListener('click', () => {
    showNextFurniture01();
  });

  document.getElementById('arrowLeftFurniture01')?.addEventListener('click', () => {
    showPrevFurniture01();
  });

  document.getElementById('arrowRightFurniture02')?.addEventListener('click', () => {
    showNextFurniture02();
  });

  document.getElementById('arrowLeftFurniture02')?.addEventListener('click', () => {
    showPrevFurniture02();
  });


  function showNextFurniture01() {
    let productsDiv = document.getElementById('productsFurniture01')!;
    let totalItems = productsDiv.children.length;
    currentPage01 = (currentPage01 + 1) % Math.ceil(totalItems / itemsPerPage);
    if (totalItems > itemsPerPage) {
      updateCarouselFurniture(1, currentPage01);
    }
  }

  function showPrevFurniture01() {
    let productsDiv = document.getElementById('productsFurniture01')!;
    let totalItems = productsDiv.children.length;
    currentPage01 = (currentPage01 - 1 + Math.ceil(totalItems / itemsPerPage)) % Math.ceil(totalItems / itemsPerPage);
    if (totalItems > itemsPerPage) {
      updateCarouselFurniture(1,currentPage01);
    }
  }

  function showNextFurniture02() {
    let productsDiv = document.getElementById('productsFurniture02')!;
    let totalItems = productsDiv.children.length;
    currentPage02 = (currentPage02 + 1) % Math.ceil(totalItems / itemsPerPage);
    if (totalItems > itemsPerPage) {
      updateCarouselFurniture(2, currentPage02);
    }
  }

  function showPrevFurniture02() {
    let productsDiv = document.getElementById('productsFurniture02')!;
    let totalItems = productsDiv.children.length;
    currentPage02 = (currentPage02 - 1 + Math.ceil(totalItems / itemsPerPage)) % Math.ceil(totalItems / itemsPerPage);
    if (totalItems > itemsPerPage) {
      updateCarouselFurniture(2,currentPage02);
    }
  }

  function updateCarouselFurniture(n: number, currentPage: number) {
    const sections = document.querySelectorAll(`.showFurniture > #productsFurniture0${n} > section`);
    sections.forEach((section: any, index) => {
      const isVisible = index >= currentPage * itemsPerPage && index < (currentPage + 1) * itemsPerPage;
      section.style.display = isVisible ? 'block' : 'none';
    });
  }

});