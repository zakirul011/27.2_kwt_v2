(function ($) {
	"use strict";

	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});



	/*=========================
	HERO SLIDER JS
	===========================*/
	function heroSlider() {
		var BasicSlider = $('.hero-slider');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.hero-slide:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.hero-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			fade: true,
			dots: true,
			arrows: true,
			appendArrows: '.hero-slider-nav',
			appendDots: '.hero-slider-nav',
			prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	heroSlider();

	/*=========================
	product-slider
	===========================*/
	$('.product-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});
	/*=========================
	shop-3-slider
	===========================*/
	$('.shop-3-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
		centerMode: true,
		centerPadding: '0px',

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	/*=========================
	.news-slider
	===========================*/
	$('.news-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					arrows: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrows: true,
				}
			}
		]
	});
	/*=========================
	.brand-slider
	===========================*/
	$('.brand-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});

	/*=========================
	testiomony-slider
	===========================*/
	$('.testiomony-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
	});
	/*=========================
	location-slider
	===========================*/
	$('.location-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
	});
	/*=========================
	provide-slider
	===========================*/
	$('.provide-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
	});

	if (window.matchMedia("(max-width: 700px)").matches) {
		/*=========================
		work-content
		===========================*/
		$('.work-content').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
		});
		/*=========================
		shop-content
		===========================*/
		$('.shop-content').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
		});
	}

	/*=========================
	magnificPopup image JS
	===========================*/
	$('.video-btn').magnificPopup({
		type: 'iframe'
	});

	$('.pop-img-btn').magnificPopup({
		type: 'image'
	});

	$('.gallery-item a').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		}
	});


	// custom tab
	tabFunc(document.querySelectorAll('.service-tab-nav li'), document.querySelectorAll('.service-tab'))

	function tabFunc(tabLinks, tabs) {
		tabLinks.forEach((link, index) => {
			link.addEventListener('click', ()=>{
				for (let i = 0; i < tabLinks.length; i++) {
					tabLinks[i].classList.remove('active')
					tabs[i].classList.remove('active')
				}
				link.classList.add('active')
				tabs[index].classList.add('active')
			})
		});
	}
	


	// reponsive menu
	const resBar = document.querySelectorAll('.humberger-bar, .resonsive-slide, .resonsive-slide-overlay')
	resBar.forEach(btn => {
		btn.addEventListener('click', ()=>{
			for (let i = 0; i < resBar.length; i++) {
				resBar[i].classList.toggle('active')
			}
		})
	});

	// niceSelect 
	$('select').niceSelect()

	// sticky
	var wind = $(window);
	var sticky = $('.header-content');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 150) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});

	/*=========================
	SCROLL-UP JS
	===========================*/
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="far fa-arrow-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	// skrollr activation
	var s = skrollr.init({
		forceHeight: false,
		smoothScrollingDuration: 100,
	});
	if (s.isMobile()) {
			s.destroy();
	}

	// One Page Nav
	var top_offset = $('.header-content').height() / 2;
	$('.mainmenu ul, .responsive-menu ul').onePageNav({
		scrollOffset: top_offset,
	});
	
})(jQuery);