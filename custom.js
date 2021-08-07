$(function(){

// banner slick


    $('.banner-main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        prevArrow:".prev",
        nextArrow:".next",
      });

      // our work mixit

      var mixer = mixitup('.mixitmine');

      // testimonial slick

      $('.testimain').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        arrows: false,
        

        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
         
        ]
      });




});