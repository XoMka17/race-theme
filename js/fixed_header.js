$(document).ready(function(){

	scrollFunction();

	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		var header = $("header");
		
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			header.addClass('is-fixed');				
		} else {
			header.removeClass('is-fixed');
		}
	}
});