$(document).ready(function () {
//   $('.carousel__inner').slick({
//     speed: 1200,
//     adaptiveHeight: true,
//     prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
//     nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           dots: true,
//           arrows: false
//         }
//       }
//     ]



const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: true
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});

// var slider = tns({
//   container: '.my-slider',
//   items: 1,
//   responsive: {
//     640: {
//       edgePadding: 20,
//       gutter: 20,
//       items: 2
//     },
//     700: {
//       gutter: 30
//     },
//     900: {
//       items: 3
//     }
//   }
// });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleClass(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  };
  toggleClass('.catalog-item__link');
  toggleClass('.catalog-item__back');

});
