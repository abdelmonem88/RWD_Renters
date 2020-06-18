$(document).ready(function() {
	//sticky navbar
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	});

	//smooth scroll to section
	$('.navbar-nav li a').click(function(e) {
		e.preventDefault();
		let dataScroll = $(this).data('scroll');
		$('html,body').animate(
			{
				scrollTop: $(dataScroll).offset().top + -75
			},
			1000
		);
	});

	//owl carousel
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop: true,
		nav: true,
		margin: 10,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});
	owl.on('mousewheel', '.owl-stage', function(e) {
		if (e.deltaY > 0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});

	//filter gallery section with mixitup plugin
	var mixer = mixitup('.mixarea');
	//add active calss to btn
	$('.mixarea .btn').click(function() {
		$(this).addClass('active-btn').siblings().removeClass('active-btn');
	});

	//magnific Popup
	$('.gallery-icon').magnificPopup({ type: 'image' });

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	//scroll to top
	$('.totop').click(function(e) {
		e.preventDefault();
		$('html,body').animate(
			{
				scrollTop: 0
			},
			1000
		);
	});
});
