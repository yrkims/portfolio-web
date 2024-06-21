document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('.intro1').classList.add('animate');
            document.querySelector('.intro2').classList.add('animate');
});





    var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
 

