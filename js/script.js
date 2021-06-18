;(function(){

  // preloder part js

  $(window).on('load',function(){
    $('#preloder').delay(1000) .fadeOut(1000);
  })

// sticy-menu js
var menuTop = $('.custom-nav').offset().top;

$(window).on('scroll',function(){
  var winScroll = $(window).scrollTop();
  if (winScroll > menuTop) {
    $ ('.custom-nav') .addClass ('navFixed')
  } else {
    $ ('.custom-nav') .removeClass ('navFixed')
  }

})

// baner part js

$('.baner-slide').slick({
    arrows:true,
    prevArrow:'<i class="fas fa-angle-left b-left"></i>',
    nextArrow:'<i class="fas fa-angle-right b-right"></i>',
    autoplay:true,
    speed:1000,
    pauseOnFocus:false,
    pauseOnHover:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    Infinit:true,
    responsive:[
        {
            breakpoint: 577,
            settings: {
              autoplay: false
            }
          },
        {
            breakpoint: 321,
            settings: {
              autoplay: false
            }
          },
    ]
});

// paralax js 
var foreground = new Rellax('.fg-parallax', {
  speed: 5,
  center: true,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});  

// food-menu part js
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

$('.filters-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');  
  $grid.isotope({
    filter: filterValue
  });
});

$('.button').on('click', function(){  
  $('.button').removeClass('active');
  $(this).addClass('active');
});

// testimonial slide js

$('.testimonial-slider').slick({
  arrows:true,
    prevArrow:'<i class="fas fa-angle-left testi-icon-left"></i>',
    nextArrow:'<i class="fas fa-angle-right testi-icon-right"></i>',
  autoplay:true,
  speed:1000,
  pauseOnFocus:false,
  pauseOnHover:false,
  slidesToShow: 1,
  slidesToScroll: 1,
  Infinit:true,
  responsive:[
      {
          breakpoint: 577,
          settings: {
            autoplay: false
          }
        },
      {
          breakpoint: 321,
          settings: {
            autoplay: false
          }
        },
  ]
});


// date piker js

$('#datetimepicker4').datetimepicker({
  format: 'DD-MMM-YYYY'
});

$('#datetimepicker3').datetimepicker({
  format: 'LT',
  icons: {
    time: "fa fa-clock-o",
    date: "fa fa-calendar",
    up: "fas fa-chevron-up",
    down: "fa fa-chevron-down"
  }
});

// tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
  // $tooltip-arrow-color: "red"  ;
})







})(jQuery);