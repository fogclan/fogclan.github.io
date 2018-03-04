;(function () {

	'use strict';



	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};



	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}



		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);

			return false;
		});

	};


	// Page Nav
	var clickMenu = function() {

		$('#navbar a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});


	};

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function() {

		var $section = $('section[data-section]');

		$section.waypoint(function(direction) {

		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};





	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			}

		});
	};



	// Animations
	// Home

	var homeAnimate = function() {
		if ( $('#fh5co-home').length > 0 ) {

			$('#fh5co-home').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-home .to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);


					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};


	var introAnimate = function() {
		if ( $('#fh5co-intro').length > 0 ) {

			$('#fh5co-intro').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-intro .to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 1000);


					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};

	var workAnimate = function() {
		if ( $('#fh5co-work').length > 0 ) {

			$('#fh5co-work').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-work .to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);


					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};


	var testimonialAnimate = function() {
		var testimonial = $('#fh5co-testimonials');
		if ( testimonial.length > 0 ) {

			testimonial.waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = testimonial.find('.to-animate').length,
						sec = parseInt((sec * 200) - 400);

					setTimeout(function() {
						testimonial.find('.to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);

					setTimeout(function() {
						testimonial.find('.to-animate-2').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInDown animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, sec);


					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};

	var servicesAnimate = function() {
		var services = $('#fh5co-services');
		if ( services.length > 0 ) {

			services.waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = services.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						services.find('.to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);

					setTimeout(function() {
						services.find('.to-animate-2').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, sec);



					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};

	var aboutAnimate = function() {
		var about = $('#fh5co-about');
		if ( about.length > 0 ) {

			about.waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						about.find('.to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);



					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};

	var countersAnimate = function() {
		var counters = $('#fh5co-counters');
		if ( counters.length > 0 ) {

			counters.waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = counters.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						counters.find('.to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);

					setTimeout(function() {
						counters.find('.js-counter').countTo({
						 	formatter: function (value, options) {
				      		return value.toFixed(options.decimals);
				   		},
						});
					}, 400);

					setTimeout(function() {
						counters.find('.to-animate-2').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, sec);





					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};


	var contactAnimate = function() {
		var contact = $('#fh5co-contact');
		if ( contact.length > 0 ) {

			contact.waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						contact.find('.to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);

					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};

	var montharray = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');

	var teaser = {
	    initCountdown: function(yr, m, d) {
	        var today = new Date(),
	            todayy = today.getYear(),
	            todaym = today.getMonth(),
	            todayd = today.getDate(),
	            todayh = today.getHours(),
	            todaymin = today.getMinutes(),
	            todaysec = today.getSeconds();

	        if (todayy < 1000) {
	            todayy += 1900;
	        }

	        var todaystring = montharray[todaym] + ' ' + todayd + ', ' + todayy + ' ' + todayh + ':' + todaymin + ':' + todaysec,
	            futurestring = montharray[m - 1] + ' ' + d + ', ' + yr,
	            dd = Date.parse(futurestring) - Date.parse(todaystring),
	            dday = Math.floor(dd / (60 * 60 * 1000 * 24) * 1),
	            dhour = Math.floor((dd % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1),
	            dmin = Math.floor(((dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1),
	            dsec = Math.floor((((dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);

	        if (dday < 0 || dhour < 0 || dmin < 0 || dsec < 0) {
	            $('.js-timer').html(
	                '<div class="teaser-timer__countdown_day"><span>0</span><span>0</span></div> ' +
	                '<div class="teaser-timer__countdown_hour"><span>0</span><span>0</span></div>' +
	                '<div class="teaser-timer__countdown_min"><span>0</span><span>0</span></div> ' +
	                '<div class="teaser-timer__countdown_sec"><span>0</span><span>0</span></div> '
	            );
	            return;
	        } else {
	            $('.js-timer').html(
	                '<div class="teaser-timer__countdown_day">' + this.addTags(this.zerofill(dday, 2)) + '</div> ' +
	                '<div class="teaser-timer__countdown_hour">' + this.addTags(this.zerofill(dhour, 2)) + '</div>' +
	                '<div class="teaser-timer__countdown_min">' + this.addTags(this.zerofill(dmin, 2)) + '</div> ' +
	                '<div class="teaser-timer__countdown_sec">' + this.addTags(this.zerofill(dsec, 2)) + '</div> '
	            );
	        }

	        this._runCount();
	    },

	    _runCount: function() {
	        setTimeout(function() {
	            this.initCountdown(2018, 3, 9);
	        }.bind(this), 1000);
	    },

	    zerofill: function(number, width) {
	        width -= number.toString().length;
	        if (width > 0) {
	            return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
	        }
	        return number + '';
	    },

	    addTags: function(number) {
	        var numberStr = number.toString(),
	            newNumberStr = '';
	        for (var i = 0; i < numberStr.length; i++) {
	            newNumberStr = newNumberStr + '<span>' + numberStr[i] + '</span>';
	        }
	        return newNumberStr;
	    }
	};





	// Document on load.
	$(function(){

		parallax();

		burgerMenu();

		clickMenu();

		windowScroll();

		navigationSection();

		goToTop();


		// Animations
		homeAnimate();
		introAnimate();
		workAnimate();
		testimonialAnimate();
		servicesAnimate();
		aboutAnimate();
		countersAnimate();
		contactAnimate();

		if ($('.js-timer').length) {
	      teaser.initCountdown(2018, 3, 9);
	  }

	});


}());
