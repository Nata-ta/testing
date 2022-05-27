// Header menu

const btnMenu = document.querySelector('.hero__header-btn-menu');
const menu = document.querySelector('.hero__nav');

function toggleMobileMenu() {
    btnMenu.classList.toggle('hero__header-btn-menu--open');
    menu.classList.toggle('hero__nav--open');
}

btnMenu.addEventListener('click', toggleMobileMenu);

// Tabs

const tabButtons = document.querySelectorAll(".partners__logo");
const contents = Array.from(document.querySelectorAll(".partners__body"));

tabButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        hideAllTabs();
        getTabByDataTab(e.target.dataset.tab).classList.add('active');
    })
})

function getTabByDataTab(tabId) {
    return contents.find(function (tab) {
        return tab.dataset.tab == tabId
    })
}

function hideAllTabs() {
    contents.forEach(function (tab) {
        tab.classList.remove('active');
    })
}

// Swiper

const swiper = new Swiper('.swiper', {
    allowTouchMove: false,
    simulateTouch: false,
    touchMoveStopPropagation: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.about__pagination',
      type: "progressbar",
    },
  
    navigation: {
      nextEl: '.about__button-next',
      prevEl: '.about__button-prev',
    }
  });

  // Modal

let buttons = document.querySelectorAll('.modal__button');
let modalWrap = document.getElementById('modal');
let listOfModals = modalWrap.querySelectorAll('[data-modal]');
let closeBtn = document.querySelectorAll('.modal__close');

buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        if (!e.target.matches('button[data-modal]')) return;
    
        modalWrap.style.display = 'flex';
    
        let targetModal = Array.from(listOfModals).find(x => {
          return x.dataset.modal == e.target.dataset.modal
        });
    
        targetModal.style.display = 'block';
      });
})

    closeBtn.forEach(btn => {
        btn.addEventListener('click', function () {
            modalWrap.style.display = 'none';
            listOfModals.forEach(x => {
            x.style.display = 'none';
          });
        });
    })