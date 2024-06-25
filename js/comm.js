

document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('.intro1').classList.add('animate');
            document.querySelector('.intro2').classList.add('animate');
});





    var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
 

 // Swiper를 초기화합니다
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // 포트폴리오 항목 클릭 시 슬라이드 이동
  document.querySelector('.port .box1').addEventListener('click', function() {
    swiper.slideTo(3); // 첫 번째 슬라이드로 이동 (인덱스는 0부터 시작)
  });

  document.getElementById('port2').addEventListener('click', function() {
    swiper.slideTo(4); // 두 번째 슬라이드로 이동
  });

  document.getElementById('port3').addEventListener('click', function() {
    swiper.slideTo(5); // 세 번째 슬라이드로 이동
  });

  document.getElementById('port4').addEventListener('click', function() {
    swiper.slideTo(6); // 네 번째 슬라이드로 이동
  });

document.querySelector('.menu-item:nth-child(2) a').addEventListener('click', function(event) {
  event.preventDefault(); // 기본 링크 이벤트 방지
  swiper.slideTo(0); // swiper를 사용해 첫 번째 슬라이드로 이동
});