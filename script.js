$(document).ready(function() {
  $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,  
      slidesToScroll: 1,
      prevArrow: false, 
      nextArrow: false, 
      autoplay: true,  
      autoplaySpeed: 1000, 
      dots: true,         
      focusOnSelect: true, 
      centerMode: true, 
      responsive: [
          {
              breakpoint: 770,
              settings: {
                  slidesToShow: 2,  
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 580,
              settings: {
                  slidesToShow: 1,  
                  slidesToScroll: 1
              }
          }
      ]
  });
});