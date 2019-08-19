/*=============================================
=            count            =
=============================================*/

$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

/*=====  End of count  ======*/

jQuery(document).ready(function(){jQuery(".tabs .tab-links a").on("click",function(a){var e=jQuery(this).attr("href");jQuery(".tabs "+e).show().siblings().hide(),jQuery(this).parent("li").addClass("active").siblings().removeClass("active"),a.preventDefault()})}),$(".owl-carousel").owlCarousel({loop:!0,margin:10,nav:!0,autoplay:!1,dots:!1,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],responsive:{0:{items:1},600:{items:3}}});