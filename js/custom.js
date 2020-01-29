// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/space.jpg", 
	 		 "images/plage.jpg",
			 "images/montagne2.jpg",
			 "images/montagne.jpg",
			 "images/forest.jpg",
			 "images/campagne.jpg",
			 "images/bambou.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})