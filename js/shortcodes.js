jQuery(document).ready(function() {

	if( jQuery("ul.onepage").length ){

		jQuery("ul.onepage").each(function(){

			jQuery(this).onePageNav({
				currentClass: 'current_page_item',
				filter: ':not(.external)',
				scrollOffset:150
			});
		});
	}

	//parallax
	jQuery('.dt-sc-parallax-section').each(function(){
		jQuery(this).bind('inview', function (event, visible){
			if(visible == true) {
				jQuery(this).parallax("50%", 0.3, true);
			} else {
				jQuery(this).css('background-position','');
			}
		});
	});

	//Accordion & Toggle
	jQuery('.dt-sc-toggle').toggle(function(){ jQuery(this).addClass('active'); },function(){ jQuery(this).removeClass('active'); });
	jQuery('.dt-sc-toggle').click(function(){ jQuery(this).next('.dt-sc-toggle-content').slideToggle(); });
	
	jQuery('.dt-sc-toggle-frame-set').each(function(){
		var $this = jQuery(this),
		    $toggle = $this.find('.dt-sc-toggle-accordion');
			
			$toggle.click(function(){
				if( jQuery(this).next().is(':hidden') ) {
					$this.find('.dt-sc-toggle-accordion').removeClass('active').next().slideUp();
					jQuery(this).toggleClass('active').next().slideDown();
				}
				return false;
			});
			
			//Activate First Item always
			$this.find('.dt-sc-toggle-accordion:first').addClass("active");
			$this.find('.dt-sc-toggle-accordion:first').next().slideDown();
  	});//Accordion & Toggle

	//Tooltip
	 if(jQuery(".dt-sc-tooltip-bottom").length){
		 jQuery(".dt-sc-tooltip-bottom").each(function(){ jQuery(this).tipTip({maxWidth: "auto"}); });
	 }
	 
	 if(jQuery(".dt-sc-tooltip-top").length){
		 jQuery(".dt-sc-tooltip-top").each(function(){ jQuery(this).tipTip({maxWidth: "auto",defaultPosition: "top"}); });
	 }
	 
	 if(jQuery(".dt-sc-tooltip-left").length){
		 jQuery(".dt-sc-tooltip-left").each(function(){ jQuery(this).tipTip({maxWidth: "auto",defaultPosition: "left"}); });
	 }
	 
	 if(jQuery(".dt-sc-tooltip-right").length){
		 jQuery(".dt-sc-tooltip-right").each(function(){ jQuery(this).tipTip({maxWidth: "auto",defaultPosition: "right"}); });
	 }//Tooltip End	

	/* Progress Bar */
	 animateSkillBars();
	 animateSection();
	 jQuery(window).scroll(function(){ 
	 	animateSkillBars();
	 	animateSection();
	 });

	 function animateSection(){
	 	 var applyViewPort = ( jQuery("html").hasClass('csstransforms') ) ? ":in-viewport" : "";
	 	 jQuery('.animate'+applyViewPort).each(function(){
	 	 	var $this = jQuery(this),
	 	 		$animation = ( $this.data("animation") !== undefined ) ? $this.data("animation") : "slideUp";
	 	 	var	$delay = ( $this.data("delay") !== undefined ) ? $this.data("delay") : 300;

	 	 	if( !$this.hasClass($animation) ){
	 	 		setTimeout(function() { $this.addClass($animation);	},$delay);
	 	 	}
	 	 });
	 }
	 
	 function animateSkillBars(){
		 var applyViewPort = ( jQuery("html").hasClass('csstransforms') ) ? ":in-viewport" : "";
		 
		 jQuery('.dt-sc-progress'+applyViewPort).each(function(){
			 var progressBar = jQuery(this),
			 	 progressValue = progressBar.find('.dt-sc-bar').attr('data-value');
				 
				 if (!progressBar.hasClass('animated')) {
					 	progressBar.addClass('animated');
						progressBar.find('.dt-sc-bar').animate({width: progressValue + "%"},600,function(){ progressBar.find('.dt-sc-bar-text').fadeIn(400); });
				 }
    	 });
  	}/* Progress Bar End */

  //Divider Scroll to top
  jQuery("a.scrollTop").each(function(){
    jQuery(this).click(function(e){
      jQuery("html, body").animate({ scrollTop: 0 }, 600);
      e.preventDefault();
    });
  });//Divider Scroll to top end

  // Tabs Shortcodes
  "use strict";
  if(jQuery('ul.dt-sc-tabs').length > 0) {
    jQuery('ul.dt-sc-tabs').tabs('> .dt-sc-tabs-content');
  }
  
  if(jQuery('ul.dt-sc-tabs-frame').length > 0){
    jQuery('ul.dt-sc-tabs-frame').each(function(){
		jQuery(this).tabs('> .dt-sc-tabs-frame-content');
	});
  }

  if(jQuery('ul.property-search-tabs-frame').length > 0){
    jQuery('ul.property-search-tabs-frame').tabs('> .property-search-tabs-frame-content');
  }
  
  if(jQuery('.dt-sc-tabs-vertical-frame').length > 0){
    
    jQuery('.dt-sc-tabs-vertical-frame').tabs('> .dt-sc-tabs-vertical-frame-content');
    
    jQuery('.dt-sc-tabs-vertical-frame').each(function(){
      jQuery(this).find("li:first").addClass('first').addClass('current');
      jQuery(this).find("li:last").addClass('last');
    });
    
    jQuery('.dt-sc-tabs-vertical-frame li').click(function(){
      jQuery(this).parent().children().removeClass('current');
      jQuery(this).addClass('current');
    });
    
  }
  
  
  /*Tabs Shortcode Ends*/
  
  //Donutchart
  jQuery(".dt-sc-donutchart").each(function(){
	 var $this = jQuery(this);
	 var $bgColor =  ( $this.data("bgcolor") !== undefined ) ? $this.data("bgcolor") : "#5D18D6";
	 var $fgColor =  ( $this.data("fgcolor") !== undefined ) ? $this.data("fgcolor") : "#000000";
	 var $size = ( $this.data("size") !== undefined ) ? $this.data("size") : "100";
	 
	 $this.donutchart({'size': $size, 'fgColor': $fgColor, 'bgColor': $bgColor , 'donutwidth' : 5 });
	 $this.donutchart('animate');
	 
 });//Donutchart Shortcode Ends
  
  
  jQuery(window).load(function() {

  	   if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
  	   	 jQuery(".dt-sc-fullwidth-video-section").each(function(){
  	   	 	jQuery(this).find(".dt-sc-mobile-image-container").show();
  	   	 	jQuery(this).find(".dt-sc-video").remove();
  	   	 });
  	   }
	  
	  //Testimonial Carousel
	  if( jQuery('.dt-sc-testimonial-carousel').length ) {
		  jQuery('.dt-sc-testimonial-carousel').each(function(){
			  var pagger = jQuery(this).parents(".dt-sc-testimonial-carousel-wrapper").find("div.carousel-arrows"),
			      next = pagger.find("a.testimonial-next"),
				  prev = pagger.find("a.testimonial-prev") ;
			  		
			  jQuery(this).carouFredSel({
				  responsive:true,
				  auto:false,
				  width:'100%',
				  height: 'variable',
				  scroll:1,
				  items:{ 
				  	width:572,
				  	height: 'auto',
				  	visible: {min: 1,max: 1} 
				  },
				  prev:prev,
				  next:next
			  });
		  });
		}

	// Clients Carousel
	if( jQuery('.dt-sc-sponsor-carousel').length) {
		jQuery('.dt-sc-sponsor-carousel').each(function(){
			  var pagger = jQuery(this).parents(".dt-sc-sponsor-carousel-wrapper").find("div.carousel-arrows"),
			      next = pagger.find("a.sponsor-next"),
				  prev = pagger.find("a.sponsor-prev"),
				  $min = jQuery(this).parents(".dt-sc-sponsor-carousel-wrapper").data('min'),
				  $max = jQuery(this).parents(".dt-sc-sponsor-carousel-wrapper").data('max'),
				  $width = jQuery(this).parents(".dt-sc-sponsor-carousel-wrapper").data('width');

			jQuery(this).carouFredSel({
				  responsive:true,
				  auto:false,
				  width:'100%',
				  height: 'variable',
				  scroll:1,
				  items:{ 
				  	width:$width,
				  	height: 'variable',
				  	visible: {min: $min,max: $max} 
				  },
				  prev:prev,
				  next:next
			});
		});
	}// Clients Carousel End

	if( jQuery('.flexslider').length ){
		jQuery('.flexslider').each(function(){
			$slider = jQuery(this);

			$slider.flexslider({
				animation: $slider.data('animation'),
				easing: $slider.data('easing'),
				direction: $slider.data('direction'),
				slideshow: $slider.data('slideshow'),
				slideshowSpeed:$slider.data('slideshowspeed'),
				animationSpeed: $slider.data('animationspeed'),
				pauseOnHover:$slider.data('pauseonhover'),
				randomize:$slider.data('randomize'),
				reverse:$slider.data('reverse'),
				controlNav: "",
				video:true,
				smoothHeight: true
			});
		});
	}	
  });
});