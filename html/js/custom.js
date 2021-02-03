(function($) {
    "use strict";

    var tpj = jQuery;
    var revapi24;
    // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(350).fadeOut("slow");
    });


    // on ready function
    jQuery(document).ready(function($) {
	
	
	// Menu js for Position fixed
        $(window).scroll(function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 160) {
                $('.os_navigation_header_wrapper').addClass('menu_fixed animated fadeInDown');
            } else {
                $('.os_navigation_header_wrapper').removeClass('menu_fixed animated fadeInDown');
            }
        });
	
	
	
	// Magnific popup-video

	$('.test-popup-link').magnificPopup({ 
    type: 'iframe',
    iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            '<div class="mfp-title">Some caption</div>'+
            '</div>',
        patterns: {
            youtube: {
                index: 'youtube.com/', 
                id: 'v=',
                src: 'https://www.youtube.com/embed/H4p6njjPV_o'
            }
        }
    }
    // other options
});


// img scroll move 

var window_width = $(window).width() - $('#object').width();

var document_height = $(document).height() - $(window).height();

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var object_position_left = window_width * (scroll_position / document_height);
        $('#object').css({
            'left': object_position_left
        });
    });
});


$(document).ready(function() {
            $('.os_part_slider_main_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
				center: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 2,
                        nav: true
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })
		
		
		$(document).ready(function() {
            $('.os_look_slider_main_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 3,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 4,
                        nav: true,
                        loop: true,
                    }
                }
            })
        })
		
		
		$(document).ready(function() {
            $('.os_customer_slider_main_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 30,
                autoplay: false,
				center: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 2,
                        nav: true
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        loop: true,
                    }
                }
            })
        })
		$(document).ready(function() {
            $('.os_index7_customer_slider_main_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 30,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                    }
                }
            })
        })
		
		//-------------------------------------------------------
    // counter-section
    //-------------------------------------------------------
    $('.counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });	
		
		
	const body = document.querySelector("body");
		const fab_nav = document.querySelector(".fab-container");
		const fab_rotate = document.querySelector(".fab-rotate");
		const fab_icon = document.querySelector(".fab-icon");

		if (fab_nav) {
			fab_nav.addEventListener("click", function () {
				fab_nav.classList.toggle("fab-opened");
			});

			body.addEventListener("click", function (e) {
				if (e.target != fab_nav && e.target != fab_rotate && e.target != fab_icon) {
					fab_nav.classList.remove("fab-opened")
				}
			});
		}



// ===== Scroll to Top ==== 
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 200) {       
			$('.fab-container').fadeIn(200);   
		} else {
			$('.fab-container').fadeOut(200);  
		}
	});
	
	
	// scrolling animation js
	
	 var $winW = function() {
        return $(window).width();
    };
    var $winH = function() {
        return $(window).height();
    };
    var $screensize = function(element) {
        $(element).width($winW()).height($winH());
    };
    var screencheck = function(mediasize) {
        if (typeof window.matchMedia !== "undefined") {
            var screensize = window.matchMedia("(max-width:" + mediasize + "px)");
            if (screensize.matches) {
                return true;
            } else {
                return false;
            }
        } else {
            if ($winW() <= mediasize) {
                return true;
            } else {
                return false;
            }
        }
    };
            $('.animated-row').each(function() {
                var $this = $(this);
                $this.find('.animate').each(function(i) {
                    var $item = $(this);
                    var animation = $item.data('animate');
                    $item.on('inview', function(event, isInView) {
                        if (isInView) {
                            setTimeout(function() {
                                $item.addClass('animated ' + animation).removeClass('animate');
                            }, i * 50);
                        } else if (!screencheck(767)) {
                            $item.removeClass('animated ' + animation).addClass('animate');
                        }
                    });
                });
            });
	
	
	
		//************* mover over ************//
		
			var windowWidth = $(window).width();

$('.os_index2_banner_right_content_wrapper,.os_inner_error_wrapper').mousemove(function(event){
  var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
  var moveY = (($(window).height() / 2) - event.pageY) * 0.1;
  $('.os_index2_circle_two img').css('bottom', moveY + 'px');
  $('.os_index2_circle_one img').css('bottom', moveY + 'px');
  $('.os_index2_circle_zero img,.error_wrapper img').css('margin-left', moveX + 'px');
});
	
	
	
	$(document).ready(function() {
            $('.os_index2_pixel_slider_main_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 30,
                autoplay: true,
				center: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 2,
                        nav: true
                    },
                    1000: {
                        items: 7,
                        nav: true,
                        loop: true,
                    }
                }
            })
        })
	
		
		$(document).ready(function() {
            $('.os_index3_banner_left_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 3,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 2,
                        nav: true
                    },
                    600: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        loop: true,
                    }
                }
            })
        })
	
	$(document).ready(function() {
            $('.os_index4_success_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 3,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                    }
                }
            })
        })
		
		$(document).ready(function() {
            $('.os_index4_press_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 20,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 2,
                        nav: true
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        loop: true,
                    }
                }
            })
        })
		
		
		$(document).ready(function() {
            $('.os_index5_banner_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 20,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 2,
                        nav: true
                    },
                    600: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 5,
                        nav: true,
                        loop: true,
                    }
                }
            })
        })
		
		$(document).ready(function() {
            $('.os_index5_testimonial_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 20,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                    }
                }
            })
        })
		
		
		$(document).ready(function() {
            $('.os_index5_news_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 20,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                    }
                }
            })
        })
		
		
		$(document).ready(function() {
            $('.os_index6_company_top_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 3,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 2,
                        nav: true
                    },
                    600: {
                        items: 2,
                        nav: true
                    },
                    1000: {
                        items: 2,
                        nav: true,
                        loop: true,
                    }
                }
            })
        })
		
		$(document).ready(function() {
            $('.os_index6_company_center_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 3,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 2,
                        nav: true
                    },
                    600: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 4,
                        nav: true,
                        loop: true,
                    }
                }
            })
        })
		
		$(document).ready(function() {
            $('.os_index6_company_bottom_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 3,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 2,
                        nav: true
                    },
                    600: {
                        items: 2,
                        nav: true
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        loop: true,
                    }
                }
            })
        })
		
		$(document).ready(function() {
            $('.os_inner_about_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: false,
                center: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 2,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })
		

        $(document).ready(function() {
            $('.os_inner_ur_team_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: false,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 2,
                        nav: true
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        loop: true,
                        margin: 30
                    }
                }
            })
        })


        $(document).ready(function() {
            $('.os_inner_careers_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: false,
                center: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 2,
                        nav: true
                    },
                    600: {
                        items: 2,
                        nav: true
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })
        


        $(document).ready(function() {
            $('.os_get_help_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: false,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 4,
                        nav: true,
                        loop: true,
                        margin: 30
                    }
                }
            })
        })
		
		
		$(document).ready(function() {
            $('.os_pd_slider_fisrt_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 20,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 2,
                        nav: true
                    },
                    1000: {
                        items: 4,
                        nav: true,
                        loop: true,
                    }
                }
            })
        })
		
		
		$(document).ready(function() {
            $('.os_pd_slider_second_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 20,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 2,
                        nav: true
                    },
                    1000: {
                        items: 4,
                        nav: true,
                        loop: true,
                    }
                }
            })
        })
		
		var video = document.getElementById("myVideo");
var btn = document.getElementById("play-trigger");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


	$(document).ready(function() {
            $('.os_bss_left_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 20,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                    }
                }
            })
        })
		
		
		$(document).ready(function() {
              $('.cc_ps_top_slider_section .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:false,
                responsiveClass: true,
				smartSpeed: 1200,
				navText : ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>','<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: true
                  },
                  1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })
			
			
			$('.zoom_popup').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small></small>';
				}
			}
		});
	
  
 });

})(jQuery);	