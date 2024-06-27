/* Javascrip 코드 */
const audios = [
  document.getElementById("istp_audio"),
  document.getElementById("istj_audio"),
  document.getElementById("isfp_audio"),
  document.getElementById("isfj_audio"),
  document.getElementById("intp_audio"),
  document.getElementById("intj_audio"),
  document.getElementById("infp_audio"),
  document.getElementById("infj_audio"),
  document.getElementById("estp_audio"),
  document.getElementById("estj_audio"),
  document.getElementById("esfp_audio"),
  document.getElementById("esfj_audio"),
  document.getElementById("entp_audio"),
  document.getElementById("entj_audio"),
  document.getElementById("enfp_audio"),
  document.getElementById("enfj_audio"),
];
const numMbtis = 16;
const slidesPerView = 5;

/* ========
Debugger plugin, simple demo plugin to console.log some of callbacks
======== */
function myPlugin({ swiper, extendParams, on }) {
  extendParams({
    debugger: false,
  });

  on('init', () => {
    if (!swiper.params.debugger) return;
    console.log('init');
  });
  on('click', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('click');
  });
  on('tap', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('tap');
  });
  on('doubleTap', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('doubleTap');
  });
  on('sliderMove', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('sliderMove');
  });
  on('slideChange', () => {
    audios[(swiper.previousIndex + numMbtis - slidesPerView) % numMbtis].pause();
    audios[(swiper.previousIndex + numMbtis - slidesPerView) % numMbtis].currentTime = 0;
    audios[(swiper.activeIndex + numMbtis - slidesPerView) % numMbtis].volume = 0.25;
    audios[(swiper.activeIndex + numMbtis - slidesPerView) % numMbtis].play();
    if (!swiper.params.debugger) return;
    console.log('slideChange', swiper.previousIndex, '->', swiper.activeIndex);
  });
  on('slideChangeTransitionStart', () => {
    if (!swiper.params.debugger) return;
    console.log('slideChangeTransitionStart');
  });
  on('slideChangeTransitionEnd', () => {
    if (!swiper.params.debugger) return;
    console.log('slideChangeTransitionEnd');
  });
  on('transitionStart', () => {
    if (!swiper.params.debugger) return;
    console.log('transitionStart');
  });
  on('transitionEnd', () => {
    if (!swiper.params.debugger) return;
    console.log('transitionEnd');
  });
  on('fromEdge', () => {
    if (!swiper.params.debugger) return;
    console.log('fromEdge');
  });
  on('reachBeginning', () => {
    if (!swiper.params.debugger) return;
    console.log('reachBeginning');
  });
  on('reachEnd', () => {
    if (!swiper.params.debugger) return;
    console.log('reachEnd');
  });

}

// Install Plugin To Swiper
Swiper.use([myPlugin]);


let swiper = new Swiper('.swiper-container', {
  loop: true,
  centeredSlides: true,
  slidesPerView: slidesPerView,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 10,
    depth: 100,
    slideShadows: true,
    // modifier:1,
    // stretch:50
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  mousewheel: true,
  // Enable debugger
  debugger: true,
});
