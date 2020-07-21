$(document).on('ready', function() {
  $(".center").slick({
    dots: true,
    autoplay: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
    ]
  });
});