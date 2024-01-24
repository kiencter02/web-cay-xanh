// Slide main
$(document).ready(function(){
    $('.slide-main').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });
//

// Slide projects
$(document).ready(function(){
    $('.slide-projects').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 2
    });
  });
//   
// Slide logo
$(document).ready(function(){
$('.logo-slider').slick({
    slidesToShow:3,
    slidesToScroll:1,
    arrows:true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
  });
});

