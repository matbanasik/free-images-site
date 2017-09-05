$(document).ready(function(){
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.navbar-hidden').fadeIn();
		} else {
			$('.navbar-hidden').fadeOut();
		}
	});
	
});