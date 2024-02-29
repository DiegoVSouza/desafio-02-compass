"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b, _c, _d, _e;
    function checkScreenSize() {
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        return screenWidth;
    }
    let screenWidth = checkScreenSize();
    window.addEventListener('resize', () => {
        screenWidth = checkScreenSize();
    });
    let itemsPerPage = screenWidth > 600 ? 6 : 4;
    let currentSlide = 0;
    const pagination = document.querySelector('.pagination');
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slideContainer').length;
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    for (let i = 0; i < totalSlides; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.setAttribute('data-slide', `${i}`);
        pagination.appendChild(bar);
    }
    const selectBar = (selectedBar) => {
        bars.forEach(bar => {
            bar.classList.remove('selectedBar');
        });
        selectedBar.classList.add('selectedBar');
    };
    const bars = document.querySelectorAll('.bar');
    bars[0].classList.add('selectedBar');
    bars.forEach(bar => {
        bar.addEventListener('click', () => {
            const slideIndex = bar.getAttribute('data-slide');
            selectBar(bar);
            showSlide(parseInt(slideIndex));
        });
    });
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => changeSlide(-1));
        nextButton.addEventListener('click', () => changeSlide(1));
    }
    function changeSlide(n) {
        showSlide(currentSlide += n);
    }
    function showSlide(n) {
        if (n >= totalSlides) {
            currentSlide = 0;
        }
        else if (n < 0) {
            currentSlide = totalSlides - 1;
        }
        else {
            currentSlide = n;
        }
        selectBar(bars[currentSlide]);
        const slideElement = document.querySelector('.slideContainer');
        const slideWidth = slideElement.offsetWidth;
        slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
    const addProductsToFurniture = (id, productsArray) => {
        const productsDiv = document.getElementById(id);
        if (productsDiv) {
            productsArray.forEach((produto, index) => {
                const section = document.createElement('section');
                section.style.display = 'none';
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
                if (index < itemsPerPage) {
                    console.log(index);
                    section.classList.add('fadeInRight');
                    setTimeout(() => {
                        section.classList.remove('fadeInRight');
                    }, 600);
                    section.style.display = 'block';
                }
            });
        }
    };
    const furnitureClasses01 = document.getElementById('furnitureClasses01');
    const furnitureClasses02 = document.getElementById('furnitureClasses02');
    if (furnitureClasses01) {
        const furnitureLiElements = furnitureClasses01.getElementsByTagName('h6');
        let productsId = 'productsFurniture01';
        furnitureLiElements[0].classList.add('selectedFurniture');
        addProductsToFurniture(productsId, data_1.productsMen);
        furnitureClasses01.addEventListener('click', (event) => {
            const target = event.target;
            let productsDiv = document.getElementById(productsId);
            if (target.innerText.toLowerCase().length < 15) {
                productsDiv.innerHTML = '';
                for (const h6 of furnitureLiElements) {
                    h6.classList.remove('selectedFurniture');
                }
                target.classList.add('selectedFurniture');
            }
            switch (target.innerText.toLowerCase()) {
                case 'men':
                    addProductsToFurniture(productsId, data_1.productsMen);
                    break;
                case 'women':
                    addProductsToFurniture(productsId, data_1.productsWomen);
                    break;
                case 'acessories':
                    addProductsToFurniture(productsId, data_1.productsAcessories);
                    break;
                default:
                    break;
            }
        });
    }
    if (furnitureClasses02) {
        const furnitureLiElements = furnitureClasses02.getElementsByTagName('h6');
        let productsId = 'productsFurniture02';
        furnitureLiElements[0].classList.add('selectedFurniture');
        addProductsToFurniture(productsId, data_1.productsMen);
        furnitureClasses02.addEventListener('click', (event) => {
            const target = event.target;
            let productsDiv = document.getElementById(productsId);
            if (target.innerText.toLowerCase().length < 15) {
                productsDiv.innerHTML = '';
                for (const h6 of furnitureLiElements) {
                    h6.classList.remove('selectedFurniture');
                }
                target.classList.add('selectedFurniture');
            }
            switch (target.innerText.toLowerCase()) {
                case 'men':
                    addProductsToFurniture(productsId, data_1.productsMen);
                    break;
                case 'women':
                    addProductsToFurniture(productsId, data_1.productsWomen);
                    break;
                case 'acessories':
                    addProductsToFurniture(productsId, data_1.productsAcessories);
                    break;
                default:
                    break;
            }
        });
    }
    let currentPage01 = 0;
    let currentPage02 = 0;
    (_a = document.getElementById('arrowRightFurniture01')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        showNextFurniture01();
    });
    (_b = document.getElementById('arrowLeftFurniture01')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        showPrevFurniture01();
    });
    (_c = document.getElementById('arrowRightFurniture02')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
        showNextFurniture02();
    });
    (_d = document.getElementById('arrowLeftFurniture02')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
        showPrevFurniture02();
    });
    function showNextFurniture01() {
        let id = 'productsFurniture01';
        let productsDiv = document.getElementById(id);
        let totalItems = productsDiv.children.length;
        currentPage01 = (currentPage01 + 1) % Math.ceil(totalItems / itemsPerPage);
        if (totalItems > itemsPerPage) {
            updateCarouselFurniture(id, currentPage01);
        }
    }
    function showPrevFurniture01() {
        let id = 'productsFurniture01';
        let productsDiv = document.getElementById(id);
        let totalItems = productsDiv.children.length;
        currentPage01 = (currentPage01 - 1 + Math.ceil(totalItems / itemsPerPage)) % Math.ceil(totalItems / itemsPerPage);
        if (totalItems > itemsPerPage) {
            updateCarouselFurniture(id, currentPage01);
        }
    }
    function showNextFurniture02() {
        let id = 'productsFurniture02';
        let productsDiv = document.getElementById(id);
        let totalItems = productsDiv.children.length;
        currentPage02 = (currentPage02 + 1) % Math.ceil(totalItems / itemsPerPage);
        if (totalItems > itemsPerPage) {
            updateCarouselFurniture(id, currentPage02);
        }
    }
    function showPrevFurniture02() {
        let id = 'productsFurniture02';
        let productsDiv = document.getElementById(id);
        let totalItems = productsDiv.children.length;
        currentPage02 = (currentPage02 - 1 + Math.ceil(totalItems / itemsPerPage)) % Math.ceil(totalItems / itemsPerPage);
        if (totalItems > itemsPerPage) {
            updateCarouselFurniture(id, currentPage02);
        }
    }
    function updateCarouselFurniture(id, currentPage) {
        const sections = document.querySelectorAll(`.showFurniture > #${id} > section`);
        sections.forEach((section, index) => {
            const isVisible = index >= currentPage * itemsPerPage && index < (currentPage + 1) * itemsPerPage;
            if (!isVisible) {
                section.classList.add('fadeOutLeft');
                setTimeout(() => {
                    section.classList.remove('fadeOutLeft');
                }, 600);
                section.style.display = 'none';
            }
            else {
                section.classList.add('fadeInRight');
                setTimeout(() => {
                    section.classList.remove('fadeInRight');
                }, 600);
                section.style.display = 'block';
            }
        });
    }
    const spinnerDiv = document.createElement('div');
    spinnerDiv.classList.add('spinner');
    const svgContent = `
  <svg width="100" height="100">
    <circle 
      cx="50" cy="50" r="45" 
      stroke-width="10" stroke="#eee" 
      fill="none"
    ></circle>

    <path 
      d="M50 5 A 45 45 0 0 1 95 50" 
      fill="none"
      stroke-width="10" stroke="#0079b8"
    ></path>
  </svg>
`;
    spinnerDiv.innerHTML = svgContent;
    const updateMostPopularImageColor = (siblingElement, color) => {
        var _a, _b;
        let image = data_1.mostPorpularImages.find(image => image.color === color);
        if (image) {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.alt;
            if (siblingElement) {
                let nextsibling = siblingElement.nextElementSibling;
                (_a = siblingElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(spinnerDiv, siblingElement.nextSibling);
                while (nextsibling) {
                    if (nextsibling.tagName.toLowerCase() === 'img') {
                        nextsibling.remove();
                    }
                    nextsibling = nextsibling.nextElementSibling;
                }
                (_b = siblingElement.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(imgElement, siblingElement.nextSibling);
                imgElement.addEventListener('load', () => {
                    var _a;
                    (_a = siblingElement.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(spinnerDiv);
                });
            }
        }
    };
    let pMostPopularAricle = document.querySelector('.mostPopularArticle.mostPopularInverted > section > p');
    const imgElement = document.createElement('img');
    imgElement.src = data_1.mostPorpularImages[0].src;
    imgElement.alt = data_1.mostPorpularImages[0].alt;
    (_e = pMostPopularAricle.parentNode) === null || _e === void 0 ? void 0 : _e.insertBefore(imgElement, pMostPopularAricle.nextSibling);
    let circles = document.querySelectorAll(".circle");
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            var _a;
            let color = (_a = circle.getAttribute('class')) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
            updateMostPopularImageColor(pMostPopularAricle, color);
        });
    });
});
//# sourceMappingURL=app.js.map