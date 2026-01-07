jQuery(document).ready(function($){
	
	var isMobile = (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i)) ? true : false;
	
	var currentWidth = window.innerWidth || document.documentElement.clientWidth;
	
	var $transformsEnabled = $('body').hasClass('rtl') ? false : true;


	$("select").each(function(){
		if($(this).css('display') != 'none') {
			$(this).wrap( '<div class="selection-box"></div>' );
		}
	});
	
	//Menu Start
	megaMenu();
	function megaMenu() {
		var screenWidth = $(document).width(),
		containerWidth = $("#header .container").width(),
		containerMinuScreen = (screenWidth - containerWidth)/2;
		if( containerWidth == screenWidth ){

			$px = mytheme_urls.scroll == "disable" ? 45 : 25;
			
			$("li.menu-item-megamenu-parent .megamenu-child-container").each(function(){

				var ParentLeftPosition = $(this).parent("li.menu-item-megamenu-parent").offset().left,
				MegaMenuChildContainerWidth = $(this).width();

				if( (ParentLeftPosition + MegaMenuChildContainerWidth) > screenWidth ){
					var SwMinuOffset = screenWidth - ParentLeftPosition;
					var marginFromLeft = MegaMenuChildContainerWidth - SwMinuOffset;
					var marginFromLeftActual = (marginFromLeft) + $px;
					var marginLeftFromScreen = "-"+marginFromLeftActual+"px";
					$(this).css('left',marginLeftFromScreen);
				}

			});
		} else {

			$px = mytheme_urls.scroll == "disable" ? 40 : 20;

			$("li.menu-item-megamenu-parent .megamenu-child-container").each(function(){
				var ParentLeftPosition = $(this).parent("li.menu-item-megamenu-parent").offset().left,
				MegaMenuChildContainerWidth = $(this).width();

				if( (ParentLeftPosition + MegaMenuChildContainerWidth) > containerWidth ){
					var marginFromLeft = ( ParentLeftPosition + MegaMenuChildContainerWidth ) - screenWidth;
					var marginLeftFromContainer = containerMinuScreen + marginFromLeft + $px;

					if( MegaMenuChildContainerWidth > containerWidth ){
						var MegaMinuContainer	= ( (MegaMenuChildContainerWidth - containerWidth)/2 ) + 10;
						var marginLeftFromContainerVal = marginLeftFromContainer - MegaMinuContainer;
						marginLeftFromContainerVal = "-"+marginLeftFromContainerVal+"px";
						$(this).css('left',marginLeftFromContainerVal);
					} else {
						marginLeftFromContainer = "-"+marginLeftFromContainer+"px";
						$(this).css('left',marginLeftFromContainer);
					}
				}

			});
		}
	}
	
	//Sticky Navigation
	if(  mytheme_urls.stickynav === "enable"  && currentWidth > 767){
		$("#menu-container").sticky({ topSpacing: 0 });
	}
	//Sticky Navigation End
	
	//Mobile Menu
	$("#dt-menu-toggle").click(function( event ){
		event.preventDefault();
		$menu = $("nav#main-menu").find("ul.menu:first");
		$menu.slideToggle(function(){
			$menu.css('overflow' , 'visible');
			$menu.toggleClass('menu-toggle-open');
		});
	});

	$(".dt-menu-expand").click(function(){
		if( $(this).hasClass("dt-mean-clicked") ){
			$(this).text("+");
			if( $(this).prev('ul').length ) {
				$(this).prev('ul').slideUp(300);
			} else {
				$(this).prev('.megamenu-child-container').find('ul:first').slideUp(300);
			}
		} else {
			$(this).text("-");
			if( $(this).prev('ul').length ) {
				$(this).prev('ul').slideDown(300);
			} else{
				$(this).prev('.megamenu-child-container').find('ul:first').slideDown(300);
			}
		}
		
		$(this).toggleClass("dt-mean-clicked");
		return false;
	});
//Menu End

//Nice Scroll
	var isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)?true:false;
	if( mytheme_urls.scroll === "enable" && !isMacLike ) {
		jQuery("html").niceScroll({zindex:99999,cursorborder:"1px solid #424242"});
	}
//Nice Scroll End

//Go To Top
	$(window).scroll(function() {
		
		if ($(this).scrollTop() > 220) {
			$('.back-to-top').fadeIn(500);
		} else {
			$('.back-to-top').fadeOut(500);
		}
	});

	$('.back-to-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 500);
		return false;
	});
//Go To Top	end

//Blog Template
	if( $(".apply-isotope").length ) {
		$(".apply-isotope").isotope({itemSelector : '.column',transformsEnabled:$transformsEnabled,masonry: { gutterWidth: 20} });
	}

//Gallery Post Slider
    if( ($("ul.entry-gallery-post-slider").length) && ( $("ul.entry-gallery-post-slider li").length > 1 ) ){
	  	$("ul.entry-gallery-post-slider").bxSlider({auto:false, video:true, useCSS:false, pager:'', autoHover:true, adaptiveHeight:true});
    }	

//Gallery Template
	if (Modernizr.touch) {
		$(".close-overlay").removeClass("hidden");

		$(".dt-gallery").click(function(e){
			e.preventDefault();
			e.stopPropagation();

			if (!$(this).hasClass("hover")) {
				$(this).addClass("hover");
            }
    	});

    	$(".close-overlay").click(function(e){
    		e.preventDefault();
    		e.stopPropagation();

	    	if ($(this).closest(".portfolio").hasClass("hover")) {
    			$(this).closest(".portfolio").removeClass("hover");
	        }
    	});
	} else {
		$(".dt-gallery").mouseenter(function(){
			 $(this).addClass("hover");
		}).mouseleave(function(){
			 $(this).removeClass("hover");
		});
	}

$("a[data-gal^='prettyPhoto']").prettyPhoto({hook:'data-gal',animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: false,social_tools: false,deeplinking:false});		

// Gallery Slider
	if( $(".portfolio-slider").find("li").length > 1 ) {
		$(".portfolio-slider").bxSlider({ 
			auto:false,
			video:true,
			useCSS:false,
			pager:'true',
			autoHover:true, adaptiveHeight:true,
		});
	}

// Related Gallery Slider
	if( $(".dt-sc-gallery-carousel").find("li").length > 3 ) {
		$(".dt-sc-gallery-carousel").carouFredSel({
			responsive: true,
			auto: false,
			width: '100%',
			height: 'variable',
			prev: '.dt-gallery-prev',
			next: '.dt-gallery-next',
			height: 'auto',
			scroll: 1,
			items: { width:340, height: 'variable', visible: { min: 1, max:3 } }
		});
	}	

//Gallery Template

//FitVids
 	$("div.dt-video-wrap").fitVids();
 	$('.wp-video').css('width', '100%');
 	$('.wp-video-shortcode').css('width', '100%');
 	$('.wp-video-shortcode').css('height', '100%');

//Smart Resize Start
	$(window).smartresize(function(){
		
		megaMenu();
		
		//Mobile Menu
		currentWidth = window.innerWidth || document.documentElement.clientWidth;
		
		//Blog Template
		if( $(".apply-isotope").length ) {
			$(".apply-isotope").isotope({itemSelector : '.column',transformsEnabled:$transformsEnabled,masonry: { gutterWidth: 20} });
		}

		//Gallery Template
		if( $('.dt-sc-portfolio-container').length ) {
			$width = $('.dt-sc-portfolio-container').hasClass("no-space") ? 0 : 20;
			$('.dt-sc-portfolio-container').css({overflow:'hidden'}).isotope({itemSelector : '.column',transformsEnabled:$transformsEnabled,masonry: { gutterWidth: $width } });
		}
		
		
	});
//Smart Resize End

// Window Load Start
	$(window).load(function() {

		//Blog Template
		if( $(".apply-isotope").length ) {
			$(".apply-isotope").isotope({itemSelector : '.column',transformsEnabled:$transformsEnabled,masonry: { gutterWidth: 20} });
		}
		//Blog Template End

		//Portfolio Template
			//Isotope
			var $container = $('.dt-sc-portfolio-container');
			if( $container.length) {
				$width = $container.hasClass("no-space") ? 0 : 20;
				$container.isotope({
					filter: '*',
					masonry: { gutterWidth: $width },
					transformsEnabled:$transformsEnabled,
					animationOptions: { duration: 750, easing: 'linear', queue: false  }
				});
			}//Isotope End

			if($("div.dt-sc-sorting-container").length){
				$("div.dt-sc-sorting-container a").click(function(){
					$("div.dt-sc-sorting-container a").removeClass("active-sort");
					var $width = $container.hasClass("no-space") ? 0 : 20;
					var selector = $(this).attr('data-filter');
					$(this).addClass("active-sort");

					$('.dt-sc-portfolio-container').isotope({
						filter: selector,
						masonry: { gutterWidth: $width },
						transformsEnabled:$transformsEnabled,
						animationOptions: { duration:750, easing: 'linear',  queue: false }
					});
					return false;
				});
			}
		//Portfolio Template End	
	});
// Window Load End

// Mailchimp Form 
	$(document).on("click", ".mailchimp-form > .nl-submit", function(e){

		$this = $(this);
		$key = $this.parent("form").find("[name='mythem_mc_api_kry']").val();
		$email = $this.parent("form").find("[name='mythem_mc_emailid']").val();
		$list_id = $this.parent("form").find("[name='mythem_mc_listid']").val();

		$.ajax({
			url: mytheme_urls.ajaxurl,
			data: { action: 'mailchimp_subscribe', 'key' : $key, 'email' : $email, 'list' : $list_id  },
			success: function (response) {
				$this.parent("form").next('.zn_mailchimp_result').html(response);
				$this.parent("form").next('.zn_mailchimp_result').slideDown('slow');
				if (response.match('success') != null) $this.slideUp('slow');
			}
		});

		e.preventDefault();
	});
// Mailchimp Form End
});